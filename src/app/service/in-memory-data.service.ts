import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 0,  name: 'Bob Boobloah', y_coordinate: 415, x_coordinate: 385 },
      { id: 11, name: 'Bill Bamboozler', y_coordinate: 415, x_coordinate: 430 },
      { id: 12, name: 'Bobo Brouhousen', y_coordinate: 370, x_coordinate: 200 },
      { id: 13, name: 'Bruce Bogarrten', y_coordinate: 130, x_coordinate: 360 },
      { id: 14, name: 'Banner Blatt', y_coordinate: 355, x_coordinate: 521 },
      { id: 15, name: 'Bart Brownheimer', y_coordinate: 247, x_coordinate: 207 },
      { id: 16, name: 'Bosco Beeftosser', y_coordinate: 470, x_coordinate: 290 },
    ];
    return {employees};
  }
}