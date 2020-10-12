import { CONSTANTS, OPCODES } from '../../constants/discord.ts';
import { Identify, Heartbeat } from '../../constants/payloads.ts';

import type { GatewayPayload } from '../../interfaces/Payloads.ts';
import type Client from '../Client.ts';

export default class WebSocketManager {
	private _socket!: WebSocket;
	private _interval: number = 0;
	private _token!: string;
	private _client: Client;

	constructor(client: Client) {
		this._client = client;
	}

	connect(token: string): void {
		this._token = token;

		if (this._socket) return;

		this._socket = new WebSocket(CONSTANTS.GATEWAY);

		this._socket.onmessage = this.handleMessage.bind(this);
		this._socket.onclose = event => {
			console.log('[WebSocketManager] Socket closed with code ' + event.code);
		};

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
			const { default: eventHandler } = await import(`../../handlers/${eventName}.ts`);
			eventHandler(this._client, payload);
		} catch (error) {
			console.log(error);
		}
	}

	private startHeartbeating(ms: number) {
		return setInterval(() => this._socket.send(JSON.stringify(Heartbeat)), ms);
	}

	private identify() {
		Identify.d.token = this._token;
		return this._socket.send(JSON.stringify(Identify));
	}
}
