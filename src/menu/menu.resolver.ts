import { Query, Resolver } from '@nestjs/graphql';
import { Menu } from './models/menu.model';
import { MenuService } from './menu.service';

@Resolver((of) => Menu)
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}

  // @Query((returns) => Menu)
  // async recipe(@Args('id') id: string): Promise<Menu> {
  //   const menu = await this.menuService.findAll(id);
  //   // if (!recipe) {
  //   //   throw new NotFoundException(id);
  //   // }
  //   return menu;
  // }

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
