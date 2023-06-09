import { InputJsonValue } from '@/types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsObject } from 'class-validator';

export class WorkflowDefinitionUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  state?: string;

  @ApiProperty({
    required: false,
    type: 'object',
  })
  @IsObject()
  @IsOptional()
  context?: InputJsonValue;

  status?: string;
}
