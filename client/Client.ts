import EventEmitter from 'https://deno.land/std@0.74.0/node/events.ts';
import type User from '../classes/User.ts';
import WebSocketManager from './ws/WebSocketManager.ts';

export default class Client extends EventEmitter {
	private _socket: WebSocketManager = new WebSocketManager(this);
	private _token!: string;
	private _user!: User;

	set user(user: User) {
		this._user = user;
	}

	get token() {
		return this._token;
	}

	login(token: string) {
		this._token = token;
		this._socket.connect(token);
	}
}
