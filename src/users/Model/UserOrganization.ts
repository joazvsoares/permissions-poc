import { Organization } from '@src/users/Model/Organization';
import { BaseResource } from '@src/users/Model/Resource';
import { Role } from '@src/users/Model/Role';
import { User } from '@src/users/Model/User';

export class UserOrganization implements BaseResource {
  user: User;
  organization: Organization;
  role: Role;

  constructor(user: User, organization: Organization, role: Role) {
    this.user = user;
    this.organization = organization;
    this.role = role;
  }

  getURI(): string {
    return `organization:${this.organization.id}`;
  }

  getRole(): Role {
    return this.role;
  }
}
