import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'menu' })
export class Menu {
  @Field(() => ID)
  menuId: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  created: Date;

  @Field()
  updated: Date;

  @Field({ nullable: true })
  deleted?: Date;
}
