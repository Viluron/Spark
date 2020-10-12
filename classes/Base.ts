import type Client from '../client/Client.ts';
import RequestManager from '../client/http/RequestManager.ts';

export default class Base {
	protected _client!: Client;
	protected _request: RequestManager;

	constructor(client: Client) {
		this._client = client;
		this._request = new RequestManager(client);
	}

	get client() {
		return this._client;
	}
}
