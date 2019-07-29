(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),l=(a(25),a(1)),c=a(2),i=a(5),u=a(3),m=a(6),d=(a(26),a(8)),p=a(4),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onUpdateStatus=function(){a.props.onUpdateStatus(a.props.task.id)},a.onDeleteItem=function(){a.props.onDeleteTask(a.props.task.id),a.props.onCloseForm()},a.onEditTask=function(){a.props.onOpenForm(),a.props.onEditTask(a.props.task)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"showStatusElement",value:function(){return r.a.createElement("span",{className:this.props.task.status?"btn label label-danger":"btn label label-info",onClick:this.onUpdateStatus},!0===this.props.task.status?"Active":"Done")}},{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.index),r.a.createElement("td",null,this.props.task.name),r.a.createElement("td",{className:"text-center"},this.showStatusElement()),r.a.createElement("td",{className:"text-center"},r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.onEditTask},r.a.createElement("span",{className:"fa fa-pencil mr-5"})," Edit"),"\xa0",r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onDeleteItem},r.a.createElement("span",{className:"fa fa-trash mr-5"})," Delete")))}}]),t}(n.Component),f=Object(p.b)(function(e){return{}},function(e,t){return{onUpdateStatus:function(t){e(function(e){return{type:"UPDATE_STATUS_TASK",id:e}}(t))},onDeleteTask:function(t){e(function(e){return{type:"DELETE_TASK",id:e}}(t))},onCloseForm:function(){e({type:"CLOSE_FORM"})},onOpenForm:function(){e({type:"OPEN_FORM"})},onEditTask:function(t){e(function(e){return{type:"EDIT_TASK",task:e}}(t))}}})(E),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=e.target,n=t.name,r=t.value;"filterStatus"===n&&(r=parseInt(r)),a.setState(Object(d.a)({},n,r))},a.state={filterName:"",filterStatus:-1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.tasks,n=t.keyword,s=t.sort,o=this.state,l=o.filterName,c=o.filterStatus;return a&&a.length>0&&(l&&""!==l&&(a=a.filter(function(e){return-1!==e.name.toLowerCase().indexOf(l)})),a=a.filter(function(e){return-1===c?e:1===c?!0===e.status:!1===e.status}),n&&(a=a.filter(function(e){return-1!==e.name.toLowerCase().indexOf(n)})),s&&("name"===s.by?a.sort(function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?s.value:e.name.toLowerCase()<t.name.toLowerCase()?-s.value:0}):"status"===s.by&&a.sort(function(e,t){return e.status>t.status?-s.value:e.status<t.status?s.value:0})),e=a.map(function(e,t){return r.a.createElement(f,{key:e.id,task:e,index:t+1})})),r.a.createElement("div",{className:"row mt-15"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.a.createElement("table",{className:"table table-bordered table-hover table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-center"},"STT"),r.a.createElement("th",{className:"text-center"},"Name"),r.a.createElement("th",{className:"text-center"},"Status"),r.a.createElement("th",{className:"text-center"},"Action"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Filter by name",name:"filterName",value:l,onChange:this.onChange})),r.a.createElement("td",null,r.a.createElement("select",{className:"form-control",name:"filterStatus",value:c,onChange:this.onChange},r.a.createElement("option",{value:-1},"All"),r.a.createElement("option",{value:1},"Active"),r.a.createElement("option",{value:0},"Done"))),r.a.createElement("td",null)),e))))}}]),t}(n.Component),h=Object(p.b)(function(e){return{tasks:e.tasks,keyword:e.search,sort:e.sort}},null)(b),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onClearState=function(){a.setState({id:"",name:"",status:!0})},a.addOrUpdateTaskFromProps=function(e){e&&e.itemEditing&&null!=e.itemEditing.id?a.setState({id:e.itemEditing.id,name:e.itemEditing.name,status:e.itemEditing.status}):a.onClearState(),console.log(a.state)},a.onHandleChange=function(e){var t=e.target,n=t.name,r=t.value;"status"===n&&(r="true"===r),a.setState(Object(d.a)({},n,r))},a.onSaveTask=function(e){e.preventDefault(),console.log(a.state),a.props.onSaveTask(a.state),a.onCloseForm()},a.onCloseForm=function(){a.onClearState(),a.props.onCloseForm()},a.state={id:"",name:"",status:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){console.log("componentWillMount: ",this.props),this.addOrUpdateTaskFromProps(this.props)}},{key:"componentWillReceiveProps",value:function(e){console.log("componentWillMount: ",e),this.addOrUpdateTaskFromProps(e)}},{key:"render",value:function(){return this.props.isDisplayForm?r.a.createElement("div",{className:"panel panel-warning"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},""===this.state.id?"Add task":"Update task")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSaveTask},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Task's name :"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",required:!0,autoFocus:!0,value:this.state.name,onChange:this.onHandleChange})),r.a.createElement("label",null,"Status :"),r.a.createElement("select",{className:"form-control",name:"status",value:this.state.status,onChange:this.onHandleChange},r.a.createElement("option",{value:!0},"Active"),r.a.createElement("option",{value:!1},"Done")),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-warning"},r.a.createElement("span",{className:"fa fa-plus mr-5"})," Save"),"\xa0",r.a.createElement("button",{type:"button",onClick:this.onCloseForm,className:"btn btn-danger"},r.a.createElement("span",{className:"fa fa-close mr-5"})," Cancel"))))):""}}]),t}(n.Component),g=Object(p.b)(function(e){return{isDisplayForm:e.isDisplayForm,itemEditing:e.itemEditing}},function(e,t){return{onSaveTask:function(t){e(function(e){return{type:"SAVE_TASK",task:e}}(t))},onCloseForm:function(){e({type:"CLOSE_FORM"})}}})(v),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onHandleChange=function(e){a.setState({keyword:e.target.value})},a.onSearch=function(){a.props.onSearch(a.state.keyword)},a.state={keyword:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{name:"keyword",value:this.state.keyword,type:"text",className:"form-control",placeholder:"Enter keyword...",onChange:this.onHandleChange}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:this.onSearch},r.a.createElement("span",{className:"fa fa-search mr-5"})," Search"))))}}]),t}(n.Component),k=Object(p.b)(null,function(e,t){return{onSearch:function(t){e(function(e){return{type:"SEARCH",keyword:e}}(t))}}})(O),y=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onClick=function(e,t){var n={by:e,value:t};a.setState({sort:n}),a.props.onSort(n),localStorage.setItem("sortTasks",JSON.stringify(n))};var n=JSON.parse(localStorage.getItem("sortTasks"));return a.state=n?{sort:n}:{sort:{by:"name",value:1}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.sort;return console.log(JSON.stringify(this.state)),console.log(this.state),r.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"Sort \xa0",r.a.createElement("span",{className:"fa fa-caret-square-o-down ml-5"})),r.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},r.a.createElement("li",{className:"btn_sort",onClick:function(){return e.onClick("name",1)}},r.a.createElement("div",{className:"name"===t.by&&1===t.value?"sort_selected":""},r.a.createElement("span",{className:"fa fa-sort-alpha-asc pr-5"})," Name A-Z")),r.a.createElement("li",{className:"btn_sort",onClick:function(){return e.onClick("name",-1)}},r.a.createElement("div",{className:"name"===t.by&&-1===t.value?"sort_selected":""},r.a.createElement("span",{className:"fa fa-sort-alpha-desc pr-5"})," Name Z-A")),r.a.createElement("li",{role:"separator",className:"divider"}),r.a.createElement("li",{className:"btn_sort",onClick:function(){return e.onClick("status",1)}},r.a.createElement("div",{className:"status"===t.by&&1===t.value?"sort_selected":""},"Status active")),r.a.createElement("li",{className:"btn_sort",onClick:function(){return e.onClick("status",-1)}},r.a.createElement("div",{className:"status"===t.by&&-1===t.value?"sort_selected":""},"Status done")))))}}]),t}(n.Component),N=Object(p.b)(null,function(e,t){return{onSort:function(t){e(function(e){return{type:"SORT",sort:e}}(t))}}})(y),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row mt-15"},r.a.createElement(k,null),r.a.createElement(N,null))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onAddTask=function(){a.props.onOpenForm(),a.props.onClearItemEditing()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.isDisplayForm,t=e?r.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},r.a.createElement(g,null)):r.a.createElement("div",{className:""});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"Task management"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row"},t,r.a.createElement("div",{className:!0===e?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.onAddTask},r.a.createElement("span",{className:"fa fa-plus mr-5"}),"\xa0 Add task"),r.a.createElement(S,null),r.a.createElement(h,null))))}}]),t}(n.Component),w=Object(p.b)(function(e){return{isDisplayForm:e.isDisplayForm}},function(e,t){return{onToggleForm:function(){e({type:"TOGGLE_FORM"})},onOpenForm:function(){e({type:"OPEN_FORM"})},onClearItemEditing:function(){e({type:"CLEAR_ITEM_EDITING"})}}})(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(9),j=a(19),_=a(11),A=JSON.parse(localStorage.getItem("tasks")),F=A||[],D=function(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},I=function(e,t){var a=-1;return e.forEach(function(e,n){e.id===t&&(a=n)}),a};var x=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LIST_ALL":return a;case"SAVE_TASK":return t=function(e,t){var a={id:t.task.id,name:t.task.name,status:t.task.status};if(a.id&&""!==a.id){var n=I(e,a.id);-1!==n&&(e[n]=a)}else a.id=D(),e.push(a);return localStorage.setItem("tasks",JSON.stringify(e)),e}(a,n),Object(_.a)(t);case"UPDATE_STATUS_TASK":if(t=Object(_.a)(a),-1!==(e=I(t,n.id))){var r=Object(j.a)({},t[e]);r.status=!r.status,t[e]=r,localStorage.setItem("tasks",JSON.stringify(t))}return t;case"DELETE_TASK":return t=function(e,t){var a=Object(_.a)(e),n=I(a,t);return-1!==n&&(a.splice(n,1),localStorage.setItem("tasks",JSON.stringify(a))),a}(a,n.id);default:return a}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_FORM":return!e;case"OPEN_FORM":return!0;case"CLOSE_FORM":return!1;default:return e}},M={},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_TASK":return t.task;case"CLEAR_ITEM_EDITING":return M;default:return e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return console.log(t),t.keyword;default:return e}},J=JSON.parse(localStorage.getItem("sortTasks")),P=J||{by:"name",value:1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT":return console.log(JSON.stringify(t)),t.sort;default:return e}},H=Object(T.b)({tasks:x,isDisplayForm:L,itemEditing:R,search:U,sort:K}),G=Object(T.c)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(p.a,{store:G},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.fc1d37c4.chunk.js.map