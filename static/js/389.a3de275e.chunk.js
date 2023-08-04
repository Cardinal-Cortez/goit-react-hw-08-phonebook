"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[389],{7389:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return T}});var r,i,a,c,o,s,u,l,d,h,f,p,x=t(9439),m=t(2791),g=t(168),j=t(6444),Z=j.ZP.form(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  padding: 50px;\n\n"]))),v=j.ZP.h1(i||(i=(0,g.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n\n"]))),y=j.ZP.button(a||(a=(0,g.Z)(["\n  cursor: pointer;\n"]))),b=j.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n\n"]))),C=j.ZP.input(o||(o=(0,g.Z)(["\n"]))),P=t(184),k=function(n){var e=n.handleNameChange,t=n.name;return(0,P.jsxs)("div",{children:[(0,P.jsx)("h2",{children:"Name"}),(0,P.jsx)(C,{onChange:e,value:t,type:"text",name:"name",pattern:"^[A-Za-z\\\\u0080-\\\\uFFFF '\\]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},w=j.ZP.input(s||(s=(0,g.Z)(["\n"]))),_=function(n){var e=n.handleNumberChange,t=n.phone;return(0,P.jsxs)("div",{children:[(0,P.jsx)("h2",{children:"Number"}),(0,P.jsx)(w,{onChange:e,value:t,type:"tel",name:"phone",pattern:"^(\\\\+?[0-9.\\\\(\\\\)\\\\-\\\\s\\]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})},F=j.ZP.input(u||(u=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n"]))),N=t(9434),I=(0,t(6382).oM)({name:"filter",initialState:"",reducers:{setFilter:function(n,e){return e.payload}}}),L=(I.reducer,I.actions.setFilter),z=function(n){return n.contacts.data},A=function(n){return n.contacts.isLoading},S=function(n){return n.contacts.error},q=function(n){return n.filter},D=function(n){var e=z(n),t=q(n);if(e)return e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))},E=function(){var n=(0,N.I0)(),e=(0,N.v9)(q);return(0,P.jsx)(F,{value:e,onChange:function(e){var t=e.target.value;n(L(t))}})},M=t(1413),$=j.ZP.li(l||(l=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n"]))),B=j.ZP.h3(d||(d=(0,g.Z)(["\n  font-size: 16px;\n  margin: 0;\n  line-height: 18px;\n"]))),J=j.ZP.p(h||(h=(0,g.Z)(["\n  font-size: 16px;\n  margin: 0;\n  line-height: 18px;\n"]))),R=j.ZP.button(f||(f=(0,g.Z)(["\n"]))),G=t(8115),H=function(n){var e=n.id,t=n.name,r=n.phone,i=(0,N.I0)();return(0,P.jsx)("ul",{children:(0,P.jsxs)($,{children:[(0,P.jsx)(B,{children:t}),(0,P.jsx)(J,{children:r}),(0,P.jsx)(R,{onClick:function(){i((0,G._f)(e))},children:"Delete"})]})})},K=j.ZP.div(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),O=function(){var n=(0,N.I0)(),e=(0,N.v9)(D);return(0,P.jsx)(K,{children:e.map((function(e){return(0,m.createElement)(H,(0,M.Z)((0,M.Z)({},e),{},{key:e.id,onDelete:function(){return n((0,G._f)(e.id))}}))}))})},Q=function(){var n=(0,N.I0)(),e=(0,N.v9)(z);console.log(e);var t=(0,m.useState)(""),r=(0,x.Z)(t,2),i=r[0],a=r[1],c=(0,m.useState)(""),o=(0,x.Z)(c,2),s=o[0],u=o[1];return(0,P.jsxs)(b,{children:[(0,P.jsx)(v,{children:"Phonebook"}),(0,P.jsxs)(Z,{onSubmit:function(t){t.preventDefault(),e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()}))?alert("".concat(i," is already in contacts.")):(n((0,G.el)({name:i,phone:s})),a(""),u(""))},children:[(0,P.jsx)(k,{handleNameChange:function(n){a(n.target.value)},name:i}),(0,P.jsx)(_,{handleNumberChange:function(n){u(n.target.value)},phone:s}),(0,P.jsx)(y,{type:"submit",children:"Add Contact"})]}),(0,P.jsx)("h2",{children:"Contacts"}),(0,P.jsx)(E,{}),(0,P.jsx)(O,{})]})},T=function(){var n=(0,N.I0)(),e=(0,N.v9)(A),t=(0,N.v9)(S);return(0,m.useEffect)((function(){n((0,G.yF)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[e&&!t&&(0,P.jsx)("b",{children:"Request in progress..."}),t&&(0,P.jsx)("p",{children:t}),!t&&(0,P.jsx)(Q,{})]})}}}]);
//# sourceMappingURL=389.a3de275e.chunk.js.map