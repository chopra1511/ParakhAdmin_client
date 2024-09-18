import{u as _,r as d,a as k,b as w,j as e,I as h,c as S,g as D}from"./index-CHEHhW-3.js";import{B as c}from"./Button-CL6geQsZ.js";const T=()=>{var m,p;const{orderDetails:t}=_(s=>s.orders),[C,u]=d.useState({confirmedOrder:t.order_tracking.confirmedOrder,processingOrder:t.order_tracking.processingOrder,productDispatched:t.order_tracking.productDispatched,productDelivered:t.order_tracking.productDelivered}),[l,j]=d.useState(!1),[g,N]=d.useState(""),o=d.useRef(""),b=k(),x=w(),a=s=>{u(i=>{const f={...i,[s]:!i[s]},y={...f,trackingId:g};return x(S({orderId:t._id,tracking:y})).then(()=>{x(D(t._id))}).catch(P=>{console.error(P)}),f})},n=(s,i)=>t.order_tracking[s]&&t.order_tracking[i]?"bg-[#F2707F]":t.order_tracking[s]?"bg-gradient-to-r from-[#F2707F] to-bg-gray-200":"bg-gray-200",r=new Date(t.order_created.created_at),v=s=>{s.preventDefault(),N(o.current.value)};return e.jsx("div",{className:"p-5",children:e.jsxs("div",{className:"h-full container bg-white p-5 rounded-2xl drop-shadow-xl",children:[e.jsxs("div",{className:"flex flex-col items-center relative",children:[e.jsx("h1",{className:"text-xl font-Pacifico text-[#f2707f]",children:"Order"}),e.jsx("h1",{className:"text-2xl font-Lemon font-bold text-center",children:"Details"})]}),e.jsx("div",{className:"absolute top-5",children:e.jsx(h,{onClick:()=>b(-1),children:e.jsx("i",{className:"fi fi-rr-arrow-small-left pt-1 px-2 hover:text-[#f2707f]"})})}),e.jsx("div",{className:"px-20 mt-5",children:e.jsxs("h1",{className:"text-sm font-Poppins",children:["Details for Order Id:"," ",e.jsx("span",{className:"font-semibold uppercase",children:t.order_created.order_id})]})}),e.jsxs("div",{className:"px-20 py-5",children:[e.jsxs("div",{className:"flex items-center justify-between border-b-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("i",{className:"fi fi-rr-calendar-day text-2xl"}),e.jsxs("h1",{className:"text-sm font-Poppins font-medium",children:[r.toLocaleDateString().replace(/\//g,"-"),","," ",r.toLocaleTimeString()]})]}),e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsxs("select",{name:"filter",id:"filter",className:"w-44 text-center border-2 rounded-xl",children:[e.jsx("option",{value:"Status",children:"Status"}),e.jsx("option",{value:"Active",children:"Active"}),e.jsx("option",{value:"Success",children:"Success"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Failure",children:"Failure"})]}),e.jsx("div",{children:e.jsx(c,{variant:"contained",type:"submit",className:"button-shiny-effect",sx:{borderRadius:"10px",fontFamily:"Poppins",textTransform:"capitalize",backgroundColor:"#f2707f",fontSize:"12px",":hover":{backgroundColor:"#F7475C"}},children:"Save"})}),e.jsx(h,{children:e.jsx("i",{className:"fi fi-rr-print text-2xl pt-1 px-2 text-black hover:text-[#f2707f]"})})]})]}),e.jsxs("div",{className:"flex justify-between py-10 border-b-2",children:[e.jsxs("div",{className:"customer flex gap-5 w-1/3",children:[e.jsx("div",{className:"w-fit h-fit p-2 flex items-center bg-[#ffe8d0] rounded-full",children:e.jsx("i",{className:"fi fi-br-circle-user pt-1 px-1 rounded-full text-4xl text-[#fea64b]"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-base font-Poppins font-semibold",children:"Customer"}),e.jsxs("h1",{className:"text-sm font-Poppins font-medium text-gray-500",children:["Name :"," ",t.order_created.customer_details.customer_name]}),e.jsxs("h1",{className:"text-sm font-Poppins font-medium text-gray-500",children:["Email :"," ",t.order_created.customer_details.customer_email]}),e.jsxs("h1",{className:"text-sm font-Poppins font-medium text-gray-500",children:["Phone :"," ",t.order_created.customer_details.customer_phone]})]})]}),e.jsxs("div",{className:"orderInfo flex gap-5 w-1/3",children:[e.jsx("div",{className:"w-fit h-fit p-2 flex items-center bg-[#E3F4F4] rounded-full",children:e.jsx("i",{className:"fi fi-rr-truck-check pt-1 px-1 rounded-full text-4xl text-[#80B5B5]"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-base font-Poppins font-semibold",children:"Order Info"}),e.jsx("h1",{className:"text-sm font-Poppins font-medium text-gray-500",children:"Shipping : Parakh"}),e.jsxs("h1",{className:"text-sm font-Poppins capitalize font-medium text-gray-500",children:["Payment Method: ",t.order_updated[0].payment_group]}),e.jsxs("h1",{className:"text-sm font-Poppins font-medium text-gray-500",children:["Status: ",t.order_updated[0].payment_status]})]})]}),e.jsxs("div",{className:"delivery flex gap-5 w-1/3",children:[e.jsx("div",{className:"w-fit h-fit p-2 flex items-center bg-[#ccf0d1] rounded-full",children:e.jsx("i",{className:"fi fi-br-marker pt-1 px-1 rounded-full text-4xl text-[#00b517]"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-base font-Poppins font-semibold",children:"Deliver To"}),e.jsxs("h1",{className:"text-sm font-Poppins font-medium text-gray-500",children:["Address :"," ",t.order_details.customer.address.address,",",e.jsx("br",{}),t.order_details.customer.address.city,","," ",t.order_details.customer.address.state,","," ",t.order_details.customer.address.pincode]})]})]})]}),e.jsxs("div",{className:"mt-5 flex justify-between",children:[e.jsx("div",{className:"w-1/2",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm py-2 font-semibold font-Poppins text-[#767675]",children:"Product"}),e.jsx("th",{className:"text-sm py-2 font-semibold font-Poppins text-[#767675]",children:"Price"}),e.jsx("th",{className:"text-sm py-2 font-semibold font-Poppins text-[#767675]",children:"Quantity"}),e.jsx("th",{className:"text-sm py-2 font-semibold font-Poppins text-[#767675]",children:"Total"})]})}),e.jsxs("tbody",{className:"text-center",children:[t.order_details.cart.map(s=>e.jsxs("tr",{className:"border-b-2",children:[e.jsx("td",{className:"text-sm py-2 font-Poppins font-medium",children:e.jsxs("div",{className:"flex items-center justify-evenly",children:[e.jsx("img",{src:s.product.images,alt:"",className:"w-10 h-10 object-cover rounded"}),e.jsx("h1",{children:s.product.name})]})}),e.jsxs("td",{className:"text-sm py-2 font-Poppins font-medium",children:["₹",s.product.price]}),e.jsx("td",{className:"text-sm py-2 font-Poppins font-medium",children:s.quantity}),e.jsxs("td",{className:"text-sm py-2 font-Poppins font-medium",children:["₹",s.totalPrice]})]},s.product._id)),e.jsxs("tr",{className:"text-right",children:[e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{className:"text-sm font-Poppins py-2 font-medium",children:"Sub Total :"}),e.jsxs("td",{className:"text-sm font-Poppins py-2 font-medium text-center",children:["₹",t.order_details.amount]})]}),e.jsxs("tr",{className:"text-right",children:[e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{className:"text-sm font-Poppins py-2 font-medium",children:"Shipping Cost :"}),e.jsx("td",{className:"text-sm font-Poppins py-2 font-medium text-center",children:"₹80"})]}),e.jsxs("tr",{className:"text-right",children:[e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{className:"text-sm font-Poppins py-2 font-medium",children:"Grand Total :"}),e.jsxs("td",{className:"text-base font-Poppins font-bold text-center",children:["₹",t.order_details.amount+80]})]}),e.jsxs("tr",{className:"text-right",children:[e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{className:"text-[12px] font-Poppins font-medium",children:"Status :"}),e.jsx("td",{className:"text-[12px] font-semibold font-Poppins",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("h1",{className:`w-fit px-2 py-1 rounded-full ${(m=t.order_updated[0])!=null&&m.payment_status?t.order_updated[0].payment_status==="SUCCESS"?"bg-[#ccf0d1] text-[#006d0e]":"bg-[#fdcccc] text-[#920000]":"bg-[#ffe8d0] text-[#98530c]"}`,children:((p=t.order_updated[0])==null?void 0:p.payment_status)||"ACTIVE"})})})]})]})]})}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"payment-info p-5 bg-gray-100 rounded-xl drop-shadow",children:[e.jsx("h1",{className:"mb-3 text-base font-Poppins font-semibold",children:"Payment Info"}),e.jsx("h1",{className:"text-sm font-Poppins ",children:"Master Card - **** **** 4578"}),e.jsx("h1",{className:"text-sm font-Poppins ",children:"Business Name - Grand Market LLC"}),e.jsxs("h1",{className:"text-sm font-Poppins ",children:["Phone -"," ",t.order_created.customer_details.customer_phone]})]}),e.jsx("div",{className:"notes-form",children:e.jsxs("form",{onSubmit:v,children:[e.jsx("h1",{className:"text-base font-Poppins font-semibold",children:"Notes"}),e.jsx("textarea",{className:"w-full h-28 font-Poppins text-sm bg-gray-100 outline-none p-2 rounded-md",ref:o,placeholder:"Add notes here"}),e.jsx(c,{variant:"contained",type:"submit",className:"button-shiny-effect",sx:{borderRadius:"10px",fontFamily:"Poppins",textTransform:"capitalize",backgroundColor:"#f2707f",fontSize:"12px",":hover":{backgroundColor:"#F7475C"}},children:"Save Note"})]})})]})]}),e.jsxs("div",{className:"track-button",children:[e.jsx(c,{variant:"contained",type:"submit",className:"button-shiny-effect",onClick:()=>j(!l),sx:{borderRadius:"10px",fontFamily:"Poppins",textTransform:"capitalize",backgroundColor:"#f2707f",fontSize:"16px",":hover":{backgroundColor:"#F7475C"}},children:"View Order Tracking"}),l&&e.jsx("div",{className:"mt-10",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex flex-col items-center relative",children:[e.jsx("div",{className:`w-fit h-fit p-2 flex items-center rounded-full cursor-pointer ${t.order_tracking.confirmedOrder?"bg-[#F2707F]":"bg-gray-200"}`,onClick:()=>a("confirmedOrder"),children:e.jsx("i",{className:`fi fi-rr-shopping-cart-check pt-1 px-1.5 rounded-full text-2xl ${t.order_tracking.confirmedOrder?"text-white":"text-gray-400"}`})}),e.jsxs("div",{className:"text-center mt-2",children:[e.jsx("h1",{className:"text-sm font-Poppins font-medium text-gray-700",children:"Order Confirmed"}),e.jsx("h1",{className:"text-sm font-Poppins font-medium text-gray-500",children:r.toLocaleDateString().replace(/\//g,"-")})]}),e.jsx("div",{className:`absolute top-6 left-24 h-0.5 w-52 ${n("confirmedOrder","processingOrder")}`})]}),e.jsxs("div",{className:"flex flex-col items-center relative",children:[e.jsx("div",{className:`w-fit h-fit p-2 flex items-center rounded-full cursor-pointer ${t.order_tracking.processingOrder?"bg-[#F2707F]":"bg-gray-200"}`,onClick:()=>a("processingOrder"),children:e.jsx("i",{className:`fi fi-rr-truck-loading pt-1 px-1.5 rounded-full text-2xl ${t.order_tracking.processingOrder?"text-white":"text-gray-400"}`})}),e.jsxs("div",{className:"text-center mt-2",children:[e.jsx("h1",{className:"text-sm font-Poppins font-medium text-gray-700",children:"Processing Order"}),e.jsx("h1",{className:"text-sm font-Poppins font-medium text-gray-500",children:r.toLocaleDateString().replace(/\//g,"-")})]}),e.jsx("div",{className:`absolute top-6 left-24 h-0.5 w-52 ${n("processingOrder","productDispatched")}`})]}),e.jsxs("div",{className:"flex flex-col items-center relative",children:[e.jsx("div",{className:`w-fit h-fit p-2 flex items-center rounded-full cursor-pointer ${t.order_tracking.productDispatched?"bg-[#F2707F]":"bg-gray-200"}`,onClick:()=>a("productDispatched"),children:e.jsx("i",{className:`fi fi-rr-truck-check pt-1 px-1.5 rounded-full text-2xl ${t.order_tracking.productDispatched?"text-white":"text-gray-400"}`})}),e.jsxs("div",{className:"text-center mt-2",children:[e.jsx("h1",{className:"text-sm font-Poppins font-medium text-gray-700",children:"Product Dispatched"}),e.jsx("h1",{className:"text-sm font-Poppins font-medium text-gray-500",children:r.toLocaleDateString().replace(/\//g,"-")})]}),e.jsx("div",{className:`absolute top-6 left-28 h-0.5 w-52 ${n("productDispatched","productDelivered")}`})]}),e.jsxs("div",{className:"flex flex-col items-center relative",children:[e.jsx("div",{className:`w-fit h-fit p-2 flex items-center rounded-full cursor-pointer ${t.order_tracking.productDelivered?"bg-[#F2707F]":"bg-gray-200"}`,onClick:()=>a("productDelivered"),children:e.jsx("i",{className:`fi fi-rr-location-alt pt-1 px-1.5 rounded-full text-2xl ${t.order_tracking.productDelivered?"text-white":"text-gray-400"}`})}),e.jsxs("div",{className:"text-center mt-2",children:[e.jsx("h1",{className:"text-sm font-Poppins font-medium text-gray-700",children:"Product Delivered"}),e.jsx("h1",{className:"text-sm font-Poppins font-medium text-gray-500",children:r.toLocaleDateString().replace(/\//g,"-")})]})]})]})})]})]})]})})};export{T as default};
