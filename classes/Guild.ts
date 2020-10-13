import type Client from '../client/Client.ts';
import type { GuildCreate } from '../interfaces/Payloads.ts';
import Base from './Base.ts';
import Channel from './Channel.ts';
import Collection from './Collection.ts';

export default class Guild extends Base {
	private _id: string;
	private _name: string;
	private _icon: string;
	private _splash: string;
	private _discoverySplash: string;
	private _owner?: boolean;
	private _ownerId: string;
	private _permissions?: string;
	private _region: string;
	private _afkChannelId: string;
	private _afkTimeout: number;
	private _widgetEnabled?: boolean;
	private _widgetChannelId?: string;
	private _verificationLevel: number;
	private _defaultMessageNotifications: number;
	private _explicitContentFilter: number;
	private _roles: object[];
	private _emojis: object[];
	private _features: string[];
	private _mfaLevel: number;
	private _applicationId: string;
	private _systemChannelId: string;
	private _systemChannelFlags: number;
	private _rulesChannelId: string;
	private _joinedAt?: string;
	private _large?: boolean;
	private _unavailable?: boolean;
	private _memberCount?: number;
	private _voiceStates?: object[];
	private _members?: object[];
	private _channels?: Collection<string, Channel>;
	private _presences?: object[];
	private _maxPresences?: number;
	private _maxMembers?: number;
	private _vanityUrlCode: string;
	private _description: string;
	private _banner: string;
	private _premiumTier: number;
	private _premiumSubscriptionCount?: number;
	private _preferredLocale: string;
	private _publicUpdatesChannelId: string;
	private _maxVideoChannelUsers?: number;
	private _approximateMemberCount?: number;
	private _approximatePresenceCount?: number;

	constructor(client: Client, p: GuildCreate) {
		super(client);

		this._id = p.id;
		this._name = p.name;
		this._icon = p.icon;
		this._splash = p.splash;
		this._discoverySplash = p.discovery_splash;
		this._owner = p.owner;
		this._ownerId = p.owner_id;
		this._permissions = p.permissions; // TODO: Permission Class
		this._region = p.region;
		this._afkChannelId = p.afk_channel_id;
		this._afkTimeout = p.afk_timeout;
		this._widgetEnabled = p.widget_enabled;
		this._widgetChannelId = p.widget_channel_id;
		this._verificationLevel = p.verification_level;
		this._defaultMessageNotifications = p.default_message_notifications;
		this._explicitContentFilter = p.explicit_content_filter;
		this._roles = p.roles; // TODO: Roles Class
		this._emojis = p.emojis; // TODO: Emoji Class
		this._features = p.features;
		this._mfaLevel = p.mfa_level;
		this._applicationId = p.application_id;
		this._systemChannelId = p.system_channel_id;
		this._systemChannelFlags = p.system_channel_flags;
		this._rulesChannelId = p.rules_channel_id; // TODO: Rule Channel
		this._joinedAt = p.joined_at;
		this._large = p.large;
		this._unavailable = p.unavailable;
		this._memberCount = p.member_count;
		this._voiceStates = p.voice_states; // TODO: Voice States Class
		this._members = p.members; // TODO: Guild Member Class
		// this._channels = this.createChannels(p.channels); TODO: Create Channels
		this._presences = p.presences; // TODO: Presences Class
		this._maxPresences = p.max_presences;
		this._maxMembers = p.max_members;
		this._vanityUrlCode = p.vanity_url_code;
		this._description = p.description;
		this._banner = p.banner;
		this._premiumTier = p.premium_tier;
		this._premiumSubscriptionCount = p.premium_subscription_count;
		this._preferredLocale = p.preferred_locale;
		this._publicUpdatesChannelId = p.public_updates_channel_id;
		this._maxVideoChannelUsers = p.max_video_channel_users;
		this._approximateMemberCount = p.approximate_member_count;
		this._approximatePresenceCount = p.approximate_presence_count;
	}

	/**
	 * Getter id
	 * @return {string}
	 */
	public get id(): string {
		return this._id;
	}

	/**
	 * Getter name
	 * @return {string}
	 */
	public get name(): string {
		return this._name;
	}

	/**
	 * Getter icon
	 * @return {string}
	 */
	public get icon(): string {
		return this._icon;
	}

	/**
	 * Getter splash
	 * @return {string}
	 */
	public get splash(): string {
		return this._splash;
	}

	/**
	 * Getter discoverySplash
	 * @return {string}
	 */
	public get discoverySplash(): string {
		return this._discoverySplash;
	}

	/**
	 * Getter ownerId
	 * @return {string}
	 */
	public get ownerId(): string {
		return this._ownerId;
	}

	/**
	 * Getter region
	 * @return {string}
	 */
	public get region(): string {
		return this._region;
	}

	/**
	 * Getter afkChannelId
	 * @return {string}
	 */
	public get afkChannelId(): string {
		return this._afkChannelId;
	}

	/**
	 * Getter afkTimeout
	 * @return {number}
	 */
	public get afkTimeout(): number {
		return this._afkTimeout;
	}

	/**
	 * Getter verificationLevel
	 * @return {number}
	 */
	public get verificationLevel(): number {
		return this._verificationLevel;
	}

	/**
	 * Getter defaultMessageNotifications
	 * @return {number}
	 */
	public get defaultMessageNotifications(): number {
		return this._defaultMessageNotifications;
	}

	/**
	 * Getter explicitContentFilter
	 * @return {number}
	 */
	public get explicitContentFilter(): number {
		return this._explicitContentFilter;
	}

	/**
	 * Getter roles
	 * @return {object[]}
	 */
	public get roles(): object[] {
		return this._roles;
	}

	/**
	 * Getter emojis
	 * @return {object[]}
	 */
	public get emojis(): object[] {
		return this._emojis;
	}

	/**
	 * Getter features
	 * @return {string[]}
	 */
	public get features(): string[] {
		return this._features;
	}

	/**
	 * Getter mfaLevel
	 * @return {number}
	 */
	public get mfaLevel(): number {
		return this._mfaLevel;
	}

	/**
	 * Getter applicationId
	 * @return {string}
	 */
	public get applicationId(): string {
		return this._applicationId;
	}

	/**
	 * Getter systemChannelId
	 * @return {string}
	 */
	public get systemChannelId(): string {
		return this._systemChannelId;
	}

	/**
	 * Getter systemChannelFlags
	 * @return {number}
	 */
	public get systemChannelFlags(): number {
		return this._systemChannelFlags;
	}

	/**
	 * Getter rulesChannelId
	 * @return {string}
	 */
	public get rulesChannelId(): string {
		return this._rulesChannelId;
	}

	/**
	 * Getter vanityUrlCode
	 * @return {string}
	 */
	public get vanityUrlCode(): string {
		return this._vanityUrlCode;
	}

	/**
	 * Getter description
	 * @return {string}
	 */
	public get description(): string {
		return this._description;
	}

	/**
	 * Getter banner
	 * @return {string}
	 */
	public get banner(): string {
		return this._banner;
	}

	/**
	 * Getter premiumTier
	 * @return {number}
	 */
	public get premiumTier(): number {
		return this._premiumTier;
	}

	/**
	 * Getter preferredLocale
	 * @return {string}
	 */
	public get preferredLocale(): string {
		return this._preferredLocale;
	}

	/**
	 * Getter publicUpdatesChannelId
	 * @return {string}
	 */
	public get publicUpdatesChannelId(): string {
		return this._publicUpdatesChannelId;
	}

	private generateChannelCollection(payload: any) {
		const channels: any = [];

		payload.forEach((channel: any) => channels.push([channel.id, new Channel(this.client, channel.id)]));

		return new Collection(channels);
	}
}
