import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        //useNewUrlParser: true,
        // useUnifiedTopology: true,
      }),
    }),
  ],
})
export class DatabaseModule implements OnModuleInit {
  private readonly logger = new Logger(DatabaseModule.name);

  constructor(@InjectConnection() private readonly connection: Connection, private configService: ConfigService) {
  }

  async onModuleInit() {
    this.connection.once('open', () => {
      this.logger.log('Database connection established successfully.');
    });

    this.connection.on('error', (err) => {
      this.logger.error(`Database connection error: ${err}`);
    });

    this.connection.on('disconnected', () => {
      this.logger.warn('Database connection lost.');
    });
  }
}
