import type Client from '../client/Client.ts';
import Base from './Base.ts';

export default class User extends Base {
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

	constructor(
		client: Client,
		id: string,
		username: string,
		discriminator: string,
		avatar: string,
		bot: boolean,
		system: boolean,
		mfaEnabled: boolean,
		locale: string,
		verified: boolean,
		email: string,
		flags: number,
		premiumType: number,
		publicFlags: number
	) {
		super(client);

		this._client = client;
		this._id = id;
		this._username = username;
		this._avatar = avatar;
		this._discriminator = discriminator;
		this._bot = bot;
		this._system = system;
		this._mfaEnabled = mfaEnabled;
		this._locale = locale;
		this._verified = verified;
		this._email = email;
		this._flags = flags;
		this._premiumType = premiumType;
		this._publicFlags = publicFlags;
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
