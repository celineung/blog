(self.webpackChunkblog=self.webpackChunkblog||[]).push([[351],{7606:function(e,t,r){"use strict";r.d(t,{G:function(){return g}});var n=r(4694),o=r(5697),i=r.n(o),a=r(7294);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=d(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e}),{})}var m=!1;try{m=!0}catch(T){}function b(e){return n.parse.icon?n.parse.icon(e):null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}function g(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),o=r.icon,i=r.mask,a=r.symbol,c=r.className,s=r.title,d=r.titleId,y=b(o),T=h("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,i=e.inverse,a=e.border,c=e.listItem,s=e.flip,l=e.size,f=e.rotation,p=e.pull,d=(u(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(l),null!=l),u(t,"fa-rotate-".concat(f),null!=f&&0!==f),u(t,"fa-pull-".concat(p),null!=p),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(r)),p(c.split(" ")))),w=h("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),O=h("mask",b(i)),A=(0,n.icon)(y,l({},T,{},w,{},O,{symbol:a,title:s,titleId:d}));if(!A)return function(){var e;!m&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",y),null;var E=A.abstract,C={ref:t};return Object.keys(r).forEach((function(e){g.defaultProps.hasOwnProperty(e)||(C[e]=r[e])})),v(E[0],C)}g.displayName="FontAwesomeIcon",g.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},g.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),a=n.style,c=void 0===a?{}:a,u=f(n,["style"]);return i.attrs.style=l({},i.attrs.style,{},c),t.apply(void 0,[r.tag,l({},i.attrs,{},u)].concat(p(o)))}.bind(null,a.createElement)},3302:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},3289:function(e,t,r){"use strict";r.d(t,{Z:function(){return Ae}});var n=r(7294),o=r(5444);function i(e){var t=e.siteTitle;return n.createElement("header",{className:"header"},n.createElement(o.Link,{to:"/"},t))}var a=r(7606),c=r(7190);function u(){return n.createElement("footer",{className:"footer"},n.createElement("a",{href:"https://github.com/celineung/blog",className:"footer__link"},n.createElement(a.G,{icon:c.zhw,"aria-hidden":"true"}),n.createElement("span",{className:"footer-link__text"},"Github")),n.createElement("a",{href:"https://linkedin.com/in/celine-ung",className:"footer__link"},n.createElement(a.G,{icon:c.D9H,"aria-hidden":"true"}),n.createElement("span",{className:"footer-link__text"},"LinkedIn")))}var s,l,f,p,d=r(5697),y=r.n(d),m=r(4839),b=r.n(m),h=r(3302),g=r.n(h),v=r(6494),T=r.n(v),w="bodyAttributes",O="htmlAttributes",A="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(E).map((function(e){return E[e]})),"charset"),S="cssText",j="href",k="http-equiv",x="innerHTML",P="itemprop",I="name",N="property",L="rel",_="src",M="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",H="defer",U="encodeSpecialCharacters",z="onChangeClientState",B="titleTemplate",q=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),F=[E.NOSCRIPT,E.SCRIPT,E.STYLE],Y="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},$=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=ne(e,E.TITLE),r=ne(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ne(e,D);return t||n||void 0},X=function(e){return ne(e,z)||function(){}},ee=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},te=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},re=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ue("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===L&&"canonical"===e[r].toLowerCase()||u===L&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==x&&c!==S&&c!==P||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=T()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},ne=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},oe=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){oe(e)}),0)}),ie=function(e){return clearTimeout(e)},ae="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||oe:r.g.requestAnimationFrame||oe,ce="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ie:r.g.cancelAnimationFrame||ie,ue=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},se=null,le=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;de(E.BODY,n),de(E.HTML,o),pe(f,p);var d={baseTag:ye(E.BASE,r),linkTags:ye(E.LINK,i),metaTags:ye(E.META,a),noscriptTags:ye(E.NOSCRIPT,c),scriptTags:ye(E.SCRIPT,s),styleTags:ye(E.STYLE,l)},y={},m={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,y,m)},fe=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=fe(e)),de(E.TITLE,t)},de=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(Y),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(Y):r.getAttribute(Y)!==a.join(",")&&r.setAttribute(Y,a.join(","))}},ye=function(e,t){var r=document.head||document.querySelector(E.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===x)r.innerHTML=t.innerHTML;else if(n===S)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(Y,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},me=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)},he=function(e,t,r){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(o={key:e})[Y]=!0,i=be(r,o),[n.createElement(E.TITLE,i,e)];var e,r,o,i},toString:function(){return function(e,t,r,n){var o=me(r),i=fe(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Z(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case w:case O:return{toComponent:function(){return be(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,i=((o={key:r})[Y]=!0,o);return Object.keys(t).forEach((function(e){var r=R[e]||e;if(r===x||r===S){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===x||e===S)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+Z(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},ge=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:he(E.BASE,t,n),bodyAttributes:he(w,r,n),htmlAttributes:he(O,o,n),link:he(E.LINK,i,n),meta:he(E.META,a,n),noscript:he(E.NOSCRIPT,c,n),script:he(E.SCRIPT,u,n),style:he(E.STYLE,s,n),title:he(E.TITLE,{title:f,titleAttributes:p},n)}},ve=b()((function(e){return{baseTag:te([j,M],e),bodyAttributes:ee(w,e),defer:ne(e,H),encode:ne(e,U),htmlAttributes:ee(O,e),linkTags:re(E.LINK,[L,j],e),metaTags:re(E.META,[I,C,k,N,P],e),noscriptTags:re(E.NOSCRIPT,[x],e),onChangeClientState:X(e),scriptTags:re(E.SCRIPT,[_,x],e),styleTags:re(E.STYLE,[S],e),title:J(e),titleAttributes:ee(A,e)}}),(function(e){se&&ce(se),e.defer?se=ae((function(){le(e,(function(){se=null}))})):(le(e),se=null)}),ge)((function(){return null})),Te=(l=ve,p=f=function(e){function t(){return K(this,t),$(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!g()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return V({},n,((t={})[r.type]=[].concat(n[r.type]||[],[V({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case E.TITLE:return V({},o,((t={})[n.type]=a,t.titleAttributes=V({},i),t));case E.BODY:return V({},o,{bodyAttributes:V({},i)});case E.HTML:return V({},o,{htmlAttributes:V({},i)})}return V({},o,((r={})[n.type]=V({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=V({},t);return Object.keys(e).forEach((function(t){var n;r=V({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(Q(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Q(e,["children"]),o=V({},r);return t&&(o=this.mapChildrenToProps(t,o)),n.createElement(l,o)},G(t,null,[{key:"canUseDOM",set:function(e){l.canUseDOM=e}}]),t}(n.Component),f.propTypes={base:y().object,bodyAttributes:y().object,children:y().oneOfType([y().arrayOf(y().node),y().node]),defaultTitle:y().string,defer:y().bool,encodeSpecialCharacters:y().bool,htmlAttributes:y().object,link:y().arrayOf(y().object),meta:y().arrayOf(y().object),noscript:y().arrayOf(y().object),onChangeClientState:y().func,script:y().arrayOf(y().object),style:y().arrayOf(y().object),title:y().string,titleAttributes:y().object,titleTemplate:y().string},f.defaultProps={defer:!0,encodeSpecialCharacters:!0},f.peek=l.peek,f.rewind=function(){var e=l.rewind();return e||(e=ge({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);Te.renderStatic=Te.rewind;function we(e){var t,r=e.description,i=e.lang,a=void 0===i?"fr":i,c=e.meta,u=e.pageTitle,s=e.image,l=e.pathname,f=(0,o.useStaticQuery)("764694655").site,p=r||f.siteMetadata.description,d=u+" "+("| "+f.siteMetadata.title),y=s&&s.src?""+f.siteMetadata.siteUrl+s.src:f.siteMetadata.siteUrl+"/images/coding_on_laptop.jpg",m=l?""+f.siteMetadata.siteUrl+l:null;return n.createElement(Te,{htmlAttributes:{lang:a},title:d,titleTemplate:d,link:m?[{rel:"canonical",href:m}]:[],meta:[{name:"description",content:p},{property:"og:title",content:d},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(t=f.siteMetadata)||void 0===t?void 0:t.author)||""},{name:"twitter:title",content:d},{name:"twitter:description",content:p}].concat(y?[{property:"og:image",content:y},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(c)})}we.defaultProps={lang:"en",meta:[]};var Oe=we,Ae=function(e){var t=e.children,r=e.location,a=e.pageTitle,c=e.image,s=e.pathname,l=e.description,f="/blog/"===r,p=(0,o.useStaticQuery)("3649515864").site.siteMetadata.title;return n.createElement(n.Fragment,null,n.createElement(Oe,{pageTitle:a,image:c,pathname:s,description:l}),!f&&n.createElement(i,{siteTitle:p}),f&&n.createElement("div",{className:"layout__banner",role:"banner"},n.createElement("h1",{className:"layout-banner__title"},p),n.createElement("div",null,"tech • méthodologie • retour d'expérience")),n.createElement("div",{className:"layout__container"},n.createElement("main",null,t)),n.createElement(u,null))}}}]);
//# sourceMappingURL=commons-da142258a3b48c637d03.js.map