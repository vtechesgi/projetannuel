import {Injectable} from '@angular/core';
import {Users} from '../../models/users';
import {LocalStorageService} from '../localstorage/localstorage.service';
import {Observable} from 'rxjs';
import { ConstantesService } from '../constantes/constantes.service';
import { HttpClient } from '@angular/common/http';
import { Ligue } from '../../models/ligue';
import { Matchs } from '../../models/matchs';
import { Area } from '../../models/area';
import { Standings } from '../../models/standings';
import { SpecifiedMatch } from '../../models/specifiedMatch';
import { Tchat } from '../../models/tchat';
import { Result } from '../../models/result';

@Injectable()
export class LigueService {

  constructor(private http: HttpClient,
              private constantesService: ConstantesService) {

  }


  getAvailableCountryPromise(): Promise<Array<Area>> {
    return new Promise((resolve, reject) => {
        this.getAvailableCountry().subscribe((response: Area[]) => {
          resolve(response);
        }, reject);
      });
  }
  getMatchsPromise(): Promise<Array<Matchs>> {
    return new Promise((resolve, reject) => {
        this.getMatchOfTheDay().subscribe((response: Matchs[]) => {
          resolve(response);
        }, reject);
      });
  }
  getLigues(): Observable<Array<Ligue>> {
      const t = this.http.get(this.constantesService.getConstante('URL_GET_LIGUE')) as Observable<Array<Ligue>> ;
      return this.http.get(this.constantesService.getConstante('URL_GET_LIGUE')) as Observable<Array<Ligue>>;
  }
  getMatchOfTheDay(): Observable<Array<Matchs>> {
    return  this.http.get(this.constantesService.getConstante('URL_GET_DAILYMATCHS')) as Observable<Array<Matchs>>;
  }
  getLigueById(id): Observable<Ligue> {
    const t = this.constantesService.getConstante('URL_GET_LIGUE') + '/' + id;
    return this.http.get(this.constantesService.getConstante('URL_GET_LIGUE') + '/' + id) as Observable<Ligue> ;
  }
  getStandings(id):Observable<Array<any>>{
    return this.http.get(this.constantesService.getConstante('URL_GET_MATCHS') + '/' + id + '/standings') as Observable<Array<any>>;
  }
  getMatch(id): Observable<Array<Matchs>> {
    const t = this.http.get(this.constantesService.getConstante('URL_GET_MATCHS') + '/' + id + '/matchs') as Observable<Array<Matchs>> ;
    return this.http.get(this.constantesService.getConstante('URL_GET_MATCHS') + '/' + id + '/matchs') as Observable<Array<Matchs>> ;
  }
  getSpecificMatch(id) : Observable<SpecifiedMatch>{
    return this.http.get(this.constantesService.getConstante('URL_GET_MATCH') + '/' + id) as Observable<SpecifiedMatch>;
  }
  getSpecificTchat(id): Observable<Tchat> {
    return this.http.get(this.constantesService.getConstante('URL_GET_TCHAT') + '/' + id + '/tchat') as Observable<Tchat>;
  }
  async postMessageToSpecificTchat(id, userId: string, userMessage: string): Promise<Result> {
    const data = {
      idUser: userId,
      message: userMessage
    };
    return await this.http.post(this.constantesService.getConstante('URL_GET_TCHAT') + '/' + id + '/tchat', data).toPromise<Result>();
  }
  getAvailableCountry(): Observable<Array<Area>> {
    return this.http.get(this.constantesService.getConstante('URL_GET_AVAILABLE_COUNTRY')) as Observable<Array<Area>>;
  }
  addCountry(name): Observable<Result> {
    return this.http.get(this.constantesService.getConstante('URL_GET_AVAILABLE_COUNTRY') + '/' + name) as Observable<Result>;
  }
  delCountry(name): Observable<Result> {
    return this.http.get(this.constantesService.getConstante('URL_GET_AVAILABLE_COUNTRY') + '/remove/' + name ) as Observable<Result>;
  }
  getAllCountry(): Observable<Array<Area>> {
    return this.http.get(this.constantesService.getConstante('URL_GET_ALL_COUNTRY')) as Observable<Array<Area>>;
  }
  getPronostic(): Observable<Array<Tchat>>{
    return this.http.get(this.constantesService.getConstante('URL_GET_PRONOSTICS')) as Observable<Array<Tchat>>;
  }

}
