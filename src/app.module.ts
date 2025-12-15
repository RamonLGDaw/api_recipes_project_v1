import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    RecipesModule,

    MongooseModule.forRoot(process.env.MONGODB_URI as string),

    ThrottlerModule.forRoot([
      {
        name:'short',
        ttl: 60,
        limit: 10,
      }
    ])
  ],
  controllers: [AppController],
  providers: [
    AppService,
     {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule { }
