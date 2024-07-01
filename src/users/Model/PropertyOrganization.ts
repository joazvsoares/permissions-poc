import { Organization } from '@src/users/Model/Organization';
import { Property } from '@src/users/Model/Property';
import { BaseResource } from '@src/users/Model/Resource';
import { Role } from '@src/users/Model/Role';

export class PropertyOrganization implements BaseResource {
  organization: Organization;
  property: Property;
  role: Role;

  constructor(organization: Organization, property: Property, role: Role) {
    this.organization = organization;
    this.property = property;
    this.role = role;
  }

  getURI(): string {
    return `organization:${this.organization.id}/property:${this.property.id}`;
  }

  getRole(): Role {
    return this.role;
  }
}
