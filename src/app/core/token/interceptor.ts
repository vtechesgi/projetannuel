import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.services';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add authorization header with jwt token if available
      let currentUser = localStorage.getItem('user');
      let token = localStorage.getItem('token');

      if (currentUser && token) {
          request = request.clone({
              setHeaders: {
                  'x-access-token': token
              }
          });
      }

      return next.handle(request);
  }
}
