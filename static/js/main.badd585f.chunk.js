(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),c=a.n(s),l=(a(15),a(6)),o=a(1),i=a(2),m=a(4),u=a(3),d=a(5),h=(a(17),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"form-row align-items-center mx-auto",style:{width:550}},n.a.createElement("div",{className:"col"},n.a.createElement("input",{value:this.props.course,name:this.props.courseName,onChange:this.props.handleChange,id:this.props.id,type:"text",className:"form-control"})),n.a.createElement("div",{className:"col"},n.a.createElement("input",{value:this.props.cridits,name:this.props.criditsName,onChange:this.props.handleChange,id:this.props.id,type:"number",className:"form-control"})),n.a.createElement("div",{className:"col"},n.a.createElement("input",{value:this.props.gpa,name:this.props.gpaName,onChange:this.props.handleChange,id:this.props.id,type:"number",className:"form-control"})),n.a.createElement("div",{className:"col"},n.a.createElement("button",{type:"submit",className:"btn btn-danger mb-2",onClick:this.props.action,id:this.props.id},"Delete")))}}]),t}(r.Component)),p=(a(19),function(e){function t(e){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("h1",null,this.props.title),n.a.createElement("div",{className:"form-row align-items-center mx-auto",style:{width:550}},n.a.createElement("div",{className:"col"},n.a.createElement("h4",null,"Course")),n.a.createElement("div",{className:"col"},n.a.createElement("h4",null)),n.a.createElement("div",{className:"col"},n.a.createElement("h4",null,"Credits")),n.a.createElement("div",{className:"col"},n.a.createElement("h4",null)),n.a.createElement("div",{className:"col"},n.a.createElement("h4",null,"GPA")),n.a.createElement("div",{className:"col"},n.a.createElement("h4",null)),n.a.createElement("div",{className:"col"},n.a.createElement("h4",null)),n.a.createElement("div",{className:"col"},n.a.createElement("h4",null))),this.props.courses.map(function(t){return n.a.createElement("div",{className:"btwncourses"},n.a.createElement(h,{course:t.course,courseName:"course",cridits:t.cridits,criditsName:"cridits",gpa:t.gpa,gpaName:"gpa",handleChange:e.props.handleInput,action:e.props.handleCourseDelete,key:t.id,id:t.id}))}),n.a.createElement("button",{className:"btn btn-primary mb-2",onClick:this.props.handleCourseAdd},"Add course"))}}]),t}(r.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"form-row align-items-center mx-auto",style:{width:400}},n.a.createElement("div",{className:"col-6"},n.a.createElement("input",{value:this.props.term,onChange:this.props.handleChange,id:this.props.id,type:"text",className:"form-control"})),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("button",{className:"btn btn-danger mb-2",id:this.props.id,onClick:this.props.deleteAction},"Delete")),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("button",{className:"btn btn-primary mb-2",id:this.props.id,onClick:this.props.selectAction},"Select")))}}]),t}(r.Component),g=(a(21),function(e){function t(e){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.props.terms.map(function(t){return n.a.createElement("div",{className:"btwnterms"},n.a.createElement(b,{term:t.term,id:t.id,handleChange:e.props.handleInput,deleteAction:e.props.handleTermDelete,selectAction:e.props.handleTermSelect,key:t.id}))}),n.a.createElement("button",{className:"btn btn-primary mb-2",onClick:this.props.handleTermAdd},"Add term"))}}]),t}(r.Component)),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).termCalcGPA=function(){for(var e=Object(l.a)(a.props.courses),t=0,r=0,n=0;n<e.length;n++)""!==e[n].gpa&&""!==e[n].cridits&&(t+=e[n].gpa*e[n].cridits,console.log(t),r+=Number(e[n].cridits),console.log(r));var s=(t/r).toFixed(2);return isNaN(s)?"0.00":s},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Term GPA: ",this.termCalcGPA()))}}]),t}(r.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).fullCalcGPA=function(){var e=Object(l.a)(a.props.terms);console.log(e);for(var t=0,r=0,n=0;n<e.length;n++)for(var s=0;s<e[n].courses.length;s++)""!==e[n].courses[s].gpa&&""!==e[n].courses[s].cridits&&(t+=e[n].courses[s].gpa*e[n].courses[s].cridits,console.log(t),r+=Number(e[n].courses[s].cridits),console.log(r));var c=(t/r).toFixed(2);return isNaN(c)?"0.00":c},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"GPA: ",this.fullCalcGPA()))}}]),t}(r.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleCourseAdd=function(){var e=Object(l.a)(a.state.terms),t=e[a.state.currentTerm].courses,r=t.length;t.push({course:"",cridits:"",gpa:"",id:r}),a.setState({terms:e}),console.log(a.state)},a.handleCourseDelete=function(e){console.log(a.state),console.log(e.target);var t=e.target.id,r=Object(l.a)(a.state.terms);console.log(r);var n=r[a.state.currentTerm].courses.filter(function(e){return e.id!=t});console.log(r);for(var s=0;s<n.length;s++)n[s].id=s;r[a.state.currentTerm].courses=n,a.setState({terms:r}),console.log(a.state)},a.handleCourseInput=function(e){console.log(e.target);var t=e.target.value,r=e.target.id,n=e.target.name,s=Object(l.a)(a.state.terms);s[a.state.currentTerm].courses[r][n]=t,console.log(a.state),a.setState({terms:s})},a.handleTermDelete=function(e){console.log(e.target);var t=e.target.id;if(a.state.currentTerm==t&&0!=t&&a.setState({currentTerm:t-1}),0!=t){for(var r=a.state.terms.filter(function(e){return e.id!=t}),n=0;n<r.length;n++)r[n].id=n;a.setState({terms:r}),console.log(a.state)}},a.handleTermSelect=function(e){var t=e.target.id;a.setState({currentTerm:t})},a.handleTermInput=function(e){console.log(e.target);var t=e.target.value,r=e.target.id,n=Object(l.a)(a.state.terms);n[r].term=t,console.log(a.state),a.setState({terms:n})},a.handleTermAdd=function(){var e=Object(l.a)(a.state.terms),t=e.length;e.push({term:"",id:t,courses:[{course:"",cridits:"",gpa:"",id:0}]}),a.setState({terms:e}),console.log(a.state)},a.state={currentTerm:0,terms:[{term:"",id:0,courses:[{course:"",cridits:"",gpa:"",id:0}]}]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"topnav border-bottom"},n.a.createElement("h2",null,"McMaster GPA Calculator")),n.a.createElement("div",{className:"sidenav border-right"},n.a.createElement("h3",null,"Terms"),n.a.createElement(g,{handleInput:this.handleTermInput,handleTermDelete:this.handleTermDelete,handleTermSelect:this.handleTermSelect,handleTermAdd:this.handleTermAdd,terms:this.state.terms}),n.a.createElement("div",{className:"fullgpa"},n.a.createElement(E,{terms:this.state.terms}))),n.a.createElement("div",{className:"mainsss"},n.a.createElement(p,{handleInput:this.handleCourseInput,handleCourseDelete:this.handleCourseDelete,handleCourseAdd:this.handleCourseAdd,courses:this.state.terms[this.state.currentTerm].courses,title:this.state.terms[this.state.currentTerm].term}),n.a.createElement("div",{className:"termgpa"},n.a.createElement(v,{courses:this.state.terms[this.state.currentTerm].courses}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);c.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(25)}},[[9,2,1]]]);
//# sourceMappingURL=main.badd585f.chunk.js.map
