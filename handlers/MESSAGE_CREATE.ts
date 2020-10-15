import Channel from '../classes/Channel.ts';
import Message from '../classes/Message.ts';
import Client from '../client/Client.ts';
import RequestManager from '../client/http/RequestManager.ts';
import { ChannelPayload, MessageCreatePayload } from '../interfaces/Payloads.ts';
import ChannelFactory from '../util/ChannelFactory.ts';

export default async function (client: Client, payload: MessageCreatePayload) {
	let channel: Channel | null = null;
	const channelId = payload.channel_id;

	if (payload.guild_id) {
		const guild = client.guilds.findById(payload.guild_id);
		if (guild) {
			channel = guild.channels.findById(channelId);
		}
	}

	if (!channel) {
		const request = new RequestManager(client);
		const response: ChannelPayload = await request.getChannel(channelId);

		if (response) {
			channel = ChannelFactory.createChannel(client, response);
		}
	}

	if (!channel) throw new Error('[MESSAGE_CREATE] Could not set message channel');

	const message = new Message(client, payload, channel);

	client.emit('message', message);
}
