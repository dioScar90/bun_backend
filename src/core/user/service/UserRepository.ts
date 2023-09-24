import User from "../model/User";

export default interface UserRepository {
  searchByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<User>;
}
