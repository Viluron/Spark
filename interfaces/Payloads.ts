import type Channel from '../classes/Channel.ts';

export interface GatewayPayload {
	op: number;
	d: any;
	s: number;
	t: string;
}

export interface GuildCreate {
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
	channels?: Channel[];
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
