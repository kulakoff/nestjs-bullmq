import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { TRANSCODE_QUEUE } from './constants';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async transcode() {
    return await this.transcodeQueue.add({
      fileName: 'sound.mp3',
    });
  }
}
