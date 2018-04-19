import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuickStartComponent } from './components/quick-start/quick-start.component';
import { GsJokeListComponent } from './components/gs-joke-list/gs-joke-list.component';
import { GsJokeComponent } from './components/gs-joke/gs-joke.component';
import { GsJokeFormComponent } from './components/gs-joke-form/gs-joke-form.component';
import { ComptComponent } from './components/compt/compt.component';
import { ComptJokeComponent } from './components/compt-joke/compt-joke.component';
import { ComptLifeCyclesComponent } from './components/compt-life-cycles/compt-life-cycles.component';
import { ComptCarouselComponent } from './components/compt-carousel/compt-carousel.component';
import { ComptCarouselItemComponent } from './components/compt-carousel-item/compt-carousel-item.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DirRxjsFormComponent } from './components/dir-rxjs-form/dir-rxjs-form.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FormsComponent } from './components/forms/forms.component';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { ReactiveSearchFormComponent } from './components/reactive-search-form/reactive-search-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { DiProviderComponent } from './components/di-provider/di-provider.component';
import { DiParentComponent } from './components/di-parent/di-parent.component';
import { DiChildComponent } from './components/di-child/di-child.component';
import { HttpComponent } from './components/http/http.component';

import { DirCcCardHoverDirective } from './dir-cc-card-hover.directive';
import { DirCcRolloverDirective } from './dir-cc-rollover.directive';

import { DefaultPipe } from './default.pipe';
import { CleanPipe } from './clean.pipe';

import { SimpleService } from './services/simple.service';
import { SearchHttpService } from './services/search-http.service';
import { SearchJsonpService } from './services/search-jsonp.service';
import { HttpReactiveSearchComponent } from './components/http-reactive-search/http-reactive-search.component';
import { RoutingComponent } from './components/routing/routing.component';
import { RouteArtistComponent } from './components/route-artist/route-artist.component';
import { RouteArtistAlbumsComponent } from './components/route-artist-albums/route-artist-albums.component';
import { RouteArtistTracksComponent } from './components/route-artist-tracks/route-artist-tracks.component';
import { RouteArtistVideosComponent } from './components/route-artist-videos/route-artist-videos.component';
import { EmailDomainValidator } from './components/template-form/template-form.component';

import { AlwaysAuthGuard } from './guards/always-auth.guard';
import { UserService } from './services/user.service';
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users.guard';
import { AlwaysAuthChildrenGuard } from './guards/always-auth-children.guard';
import { UnsearchTermGuard } from './guards/unsearch-term.guard';
import { ProjectComponent } from './components/project/project.component';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { ProjectSearchComponent } from './components/project-search/project-search.component';
import { ProjectLibraryComponent } from './components/project-library/project-library.component';

import { GoogleBooksService } from './services/google-books.service';
import { LibraryDataService } from './services/library-data.service';
import { ProjectBookComponent } from './components/project-book/project-book.component';
import { ProjectSearchBookComponent } from './components/project-search-book/project-search-book.component';
import { ProjectCardHoverDirective } from './project-card-hover.directive';

import { AsimGoogleBookService } from './services/asim-google-book.service';
import { ProjectPagerComponent } from './components/project-pager/project-pager.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuickStartComponent,
    GsJokeListComponent,
    GsJokeComponent,
    GsJokeFormComponent,
    ComptComponent,
    ComptJokeComponent,
    ComptLifeCyclesComponent,
    ComptCarouselComponent,
    ComptCarouselItemComponent,
    DirectivesComponent,
    DirCcCardHoverDirective,
    DirCcRolloverDirective,
    DirRxjsFormComponent,
    PipesComponent,
    DefaultPipe,
    CleanPipe,
    FormsComponent,
    ModelFormComponent,
    ReactiveSearchFormComponent,
    TemplateFormComponent,
    DiProviderComponent,
    DiParentComponent,
    DiChildComponent,
    HttpComponent,
    HttpReactiveSearchComponent,
    RoutingComponent,
    RouteArtistComponent,
    RouteArtistAlbumsComponent,
    RouteArtistTracksComponent,
    RouteArtistVideosComponent,
    EmailDomainValidator,
    ProjectComponent,
    ProjectHeaderComponent,
    ProjectSearchComponent,
    ProjectLibraryComponent,
    ProjectBookComponent,
    ProjectSearchBookComponent,
    ProjectCardHoverDirective,
    ProjectPagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, // use this, no need to add Http in providers,
    JsonpModule
  ],
  providers: [SimpleService, SearchHttpService, SearchJsonpService,
              AlwaysAuthGuard, UserService, OnlyLoggedInUsersGuard,
              AlwaysAuthChildrenGuard, UnsearchTermGuard,
              GoogleBooksService, LibraryDataService, AsimGoogleBookService
              // {provide: 'RequiredDomain', useValue: 'google.ca'}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
