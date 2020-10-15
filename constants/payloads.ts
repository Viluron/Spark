import { CONSTANTS, INTENDS, OPCODES } from './discord.ts';

export const Identify = {
	op: OPCODES.IDENTIFY,
	d: {
		token: '',
		intents: 0,
		properties: {
			$os: 'linux',
			$browser: 'Spark',
			$device: 'Spark'
		}
	}
};

export const Heartbeat = {
	op: OPCODES.HEARTBEAT,
	d: null
};
