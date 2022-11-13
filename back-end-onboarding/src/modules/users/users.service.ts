import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Database/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}
  //create a user
  create(createUser: any) {
    const newUser = this.repo.create(createUser);
    return this.repo.save(newUser);
  }
  //get all user
  findAll() {
    return this.repo.find();
  }
  //get one user by id
  findOne(id: string) {
    return this.repo.findOne({ where: { id: parseInt(id, 10) } });
  }
  //update one user "async to get the updated profile"
  async update(id: number, updateUser: any) {
    await this.repo
      .createQueryBuilder()
      .update()
      .set(updateUser)
      .where('id = :id', { id })
      .execute();
    return this.repo.findOne({ where: { id: id } });
  }
  //remove a user
  remove(id: number) {
    return this.repo
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();
  }
}
