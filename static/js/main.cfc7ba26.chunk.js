(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/badge-header.973f5842.svg"},22:function(e,a,t){e.exports=t.p+"static/media/logo.0026b862.svg"},26:function(e,a,t){e.exports=t(45)},32:function(e,a,t){},33:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),o=(t(31),t(32),t(11)),s=t(10),i=t(2),m=t(3),u=t(5),d=t(4),p=t(6),f=(t(33),t(22)),h=t.n(f),b=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(o.b,{className:"Navbar__brand",to:"/"},r.a.createElement("img",{className:"Navbar__brand-logo",src:h.a,alt:"logo"}),r.a.createElement("span",{className:"font-weight-light"},"Platzi"),r.a.createElement("span",{className:"font-weight-bold"},"conf"))))}}]),a}(r.a.Component);var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),e.children)},v=t(14),E=t(25),N=(t(42),t(12)),j=t.n(N),w=(t(43),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:j.a,alt:"Logo de la conferencia"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement("img",{className:"Badge__avatar",src:this.props.avatarUrl,alt:"Avatar"}),r.a.createElement("h1",null,this.props.firstName," ",r.a.createElement("br",null)," ",this.props.lastName)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,this.props.jobTitle),r.a.createElement("div",null,"@",this.props.twitter)),r.a.createElement("div",{className:"Badge__footer"},"#lol"))}}]),a}(r.a.Component)),y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(e){return console.log("el boton fue pulsado")},t.handleSubmit=function(e){e.preventDefault(),console.log("cambiando el form"),console.log(t.props.formValues)},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("h1",null,"New Attendant"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Firts Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"firtsName",value:this.props.formValues.firtsName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"lastName",value:this.props.formValues.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"email",name:"email",value:this.props.formValues.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Title"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"jobTitle",value:this.props.formValues.jobTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"twitter",value:this.props.formValues.twitter})),r.a.createElement("button",{onClick:this.handleClick,className:"btn btn-primary"},"Save")))}}]),a}(r.a.Component),O=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={form:{firtsName:"",lastName:"",email:"",jobTitle:"",twitter:""}},t.handleChange=function(e){t.setState({form:Object(E.a)({},t.state.form,Object(v.a)({},e.target.name,e.target.value))})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{src:j.a,alt:"",className:"img-fluid"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(w,{firstName:this.state.form.firtsName,lastName:this.state.form.lastName,jobTitle:this.state.form.jobTitle,twitter:this.state.form.twitter,email:this.state.form.email,avatarUrl:"https://secure.gravatar.com/avatar/0b990bbaadb4a89506dc7ea5716d89c0"})),r.a.createElement("div",{className:"col-6"},r.a.createElement(y,{onChange:this.handleChange,formValues:this.state.form})))))}}]),a}(r.a.Component),_=(t(44),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{className:"list-unstyled"},this.props.badges.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.firstName,e.lastName))}))}}]),a}(r.a.Component)),C=function(e){function a(e){var t;return Object(i.a)(this,a),t=Object(u.a)(this,Object(d.a)(a).call(this,e)),console.log("1 constructor"),t.state={data:[]},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("3 componentDidMount"),this.timeuotId=setTimeout(function(){e.setState({data:[{id:"2de30c42-9deb-40fc-a41f-05e62b5939a7",firstName:"Freda",lastName:"Grady",email:"Leann_Berge@gmail.com",jobTitle:"Legacy Brand Director",twitter:"FredaGrady22221-7573",avatarUrl:"https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"},{id:"d00d3614-101a-44ca-b6c2-0be075aeed3d",firstName:"Major",lastName:"Rodriguez",email:"Ilene66@hotmail.com",jobTitle:"Human Research Architect",twitter:"ajorRodriguez61545",avatarUrl:"https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"},{id:"63c03386-33a2-4512-9ac1-354ad7bec5e9",firstName:"Daphney",lastName:"Torphy",email:"Ron61@hotmail.com",jobTitle:"National Markets Officer",twitter:"DaphneyTorphy96105",avatarUrl:"https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"}]})},3e3)}},{key:"componentDidUpdate",value:function(e,a){console.log("5. componentDidUpdate"),console.log({props:e,prevState:a}),console.log({props:this.props,state:this.state})}},{key:"componentWillUnmount",value:function(){console.log("6.componentWillUnmount"),clearTimeout(this.timeuotId)}},{key:"render",value:function(){return console.log("2 render"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:j.a,alt:"Conf Logo"})))),r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(o.b,{to:"/badges/new",className:"btn btn-primary"},"New Badges")),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement(_,{badges:this.state.data})))))}}]),a}(r.a.Component);var B=function(){return r.a.createElement("h1",null,"404: Not Found")};var k=function(){return r.a.createElement(o.a,null,r.a.createElement(g,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/Badges",component:C}),r.a.createElement(s.a,{exact:!0,path:"/Badges/new",component:O}),r.a.createElement(s.a,{component:B}))))},T=document.getElementById("app");c.a.render(r.a.createElement(k,null),T)}},[[26,1,2]]]);
//# sourceMappingURL=main.cfc7ba26.chunk.js.map