(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){'use strict';function i(j,a,b,c,d,e,f){try{var g=j[e](f),h=g.value}catch(c){return void b(c)}g.done?a(h):Promise.resolve(h).then(c,d)}function d(j){return function(){var a=this,b=arguments;return new Promise(function(c,d){function e(b){i(g,c,d,e,f,'next',b)}function f(b){i(g,c,d,e,f,'throw',b)}var g=j.apply(a,b);e(void 0)})}}c.r(b);var e,f,g=function(){var b=d(regeneratorRuntime.mark(function g(){var h,b,c,i,j;return regeneratorRuntime.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,g.next=3,fetch('https://api.chucknorris.io/jokes/random');case 3:if(h=g.sent,h.ok){g.next=6;break}throw'No se pudo realizar la petici\xF3n';case 6:return g.next=8,h.json();case 8:return b=g.sent,c=b.icon_url,i=b.id,j=b.value,g.abrupt('return',{icon_url:c,id:i,value:j});case 15:throw g.prev=15,g.t0=g['catch'](0),g.t0;case 18:case'end':return g.stop();}},g,null,[[0,15]])}));return function(){return b.apply(this,arguments)}}(),h=function(){var b=d(regeneratorRuntime.mark(function e(){var f,b,c;return regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,fetch('https://reqres.in/api/users?page=2');case 2:return f=d.sent,d.next=5,f.json();case 5:return b=d.sent,c=b.data,d.abrupt('return',c);case 8:case'end':return d.stop();}},e)}));return function(){return b.apply(this,arguments)}}(),j=function(){var b=d(regeneratorRuntime.mark(function f(g){var b,h,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b=new FormData,b.append('upload_preset','gpao9h4q'),b.append('file',g),e.prev=3,e.next=6,fetch('https://api.cloudinary.com/v1_1/dkxjiewvi/upload',{method:'POST',body:b});case 6:if(h=e.sent,!h.ok){e.next=14;break}return e.next=10,h.json();case 10:return d=e.sent,e.abrupt('return',d.secure_url);case 14:return e.next=16,h.json();case 16:throw e.sent;case 17:e.next=22;break;case 19:throw e.prev=19,e.t0=e['catch'](3),e.t0;case 22:case'end':return e.stop();}},f,null,[[3,19]])}));return function(){return b.apply(this,arguments)}}(),k=document.body,l=function(){var b=document.createElement('div');b.innerHTML='\n     \n     <h1 class="mt-5">Subir archivos</h1>\n     <hr>\n\n     <label>Selecciona un archivo</lablel>\n     <input type="file" accept="image/png, image/jpg, image/gif"/>\n     <br>\n     <img id="foto" class"img-thumbnail" src="">\n     \n     ',k.append(b),e=document.querySelector('input'),f=document.querySelector('#foto')},m=function(){e.addEventListener('change',function(c){var a=c.target.files[0];j(a).then(function(b){return f.src=b})})};(function(){l(),m()})()}]);