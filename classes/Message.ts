import Client from '../client/Client.ts';
import { ChannelPayload, MessageCreatePayload } from '../interfaces/Payloads.ts';
import Base from './Base.ts';
import Channel from './Channel.ts';
import Guild from './Guild.ts';
import GuildTextChannel from './GuildTextChannel.ts';
import User from './User.ts';

export default class Message extends Base {
	private _id: string;
	private _channelId: string;
	private _channel: Channel; // TODO: Set Channel Object in constructor
	private _guildId?: string;
	private _guild?: Guild;
	private _author: User;
	// TODO: private _member: GuildMember;
	private _content: string;
	private _timestamp: Date;
	private _editedTimestamp?: Date | null;
	private _tts: boolean;
	private _mentionEveryone: boolean;
	// TODO: private _mentionRoles: GuildRole[];
	private _mentionChannels: GuildTextChannel[];
	// TODO: private _attachments: Attachment[];
	// TODO: private _embeds: MessageEmbed[];
	// TODO: private _reactions?: MessageReaction[];
	private _nonce?: string | number;
	private _pinned: boolean;
	private _webhookId?: string;
	private _type: number;
	// TODO: private _activity?: MessageActivity;
	// TODO: private _application?: Application;
	// TODO: private _messageReference?: MessageReference;
	private _flags?: number;

	constructor(client: Client, p: MessageCreatePayload) {
		super(client);

		this._id = p.id;
		this._channelId = p.channel_id;
		this._guildId = p.guild_id;
		this._author = new User(client, p.author);
		this._content = p.content;
		this._timestamp = new Date(p.timestamp);
		this._editedTimestamp = p.edited_timestamp ? new Date(p.edited_timestamp) : null;
		this._tts = p.tts;
		this._mentionEveryone = p.mention_everyone;
		this._nonce = p.nonce;
		this._pinned = p.pinned;
		this._type = p.type;
		this._flags = p.flags;
		this._mentionChannels = [];

		if (this._guildId) {
			const guild = this.client.guilds.findById(this._guildId);

			if (guild) {
				this._guild = guild;
				const mentionedChannels: GuildTextChannel[] = [];

				p.mention_channels.forEach((channel: ChannelPayload) =>
					mentionedChannels.push(new GuildTextChannel(client, guild, channel))
				);
				this._mentionChannels = mentionedChannels;
			}
		}
	}
}
