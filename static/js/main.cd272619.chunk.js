(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(2),o=n.n(c),i=(n(13),n(3)),s=n(4),l=n(6),u=n(5),h=n(7),p=(n(14),n(15),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"img",src:"https://robohash.org/".concat(e.AppArr.id,"?set=set2&size=180x180")}),a.a.createElement("h2",null,e.AppArr.username),a.a.createElement("h4",null,e.AppArr.email))}),m=(n(16),function(e){return a.a.createElement("div",{className:"card-list"},e.AppArr.map((function(e){return a.a.createElement(p,{key:e.id,AppArr:e})})))}),d=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{type:"search",placeholder:t,onChange:n})}),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){return e.setState({searchField:t.target.value},(function(){return console.log(e.state)}))},e.state={AppArr:[],searchField:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({AppArr:t})}))}},{key:"render",value:function(){var e=this.state,t=e.AppArr,n=e.searchField,r=t.filter((function(e){return e.username.toLowerCase().includes(n.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Progressive web store"),a.a.createElement(d,{placeholder:"Search the store...",handleChange:this.handleChange}),a.a.createElement(m,{AppArr:r}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.cd272619.chunk.js.map