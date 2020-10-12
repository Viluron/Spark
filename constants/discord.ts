export enum CONSTANTS {
	GATEWAY = 'wss://gateway.discord.gg/?v=8&encoding=json',
	API = 'https://discord.com/api/v8'
}

export enum OPCODES {
	DISPATCH = 0,
	HEARTBEAT = 1,
	IDENTIFY = 2,
	PRESENCE_UPDATE = 3,
	VOICE_STATE_UPDATE = 4,
	RESUME = 6,
	RECONNECT = 7,
	REQUEST_GUILD_MEMBERS = 8,
	INVALID_SESSION = 9,
	HELLO = 10,
	HEARTBEAT_ACK = 11
}

export enum CHANNELTYPES {
	GUILD_TEXT = 0,
	DM = 1,
	GUILD_VOICE = 2,
	GROUP_DM = 3,
	GUILD_CATEGORY = 4,
	GUILD_NEWS = 5,
	GUILD_STORE = 6
}
