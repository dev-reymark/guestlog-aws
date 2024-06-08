import{m as O,$ as pe,r as l,j as u}from"./app-C97loW6B.js";import{t as me,v as $e,w as be,x as G,y as J,z as ve,T as he,A as xe}from"./index-CrgdPOHO.js";import{s as Te,$ as Pe,g as Z,a as C,b as ye,t as ge,u as Ce,n as Oe}from"./chunk-XHQUSKIE-Ckst3bwd.js";import{m as we,e as Ee,a as De,o as Ae,d as D,b as Re,f as je}from"./index-BzaZMSCM.js";import{m as Ie}from"./VisuallyHidden-BG5VC_gx.js";import{w as Me}from"./index-hs_W8jAA.js";import{L as Ne,a as Se,m as He,A as Le}from"./chunk-6NL67ZRH-YVAMpjmd.js";const F=O.createContext(null);function ke(e){let{children:o}=e,t=l.useContext(F),[a,d]=l.useState(0),f=l.useMemo(()=>({parent:t,modalCount:a,addModal(){d(r=>r+1),t&&t.addModal()},removeModal(){d(r=>r-1),t&&t.removeModal()}}),[t,a]);return O.createElement(F.Provider,{value:f},o)}function _e(){let e=l.useContext(F);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:null}}}function ze(e){let{modalProviderProps:o}=_e();return O.createElement("div",{"data-overlay-container":!0,...e,...o})}function Fe(e){return O.createElement(ke,null,O.createElement(ze,e))}function Q(e){let o=Te(),{portalContainer:t=o?null:document.body,...a}=e;if(O.useEffect(()=>{if(t!=null&&t.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[t]),!t)return null;let d=O.createElement(Fe,a);return pe.createPortal(d,t)}const Ve=1500,X=500;let y={},Ke=0,I=!1,h=null,g=null;function We(e={}){let{delay:o=Ve,closeDelay:t=X}=e,{isOpen:a,open:d,close:f}=me(e),r=l.useMemo(()=>`${++Ke}`,[]),n=l.useRef(),b=()=>{y[r]=x},p=()=>{for(let i in y)i!==r&&(y[i](!0),delete y[i])},s=()=>{clearTimeout(n.current),n.current=null,p(),b(),I=!0,d(),h&&(clearTimeout(h),h=null),g&&(clearTimeout(g),g=null)},x=i=>{i||t<=0?(clearTimeout(n.current),n.current=null,f()):n.current||(n.current=setTimeout(()=>{n.current=null,f()},t)),h&&(clearTimeout(h),h=null),I&&(g&&clearTimeout(g),g=setTimeout(()=>{delete y[r],g=null,I=!1},Math.max(X,t)))},v=()=>{p(),b(),!a&&!h&&!I?h=setTimeout(()=>{h=null,I=!0,s()},o):a||s()};return l.useEffect(()=>()=>{clearTimeout(n.current),y[r]&&delete y[r]},[r]),{isOpen:a,open:i=>{!i&&o>0&&!n.current?v():s()},close:x}}function Be(e,o){let t=Pe(e,{labelable:!0}),{hoverProps:a}=Z({onHoverStart:()=>o==null?void 0:o.open(!0),onHoverEnd:()=>o==null?void 0:o.close()});return{tooltipProps:C(t,a,{role:"tooltip"})}}function Ue(e,o,t){let{isDisabled:a,trigger:d}=e,f=ye(),r=l.useRef(!1),n=l.useRef(!1),b=()=>{(r.current||n.current)&&o.open(n.current)},p=c=>{!r.current&&!n.current&&o.close(c)};l.useEffect(()=>{let c=T=>{t&&t.current&&T.key==="Escape"&&(T.stopPropagation(),o.close(!0))};if(o.isOpen)return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[t,o]);let s=()=>{d!=="focus"&&(Ce()==="pointer"?r.current=!0:r.current=!1,b())},x=()=>{d!=="focus"&&(n.current=!1,r.current=!1,p())},v=()=>{n.current=!1,r.current=!1,p(!0)},i=()=>{Oe()&&(n.current=!0,b())},m=()=>{n.current=!1,r.current=!1,p(!0)},{hoverProps:w}=Z({isDisabled:a,onHoverStart:s,onHoverEnd:x}),{focusableProps:E}=ge({isDisabled:a,onFocus:i,onBlur:m},t);return{triggerProps:{"aria-describedby":o.isOpen?f:void 0,...C(E,w,{onPointerDown:v,onKeyDown:v})},tooltipProps:{id:f}}}function Ye(e){const[o,t]=we(e,G.variantKeys),{ref:a,as:d,isOpen:f,content:r,children:n,defaultOpen:b,onOpenChange:p,isDisabled:s,trigger:x,shouldFlip:v=!0,containerPadding:i=12,placement:m="top",delay:w=0,closeDelay:E=500,showArrow:c=!1,offset:T=7,crossOffset:_=0,isDismissable:A,shouldCloseOnBlur:te=!0,portalContainer:oe,isKeyboardDismissDisabled:re=!1,updatePositionDeps:V=[],shouldCloseOnInteractOutside:ne,className:le,onClose:K,motionProps:ae,classNames:R,...z}=o,se=d||"div",j=We({delay:w,closeDelay:E,isDisabled:s,defaultOpen:b,isOpen:f,onOpenChange:P=>{p==null||p(P),P||K==null||K()}}),M=l.useRef(null),N=l.useRef(null),S=l.useId(),$=j.isOpen&&!s;l.useImperativeHandle(a,()=>Ee(N));const{triggerProps:W,tooltipProps:ie}=Ue({isDisabled:s,trigger:x},j,M),{tooltipProps:B}=Be({isOpen:$,...C(o,ie)},j),{overlayProps:U,placement:H,updatePosition:ce}=$e({isOpen:$,targetRef:M,placement:ve(m),overlayRef:N,offset:c?T+3:T,crossOffset:_,shouldFlip:v,containerPadding:i});De(()=>{V.length&&ce()},V);const{overlayProps:Y}=be({isOpen:$,onClose:j.close,isDismissable:A,shouldCloseOnBlur:te,isKeyboardDismissDisabled:re,shouldCloseOnInteractOutside:ne},N),L=l.useMemo(()=>{var P,k,q;return G({...t,radius:(P=e==null?void 0:e.radius)!=null?P:"md",size:(k=e==null?void 0:e.size)!=null?k:"md",shadow:(q=e==null?void 0:e.shadow)!=null?q:"sm"})},[Ae(t),e==null?void 0:e.radius,e==null?void 0:e.size,e==null?void 0:e.shadow]),de=l.useCallback((P={},k=null)=>({...C(W,P),ref:Ie(k,M),"aria-describedby":$?S:void 0}),[W,$,S,j]),ue=l.useCallback(()=>({ref:N,"data-slot":"base","data-open":D($),"data-arrow":D(c),"data-disabled":D(s),"data-placement":J(H,m),...C(B,Y,z),style:C(U.style,z.style,o.style),className:L.base({class:R==null?void 0:R.base}),id:S}),[L,$,c,s,H,m,B,Y,z,U,o,S]),fe=l.useCallback(()=>({"data-slot":"content","data-open":D($),"data-arrow":D(c),"data-disabled":D(s),"data-placement":J(H,m),className:L.content({class:Re(R==null?void 0:R.content,le)})}),[L,$,c,s,H,m,R]);return{Component:se,content:r,children:n,isOpen:$,triggerRef:M,showArrow:c,portalContainer:oe,placement:m,disableAnimation:e==null?void 0:e.disableAnimation,isDisabled:s,motionProps:ae,getTooltipContentProps:fe,getTriggerProps:de,getTooltipProps:ue}}var ee=je((e,o)=>{const{Component:t,children:a,content:d,isOpen:f,portalContainer:r,placement:n,disableAnimation:b,motionProps:p,getTriggerProps:s,getTooltipProps:x,getTooltipContentProps:v}=Ye({...e,ref:o});let i;try{if(l.Children.count(a)!==1)throw new Error;if(!l.isValidElement(a))i=u.jsx("p",{...s(),children:a});else{const A=a;i=l.cloneElement(A,s(A.props,A.ref))}}catch{i=u.jsx("span",{}),Me("Tooltip must have only one child node. Please, check your code.")}const{ref:m,id:w,style:E,...c}=x(),T=u.jsx("div",{ref:m,id:w,style:E,children:u.jsx(Ne,{features:Se,children:u.jsx(He.div,{animate:"enter",exit:"exit",initial:"exit",variants:he.scaleSpring,...C(p,c),style:{...xe(n)},children:u.jsx(t,{...v(),children:d})})})});return u.jsxs(u.Fragment,{children:[i,b&&f?u.jsx(Q,{portalContainer:r,children:u.jsx("div",{ref:m,id:w,style:E,...c,children:u.jsx(t,{...v(),children:d})})}):u.jsx(Le,{children:f?u.jsx(Q,{portalContainer:r,children:T}):null})]})});ee.displayName="NextUI.Tooltip";var tt=ee;export{tt as t};
