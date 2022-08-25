export default interface IGuildMember{
    member: {
        user: {
            id: string,
            username: string,
            discriminator: string,
            avatar: string | null,
            bot?: boolean,
            system?: boolean,
            mfa_enabled?: boolean,
            banner?: string | null,
            accent_color?: number | null,
            locale?: string,
            verified?: boolean,
            email?: string | null,
            flags?: number,
            premium_type?: number,
            public_flags?: number
        },
        nick?: string | null,
        avatar?: string | null,
        roles: any[],
        joined_at: any,
        premium_since?: any,
        deaf: boolean,
        mute: boolean,
        pending?: boolean,
        permissions?: string,
        communication_disabled_until?: any
    }
}