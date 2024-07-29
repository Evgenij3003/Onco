/**
 * @fileoverview dragscroll - scroll area by dragging
 * @version 0.0.8
 * 
 * @license MIT, see http://github.com/asvd/dragscroll
 * @copyright 2015 asvd <heliosframework@gmail.com> 
 */
!function(e,n){"function"==typeof define&&define.amd?define(["exports"],n):"undefined"!=typeof exports?n(exports):n(e.dragscroll={})}(this,(function(e){var n,t,o=window,l=document,i="mousemove",c="mouseup",r="mousedown",s="EventListener",d="add"+s,m="remove"+s,a=[],u=function(e,s){for(e=0;e<a.length;)(s=(s=a[e++]).container||s)[m](r,s.md,0),o[m](c,s.mu,0),o[m](i,s.mm,0);for(a=[].slice.call(l.getElementsByClassName("dragscroll")),e=0;e<a.length;)!function(e,s,m,a,u,f){(f=e.container||e)[d](r,f.md=function(n){e.hasAttribute("nochilddrag")&&l.elementFromPoint(n.pageX,n.pageY)!=f||(a=1,s=n.clientX,m=n.clientY,n.preventDefault())},0),o[d](c,f.mu=function(){a=0,setTimeout((function(){e.classList.remove("dragging")}),100)},0),o[d](i,f.mm=function(o){a&&(e.classList.add("dragging"),(u=e.scroller||e).scrollLeft-=n=-s+(s=o.clientX),u.scrollTop-=t=-m+(m=o.clientY),e==l.body&&((u=l.documentElement).scrollLeft-=n,u.scrollTop-=t))},0)}(a[e++])};"complete"==l.readyState?u():o[d]("load",u,0),e.reset=u}));