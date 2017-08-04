import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainServiceProvider {

  constructor(public http: Http) {
    console.log('Hello MainServiceProvider Provider');
  }

  data;

  loadWebData()
  {
     if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }
 
  return new Promise(resolve => {
    this.http.get('http://brainywebs.com/10rupeeticket/api/Main')
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
      });
  });
  }
}
