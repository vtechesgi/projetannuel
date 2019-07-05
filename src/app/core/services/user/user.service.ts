import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ConstantesService} from '../../../core/services/constantes/constantes.service';
import {Players} from '../../../core/models/players';
import {Team} from '../../../core/models/team';
import {Ligue} from '../../../core/models/ligue';
import { ResultLog } from '../../models/resultLog';
import { Result } from '../../models/result';
import { Users } from '../../models/users';
@Injectable()
export class UsersService {
  constructor(private http: HttpClient,
              private constantesService: ConstantesService) {
  }

  async getLog(username, pass): Promise<ResultLog> {
    const data = {
      email: username,
      password: pass
    };
    const t = this.http.post(this.constantesService.getConstante('URL_GET_LOG'), data).toPromise<ResultLog>();
    return await this.http.post(this.constantesService.getConstante('URL_GET_LOG'), data).toPromise<ResultLog>();
  }
  async postSign(mail,username, pass): Promise<ResultLog> {
    const data = {
      email: mail,
      password: pass,
      name: username
    };
    return await this.http.post(this.constantesService.getConstante('URL_POST_SIGN'), data).toPromise<ResultLog>();
  }
  addLike(idMatch, Userid, NameTeam): Promise<Result> {
    const data = {
      idUser: Userid,
      teamName: NameTeam
    };
    return this.http.post(this.constantesService.getConstante('URL_POST_LIKE') + '/' + idMatch, data).toPromise<Result>();
  }
  addLikeMessage(idMatch, indexMessage, Userid): Promise<Result> {
    const data = {
      idUser: Userid,
      index: indexMessage
    };
    return this.http.post(this.constantesService.getConstante('URL_POST_LIKE') + '/' + idMatch + '/tchat', data).toPromise<Result>();
  }
  getUser(idUser): Promise<Result> {
    const data = {
      id : idUser
    };
    return this.http.post(this.constantesService.getConstante('URL_GET_USER'), data).toPromise<Result>();
  }
}
