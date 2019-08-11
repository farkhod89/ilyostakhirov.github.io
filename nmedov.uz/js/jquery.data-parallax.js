!function(t){"use strict";function e(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function i(){var e=[],i=this.data("parallax"),n=this.data("parallax-js");"undefined"!=typeof i||(i={}),"object"==typeof i||console.error("Unable to parse data-parallax attribute "+S(this)),"undefined"!=typeof n||(n={}),"object"==typeof n||console.error("Unrecognized options passed to $.fn.parallax"),Array.isArray(i)||(i=[i]),Array.isArray(n)||(n=[n]);for(var r=0,o=Math.max(i.length,n.length);o>r;r++){var s=t.extend(i[r]||{},n[r]||{});"undefined"==typeof s.start||(s.triggerElement=s.start),"undefined"==typeof s.trigger||(s.triggerHook=s.trigger),"undefined"!=typeof s.offset||(s.offset=0),"undefined"==typeof s.triggerElement||(s.triggerElement=g(s.triggerElement)),"undefined"!=typeof s.triggerElement||(s.triggerElement=this[0]),e.push(s)}return e}function n(){O=[],F.scenes=[],r.call(W)}function r(t){"number"==typeof t||(t=0),this.each(function(e){var i=t+e;O[i]=o.call(this)})}function o(){for(var e=t(this),n=[],r=i.call(e),o=0,s=r.length;s>o;o++){var a=r[o],f={axis:a.axis,triggerElement:a.triggerElement,triggerHook:a.triggerHook,duration:a.duration,offset:a.offset},h={},u={},l={};if("undefined"!=typeof a.x&&(u.x=c(a.x,f)),"undefined"!=typeof a.y&&(u.y=c(a.y,f)),"undefined"!=typeof a.z&&(u.z=c(a.z,f)),"undefined"!=typeof a.scale?u.scale=c(a.scale,f):("undefined"!=typeof a.scaleX&&(u.scaleX=c(a.scaleX,f)),"undefined"!=typeof a.scaleY&&(u.scaleY=c(a.scaleY,f))),"undefined"!=typeof a.rotate&&(u.rotate=c(a.rotate,f)),(u.x||u.y||u.z||u.scale||u.scaleX||u.scaleY||u.rotate)&&(h.transform=new N(e,u)),"undefined"!=typeof a.backgroundPositionX&&(l.x=c(a.backgroundPositionX,f)),"undefined"!=typeof a.backgroundPositionY&&(l.y=c(a.backgroundPositionY,f)),(l.x||l.y)&&(h.bgPosition=new P(e,l,"backgroundPosition")),"undefined"!=typeof a.top){var p=c(a.top,f);h.top=new A(e,p,"top",e.offsetParent().height(),"px")}if("undefined"!=typeof a.left){var d=c(a.left,f);h.left=new A(e,d,"left",e.offsetParent().width(),"px")}if("undefined"!=typeof a.width){var g=c(a.width,f);h.width=new A(e,g,"width")}if("undefined"!=typeof a.height){var y=c(a.height,f);h.height=new A(e,y,"height")}if("undefined"!=typeof a.opacity){var m=c(a.opacity,f);h.opacity=new A(e,m,"opacity",1)}if("undefined"!=typeof a.color){var x=c(a.color,f);h.color=new X(e,x,"color",16777215)}if("undefined"!=typeof a.backgroundColor){var v=c(a.backgroundColor,f);h.bgColor=new X(e,v,"backgroundColor",16777215)}if("undefined"!=typeof a.pin){var w=c(a.pin,f);h.pin=new F(e,w)}if("undefined"!=typeof a["class"]){var b=c(a["class"],f);h["class"]=new k(e,b)}n.push(h)}return n}function s(){Z||(window.requestAnimationFrame(function(){a(),n()}),Z=!0)}function a(){var t=document.body,e=document.documentElement;G=Math.max(e.clientWidth,window.innerWidth||0),C=Math.max(e.clientHeight,window.innerHeight||0),L=Math.max(t.scrollWidth,t.offsetWidth,e.clientWidth,e.scrollWidth,e.offsetWidth),B=Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)}function f(){q||(window.requestAnimationFrame(h),q=!0)}function h(){j=u();for(var t=0,e=z.length;e>t;t++)l.call(z[t],t);q=!1}function u(){return{left:window.pageXOffset||document.documentElement.scrollLeft,top:window.pageYOffset||document.documentElement.scrollTop}}function l(t){var e,i,n=O[t];"function"!=typeof window.getComputedStyle||(i=getComputedStyle(this));for(var r=0,o=n.length;o>r;r++){e=n[r];for(var s in e)e[s].needsUpdate()&&e[s].update(i)}}function c(e,i){return"object"!=typeof e&&(e={to:e}),t.extend({},i,e)}function p(t){for(var e=t.offsetLeft,i=t.offsetTop,n=t;(t=t.offsetParent)&&t!==document.body;)e+=t.offsetLeft,i+=t.offsetTop,n=t;return"fixed"===n.style.position&&(e+=j.left,i+=j.top),{left:e,top:i}}function d(t,e){return p(t)[e===T.AXIS_X?"left":"top"]}function g(e){return"string"!=typeof e?e:(e=t(e),e.length?e[0]:void console.error("Invalid parallax triggerElement selector: "+e))}function y(t,e){if("string"==typeof t)if(t.match(J))t=x(t,e);else{var i=t.match(K);i&&(t=m(t,i[0]))}else"function"==typeof t&&(t=t(e));return t}function m(t,e){return x(t,"vw"===e?G:C)}function x(t,e){return parseFloat(t)/100*e}function v(t){try{return t instanceof HTMLElement}catch(e){return"object"==typeof t&&1===t.nodeType&&"object"==typeof t.style&&"object"==typeof t.ownerDocument}}function w(t,e,i){return(e-t)*i+t}function b(e,i){return t.extend(Object.create(e),i||{})}function S(e){var i="",n=e.attr("id"),r=e.attr("class");return n?i+="#"+n:r&&(i+="."+t.trim(r).replace(/\s/gi,".")),i}function _(t){return t.replace(/^-?\d+(\.\d*)?(\D+)$/,"$2")}function T(t,e){this.$el=t,this.from=e.from,this.to=e.to,this.axis=e.axis,this.offset=y(e.offset,this.getElementDimension()),"undefined"!=typeof e.triggerHook||(e.triggerHook="100%"),this.triggerHook=y(e.triggerHook,e.axis===T.AXIS_X?G:C),this.triggerElement=g(e.triggerElement),this._setEase(e.ease),this._setDuration(e.duration)}function E(t,e,i,n){this.convertPerc=!1,this.unit=n,"undefined"!=typeof i?(e.from=y(e.from,i),e.to=y(e.to,i)):("string"==typeof e.from?e.from=this._parseString(e.from):"function"==typeof e.from&&(e.from=e.from()),"string"==typeof e.to?e.to=this._parseString(e.to):"function"==typeof e.to&&(e.to=e.to())),T.call(this,t,e)}function A(t,e,i,n,r){this.styleName=i,E.call(this,t,e,n,r)}function X(t,e,i,n){A.call(this,t,e,i,n)}function U(t,e){"undefined"!=typeof e.triggerHook||(e.triggerHook=0),T.call(this,t,e)}function k(t,e){U.call(this,t,e)}function F(t,e){e.to=g(e.to),v(e.to)||(e.to=t[0]),"undefined"!=typeof e.triggerHook||(e.triggerHook=0),U.call(this,t,e),F.scenes.push(this)}function I(t,e,i,n){this.propName=i,E.call(this,t,e,n)}function H(t,e){this.$el=t}function P(t,e,i){H.call(this,t,e),this.styleName=i,e.x&&(this.x=new I(t,e.x,"x")),e.y&&(this.y=new I(t,e.y,"y"))}function N(t,e){H.call(this,t,e),e.x&&(this.x=new I(t,e.x,"translateX")),e.y&&(this.y=new I(t,e.y,"translateY")),e.z&&(this.z=new I(t,e.z,"translateZ")),e.scale?this.scale=new I(t,e.scale,"scale",1):(e.scaleX&&(this.scaleX=new I(t,e.scaleX,"scaleX",1)),e.scaleY&&(this.scaleY=new I(t,e.scaleY,"scaleY",1))),e.rotate&&(this.rotate=new I(t,e.rotate,"rotate",360))}function Y(t,e,i,n){this.r=t||0,this.g=e||0,this.b=i||0,this.a="number"==typeof n?n:1}function D(t,e,i,n){this.h=t||0,this.s=e||0,this.v=i||0,this.a="number"==typeof n?n:1}function M(){}function $(){this.x=this.y=0,this.xUnit=this.yUnit="px"}function R(){this.translateX=this.translateY=this.translateZ=0,this.scaleX=this.scaleY=1,this.rotate=0}function V(){this.matrix=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}var z,O,j,C,G,L,B,W=null,q=!1,Z=!1,Q=window.Modernizr&&"undefined"!=typeof Modernizr.touchevents?Modernizr.touchevents:e(),J=/%/g,K=/v(w|h)/g;t.parallax={enableTouchDevices:!1},t.fn.parallax=function(e){switch(e){case"reset":break;case"destroy":W.not(this);break;default:if(!Q||t.parallax.enableTouchDevices||e&&e.enableTouchDevices){this.data("parallax-js",e);var i=null===W;i&&a(),i?(W=this,window.onresize=s,window.onscroll=f,z=[],O=[]):W=W.add(this),r.call(this,z.length),z=W.toArray(),f()}}return this},T.AXIS_X="x",T.AXIS_Y="y",T.STATE_BEFORE="before",T.STATE_DURING="during",T.STATE_AFTER="after",T.prototype={_setEase:function(e){"function"==typeof e?this.ease=e:("undefined"==typeof e||(this.ease=t.easing[e]),"function"==typeof this.ease||(this.ease=t.easing.linear))},_setDuration:function(t){var e=function(t){0>t&&console.error("Invalid parallax duration: "+t)};if("undefined"==typeof t){var i=this;this.duration=function(){var t=d(i.$el[0],i.axis)+i.$el.outerHeight(!0)-i.start;return e(t),t}}else if("function"==typeof t)this.duration=function(){var i=t();return e(i),i};else{var n=y(t,this.getElementDimension());e(n),this.duration=function(){return n}}},getElementDimension:function(){return this.axis===T.AXIS_X?this.$el.outerWidth(!0):this.$el.outerHeight(!0)},needsUpdate:function(){return this.updateStart(),this.updateDuration(),this.updateState(),this._needsUpdate()},_needsUpdate:function(){return this.state===T.STATE_DURING||"undefined"==typeof this.prevState&&this.state===T.STATE_AFTER||"undefined"!=typeof this.prevState&&this.prevState!=this.state},updateStart:function(){this.start=Math.max(this.getOffset()-this.triggerHook,0)},updateDuration:function(){this.durationPx=this.duration.call(this),0===this.durationPx&&(this.durationPx=(this.axis===T.AXIS_X?L-G:B-C)-this.start)},updateState:function(){this.prevState=this.state,j.top<this.start?this.state=T.STATE_BEFORE:j.top<=this.start+this.durationPx?this.state=T.STATE_DURING:this.state=T.STATE_AFTER},getOffset:function(){var t=this.offset;if(v(this.triggerElement)){var e=F.findByElement(this.triggerElement);t+=e&&e.state===T.STATE_DURING?e.start:d(this.triggerElement,this.axis)}return t},getProgress:function(){if(this.state===T.STATE_BEFORE)return 0;if(this.state===T.STATE_DURING){var t=j.top-this.start,e=t/this.durationPx,i=this.ease.call(this,e);return i}return 1},update:function(t){this._setFrom(this._getOldValue(t)),this._setValue(this._getNewValue(),t)},_getOldValue:function(){},_getNewValue:function(){},_setFrom:function(t){"undefined"!=typeof this.from||(this.from=t)}},E.prototype=b(T.prototype,{_parseString:function(t){if(t.match(J))this.convertPerc=!0;else{var e=t.match(K);e?t=m(t,e[0]):this.unit=_(t)}return t},_getNewValue:function(){var t=this.from,e=this.to;"string"==typeof t&&(t=this.convertPerc&&"%"===t.substr(-1)?y(t,this.durationPx):parseFloat(t)),"string"==typeof e&&(e=this.convertPerc&&"%"===e.substr(-1)?y(e,this.durationPx):parseFloat(e));var i="undefined"==typeof this.unit?0:this.unit;return w(t,e,this.getProgress())+i}}),A.prototype=b(E.prototype,{_getOldValue:function(t){return parseFloat(t[this.styleName])},_setValue:function(t){this.$el[0].style[this.styleName]=t}}),X.prototype=b(A.prototype,{_getOldValue:function(t){return t[this.styleName]},_getNewValue:function(){var t=Y.fromString(this.from),e=Y.fromString(this.to);return t.interpolate(e,this.getProgress()),t.toString()}}),U.prototype=b(T.prototype,{_needsUpdate:function(){return("undefined"!=typeof this.prevState||this.state==T.STATE_DURING)&&this.prevState!=this.state}}),k.prototype=b(T.prototype,{_setValue:function(){this.$el[this.state==T.STATE_DURING?"addClass":"removeClass"](this.to)}}),F.scenes=[],F.findByElement=function(t){for(var e=F.scenes,i=0,n=e.length;n>i;i++)if(e[i].$el[0]===t)return e[i]},F.prototype=b(U.prototype,{updateStart:function(){this.state!=T.STATE_DURING&&T.prototype.updateStart.call(this)},_getOldValue:function(t){var e=getComputedStyle(this.to);return{position:e.position,top:e.top,left:e.left,marginLeft:"",marginTop:""}},_getNewValue:function(){return this.state==T.STATE_DURING?{position:"fixed",top:this.from.pinTop+"px",left:this.from.pinLeft+"px",marginLeft:0,marginTop:0}:this.from},_setValue:function(t){for(var e in t)this.to.style[e]=t[e]},_setFrom:function(t){if("undefined"==typeof this.from){var e=p(this.to);this.axis===T.AXIS_X?(t.pinTop=e.top,t.pinLeft=e.left-this.start):(t.pinTop=e.top-this.start,t.pinLeft=e.left),this.from=t}}}),I.prototype=b(E.prototype,{_getOldValue:function(t){return t.get(this.propName)},_setValue:function(t,e){e.set(this.propName,t)}}),H.prototype={needsUpdate:function(){return!0}},P.prototype=b(H.prototype,{update:function(t){var e=$.fromString(t[this.styleName]);if(this.x&&this.x.needsUpdate()&&this.x.update(e),this.y&&this.y.needsUpdate()&&this.y.update(e),e.isChanged()){var i=this.$el[0],n=e.toString();i.style[this.styleName]=n}}}),N.prototype=b(H.prototype,{update:function(t){var e=V.fromStyle(t),i=R.fromMatrix(e);if(this.x&&this.x.needsUpdate()&&this.x.update(i),this.y&&this.y.needsUpdate()&&this.y.update(i),this.z&&this.z.needsUpdate()&&this.z.update(i),this.scale&&this.scale.needsUpdate()&&this.scale.update(i),this.scaleX&&this.scaleX.needsUpdate()&&this.scaleX.update(i),this.scaleY&&this.scaleY.needsUpdate()&&this.scaleY.update(i),this.rotate&&this.rotate.needsUpdate()&&this.rotate.update(i),i.isChanged()){var n=this.$el[0],r=i.toString();n.style["-webkit-transform"]=r,n.style["-moz-transform"]=r,n.style["-ms-transform"]=r,n.style["-o-transform"]=r,n.style.transform=r}}}),Y.fromArray=function(t,e){return e||(e=new Y),t.length<3?e:(e.r=parseInt(t[0]),e.g=parseInt(t[1]),e.b=parseInt(t[2]),t.length>3&&(e.a=parseFloat(t[3])),e)},Y.fromString=function(t,e){return t.match(/^#([0-9a-f]{3})$/i)?Y.fromArray([17*parseInt(t.charAt(1),16),17*parseInt(t.charAt(2),16),17*parseInt(t.charAt(3),16)],e):t.match(/^#([0-9a-f]{6})$/i)?Y.fromArray([parseInt(t.substr(1,2),16),parseInt(t.substr(3,2),16),parseInt(t.substr(5,2),16)],e):Y.fromArray(t.replace(/^rgb(a)?\((.*)\)$/,"$2").split(","),e)},Y.fromHSV=function(t,e){e||(e=new Y);var i=t.v,n=t.v,r=t.v;if(0!=t.s){var o=t.h/60-Math.floor(t.h/60),s=t.v*(1-t.s/100),a=t.v*(1-t.s/100*o),f=t.v*(1-t.s/100*(1-o));switch(Math.floor(t.h/60)){case 0:i=t.v,n=f,r=s;break;case 1:i=a,n=t.v,r=s;break;case 2:i=s,n=t.v,r=f;break;case 3:i=s,n=a,r=t.v;break;case 4:i=f,n=s,r=t.v;break;case 5:i=t.v,n=s,r=a}}return e.r=2.55*i,e.g=2.55*n,e.b=2.55*r,e.a=t.a,e},Y.prototype={getHue:function(t,e){var i=0;if(0!=e)switch(t){case this.r:i=(this.g-this.b)/e*60,0>i&&(i+=360);break;case this.g:i=(this.b-this.r)/e*60+120;break;case this.b:i=(this.r-this.g)/e*60+240}return i},interpolate:function(t,e){var i=D.fromRGB(this),n=D.fromRGB(t);i.interpolate(n,e),Y.fromHSV(i,this)},toString:function(){return 1!==this.a?"rgba("+this.r.toFixed()+","+this.g.toFixed()+","+this.b.toFixed()+","+this.a.toFixed(2)+")":"rgb("+this.r.toFixed()+","+this.g.toFixed()+","+this.b.toFixed()+")"}},D.fromRGB=function(t,e){e||(e=new D);var i=Math.max(t.r,t.g,t.b),n=i-Math.min(t.r,t.g,t.b);return e.h=t.getHue(i,n),e.s=0==i?0:100*n/i,e.v=i/2.55,e.a=t.a,e},D.prototype={interpolate:function(t,e,i){this.h=w(this.h,t.h,e),this.s=w(this.s,t.s,e),this.v=w(this.v,t.v,e),this.a=w(this.a,t.a,e)},toString:function(){return 1!==this.a?"hsva("+this.h+","+this.s+","+this.v+","+this.a.toFixed(2)+")":"hsv("+this.h+","+this.s+","+this.v+")"}},M.prototype={get:function(t){return this[t]},set:function(t,e){this[t]=e,this._changed=!0},isChanged:function(){return this._changed===!0}},$.fromArray=function(t,e){e||(e=new $);var i=t[0],n=t[1];return"string"==typeof i?(e.x=parseFloat(i),e.xUnit=_(i)):e.x=i,"string"==typeof n?(e.y=parseFloat(n),e.yUnit=_(n)):e.y=n,e},$.fromString=function(t,e){return $.fromArray(t.split(" "),e)},$.prototype=b(M.prototype,{toString:function(){return this.x.toFixed(2)+this.xUnit+" "+this.y.toFixed(2)+this.yUnit}}),R.fromMatrix=function(t,e){e||(e=new R);var i=t.matrix[0],n=t.matrix[1],r=t.matrix[4],o=t.matrix[5];return e.translateX=t.matrix[12],e.translateY=t.matrix[13],e.translateZ=t.matrix[14],e.scaleX=Math.sqrt(i*i+n*n),e.scaleY=Math.sqrt(r*r+o*o),e.rotate=Math.round(Math.atan2(n,i)*(180/Math.PI)),e},R.prototype=b(M.prototype,{get:function(t){return"scale"===t?this.scaleX:this[t]},set:function(t,e){"scale"===t?(this.scaleX=e,this.scaleY=e):this[t]=e,this._changed=!0},toString:function(){var t="translate3d("+this.translateX+"px, "+this.translateY+"px, "+this.translateZ+"px)";return(1!=this.scaleX||1!=this.scaleY)&&(t+=" scale("+this.scaleX+","+this.scaleY+")"),this.rotate&&(t+="rotate("+this.rotate+"deg)"),t}}),V.fromArray=function(t,e){if(e||(e=new V),t.length<6)return e;for(var i=0;i<t.length;i++)t[i]=parseFloat(t[i]);return t.length<16&&(t=[t[0],t[1],0,0,t[2],t[3],0,0,0,0,1,0,t[4],t[5],0,1]),e.matrix=t,e},V.fromStyle=function(t,e){if(!t)return e||new V;var i=t.transform||t.webkitTransform||t.mozTransform;return V.fromArray(i.replace(/^matrix(3d)?\((.*)\)$/,"$2").split(/, /),e)},(!Q||t.parallax.enableTouchDevices)&&t(function(){t("[data-parallax]").parallax()})}(jQuery),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),console.error||(console.error=function(t){window.alert(t)});
