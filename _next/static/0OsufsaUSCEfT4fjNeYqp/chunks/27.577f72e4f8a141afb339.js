(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+NG4":function(e,a,t){"use strict";t.r(a);var n=t("Ff2n"),i=t("q1tI"),l=t.n(i),o=t("GEyG"),c=t("i8oM"),r=t("ElCL"),s=t("ZMI8"),u=t.n(s),d=t("ObbI"),m=t("XelY"),b=t("jWxZ"),h=t("5Hjz"),g=l.a.createElement,f=g(l.a.Fragment,null,g("h3",null,"You Love Learning! We Like That"),g("div",null,g("div",null,"You've reached your basic membership limit for this month."),g("div",null,"Become a Premium Member and get:")),g("ul",null,g("li",null,"Unlimited access to our resource library"),g("li",null,"Standards-aligned Guided Lessons"),g("li",null,"Progress tracking for your child\u2019s math and reading skills"))),v=g(l.a.Fragment,null,g("h3",null,"You Love Learning! We Like That"),g("div",null,g("div",null,"You've reached your basic membership limit for this month."),g("div",null,"To get unlimited access to our resource library, you must be added to the teachers list on your school account.")));a.default=function(){Object(i.useEffect)((function(){return Object(c.b)(r.a,(function(e){t(!0);var a=e.isPayWall,i=Object(n.a)(e,["isPayWall"]);y(i),N(a)}))}),[]);var e=Object(i.useState)(!1),a=e[0],t=e[1],s=Object(i.useState)({}),p=s[0],y=s[1],O=Object(i.useState)(!1),j=O[0],N=O[1],w=Object(i.useContext)(h.c),L=w.otherAccounts,S=w.isSchoolAdmin,P=w.isPremium,k=p.cid,W=p.contentType,C=p.contentId,I=p.title,T=p.text,x=p.name,F=void 0===x?"":x,M=p.feature,E=void 0===M?"":M,Y=p.section,G=void 0===Y?"":Y;Object(i.useEffect)((function(){a&&(Object(m.a)(j?"Hit Free Limit":"Hit Feature Wall",{feature:E,section:G,contentType:W,contentId:C,name:F}),j&&G.length>0&&Object(m.b)(G.toLowerCase(),"paywall open"))}),[a]);var H=j?S?v:f:g(l.a.Fragment,null,g("h2",{className:u.a.title},I),g("div",{dangerouslySetInnerHTML:{__html:T}})),A=j?"primary":"premium",B=!!(L&&L.length>1&&L.filter((function(e){return"pro"===e.membershipType})).length);if(!S&&!P&&W&&C){Object(d.b)("PaywallOriginContentType",W,{"max-age":1800}),Object(d.b)("PaywallOriginContentId",C,{"max-age":1800})}var z=S&&!P?g("div",{className:u.a.upgradeSection},g(o.b,{color:"tertiary",className:u.a.accountSwitcherNonPremium,href:"/my/school-admin/settings/","data-cid":k},"School account settings")):g("div",{className:u.a.buttons},B&&g(o.b,{color:"tertiary",onClick:function(){t(!1),Object(b.c)("FeatureWallLogin")},className:u.a.accountSwitcher},"I have a Premium Account"),g("div",{className:u.a.upgradeSection},g(o.b,{color:A,className:u.a.upgradeButton,href:"/pricing/"},"Upgrade"),g("div",{className:u.a.note},"You won't be charged yet.")));return g(o.r,{open:a,onClose:function(){t(!1)},className:u.a.featureWallModal,size:"large"},g("div",{className:u.a.container},g("div",{className:u.a.leftSide},g(o.n,{src:"https://cdn.education.com/files/static/paywallModel/roly-lock-box.png",alt:"Roly Lock Box",className:u.a.image})),g("div",{className:u.a.rightSide},H,z)))}},ElCL:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n="openPayWallModal"}}]);
//# sourceMappingURL=27.577f72e4f8a141afb339.js.map