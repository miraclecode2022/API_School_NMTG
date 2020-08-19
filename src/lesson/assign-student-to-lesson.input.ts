import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field(type => ID)
  lessonId: string;

  @IsUUID('all', { each: true }) // each từng id trong array xem có phải là uuid k ? all là tất cả phiên bản của uuid
  @Field(type => [ID])
  studentIds: string[];
}
