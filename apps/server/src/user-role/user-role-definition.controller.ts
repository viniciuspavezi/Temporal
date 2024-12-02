import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserRoleDefinitionService } from './user-role-definition.service';

@Controller('user-role-definition')
export class UserRoleDefinitionController {
  constructor(private readonly userRoleDefinitionService: UserRoleDefinitionService) {}

  //   @Get(':roleName')
  //   async getRoleDefinition(@Param('roleName') roleName: string): Promise<any | undefined> {
  //     return this.userRoleDefinitionService.getRoleDefinition(roleName);
  //   }

  @Post()
  async defineRole(@Body() role: { name: string; permissions: string[] }) {
    return this.userRoleDefinitionService.defineRole(role.name, role.permissions);
  }
}
