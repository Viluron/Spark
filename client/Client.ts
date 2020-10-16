import EventEmitter, { GenericFunction } from 'https://deno.land/std@0.74.0/node/events.ts';
import Collection from '../util/Collection.ts';
import type Guild from '../classes/Guild.ts';
import type User from '../classes/User.ts';
import WebSocketManager from './ws/WebSocketManager.ts';
import { INTENDS } from '../constants/discord.ts';

export interface EventHandler {
	event: string;
	handler: GenericFunction;
}

export default class Client extends EventEmitter {
	private _socket: WebSocketManager = new WebSocketManager(this);
	private _token!: string;
	private _user!: User;
	private _guilds: Collection<string, Guild> = new Collection([]);

	set user(user: User) {
		this._user = user;
	}

	set guilds(guilds: Collection<string, Guild>) {
		this._guilds = guilds;
	}

	get token() {
		return this._token;
	}

	get user() {
		return this.user;
	}

	get guilds() {
		return this._guilds;
	}

	use(handler: EventHandler) {
		this.on(handler.event, handler.handler);
	}

	login(token: string, intends?: INTENDS[] | INTENDS) {
		this._token = token;

		if (Array.isArray(intends)) {
			let sum = 0;

			intends.forEach((intend: number) => (sum += intend));

			intends = sum;
		}

		this._socket.connect(token, intends);
	}
}
