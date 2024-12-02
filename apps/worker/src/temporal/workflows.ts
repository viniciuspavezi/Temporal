import { proxyActivities } from '@temporalio/workflow';

const { setRole: proxiedSetRole, getRoleDefinition: proxiedGetRoleDefinition } = proxyActivities({
  startToCloseTimeout: '5 minutes',
});

export async function userRoleDefinitionWorkflow(userId: string, roleName: string): Promise<void> {
  const roleDefinition = await proxiedGetRoleDefinition(roleName);
  console.log(`Fetched role definition:`, roleDefinition);

  await proxiedSetRole(userId, roleName);
  console.log(`Assigned role "${roleName}" to user with ID ${userId}`);
}
