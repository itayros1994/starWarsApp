(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{115:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(34),a=n.n(r),o=(n(115),n(20)),s=n(13),l=n(36),j=n(15),d=n(95),b=n.n(d),h={getMovies:function(){return b.a.get("https://swapi.dev/api/films").then((function(e){return e.data}))}};var v=n(1);function x(e){var t=e.movie,n=e.selectMovie;return Object(v.jsx)("div",{onClick:function(){return n(t)},className:"movie-preview",children:Object(v.jsx)("div",{children:t.title})})}var u=n(230),O=n(231),f=n(222),m=n(218),p=n(228),g=n(229),S=n(97),N=n.n(S);function w(e){var t=e.movieSum;return Object(v.jsx)("div",{children:Object(v.jsxs)(m.a,{children:[Object(v.jsx)(p.a,{expandIcon:Object(v.jsx)(N.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(v.jsx)(f.a,{children:"Movie Summary"})}),Object(v.jsx)(g.a,{children:Object(v.jsx)(f.a,{children:t})})]})})}var F=n(221);function M(e){var t=e.movie,n=e.onSetToFavorties;return t?Object(v.jsxs)(u.a,{sx:{minWidth:275},children:[Object(v.jsxs)(O.a,{children:[Object(v.jsx)(f.a,{variant:"h5",component:"div",children:t.title}),Object(v.jsx)(f.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:t.director}),Object(v.jsx)(f.a,{sx:{mb:1.5},color:"text.secondary",children:t.release_date}),Object(v.jsx)(f.a,{variant:"body2"})]}),Object(v.jsx)(F.a,{onClick:function(){return n(t)},variant:"contained",children:"Add To Favorites"}),Object(v.jsx)("div",{className:"movie-summary",children:Object(v.jsx)(w,{movieSum:t.opening_crawl})})]}):Object(v.jsx)("h2",{className:"hero",children:"Click On Movie!"})}var y=n(98),k=n.n(y);function C(e){var t=e.movies,n=e.onSetToFavorties,c=Object(i.useState)(""),r=Object(s.a)(c,2),a=r[0],o=r[1],l=function(e){window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(e)};return t.length?Object(v.jsxs)("div",{className:"movie-list-container",children:[Object(v.jsxs)("div",{className:"movie-preview-container",children:[Object(v.jsx)("h2",{className:"choose-movie",children:"Choose StarsWar Movie \ud83c\udfac"}),t.map((function(e){return Object(v.jsx)(x,{selectMovie:l,movie:e})}))]}),Object(v.jsx)("div",{className:"movie-details-container",children:Object(v.jsx)(M,{onSetToFavorties:n,movie:a})})]}):Object(v.jsxs)("div",{className:"loader",children:[" ",Object(v.jsx)(k.a,{color:"#00BFFF",type:"Circles"})]})}function T(e){var t=e.onSetToFavorties,n=Object(i.useState)([]),c=Object(s.a)(n,2),r=c[0],a=c[1];return Object(i.useEffect)((function(){h.getMovies().then((function(e){a(e.results),console.log(e.results)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"hero",children:"StarsWar App \ud83d\udca5 "}),Object(v.jsx)(C,{onSetToFavorties:t,movies:r})]})}function z(){return Object(v.jsx)("div",{className:"footer",children:Object(v.jsx)("div",{className:"coffee-rights",children:"\xa9 2021 Itay Rosental"})})}var I=n(82),B=n.n(I),A=n(225),E=n(224),J=n(226),R=n(223),W=n(219),D=n(216),G=n(213),H=n(100),L=n.n(H),P=n(99),_=n.n(P);function q(e){var t=e.favoritesMovies,n=i.useState(null),c=Object(s.a)(n,2),r=c[0],a=c[1],o=i.useState(null),j=Object(s.a)(o,2),d=j[0],b=j[1],h=Boolean(r),x=Boolean(d),u=function(){b(null)},O=function(){a(null),u()},m=Object(v.jsx)(G.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:O}),p="primary-search-account-menu-mobile",g=Object(v.jsx)(G.a,{anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},id:p,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:u,children:Object(v.jsxs)(D.a,{children:[Object(v.jsx)(R.a,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:Object(v.jsx)(W.a,{badgeContent:t.length,color:"error",children:Object(v.jsx)(l.b,{onClick:function(){return O()},className:"link",to:"/favorites",children:Object(v.jsx)(B.a,{})})})}),Object(v.jsx)(l.b,{onClick:function(){return O()},className:"link",to:"/favorites",children:Object(v.jsx)("p",{children:"Favorites"})})]})});return Object(v.jsxs)(E.a,{sx:{flexGrow:1},children:[Object(v.jsx)(A.a,{position:"static",children:Object(v.jsxs)(J.a,{children:[Object(v.jsx)(R.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(v.jsx)(l.b,{className:"link",to:"/",children:Object(v.jsx)(_.a,{})})}),Object(v.jsx)(f.a,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"StarsWar-App"}),Object(v.jsx)(E.a,{sx:{flexGrow:1}}),Object(v.jsx)(E.a,{sx:{display:{xs:"none",md:"flex"}},children:Object(v.jsx)(R.a,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:Object(v.jsx)(W.a,{badgeContent:t.length,color:"error",children:Object(v.jsx)(l.b,{className:"link",to:"/favorites",children:Object(v.jsx)(B.a,{})})})})}),Object(v.jsx)(E.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(v.jsx)(R.a,{size:"large","aria-label":"show more","aria-controls":p,"aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit",children:Object(v.jsx)(L.a,{})})})]})}),g,m]})}function K(e){var t=e.favoritesMovies,n=e.onRemoveFromFavorites,i=function(){};return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"hero",children:"Favorites Movies \ud83d\udcab"}),Object(v.jsx)("div",{className:"favorites-container",children:t.map((function(e){return Object(v.jsxs)("div",{className:"favorite",children:[Object(v.jsx)(x,{movie:e,selectMovie:i}),Object(v.jsx)(F.a,{variant:"contained",color:"info",onClick:function(){return n(e)},children:"Remove"})]})}))})]})}var Q=n(101),U=n(212),V=n(217),X=n(215),Y=i.forwardRef((function(e,t){return Object(v.jsx)(X.a,Object(Q.a)({elevation:6,ref:t,variant:"filled"},e))}));function Z(e){var t=e.open;return Object(v.jsx)(U.a,{spacing:2,sx:{width:"100%"},children:Object(v.jsx)(V.a,{open:t,autoHideDuration:6e3,children:Object(v.jsx)(Y,{severity:"success",sx:{width:"100%"},children:"Added To Favortite"})})})}n(159),n(160);var $=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(!1),a=Object(s.a)(r,2),d=a[0],b=a[1];Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favoritesMovies"))||[];c(e)}),[]);var h=function(){b(!0)},x=function(){setTimeout((function(){b(!1)}),3e3)};return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(q,{favoritesMovies:n}),Object(v.jsx)(j.c,{children:Object(v.jsxs)("div",{className:"main-container",children:[Object(v.jsx)(j.a,{exact:!0,path:"/",children:Object(v.jsx)(T,{onSetToFavorties:function(e){if(-1!==n.findIndex((function(t){return t.title===e.title})))return n;h(),x(),c([].concat(Object(o.a)(n),[e])),localStorage.setItem("favoritesMovies",JSON.stringify(n))}})}),Object(v.jsx)(j.a,{exact:!0,path:"/favorites",children:Object(v.jsx)(K,{onRemoveFromFavorites:function(e){c(n.filter((function(t){return t.title!==e.title}))),localStorage.setItem("favoritesMovies",JSON.stringify(n))},favoritesMovies:n})})]})}),Object(v.jsx)(Z,{open:d}),Object(v.jsx)(z,{})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)($,{})}),document.getElementById("root")),ee()}},[[161,1,2]]]);
//# sourceMappingURL=main.973c8e4f.chunk.js.map