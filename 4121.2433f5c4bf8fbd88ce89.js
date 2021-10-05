(self.webpackChunkwebadmin=self.webpackChunkwebadmin||[]).push([[4121],{4021:(e,t,n)=>{"use strict";n.d(t,{oK:()=>o,GW:()=>i,dk:()=>r});var o=(()=>(function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"}(o||(o={})),o))(),i=(()=>(function(e){e.Rear="REAR",e.Front="FRONT"}(i||(i={})),i))(),r=(()=>(function(e){e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl"}(r||(r={})),r))()},8384:(e,t,n)=>{"use strict";n.d(t,{xz:()=>i,Uw:()=>s,fo:()=>a}),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;var o=(()=>(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(o||(o={})),o))();class i extends Error{constructor(e,t){super(e),this.message=e,this.code=t}}const r=(e=>e.Capacitor=(e=>{var t,n,r,a,s;const l=e.CapacitorCustomPlatform||null,d=e.Capacitor||{},u=d.Plugins=d.Plugins||{},c=e.CapacitorPlatforms,g=(null===(t=null==c?void 0:c.currentPlatform)||void 0===t?void 0:t.getPlatform)||(()=>null!==l?l.name:(e=>{var t,n;return(null==e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null==e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"})(e)),m=(null===(n=null==c?void 0:c.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==g()),p=(null===(r=null==c?void 0:c.currentPlatform)||void 0===r?void 0:r.isPluginAvailable)||(e=>{const t=h.get(e);return!!(null==t?void 0:t.platforms.has(g()))||!!f(e)}),f=(null===(a=null==c?void 0:c.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||(e=>{var t;return null===(t=d.PluginHeaders)||void 0===t?void 0:t.find(t=>t.name===e)}),h=new Map,v=(null===(s=null==c?void 0:c.currentPlatform)||void 0===s?void 0:s.registerPlugin)||((e,t={})=>{const n=h.get(e);if(n)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),n.proxy;const r=g(),a=f(e);let s;const c=n=>{let u;const c=(...c)=>{const g=(async()=>(!s&&r in t?s=s="function"==typeof t[r]?await t[r]():t[r]:null!==l&&!s&&"web"in t&&(s=s="function"==typeof t.web?await t.web():t.web),s))().then(t=>{const s=((t,n)=>{var s,l;if(!a){if(t)return null===(l=t[n])||void 0===l?void 0:l.bind(t);throw new i(`"${e}" plugin is not implemented on ${r}`,o.Unimplemented)}{const o=null==a?void 0:a.methods.find(e=>n===e.name);if(o)return"promise"===o.rtype?t=>d.nativePromise(e,n.toString(),t):(t,o)=>d.nativeCallback(e,n.toString(),t,o);if(t)return null===(s=t[n])||void 0===s?void 0:s.bind(t)}})(t,n);if(s){const e=s(...c);return u=null==e?void 0:e.remove,e}throw new i(`"${e}.${n}()" is not implemented on ${r}`,o.Unimplemented)});return"addListener"===n&&(g.remove=async()=>u()),g};return c.toString=()=>`${n.toString()}() { [capacitor code] }`,Object.defineProperty(c,"name",{value:n,writable:!1,configurable:!1}),c},m=c("addListener"),p=c("removeListener"),v=(e,t)=>{const n=m({eventName:e},t),o=async()=>{const o=await n;p({eventName:e,callbackId:o},t)},i=new Promise(e=>n.then(()=>e({remove:o})));return i.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await o()},i},w=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return a?v:m;case"removeListener":return p;default:return c(t)}}});return u[e]=w,h.set(e,{name:e,proxy:w,platforms:new Set([...Object.keys(t),...a?[r]:[]])}),w});return d.convertFileSrc||(d.convertFileSrc=e=>e),d.getPlatform=g,d.handleError=t=>e.console.error(t),d.isNativePlatform=m,d.isPluginAvailable=p,d.pluginMethodNoop=(e,t,n)=>Promise.reject(`${n} does not have an implementation of "${t}".`),d.registerPlugin=v,d.Exception=i,d.DEBUG=!!d.DEBUG,d.isLoggingEnabled=!!d.isLoggingEnabled,d.platform=d.getPlatform(),d.isNative=d.isNativePlatform(),d})(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),a=r.registerPlugin;class s{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n);const o=async()=>this.removeListener(e,t),i=Promise.resolve({remove:o});return Object.defineProperty(i,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await o()}}),i}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t){const n=this.listeners[e];n&&n.forEach(e=>e(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new r.Exception(e,o.Unimplemented)}unavailable(e="not available"){return new r.Exception(e,o.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const o=n.indexOf(t);this.listeners[e].splice(o,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}},4121:(e,t,n)=>{"use strict";n.r(t),n.d(t,{NuevoavisoPageModule:()=>w});var o=n(8583),i=n(665),r=n(2859),a=n(7405),s=n(4762),l=n(8384),d=n(4021);const u=(0,l.fo)("Camera",{web:()=>n.e(4028).then(n.bind(n,4028)).then(e=>new e.CameraWeb)});var c=n(7841),g=n(8720),m=n(4384);function p(e,t){if(1&e&&g._UZ(0,"img",18),2&e){const e=g.oxw();g.Q6J("src",e.mostarFoto,g.LSH)}}function f(e,t){if(1&e&&g._UZ(0,"img",18),2&e){const e=g.oxw();g.Q6J("src",e.photo,g.LSH)}}const h=[{path:"",component:(()=>{class e{constructor(e,t,n,o,r){this.toastCtrl=t,this.alertController=n,this.navCtrl=o,this.db=r,this.mostarFoto="../../../assets/img/picture-logo.png",this.loginFormulario=e.group({inst:["",[i.kI.required]],titulo:["",[i.kI.required]],subtitulo:[""],info:["",[i.kI.required]]})}ngOnInit(){}addphoto(){return(0,s.mG)(this,void 0,void 0,function*(){const e=yield this.alertController.create({header:"A\xf1adir foto",message:"Para usar esta funci\xf3n debe permitir el uso de la camara",buttons:[{text:"Camara o Galer\xeda",handler:()=>(0,s.mG)(this,void 0,void 0,function*(){console.log("Confirmar Camara");const e=yield u.getPhoto({quality:100,allowEditing:!0,source:d.oK.Camera,resultType:d.dk.DataUrl});console.log(e),this.photo=e.dataUrl})},{text:"Cancelar",handler:()=>{console.log("Confirmar Cancelar")}}]});yield e.present()})}enviar(){this.fileimage=this.photo?this.photo:this.mostarFoto,this.db.collection("noticias").add({name:this.newNotNombre,title:this.newNotTitulo,subtitle:this.newNotSubtitulo,note:this.newNotNota,image_src:this.fileimage,date:c.Z.firestore.FieldValue.serverTimestamp()}).then(e=>{this.toastCtrl.create({message:"La nota ha sido enviada",duration:2e3}).then(e=>{e.present(),this.navCtrl.back()})}).catch(e=>{this.toastCtrl.create({message:e.message,duration:2e3}).then(e=>{e.present()})})}}return e.\u0275fac=function(t){return new(t||e)(g.Y36(i.qu),g.Y36(r.yF),g.Y36(r.Br),g.Y36(r.SH),g.Y36(m.ST))},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-nuevoaviso"]],decls:44,vars:8,consts:[["slot","end"],["menu","first"],[1,"container"],[1,"ion-text-end","ion-padding"],[3,"formGroup"],["position","floating"],["autocapitalize","on","formControlName","inst","type","text","placeholder","Ejemplo: SGIRPC, CONAGUA",3,"ngModel","ngModelChange"],["autocapitalize","on","formControlName","titulo","type","text","placeholder","Escribe el t\xedtulo",3,"ngModel","ngModelChange"],["autocapitalize","on","formControlName","subtitulo","type","text","placeholder","Escribe un subt\xedtulo (opcional)",3,"ngModel","ngModelChange"],["rows","6","cols","20","formControlName","info","placeholder","Agregar informaci\xf3n...",3,"ngModel","ngModelChange"],[1,"ion-text-center"],[1,"ion-margin-start"],[1,"row"],[1,"centrado"],[3,"src",4,"ngIf"],["expand","block","fill","clear","shape","round",3,"click"],["expand","block","fill","clear","shape","round",1,"ion-margin-top",3,"disabled","click"],["slot","end","name","arrow-forward-circle-outline"],[3,"src"]],template:function(e,t){1&e&&(g.TgZ(0,"ion-header"),g.TgZ(1,"ion-toolbar"),g.TgZ(2,"ion-title"),g._uU(3,"Nuevo aviso"),g.qZA(),g.TgZ(4,"ion-buttons",0),g._UZ(5,"ion-menu-button",1),g.qZA(),g.qZA(),g.qZA(),g.TgZ(6,"ion-content"),g.TgZ(7,"div",2),g.TgZ(8,"p",3),g._uU(9,"* Campos obligatorios"),g.qZA(),g.TgZ(10,"form",4),g.TgZ(11,"ion-list"),g.TgZ(12,"ion-item"),g.TgZ(13,"ion-label",5),g._uU(14,"Autor*:"),g.qZA(),g.TgZ(15,"ion-input",6),g.NdJ("ngModelChange",function(e){return t.newNotNombre=e}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(16,"ion-list"),g.TgZ(17,"ion-item"),g.TgZ(18,"ion-label",5),g._uU(19,"T\xedtulo*"),g.qZA(),g.TgZ(20,"ion-input",7),g.NdJ("ngModelChange",function(e){return t.newNotTitulo=e}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(21,"ion-list"),g.TgZ(22,"ion-item"),g.TgZ(23,"ion-label",5),g._uU(24,"Subt\xedtulo"),g.qZA(),g.TgZ(25,"ion-input",8),g.NdJ("ngModelChange",function(e){return t.newNotSubtitulo=e}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(26,"ion-list"),g.TgZ(27,"ion-item"),g.TgZ(28,"ion-label",5),g._uU(29,"Nota*"),g.qZA(),g.TgZ(30,"ion-textarea",9),g.NdJ("ngModelChange",function(e){return t.newNotNota=e}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(31,"div",10),g.TgZ(32,"ion-label",11),g._uU(33,"A\xf1ade una foto "),g.qZA(),g.qZA(),g.TgZ(34,"div",10),g.TgZ(35,"div",12),g.TgZ(36,"div",13),g.YNc(37,p,1,1,"img",14),g.YNc(38,f,1,1,"img",14),g.qZA(),g.qZA(),g.TgZ(39,"ion-button",15),g.NdJ("click",function(){return t.addphoto()}),g._uU(40," Selecciona una foto "),g.qZA(),g.qZA(),g.TgZ(41,"ion-button",16),g.NdJ("click",function(){return t.enviar()}),g._uU(42," enviar "),g._UZ(43,"ion-icon",17),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&e&&(g.xp6(10),g.Q6J("formGroup",t.loginFormulario),g.xp6(5),g.Q6J("ngModel",t.newNotNombre),g.xp6(5),g.Q6J("ngModel",t.newNotTitulo),g.xp6(5),g.Q6J("ngModel",t.newNotSubtitulo),g.xp6(5),g.Q6J("ngModel",t.newNotNota),g.xp6(7),g.Q6J("ngIf",!t.photo),g.xp6(1),g.Q6J("ngIf",t.photo),g.xp6(3),g.Q6J("disabled",t.loginFormulario.invalid))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.fG,r.W2,i._Y,i.JL,i.sg,r.q_,r.Ie,r.Q$,r.pK,r.j9,i.JJ,i.u,r.g2,o.O5,r.YG,r.gu],styles:[""]}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[o.ez,i.u5,r.Pc,v,i.u5,i.UX]]}),e})()}}]);