import Elysia from "elysia";
import RegisterUser from "../core/user/RegisterUser";

export default class RegisterUserController {
  constructor(readonly server: Elysia, readonly useCase: RegisterUser) {
    server.post("/users", async ({ body }) => {
      const { name, email, password } = body as any;

      await useCase.execute({ name, email, password });

      return {
        status: 201,
        body: {
          message: "User created successfully",
        },
      };
    });
  }
}
