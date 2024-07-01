import { Action } from '@src/users/Model/Action';
import { Role } from '@src/users/Model/Role';

export const organizationManagerRole = new Role('30', [
  Action.MANAGE_GROUP_BOOKINGS,
  Action.VIEW_CAMPAIGNS,
  Action.VIEW_USERS,
  Action.VIEW_RESERVATIONS,
]);
