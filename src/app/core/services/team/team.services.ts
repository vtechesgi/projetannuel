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

@Injectable()
export class TeamService {

  constructor(private http: HttpClient,
              private constantesService: ConstantesService) {

  }
  getTeam(id): Observable<any> {
    return this.http.get(this.constantesService.getConstante('URL_GET_TEAM') + '/' + id) as Observable<any>;
  }
}
