import User from '../classes/User.ts';
import type Client from '../client/Client.ts';
import type { UserPaylaod } from '../interfaces/Payloads.ts';

export default function (client: Client, payload: any) {
	const user: UserPaylaod = payload.user;
	client.user = new User(client, user);

	client.emit('ready');
}
