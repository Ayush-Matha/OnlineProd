import './polyfills.server.mjs';
import{$ as x,$a as N,A as f,B as h,Ia as V,Ja as S,La as $,N as m,O as b,U as P,W as g,Ya as z,Z as a,_ as r,_a as R,aa as v,ba as C,bb as L,ca as _,fa as y,ja as l,ka as s,la as M,ma as k,oa as j,r as T,s as I,x as u,y as E}from"./chunk-NSRECAS5.mjs";import"./chunk-VVCT4QZE.mjs";var q=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u({type:t,selectors:[["app-navbar-customer"]],decls:15,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-body-dark"],[1,"container-fluid"],["routerLink","customerLogo",1,"navbar-brand","text-white"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLink","card",1,"nav-link","active","text-white"],["routerLink","list",1,"nav-link","text-white"],["routerLink","add",1,"nav-link","text-white"]],template:function(e,o){e&1&&(a(0,"nav",0)(1,"div",1)(2,"a",2),s(3,"Customers"),r(),a(4,"div",3)(5,"ul",4)(6,"li",5)(7,"a",6),s(8,"Card View"),r()(),a(9,"li",5)(10,"a",7),s(11,"List View"),r()(),a(12,"li",5)(13,"a",8),s(14,"Add Customer"),r()()()()()())},dependencies:[N],styles:["nav[_ngcontent-%COMP%]{background-color:#0009}"]});let i=t;return i})();var G=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u({type:t,selectors:[["app-customer-management"]],decls:2,vars:0,template:function(e,o){e&1&&x(0,"app-navbar-customer")(1,"router-outlet")},dependencies:[z,q]});let i=t;return i})();var O=(()=>{let t=class t{constructor(){this.customers=[{cust_id:1,cust_name:"Ayush Nilesh Matha",cust_email:"ayushmatha2001@gmail.com",phone:7447710296},{cust_id:2,cust_name:"Ayush Nilesh Matha",cust_email:"ayushmatha2001@gmail.com",phone:7447710296},{cust_id:3,cust_name:"Ayush Nilesh Matha",cust_email:"ayushmatha2001@gmail.com",phone:7447710296},{cust_id:4,cust_name:"Ayush Nilesh Matha",cust_email:"ayushmatha2001@gmail.com",phone:7447710296},{cust_id:5,cust_name:"Ayush Nilesh Matha",cust_email:"ayushmatha2001@gmail.com",phone:7447710296},{cust_id:6,cust_name:"Ayush Nilesh Matha",cust_email:"ayushmatha2001@gmail.com",phone:7447710296},{cust_id:7,cust_name:"Ayush Nilesh Matha",cust_email:"ayushmatha2001@gmail.com",phone:7447710296},{cust_id:8,cust_name:"Ayush Nilesh Matha",cust_email:"ayushmatha2001@gmail.com",phone:7447710296}]}addCustomer(n,e,o,d){this.customers.push({cust_id:n,cust_name:e,cust_email:o,phone:d})}removeCustomer(n){let e=this.customers.findIndex(o=>o.cust_id===n);e!==-1&&this.customers.splice(e,1)}modifyCustomer(n,e,o,d){let p=this.customers.findIndex(D=>D.cust_id===n);e!=null&&(this.customers[p].cust_name=e),o!=null&&(this.customers[p].cust_email=o),d!=null&&(this.customers[p].phone=d)}getDataById(n){let e=this.customers.findIndex(o=>o.cust_id===n);return{customerId:this.customers[e].cust_id,customerName:this.customers[e].cust_name,customerEmail:this.customers[e].cust_email,customerPhone:this.customers[e].phone}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function Z(i,t){if(i&1){let c=v();a(0,"div",5)(1,"h2"),s(2,"Modify Product"),r(),a(3,"p"),s(4),r(),x(5,"input",6,0)(7,"input",6,1)(9,"input",7,2),a(11,"button",8),C("click",function(){f(c);let e=l(6),o=l(8),d=l(10),p=_();return h(p.modifyCustomer(p.Mid,e.value,o.value,+d.value))}),s(12,"Modify"),r()()}if(i&2){let c=_();m(4),k("ID : ",c.Mid,""),m(),y("value",c.Mname),m(2),y("value",c.Memail),m(2),y("value",c.Mphone)}}function ee(i,t){if(i&1){let c=v();a(0,"li")(1,"div",9)(2,"p"),s(3),r(),a(4,"p",10)(5,"b"),s(6),r()(),a(7,"p",11),s(8),r(),a(9,"p",11),s(10),r(),a(11,"div",12)(12,"a",13),C("click",function(){let e=f(c).$implicit,o=_();return h(o.onModifyClicked(e.cust_id))}),s(13,"Modify"),r(),a(14,"a",14),C("click",function(){let e=f(c).$implicit,o=_();return h(o.onDeleteClicked(e.cust_id))}),s(15,"Delete"),r()()()()}if(i&2){let c=t.$implicit;m(3),k("ID : ",c.cust_id,""),m(3),M(c.cust_name),m(2),M(c.cust_email),m(2),M(c.phone)}}var F=(()=>{let t=class t{constructor(n){this.serv=n,this.customerData=this.serv.customers,this.modify=!1,this.Mname="",this.Memail="",this.Mphone=0,this.Mid=0}onDeleteClicked(n){this.serv.removeCustomer(n)}onModifyClicked(n){this.modify=!this.modify;let e=this.serv.getDataById(n);this.Mid=e.customerId,this.Mname=e.customerName,this.Memail=e.customerEmail,this.Mphone=e.customerPhone}modifyCustomer(n,e,o,d){this.modify=!this.modify,this.serv.modifyCustomer(n,e,o,d)}};t.\u0275fac=function(e){return new(e||t)(b(O))},t.\u0275cmp=u({type:t,selectors:[["app-card-view-customer"]],decls:3,vars:2,consts:[["inpName",""],["inpEmail",""],["inpPhone",""],["class","modifyContainer",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"modifyContainer"],["type","text",3,"value"],["type","number",3,"value"],[3,"click"],["href","#",1,"container"],[1,"prodName"],[1,"prodPrice"],[1,"modiDel"],[1,"text-success","text-decoration-none","fw-bold",3,"click"],[1,"text-danger","text-decoration-none","fw-bold",3,"click"]],template:function(e,o){e&1&&(P(0,Z,13,4,"div",3),a(1,"ul"),P(2,ee,16,4,"li",4),r()),e&2&&(g("ngIf",o.modify),m(2),g("ngForOf",o.customerData))},dependencies:[V,S],styles:["ul[_ngcontent-%COMP%]{margin-top:50px;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;list-style-type:none;padding:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{height:10rem;width:20rem;border:2px solid whitesmoke;border-radius:1rem;margin:.5rem;display:flex;flex-direction:column;overflow:hidden;text-decoration:none;color:#000;padding-top:10px;background-color:#f5f5f5;box-shadow:10px 10px 15px #000}li[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]:hover{opacity:.9}p[_ngcontent-%COMP%]{text-align:center;padding:0;margin:0}.prodName[_ngcontent-%COMP%]{font-size:large;padding-top:8px;overflow:hidden}.modiDel[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:8px}.modifyContainer[_ngcontent-%COMP%]{max-width:400px;margin:20px auto auto;padding:20px;border:3px solid #ebe9e9;border-radius:8px}.modifyContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:100%;padding:8px;margin-bottom:10px;box-sizing:border-box}.modifyContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;width:100%;padding:8px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}.modifyContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.modifyContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-top:20px}.modifyContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}a[_ngcontent-%COMP%]{cursor:pointer}"]});let i=t;return i})();function te(i,t){if(i&1){let c=v();a(0,"div",7)(1,"h2"),s(2,"Modify Product"),r(),a(3,"p"),s(4),r(),x(5,"input",8,0)(7,"input",8,1)(9,"input",9,2),a(11,"button",10),C("click",function(){f(c);let e=l(6),o=l(8),d=l(10),p=_();return h(p.modifyCustomer(p.Mid,e.value,o.value,+d.value))}),s(12,"Modify"),r()()}if(i&2){let c=_();m(4),k("ID : ",c.Mid,""),m(),y("value",c.Mname),m(2),y("value",c.Memail),m(2),y("value",c.Mphone)}}function ne(i,t){if(i&1){let c=v();a(0,"tr")(1,"td"),s(2),r(),a(3,"td"),s(4),r(),a(5,"td"),s(6),r(),a(7,"td"),s(8),r(),a(9,"td")(10,"button",11),C("click",function(){let e=f(c).$implicit,o=_();return h(o.onModifyClicked(e.cust_id))}),s(11,"Modify"),r()(),a(12,"td")(13,"button",12),C("click",function(){let e=f(c).$implicit,o=_();return h(o.onDeleteClicked(e.cust_id))}),s(14,"Delete"),r()()()}if(i&2){let c=t.$implicit;m(2),k(" ",c.cust_id," "),m(2),M(c.cust_name),m(2),M(c.cust_email),m(2),M(c.phone)}}var H=(()=>{let t=class t{constructor(n){this.serv=n,this.customerData=this.serv.customers,this.modify=!1,this.Mname="",this.Memail="",this.Mphone=0,this.Mid=0}onDeleteClicked(n){this.serv.removeCustomer(n)}onModifyClicked(n){this.modify=!this.modify;let e=this.serv.getDataById(n);this.Mid=e.customerId,this.Mname=e.customerName,this.Memail=e.customerEmail,this.Mphone=e.customerPhone}modifyCustomer(n,e,o,d){this.modify=!this.modify,this.serv.modifyCustomer(n,e,o,d)}};t.\u0275fac=function(e){return new(e||t)(b(O))},t.\u0275cmp=u({type:t,selectors:[["app-list-view-customer"]],decls:16,vars:2,consts:[["inpName",""],["inpEmail",""],["inpPhone",""],["class","modifyContainer",4,"ngIf"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"modifyContainer"],["type","text",3,"value"],["type","number",3,"value"],[3,"click"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(e,o){e&1&&(P(0,te,13,4,"div",3),a(1,"table",4)(2,"thead")(3,"tr")(4,"th",5),s(5,"Customer Id"),r(),a(6,"th",5),s(7,"Customer Name"),r(),a(8,"th",5),s(9,"Email"),r(),a(10,"th",5),s(11,"Phone"),r(),x(12,"th",5)(13,"th",5),r()(),a(14,"tbody"),P(15,ne,15,4,"tr",6),r()()),e&2&&(g("ngIf",o.modify),m(15),g("ngForOf",o.customerData))},dependencies:[V,S],styles:["table[_ngcontent-%COMP%]{margin-top:0}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}.modifyContainer[_ngcontent-%COMP%]{max-width:400px;margin:20px auto auto;padding:20px;border:3px solid #ebe9e9;border-radius:8px}.modifyContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:100%;padding:8px;margin-bottom:10px;box-sizing:border-box}.modifyContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;width:100%;padding:8px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}.modifyContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.modifyContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-top:20px}.modifyContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}"]});let i=t;return i})();var ie=()=>["customer-management/card"],J=(()=>{let t=class t{constructor(n,e){this.serv=n,this.route=e}onAddCustomerClicked(n,e,o,d){alert("Customer "+e+" is Added"),this.serv.addCustomer(n,e,o,d),this.route.navigate(["customer-management/card"])}};t.\u0275fac=function(e){return new(e||t)(b(O),b(R))},t.\u0275cmp=u({type:t,selectors:[["app-add-customer"]],decls:13,vars:2,consts:[["inpId",""],["inpName",""],["inpEmail",""],["inpPhone",""],[1,"calendar-container"],["type","number","placeholder","Enter Customer Id"],["type","text","placeholder","Enter Customer Name"],["type","text","placeholder","Enter Customer Email"],["type","number","placeholder","Enter Customer Phone"],[3,"click","routerLink"]],template:function(e,o){if(e&1){let d=v();a(0,"div",4)(1,"h2"),s(2,"Add Customer"),r(),x(3,"input",5,0)(5,"input",6,1)(7,"input",7,2)(9,"input",8,3),a(11,"button",9),C("click",function(){f(d);let D=l(4),Q=l(6),U=l(8),W=l(10);return h(o.onAddCustomerClicked(+D.value,Q.value,U.value,+W.value))}),s(12,"Add"),r()()}e&2&&(m(11),g("routerLink",j(1,ie)))},dependencies:[N],styles:[".calendar-container[_ngcontent-%COMP%]{max-width:400px;margin:60px auto auto;padding:20px;border:3px solid #ebe9e9;border-radius:8px;background-color:#f5f5f5;box-shadow:10px 10px 15px #000}input[_ngcontent-%COMP%]{display:block;width:100%;padding:8px;margin-bottom:10px;box-sizing:border-box}button[_ngcontent-%COMP%]{display:block;width:100%;padding:8px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}div[_ngcontent-%COMP%]{padding-top:20px}h2[_ngcontent-%COMP%]{text-align:center}"]});let i=t;return i})();var oe=[{path:"",component:G,children:[{path:"",component:F},{path:"card",component:F},{path:"list",component:H},{path:"add",component:J},{path:"customerLogo",redirectTo:"card"}]}],K=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=E({type:t}),t.\u0275inj=I({imports:[L.forChild(oe),L]});let i=t;return i})();var Oe=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=E({type:t}),t.\u0275inj=I({imports:[$,K]});let i=t;return i})();export{Oe as CustomerManagementModule};
