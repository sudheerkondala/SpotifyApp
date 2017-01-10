import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../Model/Artist';
import { Album } from '../Model/Album';
import { SpotifyService } from '../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {
    id: string;
    album: Album[];

    constructor(private _spotifyserivce: SpotifyService,
        private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.map(params => params['id']).subscribe((id) => {
            console.log("this.album1" + id);
            this._spotifyserivce.getAlbum(id).subscribe(album => {
                this.album = album;
                console.log("this.album");
                console.log(this.album);
            })
             });
    }
}