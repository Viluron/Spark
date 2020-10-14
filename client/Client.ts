import EventEmitter from 'https://deno.land/std@0.74.0/node/events.ts';
import Collection from '../classes/Collection.ts';
import type Guild from '../classes/Guild.ts';
import type User from '../classes/User.ts';
import WebSocketManager from './ws/WebSocketManager.ts';

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

	login(token: string) {
		this._token = token;
		this._socket.connect(token);
	}
}
