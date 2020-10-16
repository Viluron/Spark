import { CONSTANTS } from '../../constants/discord.ts';
import { MessageCreatePayload, SendMessagePayload } from '../../interfaces/Payloads.ts';
import Message from '../../classes/Message.ts';
import type Client from '../Client.ts';
import type Channel from '../../classes/Channel.ts';

export default class RequestManager {
	private _client: Client;
	private _headers = {};

	constructor(client: Client) {
		this._client = client;
		this._headers = { Authorization: 'Bot ' + client.token, 'Content-Type': 'application/json' };
	}

	public async get(url: string) {
		const response = await fetch(`${CONSTANTS.API}${url}`, {
			headers: this._headers
		}).then(response => response.json());

		return response;
	}

	public async post(url: string, body: object) {
		return await fetch(`${CONSTANTS.API}${url}`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(body)
		}).then(r => r.json());
	}

	public async getChannel(id: string) {
		const response = await this.get(`/channels/${id}`);

		return response;
	}

	public async sendMessage(channel: Channel, content: string | SendMessagePayload): Promise<MessageCreatePayload> {
		let messageContent: SendMessagePayload;
		if (typeof content === 'string') {
			messageContent = {
				allowed_mentions: {},
				embed: {},
				content: content,
				file: '',
				nonce: '',
				tts: false,
				payload_json: ''
			};

			messageContent.payload_json = JSON.stringify(messageContent);
		} else {
			messageContent = content;
		}

		return await this.post(`/channels/${channel.id}/messages`, messageContent);
	}
}
