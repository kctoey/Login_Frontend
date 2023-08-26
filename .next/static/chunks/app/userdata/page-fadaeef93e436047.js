(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{1267:function(e,t,s){Promise.resolve().then(s.bind(s,8523))},7273:function(e,t,s){"use strict";s.r(t),s.d(t,{getServerSideProps:function(){return c}});var a=s(7437),n=s(6154),l=s(134),r=s(9222),i=s(2265),o=s(4174),u=s(4033);async function c(){let e=await handleSubmit,t=await e.json();return{props:{data:t}}}t.default=function(){let[e,t]=(0,i.useState)(""),[s,c]=(0,i.useState)(""),[d,h]=(0,i.useState)(null),{username:p,setUsername:x,setToken:m}=(0,i.useContext)(o.AppContext),f=(0,u.useRouter)();return(0,a.jsx)("div",{className:"font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen ",children:(0,a.jsxs)("div",{className:" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4",children:[(0,a.jsx)("h1",{className:"p-4 text-3xl  ",children:"Login"}),(0,a.jsxs)("form",{className:"p-4",onSubmit:t=>{t.preventDefault(),r.Z.post("http://localhost:8080/user/signin",{email:e,password:s},{headers:{"Content-type":"application/json"}}).then(e=>{h(e.data.message),"ok"===e.data.status&&(x(e.data.data[0].name),m(e.data.token),f.push("/userdata"))}).catch(e=>{console.log(e)})},children:[(0,a.jsx)("div",{className:"py-4",children:(0,a.jsx)(n.Z,{required:!0,type:"email",id:"outlined-basic",label:"Email",variant:"outlined",value:e,onChange:e=>t(e.target.value)})}),(0,a.jsx)("div",{className:"py-4",children:(0,a.jsx)(n.Z,{type:"password",required:!0,id:"outlined-basic",label:"Password",variant:"outlined",value:s,onChange:e=>c(e.target.value)})}),(0,a.jsxs)("div",{className:"pt-4",children:[(0,a.jsx)(l.Z,{variant:"outlined",size:"medium",type:"submit",children:"Login"}),(0,a.jsxs)("h1",{className:"pt-4",children:[" ",d]})]})]}),(0,a.jsxs)("p",{children:["Don't have account"," ",(0,a.jsx)("span",{className:"text-blue-500 font-bold cursor-pointer hover:underline",onClick:()=>{f.push("/register")},children:"Register"})]})]})})}},852:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var a=s(7437),n=s(2265),l=s(6154),r=s(134),i=s(4033),o=s(9222);function u(){let[e,t]=(0,n.useState)(""),[s,u]=(0,n.useState)(""),[c,d]=(0,n.useState)(""),[h,p]=(0,n.useState)(null),[x,m]=(0,n.useState)(""),[f,v]=(0,n.useState)(null),g=(0,i.useRouter)();return(0,a.jsx)("div",{className:"font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen ",children:(0,a.jsxs)("div",{className:" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4",children:[(0,a.jsx)("h1",{className:"p-4 text-3xl  ",children:"Register Page"}),(0,a.jsx)("form",{className:"p-4",onSubmit:t=>{t.preventDefault(),o.Z.post("http://localhost:8080/user/signup",{name:x,email:e,password:s},{headers:{"Content-type":"application/json"}}).then(e=>{d(e.data.message),g.push("/login")}).catch(e=>{alert("cannot signup")})},children:(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-4",children:[(0,a.jsx)(l.Z,{variant:"outlined",required:!0,type:"text",label:"name",value:x,onChange:e=>m(e.target.value)}),(0,a.jsx)(l.Z,{variant:"outlined",required:!0,type:"email",label:"email",value:e,onChange:e=>t(e.target.value)}),(0,a.jsx)(l.Z,{variant:"outlined",required:!0,type:"password",label:"password",value:s,onChange:e=>u(e.target.value)}),(0,a.jsx)(r.Z,{variant:"outlined",size:"medium",type:"submit",children:"Submit"})]})}),(0,a.jsx)("h2",{children:c})]})})}},8523:function(e,t,s){"use strict";s.r(t);var a=s(7437),n=s(2265),l=s(4033),r=s(4174),i=s(134);t.default=()=>{let[e,t]=(0,n.useState)(!1),s=(0,l.useRouter)(),{token:o,username:u}=(0,n.useContext)(r.AppContext);return(0,a.jsx)("div",{className:"font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen ",children:(0,a.jsx)("div",{className:" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4",children:e?(0,a.jsx)("h1",{className:"p-4 text-3xl  ",children:"You have been logged out"}):(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("h2",{className:"pt-4 text-3xl  ",children:"Profile"}),(0,a.jsxs)("p",{children:["Name:",u]}),(0,a.jsx)(i.Z,{variant:"outlined",size:"medium",onClick:()=>{fetch("http://localhost:8080/user/userData",{method:"POST",crossDomain:!0,headers:{"Content-Type":"application/json",Accept:"applicationjson","Access-Control-Allow-Origin":"*"},body:JSON.stringify({token:o})}).then(e=>e.json()).then(e=>{"token expired"==e.data&&s.push("/")}),t(!0),s.push("/")},children:"Logout"})]})})})}},4174:function(e,t,s){"use strict";s.r(t),s.d(t,{AppContext:function(){return l}});var a=s(7437),n=s(2265);s(7273),s(852);let l=(0,n.createContext)({});t.default=e=>{let{children:t}=e,[s,r]=(0,n.useState)(null),[i,o]=(0,n.useState)(null);return(0,a.jsx)(l.Provider,{value:{username:s,setUsername:r,token:i,setToken:o},children:t})}}},function(e){e.O(0,[977,222,154,971,596,744],function(){return e(e.s=1267)}),_N_E=e.O()}]);