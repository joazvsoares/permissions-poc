import { Organization } from '@src/users/Model/Organization';
import { Property } from '@src/users/Model/Property';
import { PropertyOrganization } from '@src/users/Model/PropertyOrganization';
import { organizationManagerRole } from '@src/users/Role/OrganizationManager';

export const south = new Property('1', 'Best Western South');
export const north = new Property('2', 'Best Western North');
export const east = new Property('3', 'Best Western East');
export const west = new Property('4', 'Best Western West');

export const bestWesternOrg = new Organization('10', 'Best Western');
export const northOrg = new Organization('20', 'Best Western North');

export const southOrganizationProperty = new PropertyOrganization(
  bestWesternOrg,
  south,
  organizationManagerRole,
);
