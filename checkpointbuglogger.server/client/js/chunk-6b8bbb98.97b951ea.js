(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b8bbb98"],{"68bc":function(t,e,c){"use strict";c.r(e);var a=c("7a23");const s=Object(a["G"])("data-v-3ccff04e");Object(a["u"])("data-v-3ccff04e");const b={key:0,class:"bugDetails container-fluid bg-dark"},i={class:"row"},d={class:"col-md-10"},o={key:0,class:"report-headline text-light ml-4 mt-4"},n={key:1},l=Object(a["h"])("button",{type:"button",class:"btn btn-warning","data-dismiss":"modal"}," Cancel ",-1),r={class:"ml-4 text-light"},u=Object(a["g"])(" Reported by: "),j={class:"col-md-2 mt-4"},O=Object(a["h"])("b",null,"close",-1),g={class:"text-light"},h=Object(a["h"])("b",null," status: ",-1),v={key:0,class:"text-danger"},w=Object(a["h"])("b",null,"Closed",-1),B={key:1,class:"text-success"},p=Object(a["h"])("b",null,"Open",-1),m={class:"row"},y={class:"col-md-12 ml-3"},f={key:0,class:"mx-3 description-box bg-white shadow locked-scroll"},k={key:1},x=Object(a["h"])("button",{type:"button",class:"btn btn-warning","data-dismiss":"modal"}," Cancel ",-1),C={class:"row ml-5 my-3"},A=Object(a["h"])("h3",{class:"mx-2 text-light"}," Notes ",-1),N={key:0,title:"Open Create Note Form",type:"button",class:"btn btn-success text-dark shadow","data-toggle":"modal","data-target":"#new-note-form"},D=Object(a["h"])("b",null," Add ",-1),E={class:"\n              row\n              justify-content-center"},Y={class:"card card-width mx-3-5 mb-4"},I={class:"card-body bg-success card-width"},J=Object(a["f"])('<div class="card-title d-flex flex-direction-row justify-content-between border-bottom" data-v-3ccff04e><div class="col-6" data-v-3ccff04e><h4 class="mx-3 border-bottom border-right" data-v-3ccff04e> Reported By </h4></div><div class="col-6" data-v-3ccff04e><h4 class="mx-3 border-bottom border-right" data-v-3ccff04e> Description </h4></div></div>',1),R={key:0,class:"card-text locked-scroll"};Object(a["s"])();const T=s((t,e,c,s,T,U)=>{const V=Object(a["y"])("Create-note-modal"),_=Object(a["y"])("Note");return s.state.activeBug?(Object(a["r"])(),Object(a["d"])("div",b,[Object(a["h"])("div",i,[Object(a["h"])("div",d,[!1===s.state.edit?(Object(a["r"])(),Object(a["d"])("h1",o,[Object(a["h"])("b",null," Title: "+Object(a["A"])(s.state.activeBug.title),1),Object(a["h"])("small",null,[s.state.activeBug.creator.id===s.state.account.id&!1===s.state.activeBug.closed?(Object(a["r"])(),Object(a["d"])("i",{key:0,class:"fas fa-edit",onClick:e[1]||(e[1]=t=>s.state.edit=!0)})):Object(a["e"])("",!0)])])):Object(a["e"])("",!0),!0===s.state.edit?(Object(a["r"])(),Object(a["d"])("div",n,[Object(a["E"])(Object(a["h"])("input",{class:"mt-5",type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>s.state.newBug.title=t),placeholder:"New Bug Title..."},null,512),[[a["C"],s.state.newBug.title]]),l,Object(a["h"])("button",{type:"submit",class:"btn btn-success",onClick:e[3]||(e[3]=(...t)=>s.editBug&&s.editBug(...t))}," Create ")])):Object(a["e"])("",!0),Object(a["h"])("h2",r,[u,Object(a["h"])("img",{class:"rounded-circle",src:s.state.activeBug.creator.picture,alt:""},null,8,["src"]),Object(a["g"])(" "+Object(a["A"])(s.state.activeBug.creator.name),1)])]),Object(a["h"])("div",j,[s.state.activeBug.creator.id===s.state.account.id&!1===s.state.activeBug.closed?(Object(a["r"])(),Object(a["d"])("button",{key:0,type:"button",class:"btn text-light btn-outline-dark",onClick:e[4]||(e[4]=(...t)=>s.closeBug&&s.closeBug(...t))},[O])):Object(a["e"])("",!0),Object(a["h"])("div",g,[h,s.state.activeBug.closed?(Object(a["r"])(),Object(a["d"])("span",v,[w])):(Object(a["r"])(),Object(a["d"])("span",B,[p]))])])]),Object(a["h"])("div",m,[Object(a["h"])("div",y,[!1===s.state.edit?(Object(a["r"])(),Object(a["d"])("div",f,[Object(a["g"])(Object(a["A"])(s.state.activeBug.description)+" ",1),s.state.activeBug.creator.id===s.state.account.id&!1===s.state.activeBug.closed?(Object(a["r"])(),Object(a["d"])("i",{key:0,class:"fas fa-edit text-light",onClick:e[5]||(e[5]=t=>s.state.edit=!0)})):Object(a["e"])("",!0)])):Object(a["e"])("",!0),!0===s.state.edit?(Object(a["r"])(),Object(a["d"])("div",k,[Object(a["E"])(Object(a["h"])("input",{class:"mt-3",type:"text","onUpdate:modelValue":e[6]||(e[6]=t=>s.state.newBug.description=t),placeholder:"New Bug Description..."},null,512),[[a["C"],s.state.newBug.description]]),x,Object(a["h"])("button",{type:"submit",class:"btn btn-success",onClick:e[7]||(e[7]=(...t)=>s.editBug&&s.editBug(...t))}," Create ")])):Object(a["e"])("",!0)])]),Object(a["h"])("div",C,[A,!1===s.state.activeBug.closed?(Object(a["r"])(),Object(a["d"])("button",N,[D])):Object(a["e"])("",!0),Object(a["h"])(V)]),Object(a["h"])("div",E,[Object(a["h"])("div",Y,[Object(a["h"])("div",I,[J,s.state.notes?(Object(a["r"])(),Object(a["d"])("p",R,[Object(a["h"])("ul",null,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(s.state.notes,t=>(Object(a["r"])(),Object(a["d"])(_,{key:t.id,"note-prop":t},null,8,["note-prop"]))),128))])])):Object(a["e"])("",!0)])])])])):Object(a["e"])("",!0)});var U=c("83fc"),V=c("af90"),_=c("5a80"),F=c("5d40"),G=c("6c02"),q={name:"BugDetails",setup(){const t=Object(G["c"])(),e=Object(a["v"])({activeBug:Object(a["b"])(()=>U["a"].activeBug),notes:Object(a["b"])(()=>U["a"].notes),user:Object(a["b"])(()=>U["a"].user),account:Object(a["b"])(()=>U["a"].account),edit:!1,newBug:{}});return Object(a["p"])(async()=>{try{await V["a"].getBugById(t.params.id),await _["a"].getNotesByBugId(t.params.id)}catch(e){F["a"].toast("error:"+e,"warning")}}),{state:e,route:t,async closeBug(){try{await F["a"].confirmAction("Are you sure?","You won't be able to revert this!","warning","Yes, ewwww bug!")&&await V["a"].closeBug(e.activeBug,e.activeBug.id)}catch(t){F["a"].toast("Error: "+t,"warning")}},async editBug(t){e.newBug.id=e.activeBug.id;try{await F["a"].confirmAction("Are you sure?","You won't be able to revert this!","warning","Yes, ewwww bug!")&&(await V["a"].editBug(e.newBug),e.newBug={},e.edit=!1)}catch(c){F["a"].toast("Error: "+c,"warning")}}}}};c("a111");q.render=T,q.__scopeId="data-v-3ccff04e";e["default"]=q},7940:function(t,e,c){},a111:function(t,e,c){"use strict";c("7940")}}]);