/*! For license information please see main.1997bdb0.chunk.js.LICENSE.txt */
(this["webpackJsonpagoge-client"]=this["webpackJsonpagoge-client"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t){},40:function(e,t){},42:function(e,t){},52:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(21),r=n.n(c),o=(n(52),n(24)),i=n(46),l=n(12),u=n(13),d=n(15),j=n(14),p=n(4),b=n(16),h=n.n(b),m="https://sprachoase.herokuapp.com",O=(n(38),n(71),n(39),n(40),n(8)),f=n(1),x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{class:"hm-1",children:Object(f.jsx)("div",{className:"home_content_area",children:Object(f.jsx)("header",{class:"bg",children:Object(f.jsxs)("div",{class:"right flex",children:[Object(f.jsx)(O.b,{to:"/Lessons",children:Object(f.jsx)("button",{className:"home_btn1",children:"Student Portal"})}),Object(f.jsx)(O.b,{to:"/AboutMe",children:Object(f.jsx)("button",{className:"home_btn2",children:"About Me"})}),Object(f.jsx)(O.b,{to:"/Travels",children:Object(f.jsx)("button",{className:"home_btn2",children:"Travels"})}),Object(f.jsx)(O.b,{to:"/ContactMe",children:Object(f.jsx)("button",{className:"home_btn3",children:"Contact Me"})})]})})})})})}}]),n}(s.Component),g=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.lessons;return Object(f.jsxs)("div",{className:"lessons-page",children:[Object(f.jsx)("h1",{children:"Student Portal"}),Object(f.jsx)("h4",{children:"Lessons"}),e.map((function(e){return Object(f.jsx)(O.b,{to:"/lessons/".concat(e._id),children:Object(f.jsx)("div",{children:e.name})},e._id)}))]})}}]),n}(s.Component);var v=function(e){var t=e.onSubmit,n=e.error;return Object(f.jsxs)("form",{onSubmit:t,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputUsername",children:"Username"}),Object(f.jsx)("input",{type:"username",className:"form-control",id:"InputUsername",name:"username"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputPassword",children:"Password"}),Object(f.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),n&&Object(f.jsx)("p",{style:{color:"red"},children:n.error})]})},y=n(83),S=n(84),w=n.p+"static/media/logo.85679cf1.png";var N=function(e){return e.user,e.onLogout,Object(f.jsxs)(y.a,{className:"blacky",expand:"lg",children:[Object(f.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)("img",{className:"logo",src:w,alt:"logo"}),Object(f.jsx)(y.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(S.a,{className:"mr-auto",children:[Object(f.jsx)(O.b,{to:"/",children:" Homepage"}),Object(f.jsx)(O.b,{to:"/lessons",children:"Student Portal"}),Object(f.jsx)(O.b,{to:"/addlessons",children:"Add Lesson"}),e.user?Object(f.jsx)("button",{onClick:e.onLogout,type:"button",class:"btn btn-light",children:"Logout"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O.b,{to:"/login",children:"Log In"}),Object(f.jsx)(O.b,{to:"/signup",children:"Sign Up"})]})]})})]})};var C=function(e){var t=e.onSubmit;return Object(f.jsxs)("form",{onSubmit:t,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputUsername",children:"Username"}),Object(f.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"username"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputPassword",children:"Password"}),Object(f.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})},L=(s.Component,function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.props.onAdd,children:[Object(f.jsx)("input",{name:"title",type:"text",placeholder:"Enter Lesson"}),Object(f.jsx)("input",{name:"description",type:"text",placeholder:"Enter description"}),Object(f.jsx)("input",{name:"imageUrl",type:"file",accept:"image/jpeg, image/jpg"}),Object(f.jsx)("button",{type:"submit",children:"Submit"})]})}}]),n}(s.Component)),U=n(42),I=n.n(U),_=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={user:null,error:null,fetchingUser:!0,lessons:[]},e.handleSignUp=function(t){t.preventDefault();var n=t.target,s=n.username,a=n.password,c={username:s.value,password:a.value};h.a.post("".concat(m,"/api/signup"),c,{withCredentials:!0}).then((function(t){e.setState({user:t.data},(function(){e.props.history.push("/")}))})).catch((function(){console.log("SignUp failed")}))},e.handleLogIn=function(t){t.preventDefault();var n=t.target,s=n.username,a=n.password,c={username:s.value,password:a.value};h.a.post("".concat(m,"/api/login"),c,{withCredentials:!0}).then((function(t){e.setState({user:t.data,error:null},(function(){e.props.history.push("/lessons")}))})).catch((function(e){console.log("Something went wrong",e)}))},e.handleLogout=function(){h.a.post("".concat(m,"/api/logout"),{},{withCredentials:!0}).then((function(){e.setState({user:null},(function(){e.props.history.push("/")}))}))},e.handleSubmit=function(t){t.preventDefault();var n=t.target.name.value,s=t.target.description.value,a=t.target.imageUrl.files[0],c=new FormData;c.append("imageUrl",a),h.a.post("".concat(m,"/api/upload"),c).then((function(e){return h.a.post("".concat(m,"/api/create"),{name:n,description:s,completed:!1,image:e.data.image},{withCredentials:!0})})).then((function(t){e.setState({lessons:[t.data].concat(Object(i.a)(e.state.lessons))},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Create failed",e)}))},e.handleAddLessons=function(t,n){t.preventDefault();e.state.user;var s=t.target,a=s.title,c=s.description,r={title:a.value,description:c.value,imgUrl:n};h.a.post("".concat(m,"/api/addlessons"),r).then((function(t){e.props.history.push("/profile")})).catch((function(e){}))},e.handleEditLessons=function(t){h.a.patch("".concat(m,"/api/lessons/").concat(t._id),{name:t.name,description:t.description,completed:t.completed},{withCredentials:!0}).then((function(){var n=e.state.lessons.map((function(e){return t._id===e._id&&(e.name=t.name,e.description=t.description),e}));e.setState({lessons:n},(function(){e.props.history.push("/lessons")}))})).catch((function(e){console.log("Edit failed",e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(m,"/api/lessons"),{withCredentials:!0}).then((function(t){e.setState({lessons:t.data})})).catch((function(t){e.setState({error:t.data})})),h.a.get("".concat(m,"/api/user"),{withCredentials:!0}).then((function(t){e.setState({user:t.data})})).catch((function(t){e.setState({error:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.lessons;t.error,t.user;return Object(f.jsxs)("div",{children:[Object(f.jsx)(N,{onLogout:this.handleLogout,user:this.state.user}),Object(f.jsx)("div",{className:"pages",children:Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{exact:!0,path:"/",render:function(e){return Object(f.jsx)(x,Object(o.a)({},e))}}),Object(f.jsx)(p.a,{path:"/signup",render:function(t){return Object(f.jsx)(C,Object(o.a)({onSubmit:e.handleSignUp},t))}}),Object(f.jsx)(p.a,{path:"/login",render:function(t){return Object(f.jsx)(v,Object(o.a)({onSubmit:e.handleLogIn},t))}}),Object(f.jsx)(p.a,{path:"/lessons",render:function(){return Object(f.jsx)(g,{lessons:n})}}),Object(f.jsx)(p.a,{path:"/addlessons/",render:function(){return Object(f.jsx)(L,{onAdd:e.handleSubmit})}}),Object(f.jsx)(p.a,{component:I.a})]})})]})}}]),n}(s.Component),k=Object(p.f)(_);r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(O.a,{children:Object(f.jsx)(k,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.1997bdb0.chunk.js.map