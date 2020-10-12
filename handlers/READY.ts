import User from '../classes/User.ts';
import type Client from '../client/Client.ts';

export default function (client: Client, payload: any) {
	const user = payload.user;
	client.user = new User(
		client,
		user.id,
		user.username,
		user.discriminator,
		user.avatar,
		user.bot,
		user.system,
		user.mfa_enabled,
		user.locale,
		user.verified,
		user.email,
		user.flags,
		user.premium_type,
		user.public_flags
	);

	client.emit('ready');
}
