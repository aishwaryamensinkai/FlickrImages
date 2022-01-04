import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  object!: any;
  constructor() {}

  setObject(data: any) {
    this.object = data;
  }
  getObject() {
    return this.object;
  }
}
