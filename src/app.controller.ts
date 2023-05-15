import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TranscodeProducerService } from './transcode.producer.service';

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
  @Post('transcode')
  async transcode(@Body() fileName: string) {
    console.log('POST');
    return this.transcodeProducerService.transcode_test({ fileName: fileName});
    // return await this.appService.transcode();
  }
}
