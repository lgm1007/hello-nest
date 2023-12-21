import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/./middleware/logger.middleware';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
// 미들웨어를 포함하는 모듈은 NestModule 인터페이스를 구현해야 한다.
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
