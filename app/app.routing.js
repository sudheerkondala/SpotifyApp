"use strict";
var router_1 = require("@angular/router");
var about_components_1 = require("./components/about/about.components");
var search_components_1 = require("./components/search/search.components");
var artist_component_1 = require("./components/artist/artist.component");
var album_component_1 = require("./components/album/album.component");
var appRoutes = [
    {
        path: '',
        component: search_components_1.SearchComponent,
    },
    {
        path: 'about',
        component: about_components_1.AboutComponent,
    },
    {
        path: 'artist/:id',
        component: artist_component_1.ArtistComponent,
    },
    {
        path: 'album/:id',
        component: album_component_1.AlbumComponent,
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map