import { Injectable, OnInit } from '@angular/core';
import { Store } from '@app/core/store/store';
import { BotonesStoreModel } from './botones.store.model';

@Injectable()
export class BotonesStore extends Store<BotonesStoreModel> {

  constructor() {

    super(new BotonesStoreModel());

  }

}
