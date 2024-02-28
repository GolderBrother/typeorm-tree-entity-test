import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class CityService {
  @InjectEntityManager()
  entityManager: EntityManager;
  create(createCityDto: CreateCityDto) {
    return 'This action adds a new city';
  }

  async findAll() {
    // 创建了两个 city 的 entity，第二个的 parent 指定为第一个。
    // 用 save 保存。
    // 然后再 getTreeRepository 调用 findTrees 把数据查出来。
    // const city = new City();
    // city.name = '华南';
    // await this.entityManager.save(city);

    // const cityChild = new City();
    // cityChild.name = '广东';
    // const parent = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '华南',
    //   },
    // });
    // if (parent) {
    //   cityChild.parent = parent;
    // }
    // await this.entityManager.save(City, cityChild);
    // return this.entityManager.getTreeRepository(City).findTrees();

    // const city = new City();
    // city.name = '华东';
    // await this.entityManager.save(city);

    // const cityChild1 = new City();
    // cityChild1.name = '福建';
    // const parent1 = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '华东',
    //   },
    // });
    // if (parent1) {
    //   cityChild1.parent = parent1;
    // }
    // await this.entityManager.save(City, cityChild1);

    // const cityChild2 = new City();
    // cityChild2.name = '福州';
    // const parent2 = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '福建',
    //   },
    // });
    // if (parent2) {
    //   cityChild2.parent = parent2;
    // }
    // await this.entityManager.save(City, cityChild2);
    // return this.entityManager.getTreeRepository(City).findTrees();

    // findRoots 查询的是所有根节点
    // return this.entityManager.getTreeRepository(City).findRoots();

    // findDescendantsTree 是查询某个节点的所有后代节点。
    // const parent = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '华东',
    //   },
    // });
    // const allChildren = await this.entityManager
    //   .getTreeRepository(City)
    //   .findDescendantsTree(parent);
    // return allChildren;

    // findAncestorsTree 是查询某个节点的所有祖先节点。
    // const city = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '福州',
    //   },
    // });
    // const allParent = await this.entityManager
    //   .getTreeRepository(City)
    //   .findAncestorsTree(city);
    // return allParent;

    // 这里换成 findAncestors、findDescendants 就是用扁平结构返回：
    // const allParentAncestors = await this.entityManager
    //   .getTreeRepository(City)
    //   .findAncestors(city);
    // return allParentAncestors;

    // const allChildDescendants = await this.entityManager
    //   .getTreeRepository(City)
    //   .findDescendants(parent);
    // return allChildDescendants;

    // 把 findTrees 换成 find 也是会返回扁平的结构：
    // const allData = await this.entityManager.getTreeRepository(City).find();
    // return allData;

    // 调用 countAncestors 和 countDescendants 来计数：
    // const parent = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '福建',
    //   },
    // });
    // const countAncestors = await this.entityManager
    //   .getTreeRepository(City)
    //   .countAncestors(parent);
    // const countDescendants = await this.entityManager
    //   .getTreeRepository(City)
    //   .countDescendants(parent);
    // const count = await this.entityManager.getTreeRepository(City).count();
    // return {
    //   countAncestors,
    //   countDescendants,
    //   count,
    // };
    const city = new City();
    city.name = '华北';
    await this.entityManager.save(city);

    const cityChild = new City();
    cityChild.name = '山东';
    const parent = await this.entityManager.findOne(City, {
      where: {
        name: '华北',
      },
    });
    if (parent) {
      cityChild.parent = parent;
    }
    await this.entityManager.save(City, cityChild);

    return this.entityManager.getTreeRepository(City).findTrees();
    // return `This action returns all city`;
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
