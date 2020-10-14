import type Client from '../client/Client.ts';
import type { ChannelPayload, PermissionOverwritesPayload } from '../interfaces/Payloads.ts';
import Channel from './Channel.ts';
import Collection from './Collection.ts';
import type Guild from './Guild.ts';
import PermissionOverwrite from './PermissionOverwrite.ts';

export default class GuildChannel extends Channel {
	private _guild: Guild;
	private _position: number;
	private _permissionOverwrites: Collection<string, PermissionOverwrite> = new Collection([]);
	private _name: string;
	private _parentId?: string;

	constructor(client: Client, guild: Guild, payload: ChannelPayload) {
		super(client, payload);
		this._guild = guild;
		this._position = payload.position!;
		this._name = payload.name!;
		this._parentId = payload.parent_id;
		this._permissionOverwrites = this.generateOverwrites(payload.permission_overwrites);
	}

	public get guild(): Guild {
		return this._guild;
	}

	public get position(): number {
		return this._position;
	}

	public get name(): string {
		return this._name;
	}

	public get parentId(): string | null {
		return this._parentId || null;
	}

	public get permissionOverwrites(): Collection<string, PermissionOverwrite> {
		return this._permissionOverwrites;
	}

	private generateOverwrites(p: PermissionOverwritesPayload[] | undefined): Collection<string, PermissionOverwrite> {
		const overwrites: Collection<string, PermissionOverwrite> = new Collection([]);

		if (!p) return overwrites;

		p.forEach((overwrite: PermissionOverwritesPayload) =>
			overwrites.set(overwrite.id, new PermissionOverwrite(this.client, overwrite))
		);

		return overwrites;
	}
}
