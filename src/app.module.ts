import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { MultiplesControllerModule } from './api';
import routeMap from './api/route.map';

@Module({
  imports: [
    MultiplesControllerModule,
    RouterModule.register(routeMap),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
