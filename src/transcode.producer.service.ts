import { InjectQueue } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './constants';
import { Queue } from 'bull';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TranscodeProducerService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE)
    private readonly transcodeQueue: Queue,
  ) {}
  async transcode_test({ fileName }: { fileName: string }) {
    return await this.transcodeQueue.add({
      fileName,
    });
  }
}
