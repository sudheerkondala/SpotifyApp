import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.components';
import { SearchComponent } from './components/search/search.components';
import { AboutComponent } from './components/about/about.components';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { routing } from './app.routing';

import { HttpModule } from '@angular/http';


@NgModule({
    imports: [BrowserModule,routing, HttpModule, FormsModule],
    declarations: [AppComponent,
        NavbarComponent,  
        SearchComponent,
        ArtistComponent, AlbumComponent,    
        AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
