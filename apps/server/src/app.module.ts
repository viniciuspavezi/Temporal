import { Module } from '@nestjs/common';
import { UserRoleDefinitionModule } from './user-role/user-role-definition.module';

@Module({
  imports: [UserRoleDefinitionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
