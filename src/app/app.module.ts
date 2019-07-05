import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/component/login/login.component';
import { HeaderComponent } from './core/component/header/header.component';
import { FooterComponent } from './core/component/footer/footer.component';
import { HomeComponent } from './core/component/home/home.component';
import { PlayerListComponent } from './core/component/player-list/player-list.component';
import { TeamListComponent } from './core/component/team-list/team-list.component';
import { ChampionnatListComponent } from './core/component/championnat-list/championnat-list.component';
import { NotFoundComponent } from './core/component/not-found/not-found.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {LocalStorageService} from './core/services/localstorage/localstorage.service';
import { LigueService } from './core/services/ligue/ligue.services';
import { ConstantesService } from './core/services/constantes/constantes.service';
import { SupHeaderComponent } from './core/component/sup-header/sup-header.component';
import { TeamService } from './core/services/team/team.services';
import { TeamComponent } from './core/component/team/team.component';
import { MatchComponent } from './core/component/match/match.component';
import { SigninComponent } from './core/component/signin/signin.component';
import { UsersService } from './core/services/user/user.service';
import { AuthService } from './core/services/auth/auth.services';
import { TchatComponent } from './core/component/tchat/tchat.component';
import { AdminComponent } from './core/component/admin/admin.component';
import { PronosticComponent } from './core/component/pronostic/pronostic.component';
import { JwtInterceptor } from './core/token/interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    TchatComponent,
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlayerListComponent,
    TeamListComponent,
    ChampionnatListComponent,
    NotFoundComponent,
    SupHeaderComponent,
    TeamComponent,
    MatchComponent,
    SigninComponent,
    AdminComponent,
    PronosticComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConstantesService, LigueService, LocalStorageService, TeamService , UsersService, AuthService,
              { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
