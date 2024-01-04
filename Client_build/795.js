"use strict";(self.webpackChunkng_app=self.webpackChunkng_app||[]).push([[795],{84795:(Fe,I,i)=>{i.r(I),i.d(I,{AddPlateModule:()=>Le});var m=i(4857),_=i(68359),g=i(63660),x=i(55297),T=i(73201),w=i(39230),E=i(68665),Z=i(67914),R=i(82701),L=i(26186),U=i(29419),d=i(74975);var r=i(44982),h=i(79210),b=i(75888),P=i(15463),c=i(4322);const y=(0,r.hE)(h.Xn.vehiclesPlateCurrentStep,c.GC.Root),F=[{name:d.G.AddEzPlate,abstract:!0,settings:{},resolve:[(0,r.oF)(h.s.Account),(0,r.IM)(h.IT.active),(0,r.SZ)("stateList"),(0,r.pe)("countryList"),(0,r.QK)("cmsAddPlateFrame",{ItemId:"423E7543-569C-4E0C-B547-1EC843B758E5"}),(0,r.QK)("cmsAddPlateVehicleInfo",{ItemId:"B1C34397-15A2-4AF4-85C2-00825A3F79D1"})]},{name:d.G.PlateVehicleInformation,url:P.Z.PlateVehicleInformation,settings:{},resolve:[(0,r.SZ)("statesList"),(0,r.oF)(h.s.Account),(0,r.IM)(h.IT.active),y({denyRefresh:!0})],wizard:{nextState:d.G.PlateReviewOrder,prevState:c.GC.Root,cancelState:c.GC.Root}},{name:d.G.PlateReviewOrder,url:P.Z.PlateReviewOrder,settings:{},resolve:[(0,r.oF)(h.s.Account),(0,r.IM)(h.IT.active),y({denyRefresh:!0,allowed:[d.G.PlateVehicleInformation]}),(0,r.QK)("pageCms",{ItemId:"B138CBA6-E888-48FE-BE59-E86213E741A0"}),(0,r.QK)("editModalCms",{ItemId:"7BA4DB40-276B-448D-A5D1-D07B38BD569C"}),(0,r.QK)("replenishmentAmtModalCms",{ItemId:"7FD13832-3572-4EBA-BB89-48454CB6FF82"}),(0,r.QK)("cancellationModal",{ItemId:"70803808-5433-4A41-B099-3F4379151F98"}),(0,r.SZ)("stateList")],wizard:{nextState:d.G.PlateReceipt,prevState:d.G.PlateVehicleInformation,cancelState:c.GC.Root}},{name:d.G.PlateReceipt,url:P.Z.PlateReceipt,settings:{},resolve:[(0,r.IM)(h.IT.active),(0,r.oF)(h.s.Account),(0,r.QK)("cmsContent",{mergeParams:!0,ItemId:"E96700C2-5029-4CED-8B8E-C1897F35ADCD"}),y({denyRefresh:!0,allowed:[d.G.PlateReviewOrder],explicitlyForbidden:[b.Dn.Frame,c.GC.Root]})],wizard:{nextState:b.Dn.Frame,isEndState:!0}}];var z=i(486),p=i(60195),N=i(44367),e=i(13847),J=i(61264),Q=i(6304),V=i(63457),B=i(95556),Y=i(59008);function G(a,s){if(1&a&&e._UZ(0,"stepper",2),2&a){const t=e.oxw();e.Q6J("steps",t.steps)("stepMap",t.stepMap)}}let v=(()=>{class a{constructor(t,n){this.vehiclesManagerService=t,this.windowRef=n,this.steps=[],this.stepMap={},this.showStepper=!1}ngOnInit(){var t=this;return(0,p.Z)(function*(){t.vehiclesManagerService.clearData(),t.steps=[{name:t.cmsAddPlateFrame.step1,background:"secondary"},{name:t.cmsAddPlateFrame.step2,background:"secondary"},{name:t.cmsAddPlateFrame.step3,background:"secondary"}],t.stepMap={[d.G.PlateVehicleInformation]:1,[d.G.PlateReviewOrder]:2,[d.G.PlateReceipt]:3}})()}scrollToTop(){var t=this;return(0,p.Z)(function*(){t.isHidden=!0,yield(0,Q.Dc)(20),t.windowRef.scrollTo(0,0),t.isHidden=!1})()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(c.Tg),e.Y36(J.X9))},a.\u0275cmp=e.Xpm({type:a,selectors:[["vehicles-addPlate-frame"]],inputs:{cmsAddPlateFrame:"cmsAddPlateFrame",stateList:"stateList",countryList:"countryList"},decls:4,vars:1,consts:[[1,"refresh-2020","u-spacing--widthFill"],[3,"steps","stepMap",4,"ngIf"],[3,"steps","stepMap"]],template:function(t,n){1&t&&(e.TgZ(0,"main",0),e.YNc(1,G,1,2,"stepper",1),e.TgZ(2,"page-filled-container"),e._UZ(3,"ui-view"),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.showStepper))},directives:[m.O5,V.v,B.C,Y.UIView],styles:["[_nghost-%COMP%]   main[_ngcontent-%COMP%]{background-color:#efeff4}@media not screen and (max-width: 959.98px){[_nghost-%COMP%]   main[_ngcontent-%COMP%]{padding-left:85px;padding-right:85px}}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:24px 15px 16px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:30px;color:#fc2125;margin-bottom:10px}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:15px}}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:11px 14px 15px}}[_nghost-%COMP%]   stepper[_ngcontent-%COMP%]{display:block;min-height:32px}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   stepper[_ngcontent-%COMP%]{min-height:unset}}[_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%]{display:block}@media not screen and (max-width: 959.98px){[_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%]{background-color:#efeff4}}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   page-filled-container[_ngcontent-%COMP%]{background-color:#fff}}"]}),a})();var M=i(83434),H=i(18011),A=i(68043),S=i(25023),u=i(45184),j=i(32761),K=i(38321),W=i(23204),X=i(47553),$=i(70580),k=i(10061),q=i(65380),D=i(32993),O=i(27358),ee=i(29719);function te(a,s){if(1&a&&e._UZ(0,"address-display",19),2&a){const t=e.oxw(3);e.Q6J("address",t.billingInfo.billingType===t.BillingType.Credit?t.billingInfo.credit:t.billingInfo.eft)("international",t.billingInfo.billingType===t.BillingType.Credit?t.billingInfo.credit.international:t.billingInfo.eft.international)("showLabels",!1)("showEdit",!1)}}function ne(a,s){if(1&a&&(e.TgZ(0,"section"),e._UZ(1,"payment-display",16),e.TgZ(2,"article",17),e.YNc(3,te,1,4,"address-display",18),e.qZA()()),2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("billingType",t.billingInfo.billingType)("bankDetails",t.billingInfo.eft)("creditCard",t.billingInfo.credit)("hideTitle",!0)("showAccountNumber",!0)("showNameOnCard",!0)("showLabels",!1),e.xp6(2),e.Q6J("ngIf",t.billingInfo&&t.billingInfo.billingType)}}function ae(a,s){if(1&a&&(e.TgZ(0,"div")(1,"header",0)(2,"h3"),e._uU(3),e.qZA()(),e._UZ(4,"mat-divider"),e.YNc(5,ne,4,8,"section",6),e.qZA()),2&a){const t=e.oxw();e.xp6(3),e.hij(" ",t.cmsContent.billingInfo," "),e.xp6(2),e.Q6J("ngIf",t.billingInfo)}}function ie(a,s){if(1&a&&(e.TgZ(0,"div",20),e._UZ(1,"vehicle-cart-row-component",21),e.qZA()),2&a){const t=s.$implicit;e.xp6(1),e.Q6J("canRemove",!1)("isPlate",!0)("canEdit",!1)("ezTag",t)}}function oe(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"section")(1,"action-buttons",22),e.NdJ("main",function(){e.CHM(t);const o=e.MAs(5);return e.oxw().proceed(o)}),e.TgZ(2,"span",23),e._uU(3,"PROCEED"),e.qZA()(),e._UZ(4,"wizard-ui",null,24),e.qZA()}}function se(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"section",25)(1,"wizard-ui",26),e.NdJ("next",function(o){return e.CHM(t),e.oxw().nextStep(o)}),e.TgZ(2,"span",27),e._uU(3),e.qZA()(),e.TgZ(4,"a",28),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewVehiclesClick()}),e._uU(5),e.qZA()()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("reverseOrder",!0),e.xp6(2),e.hij(" ",t.cmsContent.accountDashboard," "),e.xp6(2),e.Oqu(t.cmsContent.manageMyVehicles)}}let le=(()=>{class a{constructor(t,n,o,l){this.frame=t,this.state=n,this.manager=o,this.storefrontUtilityService=l,this.plates=[],this.BillingType=N.ck}ngOnInit(){var t=this;return(0,p.Z)(function*(){t.isKiosk=t.storefrontUtilityService.isRunningAsKiosk&&!t.storefrontUtilityService.webStoreData.fullSiteMode,t.paymentDate=new Date,t.paymentAmount=(yield t.manager.getPaymentInfo()).totalAmt,t.getActInfo(),t.billingInfo=yield t.manager.getBillingInfo(),t.plates=t.manager.getVehicleInfoList()})()}getActInfo(){const t=this.manager.getCurrentUser();this.actNumber=t.acctId,this.actName=t.firstName+" "+t.lastName,this.isOptIn=t.rebillOptIn}viewVehiclesClick(){var t=this;return(0,p.Z)(function*(){t.manager.clearData(),yield t.state.go(c.GC.Root)})()}nextStep(t){var n=this;return(0,p.Z)(function*(){n.manager.clearData(),yield n.state.go(t)})()}proceed(t){this.manager.clearData(),this.isKiosk&&t&&t.gotoNextState()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(v),e.Y36(M.StateService),e.Y36(c.Tg),e.Y36(H.ST))},a.\u0275cmp=e.Xpm({type:a,selectors:[["vehicles-addPlate-receipt-component"]],inputs:{cmsContent:"cmsContent"},decls:47,vars:24,consts:[["fxLayout","row","fxLayoutAlign","space-between end"],["fxLayout","row","fxLayoutAlign","space-between end",1,"summary","paymentAmount"],[3,"value"],[1,"summary"],["fxLayout","column"],["translation-skip",""],[4,"ngIf"],[1,"u-spacing--widthFill"],["fxLayout","row","fxLayoutAlign","start start"],[3,"isLabel","backgroundColorClass"],["col-start","",1,"fx-flex-auto","fx-layout-row","fx-layout-align-start-center"],[1,"fx-flex-auto-shrink-more","limited-flex"],["fxLayout","row","fxLayoutAlign","start start","class","u-spacing--widthFill",4,"ngFor","ngForOf"],["storefront",""],[4,"ngIf","ngIfElse"],["nonkiosk",""],[3,"billingType","bankDetails","creditCard","hideTitle","showAccountNumber","showNameOnCard","showLabels"],[1,"u-spacing__addressToPaymentDisplay--marginTop"],[3,"address","international","showLabels","showEdit",4,"ngIf"],[3,"address","international","showLabels","showEdit"],["fxLayout","row","fxLayoutAlign","start start",1,"u-spacing--widthFill"],[3,"canRemove","isPlate","canEdit","ezTag"],[3,"main"],["action-main",""],["wizardUi",""],["fxLayout","row","fxLayout.lt-md","column"],[3,"reverseOrder","next"],["wizard-next",""],[3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"page-centered-container")(1,"card-container")(2,"header",0)(3,"h2"),e._uU(4),e.qZA()(),e._UZ(5,"mat-divider"),e.TgZ(6,"article"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"section")(11,"div",1)(12,"span"),e._uU(13),e.qZA(),e._UZ(14,"currency",2),e.qZA(),e.TgZ(15,"div",3),e._uU(16),e.ALo(17,"dateWithTimeZone"),e.qZA()(),e.TgZ(18,"p"),e._uU(19),e.qZA(),e.TgZ(20,"header",0)(21,"h3"),e._uU(22),e.qZA()(),e._UZ(23,"mat-divider"),e.TgZ(24,"section",4)(25,"span",5),e._uU(26),e.qZA(),e.TgZ(27,"span",5),e._uU(28),e.qZA()(),e.YNc(29,ae,6,2,"div",6),e.TgZ(30,"header",0)(31,"h3"),e._uU(32),e.qZA()(),e._UZ(33,"mat-divider"),e.TgZ(34,"section",7)(35,"div",8)(36,"div")(37,"fx-row",9)(38,"div",10)(39,"mat-label",11),e._uU(40),e.qZA()()()()(),e.YNc(41,ie,2,4,"div",12),e.qZA(),e._UZ(42,"storefront-utility",null,13),e.YNc(44,oe,6,0,"section",14),e.YNc(45,se,6,3,"ng-template",null,15,e.W1O),e.qZA()()),2&t){const o=e.MAs(46);e.xp6(4),e.hij(" ",n.cmsContent.Title," "),e.xp6(3),e.Oqu(n.cmsContent.ShortDescription),e.xp6(2),e.Oqu(n.cmsContent.LongDescription),e.xp6(4),e.hij("",n.cmsContent.paymentAmount,":"),e.xp6(1),e.Q6J("value",n.paymentAmount),e.xp6(2),e.AsE(" ",n.cmsContent.paymentReceivedOn," ",e.xi3(17,21,n.paymentDate,"dateTime4")," "),e.xp6(3),e.hij(" ",n.cmsContent.replenishAmt,""),e.xp6(3),e.hij(" ",n.cmsContent.accountInfo," "),e.xp6(4),e.AsE(" ",n.cmsContent.accountName,": ",n.actName,""),e.xp6(2),e.AsE("",n.cmsContent.accountNumber,": ",n.actNumber,""),e.xp6(1),e.Q6J("ngIf",n.isOptIn),e.xp6(3),e.hij(" ",n.cmsContent.platesOrdered," "),e.xp6(5),e.Q6J("isLabel",!0)("backgroundColorClass","transparent-background"),e.xp6(3),e.hij(" ",n.cmsContent.platesRequested," "),e.xp6(1),e.Q6J("ngForOf",n.plates),e.xp6(3),e.Q6J("ngIf",n.isKiosk)("ngIfElse",o)}},directives:[A.D,S.D,u.xw,u.Wh,x.d,j.Q,m.O5,K.K,W.G,X.b,T.hX,m.sg,$.L,k.x,q.O,D.P,O.O],pipes:[ee.J],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none;visibility:hidden}[_nghost-%COMP%]   .fx-flex-auto[_ngcontent-%COMP%]{flex:1 1 auto;box-sizing:border-box}[_nghost-%COMP%]   .fx-flex-none[_ngcontent-%COMP%]{flex:0 0 auto;box-sizing:border-box}[_nghost-%COMP%]   .fx-flex-auto-shrink-more[_ngcontent-%COMP%]{flex:1 2 auto;box-sizing:border-box}[_nghost-%COMP%]   .fx-flex-auto-grow-more[_ngcontent-%COMP%]{flex:2 1 auto;box-sizing:border-box}[_nghost-%COMP%]   .fx-layout-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex}[_nghost-%COMP%]   .fx-layout-column[_ngcontent-%COMP%]{flex-direction:column;box-sizing:border-box;display:flex}[_nghost-%COMP%]   .fx-layout-align-start-center[_ngcontent-%COMP%]{align-content:center;justify-content:flex-start;align-items:center}[_nghost-%COMP%]   .fx-layout-align-end-center[_ngcontent-%COMP%]{align-content:center;justify-content:flex-end;align-items:center}[_nghost-%COMP%]   .limited-flex[_ngcontent-%COMP%]{min-width:170px;max-width:530px;width:100%}[_nghost-%COMP%]   .unlimited-flex[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .limited-flex-end[_ngcontent-%COMP%]{min-width:70px;max-width:80px;width:100%;text-align:end}[_nghost-%COMP%]   .larger-limited-flex-end[_ngcontent-%COMP%]{min-width:143px;max-width:145px;width:100%;text-align:end}[_nghost-%COMP%]   .table-space[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   .table-space.lt-md[_ngcontent-%COMP%]{margin-top:2px}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:16px}}[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%]{text-transform:uppercase}[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] + a[_ngcontent-%COMP%]{padding:10px 20px}@media screen and (max-width: 959.98px){[_nghost-%COMP%]   wizard-ui[_ngcontent-%COMP%] + a[_ngcontent-%COMP%]{width:100%;text-align:center}}[_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   section[_ngcontent-%COMP%]{margin-bottom:32px}[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:64px;margin-top:16px;margin-bottom:20px}[_nghost-%COMP%]   .summary[_ngcontent-%COMP%]{height:50px;padding:16px 16px 11px;font-size:16px;line-height:26px;margin:0 -16px}[_nghost-%COMP%]   .paymentAmount[_ngcontent-%COMP%]{border-radius:10px;background-color:#e0e0ef;font-weight:700}"]}),a})();var re=i(79150),de=i(14083),ce=i(37661),me=i(96165),pe=i(95615),ge=i(49016);function he(a,s){if(1&a&&e._UZ(0,"review-order",7),2&a){const t=e.oxw();e.Q6J("data",t.reviewData)}}let fe=(()=>{class a{constructor(t,n,o,l,C,Ue){this.frame=t,this.state=n,this.manager=o,this.cmsReplacementService=l,this.dialogService=C,this.reviewOrderService=Ue,this.paymentDueInfo={}}ngOnInit(){var t=this;return(0,p.Z)(function*(){t.frame.showStepper=!0,t.paymentDueInfo=yield t.manager.getPaymentInfo(),t.cartTags=t.manager.getVehicleInfoList(),t.currentBalance=t.manager.getCurrentBalance(),t.currentUser=t.manager.getCurrentUser(),t.pageCms.RebillToolTip=t.cmsReplacementService.transformTemplate(t.pageCms.RebillToolTip,{currentBalAmt:t.currentBalance,minReqAmt:t.paymentDueInfo.depositAmt,totalAmt:t.paymentDueInfo.totalAmt}),t.setupReviewOrderData(),t.subscribeEvents()})()}setupReviewOrderData(){const t=this.mapOrderSummary(),n=this.mapDeliveryMethod(),o=this.mapPaymentSummary();this.reviewData={orderSummary:t,deliveryMethod:n,paymentSummary:o}}mapOrderSummary(){return{display:!0,summary:{title:this.pageCms.Title,description:this.pageCms.LongDescription},details:[{title:"EZ PLATES REQUESTED",tags:this.cartTags?[this.cartTags[0]]:[],isPlate:!0}],operations:{isEditable:!0,isRemoveable:!1,editContent:this.editModalCms},stateList:this.stateList}}mapDeliveryMethod(){return{display:!1}}mapPaymentSummary(){return{header:this.pageCms.PaymentSummaryTitle,paymentContext:this.pageCms.PaymentContext,replenishmentAmt:{link:{linkDesc:"Learn more about Replenishment amounts",onClickContent:this.replenishmentAmtModalCms},isOptIn:this.currentUser.rebillOptIn},tagInfo:{display:!1},paymentDueInfo:{tagSalesAmt:this.paymentDueInfo.tagSalesAmt,totalAmt:this.paymentDueInfo.totalAmt,rebillTooltip:this.pageCms.RebillToolTip}}}subscribeEvents(){this.reviewOrderService.subscribe(t=>{t.action===de.a.Edit&&"order-summary"===t.source&&this.editVehicle(t.data.vehicleEdited,t.data.index)})}addEzPlateReceiptClick(t){var n=this;return(0,p.Z)(function*(){(yield n.manager.submitOrder())&&(yield n.state.go(t))})()}editVehicle(t,n){this.manager.editVehicleInfoItem(t,n)}cancel(t){var n=this;return(0,p.Z)(function*(){const o={cmsContent:{Title:n.cancellationModal.Title,PrimaryContent:n.cancellationModal.LongDescription,AcceptBtn:"No",CancelBtn:"Yes"}};(yield n.dialogService.openGenericModal(re.E5,o))||(n.manager.clearData(),yield n.state.go(t))})()}ngOnDestroy(){this.reviewOrderService.unsubscribe()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(v),e.Y36(M.StateService),e.Y36(c.Tg),e.Y36(ce._n),e.Y36(me.xA),e.Y36(pe.W))},a.\u0275cmp=e.Xpm({type:a,selectors:[["vehicles-addPlate-review-component"]],inputs:{pageCms:"pageCms",editModalCms:"editModalCms",replenishmentAmtModalCms:"replenishmentAmtModalCms",cancellationModal:"cancellationModal",stateList:"stateList"},decls:10,vars:1,consts:[[1,"refresh-2020"],[3,"data",4,"ngIf"],[3,"next","cancel"],["wizard-next",""],["wizard-previous","","fxLayout","row","fxLayoutAlign","start center"],["svgIcon","previous-arrow"],["wizard-cancel",""],[3,"data"]],template:function(t,n){1&t&&(e.TgZ(0,"page-centered-container",0),e.YNc(1,he,1,1,"review-order",1),e.TgZ(2,"wizard-ui",2),e.NdJ("next",function(l){return n.addEzPlateReceiptClick(l)})("cancel",function(l){return n.cancel(l)}),e.TgZ(3,"span",3),e._uU(4,"PLACE ORDER"),e.qZA(),e.TgZ(5,"span",4),e._UZ(6,"mat-icon",5),e._uU(7," Previous "),e.qZA(),e.TgZ(8,"span",6),e._uU(9,"Cancel"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.reviewData))},directives:[A.D,m.O5,ge.C,D.P,O.O,u.xw,u.Wh,w.Hw],styles:["tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%]{width:277px;padding:16px;font-family:Montserrat;font-size:12px;line-height:15px;font-weight:600}@media screen and (max-width: 959.98px){tool-tip[_ngcontent-%COMP%]   [tool-tip-message][_ngcontent-%COMP%]{left:calc(50vw - 138.5px);top:-92px}}card-container[_ngcontent-%COMP%]{display:block;margin-top:32px}wizard-ui[_ngcontent-%COMP%]{display:block;margin-top:32px}wizard-ui[_ngcontent-%COMP%]   [wizard-next][_ngcontent-%COMP%]{text-transform:uppercase}wizard-ui[_ngcontent-%COMP%]   [wizard-cancel][_ngcontent-%COMP%], wizard-ui[_ngcontent-%COMP%]   [wizard-previous][_ngcontent-%COMP%]{text-transform:capitalize}mat-divider[_ngcontent-%COMP%]{width:65px}"]}),a})();var ue=i(39453),ve=i(8584),Ce=i(14550),xe=i(94994),Te=i(35256),Pe=i(44854),ye=i(49985);const Me=["Form"];function Ae(a,s){1&a&&(e.TgZ(0,"p",30),e._uU(1,"Please enter # of days"),e.qZA())}function De(a,s){if(1&a&&(e.TgZ(0,"p",30),e._uU(1),e.qZA()),2&a){const t=e.oxw(2).$implicit;e.xp6(1),e.Oqu(t.value)}}function Oe(a,s){if(1&a&&(e.ynx(0,28),e.YNc(1,Ae,2,0,"p",29),e.YNc(2,De,2,1,"p",29),e.BQk()),2&a){const t=e.oxw().$implicit;e.Q6J("ngSwitch",t.key),e.xp6(1),e.Q6J("ngSwitchCase","required"),e.xp6(1),e.Q6J("ngSwitchCase","invalidNum")}}function Ie(a,s){if(1&a&&(e.TgZ(0,"div",26),e.YNc(1,Oe,3,3,"ng-container",27),e.qZA()),2&a){e.oxw();const t=e.MAs(2);e.xp6(1),e.Q6J("ngIf",t.submitted)}}let we=(()=>{class a{constructor(t,n,o){this.frame=t,this.state=n,this.manager=o,this.statesList=[],this.vehicleInfo={licState:"TX",vehicleClassCode:2,motorcycle:!1,temporaryLicPlate:null,acctTagSeq:0,acctTagSeqSepcified:!1,acctTagStatus:null,acctVehicleId:0,activePbpTagExist:!1,fullTagId:null,isMotorcycleDisabled:!0,licPlate:null,nickname:null,nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly:!1,pbpEndDate:null,pbpStartDate:null,tagId:null,tagless_Desc:null,tagStatusDesc:null,tagTypeCode:"P",vehicleClassDesc:null,vehicleColor:null,vehicleMake:null,vehicleModel:null,vehicleYear:null},this.startDateTime=new Date,this.endDateTime=new Date,this.isDateTimeInvalidMsg="",this.isDateTimeInvalid=!1}ngOnInit(){var t=this;return(0,p.Z)(function*(){const n=t.manager.getVehicleInfoList()||[];n.length>0?(t.vehicleInfo=n[0],t.setDates()):(t.numberOfDays=3,t.startDateTime=new Date,t.endDateTime=new Date,t.endDateTime.setDate(t.startDateTime.getDate()+t.numberOfDays)),t.manager.clearData(),t.frame.showStepper=!0})()}setDates(){this.startDateTime=new Date(this.vehicleInfo.pbpStartDate),this.endDateTime=new Date(this.vehicleInfo.pbpEndDate);const t=this.endDateTime.getTime()-this.startDateTime.getTime()+6e4;this.numberOfDays=Math.floor(t/1e3/60/60/24)}cancel(t){var n=this;return(0,p.Z)(function*(){yield n.state.go(t)})()}nextStep(t){var n=this;return(0,p.Z)(function*(){n.validationDateTime(),n.isDateTimeInvalid||(n.vehicleInfo.pbpStartDate=n.startDateTime.toISOString(),n.vehicleInfo.pbpEndDate=n.endDateTime.toISOString(),n.vehicleInfo.activePbpTagExist=!0,yield n.manager.setVehicleInfoItem(n.vehicleInfo),n.manager.getVehicleInfoList().length>0&&(yield n.state.go(t)))})()}validationDateTime(){this.isDateTimeInvalid=!1;const t=this.form.form.controls.startDate;t.setErrors(null),t.controls.calendarInput.setErrors(null);const n=this.form.form.controls.endDate;n.setErrors(null),n.controls.calendarInput.setErrors(null),new Date(this.startDateTime.getTime()+6e5)<new Date&&(this.isDateTimeInvalidMsg="Start date can not be less than current date",this.isDateTimeInvalid=!0,t.setErrors({invalid:this.isDateTimeInvalidMsg}),t.controls.calendarInput.setErrors({invalid:this.isDateTimeInvalidMsg})),this.startDateTime>this.endDateTime&&(this.isDateTimeInvalidMsg="Please select start date greater than end date",this.isDateTimeInvalid=!0,t.setErrors({invalid:this.isDateTimeInvalidMsg}),t.controls.calendarInput.setErrors({invalid:this.isDateTimeInvalidMsg}));const l=new Date,C=new Date;C.setDate(l.getDate()+2556),this.endDateTime>C&&(this.isDateTimeInvalidMsg="Please select end date less than 2556 days",this.isDateTimeInvalid=!0,n.controls.calendarInput.setErrors({invalid:this.isDateTimeInvalidMsg}))}onDateEntered(){if(null!==this.startDateTime&&null!==this.endDateTime){const t=this.endDateTime.getTime()-this.startDateTime.getTime()+6e4,n=Math.floor(t/1e3/60/60/24);n>0?this.numberOfDays=n:(this.numberOfDays=3,this.onNumberOfDaysEntered()),this.validationDateTime()}}onNumberOfDaysEntered(){if(null!==this.startDateTime&&null!==this.endDateTime){const t=new Date(this.startDateTime);t.setDate(this.startDateTime.getDate()+this.numberOfDays),this.endDateTime=t}}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(v),e.Y36(M.StateService),e.Y36(c.Tg))},a.\u0275cmp=e.Xpm({type:a,selectors:[["vehicles-addPlate-information-component"]],viewQuery:function(t,n){if(1&t&&e.Gf(Me,5),2&t){let o;e.iGM(o=e.CRH())&&(n.form=o.first)}},inputs:{statesList:"statesList",cmsAddPlateVehicleInfo:"cmsAddPlateVehicleInfo",usStates:"usStates"},decls:48,vars:21,consts:[[1,"refresh-2020"],["validation-focus","","novalidate",""],["Form","ngForm"],[1,"u-spacing__fieldToSection--marginTop"],[1,"u-spacing__divider--marginTopBottom"],[3,"innerHtml"],[3,"modalCms","vehicleInfo","stateList","plateIsReadOnly","showTempPlate"],["fxLayout","row","fxLayoutAlign","space-between center",2,"padding-top","32px"],["fxShow","","fxHide.lt-sm",""],["fxLayout","row","fxLayoutAlign","space-between center","fxLayoutGap","8px"],["fxLayout","column","fxLayoutAlign","start start",1,"expanded-column"],[3,"name","dateTimeModel","dateTimeModelChange"],["fxLayout","column","fxLayoutAlign","start flex-end",1,"expanded-column",3,"error-check"],["type","number","id","numberOfDays","name","numberOfDays","aria-label","Number of Days","min","0","onkeypress","return event.charCode >= 48","required","","ngPattern","/^([0-9]+)$/",2,"max-width","80px","padding-right","9px",3,"ngModel","ngModelChange"],["NumberOfDaysCheck","ngModel"],["role","alert",4,"ngFor","ngForOf"],["fxShow","","fxHide.lt-sm","",3,"name","dateTimeModel","dateTimeModelChange"],["fxShow","","fxHide.lt-md",""],["fxLayout","row","fxLayoutAlign","start center","fxShow","","fxHide.gt-xs","",2,"padding-top","32px"],["fxLayout","row","fxLayoutAlign","start center","fxShow","","fxHide.gt-xs",""],["fxShow","","fxHide.lt-xs","",3,"name","dateTimeModel","dateTimeModelChange"],[1,"u-spacing__buttonToField--marginTop"],[3,"disabled","next"],["Wizard",""],["wizard-next",""],["wizard-cancel",""],["role","alert"],[3,"ngSwitch",4,"ngIf"],[3,"ngSwitch"],["class","help-block",4,"ngSwitchCase"],[1,"help-block"]],template:function(t,n){if(1&t&&(e.TgZ(0,"page-centered-container",0)(1,"form",1,2)(3,"div",3)(4,"card-container")(5,"header")(6,"h2"),e._uU(7),e.qZA(),e._UZ(8,"mat-divider",4),e.qZA(),e._UZ(9,"article",5),e.ALo(10,"safeHtml"),e._UZ(11,"vehicle-info-form-entry",6),e.TgZ(12,"section",7)(13,"mat-label"),e._uU(14,"START DATE/TIME"),e.qZA(),e.TgZ(15,"mat-label"),e._uU(16,"NO. OF DAYS"),e.qZA(),e.TgZ(17,"mat-label",8),e._uU(18,"END DATE/TIME"),e.qZA()(),e.TgZ(19,"section",9)(20,"div",10)(21,"hctra-mat-datetime-picker-with-input",11),e.NdJ("dateTimeModelChange",function(l){return n.startDateTime=l,n.onDateEntered()}),e.qZA(),e.TgZ(22,"mat-label"),e._uU(23,"Time displayed in CDT"),e.qZA()(),e.TgZ(24,"div",12)(25,"input",13,14),e.NdJ("ngModelChange",function(l){return n.numberOfDays=l,n.onNumberOfDaysEntered()}),e.qZA(),e.YNc(27,Ie,2,1,"div",15),e.ALo(28,"keyvalue"),e.qZA(),e.TgZ(29,"div",10)(30,"hctra-mat-datetime-picker-with-input",16),e.NdJ("dateTimeModelChange",function(l){return n.endDateTime=l,n.onDateEntered()}),e.qZA(),e.TgZ(31,"mat-label",17),e._uU(32,"Time displayed in CDT"),e.qZA()()(),e.TgZ(33,"section",18)(34,"mat-label"),e._uU(35,"END DATE/TIME"),e.qZA()(),e.TgZ(36,"section",19)(37,"hctra-mat-datetime-picker-with-input",20),e.NdJ("dateTimeModelChange",function(l){return n.endDateTime=l,n.onDateEntered()}),e.qZA()(),e.TgZ(38,"section",19)(39,"mat-label"),e._uU(40,"Time displayed in CDT"),e.qZA()()(),e.TgZ(41,"section",21)(42,"wizard-ui",22,23),e.NdJ("next",function(l){return n.nextStep(l)}),e.TgZ(44,"span",24),e._uU(45,"NEXT"),e.qZA(),e.TgZ(46,"span",25),e._uU(47,"Cancel"),e.qZA()()()()()()),2&t){const o=e.MAs(2),l=e.MAs(26);e.xp6(7),e.Oqu(n.cmsAddPlateVehicleInfo.Title),e.xp6(2),e.Q6J("innerHtml",e.lcZ(10,17,n.cmsAddPlateVehicleInfo.LongDescription),e.oJD),e.xp6(2),e.Q6J("modalCms",n.cmsAddPlateVehicleInfo)("vehicleInfo",n.vehicleInfo)("stateList",n.statesList)("plateIsReadOnly",!1)("showTempPlate",!1),e.xp6(10),e.Q6J("name","startDate")("dateTimeModel",n.startDateTime),e.xp6(3),e.Q6J("error-check",l),e.xp6(1),e.Q6J("ngModel",n.numberOfDays),e.xp6(2),e.Q6J("ngForOf",e.lcZ(28,19,l.errors)),e.xp6(3),e.Q6J("name","endDate")("dateTimeModel",n.endDateTime),e.xp6(7),e.Q6J("name","endDate")("dateTimeModel",n.endDateTime),e.xp6(5),e.Q6J("disabled",o.submitted&&o.invalid)}},directives:[A.D,g._Y,g.JL,g.F,ue.R,S.D,x.d,ve.b,u.xw,u.Wh,T.hX,Ce.b8,u.SQ,xe.c,Te.i,Pe.a,g.qQ,g.wV,g.Fj,g.Q7,g.JJ,g.On,m.sg,m.O5,m.RF,m.n9,D.P,O.O],pipes:[ye.z,m.Nd],styles:["[_nghost-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:65px}.expanded-column[_ngcontent-%COMP%]{flex-grow:1;height:100%;align-self:stretch}"]}),a})();var Ze=i(96471),be=i(8769),Se=i(90986),_e=i(93849);const Ee={[d.G.AddEzPlate]:v,[d.G.PlateVehicleInformation]:we,[d.G.PlateReviewOrder]:fe,[d.G.PlateReceipt]:le},Re=F.map(a=>({...a,component:Ee[a.name]}));let Le=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[c.fy,be.n,c.Tg,m.uU,m.rS,Ze.e,Se.Yw,c.l3],imports:[[(0,z.n4)([Z.U4],s=>Re),Z.ez,m.ez,g.u5,E.LD,T.lN,w.Ps,x.t,R.D,_.o9,L.n,U.lg,_e.U]]}),a})()}}]);