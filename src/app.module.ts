import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [DogsModule],
  controllers: [DogsController],
  providers: [AppService],
})
export class AppModule {}
