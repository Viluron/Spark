import type { Client } from '../client/Client.ts';
import type { UserPaylaod } from '../interfaces/Payloads.ts';
import { Base } from './Base.ts';

export class User extends Base {
	protected _client: Client;
	private _id?: string;
	private _username?: string;
	private _discriminator?: string;
	private _avatar?: string;
	private _bot?: boolean = false;
	private _system?: boolean;
	private _mfaEnabled?: boolean;
	private _locale?: string;
	private _verified?: boolean;
	private _email?: string;
	private _flags?: number;
	private _premiumType?: number;
	private _publicFlags?: number;

	constructor(client: Client, p: UserPaylaod) {
		super(client);

		this._client = client;
		this._id = p.id;
		this._username = p.username;
		this._avatar = p.avatar;
		this._discriminator = p.discriminator;
		this._bot = p.bot;
		this._system = p.system;
		this._mfaEnabled = p.mfaEnabled;
		this._locale = p.locale;
		this._verified = p.verified;
		this._email = p.email;
		this._flags = p.flags;
		this._premiumType = p.premiumType;
		this._publicFlags = p.publicFlags;
	}

	get id() {
		return this._id;
	}

	get username() {
		return this._username;
	}
	get avatar() {
		return this._avatar;
	}
	get discriminator() {
		return this._discriminator;
	}
	get bot() {
		return this._bot;
	}
	get system() {
		return this._system;
	}
	get mfaEnabled() {
		return this._mfaEnabled;
	}
	get locale() {
		return this._locale;
	}
	get verified() {
		return this._verified;
	}
	get email() {
		return this._email;
	}
	get flags() {
		return this._flags;
	}
	get premiumType() {
		return this._premiumType;
	}
	get publicFlags() {
		return this._publicFlags;
	}
}
