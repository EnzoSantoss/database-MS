import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // //Microservice TCP comunication
    // ClientsModule.register([
    //   {
    //     name: 'GATEWAY',
    //     transport: Transport.TCP,
    //     options: {
    //       port: 4000,
    //     },
    //   },
    // ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
