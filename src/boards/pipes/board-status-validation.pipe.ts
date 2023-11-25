import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!this.validateStatus(value)) {
      throw new BadRequestException(`status: ${value} is not correct value.`);
    }

    return value;
  }

  private validateStatus(value: any) {
    return Object.values(BoardStatus).includes(value);
  }
}
