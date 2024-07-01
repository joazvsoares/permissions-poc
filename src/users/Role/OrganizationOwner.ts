import { Action } from '@src/users/Model/Action';
import { Role } from '@src/users/Model/Role';

export const organizationOwnerRole = new Role('40', [
  Action.CREATE_ORGANIZATIONS,
  Action.MANAGE_GROUP_BOOKINGS,
  Action.INVITE_USERS,
  Action.MANAGE_USERS,
  Action.VIEW_USERS,
  Action.VIEW_ORGANIZATIONS,
]);
