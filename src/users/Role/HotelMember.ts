import { Action } from '@src/users/Model/Action';
import { Role } from '@src/users/Model/Role';

export const hotelMemberRole = new Role('20', [
  Action.VIEW_CAMPAIGNS,
  Action.VIEW_RESERVATIONS,
  Action.VIEW_USERS,
]);
