import type Channel from '../classes/Channel.ts';
import type User from '../classes/User.ts';
import type { CHANNELTYPES, PERMISSION_OVERWRITE_TYPE } from '../constants/discord.ts';

export interface GatewayPayload {
	op: number;
	d: any;
	s: number;
	t: string;
}

export interface GuildCreatePayload {
	id: string;
	name: string;
	icon: string;
	splash: string;
	discovery_splash: string;
	owner?: boolean;
	owner_id: string;
	permissions?: string;
	region: string;
	afk_channel_id: string;
	afk_timeout: number;
	widget_enabled?: boolean;
	widget_channel_id?: string;
	verification_level: number;
	default_message_notifications: number;
	explicit_content_filter: number;
	roles: object[];
	emojis: object[];
	features: string[];
	mfa_level: number;
	application_id: string;
	system_channel_id: string;
	system_channel_flags: number;
	rules_channel_id: string;
	joined_at?: string;
	large?: boolean;
	unavailable?: boolean;
	member_count?: number;
	voice_states?: object[];
	members?: object[];
	channels?: ChannelPayload[];
	presences?: object[];
	max_presences?: number;
	max_members?: number;
	vanity_url_code: string;
	description: string;
	banner: string;
	premium_tier: number;
	premium_subscription_count?: number;
	preferred_locale: string;
	public_updates_channel_id: string;
	max_video_channel_users?: number;
	approximate_member_count?: number;
	approximate_presence_count?: number;
}

export interface MessageCreatePayload {
	id: string;
	channel_id: string;
	guild_id?: string;
	author: UserPaylaod;
	member?: object; // TODO:
	content: string;
	timestamp: string;
	edited_timestamp: string | null;
	tts: boolean;
	mention_everyone: boolean;
	mentions: UserPaylaod[];
	mention_roles: string[];
	mention_channels: ChannelPayload[];
	attachments: object[]; // TODO:
	embeds: object[]; // TODO:
	reactions?: object[]; // TODO:
	nonce?: string | number;
	pinned: boolean;
	webhook_id?: string;
	type: number;
	activity?: object; // TODO:
	application?: object; // TODO:
	message_reference?: object; // TODO:
	flags?: number;
}

export interface ChannelPayload {
	id: string;
	type: CHANNELTYPES;
	guild_id?: string;
	position?: number;
	permission_overwrites?: PermissionOverwritesPayload[];
	name?: string;
	topic?: string;
	nsfw?: boolean;
	last_message_id?: string;
	bitrate?: number;
	user_limit?: number;
	rate_limit_per_user?: number;
	recipients?: User[];
	icon?: string;
	owner_id?: string;
	application_id?: string;
	parent_id?: string;
	last_pin_timestamp: string;
}

export interface PermissionOverwritesPayload {
	id: string;
	type: PERMISSION_OVERWRITE_TYPE;
	allow: string;
	deny: string;
}

export interface UserPaylaod {
	id: string;
	username: string;
	discriminator: string;
	avatar: string;
	bot: boolean;
	system: boolean;
	mfaEnabled: boolean;
	locale: string;
	verified: boolean;
	email: string;
	flags: number;
	premiumType: number;
	publicFlags: number;
}
