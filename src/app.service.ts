import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  private prisma: PrismaClient;
  private number: number;

  constructor() {
    this.prisma = new PrismaClient();
    this.number = 0;
  }
  getHello(): string {
    return 'Hello World!';
  }

  async saveMessage(data: any) {
    // setTimeout(() => {
    //   const info = {
    //     product_id: uuidv4(),
    //     ...data,
    //     value: this.number++,
    //   };
    //   console.log(info);
    // }, 500);

    const info = {
      product_id: uuidv4(),
      ...data,
      value: this.number++,
    };

    console.log(info);

    await this.prisma.product.create({
      data: info,
    });
  }
}
