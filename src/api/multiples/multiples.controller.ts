import {
  Controller,
  Get,
  Param,
  StreamableFile,
  Response,
} from '@nestjs/common';
import { type Response as Res } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { MultiplesService } from '@services/multiples/multiples.service';

import { CheckNumberMultiplesDTO } from './multiples.dto';

@ApiTags('Multiples')
@Controller()
export class MultiplesController {
  constructor(private multiplesService: MultiplesService) {}

  @ApiOperation({
    summary:
      'This endpoint takes <number> param and returns JSON formatted file with information on its multiples',
  })
  @ApiResponse({
    status: 200,
    description: 'The file with information on multiples is returned',
  })
  @Get('/:number')
  checkNumberMultiples(
    @Param() { number }: CheckNumberMultiplesDTO,
    @Response({ passthrough: true }) res: Res,
  ) {
    const resultString = this.multiplesService.checkNumberMultiples(number);

    res.set('Content-Disposition', 'attachment; filename="result.json"');

    return new StreamableFile(
      Buffer.from(JSON.stringify({ result: resultString }, null, 2), 'utf-8'),
    );
  }
}
