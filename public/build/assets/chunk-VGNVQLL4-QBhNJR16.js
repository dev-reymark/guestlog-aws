import{y as T,T as c,K as C,L as F,M as m}from"./index-WucrAjqt.js";import{j as e,r as M}from"./app-vMizS-68.js";import{f as v,a as R}from"./index-BCcLM1JF.js";import{L as j,a as u,m as b}from"./chunk-6NL67ZRH-CHNBLRO5.js";var P=v(({children:r,motionProps:n,placement:a,disableAnimation:p,style:d={},transformOrigin:t={},...i},s)=>{let o=d;return t.originX!==void 0||t.originY!==void 0?o={...o,transformOrigin:t}:o={...o,...T(a==="center"?"top":a)},p?e.jsx("div",{...i,ref:s,children:r}):e.jsx(j,{features:u,children:e.jsx(b.div,{ref:s,animate:"enter",exit:"exit",initial:"initial",style:o,variants:c.scaleSpringOpacity,...R(i,n),children:r})})});P.displayName="NextUI.FreeSoloPopoverWrapper";var $=v(({children:r,transformOrigin:n,...a},p)=>{const{Component:d,state:t,placement:i,backdrop:s,titleProps:o,portalContainer:g,disableAnimation:l,motionProps:y,isNonModal:f,getPopoverProps:N,getBackdropProps:x,getDialogProps:S,getContentProps:I}=C({...a,ref:p}),A=M.useMemo(()=>s==="transparent"?null:l?e.jsx("div",{...x()}):e.jsx(j,{features:u,children:e.jsx(b.div,{animate:"enter",exit:"exit",initial:"exit",variants:c.fade,...x()})}),[s,l,x]);return e.jsxs(F,{portalContainer:g,children:[!f&&A,e.jsx(d,{...N(),children:e.jsxs(P,{disableAnimation:l,motionProps:y,placement:i,tabIndex:-1,transformOrigin:n,...S(),children:[!f&&e.jsx(m,{onDismiss:t.close}),e.jsx("div",{...I(),children:typeof r=="function"?r(o):r}),e.jsx(m,{onDismiss:t.close})]})})]})});$.displayName="NextUI.FreeSoloPopover";var h=$;export{h as f};
