import {Injectable, Output, EventEmitter} from '@angular/core';
import {Users} from '../../models/users';
import {LocalStorageService} from '../localstorage/localstorage.service';
import {Observable, BehaviorSubject} from 'rxjs';
import { LogService } from '../ligue/log.services';
import { UsersService } from '../user/user.service';
import { JwtResponse } from '../../models/jwt';


@Injectable()
export class AuthService {
  currentUser: Users = {};

  constructor(private userservice: UsersService, private localService: LocalStorageService) {

  }


  async isUserAuthenticated(username: string, password: string): Promise<boolean> {

    //this.localService.set('currentUser',this.currentUser.toString());
    let isLoggedIn = false;
    let token = '';
    let idUser;
    let emailUser = '';
    let lvl;
// tslint:disable-next-line: only-arrow-functions
    await this.userservice.getLog(username, password).then(function(res) {
    if (res.success === true) {
      token = res.token;
      idUser = res.user._id;
      emailUser = res.user.email;
      lvl = res.user.level;
      //localStorage.setItem()
      isLoggedIn = true;
    }
  });
    if (!isLoggedIn) {
    this.localService.remove('currentUser');
  } else {
    this.currentUser = {
      name : username,
      email : emailUser,
      id : idUser,
      level : lvl
    };

    this.localService.set('user', JSON.stringify(this.currentUser) );
    this.localService.set('username', this.currentUser.name);
    this.localService.set('email', this.currentUser.email);
    this.localService.set('id', this.currentUser.id.toString());
    this.localService.set('level', this.currentUser.level.toString());
    this.localService.set('token', token);
// tslint:disable-next-line: only-arrow-functions
  }

    return isLoggedIn;

}
async createUser(email: string, username: string, password: string) {
  let iscreate = false;
// tslint:disable-next-line: only-arrow-functions
  await this.userservice.postSign(email, username, password).then(function(res) {
    if (res.success === true) {
      iscreate = true;
    }
  });
  return iscreate;
}
}
