import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field(type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lassName: string;
}
