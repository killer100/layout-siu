import { IDataGridPageRequest } from '@siu/shared';
import { IPerson } from '../interfaces/person.interface';
import { Observable, throwError } from 'rxjs';
import { PERSONS } from '../data/persons.data';
import { Injectable } from '@angular/core';
import orderBy from 'lodash/orderBy';
import find from 'lodash/find';

@Injectable()
export class PersonService {

  private datasource = PERSONS;


  constructor() { }

  fetchPersons = (pageRequest: IDataGridPageRequest, filter = null): Observable<{ persons: IPerson[], total: number }> => {
    console.log(pageRequest);


    if (pageRequest.orderBy && pageRequest.orderDir) {
      this.datasource = orderBy(this.datasource, [ pageRequest.orderBy ], [ pageRequest.orderDir ]);
    }

    const items = this.datasource.slice((pageRequest.page - 1) * pageRequest.pageSize).slice(0, pageRequest.pageSize);

    return new Observable((observer) => {
      const handler = (e) => observer.next(e);
      setTimeout(() => {
        return handler({ persons: items, total: PERSONS.length });
      }, 750);
    });

  }

  getPerson = (id): Observable<IPerson> => {

    let person = null;

    person = find(this.datasource, { '_id': id });

    return new Observable((observer) => {
      const handler = (e) => observer.next(e);
      setTimeout(() => {
        return handler(person ? person : null);
      }, 750);
    });
  }

  savePerson = (person: IPerson): Observable<IPerson> => {
    this.datasource.push(person);
    return new Observable((observer) => {
      const handler = (e) => observer.next(e);
      setTimeout(() => {
        //return observer.error({error: 500});
        return handler(person ? person : null);
      }, 750);
    });
  }

}
