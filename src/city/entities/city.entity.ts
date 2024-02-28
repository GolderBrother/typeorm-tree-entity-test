import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
// https://www.typeorm.org/tree-entities#%E9%97%AD%E5%8C%85%E8%A1%A8closure-table
// 生成表的时候，会多了一个 mpath 字段，通过 mpath 路径存储了当前节点的访问路径，从而实现了父子关系的记录：
@Tree('materialized-path')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  status: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column()
  name: string;

  // 通过 @TreeChildren 声明的属性里存储着它的 children 节点
  @TreeChildren()
  children: City[];

  // 通过 @TreeParent 声明的属性里存储着它的 parent 节点
  @TreeParent()
  parent: City;
}
