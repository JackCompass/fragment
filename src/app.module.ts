import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { ConfigModule } from '@nestjs/config';
import { MessagesModule } from './messages/messages.module';
import { EventsModule } from './events/events.module';

const envFilePath = ['.env', '.env.development'];

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    MessagesModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
