(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports={stat:"Stat_stat__2r5-n",label:"Stat_label__3SLSV",value:"Stat_value__wk9xk"}},2:function(e,t,a){e.exports={table:"ExpensesTable_table__rDd_u",tr:"ExpensesTable_tr__1xcRu",td:"ExpensesTable_td__1S1pe",th:"ExpensesTable_th__23A_t",button:"ExpensesTable_button__OQyqv"}},23:function(e,t,a){e.exports={app:"App_app__2yKPq"}},26:function(e,t,a){e.exports={values:"Values_values__YnTKn"}},29:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(10),l=a.n(u),s=a(1),o=function(e){return e.expenses},c=function(e){return e.budget},m=function(e){return o(e).reduce((function(e,t){return e+t.amount}),0)},i=function(e){var t=m(e);return c(e)-t},p=a(23),b=a.n(p),E=a(11),d=a(12),f=a(14),_=a(13),v=a(15),h=a(7),g=a.n(h),x=(a(17),a(8)),N=a.n(x),S={ADD_EXPENSE:"ADD_EXPENSE",DELETE_EXPENSE:"DELETE_EXPENSE",SAVE_BUDGET:"SAVE_BUDGET"},y=new g.a,D=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(_.a)(t).call(this,e))).handleChange=function(e){a.setState({budget:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),Number(a.state.budget)>=0?(a.props.onSave(Number(a.state.budget)),y.confirm("Your changes have been successfully saved!")):y.alert("Enter the correct amount"),a.setState({budget:""})},a.state={budget:""},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.budget;return r.a.createElement("div",null,r.a.createElement("form",{className:N.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"budgetInput",className:N.a.label,style:{marginBottom:"16px"}},"Enter your total budget",r.a.createElement("input",{id:"budgetInput",type:"number",className:N.a.input,value:e,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:N.a.button},"Save")))}}]),t}(n.Component),O=Object(s.b)(null,(function(e){return{onSave:function(t){return e(function(e){return{type:S.SAVE_BUDGET,payload:e}}(t))}}}))(D),j=a(24),P=a(25),B=a.n(P),T=a(6),A=a.n(T),C=new g.a,F=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(_.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.amount;if(!a.props.budget)return C.warn("Operation is not possible. Your balance is 0$"),void a.setState({name:"",amount:""});if(""===n||r<=0)C.alert("Enter a correct number or fill in all the fields");else{var u={id:B.a.generate(),name:n,amount:Number(r)};C.confirm("Your changes have been successfully saved!"),a.props.onSave(u)}a.setState({name:"",amount:""})},a.state={name:"",amount:""},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.amount;return r.a.createElement("div",null,r.a.createElement("form",{className:A.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"expenseNameInput",className:A.a.label,style:{marginBottom:"16px"}},"Enter expense name",r.a.createElement("input",{id:"expenseAmountInput",type:"text",name:"name",className:A.a.input,value:t,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"expenseNameInput",className:A.a.label,style:{marginBottom:"16px"}},"Enter expense amount",r.a.createElement("input",{id:"expenseAmountInput",type:"number",name:"amount",className:A.a.input,value:a,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:A.a.button},"Add")))}}]),t}(n.Component),w=Object(s.b)((function(e){return{budget:c(e)}}),(function(e){return{onSave:function(t){return e(function(e){return{type:S.ADD_EXPENSE,payload:e}}(t))}}}))(F),I=a(2),k=a.n(I),X=new g.a,V=function(e){var t=e.items,a=e.onRemove;return r.a.createElement("table",{className:k.a.table},r.a.createElement("thead",null,r.a.createElement("tr",{className:k.a.tr},r.a.createElement("th",{className:k.a.th},"Expense name"),r.a.createElement("th",{className:k.a.th},"Expense amount"),r.a.createElement("th",{className:k.a.th}))),r.a.createElement("tbody",null,t.map((function(e){var t=e.id,n=e.name,u=e.amount;return r.a.createElement("tr",{key:t,className:k.a.tr},r.a.createElement("td",{className:k.a.td},n),r.a.createElement("td",{className:k.a.td},u),r.a.createElement("td",{className:k.a.td},r.a.createElement("button",{className:k.a.button,onClick:function(){X.confirm("Your expense have been successfully deleted!"),a(t)},type:"button"},"Delete")))}))))};V.defaultProps={items:[]};var L=V,R=Object(s.b)((function(e){return{items:o(e)}}),(function(e){return{onRemove:function(t){return e(function(e){return{type:S.DELETE_EXPENSE,payload:e}}(t))}}}))(L),Y=a(26),G=a.n(Y),U=a(16),J=a.n(U),q=function(e){var t=e.label,a=e.value,n={color:e.isPositive?"#388E3C":"#D32F2F"};return r.a.createElement("div",{className:J.a.stat,style:n},r.a.createElement("p",{className:J.a.label},t),r.a.createElement("p",{className:J.a.value},a,"\xa0$"))};q.defaultProps={isPositive:!1};var H=q,K=function(e){var t=e.expenses,a=e.budget,n=e.balance;return r.a.createElement("section",{className:G.a.values},r.a.createElement(H,{label:"Budget",value:a,isPositive:!0}),r.a.createElement(H,{label:"Expenses",value:t}),r.a.createElement(H,{label:"Balance",value:n,isPositive:n>=0}))},$=Object(s.b)((function(e){return{budget:c(e),expenses:m(e),balance:i(e)}}),null)(K),z=function(e){var t=e.expenses;return r.a.createElement("div",{className:b.a.app},r.a.createElement(O,null),r.a.createElement($,null),r.a.createElement(w,null),t.length>0&&r.a.createElement(R,null))};z.defaultProps={expenses:[]};var M=z,Q=Object(s.b)((function(e){return{expenses:o(e)}}),null)(M),W=a(4),Z=a(27),ee=a(28);var te=Object(W.combineReducers)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.SAVE_BUDGET:return t.payload;default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.ADD_EXPENSE:return[].concat(Object(ee.a)(e),[t.payload]);case S.DELETE_EXPENSE:return e.filter((function(e){return e.id!==t.payload}));default:return e}}}),ae=Object(W.createStore)(te,Object(Z.devToolsEnhancer)());a(48);l.a.render(r.a.createElement(s.a,{store:ae},r.a.createElement(Q,null)),document.getElementById("root"))},6:function(e,t,a){e.exports={button:"ExpenseForm_button__3JPBI",form:"ExpenseForm_form__2pvu7",label:"ExpenseForm_label__2NHCF",input:"ExpenseForm_input__80_IM"}},8:function(e,t,a){e.exports={button:"BudgetForm_button__no2p7",form:"BudgetForm_form__D5egR",label:"BudgetForm_label__2cAPC",input:"BudgetForm_input__1Hzl0"}}},[[29,1,2]]]);
//# sourceMappingURL=main.8ab10c63.chunk.js.map