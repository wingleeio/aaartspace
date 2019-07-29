import { Module } from '@nestjs/common';
import { UserModule } from '../users/user.module';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
  imports: [UserModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
