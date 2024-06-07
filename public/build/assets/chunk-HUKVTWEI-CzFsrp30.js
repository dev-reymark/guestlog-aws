import{r as o,j as h}from"./app-vMizS-68.js";import{c as ke}from"./chunk-3XT5V4LF-BoiqMHh2.js";import{$ as Ie,s as Se}from"./useControlledState-fB11GaVy.js";import{t as ce,P as De,y as K,B as Ve,a as _,$ as Oe,h as ue,Q as _e,j as je,i as Be,k as H,l as P,g as le,f as Ee}from"./index-BCcLM1JF.js";import{b as qe,$ as fe,c as Ae,e as Ne,f as Le}from"./useField-DTKdE9gy.js";import{m as Ge,a as Te}from"./VisuallyHidden-DS8FurIt.js";var ze={},se={};function de(e,a,...t){var r;const l=`[Next UI]${a?` [${a}]`:" "}: ${e}`;if(!(typeof console>"u")&&!se[l]&&(se[l]=!0,((r=process==null?void 0:ze)==null?void 0:r.NODE_ENV)!=="production"))return console.warn(l,t)}var Fe=ce({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",wrapper:["relative","inline-flex","items-center","justify-center","flex-shrink-0","overflow-hidden","before:content-['']","before:absolute","before:inset-0","before:border-solid","before:border-2","before:box-border","before:border-default","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[selected=true]:after:scale-100","group-data-[selected=true]:after:opacity-100","group-data-[hover=true]:before:bg-default-100",...De],icon:"z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:"after:bg-default after:text-default-foreground text-default-foreground"},primary:{wrapper:"after:bg-primary after:text-primary-foreground text-primary-foreground"},secondary:{wrapper:"after:bg-secondary after:text-secondary-foreground text-secondary-foreground"},success:{wrapper:"after:bg-success after:text-success-foreground text-success-foreground"},warning:{wrapper:"after:bg-warning after:text-warning-foreground text-warning-foreground"},danger:{wrapper:"after:bg-danger after:text-danger-foreground text-danger-foreground"}},size:{sm:{wrapper:["w-4 h-4 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],label:"text-small",icon:"w-3 h-2"},md:{wrapper:["w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],label:"text-medium",icon:"w-4 h-3"},lg:{wrapper:["w-6 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],label:"text-large",icon:"w-5 h-4"}},radius:{none:{wrapper:"rounded-none before:rounded-none after:rounded-none"},sm:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]},md:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]},lg:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]},full:{wrapper:"rounded-full before:rounded-full after:rounded-full"}},lineThrough:{true:{label:["inline-flex","items-center","justify-center","before:content-['']","before:absolute","before:bg-foreground","before:w-0","before:h-0.5","group-data-[selected=true]:opacity-60","group-data-[selected=true]:before:w-full"]}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isInvalid:{true:{wrapper:"before:border-danger",label:"text-danger"}},disableAnimation:{true:{wrapper:"transition-none",icon:"transition-none",label:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none",label:"transition-colors-opacity before:transition-width motion-reduce:transition-none"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,lineThrough:!1,disableAnimation:!1}});ce({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium text-foreground-500",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"text-small text-foreground-400",errorMessage:"text-small text-danger"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isInvalid:{true:{description:"text-danger"}},disableAnimation:{true:{},false:{description:"transition-colors !duration-150 motion-reduce:transition-none"}}},defaultVariants:{isInvalid:!1,isRequired:!1,disableAnimation:!1}});function Me(e,a,t){let{isDisabled:r=!1,isReadOnly:n=!1,value:l,name:u,children:i,"aria-label":d,"aria-labelledby":f,validationState:b="valid",isInvalid:v}=e,m=k=>{k.stopPropagation(),a.setSelected(k.target.checked)},C=i!=null,p=d!=null||f!=null;!C&&!p&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:g,isPressed:x}=K({isDisabled:r}),{pressProps:j,isPressed:O}=K({isDisabled:r||n,onPress(){a.toggle()}}),{focusableProps:B}=Ve(e,t),E=_(g,B),q=Oe(e,{labelable:!0});return qe(t,a.isSelected,a.setSelected),{labelProps:_(j,{onClick:k=>k.preventDefault()}),inputProps:_(q,{"aria-invalid":v||b==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":n||void 0,onChange:m,disabled:r,...l==null?{}:{value:l},name:u,type:"checkbox",...E}),isSelected:a.isSelected,isPressed:x||O,isDisabled:r,isReadOnly:n,isInvalid:v||b==="invalid"}}function be(e,a,t){let r=fe({...e,value:a.isSelected}),{isInvalid:n,validationErrors:l,validationDetails:u}=r.displayValidation,{labelProps:i,inputProps:d,isSelected:f,isPressed:b,isDisabled:v,isReadOnly:m}=Me({...e,isInvalid:n},a,t);Ae(e,r,t);let{isIndeterminate:C,isRequired:p,validationBehavior:g="aria"}=e;return o.useEffect(()=>{t.current&&(t.current.indeterminate=!!C)}),{labelProps:i,inputProps:{...d,checked:f,"aria-required":p&&g==="aria"||void 0,required:p&&g==="native"},isSelected:f,isPressed:b,isDisabled:v,isReadOnly:m,isInvalid:n,validationErrors:l,validationDetails:u}}const We=new WeakMap;function me(e={}){let{isReadOnly:a}=e,[t,r]=Ie(e.isSelected,e.defaultSelected||!1,e.onChange);function n(u){a||r(u)}function l(){a||r(!t)}return{isSelected:t,setSelected:n,toggle:l}}function Ue(e,a,t){const r=me({isReadOnly:e.isReadOnly||a.isReadOnly,isSelected:a.isSelected(e.value),onChange(x){x?a.addValue(e.value):a.removeValue(e.value),e.onChange&&e.onChange(x)}});let{name:n,descriptionId:l,errorMessageId:u,validationBehavior:i}=We.get(a);var d;i=(d=e.validationBehavior)!==null&&d!==void 0?d:i;let{realtimeValidation:f}=fe({...e,value:r.isSelected,name:void 0,validationBehavior:"aria"}),b=o.useRef(Ne),v=()=>{a.setInvalid(e.value,f.isInvalid?f:b.current)};o.useEffect(v);let m=a.realtimeValidation.isInvalid?a.realtimeValidation:f,C=i==="native"?a.displayValidation:m;var p;let g=be({...e,isReadOnly:e.isReadOnly||a.isReadOnly,isDisabled:e.isDisabled||a.isDisabled,name:e.name||n,isRequired:(p=e.isRequired)!==null&&p!==void 0?p:a.isRequired,validationBehavior:i,[Le]:{realtimeValidation:m,displayValidation:C,resetValidation:a.resetValidation,commitValidation:a.commitValidation,updateValidation(x){b.current=x,v()}}},r,t);return{...g,inputProps:{...g.inputProps,"aria-describedby":[e["aria-describedby"],a.isInvalid?u:null,l].filter(Boolean).join(" ")||void 0}}}var[na,He]=ke({name:"CheckboxGroupContext",strict:!1});function Ke(e){const{isSelected:a,disableAnimation:t,...r}=e;return h.jsx("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...r,children:h.jsx("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:a?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!t&&a?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function Qe(e){const{isSelected:a,disableAnimation:t,...r}=e;return h.jsx("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...r,children:h.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Je(e){const{isIndeterminate:a,...t}=e,r=a?Qe:Ke;return h.jsx(r,{...t})}function Xe(e,a=[]){const t=o.useRef(e);return ue(()=>{t.current=e}),o.useCallback((...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},a)}function Ye(e={}){var a,t,r,n,l,u;const i=He(),d=!!i,{as:f,ref:b,value:v="",children:m,icon:C,name:p,isRequired:g,isReadOnly:x=!1,autoFocus:j=!1,isSelected:O,validationState:B,size:E=(a=i==null?void 0:i.size)!=null?a:"md",color:q=(t=i==null?void 0:i.color)!=null?t:"primary",radius:k=i==null?void 0:i.radius,lineThrough:Q=(r=i==null?void 0:i.lineThrough)!=null?r:!1,isDisabled:J=(n=i==null?void 0:i.isDisabled)!=null?n:!1,disableAnimation:A=(l=i==null?void 0:i.disableAnimation)!=null?l:!1,isInvalid:y=B?B==="invalid":(u=i==null?void 0:i.isInvalid)!=null?u:!1,isIndeterminate:I=!1,defaultSelected:N,classNames:s,className:he,onValueChange:X,...S}=e;i&&_e&&(O&&de("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),N&&de("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));const ve=f||"label",ge=o.useRef(null),D=o.useRef(null);let L=e.onChange;d&&(L=le(()=>{i.groupState.resetValidation()},L));const G=o.useId(),T=o.useMemo(()=>({name:p,value:v,children:m,autoFocus:j,defaultSelected:N,isIndeterminate:I,isRequired:g,isInvalid:y,isSelected:O,isDisabled:J,isReadOnly:x,"aria-label":Se(S["aria-label"],m),"aria-labelledby":S["aria-labelledby"]||G,onChange:X}),[v,p,G,m,j,y,I,J,x,O,N,S["aria-label"],S["aria-labelledby"],X]),Y=me(T),{inputProps:R,isSelected:V,isDisabled:$,isReadOnly:z,isPressed:xe}=d?Ue({...T,isInvalid:y,validationBehavior:"native"},i.groupState,D):be({...T,validationBehavior:"native"},Y,D),Z=$||z,[ye,ee]=o.useState(!1),{pressProps:ae}=K({isDisabled:Z,onPressStart(c){c.pointerType!=="keyboard"&&ee(!0)},onPressEnd(c){c.pointerType!=="keyboard"&&ee(!1)}}),re=Z?!1:ye||xe;g&&(R.required=!0);const{hoverProps:ie,isHovered:F}=je({isDisabled:R.disabled}),{focusProps:te,isFocused:M,isFocusVisible:W}=Be({autoFocus:R.autoFocus}),w=o.useMemo(()=>Fe({color:q,size:E,radius:k,isInvalid:y,lineThrough:Q,isDisabled:$,disableAnimation:A}),[q,E,k,y,Q,$,A]);ue(()=>{if(!D.current)return;const c=!!D.current.checked;Y.setSelected(c)},[D.current]);const U=Xe(L),ne=o.useCallback(c=>{if(z||$){c.preventDefault();return}U==null||U(c)},[z,$,U]),oe=H(s==null?void 0:s.base,he),$e=o.useCallback(()=>({ref:ge,className:w.base({class:oe}),"data-disabled":P($),"data-selected":P(V||I),"data-invalid":P(y),"data-hover":P(F),"data-focus":P(M),"data-pressed":P(re),"data-readonly":P(R.readOnly),"data-focus-visible":P(W),"data-indeterminate":P(I),..._(ie,ae,S)}),[w,oe,$,V,I,y,F,M,re,R.readOnly,W,ie,ae,S]),Pe=o.useCallback((c={})=>({...c,"aria-hidden":!0,className:H(w.wrapper({class:H(s==null?void 0:s.wrapper,c==null?void 0:c.className)}))}),[w,s==null?void 0:s.wrapper]),Re=o.useCallback(()=>({ref:Ge(D,b),..._(R,te),onChange:le(R.onChange,ne)}),[R,te,ne]),we=o.useCallback(()=>({id:G,className:w.label({class:s==null?void 0:s.label})}),[w,s==null?void 0:s.label,$,V,y]),Ce=o.useCallback(()=>({isSelected:V,isIndeterminate:!!I,disableAnimation:!!A,className:w.icon({class:s==null?void 0:s.icon})}),[w,s==null?void 0:s.icon,V,I,A]);return{Component:ve,icon:C,children:m,isSelected:V,isDisabled:$,isInvalid:y,isFocused:M,isHovered:F,isFocusVisible:W,getBaseProps:$e,getWrapperProps:Pe,getInputProps:Re,getLabelProps:we,getIconProps:Ce}}var pe=Ee((e,a)=>{const{Component:t,children:r,icon:n=h.jsx(Je,{}),getBaseProps:l,getWrapperProps:u,getInputProps:i,getIconProps:d,getLabelProps:f}=Ye({...e,ref:a}),b=typeof n=="function"?n(d()):o.cloneElement(n,d());return h.jsxs(t,{...l(),children:[h.jsx(Te,{children:h.jsx("input",{...i()})}),h.jsx("span",{...u(),children:b}),r&&h.jsx("span",{...f(),children:r})]})});pe.displayName="NextUI.Checkbox";var oa=pe;export{oa as c,Xe as u,de as w};