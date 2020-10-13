import type Client from '../client/Client.ts';
import Base from './Base.ts';

export default class Channel extends Base {
	constructor(client: Client, private id: string) {
		super(client);
	}
}
