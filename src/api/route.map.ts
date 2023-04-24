import { MultiplesControllerModule } from './multiples/multiples.module';

const routeMap = [
  {
    path: 'multiples',
    module: MultiplesControllerModule,
  },
];

export default routeMap;
