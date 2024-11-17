import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('app') // Group this controller under the "users" tag
@Controller('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'root' }) // Describe this endpoint
  getHello(): string {
    return this.appService.getHello();
  }
}
