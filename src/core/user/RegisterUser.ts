import UseCase from "../shared/UseCase";
import UserRepository from "./service/UserRepository";

type Input = {
  name: string;
  email: string;
  password: string;
};

export default class RegisterUser implements UseCase<Input, void> {
  constructor(private readonly repository: UserRepository) {}

  async execute(data: Input): Promise<void> {
    const { name, email, password } = data;

    const alreadyExistedUser = await this.repository.searchByEmail(email);

    if (alreadyExistedUser) {
      throw new Error("User is already existed");
    }

    await this.repository.create({ name, email, password });
  }
}
