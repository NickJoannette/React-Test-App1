(window["webpackJsonpthree-js-sample"]=window["webpackJsonpthree-js-sample"]||[]).push([[0],{13:function(e,n,t){e.exports=t(20)},18:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(6),r=t.n(a),o=t(10),i=t.n(o),c=(t(18),t(19),t(1)),s=t(4),l=t(2),w=t(3),d=t(0),u=t(11),h=t(12);var m=function(e){Object(l.a)(t,e);var n=Object(w.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){!function(e){var n=new d.M;n.background=new d.g(.03,.02,.02);var t=new d.F(75,window.innerWidth/window.innerHeight,.1,1e4);t.position.z=5;var a=new d.ab;a.setSize(window.innerWidth,window.innerHeight),e.appendChild(a.domElement);var r=new u.a(t,e);r.target.set(0,0,0),r.rotateSpeed=.5,r.update(),new d.P(5,6,6);var o=new d.B({color:new d.g(0,.25,.65),emissive:1118481,specular:16777215,metalness:.45,roughness:.05});new d.y(new d.G(2e3,2e3),new d.A({color:10066329,depthWrite:!1})).receiveShadow=!0,new d.o(2e3,20,0,0).material=o;var i=1;(new h.a).load("./models/earth_lowpoly.fbx",(function(e){e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.scale.x=.5,e.scale.y=.5,e.scale.z=.5)})),i=e,n.add(e)}));var c=new d.a(new d.g(.5,.5,.5));n.add(c),function e(){requestAnimationFrame(e),1!=i&&(i.rotation.y+=.005),a.render(n,t)}()}(this.scene)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:function(n){return e.scene=n}}))}}]),t}(a.Component);var v=function(){return r.a.createElement("div",null,r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("3js1")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.baf3a70f.chunk.js.map