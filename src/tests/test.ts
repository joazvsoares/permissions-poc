import { bestWesternOrg, northOrg, west } from '@src/tests/properties';
import {
  hotelAdmin,
  hotelMember,
  organizationManager,
  organizationOwner,
} from '@src/tests/users';
import { Action } from '@src/users/Model/Action';
import { UserProperty } from '@src/users/Model/UserProperty';
import { hotelAdminRole } from '@src/users/Role/HotelAdmin';
import { hotelMemberRole } from '@src/users/Role/HotelMember';
import { organizationManagerRole } from '@src/users/Role/OrganizationManager';
import { organizationOwnerRole } from '@src/users/Role/OrganizationOwner';

/**
 * Setup the user organizations and properties
 */
organizationOwner.addOrganization(bestWesternOrg, organizationOwnerRole);
organizationManager.addOrganization(northOrg, organizationManagerRole);

/**
 * Test case with user organizations
 */
const testOrganizationOwnerPermission = () => {
  const permission = organizationOwner.hasPermission(
    'organization:10',
    Action.INVITE_USERS,
  );
  console.log(`organizationOwner permission to invite users: ${permission}`);
};

const testOrganizationManagerPermission = () => {
  const permission = organizationManager.hasPermission(
    'organization:20',
    Action.MANAGE_GROUP_BOOKINGS,
  );
  console.log(
    `organizationManager permission to manage bookings: ${permission}`,
  );
};

const testPropertyOrganizationPermission = () => {
  const permission = organizationOwner.hasPermission(
    'organization:10/property:1',
    Action.MANAGE_GROUP_BOOKINGS,
  );
  console.log(`organizationOwner permission to manage bookings: ${permission}`);
};

/*
 * Setup the user properties
 */
hotelAdmin.setUserProperties([
  new UserProperty(hotelAdmin, west, hotelAdminRole),
]);

hotelMember.setUserProperties([
  new UserProperty(hotelMember, west, hotelMemberRole),
]);

/*
 * Test cases with the user properties
 */
const testPropertyAdminPermission = () => {
  const permission = hotelAdmin.hasPermission(
    'property:4',
    Action.MANAGE_CAMPAIGNS,
  );
  console.log(`hotelAdmin permission to manage campaigns: ${permission}`);
};

const testPropertyMemberPermission = () => {
  const permission = hotelMember.hasPermission(
    'property:4',
    Action.VIEW_CAMPAIGNS,
  );
  console.log(`hotelMember permission to manage campaigns: ${permission}`);
};

testOrganizationOwnerPermission();
testOrganizationManagerPermission();
testPropertyOrganizationPermission();
testPropertyAdminPermission();
testPropertyMemberPermission();
