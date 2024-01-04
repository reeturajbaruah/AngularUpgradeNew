"use strict";(self.webpackChunkng_app=self.webpackChunkng_app||[]).push([[91],{76091:(Ye,E,o)=>{o.r(E),o.d(E,{AddTagModule:()=>Ve});var u=o(4857),Y=o(68359),f=o(63660),x=o(55297),P=o(73201),w=o(39230),J=o(68665),F=o(67914),N=o(82701),G=o(26186),H=o(29419),K=o(93849),d=o(44982),p=o(79210),z=o(75888),l=o(38957);var y=o(53682),g=o(4322);const A=(0,d.hE)(p.Xn.vehiclesTagCurrentStep,g.GC.Root),X=[{name:l.G.AddTag,abstract:!0,settings:{},resolve:[(0,d.oF)(p.s.Account),(0,d.IM)(p.IT.active),(0,d.SZ)("stateList"),(0,d.pe)("countryList"),(0,d.QK)("cmsAddTagFrame",{ItemId:"7C04329C-5E20-4B69-8C59-97F08B1B8FDB"}),(0,d.QK)("cmsAddTagVehicleInfo",{ItemId:"1D70B229-12FB-49F3-A719-A07EBAD3C3B5"}),(0,d.QK)("cmsAddTagDeliveryMethod",{ItemId:"CB8CC1BD-7C60-4925-90DB-6602487AE013"})]},{name:l.G.TagVehicleInformation,url:y.Z.TagVehicleInformation,settings:{},resolve:[(0,d.SZ)("statesList"),(0,d.oF)(p.s.Account),(0,d.IM)(p.IT.active),A({denyRefresh:!0})],wizard:{nextState:l.G.TagCart,prevState:g.GC.Root,cancelState:g.GC.Root}},{name:l.G.TagCart,url:y.Z.TagCart,settings:{},resolve:[(0,d.oF)(p.s.Account),(0,d.IM)(p.IT.active),A({denyRefresh:!0}),(0,d.QK)("pageCms",{ItemId:"8D6B8B8C-9811-42FD-A74F-0F8AA53986D5"}),(0,d.QK)("addAdditionalTagCms",{ItemId:"678D6DDC-1963-420D-8796-6E2194B364C2"}),(0,d.QK)("deleteModalCms",{ItemId:"45580D0C-8AED-43C6-A2A4-C518AFDFED34"}),(0,d.QK)("editModalCms",{ItemId:"7BA4DB40-276B-448D-A5D1-D07B38BD569C"}),(0,d.QK)("cancellationModal",{ItemId:"70803808-5433-4A41-B099-3F4379151F98"}),(0,d.SZ)("stateList")],wizard:{nextState:l.G.TagDeliveryMethod,prevState:l.G.TagVehicleInformation,cancelState:g.GC.Root}},{name:l.G.TagDeliveryMethod,url:y.Z.TagDeliveryMethod,settings:{},resolve:[(0,d.oF)(p.s.Account),(0,d.IM)(p.IT.active),(0,d.QK)("cancellationModal",{ItemId:"70803808-5433-4A41-B099-3F4379151F98"}),A({denyRefresh:!0})],wizard:{nextState:l.G.TagReviewOrder,prevState:l.G.TagCart,cancelState:g.GC.Root}},{name:l.G.TagReviewOrder,url:y.Z.TagReviewOrder,settings:{},resolve:[(0,d.oF)(p.s.Account),(0,d.IM)(p.IT.active),A({denyRefresh:!0,explicitlyForbidden:[l.G.TagReceipt]}),(0,d.QK)("pageCms",{ItemId:"F2931857-95CA-463E-81EF-A6A7FC7BE205"}),(0,d.QK)("addAdditionalTagCms",{ItemId:"678D6DDC-1963-420D-8796-6E2194B364C2"}),(0,d.QK)("deleteModalCms",{ItemId:"45580D0C-8AED-43C6-A2A4-C518AFDFED34"}),(0,d.QK)("editModalCms",{ItemId:"7BA4DB40-276B-448D-A5D1-D07B38BD569C"}),(0,d.QK)("replenishmentAmtModalCms",{ItemId:"7FD13832-3572-4EBA-BB89-48454CB6FF82"}),(0,d.QK)("tagInfoModalCms",{ItemId:"781C071D-31FB-4ABA-A73C-31CB8B722FC0"}),(0,d.QK)("cancellationModal",{ItemId:"70803808-5433-4A41-B099-3F4379151F98"}),(0,d.SZ)("stateList")],wizard:{nextState:l.G.TagReceipt,prevState:l.G.TagDeliveryMethod,cancelState:g.GC.Root}},{name:l.G.TagReceipt,url:y.Z.TagReceipt,settings:{},resolve:[(0,d.IM)(p.IT.active),(0,d.QK)("cmsContent",{mergeParams:!0,ItemId:"9E07D1A1-DEA1-4B7A-9CDF-B5DD842FDB01"}),(0,d.oF)(p.s.Account),A({denyRefresh:!0,allowed:[l.G.TagReviewOrder],explicitlyForbidden:[z.Dn.Frame,g.GC.Root]})],wizard:{nextState:z.Dn.Frame,isEndState:!0}}];var j=o(486),c=o(60195),W=o(61264),q=o(6304),e=o(13847),k=o(63457),$=o(95556),ee=o(59008);function te(i,r){if(1&i&&e._UZ(0,"stepper",2),2&i){const t=e.oxw();e.Q6J("steps",t.steps)("stepMap",t.stepMap)}}let v=(()=>{class i{constructor(t,n){this.vehiclesManagerService=t,this.windowRef=n,this.steps=[],this.stepMap={},this.showStepper=!1}ngOnInit(){var t=this;return(0,c.Z)(function*(){t.vehiclesManagerService.clearData(),t.steps=[{name:t.cmsAddTagFrame.step1,background:"secondary"},{name:t.cmsAddTagFrame.step2,background:"secondary"},{name:t.cmsAddTagFrame.step3,background:"secondary"},{name:t.cmsAddTagFrame.step4,background:"secondary"},{name:t.cmsAddTagFrame.step5,background:"secondary"}],t.stepMap={[l.G.TagVehicleInformation]:1,[l.G.TagCart]:2,[l.G.TagDeliveryMethod]:3,[l.G.TagReviewOrder]:4,[l.G.TagReceipt]:5}})()}scrollToTop(){var t=this;return(0,c.Z)(function*(){t.isHidden=!0,yield(0,q.Dc)(20),t.windowRef.scrollTo(0,0),t.isHidden=!1})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.Tg),e.Y36(W.X9))},i.\u0275cmp=e.Xpm({type:i,selectors:[["vehicles-addTag-frame"]],inputs:{cmsAddTagFrame:"cmsAddTagFrame",stateList:"stateList",countryList:"countryList"},decls:4,vars:1,consts:[[1,"refresh-2020","u-spacing--widthFill"],[3,"steps","stepMap",4,"ngIf"],[3,"steps","stepMap"]],template:function(t,n){1&t&&(e.TgZ(0,"main",0),e.YNc(1,te,1,2,"stepper",1),e.TgZ(2,"page-filled-container"),e._UZ(3,"ui-view"),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.showStepper))},directives:[u.O5,k.v,$.C,ee.UIView],styles:["[_nghost-%COMP%]   main[_ngcontent-%COMP%]{background-color:#efeff4}@media not screen and (max-width: 959.98px){[_nghost-%COMP%]   main[_ngcontent-%COMP%]{padding-left:85px;padding-right:85px}}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:24px 15px 16px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:30px;color:#fc2125;margin-bottom:10px}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:15px}}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:11px 14px 15px}}[_nghost-%COMP%]   stepper[_ngcontent-%COMP%]{display:block;min-height:32px}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   stepper[_ngcontent-%COMP%]{min-height:unset}}[_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%]{display:block}@media not screen and (max-width: 959.98px){[_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%]{background-color:#efeff4}}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%]{background-color:#fff}}"]}),i})();var M=o(83434),T=o(96165),_=o(68043),S=o(39453),D=o(25023),b=o(8584),I=o(32993),O=o(27358);let ne=(()=>{class i{constructor(t,n,a,s){this.frame=t,this.state=n,this.responseErrorService=a,this.manager=s,this.statesList=[],this.vehicleInfo={licState:"TX",vehicleClassCode:2,motorcycle:!1,temporaryLicPlate:null,acctTagSeq:0,acctTagSeqSepcified:!1,acctTagStatus:null,acctVehicleId:0,activePbpTagExist:!1,fullTagId:null,isMotorcycleDisabled:!0,licPlate:null,nickname:null,nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly:!1,pbpEndDate:null,pbpStartDate:null,tagId:null,tagless_Desc:null,tagStatusDesc:null,tagTypeCode:"T",vehicleClassDesc:null,vehicleColor:null,vehicleMake:null,vehicleModel:null,vehicleYear:null}}ngOnInit(){var t=this;return(0,c.Z)(function*(){t.frame.showStepper=!0})()}cancel(t){var n=this;return(0,c.Z)(function*(){yield n.state.go(t)})()}nextStep(t){var n=this;return(0,c.Z)(function*(){yield n.manager.setVehicleInfoItem(n.vehicleInfo),n.manager.getVehicleInfoList().length>0&&(yield n.state.go(t))})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v),e.Y36(M.StateService),e.Y36(T.Sr),e.Y36(g.Tg))},i.\u0275cmp=e.Xpm({type:i,selectors:[["vehicles-addTag-information-component"]],inputs:{statesList:"statesList",cmsAddTagVehicleInfo:"cmsAddTagVehicleInfo",usStates:"usStates"},decls:17,vars:6,consts:[[1,"refresh-2020"],["validation-focus","","novalidate",""],["Form","ngForm"],[1,"u-spacing__fieldToSection--marginTop"],[1,"u-spacing__divider--marginTopBottom"],[3,"modalCms","vehicleInfo","stateList","plateIsReadOnly"],[1,"u-spacing__buttonToField--marginTop"],[3,"disabled","next"],["Wizard",""],["wizard-next",""],["wizard-cancel",""]],template:function(t,n){if(1&t&&(e.TgZ(0,"page-centered-container",0)(1,"form",1,2)(3,"div",3)(4,"card-container")(5,"header")(6,"h2"),e._uU(7),e.qZA(),e._UZ(8,"mat-divider",4),e.qZA(),e._UZ(9,"vehicle-info-form-entry",5),e.qZA(),e.TgZ(10,"section",6)(11,"wizard-ui",7,8),e.NdJ("next",function(s){return n.nextStep(s)}),e.TgZ(13,"span",9),e._uU(14,"Next"),e.qZA(),e.TgZ(15,"span",10),e._uU(16,"Cancel"),e.qZA()()()()()()),2&t){const a=e.MAs(2);e.xp6(7),e.Oqu(n.cmsAddTagVehicleInfo.Title),e.xp6(2),e.Q6J("modalCms",n.cmsAddTagVehicleInfo)("vehicleInfo",n.vehicleInfo)("stateList",n.statesList)("plateIsReadOnly",!1),e.xp6(2),e.Q6J("disabled",a.submitted&&a.invalid)}},directives:[_.D,f._Y,f.JL,f.F,S.R,D.D,x.d,b.b,I.P,O.O],styles:["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:65px}"]}),i})();var Z=o(79150),ie=o(5472),C=o(45184);let ae=(()=>{class i{constructor(t,n,a,s,h){this.parent=t,this.state=n,this.manager=a,this.dialogService=s,this.mailingService=h,this.selectedDeliveryMethod=""}ngOnInit(){var t=this;return(0,c.Z)(function*(){t.deliveryMethod=t.manager.getDeliveryMethod(),t.mailingInfo=yield t.mailingService.getMailingAddress()})()}cancel(t){var n=this;return(0,c.Z)(function*(){const a={cmsContent:{Title:n.cancellationModal.Title,PrimaryContent:n.cancellationModal.LongDescription,AcceptBtn:"No",CancelBtn:"Yes"}};(yield n.dialogService.openGenericModal(Z.E5,a))||(n.manager.clearData(),yield n.state.go(t))})()}nextStep(t){var n=this;return(0,c.Z)(function*(){n.deliveryMethod.deliveryMethod=n.selectedDeliveryMethod,n.manager.setDeliveryMethod(n.deliveryMethod),yield n.state.go(t)})()}onMailingAddressEdit(t){var n=this;return(0,c.Z)(function*(){n.mailingService.onMailingAddressEdit(t,n.parent.stateList,n.parent.countryList,Z.zy)})()}disable(){var t;return"mail"===this.selectedDeliveryMethod&&null===(null===(t=this.mailingInfo)||void 0===t?void 0:t.address1)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v),e.Y36(M.StateService),e.Y36(g.Tg),e.Y36(T.xA),e.Y36(g.H3))},i.\u0275cmp=e.Xpm({type:i,selectors:[["vehicles-addTag-delivery-component"]],inputs:{cmsAddTagDeliveryMethod:"cmsAddTagDeliveryMethod",cancellationModal:"cancellationModal"},decls:21,vars:5,consts:[[1,"refresh-2020"],["validation-focus","","novalidate",""],["Form","ngForm"],[1,"u-spacing__fieldToSection--marginTop"],[1,"u-spacing__divider--marginTopBottom"],[3,"mailingInfo","deliveryMethod","isAddEzTag","deliveryMethodChange","onEdit"],[1,"u-spacing__buttonToField--marginTop"],[3,"disabled","next","cancel"],["Wizard",""],["wizard-next",""],["wizard-previous","","fxLayout","row","fxLayoutAlign","start center"],["svgIcon","previous-arrow"],["wizard-cancel",""]],template:function(t,n){if(1&t&&(e.TgZ(0,"page-centered-container",0)(1,"form",1,2)(3,"div",3)(4,"card-container")(5,"header")(6,"h2"),e._uU(7),e.qZA(),e._UZ(8,"mat-divider",4),e.qZA(),e.ynx(9),e.TgZ(10,"choose-delivery-method",5),e.NdJ("deliveryMethodChange",function(s){return n.selectedDeliveryMethod=s})("onEdit",function(s){return n.onMailingAddressEdit(s)}),e.qZA(),e.BQk(),e.qZA(),e.TgZ(11,"section",6)(12,"wizard-ui",7,8),e.NdJ("next",function(s){return n.nextStep(s)})("cancel",function(s){return n.cancel(s)}),e.TgZ(14,"span",9),e._uU(15,"CONTINUE"),e.qZA(),e.TgZ(16,"span",10),e._UZ(17,"mat-icon",11),e._uU(18," Previous "),e.qZA(),e.TgZ(19,"span",12),e._uU(20,"Cancel"),e.qZA()()()()()()),2&t){const a=e.MAs(2);e.xp6(7),e.Oqu(n.cmsAddTagDeliveryMethod.Title),e.xp6(3),e.Q6J("mailingInfo",n.mailingInfo)("deliveryMethod",n.selectedDeliveryMethod)("isAddEzTag",!0),e.xp6(2),e.Q6J("disabled",a.submitted&&a.invalid||n.disable())}},directives:[_.D,f._Y,f.JL,f.F,S.R,D.D,x.d,ie.z,I.P,O.O,C.xw,C.Wh,w.Hw],styles:["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:65px}"]}),i})();var U=o(91402),V=o(47553),B=o(70580),Q=o(65380),oe=o(49985);function se(i,r){1&i&&(e.TgZ(0,"span"),e._uU(1,"s"),e.qZA())}function re(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"section",15)(1,"vehicle-cart-row-component",16),e.NdJ("removeVehicle",function(){const s=e.CHM(t).index;return e.oxw().removeVehicle(s)})("editVehicle",function(a){const h=e.CHM(t).index;return e.oxw().editVehicle(a,h)}),e.qZA()()}if(2&i){const t=r.$implicit,n=e.oxw();e.xp6(1),e.Q6J("ezTag",t)("deleteModalCms",n.deleteModalCms)("editModalCms",n.editModalCms)("stateList",n.stateList)("canRemove",n.cartTags.length>1)}}function de(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"section",17),e.NdJ("click",function(){return e.CHM(t),e.oxw().resetAddAdditionalVehicle()}),e._UZ(1,"mat-icon",18),e.TgZ(2,"a",19),e._uU(3,"Add Additional Vehicle"),e.qZA()()}}function le(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"section",20)(1,"wizard-ui",21),e.NdJ("next",function(a){return e.CHM(t),e.oxw().addEzTagDeliveryMethodClick(a)})("cancel",function(a){return e.CHM(t),e.oxw().cancel(a)}),e.TgZ(2,"span",22),e._uU(3,"NEXT"),e.qZA(),e.TgZ(4,"span",23),e._uU(5,"Cancel"),e.qZA()()()}}function ce(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"form",24,25)(2,"card-container")(3,"h2"),e._uU(4),e.qZA(),e._UZ(5,"mat-divider",3)(6,"vehicle-info-form-entry",26),e.qZA(),e.TgZ(7,"section",20)(8,"action-buttons",27),e.NdJ("main",function(){return e.CHM(t),e.oxw().addAdditionalVehicle()})("alt",function(){return e.CHM(t),e.oxw().resetAddAdditionalVehicle()}),e.TgZ(9,"span",28),e._uU(10,"SAVE"),e.qZA(),e.TgZ(11,"span",29),e._uU(12,"Cancel"),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Oqu(t.addAdditionalTagCms.Title),e.xp6(2),e.Q6J("modalCms",t.addAdditionalTagCms)("stateList",t.stateList)("vehicleInfo",t.addVehicle)("plateIsReadOnly",!1)("motorcycleDisabled",!1)}}let ge=(()=>{class i extends U.W{constructor(t,n,a,s,h){super(h),this.frame=t,this.state=n,this.manager=a,this.dialogService=s,this.toasterService=h}ngOnInit(){this.frame.showStepper=!0,this.addVehicle={vehicleClassCode:2,licState:"TX"},this.addingAdditionalVehicle=!1,this.cartTags=this.manager.getVehicleInfoList()}addEzTagDeliveryMethodClick(t){var n=this;return(0,c.Z)(function*(){n.cartTags.length>0?yield n.state.go(t):n.toasterService.show("Error","Please add a vehicle")})()}removeVehicle(t){this.manager.removeVehicleInfoItem(t)}editVehicle(t,n){const a=this.cartTags[n];(a.licPlate!==t.licPlate||a.licState!==t.licState)&&this.checkIfLicExistsInCart(t.licPlate,t.licState)||this.manager.editVehicleInfoItem(t,n)}addAdditionalVehicle(){var t=this;return(0,c.Z)(function*(){t.checkIfLicExistsInCart(t.addVehicle.licPlate,t.addVehicle.licState)?t.addingAdditionalVehicle=!0:(yield t.manager.setVehicleInfoItem(t.addVehicle),t.manager.getVehicleInfoList().filter(s=>s.licPlate===t.addVehicle.licPlate.toUpperCase()).length>0?(t.addVehicle={vehicleClassCode:2,licState:"TX"},t.addingAdditionalVehicle=!1):t.addingAdditionalVehicle=!0)})()}resetAddAdditionalVehicle(){this.addVehicle={vehicleClassCode:2,licState:"TX"},this.addingAdditionalVehicle=!this.addingAdditionalVehicle}cancel(t){var n=this;return(0,c.Z)(function*(){const a={cmsContent:{Title:n.cancellationModal.Title,PrimaryContent:n.cancellationModal.LongDescription,AcceptBtn:"No",CancelBtn:"Yes"}};(yield n.dialogService.openGenericModal(Z.E5,a))||(n.manager.clearData(),yield n.state.go(t))})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v),e.Y36(M.StateService),e.Y36(g.Tg),e.Y36(T.xA),e.Y36(T.MJ))},i.\u0275cmp=e.Xpm({type:i,selectors:[["vehicles-addTag-cart-component"]],inputs:{pageCms:"pageCms",deleteModalCms:"deleteModalCms",editModalCms:"editModalCms",cancellationModal:"cancellationModal",stateList:"stateList"},features:[e.qOj],decls:20,vars:12,consts:[[1,"refresh-2020"],[1,"u-spacing__fieldToSection--marginTop"],[4,"ngIf"],[1,"u-spacing__divider--marginTopBottom"],[3,"innerHtml"],[1,"u-spacing--widthFill"],["fxLayout","row","fxLayoutAlign","start start"],[1,"u-spacing--widthFill","u-spacing__gridToRecords--marginTop"],[3,"isLabel","backgroundColorClass"],["col-start","",1,"fx-flex-auto","fx-layout-row","fx-layout-align-start-center"],[1,"fx-flex-auto-shrink-more","limited-flex"],["fxLayout","row","fxLayoutAlign","start start","class","u-spacing--widthFill",4,"ngFor","ngForOf"],["class","u-spacing__fieldToSection--marginTop","fxLayout","row","fxLayoutAlign","center center",3,"click",4,"ngIf"],["class","u-spacing__buttonToField--marginTop",4,"ngIf"],["validation-focus","","fxLayout","column","class","u-spacing--widthFill u-spacing__fieldToSection--marginTop",4,"ngIf"],["fxLayout","row","fxLayoutAlign","start start",1,"u-spacing--widthFill"],[3,"ezTag","deleteModalCms","editModalCms","stateList","canRemove","removeVehicle","editVehicle"],["fxLayout","row","fxLayoutAlign","center center",1,"u-spacing__fieldToSection--marginTop",3,"click"],["svgIcon","add-icon"],["fxFlexOffset","6px",1,"add-text"],[1,"u-spacing__buttonToField--marginTop"],[3,"next","cancel"],["wizard-next",""],["wizard-cancel",""],["validation-focus","","fxLayout","column",1,"u-spacing--widthFill","u-spacing__fieldToSection--marginTop"],["AddVehicleForm","ngForm"],[3,"modalCms","stateList","vehicleInfo","plateIsReadOnly","motorcycleDisabled"],[3,"main","alt"],["action-main",""],["action-alt",""]],template:function(t,n){1&t&&(e.TgZ(0,"page-centered-container",0)(1,"div",1)(2,"card-container")(3,"h2"),e._uU(4),e.YNc(5,se,2,0,"span",2),e.qZA(),e._UZ(6,"mat-divider",3)(7,"article",4),e.ALo(8,"safeHtml"),e.TgZ(9,"section",5)(10,"div",6)(11,"section",7)(12,"fx-row",8)(13,"section",9)(14,"mat-label",10),e._uU(15,"EZ TAGS REQUESTED"),e.qZA()()()()(),e.YNc(16,re,2,5,"section",11),e.qZA(),e.YNc(17,de,4,0,"section",12),e.qZA()(),e.YNc(18,le,6,0,"section",13),e.YNc(19,ce,13,6,"form",14),e.qZA()),2&t&&(e.xp6(4),e.AsE("",n.pageCms.Title," ",n.cartTags.length," item"),e.xp6(1),e.Q6J("ngIf",n.cartTags.length>1||0===n.cartTags.length),e.xp6(2),e.Q6J("innerHtml",e.lcZ(8,10,n.pageCms.LongDescription),e.oJD),e.xp6(5),e.Q6J("isLabel",!0)("backgroundColorClass","transparent-background"),e.xp6(4),e.Q6J("ngForOf",n.cartTags),e.xp6(1),e.Q6J("ngIf",!n.addingAdditionalVehicle),e.xp6(1),e.Q6J("ngIf",!n.addingAdditionalVehicle),e.xp6(1),e.Q6J("ngIf",n.addingAdditionalVehicle))},directives:[_.D,D.D,u.O5,x.d,C.xw,C.Wh,V.b,P.hX,u.sg,B.L,w.Hw,C.UT,I.P,O.O,f._Y,f.JL,f.F,S.R,b.b,Q.O],pipes:[oe.z],styles:["[_nghost-%COMP%]   span[action-alt][_ngcontent-%COMP%]{font-family:Jost;font-weight:500}[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:65px}"]}),i})();var me=o(44367),pe=o(18011),he=o(32761),ue=o(23204),fe=o(38321),Ce=o(10061),Te=o(29719);function ve(i,r){if(1&i&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" ",t.cmsContent.replenishAmt,"")}}function xe(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"span",17),e._uU(2,"Ship EZ TAG(s) to:"),e.qZA(),e._UZ(3,"address-display",18),e.BQk()),2&i){const t=e.oxw().ngIf;e.xp6(3),e.Q6J("address",t)("international",t.international)("showLabels",!1)("showEdit",!1)}}function ye(i,r){if(1&i&&(e.TgZ(0,"section",5)(1,"span"),e._uU(2),e.qZA(),e.YNc(3,xe,4,4,"ng-container",4),e.qZA()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.deliveryMethod),e.xp6(1),e.Q6J("ngIf",t.isByMail)}}function Ae(i,r){if(1&i&&e._UZ(0,"address-display",18),2&i){const t=e.oxw(3);e.Q6J("address",t.billingInfo.billingType===t.BillingType.Credit?t.billingInfo.credit:t.billingInfo.eft)("international",t.billingInfo.billingType===t.BillingType.Credit?t.billingInfo.credit.international:t.billingInfo.eft.international)("showLabels",!1)("showEdit",!1)}}function Me(i,r){if(1&i&&(e.TgZ(0,"section"),e._UZ(1,"payment-display",19),e.TgZ(2,"article",20),e.YNc(3,Ae,1,4,"address-display",21),e.qZA()()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("billingType",t.billingInfo.billingType)("bankDetails",t.billingInfo.eft)("creditCard",t.billingInfo.credit)("hideTitle",!0)("showAccountNumber",!0)("showNameOnCard",!0)("showLabels",!1),e.xp6(2),e.Q6J("ngIf",t.billingInfo&&t.billingInfo.billingType)}}function _e(i,r){if(1&i&&(e.TgZ(0,"div")(1,"header",0)(2,"h3"),e._uU(3),e.qZA()(),e._UZ(4,"mat-divider"),e.YNc(5,Me,4,8,"section",4),e.qZA()),2&i){const t=e.oxw();e.xp6(3),e.hij(" ",t.cmsContent.billingInfo," "),e.xp6(2),e.Q6J("ngIf",t.billingInfo)}}function Ie(i,r){if(1&i&&(e.TgZ(0,"div",22),e._UZ(1,"vehicle-cart-row-component",23),e.qZA()),2&i){const t=r.$implicit;e.xp6(1),e.Q6J("canRemove",!1)("canEdit",!1)("ezTag",t)}}function Oe(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"section")(1,"action-buttons",24),e.NdJ("main",function(){e.CHM(t);const a=e.MAs(5);return e.oxw().proceed(a)}),e.TgZ(2,"span",25),e._uU(3,"PROCEED"),e.qZA()(),e._UZ(4,"wizard-ui",null,26),e.qZA()}}function Ze(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"section",27)(1,"wizard-ui",28),e.NdJ("next",function(a){return e.CHM(t),e.oxw().nextStep(a)}),e.TgZ(2,"span",29),e._uU(3),e.qZA()(),e.TgZ(4,"a",30),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewVehiclesClick()}),e._uU(5),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("reverseOrder",!0),e.xp6(2),e.hij(" ",t.cmsContent.accountDashboard," "),e.xp6(2),e.Oqu(t.cmsContent.manageMyVehicles)}}let we=(()=>{class i{constructor(t,n,a,s,h){this.frame=t,this.state=n,this.manager=a,this.storefrontUtilityService=s,this.accountService=h,this.billingInfo={credit:{},eft:{}},this.tags=[],this.BillingType=me.ck}ngOnInit(){var t=this;return(0,c.Z)(function*(){t.isKiosk=t.storefrontUtilityService.isRunningAsKiosk&&!t.storefrontUtilityService.webStoreData.fullSiteMode,t.paymentDate=new Date,t.paymentAmount=(yield t.manager.getPaymentInfo()).totalAmt,t.getActInfo(),t.mailingAddress$=t.accountService.getMailingInfo(),t.setDeliveryMethod(),t.billingInfo=yield t.manager.getBillingInfo(),t.tags=t.manager.getVehicleInfoList()})()}setDeliveryMethod(){const t=this.manager.getDeliveryMethod();this.isByMail=t.deliveryMethod===Z.l.Mail,this.deliveryMethod="Delivery Method:"+(this.isByMail?"By Mail":"EZ TAG Store Pickup"),this.setDeliveryMethodCmsDesc()}setDeliveryMethodCmsDesc(){this.deliveryMethodCmsDesc=this.isByMail?this.cmsContent.LongDescription:this.cmsContent.tagStorePickup}getActInfo(){const t=this.manager.getCurrentUser();this.actNumber=t.acctId,this.actName=t.firstName+" "+t.lastName,this.isOptIn=t.rebillOptIn}viewVehiclesClick(){var t=this;return(0,c.Z)(function*(){t.manager.clearData(),yield t.state.go(g.GC.Root)})()}nextStep(t){var n=this;return(0,c.Z)(function*(){n.manager.clearData(),yield n.state.go(t)})()}proceed(t){this.manager.clearData(),this.isKiosk&&t&&t.gotoNextState()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v),e.Y36(M.StateService),e.Y36(g.Tg),e.Y36(pe.ST),e.Y36(T.BR))},i.\u0275cmp=e.Xpm({type:i,selectors:[["vehicles-addTag-receipt-component"]],inputs:{cmsContent:"cmsContent"},decls:48,vars:27,consts:[["fxLayout","row","fxLayoutAlign","space-between end"],["fxLayout","row","fxLayoutAlign","space-between end",1,"summary","paymentAmount"],[3,"value"],[1,"summary"],[4,"ngIf"],["fxLayout","column"],["translation-skip",""],["fxLayout","column",4,"ngIf"],[1,"u-spacing--widthFill"],["fxLayout","row","fxLayoutAlign","start start"],[3,"isLabel","backgroundColorClass"],["col-start","",1,"fx-flex-auto","fx-layout-row","fx-layout-align-start-center"],[1,"fx-flex-auto-shrink-more","limited-flex"],["fxLayout","row","fxLayoutAlign","start start","class","u-spacing--widthFill",4,"ngFor","ngForOf"],["storefront",""],[4,"ngIf","ngIfElse"],["nonkiosk",""],[1,"itemFont"],[3,"address","international","showLabels","showEdit"],[3,"billingType","bankDetails","creditCard","hideTitle","showAccountNumber","showNameOnCard","showLabels"],[1,"u-spacing__addressToPaymentDisplay--marginTop"],[3,"address","international","showLabels","showEdit",4,"ngIf"],["fxLayout","row","fxLayoutAlign","start start",1,"u-spacing--widthFill"],[3,"canRemove","canEdit","ezTag"],[3,"main"],["action-main",""],["wizardUi",""],["fxLayout","row","fxLayout.lt-md","column"],[3,"reverseOrder","next"],["wizard-next",""],[3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"page-centered-container")(1,"card-container")(2,"header",0)(3,"h2"),e._uU(4),e.qZA()(),e._UZ(5,"mat-divider"),e.TgZ(6,"article"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"section")(11,"div",1)(12,"span"),e._uU(13),e.qZA(),e._UZ(14,"currency",2),e.qZA(),e.TgZ(15,"div",3),e._uU(16),e.ALo(17,"dateWithTimeZone"),e.qZA()(),e.YNc(18,ve,2,1,"p",4),e.TgZ(19,"header",0)(20,"h3"),e._uU(21),e.qZA()(),e._UZ(22,"mat-divider"),e.TgZ(23,"section",5)(24,"span",6),e._uU(25),e.qZA(),e.TgZ(26,"span",6),e._uU(27),e.qZA()(),e.YNc(28,ye,4,2,"section",7),e.ALo(29,"async"),e.YNc(30,_e,6,2,"div",4),e.TgZ(31,"header",0)(32,"h3"),e._uU(33),e.qZA()(),e._UZ(34,"mat-divider"),e.TgZ(35,"section",8)(36,"div",9)(37,"div")(38,"fx-row",10)(39,"div",11)(40,"mat-label",12),e._uU(41),e.qZA()()()()(),e.YNc(42,Ie,2,3,"div",13),e.qZA(),e._UZ(43,"storefront-utility",null,14),e.YNc(45,Oe,6,0,"section",15),e.YNc(46,Ze,6,3,"ng-template",null,16,e.W1O),e.qZA()()),2&t){const a=e.MAs(47);e.xp6(4),e.hij(" ",n.cmsContent.Title," "),e.xp6(3),e.Oqu(n.deliveryMethodCmsDesc),e.xp6(2),e.Oqu(n.cmsContent.ShortDescription),e.xp6(4),e.hij("",n.cmsContent.paymentAmount,":"),e.xp6(1),e.Q6J("value",n.paymentAmount),e.xp6(2),e.AsE(" ",n.cmsContent.paymentReceivedOn," ",e.xi3(17,22,n.paymentDate,"dateTime4")," "),e.xp6(2),e.Q6J("ngIf",n.isOptIn),e.xp6(3),e.hij(" ",n.cmsContent.accountInfo," "),e.xp6(4),e.AsE(" ",n.cmsContent.accountName,": ",n.actName,""),e.xp6(2),e.AsE("",n.cmsContent.accountNumber,": ",n.actNumber,""),e.xp6(1),e.Q6J("ngIf",e.lcZ(29,25,n.mailingAddress$)),e.xp6(2),e.Q6J("ngIf",n.isOptIn),e.xp6(3),e.hij(" ",n.cmsContent.tagsOrdered," "),e.xp6(5),e.Q6J("isLabel",!0)("backgroundColorClass","transparent-background"),e.xp6(3),e.hij(" ",n.cmsContent.tagsRequested," "),e.xp6(1),e.Q6J("ngForOf",n.tags),e.xp6(3),e.Q6J("ngIf",n.isKiosk)("ngIfElse",a)}},directives:[_.D,D.D,C.xw,C.Wh,x.d,he.Q,u.O5,ue.G,fe.K,V.b,P.hX,u.sg,B.L,Ce.x,Q.O,I.P,O.O],pipes:[Te.J,u.Ov],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none;visibility:hidden}[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%]{flex:1 1 auto;box-sizing:border-box}[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%]{flex:0 0 auto;box-sizing:border-box}[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%]{flex:1 2 auto;box-sizing:border-box}[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%]{flex:2 1 auto;box-sizing:border-box}[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex}[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%]{flex-direction:column;box-sizing:border-box;display:flex}[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%]{align-content:center;justify-content:flex-start;align-items:center}[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%]{align-content:center;justify-content:flex-end;align-items:center}[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%]{min-width:170px;max-width:530px;width:100%}[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%]{min-width:70px;max-width:80px;width:100%;text-align:end}[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%]{min-width:143px;max-width:145px;width:100%;text-align:end}[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%]{margin-top:2px}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:16px}}[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%]{text-transform:uppercase}[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] + a[_ngcontent-%COMP%]{padding:10px 20px}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] + a[_ngcontent-%COMP%]{width:100%;text-align:center}}[_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   section[_ngcontent-%COMP%]{margin-bottom:32px}[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:64px;margin-top:16px;margin-bottom:20px}[_nghost-%COMP%]   .summary[_ngcontent-%COMP%]{height:50px;padding:16px 16px 11px;font-size:16px;line-height:26px;margin:0 -16px}[_nghost-%COMP%]   .paymentAmount[_ngcontent-%COMP%]{border-radius:10px;background-color:#e0e0ef;font-weight:700}"]}),i})();var L=o(14083),De=o(37661),Pe=o(95615),Se=o(49016);function Le(i,r){if(1&i&&e._UZ(0,"review-order",7),2&i){const t=e.oxw();e.Q6J("data",t.reviewData)("ezTagMailingAddress",t.mailingInfo)("isAddEzTag",!0)}}let Re=(()=>{class i extends U.W{constructor(t,n,a,s,h,R,Be,Qe){super(R),this.parent=t,this.state=n,this.manager=a,this.cmsReplacementService=s,this.dialogService=h,this.toasterService=R,this.reviewOrderService=Be,this.mailingService=Qe,this.deliveryMethod={},this.paymentDueInfo={}}ngOnInit(){var t=this;return(0,c.Z)(function*(){t.parent.showStepper=!0,t.mailingInfo=yield t.mailingService.getMailingAddress(),t.paymentDueInfo=yield t.manager.getPaymentInfo(),t.cartTags=t.manager.getVehicleInfoList(),t.deliveryMethod=t.manager.getDeliveryMethod(),t.currentBalance=t.manager.getCurrentBalance(),t.currentUser=t.manager.getCurrentUser(),t.pageCms.RebillToolTip=t.cmsReplacementService.transformTemplate(t.pageCms.RebillToolTip,{currentBalAmt:t.currentBalance,minReqAmt:t.paymentDueInfo.depositAmt,totalAmt:t.paymentDueInfo.totalAmt}),t.setupReviewOrderData(),t.subscribeEvents()})()}setupReviewOrderData(){const t=this.mapOrderSummary(),n=this.mapDeliveryMethod(),a=this.mapPaymentSummary();this.reviewData={orderSummary:t,deliveryMethod:n,paymentSummary:a}}mapOrderSummary(){return{display:!0,summary:{title:this.pageCms.Title,description:this.pageCms.LongDescription},details:[{title:"EZ TAGS REQUESTED",tags:this.cartTags,isPlate:!1}],operations:{isEditable:!0,isRemoveable:!0,editContent:this.editModalCms,removeContent:this.deleteModalCms},stateList:this.stateList}}mapDeliveryMethod(){return{display:!0,header:this.pageCms.DeliveryMethodTitle,type:this.deliveryMethod.deliveryMethod,operations:[{label:"Edit",display:!0,action:L.a.Edit,source:"delivery-method"}]}}mapPaymentSummary(){return{header:this.pageCms.PaymentSummaryTitle,paymentContext:this.pageCms.PaymentContext,replenishmentAmt:{link:{linkDesc:"Learn more about Replenishment amounts",onClickContent:this.replenishmentAmtModalCms},isOptIn:this.currentUser.rebillOptIn},tagInfo:this.mapPaymentSummTagInfo(),paymentDueInfo:{tagSalesAmt:this.paymentDueInfo.tagSalesAmt,totalAmt:this.paymentDueInfo.totalAmt,rebillTooltip:this.pageCms.RebillToolTip}}}mapPaymentSummTagInfo(){let t=!1;return this.cartTags.forEach(a=>{a.motorcycle&&(t=!0)}),{display:!0,contextDesc:this.pageCms.TagInfo,link:{linkDesc:this.pageCms.TagInfoModalLink,onClickContent:this.tagInfoModalCms},motorcycleText:t?this.currentUser.rebillOptIn?this.pageCms.MotorcycleTextForOptInRep:this.pageCms.MotorcycleTextForOptOutRep:null}}subscribeEvents(){var t=this;this.reviewOrderService.subscribe(function(){var n=(0,c.Z)(function*(a){a.action===L.a.Edit&&("delivery-method"===a.source&&t.editDeliveryMethod(),"order-summary"===a.source&&(yield t.editVehicle(a.data.vehicleEdited,a.data.index),t.setupReviewOrderData())),a.action===L.a.Remove&&"order-summary"===a.source&&(yield t.removeVehicle(a.data.index),t.setupReviewOrderData())});return function(a){return n.apply(this,arguments)}}())}addEzTagReceiptClick(t){var n=this;return(0,c.Z)(function*(){(yield n.mailingService.setMailingAddressOnAcctLevel())&&(yield n.manager.submitOrder())&&(yield n.state.go(t))})()}removeVehicle(t){var n=this;return(0,c.Z)(function*(){yield n.manager.removeVehicleInfoItem(t)})()}editVehicle(t,n){var a=this;return(0,c.Z)(function*(){const s=a.cartTags[n];(s.licPlate!==t.licPlate||s.licState!==t.licState)&&a.checkIfLicExistsInCart(t.licPlate,t.licState)||(yield a.manager.editVehicleInfoItem(t,n))})()}editDeliveryMethod(){this.state.go(l.G.TagDeliveryMethod)}cancel(t){var n=this;return(0,c.Z)(function*(){const a={cmsContent:{Title:n.cancellationModal.Title,PrimaryContent:n.cancellationModal.LongDescription,AcceptBtn:"No",CancelBtn:"Yes"}};(yield n.dialogService.openGenericModal(Z.E5,a))||(n.manager.clearData(),yield n.state.go(t))})()}ngOnDestroy(){this.reviewOrderService.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v),e.Y36(M.StateService),e.Y36(g.Tg),e.Y36(De._n),e.Y36(T.xA),e.Y36(T.MJ),e.Y36(Pe.W),e.Y36(g.H3))},i.\u0275cmp=e.Xpm({type:i,selectors:[["vehicles-addTag-review-component"]],inputs:{pageCms:"pageCms",deleteModalCms:"deleteModalCms",editModalCms:"editModalCms",replenishmentAmtModalCms:"replenishmentAmtModalCms",tagInfoModalCms:"tagInfoModalCms",cancellationModal:"cancellationModal",stateList:"stateList"},features:[e.qOj],decls:10,vars:1,consts:[[1,"refresh-2020"],[3,"data","ezTagMailingAddress","isAddEzTag",4,"ngIf"],[3,"next","cancel"],["wizard-next",""],["wizard-previous","","fxLayout","row","fxLayoutAlign","start center"],["svgIcon","previous-arrow"],["wizard-cancel",""],[3,"data","ezTagMailingAddress","isAddEzTag"]],template:function(t,n){1&t&&(e.TgZ(0,"page-centered-container",0),e.YNc(1,Le,1,3,"review-order",1),e.TgZ(2,"wizard-ui",2),e.NdJ("next",function(s){return n.addEzTagReceiptClick(s)})("cancel",function(s){return n.cancel(s)}),e.TgZ(3,"span",3),e._uU(4,"PLACE ORDER"),e.qZA(),e.TgZ(5,"span",4),e._UZ(6,"mat-icon",5),e._uU(7," Previous "),e.qZA(),e.TgZ(8,"span",6),e._uU(9,"Cancel"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.reviewData))},directives:[_.D,u.O5,Se.C,I.P,O.O,C.xw,C.Wh,w.Hw],styles:["[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%]{width:277px;padding:16px;font-family:Montserrat;font-size:12px;line-height:15px;font-weight:600}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%]{left:calc(50vw - 138.5px);top:-92px}}[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]{display:block;margin-top:32px}[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%]{text-transform:uppercase}[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-cancel][_ngcontent-%COMP%], [_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-previous][_ngcontent-%COMP%]{text-transform:capitalize}[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:65px}"]}),i})();var Ee=o(96471),Fe=o(8769),ze=o(90986);const be={[l.G.AddTag]:v,[l.G.TagVehicleInformation]:ne,[l.G.TagCart]:ge,[l.G.TagDeliveryMethod]:ae,[l.G.TagReviewOrder]:Re,[l.G.TagReceipt]:we},Ue=X.map(i=>({...i,component:be[i.name]}));let Ve=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[g.fy,Fe.n,g.Tg,u.uU,u.rS,Ee.e,ze.Yw,g.l3],imports:[[(0,j.n4)([F.U4],r=>Ue),F.ez,u.ez,f.u5,J.LD,P.lN,w.Ps,x.t,N.D,Y.o9,G.n,H.lg,K.U]]}),i})()}}]);