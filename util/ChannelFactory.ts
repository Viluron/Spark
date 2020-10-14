import type Channel from '../classes/Channel.ts';
import type Guild from '../classes/Guild.ts';
import GuildTextChannel from '../classes/GuildTextChannel.ts';
import GuildVoiceChannel from '../classes/GuildVoiceChannel.ts';
import type Client from '../client/Client.ts';
import { CHANNELTYPES } from '../constants/discord.ts';
import type { ChannelPayload } from '../interfaces/Payloads.ts';

export default class ChannelFactory {
	public static createChannel(client: Client, guild: Guild, payload: ChannelPayload): Channel | null {
		switch (payload.type) {
			case CHANNELTYPES.GUILD_VOICE:
				return new GuildVoiceChannel(client, guild, payload);
				break;
			case CHANNELTYPES.GUILD_TEXT:
				return new GuildTextChannel(client, guild, payload);
			default:
				return null;
		}
	}
}
