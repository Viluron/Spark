import type Client from '../Client.ts';

export default class RequestManager {
	private _client: Client;

	constructor(client: Client) {
		this._client = client;
	}
}
