import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TranscodeProducerService } from './transcode.producer.service';
import { CreateDto } from './dto_job/create.dto';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly transcodeProducerService: TranscodeProducerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @UsePipes(new ValidationPipe({}))
  @Post('transcode')
  async transcode(@Body() dto: CreateDto) {
    console.log('POST');
    return this.transcodeProducerService.transcode_test(dto);
  }
}
