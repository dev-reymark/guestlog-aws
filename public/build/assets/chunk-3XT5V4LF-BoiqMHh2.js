import{r as c}from"./app-vMizS-68.js";function d(a={}){const{strict:s=!0,errorMessage:i="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:u}=a,t=c.createContext(void 0);t.displayName=u;function e(){var o;const n=c.useContext(t);if(!n&&s){const r=new Error(i);throw r.name="ContextError",(o=Error.captureStackTrace)==null||o.call(Error,r,e),r}return n}return[t.Provider,e,t]}export{d as c};
