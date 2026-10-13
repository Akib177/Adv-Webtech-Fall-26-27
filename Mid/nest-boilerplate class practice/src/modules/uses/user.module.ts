import {Module} from '@nestjs/common';
import { TypeOrmModule } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserController } from './user.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {}


