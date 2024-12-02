import { Injectable, Inject } from '@nestjs/common';
import { WorkflowHandle } from '@temporalio/client';

@Injectable()
export class UserRoleDefinitionService {
  constructor(@Inject('USER_ROLE_DEFINITION_WORKFLOW_HANDLE') private handle: WorkflowHandle) {}

  async getRoleDefinition(roleName: string) {
    return this.handle.query('getRoleDefinitionQuery', roleName);
  }

  async defineRole(name: string, role: string[]) {
    return this.handle.signal('defineRoleSignal', { name, role });
  }
}
