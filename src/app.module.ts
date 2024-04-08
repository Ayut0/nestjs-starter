import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { DogsModule } from './dogs/dogs.module';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [DogsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(DogsController);
  }
}
