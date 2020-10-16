import { Message } from '../classes/Message.ts';
import { User } from '../classes/User.ts';
import { EventHandler } from '../client/Client.ts';

export interface CommandInvoke {
	invoke: string;
	commandArgs: string[];
	caller: User;
}

class Parser {
	private _commandPrefix!: string;
	private _reactToBots: boolean;

	constructor(commandPrefix: string, reactToBots: boolean = false) {
		this._commandPrefix = commandPrefix;
		this._reactToBots = reactToBots;
	}

	get commandPrefix() {
		return this._commandPrefix;
	}

	set commandPrefix(prefix: string) {
		this._commandPrefix = prefix;
	}

	get reactToBots() {
		return this._reactToBots;
	}

	set reactToBots(reactToBots: boolean) {
		this._reactToBots = reactToBots;
	}

	public isCommand(message: Message) {
		if (!this._commandPrefix) throw new Error('[CommandParser] No command prefix set!');
		if (!this._reactToBots && message.author.bot) return false;

		const command = this.parse(message);

		if (command.invoke.startsWith(this.commandPrefix)) return true;
		else return false;
	}

	public parse(message: Message): CommandInvoke {
		const args = message.content.split(' ');
		const invoke = args[0];
		const commandArgs = args.slice(1, args.length);

		return { invoke, commandArgs, caller: message.author };
	}
}

export function CommandParser(prefix: string, reactToBots?: boolean) {
	const parser = new Parser(prefix, reactToBots);
	const handler: EventHandler = {
		event: 'message',
		handler(message: Message) {
			if (parser.isCommand(message)) {
				const command = parser.parse(message);

				message.client.emit('command', command);
			}
		}
	};
	return handler;
}
