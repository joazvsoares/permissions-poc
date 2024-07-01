import { Action } from '@src/users/Model/Action';
import { Role } from '@src/users/Model/Role';

export const hotelAdminRole = new Role('10', [
  Action.MANAGE_CAMPAIGNS,
  Action.VIEW_CAMPAIGNS,
  Action.MANAGE_RESERVATIONS,
  Action.VIEW_RESERVATIONS,
  Action.MANAGE_USERS,
  Action.VIEW_USERS,
]);
