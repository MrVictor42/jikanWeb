(this["webpackJsonpjikan-web"]=this["webpackJsonpjikan-web"]||[]).push([[0],{285:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(28),c=n.n(a),s=n(78),i=n(173),o=n(164),u=n(17),j=n(75),l=n(141),b=n(165),d=n(166),p=n(180),h=n(177),O=n(137),x=n(27),f=function(e){return e.children},m=n(23),g=n.n(m),v=n(30),y=n(31),w=n(295),S=n(297),k=n(65),C=n(49),I=n.n(C),N=I.a.create({baseURL:"http://localhost:8080/api/"}),T=function(){var e=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.a.defaults.headers={"Content-Type":"application/json"},e.prev=1,e.next=4,N.get("gender/list");case 4:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.a.defaults.headers={"Content-Type":"application/json"},e.prev=1,e.next=4,N.get("producer/list");case 4:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.a.defaults.headers={"Content-Type":"application/json"},e.prev=1,e.next=4,N.get("anime/list");case 4:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.a.defaults.headers={"Content-Type":"application/json"},e.prev=1,e.next=4,N.get("anime/".concat(t));case 4:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.a.defaults.headers={"Content-Type":"application/json"},e.prev=1,e.next=4,N.get("anime/filterByGender/".concat(t[0]));case 4:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.a.defaults.headers={"Content-Type":"application/json"},e.prev=1,e.next=4,N.get("anime/filterByProducer/".concat(t[0]));case 4:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(v.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.a.defaults.headers={"Content-Type":"application/json"},e.prev=1,e.next=4,N.get("anime/filter/".concat(t[0],"/").concat(n[0]));case 4:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),M=n(119),R=n(301),B=n(294),D=n(293),G=n(6),U=D.a.Meta,Y=function(e){var t=e.item.genders.map((function(e){return null===e.name?"":e.name+" | "})),n=e.item.continuing?"Yes":"No",r=e.item.kids?"Yes":"No";return Object(G.jsx)(G.Fragment,{children:!0===e.visible?Object(G.jsx)(D.a,{style:{width:"auto",marginTop:20,paddingLeft:20,paddingRight:20},children:Object(G.jsx)(U,{avatar:Object(G.jsx)(B.a,{width:"auto",src:e.item.image_url}),title:Object(G.jsxs)("b",{children:[" ",e.item.title," "]}),description:Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("p",{align:"justify",style:{fontSize:"16px"},children:[Object(G.jsx)("b",{children:" Synopsis: "})," ",e.item.synopsis]}),Object(G.jsxs)("p",{style:{fontSize:"16px"},children:[Object(G.jsx)("b",{children:" Score: "})," ",e.item.score]}),Object(G.jsxs)("p",{style:{fontSize:"16px"},children:[Object(G.jsx)("b",{children:" Genders: "})," ",t]}),Object(G.jsxs)("p",{style:{fontSize:"16px"},children:[Object(G.jsx)("b",{children:" Episodes: "})," ",e.item.episodes]}),Object(G.jsxs)("p",{style:{fontSize:"16px"},children:[Object(G.jsx)("b",{children:" Continuous: "})," ",n]}),Object(G.jsxs)("p",{style:{fontSize:"16px"},children:[Object(G.jsx)("b",{children:" Kids: "})," ",r]}),Object(G.jsxs)("p",{style:{fontSize:"16px"},children:[Object(G.jsx)("b",{children:" Airing Start: "})," ",e.item.airing_start]})]})})}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("p",{align:"justify",style:{fontSize:"16px"},children:[Object(G.jsx)("b",{children:" Synopsis: "})," ",e.item.synopsis]}),Object(G.jsxs)("p",{style:{fontSize:"16px"},children:[Object(G.jsx)("b",{children:" Score: "})," ",e.item.score]}),Object(G.jsxs)("p",{style:{fontSize:"16px"},children:[Object(G.jsx)("b",{children:" Gender: "})," ",t]})]})})},P=n.p+"static/media/naruto_sad.2be248f7.gif",W=function(e){var t=Object(r.useState)(!0),n=Object(y.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),i=Object(y.a)(s,2),o=i[0],u=i[1];return Object(r.useEffect)((function(){c(e.loading),u(e.list)})),console.log(e),void 0===o?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("span",{className:"spanNotFound",children:'Not Found List Anime With This Gender and Producer Together... Try Another Combination or Click on "Restore"'}),Object(G.jsx)("img",{src:P,alt:"Not Found Search",className:"sad_gif"})]}):a?Object(G.jsx)(M.a,{tip:"Loading Anime List, Wait For ...",className:"loadingSpin"}):Object(G.jsx)(R.b,{itemLayout:"vertical",size:"small",pagination:{position:"both",showSizeChanger:!1},grid:{column:2},dataSource:o,style:{margin:"auto",width:"auto",paddingLeft:"30px",paddingRight:"35px"},renderItem:function(e){return Object(G.jsxs)(R.b.Item,{children:[Object(G.jsx)(R.b.Item.Meta,{style:{paddingTop:"20px"},title:Object(G.jsx)("a",{href:"/anime/".concat(e.slug),children:Object(G.jsxs)("b",{children:[" ",e.title," "]})})}),Object(G.jsx)(R.b.Item.Meta,{avatar:Object(G.jsx)(B.a,{width:"auto",src:e.image_url}),description:Object(G.jsx)(Y,{item:e,visible:!1})})]},e.title)}})},J=function(){var e=w.a.useForm(),t=Object(y.a)(e,1)[0],n=Object(r.useState)("inline"),a=Object(y.a)(n,1)[0],c=Object(r.useState)(""),s=Object(y.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(""),j=Object(y.a)(u,2),l=j[0],b=j[1],d=Object(r.useState)(!0),p=Object(y.a)(d,2),h=p[0],O=p[1],x=Object(r.useState)([]),f=Object(y.a)(x,2),m=f[0],C=f[1];Object(r.useEffect)((function(){function e(){return(e=Object(v.a)(g.a.mark((function e(){var t,n,r,a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,T();case 3:return t=e.sent,e.next=6,z();case 6:return n=e.sent,e.next=9,F();case 9:r=e.sent,a=n.data.map((function(e){return{value:e.id,label:e.name}})),c=t.data.map((function(e){return{value:e.id,label:e.name}})),C(r.data),b(a),o(c),O(!1);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var I=function(){var e=Object(v.a)(g.a.mark((function e(t){var n,r,a,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.gender,r=t.producer,O(!0),void 0===(n&&r)){e.next=10;break}return e.next=6,L(n,r);case 6:a=e.sent,C(a.data),e.next=21;break;case 10:if(null===n){e.next=17;break}return e.next=13,A(n);case 13:c=e.sent,C(c.data),e.next=21;break;case 17:return e.next=19,E(r);case 19:s=e.sent,C(s.data);case 21:O(!1);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,F();case 3:t=e.sent,C(t.data),O(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(w.a,{layout:a,form:t,initialValues:{layout:a},style:{paddingTop:"20px",margin:"auto",width:"auto",paddingLeft:"30%"},onFinish:I,children:[Object(G.jsx)(w.a.Item,{label:Object(G.jsx)("b",{children:" Genres "}),name:"gender",children:Object(G.jsx)(S.a,{placeholder:"",options:i,style:{width:"120px"}})}),Object(G.jsx)(w.a.Item,{label:Object(G.jsx)("b",{children:" Producers "}),name:"producer",children:Object(G.jsx)(S.a,{placeholder:"",options:l,style:{width:"120px"}})}),Object(G.jsx)(w.a.Item,{children:Object(G.jsx)(k.a,{block:!0,htmlType:"submit",children:" Apply "})}),Object(G.jsx)(w.a.Item,{children:Object(G.jsx)(k.a,{block:!0,onClick:function(){t.resetFields(),N()},children:"Restore"})})]}),Object(G.jsx)(W,{list:m,loading:h})]})},V=function(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(J,{})})},X=n(296),q=function(e){var t=Object(r.useState)(!0),n=Object(y.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(),i=Object(y.a)(s,2),o=i[0],u=i[1];return Object(r.useEffect)((function(){function t(){return(t=Object(v.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),t.next=3,_(e.match.params.slug);case 3:n=t.sent,u(n.data),c(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(G.jsx)(G.Fragment,{children:!0===a?Object(G.jsx)(X.a,{}):Object(G.jsx)(Y,{item:o,visible:!0})})},H=n(300),K=n(292),Q=function(){var e=Object(r.useState)([]),t=Object(y.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),s=Object(y.a)(c,2),i=s[0],o=s[1];Object(r.useEffect)((function(){function e(){return(e=Object(v.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,F();case 3:t=e.sent,n=t.data.map((function(e){return{key:e.id,title:Object(G.jsxs)("b",{children:[" ",Object(G.jsxs)("a",{href:"/anime/".concat(e.slug),children:[" ",e.title," "]})," "]}),tagsAiring_Start:[e.airing_start],tagsEpisodes:[e.episodes],tagsScore:[e.score]}})),a(n),o(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var u=[{title:Object(G.jsxs)("b",{children:[" ","Title"," "]}),dataIndex:"title",key:"title",width:"20%"},{title:Object(G.jsxs)("b",{children:[" ","Airing Start"," "]}),dataIndex:"tagsAiring_Start",key:"tagsAiring_Start",width:"10%",render:function(e){return Object(G.jsx)(G.Fragment,{children:e.map((function(e){var t,n,r="",a="",c=(new Date).getDate(),s=(new Date).getMonth(),i=(new Date).getFullYear();return r=(t=i+"-"+s+"-"+c)>(n=e)?"Already Launched!":t<n?"Not Yet Released!":"Released Today!",a=(r="Already Launched!")?"red":(r="Not Yet Released!")?"green":"blue",Object(G.jsx)(H.a,{color:a,children:Object(G.jsxs)("b",{children:[" ",e," ",r," "]})},e)}))})}},{title:Object(G.jsxs)("b",{children:[" ","Episodes"," "]}),dataIndex:"tagsEpisodes",key:"tagsEpisodes",width:"10%",render:function(e){return Object(G.jsx)(G.Fragment,{children:e.map((function(e){var t="";return t=0===e?"red":"blue",Object(G.jsx)(H.a,{color:t,children:Object(G.jsxs)("b",{children:[" ",e," "]})},e)}))})}},{title:Object(G.jsxs)("b",{children:[" ","Score"," "]}),dataIndex:"tagsScore",key:"tagsScore",width:"10%",render:function(e){return Object(G.jsx)(G.Fragment,{children:e.map((function(e){var t="";return t=e>=0&&e<=6?"red":e>6&&e<=8?"green":"blue",Object(G.jsx)(H.a,{color:t,children:Object(G.jsxs)("b",{children:[" ",e," "]})},e)}))})}}];return i?Object(G.jsx)(M.a,{tip:"Loading Table Anime, Wait For ...",className:"loadingSpin"}):Object(G.jsx)(K.a,{columns:u,dataSource:n,pagination:{showSizeChanger:!1}})},Z=function(){return Object(G.jsxs)(f,{children:[Object(G.jsx)(x.a,{exact:!0,path:"/",component:V}),Object(G.jsx)(x.a,{path:"/anime/:slug",component:q}),Object(G.jsx)(x.a,{path:"/table_anime",component:Q})]})},$=(n(284),n(285),n(291)),ee=n(299),te=n(81),ne=n(104),re=te.a.SubMenu,ae=te.a.ItemGroup,ce=ne.a.useBreakpoint,se=function(){var e=ce().md;return Object(G.jsxs)(te.a,{mode:e?"horizontal":"inline",style:{fontSize:"16px",color:"#1890ff"},children:[Object(G.jsxs)(re,{title:Object(G.jsx)("span",{children:" Content "}),children:[Object(G.jsx)(ae,{title:"Anime",children:Object(G.jsx)(te.a.Item,{children:" Anime "},"animeContent")}),Object(G.jsx)(ae,{title:"Manga",children:Object(G.jsx)(te.a.Item,{children:" Manga "},"mangaContent")})]},"content"),Object(G.jsxs)(re,{title:Object(G.jsx)("span",{children:" Lists "}),children:[Object(G.jsx)(ae,{title:"Anime",children:Object(G.jsxs)(te.a.Item,{children:[" ",Object(G.jsx)("a",{href:"/table_anime",children:" Anime "})]},"animeList")}),Object(G.jsx)(ae,{title:"Manga",children:Object(G.jsx)(te.a.Item,{children:" Manga "},"Manga")})]},"sub1"),Object(G.jsx)(te.a.Item,{children:Object(G.jsx)("a",{href:"/",style:{fontSize:"16px",color:"#1890ff"},children:" Top10! "})},"top10"),Object(G.jsx)(te.a.Item,{children:Object(G.jsx)("a",{href:"/",style:{fontSize:"16px",color:"#1890ff"},children:"Contact Us"})},"contact")]})},ie=n(298),oe=n(290),ue=n(176),je=(n(286),function(){var e=Object(r.useState)([]),t=Object(y.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){return(e=Object(v.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,n=t.data.map((function(e){return{key:e.id,value:e.title,label:Object(G.jsxs)("div",{children:[Object(G.jsx)(ie.a,{shape:"square",size:64,icon:Object(G.jsx)(B.a,{src:e.image_url})}),Object(G.jsxs)("a",{href:"/anime/".concat(e.slug),children:[" ",Object(G.jsxs)("b",{children:[" ",e.title," "]})," "]})]})}})),a(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(G.jsx)(oe.a,{dropdownClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:300,className:"searchbar",options:n,filterOption:function(e,t){return-1!==t.value.toUpperCase().indexOf(e.toUpperCase())},children:Object(G.jsx)(ue.a,{placeholder:"Search Here..."})})}),le=function(){var e=Object(r.useState)(!1),t=Object(y.a)(e,2),n=t[0],a=t[1];return Object(G.jsxs)("nav",{className:"menuBar",children:[Object(G.jsx)("div",{className:"logo",children:Object(G.jsx)("a",{href:"/",children:"MyAn"})}),Object(G.jsxs)("div",{className:"menuCon",children:[Object(G.jsx)("div",{className:"leftMenu",children:Object(G.jsx)(se,{style:{fontSize:"16px",color:"#1890ff"}})}),Object(G.jsx)(je,{}),Object(G.jsx)(k.a,{className:"barsMenu",type:"primary",onClick:function(){a(!0)},children:Object(G.jsx)("span",{className:"barsBtn"})}),Object(G.jsx)(ee.a,{title:"Basic Drawer",placement:"left",closable:!1,onClose:function(){a(!1)},visible:n,children:Object(G.jsx)(se,{})})]})]})},be=$.a.Content,de=function(e){return Object(G.jsxs)($.a,{style:{backgroundColor:"white"},children:[Object(G.jsx)(le,{isLogged:e.token}),Object(G.jsx)(be,{children:e.children})]})},pe=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(G.jsx)(O.a,{children:Object(G.jsx)(de,Object(l.a)(Object(l.a)({},this.props),{},{children:Object(G.jsx)(Z,{})}))})}}]),n}(r.Component),he=(n(287),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d),Oe=Object(s.c)({}),xe=Object(s.e)(Oe,he(Object(s.a)(o.a))),fe=Object(G.jsx)(u.a,{locale:j.a,children:Object(G.jsx)(i.a,{store:xe,children:Object(G.jsx)(pe,{})})});c.a.render(fe,document.getElementById("root"))}},[[288,1,2]]]);
//# sourceMappingURL=main.41d6d315.chunk.js.map