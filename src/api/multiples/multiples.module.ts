import { Module } from '@nestjs/common';

import { MultiplesController } from './multiples.controller';
import { MultiplesServiceModule } from '@services/multiples/multiples.module';

@Module({
  controllers: [MultiplesController],
  imports: [MultiplesServiceModule],
})
export class MultiplesControllerModule {}
