import {HttpHeaders} from '@angular/common/http';


export class HelperService {

  constructor() {
  }

  static options() {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    });
  }
}
