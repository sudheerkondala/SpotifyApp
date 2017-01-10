import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../Model/Artist';
@Component({
    moduleId: module.id,
    selector: 'search'
    , templateUrl: 'search.components.html'
})
export class SearchComponent {
    searchstr: string;
    searchRes: Artist[];
    constructor(private _spotifyservice: SpotifyService)
    {

    }
    searchMusic()
    {
        this._spotifyservice.searchMusic(this.searchstr).subscribe(res =>{
            this.searchRes = res.artists.items;
        });
        
    }

}