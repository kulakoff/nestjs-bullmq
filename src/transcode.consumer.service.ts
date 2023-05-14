import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { TRANSCODE_QUEUE } from './constants';
import { Logger } from '@nestjs/common';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);
  @Process()
  async transcode(job: Job) {
    this.logger.log(`Transcoding msg: ${job.id}`);
    this.logger.debug('Data from job', job.data);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 8000));
    this.logger.log(`Transcoding complete for job: ${job.id}`);
  }
}
