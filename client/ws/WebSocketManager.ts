import { CLOSECODES, CONSTANTS, INTENDS, OPCODES } from '../../constants/discord.ts';
import { Identify, Heartbeat } from '../../constants/payloads.ts';

import type { GatewayPayload } from '../../interfaces/Payloads.ts';
import type { Client } from '../Client.ts';

export class WebSocketManager {
	private _socket!: WebSocket;
	private _interval: number = 0;
	private _token!: string;
	private _client: Client;
	private _intends?: number;

	constructor(client: Client) {
		this._client = client;
	}

	connect(token: string, intends?: number): void {
		this._token = token;
		this._intends = intends;

		if (this._socket) return;

		this._socket = new WebSocket(CONSTANTS.GATEWAY);

		this._socket.onmessage = this.handleMessage.bind(this);
		this._socket.onclose = this.handleClose;

		this._socket.onerror = error => {
			console.log('[WebSocketManager] ' + error);
		};
	}

	private async handleMessage(message: any) {
		const payload: GatewayPayload = JSON.parse(message.data.toString());
		const { t: event, op: opCode } = payload;

		await this.handleOpCodes(opCode, payload.d);
		this.handleEvent(event, payload.d);
	}

	private async handleOpCodes(opCode: number, payload: any) {
		switch (opCode) {
			case OPCODES.HELLO:
				const heartbeatInterval = payload.heartbeat_interval;

				this._interval = this.startHeartbeating(heartbeatInterval);

				await this.identify();
				break;
		}
	}

	private async handleEvent(eventName: string, payload: GatewayPayload) {
		if (!eventName) return;

		try {
			const { handler } = await import(`../../handlers/${eventName}.ts`);
			handler(this._client, payload);
		} catch (error) {
			console.log(error);
		}
	}

	private handleClose(event: CloseEvent) {
		const close = (closeText: string) => console.log('[WebSocketManager] Connection closed - ' + closeText);
		let closeText: string;

		switch (event.code) {
			case CLOSECODES.UNKNOWN_OPCODE:
				closeText = 'Unknown opcode';
				break;
			case CLOSECODES.DECODE_ERROR:
				closeText = 'Error while decoding';
				break;
			case CLOSECODES.NOT_AUTHENTICATED:
				closeText = 'Not authenticated';
				break;
			case CLOSECODES.AUTHENTICATION_FAILED:
				closeText = 'Authentication failed';
				break;
			case CLOSECODES.ALREADY_AUTHENTICATED:
				closeText = 'Already authenticated';
				break;
			case CLOSECODES.INVALID_SEQUENCE:
				closeText = 'Invalid resume sequence. Please reconnect and start new session';
				break;
			case CLOSECODES.RATE_LIMIT:
				closeText = 'Rate limit exceeded';
				break;
			case CLOSECODES.SESSION_TIMEOUT:
				closeText = 'Session timed out';
				break;
			case CLOSECODES.INVALID_SHARD:
				closeText = 'Invalid shard';
				break;
			case CLOSECODES.SHARDING_REQUIRED:
				closeText = 'Shard required';
				break;
			case CLOSECODES.INVALID_API_VERSION:
				closeText = 'Invalid API Version';
				break;
			case CLOSECODES.INVALID_INTENDS:
				closeText = 'Invalid intend(s)';
				break;
			case CLOSECODES.DISALLOWED_INTENDS:
				closeText = 'Disallowed intend(s). Check allowed bot intends';
				break;
			default:
				closeText = 'Unknown error';
		}

		clearInterval(this._interval);

		return close(closeText);
	}

	private startHeartbeating(ms: number) {
		return setInterval(() => this._socket.send(JSON.stringify(Heartbeat)), ms);
	}

	private identify() {
		Identify.d.token = this._token;
		Identify.d.intents = this._intends || INTENDS.ALL;

		return this._socket.send(JSON.stringify(Identify));
	}
}
