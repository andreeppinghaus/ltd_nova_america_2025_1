import { HashingService } from "./hashing.service";

export class BcryptService extends HashingService {
    async hash(password: string): Promise<string> {
        return 'hash senha';
    }

    async compare(password: string, passwordHash: string): Promise<boolean> {
        return false;
    }

}