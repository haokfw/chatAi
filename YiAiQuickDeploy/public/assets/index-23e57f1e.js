import{d as Ae,D as Oe,u as Ce,e as I,Q as ke,b as je,r as v,o as u,c as f,a as e,k as a,l as s,J as b,t as A,m as t,R as et,p as fe,I as g,_ as w,S as h,s as m,U as se,V as tt,L as Pe,W as Re,X as st,f as at,Y as nt,C as lt,w as ot,Z as it,h as ct,F as ee,j as te,q as de,E as X,B as rt,$ as dt,a0 as ge,a1 as ut,a2 as we,n as ft,A as xe,a3 as bt,a4 as mt}from"./index-df8775ab.js";import{f as G,a as he}from"./mjDraw-f3c32078.js";import{N as Ie}from"./InputNumber-b4758351.js";import{N as vt}from"./Switch-993e3485.js";import{N as ue}from"./Select-3819bddd.js";const gt="/assets/fail-7089de31.png",ye="/assets/draw-bccd19c4.svg",pe="/assets/zoom-426d4db7.svg",wt={class:"relative overflow-hidden rounded-md border p-4 transition-all hover:shadow dark:border-neutral-700"},xt={class:"flex items-center justify-between"},ht={style:{width:"240px"}},It={class:"my-4 h-[280px]"},yt={key:0,class:"flex h-full w-full items-center justify-center overflow-hidden rounded-md"},pt={key:1,class:"flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-md"},At=["src"],Ot=e("span",{class:"mt-3 text-base"},"绘制失败",-1),Ct=e("span",{class:"mt-1"},"已退还余额至您的账户！",-1),kt={key:2,class:"my-4 h-[280px] relative"},jt={class:"-mx-4 -mb-4 bg-[#fafafc] px-4 py-2 dark:bg-[#262629]"},Pt={key:0,class:"w-full"},Rt={class:"mb-2 flex items-center justify-between"},Ut=e("span",null,"放大：",-1),zt={class:"text-base text-neutral-400"},_t=e("div",{style:{width:"240px"}},[e("p",null,"参数释义：放大某张图片如 U1 放大第一张图片，以此类推")],-1),Nt={class:"flex-1"},St={class:"flex items-center justify-around"},Dt=e("p",null,"重新生成一次",-1),Mt={key:1,class:"w-full"},qt={class:"mb-2 flex items-center justify-between"},Et=e("span",null,"变换：",-1),Bt={class:"text-base text-neutral-400"},Tt=e("div",{style:{width:"240px"}},[e("p",null," 参数释义：以某张图片为基准重新生成 如 V1 则变换第一张图片，以此类推 ")],-1),Gt={class:"flex-1"},Kt={class:"flex items-center justify-around"},Lt={key:2,class:"w-full mb-2 flex items-center justify-between"},Ht={key:0},Qt={key:0},Ft={key:1},Jt={key:1},Vt={key:3,class:"w-full mb-2 flex items-center justify-between"},Zt={key:4,class:"w-full mb-2 flex items-center justify-between"},Yt={key:5,class:"w-full mb-2 flex items-center justify-between"},Xt={key:6},Wt={class:"mb-2 flex flex-1 items-center justify-between"},$t=e("span",null,"缩放：",-1),es={class:"text-base text-neutral-400"},ts=e("div",{style:{width:"270px"}},[e("p",null,"参数释义：Zoom 对当前图片进行无限缩放")],-1),ss={class:"flex-1"},as={class:"flex items-center pl-2"},ns=["src"],ls=e("p",null,"放大",-1),os=["src"],is=e("p",null,"放大",-1),cs={key:7,class:"flex w-full"},rs={class:"mb-2 flex flex-1 items-center justify-between"},ds=e("span",null,"调整：",-1),us={class:"text-base text-neutral-400"},fs=e("div",{style:{width:"275px"}},[e("p",null,"参数释义：Vary 以当前图片为基础调整图片")],-1),bs={class:"flex-1"},ms={class:"flex items-center pl-2"},vs=["src"],gs=e("p",null,"以当前图片为基础大幅增强",-1),ws=["src"],xs=e("p",null,"以当前图片为基础细微调整",-1),hs=Ae({__name:"cardItem",props:{drawItemInfo:null},emits:["usePrompt","queryData"],setup(i,{emit:k}){const K=i,ae=Oe(),x=Ce(),ne=I(()=>ae.theme),le=I(()=>ne.value==="dark"?"#fff":"#000"),W=ke(),j=je(),oe="/api/midjourney/download",L=v(!1),P=I(()=>{const{status:r}=K.drawItemInfo;if(r===1)return"";if(r===2)return"info";if(r===3)return"primary";if(r===4||r===5)return"error"}),H=I(()=>{const{status:r}=K.drawItemInfo;if(r===1)return"等待中";if(r===2)return"绘制中";if(r===3)return"成功";if(r===4)return"失败";if(r===5)return"超时"});function ie(){k("usePrompt")}async function Q(r){const c=W.info({title:"下载图片",content:"是否确认下载当前图片",positiveText:"下载",negativeText:"取消",onPositiveClick:async()=>(c.loading=!0,new Promise(async d=>{const{fileInfo:E}=r,{filename:B,cosUrl:z}=E,U=await Re.post(oe,{url:z},{responseType:"blob"}),J=new Blob([U.data],{type:U.headers["content-type"]}),_=window.URL.createObjectURL(J),N=document.createElement("a");N.href=_,N.download=B,N.click(),d(!0)}))})}async function $(r){W.warning({title:"删除记录",content:"是否确认删除当前绘制记录？",positiveText:"删除",negativeText:"取消",onPositiveClick:async()=>{const{id:c}=r,d=await st({id:c});if(!d.success)return j.error(d.message);j.success("删除绘制记录成功！"),k("queryData")}})}async function R(r,c){const{drawId:d}=r;await G({drawId:d,action:"UPSCALE",orderId:c}),j.success("提交放大绘制任务成功、请等待绘制结束！"),x.token&&await C(),k("queryData")}async function O(r,c){const{drawId:d}=r;await G({drawId:d,action:"REGENERATE",orderId:c}),j.success("提交重新生成绘制任务成功、请等待绘制结束！"),x.token&&await C(),k("queryData")}async function p(r,c){const{drawId:d}=r;await G({drawId:d,action:"VARIATION",orderId:c}),j.success("提交图片变换绘制任务成功、请等待绘制结束！"),x.token&&await C(),k("queryData")}async function C(){L.value=!0;try{await x.getUserInfo(),L.value=!1}catch{L.value=!1}}const F=I(()=>{const{progress:r,status:c}=K.drawItemInfo;if(c===1)return"正在排队中...";if(c===2&&!r)return"正在绘制中...";if(c===2&&r===100)return"正在存储图片中..."});async function M(r,c){const{drawId:d}=r;await G({drawId:d,action:"VARIATION",orderId:c}),j.success("提交图片调整绘制任务成功、请等待绘制结束！"),x.token&&await C(),k("queryData")}async function q(r,c){const{drawId:d}=r;await G({drawId:d,action:"UPSCALE",orderId:c}),j.success("提交图片调整绘制任务成功、请等待绘制结束！"),x.token&&await C(),k("queryData")}return(r,c)=>(u(),f("div",wt,[e("div",xt,[e("span",null,[a(t(et),{size:"small",type:t(P)},{default:s(()=>[b(A(t(H)),1)]),_:1},8,["type"])]),a(t(se),null,{default:s(()=>[i.drawItemInfo.action==="IMAGINE"?(u(),fe(t(h),{key:0,placement:"top",trigger:"hover"},{trigger:s(()=>[a(t(g),{size:"tiny",ghost:"",onClick:ie},{icon:s(()=>[a(t(w),{icon:"ri:brush-line",class:"text-base"})]),default:s(()=>[b(" 使用 ")]),_:1})]),default:s(()=>[e("div",ht,[e("p",null,A(i.drawItemInfo.fullPrompt),1)])]),_:1})):m("",!0),a(t(g),{size:"tiny",ghost:"",onClick:c[0]||(c[0]=d=>Q(i.drawItemInfo))},{icon:s(()=>[a(t(w),{icon:"mingcute:file-download-line",class:"text-base"})]),default:s(()=>[b(" 下载 ")]),_:1}),a(t(g),{size:"tiny",ghost:"",onClick:c[1]||(c[1]=d=>$(i.drawItemInfo))},{icon:s(()=>[a(t(w),{icon:"ri:delete-bin-line",class:"text-base"})]),default:s(()=>[b(" 删除 ")]),_:1})]),_:1})]),e("div",It,[i.drawItemInfo.status===3?(u(),f("div",yt,[a(t(tt),{style:{"object-fit":"contain"},src:i.drawItemInfo.drawUrl,"preview-src":i.drawItemInfo.drawUrl,"object-fit":"contain"},null,8,["src","preview-src"])])):m("",!0),[4,5,6].includes(i.drawItemInfo.status)?(u(),f("div",pt,[e("img",{class:"w-[75px]",src:t(gt)},null,8,At),Ot,Ct])):m("",!0),[1,2].includes(i.drawItemInfo.status)?(u(),f("div",kt,[a(Pe,{"text-color":t(le),progress:i.drawItemInfo.progress,tips:t(F)},null,8,["text-color","progress","tips"])])):m("",!0)]),e("div",jt,[(i.drawItemInfo.action==="IMAGINE"||i.drawItemInfo.action==="VARIATION"||i.drawItemInfo.action==="ZOOM"||i.drawItemInfo.action==="OUTPAINT"||i.drawItemInfo.action==="REROLL")&&i.drawItemInfo.status===3?(u(),f("div",Pt,[e("div",Rt,[Ut,e("span",zt,[a(t(h),{placement:"top",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[_t]),_:1})]),e("div",Nt,[e("div",St,[a(t(g),{size:"tiny",onClick:c[2]||(c[2]=d=>R(i.drawItemInfo,1))},{default:s(()=>[b(" U1 ")]),_:1}),a(t(g),{size:"tiny",onClick:c[3]||(c[3]=d=>R(i.drawItemInfo,2))},{default:s(()=>[b(" U2 ")]),_:1}),a(t(g),{size:"tiny",onClick:c[4]||(c[4]=d=>R(i.drawItemInfo,3))},{default:s(()=>[b(" U3 ")]),_:1}),a(t(g),{size:"tiny",onClick:c[5]||(c[5]=d=>R(i.drawItemInfo,4))},{default:s(()=>[b(" U4 ")]),_:1}),a(t(h),{placement:"top",trigger:"hover"},{trigger:s(()=>[a(t(g),{size:"tiny",onClick:c[6]||(c[6]=d=>O(i.drawItemInfo,5))},{default:s(()=>[a(t(w),{icon:"solar:refresh-outline",class:"text-base"})]),_:1})]),default:s(()=>[Dt]),_:1})])])])])):m("",!0),(i.drawItemInfo.action==="IMAGINE"||i.drawItemInfo.action==="VARIATION"||i.drawItemInfo.action==="ZOOM"||i.drawItemInfo.action==="OUTPAINT"||i.drawItemInfo.action==="REROLL")&&i.drawItemInfo.status===3?(u(),f("div",Mt,[e("div",qt,[Et,e("span",Bt,[a(t(h),{placement:"top",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[Tt]),_:1})]),e("div",Gt,[e("div",Kt,[a(t(g),{size:"tiny",onClick:c[7]||(c[7]=d=>p(i.drawItemInfo,1))},{default:s(()=>[b(" V1 ")]),_:1}),a(t(g),{size:"tiny",onClick:c[8]||(c[8]=d=>p(i.drawItemInfo,2))},{default:s(()=>[b(" V2 ")]),_:1}),a(t(g),{size:"tiny",onClick:c[9]||(c[9]=d=>p(i.drawItemInfo,3))},{default:s(()=>[b(" V3 ")]),_:1}),a(t(g),{size:"tiny",onClick:c[10]||(c[10]=d=>p(i.drawItemInfo,4))},{default:s(()=>[b(" V4 ")]),_:1}),a(t(g),{size:"tiny",style:{opacity:"0"}},{default:s(()=>[b(" V5 ")]),_:1})])])])])):m("",!0),i.drawItemInfo.progress!==100&&i.drawItemInfo.status!==3?(u(),f("div",Lt,[i.drawItemInfo.orderId!==5?(u(),f("div",Ht,[i.drawItemInfo.action==="UPSCALE"?(u(),f("span",Qt," 操作："+A(`选中套图第${i.drawItemInfo.orderId||"x"}张图片进行放大`),1)):m("",!0),i.drawItemInfo.action==="VARIATION"?(u(),f("span",Ft," 操作："+A(`选中套图第${i.drawItemInfo.orderId||"x"}张图片进行变换`),1)):m("",!0)])):m("",!0),i.drawItemInfo.orderId===5?(u(),f("span",Jt," 操作：正在对图片重新生成一次 ")):m("",!0)])):m("",!0),i.drawItemInfo.action==="IMAGINE"&&!i.drawItemInfo.orderId&&i.drawItemInfo.status==="UPSCALE"?(u(),f("div",Vt," 操作：正在火速绘制中... ")):m("",!0),!i.drawItemInfo.orderId&&[4,5,6].includes(i.drawItemInfo.status)?(u(),f("div",Zt," 执行： 换个提示词重新试试吧！ ")):m("",!0),!i.drawItemInfo.action&&!i.drawItemInfo.extend?(u(),f("div",Yt," 上级： "+A(i.drawItemInfo.message_id||"正在加载中..."),1)):m("",!0),(i.drawItemInfo.action==="UPSCALE"||i.drawItemInfo.action==="ACTION")&&i.drawItemInfo.status===3?(u(),f("div",Xt,[e("div",Wt,[$t,e("span",es,[a(t(h),{placement:"top",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[ts]),_:1})]),e("div",ss,[e("div",as,[a(t(se),null,{default:s(()=>[a(t(h),{placement:"top",trigger:"hover"},{trigger:s(()=>[a(t(g),{size:"tiny",onClick:c[11]||(c[11]=d=>q(i.drawItemInfo,1))},{icon:s(()=>[e("img",{src:t(pe),class:"w-4",alt:""},null,8,ns)]),default:s(()=>[b(" U(Subtle) ")]),_:1})]),default:s(()=>[ls]),_:1}),a(t(h),{placement:"top",trigger:"hover"},{trigger:s(()=>[a(t(g),{size:"tiny",onClick:c[12]||(c[12]=d=>q(i.drawItemInfo,2))},{icon:s(()=>[e("img",{src:t(pe),class:"w-4",alt:""},null,8,os)]),default:s(()=>[b(" U(Creative) ")]),_:1})]),default:s(()=>[is]),_:1})]),_:1})])])])])):m("",!0),(i.drawItemInfo.action==="UPSCALE"||i.drawItemInfo.action==="ACTION")&&i.drawItemInfo.status===3?(u(),f("div",cs,[e("div",rs,[ds,e("span",us,[a(t(h),{placement:"top",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[fs]),_:1})]),e("div",bs,[e("div",ms,[a(t(se),null,{default:s(()=>[a(t(h),{placement:"top",trigger:"hover"},{trigger:s(()=>[a(t(g),{size:"tiny",onClick:c[13]||(c[13]=d=>M(i.drawItemInfo,1))},{icon:s(()=>[e("img",{src:t(ye),class:"w-4",alt:""},null,8,vs)]),default:s(()=>[b(" V(Strong) ")]),_:1})]),default:s(()=>[gs]),_:1}),a(t(h),{placement:"top",trigger:"hover"},{trigger:s(()=>[a(t(g),{size:"tiny",onClick:c[14]||(c[14]=d=>M(i.drawItemInfo,2))},{icon:s(()=>[e("img",{src:t(ye),class:"w-4",alt:""},null,8,ws)]),default:s(()=>[b(" V(Subtle) ")]),_:1})]),default:s(()=>[xs]),_:1})]),_:1})])])])])):m("",!0)])]))}}),Is="/assets/niji-55cc65e6.png",ys="/assets/mj-8c02cbcc.png",ps="/assets/market-f1234219.png",As={class:"grow flex h-screen flex-col lg:pt-0"},Os={class:"flex grow flex-col sm:flex-row h-full"},Cs={class:"p-4 sm:pt-6 bg-[#f8f8f8] p-4 dark:bg-[#18181c] overflow-y-auto w-full sm:w-[20rem] shrink-0 border-r-2 border-[#ffffff17]"},ks={class:"mt-4 text-sm flex items-center"},js=e("div",{class:"text-sm mr-1"},"图片尺寸",-1),Ps={"data-tool-target":"tooltip-default"},Rs={class:"flex mt-2 py-1 pb-2 space-x-1 overflow-x-auto justify-between scrollbar-none"},Us=["onClick"],zs={class:"flex items-center justify-center w-6 h-6"},_s={class:"mt-2 text-center text-xs leading-none text-current"},Ns={class:"mt-4 text-sm flex items-center"},Ss=e("div",{class:"mr-1"},"模型选择",-1),Ds={"data-tool-target":"tooltip-default"},Ms=e("div",{style:{width:"240px"}},[e("p",null,"MJ: 偏真实通用模型"),e("p",null,"NIJI: 偏动漫风格、适用于二次元模型")],-1),qs={class:"mt-2 flex justify-between"},Es=["onClick"],Bs={class:"relative w-full h-full dark:bg-black rounded",type:"button"},Ts={class:"absolute w-full h-full flex justify-center items-center"},Gs={class:"text-2xl text-white font-bold absolute left-5 top-1"},Ks=["src"],Ls={class:"mt-4"},Hs={class:"mt-2 flex justify-between items-center space-x-2 text-xs"},Qs=e("span",{class:"w-[65px] block text-sm"},"版本",-1),Fs={class:"flex-1"},Js={key:0,class:"mt-2 flex justify-between items-center space-x-2 text-xs"},Vs=e("span",{class:"w-[65px] block text-sm"},"风格",-1),Zs={class:"flex-1"},Ys={class:"block text-sm mt-2 flex items-center"},Xs=e("div",{style:{width:"240px"}},[e("p",null,"合理使用参数绘制更为理想的结果！")],-1),Ws={class:"mt-3 flex justify-between items-center space-x-2 text-xs"},$s=e("span",{class:"w-[65px] block text-sm"},"品质",-1),ea={class:"flex-1"},ta={class:"mt-3 flex justify-between items-center space-x-2 text-xs"},sa=e("span",{class:"w-[65px] block text-sm"},"混乱",-1),aa={class:"flex-1"},na=e("div",{style:{width:"270px"}},[e("p",null,"取值范围：0-100、 --chaos 或 --c"),e("p",null,"混乱级别，可以理解为让AI天马行空的空间"),e("p",null,"值越小越可靠、默认0最为精准")],-1),la={key:1,class:"mt-3 flex justify-between items-center space-x-2 text-xs"},oa=e("span",{class:"w-[65px] block text-sm"},"风格化",-1),ia={class:"flex-1"},ca=e("div",{style:{width:"270px"}},[e("p",null,"风格化：--stylize 或 --s，范围 1-1000"),e("p",null,"参数释义：数值越高，画面表现也会更具丰富性和艺术性")],-1),ra=e("div",{class:"block text-sm mt-2 flex items-center"},"设定",-1),da={class:"mt-3 flex justify-between items-center space-x-2 text-xs"},ua=e("span",{class:"w-[65px] block text-sm"},"携带参数",-1),fa={class:"flex-1"},ba=e("div",{style:{width:"240px"}},[e("p",null,"是否自动携带参数"),e("p",null,"打开：携带上述我们配置的参数"),e("p",null,"关闭：使用指令中的我们自定义的参数")],-1),ma={class:"mt-5"},va=e("div",{class:"block text-base"},"以图生图",-1),ga={class:"ant-spin-nested-loading css-4fssqp mt-5"},wa={class:"ant-spin-container"},xa={class:"mt-2 flex justify-center items-center dark:bg-black p-5 rounded-md"},ha={key:0,for:"upload-file"},Ia=e("div",{class:"upload-container"},[e("img",{class:"mx-auto py-2 w-11",src:"data:image/png;base64,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"}),e("p",{class:"mt-3"},"点击或拖拽一个图片到这里作为输入"),e("p",{class:"text-center dark:text-[#ffffff73]"}," 支持PNG和JPG格式 ")],-1),ya={key:1,class:"w-full h-full relative"},pa=["src"],Aa={class:"mt-5"},Oa={class:"block flex justify-between"},Ca={class:"text-base py-1"},ka={class:"text-[#3076fd]"},ja={class:"flex items-center"},Pa=rt('<div class="mt-3 space-y-1 items-center text-[#3076fd]"><div class="flex justify-between"><span class="w-[120px] block text-sm">绘画单次消耗：</span><span class="text-sm pr-2"> 4积分 </span></div><div class="flex justify-between"><span class="w-[120px] block text-sm">图生图单次消耗：</span><span class="text-sm pr-2"> 4积分 </span></div><div class="flex justify-between"><span class="w-[120px] block text-sm">放大单次消耗：</span><span class="text-sm pr-2"> 1积分 </span></div></div>',1),Ra={class:"m-auto max-w-screen-4xl"},Ua={class:"space-y-6 p-4"},za=e("h3",{class:"text-lg sm:text-2xl font-bold leading-6"},"Midjourney",-1),_a={class:"flex justify-between items-end"},Na=e("b",null,"你想生成什么图像?",-1),Sa={class:"mt-4"},Da={key:0,class:"mt-4"},Ma={class:"mb-3 flex justify-between items-end"},qa=e("b",null,"不需要的元素",-1),Ea={class:"flex items-center space-x-3 whitespace-nowrap pb-[15px]"},Ba={class:"mt-3"},Ta={class:"space-y-2 p-4"},Ga={key:0},Ka={class:"mt-6 mb-4 flex flex-col"},La={class:"text-xl font-bold flex items-end"},Ha=e("b",null,"工作中的内容",-1),Qa={key:0,class:"text-xs font-family ml-2"},Fa={key:0,class:"h-[10vh] flex flex-col justify-center items-center text-gray-500 relative"},Ja=["src"],Va={class:"mt-4"},Za={key:1,class:"h-[10vh] flex flex-col justify-center items-center text-gray-500 relative"},Ya={class:"w-56 h-14 relative"},Xa={class:"mb-3"},Wa={class:"min-h-[500px] mt-5"},$a={class:"mt-6 mb-10 flex flex-col"},en={class:"text-xl font-bold"},tn={class:"text-base text-[gray]"},sn=e("span",{class:"mt-2 text-xs font-bold text-[#444]"},"点击下面的编号按钮以获取升级版（U: 放大图片更细节）或变化版（V: 在此基础上变体）。绘画失败不扣除积分，请重试直到绘画成功为止。",-1),an={key:0,class:"w-full py-28"},nn=e("img",{class:"mx-auto",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABOCAYAAAC3zZFGAAAAAXNSR0IArs4c6QAAD81JREFUeF7tXAuQZFV5/v9zu+e9O7s7Pbtzu1s3ujHEBxhQ0ZiKFbESLVNGq6KhDEo0uKgLCBGQAvGBC+Fh2AJZQcLDxTI+qBAeakkZcMVoRCCaCMgzPJa5t7tnemeZR6bn9r19/tR3c3pyt7dnuvt2b/cCe6qoHWbOPffc7/znf37nMO3f1NjYmD0wMHA0ER3LzK8VkTQRrWPmftNVav7F/4pI+Ovq36I/R/tH/x4Ow8zRv7MZLPy3puF31d9Hf652Y+blx6L9wtcQkSaikogUiegZIvqN1vqBxcXFh2ZnZ/fVeV9Tv1p+YzqdHmLmtxDRXxHR25l5nIgGRSTJzCoy+aYGbqLTAWDWAayJYZrvYla5QkQeES0y8zNa6x9qrW/O5/OPEVHQ/Gj/1zMEcMOGDWsHBwc/SESfYObfJ6KBVgd6IfYHoMw8LyI/I6IdjuPc0yqIAHAwm83+JRF9UUReYaTthYhHO3P2ReQerfU5uVzu1zWqaNVxeWJi4thEInGZiPzxSxS8ECAR+R8iun5hYeGCVnQip9PpzyilPkNEY+0s4YvgWezoxyqVyon5fP7+Zr+HM5nMd5n5L14qem81YERkLxGd5TjOt4io3AyIAPDnRPRmZraaeeDF3EdEYFB2lMvly4vF4nwz3woAH2PmVx0EN6WZ9x9qfeAn7lpYWPhss3oQAD7HzNlD7Ut6NB9PRL5ttjG2c8N2GMD9IQKA0H9nO45zGMCG4nNgh8MAxgAt+shhAA8D2CYCbT7eugRms1mHiJCyitPgvSOrgv/qpaDijNnOM+E82ghJy8aIwJluzohks1mXiOxWZm1AWyCiJ4goZ3JthwKAyPkliQhJkd+JEV0BQLgxZzYNYCaTmWTmTIsAArxvaa2vC4IAz4eZoVbG6HTfamJWa62SyeTrlVJnMfPbDKDNvq51CYzjSCPoJqJtjuPsbiX10+xXdKDfYDqdPomZv8DMqRbGa10HxgQQ2YqtjuP8VwuT62ZXK5vNvk9ErmgxyuoOgET0cKVS+UQul0Mm91Bsfdls9kQRuZCZN7Uwwa4B+LyIXOP7/g2e580cCjoQIFXnMTQ0tEUpdQ4zv4eIqsWwZnDsDoDGCqO6da+IPAs9qJTqqRExlUFYYQD2aiJ6AzMPt+hedQfA6lKKSMDM/iHmByoR6YvpC3YXwGb2xAusz2EA21ywwwAeBjAmAqZIHohIGXq5+q8JM0MjTUSWiMDIgG3RF2FdVN/60pJAY8QWRQTcFhdUDSJytNYFEcmJyIxlWaiuidY6QUQjSqmNImIrpTIispmIXkZE48w8ApBB8yCiM1zXhZfRsL0QU/oQthIRTYEgJCK/FhFERI+COOR5XnlwcNB3XRfeAbguVQ4OJBAcn0QqlerzPK9vZGRkWES2JBKJo7TWb2LmI0XkPiI698UIIIAAcE+LyF0icjeA831/X7FYxO9bJgYZ8QKwA+Pj46OWZR0BKVRK3ee67mJD8UPnOLFwMwN3uA90GrbnD7TW/5JMJh/as2fPHBGBadXJFurJVhajHQAhEUj/NKrgQ/cMRMl7zX6xMQwIG++uVCo3lkqle2dnZ59vIgMUbtVsNmv5vo+fybIscV0XgENSOwZ8LABFBCHTJBH9mJkRylWtXBSbMFMtIgjmjyOiLcwMMJtqIoKP/G8iuikIgm8XCoU9q3y4lUqlhohoTTKZnBCRCcuywG9cD/aZeaGntYbUItM8XalUcojjZ2dnQSpqJAQrzjkugJjEDs/zdhHRqhSIRCIB6XuvUuqzzAyr10zMjC0LZX5FqVT60czMDD68XhsYGxsbA6NWRN7IzK8hopczMyztiFmwUALNYmJRoC9htSEAj0OPaq3vK5fLz83MzOBbGhE/95tHHAAhVf+ptT45l8s90Iw42ba9WSl1DRH9WSMOjojAF9vNzJc5jgPeTj3p6BsfH9/c19f3DmZ+l4gcaRKnkDZIecNFMhIOpipAewq7KQiC7/u+/9tVFuyAz40L4L1BEJxcKBQeagbATZs2bUwkElcT0XsbbGPo1H8NgmB7oVDA4tTqKpVKpSb6+vreycxg1ILLDf5206qh3nxNdglb+SkRuS0IglumpqaQdQfAq7a4AD6ptT4tl8vd1YRC5o0bNx6VTCYB4B+uYkywbX8qIp93XffeSARR/YB+27bhq52klILUwfntKKMsQvn9FRF9fX5+/vtzc3MzqyEYB0BYBvhId2itvx4EAcSf+vv799s2nueBfyyWZaWVUh9k5r8motEVJABG6X4ROd91XdRZ9pO8VCq1pq+v7z3MfCozQ+oOKofbbG+Ue7+Bwlkul3tuJd0YC0CjkKGMoYhXq58CxHUi8nIiGq4nfWb7YIKfdxznO7XbZt26deuGhoZOBHjGkleNQqPd1e7fYUye11r/MxFd7rru4/VAjAtgu5Nbfl5EUCK9dm5u7uL5+fn9FmP9+vWjQ0NDJxHR3xFRJo4v2e5EzfxuKZfLF05PTz9ZO15PAYQ/ycz/JiKn16nwDdq2fQLcHyLa3AvwqmCBuUpE31xaWrpo79692NrLrdcATonIea7rfrNm61q2bf+pUuoyInpdHPCMasBhGlhSuDfQmw3dm5Uk1vCnr1hcXLxq3759s9V+PQPQpKK+JyKfchwHunS5pVKpI/r7+wHeu+O4KCZSQux8GxE9KSJHw5k3aatYIBoL/YyInOM4zq3VeLlnABJRHkzQycnJ7xIRUk9hg8Xt7+8/nZnPhI8XQ4dB+ee11n8/Pz//nbGxsQXf98FOgB7dysxrYowZPgLrzMzIBGHRYVR6k43BRJCSCoLglKmpKcS7yzsinU6/lZnhMyK6aFlajF79eRAEn8zn8w9XB85kMojHr2Hm34sLoHlun9b6Ut/3vzo9Pb3QKwl8vlKpXKq1vqpQKCACCBus7uDg4PnM/ElT0235W832vZuZT5mcnAR7LGy2bb9BKXUjMx/V8qCRB8z4/x4EwbZCofBgLwCEOkEQf6rruj+ORhypVOqY/v5+JChiGQ6zzeCU7xaRU1zXRTgWtomJiTdZlnV9uwCad+w1EdMuALiHmVEX6EozXv6dlUrl1Hw+D0Uftmw2C0t5MhF9waShYs3HSMhPDICPRgA81gB4ZKyB938IYedtvu+f2wsAEQZ+bXFx8UtRd2Djxo2bksnkTiJ6XxzLW/2+VQDsmASaSOwJrfXpAPBZZkao1ZUmItNE9DnHcW4ioqWIjjpGKXUDM7++TX8NW7ieBHYSQFhkbOMvdx1AkzKCG3BnJGmQTKfT72fmf2DmuHztcC26JIFhQoWZbwWAz5hMcVckkIge9H1/a6FQ+GX1hbhugIhOUUqdF9P3W557FwFEbeWX3QYQFhi5vo9UHVF8Oa4cGBgYONekq1Dgjt1WAtC27WMsy4LaeF3swfd/MDxfDACfNoz2Do278jDGyb1raWnpo8ViEacDwjY6Orp+ZGTkImb+SKQIFGs+BsAD3BhTVrieiFAGaNlBrzcZEXmu6wAS0Q/L5fLHpqenEcqFLZPJ4LT8l03StRVG6QHfVQUQznjUkUYyIZPJHM/MnxORV3YIxHwvALyzXC6fVAsgikhEdEKLlNwVBEMe0lpvq+Vwm9tJ8A5ccdCJFFmuqwAa/2m31vqjuVwOdd6wIes8MjKynYiQPK3WcWNtYTyEJKiI3Fguly8pFos4CLTcEC4ODw+DgH4WiEXtSCLYEpzNZlHTeEXs2bb2IDIlD1Qqlb/J5XKPVB81GZizwYpqJ1tSHS/C4b7W9/2dU1NTheg0sWDDw8N/206m26S3HgSAyIa8sjUc2ur9sNb6467rouYbNoRxWuutSimEcRvaGv3/H8Y3gqJWF0QYruHh4Y8ppc4A3S2GJKIEe0/XAQSrX2v96Vwud3vEkU6k0+k/Z+YrO+yTVkH8x3K5vDOqd4HzmjVrxkZHR7cS0WmtgmhqJf8EAFEo2dKhVW84DEiPRLTdcZxrDc0ifCadTh/BzLuY+c3thHJ1JrAqiOl0OsXMHweIoIQ0+24RQTnigl4AiPgXRevzo0XrtWvXbli7di0s8Yc6YIlrcQSIqPhdVy6Xv1IriRMTE+OJROJUEcHdYSAlreonGh0LTs2negFgGOx7nretWCwu5+vAW85ms8eLyOVGEhpKc4sdQhBF5Hrf96+sBdFkg04jIiRzwepaDcQlEbnJ87xQApG1/d0WJ9NWdxHZo7U+I5fL3RFlIYyPj78qmUwiI/NHMQ/KNJpXFcQbIInRaAgPZjIZXP+CiOj4BrvA1Vqf6bruLfADn2DmbgMIP21nqVS6JJoTNEmFbcwMKlycglIjAPF3gDgDSawDospkMrjJbudKu8BUE8Hi+nShUHgaAD5ubi5q5uUd6WPCrft93z95amrqN9FBJyYmXmNZ1leJ6G0HSQqXQWRmsF6vjBTL+9Pp9AnMfOkK54zhx7pBEJyXz+dRTfR6AqD5ApActzPz1yYnJ8GzqbbwI5RSFxER2K0dCfxXsM6YAxiwN1qWNWtu8DzDXH9ajzIX3mzked551QinlwBq3BwJyxeNSvChRqFfwMwfJiLkCg9mA/v1ca01EqS4ZyFdr6RgMkn/Ad3tuu4vqkQjGBHUTnE89GCt9GofP6u13rG0tHRFDSuUbds+2rKsi0XkuHZqJE0iHz1LcsAjxm15Grd8Oo6DgzjLxEtIIE6dv6XTZMVmJm7iyUfMqt5dQ6q0MpnMn2Cbmy3VUTJlM/MzfQAuTj3tKJVK19XSfwEg6rAfYOaDvVVWmjNiyluDIDgXVq2mE2ol7wJDS0RwgLotKm8LoIVdzQLncTp/bm7u6lr6HfrgClBQZr/UxuU7rc6rXn8o8yvn5+e/Uufevj7bto9TSp0N//AgRCl152/q188CPCLatdLRL/CXtySTyS8y8we6NbnaGRsdA+f6wlwuh+vnao9ZJTKZzBtFBPHqO5GxiZE9aWWhcYARt/leWyqVbl+NtR8ewLNt+61KqYsNCbwnusZYuUe11ttd1wUtbblmbL4c83yZUur9iJcNSajTageMAxxivCMIgm8UCgWAuCpTv2p5k7ZtvwPbxBgUZIW7bpWNg/1brfUlQRDcDvZTrdhs2rRp2LKsP2BmAPluo3rq8q+bFLnwyBoRITr5hYjcXKlUdhcKBRAAGh66iYKUsG37KFTGzDZBXIhTRt0idVcVN2i/IDJe5XnezcViEcUnJCCijUdHR0E+PxJHHqAbcYm4OTMyICLWSvM26gKnAAAamGFI+f9KRO70PO9ne/fuhQQu8xUbLUKtlPH4+Dg4KrhLH6v7WnO/dNe2NSqOIgJr+5TW+mqt9a1RClw9IEdGRjbjvK9S6hiT2xwzpwPWosZi9CUAg0TjsCKMFnTug8z8gOd5jxSLRUhc08BV5/G/Lqj3To34RlUAAAAASUVORK5CYII=",alt:""},null,-1),ln=[nn],on={key:1},cn={class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-4"},mn=Ae({__name:"index",setup(i){const k=v(null),K=at(),ae=nt(),x=Ce(),ne=I(()=>x.isLogin),le=I(()=>x.userBalance),W=I(()=>le.value.sumDrawMjCount||0),j=Oe(),oe=I(()=>j.theme),L=I(()=>oe.value==="dark"?"#fff":"#000"),P=je();ke();const{isMobile:H}=lt(),ie=v("/api/upload/file");let Q=!1,$=null;const R=v("9:16"),O=v("MJ"),p=v("6.0"),C=v(0),F=v("1"),M=v(100),q=v(0),r=v(""),c=v(""),d=v([]),E=v(0),B=v(!1),z=v(!1),U=v(!1),J=v([]),_=v(12),N=v(!0),ce=v(0),S=v(1),Ue=I(()=>!r.value||z.value||U.value||V.value),D=v("");let T;ot(ne,async(n,l)=>{n&&!l&&await Z()});const ze=I(()=>ce.value>_.value),_e=[{aspect:"1:1",width:"100%",height:"100%"},{aspect:"4:3",width:"100%",height:"75%"},{aspect:"3:4",width:"75%",height:"100%"},{aspect:"16:9",width:"100%",height:"57%"},{aspect:"9:16",width:"57%",height:"100%"}],Ne=[{label:"默认风格",value:0},{label:"表现力风格",value:"expressive"},{label:"可爱风格",value:"cute"},{label:"景观风格",value:"scenic"}],Se=[{label:"普通",value:".25"},{label:"一般",value:".5"},{label:"高清",value:"1"},{label:"超高清",value:"2"}],De=I(()=>O.value==="MJ"?[{label:"6.0",value:"6.0"},{label:"5.2",value:"5.2"},{label:"5.1",value:"5.1"},{label:"5",value:"5"},{label:"4",value:"4"}]:O.value==="NIJI"?[{label:"6",value:"6"},{label:"5",value:"5"},{label:"4",value:"4"}]:[]),Me=[{name:"MJ",img:ys,val:"mj"},{name:"NIJI",img:Is,val:"niji"}],be=I(()=>n=>R.value===n),qe=I(()=>n=>O.value===n);function Ee(n){var o;const l=(o=n==null?void 0:n.target)==null?void 0:o.files[0];me(l)}function Be(n){n.preventDefault();const l=n.dataTransfer.files[0];me(l)}async function me(n){T=n;const l=new FileReader;l.onload=o=>{var y;D.value=(y=o.target)==null?void 0:y.result},l.readAsDataURL(n)}async function Te(){const n=await dt();J.value=n.data.filter(l=>l.status)}async function Ge(){const n=await ge({page:1,size:_.value}),{rows:l,countQueue:o,count:y}=n.data;d.value=l||[],ce.value=y,E.value=o||0}async function Ke(){const n=ae.query.mjId;if(!n)return;const l=await ut({id:n});l.success&&(r.value=l.data,S.value=0,N.value=!0)}async function Le(){if(!r.value)return P.warning("请输入描述词！");U.value=!0;try{const n=Number(x.globalConfig.mjUseBaiduFy)===1?he:we,l=Number(x.globalConfig.mjUseBaiduFy)===1?{text:r.value}:{prompt:r.value},o=await n(l);if(!o.success)return P.error("翻译失败了！");r.value=o.data,U.value=!1}catch{U.value=!1}}const V=v(!1);async function He(){if(!c.value)return P.warning("请输入描述词！");V.value=!0;try{const n=Number(x.globalConfig.mjUseBaiduFy)===1?he:we,l=Number(x.globalConfig.mjUseBaiduFy)===1?{text:c.value}:{prompt:c.value},o=await n(l);if(!o.success)return P.error("翻译失败了！");c.value=o.data,V.value=!1}catch{V.value=!1}}async function Qe(){if(!r.value)return P.warning("请输入描述词！");z.value=!0;try{const n=await mt({prompt:r.value});if(!n.success)return P.error("联想失败了");r.value=n.data,z.value=!1}catch{z.value=!1}}function Fe(n){const l=/--\w+\s\S+/g;return n.replace(l,"")}function Je(){if(!S.value)return"";let n="";return c.value&&(n+=` --no ${c.value}`),O.value==="MJ"&&p.value&&(n+=` --v ${p.value}`,n+=` --s ${M.value}`),O.value==="NIJI"&&p.value&&(n+=` --niji ${p.value}`,C.value&&(n+=` --style ${C.value}`)),n+=` --ar ${R.value}`,n+=` --c ${q.value}`,n+=` --q ${F.value}`,n}async function Ve(){var o;const n=new FormData;T&&n.append("file",T);const l=await Re.post(ie.value,n,{headers:{"Content-Type":"multipart/form-data"}});return(o=l==null?void 0:l.data)==null?void 0:o.data}function Ze(n){const{prompt:l,aspect:o,isCarryParams:y}=n;r.value=l,o&&(R.value=o),S.value=y?1:0}async function Ye(){let n="";(D.value||T)&&(n=await Ve());const l=Je();S.value&&(r.value=Fe(r.value)),await G({prompt:r.value,imgUrl:n,extraParam:l,action:"IMAGINE"}),T&&(T=null),D.value="",N.value&&(S.value=1,N.value=!1),P.success("提交绘制任务成功、请等待绘制结束！"),x.token&&await ve(),!Q&&Z()}async function Z(){Q=!0;const n=await ge({page:1,size:_.value}),{rows:l,countQueue:o,count:y}=n.data;d.value=l||[],ce.value=y,E.value=o||0,d.value.filter($e=>[1,2].includes($e.status)).length?$=setTimeout(()=>Z(),3e3):Q=!1}it(()=>{clearTimeout($)});const re=I(()=>d.value.filter(n=>[1,2].includes(n.status)));function Xe(){K.push("/market")}function We(n){O.value=n,n==="MJ"&&(p.value="6.0"),n==="NIJI"&&(p.value="6")}async function ve(){B.value=!0;try{await x.getUserInfo(),B.value=!1}catch{B.value=!1}}return ct(()=>{Z(),Ke(),Te();const n=document.getElementById("footer");new IntersectionObserver((o,y)=>{o.forEach(Y=>{Y.isIntersecting&&ze.value&&(_.value=_.value+12,Ge())})}).observe(n)}),(n,l)=>(u(),f("div",As,[e("div",Os,[e("div",Cs,[e("div",ks,[js,e("div",Ps,[a(t(h),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[b(" 参数释义：生成图片尺寸比例 ")]),_:1})])]),e("div",Rs,[(u(),f(ee,null,te(_e,(o,y)=>e("button",{key:y,class:"flex-1 p-[2px] rounded-md",onClick:Y=>R.value=o.aspect},[e("div",{class:X(["border-2 border-gray-300 box-borde rounded-md dark:bg-black flex flex-col items-center",[t(be)(o.aspect)?"aspect-active":"",t(H)?"py-3":"py-2"]])},[e("div",zs,[e("div",{class:X(["border-gray-300 rounded border-2",[t(be)(o.aspect)?"aspect-active":""]]),style:ft({width:o.width,height:o.height})},null,6)]),e("div",_s,A(o.aspect),1)],2)],8,Us)),64))]),e("div",Ns,[Ss,e("div",Ds,[a(t(h),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[Ms]),_:1})])]),e("ul",qs,[(u(),f(ee,null,te(Me,(o,y)=>e("li",{key:y,class:X(["flex border-[3px] border-transparent justify-center items-center rounded-md m-1 m-bg-gradient",[t(qe)(o.name)?"model-active":""]]),onClick:Y=>We(o.name)},[e("button",Bs,[e("div",Ts,[e("div",Gs,A(o.name),1)]),e("img",{src:o.img,class:"rounded aspect-[3/1] w-full object-cover"},null,8,Ks)])],10,Es)),64))]),e("div",Ls,[e("div",Hs,[Qs,e("span",Fs,[a(t(ue),{value:p.value,"onUpdate:value":l[0]||(l[0]=o=>p.value=o),size:"small",options:t(De)},null,8,["value","options"])])]),O.value==="NIJI"?(u(),f("div",Js,[Vs,e("span",Zs,[a(t(ue),{value:C.value,"onUpdate:value":l[1]||(l[1]=o=>C.value=o),size:"small",options:Ne},null,8,["value"])])])):m("",!0),e("div",Ys,[b(" 参数 "),a(t(h),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:s(()=>[Xs]),_:1})]),e("div",Ws,[$s,e("span",ea,[a(t(ue),{value:F.value,"onUpdate:value":l[2]||(l[2]=o=>F.value=o),size:"small",options:Se},null,8,["value"])])]),e("div",ta,[sa,e("span",aa,[a(t(Ie),{value:q.value,"onUpdate:value":l[3]||(l[3]=o=>q.value=o),min:0,max:100,size:"small"},null,8,["value"])]),a(t(h),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:s(()=>[na]),_:1})]),O.value==="MJ"?(u(),f("div",la,[oa,e("span",ia,[a(t(Ie),{value:M.value,"onUpdate:value":l[4]||(l[4]=o=>M.value=o),min:0,max:1e3,size:"small"},null,8,["value"])]),a(t(h),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:s(()=>[ca]),_:1})])):m("",!0),ra,e("div",da,[ua,e("span",fa,[a(t(vt),{value:S.value,"onUpdate:value":l[5]||(l[5]=o=>S.value=o),size:"small","checked-value":1,"unchecked-value":0},null,8,["value"])]),a(t(h),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:s(()=>[ba]),_:1})])]),e("div",ma,[va,e("div",ga,[e("div",wa,[e("div",xa,[D.value?m("",!0):(u(),f("label",ha,[e("div",{class:"upload cursor-pointer",onDragover:l[7]||(l[7]=de(()=>{},["prevent"])),onDragenter:l[8]||(l[8]=de(()=>{},["prevent"])),onDragleave:l[9]||(l[9]=de(()=>{},["prevent"])),onDrop:Be},[e("input",{id:"upload-file",type:"file",accept:".png, .jpg, .jpeg",style:{display:"none"},onChange:l[6]||(l[6]=o=>Ee(o))},null,32),Ia],32)])),D.value?(u(),f("div",ya,[e("img",{src:D.value,alt:""},null,8,pa),e("img",{class:"absolute bottom-1 right-1 cursor-pointer",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAD0klEQVRIiY2WS2xWRRTHf/+ZryimPqLhocEAMbrQqBvYK4G2ArJxw0YxqLSo3bgQceFKo4mJywoYUBFZAilNRKVEN8ZoF2xYoiUhaSISExsVtJxj5n5z+917ez/xTk7uPM+Z8/qf0cnxWQxhru6/ToOOHja02dAGQ+sN3WNIjn4zdNHQjKNpQxcMzTsUPDzzKceaHP+5x7wnbJmhJw2NGtqWxzUGVXL0t6EvDQ5kodebgjqh6OZPgLMK2A+MAreSp0sy6l+eWwY8DYw4HALecZgjC0kyOrGrWG7hfokJwXZ5f+ZV4d01L0ZCAwavAA847AVmy9WQpGVaFbCJgG0PGEFG8a9QrFB9zYk9PolGAn4g4PeV6yF2N90S8X0R357HXVKlX2dUoz5rwwF/M+DLi3GWuCngr7ZstiC/0WTapECxx6p7un3bG/EtpUa3RWw0YgOxbh6P2LGIvR7lc6V2LZe5EvD9Af844jfqZvXkmpcDfnvqPBLwoRYGCwH/IeAfBGwsYL9U/ZYv82ssbm3vR+y7gFmLSZO1Hu9EfEiwXI0wFgwI3hBcEkwK/hIclVidItLgCrAbmAKGgLeAgaURWcwNJR9taEZXhdYE/EjW+OuAvxDw+Sj/M8r3RHwq4psi/mnE1/YLmohvTBqtb9GmQrZC6DOhF4VOCz1nqAM6hTSC6wiE1S2plnl4ytR1CRnubtvUSMyVguOCXYITeW5HNuWd8mrS95otXpfBJEil5AQWTY0qqBCBDm1j5fTvf1klCEoovKbHti4qt6tCe4ROCG1NUCN0UoSdgsOFxsonfKn5DeaTRj8BjzbBs7LpKvB8jq4twOdZk51gU6BnQcdAK7p3F/gSTrMpj2b+A2LmAovR9UTEP4n4XREfjPjhiA9H/KuI74745X7QFfGZhAwpbK/Xw7FIxoWIvRexEwF7KmDHA9YDyQKE/WjAdwR8KuNaj48W+f2TUiOZ7gJwFnxb6ZFutBCAx+jC/j7g3krIl75bKXRQaK3Qg0KdSskh++0bOed1cfz7dGyro0lDsVE5zbrUaSnzVVpI5b15Pp99xtCpsh6dC/hEE6EzKHZuht4RT4kfW+Y/Sq5J/YKJ4JrBu8BDguF6RfU+SdiPQnnwHPA28AeNCpsibCzgZ3ItySjdv9i1UxFI0xF7KWKXy7ITGgxmA747YB+mMtEU8j+qbSoThwK+K+Vnda0wXTJVqXB+vbwm+MJgLJeAzk0eKQuCacFBwZlcUmrGXXxulVDl3RfNNYfTwLcpxAWbDTYC68DvyP6aF7pk6EfQWdB50O+tvkP8C8uzPO7HeTXiAAAAAElFTkSuQmCC",onClick:l[10]||(l[10]=o=>D.value=null)})])):m("",!0)])])])]),e("div",Aa,[e("div",Oa,[e("span",Ca,[b("钱包余额("),e("b",ka,A(t(W)||0),1),b(" 积分)")]),e("span",ja,[a(t(g),{text:"",size:"tiny",type:"primary",loading:B.value,onClick:ve},{default:s(()=>[b("刷新")]),_:1},8,["loading"]),a(t(h),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[a(t(w),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:s(()=>[b(" 绘画账户信息 ")]),_:1})])]),Pa])]),e("div",{class:X(["h-full flex-1",[t(H)?"":"overflow-y-auto overflow-hidden"]])},[e("div",Ra,[e("div",Ua,[za,e("div",null,[e("div",_a,[Na,a(t(se),null,{default:s(()=>[a(t(g),{type:"primary",loading:U.value,onClick:Le},{icon:s(()=>[a(t(w),{icon:"ri:translate",class:"text-base"})]),default:s(()=>[b(" 翻译 ")]),_:1},8,["loading"]),a(t(g),{type:"primary",loading:z.value,onClick:Qe},{icon:s(()=>[a(t(w),{icon:"material-symbols:mindfulness-outline-rounded",class:"text-base"})]),default:s(()=>[b(" 联想 ")]),_:1},8,["loading"])]),_:1})]),e("div",Sa,[a(t(xe),{value:r.value,"onUpdate:value":l[11]||(l[11]=o=>r.value=o),type:"textarea",disabled:z.value||U.value,autosize:{minRows:4,maxRows:6},placeholder:"例如: A cute little cat (Midjourney对中文描述词有一定限制、我们建议您点击右侧翻译将您的描述词转为英文再进行提交、联想则是会将您的描述词交由GPT让其发挥想象空间为您在此基础创建更为详细的描述！)"},null,8,["value","disabled"]),Number(t(x).globalConfig.mjHideNotBlock)!==1?(u(),f("div",Da,[e("div",Ma,[qa,a(t(g),{type:"primary",loading:V.value,onClick:He},{icon:s(()=>[a(t(w),{icon:"ri:translate",class:"text-base"})]),default:s(()=>[b(" 翻译 ")]),_:1},8,["loading"])]),a(t(xe),{value:c.value,"onUpdate:value":l[12]||(l[12]=o=>c.value=o),type:"textarea",rows:1,placeholder:"例：生成房间图片、但是不要床、你可以填bed！"},null,8,["value"])])):m("",!0)]),J.value.length?(u(),f("div",{key:0,class:X(["w-full dark:bg-transparent",t(H)?"py-3":"py-6"])},[a(t(bt),{"x-scrollable":""},{default:s(()=>[e("div",Ea,[(u(!0),f(ee,null,te(J.value,(o,y)=>(u(),fe(t(g),{key:y,size:"small",onClick:Y=>Ze(o)},{default:s(()=>[b(A(o.title),1)]),_:2},1032,["onClick"]))),128))])]),_:1})],2)):m("",!0),e("div",Ba,[a(t(g),{type:"primary",loading:!1,disabled:t(Ue),onClick:l[13]||(l[13]=o=>Ye())},{icon:s(()=>[a(t(w),{icon:"ri:ai-generate",class:"text-base"})]),default:s(()=>[b(" 提交绘画任务 ")]),_:1},8,["disabled"])])])]),e("div",Ta,[Number(t(x).globalConfig.mjHideWorkIn)!==1?(u(),f("div",Ga,[e("div",Ka,[e("span",La,[Ha,E.value?(u(),f("span",Qa,"当前系统进行中任务["+A(E.value)+"]",1)):m("",!0)])]),t(re).length?m("",!0):(u(),f("div",Fa,[e("img",{class:"w-18",src:t(ps)},null,8,Ja),e("span",Va,[a(t(g),{text:"",size:"small",onClick:Xe},{default:s(()=>[b("点击前往市场看看别人的作品吧！")]),_:1})])])),t(re).length?(u(),f("div",Za,[e("div",Ya,[a(Pe,{"text-color":t(L)},null,8,["text-color"])]),e("p",Xa," 当前"+A(t(re).length)+"个任务正在进行中、请耐心等候绘制完成、您可以前往其他页面稍后回来查看结果！ ",1)])):m("",!0)])):m("",!0),e("div",Wa,[e("div",$a,[e("span",en,[b("我的绘图 "),e("span",tn,"["+A(d.value.length)+"]",1)]),sn]),!d.value||!d.value.length?(u(),f("div",an,ln)):m("",!0),d.value&&d.value.length?(u(),f("div",on,[e("div",cn,[(u(!0),f(ee,null,te(d.value,o=>(u(),fe(hs,{key:o.id,"draw-item-info":o,onQueryData:Z},null,8,["draw-item-info"]))),128))])])):m("",!0)]),e("div",{id:"footer",ref_key:"containerRef",ref:k},null,512)])])],2)])]))}});export{mn as default};