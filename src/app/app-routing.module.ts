import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickStartComponent } from './components/quick-start/quick-start.component';
import { ComptComponent } from './components/compt/compt.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FormsComponent } from './components/forms/forms.component';
import { DiProviderComponent } from './components/di-provider/di-provider.component';
import { HttpComponent } from './components/http/http.component';
import { RoutingComponent } from './components/routing/routing.component';
import { RouteArtistComponent } from './components/route-artist/route-artist.component';
import { RouteArtistTracksComponent } from './components/route-artist-tracks/route-artist-tracks.component';
import { RouteArtistAlbumsComponent } from './components/route-artist-albums/route-artist-albums.component';
import { RouteArtistVideosComponent } from './components/route-artist-videos/route-artist-videos.component';

import { ProjectComponent } from './components/project/project.component';
import { ProjectSearchComponent } from './components/project-search/project-search.component';
import { ProjectLibraryComponent } from './components/project-library/project-library.component';
import { ProjectBookComponent } from './components/project-book/project-book.component';

import { AlwaysAuthGuard } from './guards/always-auth.guard';
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users.guard';
import { AlwaysAuthChildrenGuard } from './guards/always-auth-children.guard';
import { UnsearchTermGuard } from './guards/unsearch-term.guard';

const routes: Routes = [
  { path: '', redirectTo: 'quickstart', pathMatch: 'full' },
  { path: 'quickstart', component: QuickStartComponent},
  { path: 'components', component: ComptComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'diproviders', component: DiProviderComponent},
  { path: 'http', component: HttpComponent},
  { path: 'routing',
    component: RoutingComponent,
    canDeactivate: [UnsearchTermGuard]},
  { path: 'artist/:artistId',
    component: RouteArtistComponent,
    // canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    canActivateChild: [AlwaysAuthChildrenGuard],
    children: [
      {path: '', redirectTo: 'tracks', pathMatch: 'full'},
      {path: 'tracks', component: RouteArtistTracksComponent},
      {path: 'albums', component: RouteArtistAlbumsComponent},
      {path: 'videos', component: RouteArtistVideosComponent},
    ]
  },
  { path: 'project',
    component: ProjectComponent,
    children: [
      {path: '', redirectTo: 'search', pathMatch: 'full'},
      {path: 'search', component: ProjectSearchComponent},
      {path: 'library', component: ProjectLibraryComponent},
      {path: 'book/:id', component: ProjectBookComponent}
    ]
  },
  { path: '**', component: QuickStartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
