import type { Client } from '../client/Client.ts';
import type { ChannelPayload, PermissionOverwritesPayload } from '../interfaces/Payloads.ts';
import { Collection } from '../util/Collection.ts';
import type { Guild } from './Guild.ts';
import { GuildChannel } from './GuildChannel.ts';
import { PermissionOverwrite } from './PermissionOverwrite.ts';

export class GuildVoiceChannel extends GuildChannel {
	private _bitrate: number;
	private _userLimit: number;
	private _rateLimitPerUser: number;

	constructor(client: Client, guild: Guild, p: ChannelPayload) {
		super(client, guild, p);

		this._bitrate = p.bitrate!;
		this._userLimit = p.user_limit || 0;
		this._rateLimitPerUser = p.rate_limit_per_user!;
	}

	/**
	 * Getter bitrate
	 * @return {number}
	 */
	public get bitrate(): number {
		return this._bitrate;
	}

	/**
	 * Getter userLimit
	 * @return {number}
	 */
	public get userLimit(): number {
		return this._userLimit;
	}

	/**
	 * Getter rateLimitPerUser
	 * @return {number}
	 */
	public get rateLimitPerUser(): number {
		return this._rateLimitPerUser;
	}

	createPermissionOverwrites(payload: PermissionOverwritesPayload[]) {
		const overwrites: Collection<string, PermissionOverwrite> = new Collection([]);
		payload.forEach((overwrite: PermissionOverwritesPayload) =>
			overwrites.set(overwrite.id, new PermissionOverwrite(this.client, overwrite))
		);

		return overwrites;
	}
}
