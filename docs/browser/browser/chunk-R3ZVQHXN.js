import{b as C}from"./chunk-BV4LH35L.js";import"./chunk-RSBSJUL2.js";import{Aa as g,Ba as l,Ea as F,La as p,Na as R,Oa as T,P as u,Pa as d,T as y,U as w,_ as M,ba as m,ca as f,gb as D,ha as _,ja as O,ka as P,la as S,lb as H,na as b,oa as k,pa as E,pb as A,qa as j,qb as L,ra as r,rb as x,sa as a,sb as z,ta as c,ub as v,xa as I}from"./chunk-3IDQFMH7.js";var $=(()=>{let e=class e{constructor(i){this.router=i}exit(){this.router.navigate(["/login"]),localStorage.clear()}};e.\u0275fac=function(n){return new(n||e)(f(x))},e.\u0275cmp=u({type:e,selectors:[["header"]],standalone:!0,features:[d],decls:10,vars:0,consts:[[1,"header"],[1,"logo"],["loading","lazy","src","assets/images/notification_icon.svg",1,"notification-icon"],[1,"header-content"],[1,"user-section"],[1,"user-profile"],[1,"user-info"],[1,"exit",3,"click"]],template:function(n,o){n&1&&(r(0,"div",0)(1,"div",1),p(2,"\u041A\u0430\u0444\u0435\u0434\u0440\u0430 \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u043D\u043E\u0433\u043E \u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"),a(),c(3,"img",2),r(4,"div",3)(5,"div",4)(6,"div",5),c(7,"div",6),a()(),r(8,"div",7),g("click",function(){return o.exit()}),p(9,"\u0412\u044B\u0445\u043E\u0434"),a()()())},styles:[".header[_ngcontent-%COMP%]{align-items:center;background-color:var(--Colors-white, #fff);display:flex;padding:10px 30px;gap:20px}.logo[_ngcontent-%COMP%]{color:var(--Colors-gray-600, #475569);white-space:nowrap;font-family:Inter;font:400 19px/143% Inter,-apple-system,Roboto,Helvetica,sans-serif}.header-content[_ngcontent-%COMP%]{justify-content:space-between;align-items:center;align-self:stretch;display:flex;gap:20px;padding-top:8px;padding-right:0;padding-bottom:8px;margin-left:auto}.search-bar[_ngcontent-%COMP%]{border-radius:999px;background-color:var(--Colors-gray-100, #f1f5f9);display:flex;gap:10px;padding:4px 8px;width:30%}.search-icon[_ngcontent-%COMP%]{aspect-ratio:.83;object-fit:contain;object-position:center;width:20px;overflow:hidden;max-width:100%}.search-text[_ngcontent-%COMP%]{color:var(--Colors-gray-400, #94a3b8);align-self:center;flex-grow:1;white-space:nowrap;margin:auto;font:400 16px/143% Nunito Sans,-apple-system,Roboto,Helvetica,sans-serif;border:none;background:transparent;outline:none}.user-section[_ngcontent-%COMP%]{justify-content:space-between;align-self:stretch;display:flex}.notification-icon[_ngcontent-%COMP%]{aspect-ratio:1;object-fit:contain;object-position:center;min-width:40px;justify-content:center;align-items:center;overflow:hidden;max-width:100%;margin-left:-20px}.user-profile[_ngcontent-%COMP%]{justify-content:space-between;align-items:center;border-radius:8px;display:flex;gap:12px;padding-top:0;padding-right:12px;padding-bottom:0}.user-info[_ngcontent-%COMP%]{justify-content:space-between;border-radius:8px;align-self:stretch;display:flex;gap:8px;padding:10px 0;align-items:center}.user-icon[_ngcontent-%COMP%]{width:32px;height:32px;background-size:cover;background-position:center;border-radius:999px;flex:none;order:0;flex-grow:0}.exit[_ngcontent-%COMP%]{color:var(--Colors-gray-600, #475569);text-align:center;flex-grow:1;white-space:nowrap;font:600 19px/143% Inter,-apple-system,Roboto,Helvetica,sans-serif;cursor:pointer}.exit[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.1)}"]});let t=e;return t})();function U(t,e){if(t&1){let s=I();r(0,"div",9),g("click",function(){y(s);let n=l().$implicit,o=l(2);return w(o.activeElement=n.en)}),p(1),a()}if(t&2){let s=l().$implicit,i=l(2);S("active",i.activeElement===s.en),F("routerLink","/account/",s.en,""),m(),R(" ",s.ru," ")}}function q(t,e){if(t&1&&_(0,U,2,4,"div",8),t&2){let s=e.$implicit,i=l(2);b(0,i.isAdmin||s.en==="Curriculas"?0:-1)}}function G(t,e){if(t&1&&(r(0,"div",7),E(1,q,1,1,null,null,k),a()),t&2){let s=l();m(),j(s.menuItems)}}var N=(()=>{let e=class e{constructor(i,n){this.router=i,this.authService=n,this.isMenuOpen=!0,this.menuItems=[{en:"Curriculas",ru:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"},{en:"Users",ru:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"},{en:"Specialties",ru:"\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"},{en:"Educations",ru:"\u0424\u043E\u0440\u043C\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F"},{en:"Statuses",ru:"\u0421\u0442\u0430\u0442\u0443\u0441\u044B"},{en:"Archive",ru:"\u0410\u0440\u0445\u0438\u0432"}],this.router.events.subscribe(o=>{o instanceof A&&(this.activeElement=this.menuItems.find(h=>this.router.url.includes(h.en))?.en)}),this.isAdmin=this.authService.checkToken("isAdmin")}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}};e.\u0275fac=function(n){return new(n||e)(f(x),f(C))},e.\u0275cmp=u({type:e,selectors:[["sidebar"]],standalone:!0,features:[T([C]),d],decls:8,vars:4,consts:[[1,"menu"],[1,"menu-item",3,"click"],[1,"menu-item-content"],["loading","lazy","src","assets/images/menu.svg",1,"menu-icon"],[1,"menu-text"],["loading","lazy",1,"menu-arrow",3,"src"],["class","menu-subitems"],[1,"menu-subitems"],["class","menu-subitem",3,"active","routerLink"],[1,"menu-subitem",3,"routerLink","click"]],template:function(n,o){n&1&&(r(0,"div",0)(1,"div",1),g("click",function(){return o.toggleMenu()}),r(2,"span",2),c(3,"img",3),r(4,"div",4),p(5,"\u0420\u0435\u0441\u0443\u0440\u0441\u044B"),a()(),c(6,"img",5),a(),_(7,G,3,0,"div",6),a()),n&2&&(m(6),P("transform",o.isMenuOpen?"rotate(180deg)":"rotate(0)"),O("src","assets/images/menu_arrow_down.svg",M),m(),b(7,o.isMenuOpen?7:-1))},dependencies:[D,v,z,H],styles:["[_nghost-%COMP%]{float:left}.menu[_ngcontent-%COMP%]{align-self:stretch;display:flex;max-width:216px;flex-direction:column}.menu-item[_ngcontent-%COMP%]{border-radius:4px;display:flex;justify-content:space-between;gap:8px;padding:23px 8px 4px}.menu-item-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:8px;padding:0 20px}.menu-icon[_ngcontent-%COMP%]{aspect-ratio:1;object-fit:contain;object-position:center;width:24px;overflow:hidden;max-width:100%}.menu-text[_ngcontent-%COMP%]{flex-direction:column;color:var(--Colors-gray-600, #475569);white-space:nowrap;font:400 18px/150% Inter,-apple-system,Roboto,Helvetica,sans-serif}.menu-arrow[_ngcontent-%COMP%]{aspect-ratio:1.67;object-fit:contain;object-position:center;width:10px;overflow:hidden;align-self:center;max-width:100%;margin:auto 0}.menu-subitems[_ngcontent-%COMP%]{align-items:start;display:flex;margin-top:4px;width:100%;flex-direction:column;padding-top:6px;padding-bottom:6px;padding-left:40px;flex-grow:1}.menu-subitem[_ngcontent-%COMP%]{margin-top:12px;white-space:nowrap;color:var(--Colors-gray-600, #475569);font:400 16px/143% Inter,-apple-system,Roboto,Helvetica,sans-serif}.menu-subitem[_ngcontent-%COMP%]:hover{cursor:pointer}.active[_ngcontent-%COMP%]{color:var(--Colors-primary-500, #0ea5e9);font:800 16px/143% Inter,-apple-system,Roboto,Helvetica,sans-serif}"]});let t=e;return t})();var re=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["account"]],standalone:!0,features:[d],decls:3,vars:0,template:function(n,o){n&1&&c(0,"header")(1,"sidebar")(2,"router-outlet")},dependencies:[$,N,v,L]});let t=e;return t})();export{re as AccountComponent};
