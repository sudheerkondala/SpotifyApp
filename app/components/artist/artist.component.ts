﻿import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../Model/Artist';
import { Album } from '../Model/Album';
import { SpotifyService } from '../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(private _spotifyserivce: SpotifyService,
        private _route: ActivatedRoute)
    {

    }

    ngOnInit()
    {
        this._route.params.map(params => params['id']).subscribe((id) => {
            this._spotifyserivce.getArtist(id).subscribe(artist => {
                this.artist = artist;
                console.log(this.artist);

            })
            this._spotifyserivce.getAlbums(id).subscribe(albums => {
                this.albums = albums.items;
            })
        });
    }
}