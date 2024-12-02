import { Client, Connection, ConnectionOptions, WorkflowExecutionAlreadyStartedError } from '@temporalio/client';
import { taskQueue } from '@app/shared';

export const userRoleDefinitionProviders = [
  {
    provide: 'CONNECTION_CONFIG',
    useValue: {
      address: 'localhost',
    } as ConnectionOptions,
  },
  {
    provide: 'CONNECTION',
    useFactory: async (config: ConnectionOptions) => {
      const connection = await Connection.connect(config);
      return connection;
    },
    inject: ['CONNECTION_CONFIG'],
  },
  {
    provide: 'WORKFLOW_CLIENT',
    useFactory: (connection: Connection) => {
      return new Client({ connection });
    },
    inject: ['CONNECTION'],
  },
  {
    provide: 'USER_ROLE_DEFINITION_WORKFLOW_HANDLE',
    useFactory: async (client: Client) => {
      let handle;
      try {
        handle = await client.workflow.start('userRoleDefinitionWorkflow', {
          taskQueue,
          workflowId: 'user-role-definition',
        });
        console.log('Started new user role definition workflow');
      } catch (err) {
        if (err instanceof WorkflowExecutionAlreadyStartedError) {
          console.log('Reusing existing user role definition workflow');
          handle = await client.workflow.getHandle('user-role-definition');
        } else {
          throw err;
        }
      }

      return handle;
    },
    inject: ['WORKFLOW_CLIENT'],
  },
];
