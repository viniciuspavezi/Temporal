import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ActivitiesService {
  constructor(private readonly httpService: HttpService) {}

  async setRole(userId: string, roleName: string): Promise<void> {
    const url = `http://localhost:3003/api/users/${userId}/roles`;
    await this.httpService.axiosRef.post(url, { role: roleName });
    console.log(`Role "${roleName}" set for user ${userId}`);
  }
}
