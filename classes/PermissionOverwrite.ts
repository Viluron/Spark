import type Client from '../client/Client.ts';
import type { PermissionOverwritesPayload } from '../interfaces/Payloads.ts';
import Base from './Base.ts';

export default class PermissionOverwrite extends Base {
	private _id: string;
	private _type: number;
	private _allow: string;
	private _deny: string;

	constructor(client: Client, p: PermissionOverwritesPayload) {
		super(client);

		this._id = p.id;
		this._type = p.type;
		this._allow = p.allow;
		this._deny = p.deny;
	}

	/**
	 * Getter id
	 * @return {string}
	 */
	public get id(): string {
		return this._id;
	}

	/**
	 * Getter type
	 * @return {number}
	 */
	public get type(): number {
		return this._type;
	}

	/**
	 * Getter allow
	 * @return {string}
	 */
	public get allow(): string {
		return this._allow;
	}

	/**
	 * Getter deny
	 * @return {string}
	 */
	public get deny(): string {
		return this._deny;
	}
}
