(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(3),o=n.n(s),r=n(7),a=n(4),j=n(0),l=function(e){var t=e.handleInput,n=e.search;return Object(j.jsx)("section",{children:Object(j.jsx)("input",{type:"text",placeholder:"Search for a movie...",className:"searchbox",onChange:t,onKeyPress:n})})},d=function(e){var t=e.movie,n=e.openModal;return Object(j.jsxs)("div",{className:"movie",onClick:function(){return n(t.imdbID)},children:[Object(j.jsx)("img",{alt:"movie-poster",src:"N/A"===t.Poster?"https://placehold.it/198x264&text=Image+Not+Found":t.Poster}),Object(j.jsx)("h3",{children:t.Title})]})},b=function(e){var t=e.movies,n=e.openModal,c=[];return null==t?Object(j.jsx)("div",{style:{color:"white",textAlign:"center"},children:Object(j.jsx)("h2",{children:"Sorry, movie not found \ud83d\ude41"})}):(c=t.map((function(e){return Object(j.jsx)(d,{openModal:n,movie:e},e.imdbID)})),Object(j.jsx)("section",{className:"movies",children:c}))},h=n(46),m=function(e){var t=e.show,n=e.setShow,c=e.movie,i=e.onClose;return Object(j.jsx)(h.a,{in:t,unmountOnExit:!0,timeout:{enter:0,exit:300},children:Object(j.jsx)("div",{className:"modal",onClick:i,children:Object(j.jsx)("div",{className:"modal-background modal-showing-".concat(t),children:Object(j.jsxs)("div",{className:"modal-inner",onClick:function(e){return e.stopPropagation()},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"modal-image",src:c.Poster,alt:"poster"})}),Object(j.jsxs)("div",{className:"modal-text",children:[Object(j.jsxs)("h2",{children:[c.Title," ",Object(j.jsx)("br",{}),c.Year," ",Object(j.jsx)("br",{}),c.Rated]}),Object(j.jsxs)("h5",{children:["Director(s): ",c.Director]}),Object(j.jsx)("div",{className:"movie-desc",children:Object(j.jsx)("p",{children:c.Plot})}),Object(j.jsxs)("div",{children:["Cast: ",c.Actors]}),Object(j.jsx)("div",{children:c.Writers}),Object(j.jsxs)("div",{children:["IMDB Rating: ",c.imdbRating]}),Object(j.jsxs)("div",{children:["Runtime: ",c.Runtime]})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"ui button black",onClick:function(){n(!1)},children:"Close"})]})]})})})})},u=n(6),O=n.n(u),x=function(){var e="http://www.omdbapi.com/?apikey=".concat("10abef78","&"),t=Object(c.useState)({searchTerm:"",movies:[]}),n=Object(a.a)(t,2),i=n[0],s=n[1],o=Object(c.useState)(!1),d=Object(a.a)(o,2),h=d[0],u=d[1],x=Object(c.useState)({}),v=Object(a.a)(x,2),f=v[0],p=v[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"\ud83c\udfa5Movies\ud83c\udfa5"})}),Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(l,{handleInput:function(e){var t=e.target.value;s((function(e){return Object(r.a)(Object(r.a)({},e),{},{searchTerm:t})}))},search:function(t){"Enter"===t.key&&O.a.get(e+"&s="+i.searchTerm).then((function(e){var t=e.data.Search;s({movies:t})}))}}),Object(j.jsx)(b,{movies:i.movies,openModal:function(t){i.movies.length>0&&p(i.movies[0]),O()(e+"&i="+t).then((function(e){var t=e.data;p(t),u(!0)}))}}),"undefined"!=typeof f.Title&&Object(j.jsx)(m,{movie:f,show:h,setShow:u,onClose:function(){return u(!1)}})]})]})},v=(n(43),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))});o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.cb592c13.chunk.js.map