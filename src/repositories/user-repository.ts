export abstract class UserRepository {
  abstract create(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<void>;
}
