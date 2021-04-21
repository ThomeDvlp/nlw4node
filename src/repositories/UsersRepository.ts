import { EntityRepository, Repository } from 'typeorm';
import { User } from '../Models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {

}

export { UserRepository };