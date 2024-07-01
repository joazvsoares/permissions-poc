import { Property } from '@src/users/Model/Property';
import { BaseResource } from '@src/users/Model/Resource';
import { Role } from '@src/users/Model/Role';
import { User } from '@src/users/Model/User';

export class UserProperty implements BaseResource {
  user: User;
  property: Property;
  role: Role;

  constructor(user: User, property: Property, role: Role) {
    this.user = user;
    this.property = property;
    this.role = role;
  }

  getURI(): string {
    return `property:${this.property.id}`;
  }

  getRole(): Role {
    return this.role;
  }
}
