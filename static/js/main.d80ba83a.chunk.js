(window.webpackJsonpmovie_app_2019=window.webpackJsonpmovie_app_2019||[]).push([[0],{12:function(e,a,t){},21:function(e,a,t){e.exports=t(44)},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),i=t.n(s),o=t(2),c=t.n(o),m=t(14),l=t(15),u=t(16),v=t(19),d=t(17),p=t(20),_=t(18),g=t.n(_);t(12);var y=function(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},i.map(function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)})),r.a.createElement("p",{className:"movie__summary"},n.slice(0,140),"...")))},E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(v.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.getMovie=Object(m.a)(c.a.mark(function e(){var a,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=e.sent,n=a.data.data.movies,console.log(n),t.setState({movies:n,isLoading:!1});case 6:case"end":return e.stop()}},e)})),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},'"Loading..."')):r.a.createElement("div",{className:"movies"},t.map(function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})})))}}]),a}(r.a.Component);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d80ba83a.chunk.js.map