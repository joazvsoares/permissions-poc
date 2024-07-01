import { Action } from '@src/users/Model/Action';
import { Organization } from '@src/users/Model/Organization';
import { ResourceURI } from '@src/users/Model/Resource';
import { Role } from '@src/users/Model/Role';
import { UserOrganization } from '@src/users/Model/UserOrganization';
import { UserProperty } from '@src/users/Model/UserProperty';

export type UserResourceActions = {
  [resourceURI: ResourceURI]: Action[];
};

export class User {
  id: string;
  name: string;

  _userResourceActions: UserResourceActions = {};

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  addOrganization(organization: Organization, role: Role): void {
    const userOrganization = new UserOrganization(this, organization, role);
    this._userResourceActions[userOrganization.getURI()] =
      userOrganization.role.getActions();
  }

  setUserOrganizations(userOrganizations: UserOrganization[]): void {
    userOrganizations.forEach((userOrganization) => {
      this._userResourceActions[userOrganization.getURI()] =
        userOrganization.role.getActions();
    });
  }

  setUserProperties(userProperties: UserProperty[]): void {
    userProperties.forEach((userProperty) => {
      this._userResourceActions[userProperty.getURI()] =
        userProperty.role.getActions();
    });
  }

  hasPermission(resourceKey: ResourceURI, action: Action): boolean {
    for (const key of Object.keys(this._userResourceActions)) {
      if (resourceKey.startsWith(key)) {
        return this._userResourceActions[key].includes(action);
      }
    }
    return !!(
      this._userResourceActions[resourceKey] &&
      this._userResourceActions[resourceKey].includes(action)
    );
  }
}
