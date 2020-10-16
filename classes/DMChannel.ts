import Client from '../client/Client.ts';
import { ChannelPayload, SendMessagePayload } from '../interfaces/Payloads.ts';
import Channel from './Channel.ts';
import Message from './Message.ts';
import User from './User.ts';

export default class DMChannel extends Channel {
	private _lastMessageId?: string;
	private _lastPinTimestamp?: string;
	private _recipient: User;

	constructor(client: Client, p: ChannelPayload) {
		super(client, p);

		this._lastMessageId = p.last_message_id;
		this._lastPinTimestamp = p.last_pin_timestamp;
		this._recipient = new User(client, p.recipients![0]);
	}

	get lastMessageId() {
		return this._lastMessageId;
	}

	get lastPinTimestamp() {
		return this._lastPinTimestamp;
	}

	get recipient() {
		return this._recipient;
	}

	public async sendMessage(content: string | SendMessagePayload): Promise<Message> {
		const response = await this._request.sendMessage(this, content);
		return new Message(this._client, response, this);
	}
}
