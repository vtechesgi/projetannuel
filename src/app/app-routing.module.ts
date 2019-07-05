import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './core/component/not-found/not-found.component';
import {LoginComponent} from './core/component/login/login.component';
import {HomeComponent} from './core/component/home/home.component';
import {PlayerListComponent} from './core/component/player-list/player-list.component';
import {TeamListComponent} from './core/component/team-list/team-list.component';
import {ChampionnatListComponent} from './core/component/championnat-list/championnat-list.component';
import { SupHeaderComponent } from './core/component/sup-header/sup-header.component';
import { TeamComponent } from './core/component/team/team.component';
import { MatchComponent } from './core/component/match/match.component';
import { SigninComponent } from './core/component/signin/signin.component';
import { TchatComponent } from './core/component/tchat/tchat.component';
import { AdminComponent } from './core/component/admin/admin.component';
import { PronosticComponent } from './core/component/pronostic/pronostic.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'pronostic',
    component: PronosticComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'player',
    component: PlayerListComponent
  },
  {
    path: 'team/:id',
    component: TeamComponent
  },
  {
    path: 'ligue/:id',
    component: ChampionnatListComponent,
  },
  {
    path: 'match/:id',
    component: MatchComponent,
  },
  {
    path: 'match/:id/tchat',
    component: TchatComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
