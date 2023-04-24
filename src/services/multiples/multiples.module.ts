import { Module } from '@nestjs/common';

import { MultiplesService } from './multiples.service';

@Module({
  providers: [MultiplesService],
  exports: [MultiplesService],
})
export class MultiplesServiceModule {}
