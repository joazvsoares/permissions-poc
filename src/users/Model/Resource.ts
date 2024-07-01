import { Role } from '@src/users/Model/Role';

export type ResourceURI = string;

export interface Resource {
  getURI(): ResourceURI;
}

export interface BaseResource extends Resource {
  getRole(): Role;
}
