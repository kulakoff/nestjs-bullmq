import { InjectQueue } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './constants';
import { Queue } from 'bull';
import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto_job/create.dto';

@Injectable()
export class TranscodeProducerService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE)
    private readonly transcodeQueue: Queue,
  ) {}
  async transcode_test(dto: CreateDto) {
    return await this.transcodeQueue
      .add({
        dto,
      })
      .then((data) => data.id);
  }
}
