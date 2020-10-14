import Guild from '../classes/Guild.ts';
import type Client from '../client/Client.ts';
import type { GuildCreatePayload } from '../interfaces/Payloads.ts';

export default function (client: Client, payload: GuildCreatePayload) {
	const createdGuild = new Guild(client, payload);
	client.guilds.set(createdGuild.id, createdGuild);
}
