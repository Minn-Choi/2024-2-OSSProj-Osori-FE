if(!self.define){let i,l={};const n=(n,r)=>(n=new URL(n+".js",r).href,l[n]||new Promise((l=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=l,document.head.appendChild(i)}else i=n,importScripts(n),l()})).then((()=>{let i=l[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(r,e)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let u={};const o=i=>n(i,s),g={module:{uri:s},exports:u,require:o};l[s]=Promise.all(r.map((i=>g[i]||o(i)))).then((i=>(e(...i),u)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"frontend-osori"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.4e2f78a3.css",revision:null},{url:"/css/chunk-vendors.2a4f071f.css",revision:null},{url:"/font/NanumSquareRoundB.ttf",revision:"ecc61bfabe0637e8367a734e718a4f8e"},{url:"/font/NanumSquareRoundL.ttf",revision:"924b9ea5f0305f8dc6371fc4f12da37a"},{url:"/font/NanumSquareRoundR.ttf",revision:"4ba97a2a508f59611d45c41e7414ba66"},{url:"/fonts/NanumSquareRoundB.e45dce43.ttf",revision:null},{url:"/fonts/NanumSquareRoundL.14764d7d.ttf",revision:null},{url:"/fonts/NanumSquareRoundR.0f315e74.ttf",revision:null},{url:"/img/AddFile.be183f1f.svg",revision:null},{url:"/img/Akoming-logo.6c39d486.svg",revision:null},{url:"/img/Akoming.6c39d486.svg",revision:null},{url:"/img/add.a57924a4.svg",revision:null},{url:"/img/akofolio.c1a785cd.svg",revision:null},{url:"/img/akofolioicon.d25f276c.svg",revision:null},{url:"/img/akojaguk.cc7802d0.svg",revision:null},{url:"/img/arrowright.ae524e06.svg",revision:null},{url:"/img/attendance.a87be806.svg",revision:null},{url:"/img/back.fbcc5f60.svg",revision:null},{url:"/img/calendaricon.fda6b770.svg",revision:null},{url:"/img/colora.4a106b43.svg",revision:null},{url:"/img/colorg.94e99fdb.svg",revision:null},{url:"/img/colori.c0f07184.svg",revision:null},{url:"/img/colork.5ee221de.svg",revision:null},{url:"/img/colorm.19a91d49.svg",revision:null},{url:"/img/colorn.228e4f26.svg",revision:null},{url:"/img/coloro.b98f103e.svg",revision:null},{url:"/img/comment.46521c0d.svg",revision:null},{url:"/img/comment.56fb216d.svg",revision:null},{url:"/img/delete.b9f3112a.svg",revision:null},{url:"/img/feedicon.7c49253a.svg",revision:null},{url:"/img/graya.4a55ce55.svg",revision:null},{url:"/img/grayg.6ff583b4.svg",revision:null},{url:"/img/grayi.02cc67db.svg",revision:null},{url:"/img/grayk.55610658.svg",revision:null},{url:"/img/graym.362c2174.svg",revision:null},{url:"/img/grayn.a8086c76.svg",revision:null},{url:"/img/grayo.40b2a970.svg",revision:null},{url:"/img/homeicon.71b8b37d.svg",revision:null},{url:"/img/minielephanticon.c09a4f2f.svg",revision:null},{url:"/img/mypageicon.538bcf49.svg",revision:null},{url:"/img/next.883d2857.svg",revision:null},{url:"/img/plusBtn.598dc5bb.svg",revision:null},{url:"/img/plusBtn2.dd16d63c.svg",revision:null},{url:"/img/trash.ad917f37.svg",revision:null},{url:"/img/write.450aa8cb.svg",revision:null},{url:"/index.html",revision:"bf20ad91cae0f7d348c43f182c5f01e7"},{url:"/js/app.77c421e3.js",revision:null},{url:"/js/chunk-vendors.ca514255.js",revision:null},{url:"/manifest.json",revision:"53d20f6db95e5a683e637d3a3a5b9c80"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
