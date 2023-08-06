"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[882],{6882:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,i,a,c,o,s,u,l,d,f,h,p,x=t(9439),m=t(2791),g=t(168),j=t(6444),v=j.ZP.form(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  padding: 50px;\n\n"]))),Z=j.ZP.h1(i||(i=(0,g.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n\n"]))),b=j.ZP.button(a||(a=(0,g.Z)(["\n  cursor: pointer;\n"]))),y=j.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n\n"]))),C=j.ZP.input(o||(o=(0,g.Z)(["\n"]))),P=t(184),w=function(n){var e=n.handleNameChange,t=n.name;return(0,P.jsxs)("div",{children:[(0,P.jsx)("h2",{children:"Name"}),(0,P.jsx)(C,{onChange:e,value:t,type:"text",name:"name",pattern:"\\w{3,16}",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},k=j.ZP.input(s||(s=(0,g.Z)(["\n"]))),_=function(n){var e=n.handleNumberChange,t=n.number;return(0,P.jsxs)("div",{children:[(0,P.jsx)("h2",{children:"Number"}),(0,P.jsx)(k,{onChange:e,value:t,type:"tel",name:"number",pattern:"[+0-9]{13}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})},N=j.ZP.input(u||(u=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n"]))),I=t(9434),L=t(1654),q=function(n){return n.contacts.data},z=function(n){return n.contacts.isLoading},A=function(n){return n.contacts.error},D=function(n){return n.filter},F=function(n){var e=q(n),t=D(n);if(e)return e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))},S=function(){var n=(0,I.I0)(),e=(0,I.v9)(D);console.log(e);return(0,P.jsx)(N,{value:e,onChange:function(e){var t=e.target.value;n((0,L.Tv)(t))}})},E=t(1413),B=j.ZP.li(l||(l=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n"]))),J=j.ZP.h3(d||(d=(0,g.Z)(["\n  font-size: 16px;\n  margin: 0;\n  line-height: 18px;\n"]))),M=j.ZP.p(f||(f=(0,g.Z)(["\n  font-size: 16px;\n  margin: 0;\n  line-height: 18px;\n"]))),R=j.ZP.button(h||(h=(0,g.Z)(["\n"]))),T=t(8115),G=function(n){var e=n.id,t=n.name,r=n.number,i=(0,I.I0)();return(0,P.jsx)("ul",{children:(0,P.jsxs)(B,{children:[(0,P.jsx)(J,{children:t}),(0,P.jsx)(M,{children:r}),(0,P.jsx)(R,{onClick:function(){i((0,T._f)(e))},children:"Delete"})]})})},H=j.ZP.div(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),K=function(){var n=(0,I.I0)(),e=(0,I.v9)(F);return(0,P.jsx)(H,{children:e.map((function(e){return(0,m.createElement)(G,(0,E.Z)((0,E.Z)({},e),{},{key:e.id,onDelete:function(){return n((0,T._f)(e.id))}}))}))})},O=function(){var n=(0,I.I0)(),e=(0,I.v9)(q);console.log(e);var t=(0,m.useState)(""),r=(0,x.Z)(t,2),i=r[0],a=r[1],c=(0,m.useState)(""),o=(0,x.Z)(c,2),s=o[0],u=o[1];return(0,P.jsxs)(y,{children:[(0,P.jsx)(Z,{children:"Phonebook"}),(0,P.jsxs)(v,{onSubmit:function(t){t.preventDefault(),e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()}))?alert("".concat(i," is already in contacts.")):(n((0,T.el)({name:i,number:s})),a(""),u(""))},children:[(0,P.jsx)(w,{handleNameChange:function(n){a(n.target.value)},name:i}),(0,P.jsx)(_,{handleNumberChange:function(n){u(n.target.value)},number:s}),(0,P.jsx)(b,{type:"submit",children:"Add Contact"})]}),(0,P.jsx)("h2",{children:"Contacts"}),(0,P.jsx)(S,{}),(0,P.jsx)(K,{})]})},Q=function(){var n=(0,I.I0)(),e=(0,I.v9)(z),t=(0,I.v9)(A);return(0,m.useEffect)((function(){n((0,T.yF)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[e&&!t&&(0,P.jsx)("b",{children:"Request in progress..."}),t&&(0,P.jsx)("p",{children:t}),!t&&(0,P.jsx)(O,{})]})}}}]);
//# sourceMappingURL=882.48cf3404.chunk.js.map