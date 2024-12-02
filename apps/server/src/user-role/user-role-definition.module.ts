import { Module } from '@nestjs/common';
import { UserRoleDefinitionController } from './user-role-definition.controller';
import { userRoleDefinitionProviders } from './user-role-definition.providers';
import { UserRoleDefinitionService } from './user-role-definition.service';

@Module({
  imports: [],
  controllers: [UserRoleDefinitionController],
  providers: [...userRoleDefinitionProviders, UserRoleDefinitionService],
})
export class UserRoleDefinitionModule {}
