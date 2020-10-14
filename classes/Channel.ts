import type Client from '../client/Client.ts';
import Base from './Base.ts';
import type { ChannelPayload } from '../interfaces/Payloads.ts';
import type { CHANNELTYPES } from '../constants/discord.ts';

export default class Channel extends Base {
	private _id: string;
	private _type: CHANNELTYPES;

	constructor(client: Client, p: ChannelPayload) {
		super(client);

		this._id = p.id;
		this._type = p.type;
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
	 * @return {CHANNELTYPES}
	 */
	public get type(): CHANNELTYPES {
		return this._type;
	}
}
