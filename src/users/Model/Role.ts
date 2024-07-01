import { Action } from '@src/users/Model/Action';

export class Role {
  id: string;
  actions: Action[];

  constructor(id: string, actions: Action[]) {
    this.id = id;
    this.actions = actions;
  }

  getActions(): Action[] {
    return this.actions;
  }
}
