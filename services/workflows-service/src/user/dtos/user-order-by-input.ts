import { ApiProperty } from '@nestjs/swagger';
import { SortOrder } from '../../query-filters/sort-order';

export class UserOrderByInput {
  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  username?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  password?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  roles?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  updatedAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  createdAt?: SortOrder;
}
