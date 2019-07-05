import {NgModule} from '@angular/core';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {HomeComponent} from './component/home/home.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {ConstantesService} from './services/constantes/constantes.service';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { TeamListComponent } from './component/team-list/team-list.component';
import { ChampionnatListComponent } from './component/championnat-list/championnat-list.component';
import { CommonModule } from '@angular/common';
import { SupHeaderComponent } from './component/sup-header/sup-header.component';
import { TeamComponent } from './component/team/team.component';
import { MatchComponent } from './component/match/match.component';
import { AdminComponent } from './component/admin/admin.component';
import { PronosticComponent } from './component/pronostic/pronostic.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './token/interceptor';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    PlayerListComponent,
    TeamListComponent,
    ChampionnatListComponent,
    SupHeaderComponent,
    TeamComponent,
    MatchComponent,
    AdminComponent,
    PronosticComponent,

  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent
  ],
  providers: [
    ConstantesService
  ]
})

export class CoreModule {
}
