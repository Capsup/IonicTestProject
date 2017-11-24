import { TeamMembership } from './teammembership';

export interface TeamWithMembers {
    id: string;
    members: TeamMembership[];
}