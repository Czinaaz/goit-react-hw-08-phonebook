"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[203],{3307:function(e,t,n){n.d(t,{z:function(){return o}});var a=n(1413),r=n(4925),s="Button_btn__RBtNK",c=n(184),i=["selected","type","children"],o=function(e){e.selected;var t=e.type,n=void 0===t?"button":t,o=e.children,l=(0,r.Z)(e,i);return(0,c.jsx)("button",(0,a.Z)((0,a.Z)({className:s,type:n},l),{},{children:o}))}},2203:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(9434),r=n(3307),s="ContactForm_container__qpJ1N",c="ContactForm_inputs__x3RUg",i="ContactForm_margin__1gYiH",o=function(e){return e.contacts.items},l=function(e){return e.filters},u=function(e){return e.contacts.isLoading},_=function(e){return e.contacts.error},d=n(208),m=n(184),h=function(){var e=(0,a.I0)(),t=(0,a.v9)(o);return(0,m.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.target,r=a.elements.text.value;t.find((function(e){return e.name.toLowerCase()===r.toLowerCase()}))?alert("".concat(r," is already in contacts.")):(e((0,d.uK)({name:r,number:a.elements.number.value})),a.reset())},className:s,children:[(0,m.jsx)("div",{className:i,children:(0,m.jsx)("input",{className:c,type:"text",name:"text",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,m.jsx)("div",{className:i,children:(0,m.jsx)("input",{className:c,type:"tel",name:"number",placeholder:"Phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,m.jsx)(r.z,{type:"submit",children:"Add contact"})]})},f="ContactList_contact__list__2jNwc",p="ContactList_contact__list__item__fOWm7",x="ContactList_contact__style__DpwyW",v="ContactList_contact__list__name__wKNQj",j="ContactList_contact__list__number__YYFmr",b=function(){var e=(0,a.v9)(o),t=(0,a.v9)(l).toLowerCase().toLowerCase(),n=e.filter((function(e){return e.name.toLowerCase().includes(t)})),s=(0,a.I0)();return(0,m.jsx)("div",{children:(0,m.jsx)("ul",{className:f,children:n.map((function(e){return(0,m.jsxs)("li",{className:p,children:[(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("span",{className:v,children:e.name}),":",(0,m.jsx)("span",{className:j,children:e.number})]}),(0,m.jsx)(r.z,{onClick:function(){return s((0,d.GK)(e.id))},children:"Delete"})]},e.id)}))})})},N=n(1429),C="Filter_filterDiv__LdeLi",g="Filter_filterlabel__bhWzn",y="Filter_filter__input__toa89",w=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t}(),L=function(){var e=(0,a.I0)(),t=(0,a.v9)(l);return(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("label",{className:g,htmlFor:w,children:"Find contacts "}),(0,m.jsx)("input",{className:y,id:w,type:"text",name:"filter",value:t,onChange:function(t){e((0,N.m)(t.target.value))}})]})},F=n(2957),k=n(2791),z="Phonebook_one__Ijs9o",A="Phonebook_headertext__Fif7u";function Z(){var e=(0,a.I0)(),t=(0,a.v9)(u),n=(0,a.v9)(_);return(0,k.useEffect)((function(){e((0,d.yF)())}),[e]),(0,m.jsxs)("div",{className:z,children:[(0,m.jsx)("h2",{className:A,children:"Phonebook"}),(0,m.jsx)(h,{}),(0,m.jsx)("h2",{className:A,children:"Contacts"}),(0,m.jsx)(L,{}),(0,m.jsx)(b,{}),t&&!n&&(0,m.jsx)(F.a,{})]})}}}]);
//# sourceMappingURL=203.ce3f7c5d.chunk.js.map