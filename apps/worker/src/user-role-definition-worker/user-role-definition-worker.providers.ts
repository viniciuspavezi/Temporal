import { Worker } from '@temporalio/worker';
import { taskQueue } from '@app/shared';

export const userRoleWorkerProviders = [
  {
    provide: 'USER_ROLE_WORKER',
    useFactory: async () => {
      const worker = await Worker.create({
        workflowsPath: require.resolve('../temporal/workflows/user-role.workflow'),
        taskQueue,
        activities: require('../activities/activities.service'),
      });

      worker.run();
      console.log('User Role Worker started');
      return worker;
    },
  },
];
