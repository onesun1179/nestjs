import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */
  async findAll(id: string): Promise<string> {
    return 'test';
  }
}
