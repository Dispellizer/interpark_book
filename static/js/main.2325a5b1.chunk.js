(this.webpackJsonpinterpark_book=this.webpackJsonpinterpark_book||[]).push([[0],{19:function(e,a,t){e.exports=t(43)},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),c=t.n(o),s=t(2),i=t.n(s),l=t(13),m=t(14),p=t(15),k=t(17),d=t(18),u=t(16),E=t.n(u);var b=function(e){var a=e.title,t=e.rank,n=e.priceStandard,o=e.priceSales,c=e.description,s=e.coverImg,i=e.url;return r.a.createElement("div",{className:"book"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"book__data"},r.a.createElement("h3",{className:"book__rank"},"Rank # ",t),r.a.createElement("h3",{className:"book__title"},"\uc81c\ubaa9 : ",a),r.a.createElement("h4",{className:"book__priceStandard"},"\uc815\uac00 : ",n," \uc6d0"),r.a.createElement("h4",{className:"book__priceSales"},"\ud560\uc778\uac00 : ",o," \uc6d0"),r.a.createElement("p",{className:"book_description"},c.slice(0,140),"..."),r.a.createElement("a",{href:i},r.a.createElement("div",{className:"book_url"},"\uc0ac\ub7ec\uac00\uae30"))))},v=function(e){Object(d.a)(t,e);var a=Object(k.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={books:[],isLoading:!0},e.getBooks=Object(l.a)(i.a.mark((function a(){var t,n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.get("http://book.interpark.com/api/search.api?key=A357E38C2115CC09DE15F987B12EBC11EF74E36B1011C46D2C53A56D7A710023&query=%EC%82%BC%EA%B5%AD%EC%A7%80&output=json");case 2:t=a.sent,n=t.data.item,console.log(n),e.setState({books:n,isLoading:!1});case 6:case"end":return a.stop()}}),a)}))),e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"render",value:function(){var e=this.state,a=e.books,t=e.isLoading;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"books"},a.map((function(e){return r.a.createElement(b,{key:e.itemId,title:e.title,rank:e.rank,priceStandard:e.priceStandard,priceSales:e.priceSales,description:e.description,coverImg:e.coverLargeUrl,url:e.link})}))))}}]),t}(r.a.Component);t(42);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2325a5b1.chunk.js.map