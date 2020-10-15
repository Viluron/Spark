import { CONSTANTS } from '../../constants/discord.ts';
import type Client from '../Client.ts';

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

	public async getChannel(id: string) {
		const response = await this.get(`/channels/${id}`);

		return response;
	}
}
