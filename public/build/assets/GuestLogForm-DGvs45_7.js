import{r as m,j as e,Y as E}from"./app-vMizS-68.js";import{d as h,b as p}from"./index-WucrAjqt.js";import{S as O}from"./sweetalert2.all-DKFsXpBJ.js";import q from"./GuestRegisterForm-OTdNeF2Z.js";import{S as L,t as M,a as R,b as u,c as V,d as B,e as d,D as $}from"./Icons-87FLRJDn.js";import{s as S,l as v}from"./chunk-OKTOLZE5-B1ZZ8cQU.js";import{i}from"./chunk-ZH5EUE66-YzMMu-7R.js";import{s as x}from"./chunk-IXXDDLGU-CvSgSDZu.js";import"./useControlledState-fB11GaVy.js";import"./index-BCcLM1JF.js";import"./VisuallyHidden-DS8FurIt.js";import"./chunk-3XT5V4LF-BoiqMHh2.js";import"./chunk-6NL67ZRH-CHNBLRO5.js";import"./index-DYB51dk9.js";import"./iconBase-DBni8OB8.js";import"./chunk-X4CB5I5S-VQp_8vM2.js";import"./chunk-HUKVTWEI-CzFsrp30.js";import"./useField-DTKdE9gy.js";import"./LiveAnnouncer-DRWZQFcS.js";import"./chunk-7F3ZLNJ6-Df6rcHY2.js";import"./chunk-VGNVQLL4-QBhNJR16.js";const A=[{value:"Business Meeting",label:"Business Meeting"},{value:"Job Interview",label:"Job Interview"},{value:"Delivery",label:"Delivery"},{value:"Pickup",label:"Pickup"},{value:"Conference",label:"Conference"},{value:"Training",label:"Training"},{value:"Seminar",label:"Seminar"},{value:"Meeting",label:"Meeting"},{value:"Company Event",label:"Company Event"}];function ue({guests:C}){const[j,I]=m.useState(""),[n,g]=m.useState([{item_name:"",quantity:1,remarks:""}]),[_,y]=m.useState(""),[l,o]=m.useState({meeting_with:"",purpose_of_visit:"",check_in_time:"",check_out_time:""}),w=t=>{const{name:a,value:s}=t.target;o({...l,[a]:s})},N=t=>{I(t.target.value)},b=(t,a,s)=>{const r=[...n];r[t][a]=String(s),g(r)},G=()=>{g([...n,{item_name:"",quantity:1,remarks:""}])},D=t=>{const a=[...n];a.splice(t,1),g(a)},T=async t=>{t.preventDefault();const a=new Date(l.check_in_time).toISOString().slice(0,19).replace("T"," "),s=new FormData;n.forEach((c,f)=>{s.append(`guest_items[${f}][item_name]`,c.item_name),s.append(`guest_items[${f}][quantity]`,c.quantity.toString()),s.append(`guest_items[${f}][remarks]`,c.remarks)});const r={...l,check_in_time:a.toString(),check_out_time:l.check_out_time?new Date(l.check_out_time).toISOString():null,guest_items:n};h.Inertia.post(`/guest/log/new/${j}`,r),O.fire({title:"Success!",text:"Your log for today has been created successfully!",icon:"success",confirmButtonText:"OK"}),h.Inertia.visit(route("guest.log.show"))},P=()=>{const t=new Date,a=t.getTimezoneOffset()*6e4,r=new Date(t.getTime()-a).toISOString().slice(0,16);o(c=>({...c,check_in_time:r}))},F=t=>{y(t.target.value)},k=C.filter(t=>t.name.toLowerCase().includes(_.toLowerCase())).sort((t,a)=>t.name.localeCompare(a.name));return m.useEffect(()=>{const t=setTimeout(()=>{h.Inertia.visit("/",{replace:!0})},3e4),a=()=>{clearTimeout(t)};return window.addEventListener("mousemove",a),window.addEventListener("keydown",a),()=>{clearTimeout(t),window.removeEventListener("mousemove",a),window.removeEventListener("keydown",a)}},[]),e.jsxs("div",{className:"min-h-screen bg-[url(/assets/images/bg.png)] bg-cover",children:[e.jsx(E,{title:"Log Guest"}),e.jsx("div",{className:"py-12 p-4 flex justify-center items-center",children:e.jsxs("div",{className:"max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg py-5",children:[e.jsxs("div",{className:"text-center  mb-5",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 ",children:e.jsxs("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative",children:["Guest Log Form",e.jsx("span",{className:"absolute  left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"})]})}),e.jsx("p",{className:"text-sm font-light",children:"Please fill out the form below to log your visit today."})]}),e.jsxs("form",{onSubmit:T,children:[e.jsxs("div",{className:"flex gap-3 mb-4",children:[e.jsx(S,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Guest Name"})}),labelPlacement:"outside",placeholder:"Select Guest Name",description:"If you don't see your name here, please register first.",value:j,onChange:N,isRequired:!0,children:k.length>0?k.map(t=>e.jsx(v,{value:t.id,children:t.name},t.id)):e.jsx(v,{value:"",children:"No matching name available"},"")}),e.jsx(i,{variant:"bordered",placeholder:"Search your name here",className:"w-full sm:max-w-[35%] mt-6",startContent:e.jsx(L,{className:"text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"}),value:_,onChange:F,onClear:()=>y("")}),e.jsx(q,{})]}),e.jsx(x,{y:2}),e.jsx("div",{className:"mb-4",children:e.jsx(i,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Meeting With"})}),labelPlacement:"outside",placeholder:"Meeting With",type:"text",name:"meeting_with",value:l.meeting_with,onChange:w,onFocus:()=>handleFocus("meeting_with"),onClear:()=>o({...l,meeting_with:""})})}),e.jsx(x,{y:2}),e.jsx("div",{className:"mb-4",children:e.jsx(S,{selectionMode:"multiple",label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Purpose of Visit"})}),labelPlacement:"outside",placeholder:"Select Purpose",value:l.purpose_of_visit,onChange:t=>o({...l,purpose_of_visit:t.target.value}),isRequired:!0,children:A.map(t=>e.jsx(v,{value:t.value,children:t.label},t.value))})}),e.jsx(x,{y:2}),e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx(i,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Check In Time"})}),placeholder:"Check In",description:"Please enter your check in time or click the button to check in.",labelPlacement:"outside",type:"datetime-local",name:"check_in_time",value:l.check_in_time,onChange:w,isRequired:!0,onClear:()=>o({...l,check_in_time:""})}),e.jsx("div",{className:"flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6",children:"Or"}),e.jsx(p,{color:"primary",variant:"shadow",onClick:P,className:"mt-6 ",children:"Check In"})]}),e.jsx(x,{y:7}),e.jsx("p",{className:"mb-4 font-bold",children:"Guest Belongings"}),e.jsxs(M,{className:"mb-4",children:[e.jsxs(R,{children:[e.jsx(u,{children:"No."}),e.jsx(u,{children:"Items"}),e.jsx(u,{children:"Quantity"}),e.jsx(u,{children:"Remarks"}),e.jsx(u,{children:"Action"})]}),e.jsx(V,{children:n.map((t,a)=>e.jsxs(B,{children:[e.jsx(d,{children:a+1}),e.jsx(d,{children:e.jsx(i,{labelPlacement:"outside",placeholder:"e.g. Smartphone",type:"text",value:t.item_name,onChange:s=>b(a,"item_name",s.target.value)})}),e.jsx(d,{children:e.jsx(i,{labelPlacement:"outside",placeholder:"Quantity",type:"number",value:t.quantity.toString(),onChange:s=>b(a,"quantity",parseInt(s.target.value,10))})}),e.jsx(d,{children:e.jsx(i,{labelPlacement:"outside",placeholder:"Owner will collect from reception",type:"text",value:t.remarks,onChange:s=>b(a,"remarks",s.target.value)})}),e.jsx(d,{children:e.jsx($,{className:"text-danger text-lg cursor-pointer",onClick:()=>D(a)})})]},a))})]}),e.jsx(p,{onClick:G,children:"Add Item"}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(p,{color:"primary",type:"submit",children:"Submit"}),e.jsx(p,{color:"danger",variant:"flat",onClick:()=>h.Inertia.visit("/"),children:"Cancel"})]})]})]})})]})}export{ue as default};
