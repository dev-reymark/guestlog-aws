import{c as E}from"./chunk-3XT5V4LF-BoiqMHh2.js";import{t as I,d as _,m as z,u as K,k as U,g as q,j as G,i as J,o as L,l as t,a as Q,n as j,f as X}from"./index-BCcLM1JF.js";import{r as n,j as k}from"./app-vMizS-68.js";import{b as Y,u as Z,e as ee}from"./chunk-6NL67ZRH-CHNBLRO5.js";var B=I({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",..._],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),[se,le]=E({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"});function ae(e){const[u,r]=z(e,B.variantKeys),{ref:b,as:o,children:c,disableRipple:d=!1,onClick:f,onPress:m,autoFocus:p,className:N,classNames:s,allowTextSelectionOnPress:P=!0,...l}=u,a=K(b),w=o||(e.isPressable?"button":"div"),D=typeof w=="string",A=U(s==null?void 0:s.base,N),{onClick:V,onClear:$,ripples:R}=Y(),y=C=>{!e.disableAnimation&&!d&&a.current&&V(C)},{buttonProps:F,isPressed:h}=Z({onPress:m,elementType:o,isDisabled:!e.isPressable,onClick:q(f,y),allowTextSelectionOnPress:P,...l},a),{hoverProps:H,isHovered:x}=G({isDisabled:!e.isHoverable,...l}),{isFocusVisible:v,isFocused:W,focusProps:g}=J({autoFocus:p}),i=n.useMemo(()=>B({...r}),[L(r)]),O=n.useMemo(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:i,classNames:s}),[i,s,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),S=n.useCallback((C={})=>({ref:a,className:i.base({class:A}),tabIndex:e.isPressable?0:-1,"data-hover":t(x),"data-pressed":t(h),"data-focus":t(W),"data-focus-visible":t(v),"data-disabled":t(e.isDisabled),...Q(e.isPressable?{...F,...g,role:"button"}:{},e.isHoverable?H:{},j(l,{enabled:D}),j(C))}),[a,i,A,D,e.isPressable,e.isHoverable,e.isDisabled,x,h,v,F,g,H,l]),T=n.useCallback(()=>({ripples:R,onClear:$}),[R,$]);return{context:O,domRef:a,Component:w,classNames:s,children:c,isHovered:x,isPressed:h,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:d,handleClick:y,isFocusVisible:v,getCardProps:S,getRippleProps:T}}var M=X((e,u)=>{const{children:r,context:b,Component:o,isPressable:c,disableAnimation:d,disableRipple:f,getCardProps:m,getRippleProps:p}=ae({...e,ref:u});return k.jsxs(o,{...m(),children:[k.jsx(se,{value:b,children:r}),c&&!d&&!f&&k.jsx(ee,{...p()})]})});M.displayName="NextUI.Card";var ie=M;export{ie as c,le as u};