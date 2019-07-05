import {Injectable} from '@angular/core';
import {Users} from '../../models/users';
import {LocalStorageService} from '../localstorage/localstorage.service';
import {Observable} from 'rxjs';
import { ConstantesService } from '../constantes/constantes.service';
import { HttpClient } from '@angular/common/http';
import { Ligue } from '../../models/ligue';
import { Matchs } from '../../models/matchs';
import { Area } from '../../models/area';

@Injectable()
export class LogService {

  constructor(private http: HttpClient,
              private constantesService: ConstantesService) {

  }

  getLog(username, pass): Observable<string> {
      const data = {
        email: username,
        password: pass
      };
      const t = this.http.post(this.constantesService.getConstante('URL_GET_LOG'), data) as Observable<string> ;
      return this.http.get(this.constantesService.getConstante('URL_GET_LOG')) as Observable<string>;
  }
  // createUser(mail,username,pass) : Observable<string> {
  //   const t = this.http.post(this.constantesService.getConstante('URL_GET_LIGUE'), data) as Observable<string> ;
  //   return this.http.get(this.constantesService.getConstante('URL_GET_LIGUE')) as Observable<string>;
  // }
}
