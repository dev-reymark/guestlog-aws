import{q as A,m as c,j as e,Y as G,b as F}from"./app-C97loW6B.js";import{S as k,t as I,a as M,b as r,c as O,d as R,e as a,E as T,D as B}from"./Icons-Cgv2YjbP.js";import{A as L}from"./AuthenticatedLayout-B6q7yccj.js";import{b as j,d as b}from"./index-CrgdPOHO.js";import{b as V}from"./index-Bx8f7E_g.js";import{S as l}from"./sweetalert2.all-Di3ONiWF.js";import{i as n}from"./chunk-ZH5EUE66-DEMXZs3B.js";import{p as Y}from"./chunk-F7XGZDO5-Bw9umkJ1.js";import{t as g}from"./chunk-NQWEZNNL-4vc0ChV-.js";import{m as U,a as q,b as H,c as z}from"./chunk-X4CB5I5S-XkBUCPYM.js";import{m as J}from"./chunk-QY5NICTW-B75CpgBT.js";import"./index-BzaZMSCM.js";import"./chunk-XHQUSKIE-Ckst3bwd.js";import"./chunk-HUKVTWEI-BzajgZYT.js";import"./chunk-3XT5V4LF-CZCnRzxb.js";import"./useControlledState-3PjkBkO3.js";import"./index-hs_W8jAA.js";import"./useField-CZNTKEWO.js";import"./VisuallyHidden-BG5VC_gx.js";import"./LiveAnnouncer-iKGc9f99.js";import"./chunk-7F3ZLNJ6-ClVTn9u0.js";import"./chunk-IXXDDLGU-BazPiCxR.js";import"./ApplicationLogo-D75EuX6F.js";import"./chunk-YAC6J4IU-DCDpAuWt.js";import"./chunk-6NL67ZRH-YVAMpjmd.js";import"./iconBase-t05zuBfS.js";import"./index-X92CTFGl.js";function ye({auth:v}){const{props:{guests:w}}=A(),[p,y]=c.useState(""),d=w.slice().sort((t,s)=>t.name.localeCompare(s.name)).filter(t=>t.name.toLowerCase().includes(p.toLowerCase())),[N,u]=c.useState(!1),[o,C]=c.useState(null),_=t=>{l.fire({title:"Are you sure?",text:"This action cannot be undone!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&b.Inertia.delete(route("guest.destroy",{id:t}),{onSuccess:()=>{l.fire("Deleted!","The guest has been deleted.","success"),b.Inertia.reload()},onError:()=>{l.fire("Error!","An error occurred while deleting the guest.","error")}})})},D=async()=>{if(d.length===0){l.fire({icon:"warning",title:"No Records",text:"There are no guests to export."});return}try{const t=await F.get("/generate-report",{responseType:"blob"}),s=window.URL.createObjectURL(new Blob([t.data])),x=document.createElement("a");x.href=s,x.setAttribute("download","Guests_Report.pdf"),document.body.appendChild(x),x.click(),l.fire({icon:"success",title:"PDF Report Generated",text:"The PDF report has been successfully generated and downloaded."})}catch(t){console.error("Error generating PDF report:",t),l.fire({icon:"error",title:"Error",text:"Failed to generate PDF report. Please try again later."})}},E=t=>{C(t),u(!0)},h=()=>{u(!1)},[m,P]=c.useState(1),i=10,S=Math.ceil(d.length/i),f=c.useMemo(()=>{const t=(m-1)*i,s=t+i;return d.slice(t,s)},[m,i,d]);return e.jsxs(L,{user:v.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Registered Guests"}),children:[e.jsx(G,{title:"Guests"}),e.jsx("div",{className:"py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex justify-between gap-3 items-end mb-4",children:[e.jsx("div",{className:"flex gap-2",children:e.jsx(j,{color:"secondary",variant:"flat",onClick:D,className:"mt-6",startContent:e.jsx(V,{}),children:"Export to PDF"})}),e.jsx(n,{variant:"bordered",value:p,onChange:t=>y(t.target.value),placeholder:"Search by name",className:"w-full sm:max-w-[35%]",startContent:e.jsx(k,{className:"text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"})})]})}),e.jsxs(I,{"aria-label":"Guests Table",bottomContent:e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(Y,{isCompact:!0,showControls:!0,showShadow:!0,color:"secondary",page:m,total:S,onChange:t=>P(t)})}),classNames:{wrapper:"min-h-[222px]"},children:[e.jsxs(M,{children:[e.jsx(r,{className:"text-success",children:"#"}),e.jsx(r,{children:"NAME"}),e.jsx(r,{children:"EMAIL"}),e.jsx(r,{children:"PHONE"}),e.jsx(r,{children:"COMPANY"}),e.jsx(r,{children:"ADDRESS"}),e.jsx(r,{children:"ACTION"})]}),e.jsx(O,{emptyContent:"No guests found",items:f,children:f.map((t,s)=>e.jsxs(R,{children:[e.jsx(a,{className:"text-success",children:(m-1)*i+s+1}),e.jsx(a,{children:t.name}),e.jsx(a,{children:t.email}),e.jsx(a,{children:t.phone}),e.jsx(a,{children:t.company}),e.jsx(a,{children:t.address}),e.jsx(a,{children:e.jsxs("div",{className:"relative flex items-center gap-2 text-lg cursor-pointer active:opacity-50",children:[e.jsx(g,{showArrow:!0,color:"primary",content:"View",children:e.jsx("span",{className:"text-primary cursor-pointer active:opacity-50",onClick:()=>E(t),children:e.jsx(T,{className:"text-primary"})})}),e.jsx(g,{showArrow:!0,color:"danger",content:"Delete",children:e.jsx("span",{className:"text-primary cursor-pointer active:opacity-50",children:e.jsx(B,{className:"text-danger",onClick:()=>_(t.id)})})})]})})]},t.id))})]})]})}),e.jsx(U,{isDismissable:!1,isOpen:N,onOpenChange:h,hideCloseButton:!0,backdrop:"blur",children:e.jsx(q,{children:()=>e.jsxs(e.Fragment,{children:[e.jsx(H,{className:"flex flex-col gap-1",children:"Guest Details"}),e.jsx(z,{children:o&&e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(n,{label:"Name",variant:"bordered",value:o.name}),e.jsx(n,{label:"Email",variant:"bordered",value:o.email}),e.jsx(n,{label:"Phone",variant:"bordered",value:o.phone??void 0}),e.jsx(n,{label:"Company",variant:"bordered",value:o.company??void 0}),e.jsx(n,{label:"Address",variant:"bordered",value:o.address??void 0})]})}),e.jsx(J,{children:e.jsx(j,{color:"primary",onPress:h,children:"Close"})})]})})})]})}export{ye as default};
