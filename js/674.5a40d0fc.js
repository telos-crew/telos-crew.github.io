"use strict";(globalThis["webpackChunkapp_telos_net"]=globalThis["webpackChunkapp_telos_net"]||[]).push([[674],{78674:(e,s,a)=>{a.r(s),a.d(s,{default:()=>I});var t=a(59835);const o={class:"safes",ref:"safesRef"},n={class:"row q-col-gutter-md"};function l(e,s,a,l,c,i){const f=(0,t.up)("safe-card"),u=(0,t.up)("q-infinite-scroll"),d=(0,t.up)("q-btn"),r=(0,t.up)("q-page-sticky"),m=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(m,{class:"q-pa-lg"},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t.Wm)(u,{disable:e.safesLoaded,onLoad:i.onLoad,offset:250,"scroll-target":e.$refs.safesRef},{default:(0,t.w5)((()=>[(0,t._)("div",n,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.safes,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"col-xs-12 col-sm-6 col-md-4",key:e.safe_name},[(0,t.Wm)(f,{safe:e},null,8,["safe"])])))),128))])])),_:1},8,["disable","onLoad","scroll-target"])],512),(0,t.Wm)(r,{position:"bottom-right",offset:[18,18]},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{fab:"",icon:"fas fa-plus",color:"accent",onClick:s[0]||(s[0]=s=>e.show=!0)})])),_:1})])),_:1})}var c=a(33100),i=a(86970);const f={class:"text-h6"},u=(0,t._)("br",null,null,-1),d=(0,t._)("br",null,null,-1),r=(0,t._)("br",null,null,-1),m=(0,t._)("br",null,null,-1);function p(e,s,a,o,n,l){const c=(0,t.up)("q-icon"),p=(0,t.up)("q-card-section"),k=(0,t.up)("q-btn"),g=(0,t.up)("q-card");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[(0,t._)("div",f,[(0,t.Uk)((0,i.zw)(a.safe.safe_name||"Smart Safe"),1),(0,t.Wm)(c,{class:"q-ml-sm",name:"fas "+(1===a.safe.locked?"fa-lock":"fa-lock-open"),size:"12px"},null,8,["name"])])])),_:1}),(0,t.Wm)(p,{hidden:0===a.safe.locked},{default:(0,t.w5)((()=>[u,(0,t._)("strong",null,(0,i.zw)(e.$t("pages.poc.smartsafe.locked_by"))+": "+(0,i.zw)(a.safe.locked_by),1),d,(0,t._)("strong",null,(0,i.zw)(e.$t("pages.poc.smartsafe.lock_time"))+": "+(0,i.zw)(a.safe.last_lock_time),1)])),_:1},8,["hidden"]),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[r,(0,t._)("strong",null,(0,i.zw)(e.$t("pages.poc.smartsafe.last_unlocker"))+": "+(0,i.zw)(a.safe.unlocked_by),1),m,(0,t._)("strong",null,(0,i.zw)(e.$t("pages.poc.smartsafe.last_unlock_time"))+": "+(0,i.zw)(a.safe.last_unlock_time),1)])),_:1}),(0,t.Wm)(p,{class:"flex justify-end"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(k,{icon:"fas "+(0===a.safe.locked?"fa-lock":"fa-lock-open"),color:"white","text-color":"primary",dense:"",flat:"",size:"md",label:0===a.safe.locked?e.$t("pages.poc.smartsafe.lock"):e.$t("pages.poc.smartsafe.unlock"),disabled:1===a.safe.locked&&!l.lockedByUser&&!l.userIsAdmin,onClick:l.onToggleLock},null,8,["icon","label","disabled","onClick"])])])),_:1})])),_:1})])}a(46727);const k={name:"SafeCard",props:{safe:{type:Object,required:!0}},data(){return{show:!1}},methods:{...(0,c.nv)("poc",["toggleLock"]),onToggleLock(){this.toggleLock({lock:!this.safe.locked,safeName:this.safe.safe_name,accountName:this.account})}},computed:{...(0,c.Se)("accounts",["account"]),lockedByUser(){return this.safe.locked_by===this.account},userIsAdmin(){return this.safe.admins.includes(this.account)}}};var g=a(11639),_=a(44458),h=a(63190),w=a(22857),b=a(68879),y=a(69984),S=a.n(y);const L=(0,g.Z)(k,[["render",p]]),q=L;S()(k,"components",{QCard:_.Z,QCardSection:h.Z,QIcon:w.Z,QBtn:b.Z});const v={name:"SmartSafe",components:{SafeCard:q},methods:{...(0,c.nv)("poc",["fetchSafes"]),...(0,c.OI)("poc",["resetSafes"]),async onLock(){this.submitting=!0;const e=await this.toggleLock("locksafe");e&&(this.transactionId=e.transactionId),this.submitting=!1},async onUnlock(){this.submitting=!0;const e=await this.toggleLock("unlocksafe");e&&(this.transactionId=e.transactionId),this.submitting=!1},async onLoad(e,s){await this.fetchSafes(),s()}},computed:{...(0,c.Se)("poc",["safes","safesLoaded"]),...(0,c.Se)("accounts",["accounts"])}};var z=a(69885),W=a(86870),Z=a(30627);const C=(0,g.Z)(v,[["render",l]]),I=C;S()(v,"components",{QPage:z.Z,QInfiniteScroll:W.Z,QPageSticky:Z.Z,QBtn:b.Z})}}]);