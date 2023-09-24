import { Elysia } from "elysia";
import UserRepositoryMemory from "./external/memory/UserRepositoryMemory";
import RegisterUser from "./core/user/RegisterUser";
import RegisterUserController from "./adapters/RegisterUserController";

const app = new Elysia()

const repository = new UserRepositoryMemory()
const registerUser = new RegisterUser(repository)
new RegisterUserController(app, registerUser)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
