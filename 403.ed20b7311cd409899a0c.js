(self.webpackChunkwebadmin=self.webpackChunkwebadmin||[]).push([[403],{403:(e,o,t)=>{"use strict";t.r(o),t.d(o,{ContactoaddPageModule:()=>u});var n=t(8583),i=t(665),r=t(2859),a=t(7405),l=t(7841),c=t(8720);const s=[{path:"",component:(()=>{class e{constructor(e,o,t){this.toastCtrl=o,this.navCtrl=t,this.loginFormulario=e.group({email:["",[i.kI.required,i.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],nombre:["",[i.kI.required]],inst:["",[i.kI.required]],colonia:["",[i.kI.required]],tel:["",[i.kI.required]]})}ngOnInit(){}nuContacto(){l.Z.firestore().collection("contactos").add({nombre:this.nombreActor,inttuto:this.insttoActor,lugar:this.lugarActor,tel:this.telActor,email:this.emailActor,fecha:l.Z.firestore.FieldValue.serverTimestamp()}).then(e=>{this.toastCtrl.create({message:"Se ha creado el contacto correctamente",duration:2e3}).then(e=>{e.present(),this.navCtrl.back()})}).catch(e=>{this.toastCtrl.create({message:e.message,duration:2e3}).then(e=>{e.present()})})}}return e.\u0275fac=function(o){return new(o||e)(c.Y36(i.qu),c.Y36(r.yF),c.Y36(r.SH))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-contactoadd"]],decls:43,vars:7,consts:[["slot","end"],["menu","first"],["color","ipndark",1,"ion-padding"],[1,"container","mt-5","px-3"],[1,"ion-text-center"],[1,"ion-text-justify"],[3,"formGroup"],["position","floating"],["formControlName","nombre","type","text","placeholder","Jos\xe9 P\xe9rez",3,"ngModel","ngModelChange"],["formControlName","inst","type","text","placeholder","Ejemplo: SGIRPC, CONAGUA",3,"ngModel","ngModelChange"],["formControlName","colonia","type","text","placeholder","Iztapalapa",3,"ngModel","ngModelChange"],["formControlName","tel","type","text","placeholder","55-5555-5555",3,"ngModel","ngModelChange"],["formControlName","email","type","email","placeholder","usuario@email.com",3,"ngModel","ngModelChange"],["color","dark","expand","block","shape","round","mode","ios",3,"disabled","click"]],template:function(e,o){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-title"),c._uU(3,"A\xf1adir contacto de actor"),c.qZA(),c.TgZ(4,"ion-buttons",0),c._UZ(5,"ion-menu-button",1),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"ion-content",2),c.TgZ(7,"div",3),c.TgZ(8,"ion-list"),c.TgZ(9,"ion-card-title",4),c._uU(10,"Actores principales"),c.qZA(),c.TgZ(11,"ion-card-content",5),c.TgZ(12,"p"),c._uU(13,'Esta secci\xf3n fue dise\xf1ada para que los diferentes actores puedan a\xf1adir y compartir los datos de contacto con los usuarios de la aplicaci\xf3n. Para esto, se deja a su disposici\xf3n el siguiente formulario. Los resultados estar\xe1n en la secci\xf3n de "Contactos" en el men\xfa principal. '),c.qZA(),c.qZA(),c.qZA(),c.TgZ(14,"div"),c.TgZ(15,"form",6),c.TgZ(16,"ion-list"),c.TgZ(17,"ion-item"),c.TgZ(18,"ion-label",7),c._uU(19,"Nombre:"),c.qZA(),c.TgZ(20,"ion-input",8),c.NdJ("ngModelChange",function(e){return o.nombreActor=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(21,"ion-list"),c.TgZ(22,"ion-item"),c.TgZ(23,"ion-label",7),c._uU(24,"Nombre del actor o institucion:"),c.qZA(),c.TgZ(25,"ion-input",9),c.NdJ("ngModelChange",function(e){return o.insttoActor=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(26,"ion-list"),c.TgZ(27,"ion-item"),c.TgZ(28,"ion-label",7),c._uU(29,"Colonia o Alcald\xeda"),c.qZA(),c.TgZ(30,"ion-input",10),c.NdJ("ngModelChange",function(e){return o.lugarActor=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(31,"ion-list"),c.TgZ(32,"ion-item"),c.TgZ(33,"ion-label",7),c._uU(34,"N\xfamero de tel\xe9fono:"),c.qZA(),c.TgZ(35,"ion-input",11),c.NdJ("ngModelChange",function(e){return o.telActor=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(36,"ion-list"),c.TgZ(37,"ion-item"),c.TgZ(38,"ion-label",7),c._uU(39,"Email:"),c.qZA(),c.TgZ(40,"ion-input",12),c.NdJ("ngModelChange",function(e){return o.emailActor=e}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(41,"ion-button",13),c.NdJ("click",function(){return o.nuContacto()}),c._uU(42," Enviar"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(15),c.Q6J("formGroup",o.loginFormulario),c.xp6(5),c.Q6J("ngModel",o.nombreActor),c.xp6(5),c.Q6J("ngModel",o.insttoActor),c.xp6(5),c.Q6J("ngModel",o.lugarActor),c.xp6(5),c.Q6J("ngModel",o.telActor),c.xp6(5),c.Q6J("ngModel",o.emailActor),c.xp6(1),c.Q6J("disabled",o.loginFormulario.invalid))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.fG,r.W2,r.q_,r.gZ,r.FN,i._Y,i.JL,i.sg,r.Ie,r.Q$,r.pK,r.j9,i.JJ,i.u,r.YG],styles:[""]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.Bz.forChild(s)],a.Bz]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.ez,i.u5,r.Pc,d,i.u5,i.UX]]}),e})()}}]);