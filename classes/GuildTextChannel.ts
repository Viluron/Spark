import { Client } from '../client/Client.ts';
import { ChannelPayload, SendMessagePayload } from '../interfaces/Payloads.ts';
import type { Guild } from './Guild.ts';
import { GuildChannel } from './GuildChannel.ts';

export class GuildTextChannel extends GuildChannel {
	private _topic?: string;
	private _nsfw?: boolean;
	private _lastMessageId?: string;
	private _lastPinTimestamp?: string;

	constructor(client: Client, guild: Guild, payload: ChannelPayload) {
		super(client, guild, payload);
		this._topic = payload.topic;
		this._nsfw = payload.nsfw;
		this._lastMessageId = payload.last_message_id;
		this._lastPinTimestamp = payload.last_pin_timestamp;
	}

	public get topic(): string | null {
		return this._topic || null;
	}

	public get nsfw(): boolean {
		return this._nsfw || false;
	}

	public get lastMessageId(): string | null {
		return this._lastMessageId || null;
	}

	public get lastPinTimestamp(): string | null {
		return this._lastPinTimestamp || null;
	}

	public async sendMessage(content: string | SendMessagePayload) /*: Promise<Message>*/ {
		await this._request.sendMessage(this, content);
	}
}
