import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleDefinitionService } from './user-role-definition.service';
import { userRoleDefinitionProviders } from './user-role-definition.providers';

describe('UserRoleDefinitionService', () => {
  //   let app: TestingModule;
  //   const mockRoles = { admin: ['read', 'write'] };
  //   beforeAll(async () => {
  //     const handleMock = {
  //       query: jest.fn((queryName, roleName) => mockRoles[roleName]),
  //       signal: jest.fn(),
  //     };
  //     app = await Test.createTestingModule({
  //       providers: [...userRoleDefinitionProviders, UserRoleDefinitionService],
  //     })
  //       .overrideProvider('CONNECTION')
  //       .useValue(null)
  //       .overrideProvider('WORKFLOW_CLIENT')
  //       .useValue(null)
  //       .overrideProvider('USER_ROLE_DEFINITION_WORKFLOW_HANDLE')
  //       .useValue(handleMock)
  //       .compile();
  //   });
  //   describe('UserRoleDefinitionService', () => {
  //     it('should return role definition', async () => {
  //       const service = app.get(UserRoleDefinitionService);
  //       const roles = await service.getRoleDefinition('admin');
  //       expect(roles).toEqual(['read', 'write']);
  //     });
  //     it('should define a role', async () => {
  //       const service = app.get(UserRoleDefinitionService);
  //       await service.defineRole('editor', ['read', 'edit']);
  //       const handle = app.get('USER_ROLE_DEFINITION_WORKFLOW_HANDLE');
  //       expect(handle.signal).toHaveBeenCalledWith('defineRoleSignal', {
  //         name: 'editor',
  //         permissions: ['read', 'edit'],
  //       });
  //     });
  //   });
});
