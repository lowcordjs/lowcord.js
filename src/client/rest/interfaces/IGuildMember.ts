import {UserObject, RoleObject} from '../../../constants/Constants'
export default interface IGuildMember{
    member: {
        user: UserObject,
        nick?: string | null,
        avatar?: string | null,
        roles: RoleObject[],
        joined_at: any,
        premium_since?: any,
        deaf: boolean,
        mute: boolean,
        pending?: boolean,
        permissions?: string,
        communication_disabled_until?: any
    }
}