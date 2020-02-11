import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TestsModule } from 'src/test/test.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/ng-nest-tests-project', { useNewUrlParser: true }),
    TestsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
