(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),s=n(8),a=n.n(s),r=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),s(e),a(e)}))}),c=n(3),u=n(4),l=n(2),d=n(6),m=n(5),b=n(0),p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("h1",{children:"CGU Todo list"})}}]),n}(i.a.Component),h=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).onSubmit=o.onSubmit.bind(Object(l.a)(o)),o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.refs.itemName.focus()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.refs.itemName.value;t&&(this.props.addItem({newItemValue:t}),this.refs.form.reset())}},{key:"render",value:function(){return Object(b.jsxs)("form",{ref:"form",onSubmit:this.onSubmit,className:"form-inline",children:[Object(b.jsx)("input",{type:"text",ref:"itemName",className:"form-control",placeholder:"add a new todo..."}),Object(b.jsx)("button",{type:"submit",className:"btn btn-default",children:"Add"})]})}}]),n}(i.a.Component),j=(n(9),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).onClickClose=o.onClickClose.bind(Object(l.a)(o)),o.onClickDone=o.onClickDone.bind(Object(l.a)(o)),o}return Object(u.a)(n,[{key:"onClickClose",value:function(){var e=parseInt(this.props.index);this.props.removeItem(e)}},{key:"onClickDone",value:function(){var e=parseInt(this.props.index);this.props.TodoDone(e)}},{key:"render",value:function(){var e=this.props.item.done?"done":"undone";return Object(b.jsx)("li",{className:"list-group-item ",children:Object(b.jsxs)("div",{className:e,children:[Object(b.jsx)("button",{type:"button",onClick:this.onClickDone,children:"\u221a"}),this.props.item.value,Object(b.jsx)("button",{type:"button",className:"close",onClick:this.onClickClose,children:"\xd7"})]})})}}]),n}(i.a.Component)),v=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t,n){return Object(b.jsx)(j,{item:t,index:n,removeItem:e.props.removeItem,TodoDone:e.props.TodoDone},n)}));return Object(b.jsxs)("ul",{className:"list-group",children:[" ",t," "]})}}]),n}(i.a.Component),f=[];f.push({index:1,value:"learn react",done:!1}),f.push({index:2,value:"Go shopping",done:!0}),f.push({index:3,value:"buy flowers",done:!0});var O=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).state={todoItems:f},o.addItem=o.addItem.bind(Object(l.a)(o)),o.removeItem=o.removeItem.bind(Object(l.a)(o)),o.TodoDone=o.TodoDone.bind(Object(l.a)(o)),o}return Object(u.a)(n,[{key:"addItem",value:function(e){f.unshift({index:f.length+1,value:e.newItemValue,done:!1}),this.setState({todoItems:f})}},{key:"removeItem",value:function(e){f.splice(e,1),this.setState({todoItems:f})}},{key:"TodoDone",value:function(e){var t=f[e];f.splice(e,1),t.done=!t.done,t.done?f.push(t):f.unshift(t),this.setState({todoItems:f})}},{key:"render",value:function(){return Object(b.jsxs)("div",{id:"main",children:[Object(b.jsx)(p,{}),Object(b.jsx)(v,{items:this.props.initItems,removeItem:this.removeItem,TodoDone:this.TodoDone}),Object(b.jsx)(h,{addItem:this.addItem})]})}}]),n}(i.a.Component);a.a.render(Object(b.jsx)(O,{initItems:f}),document.getElementById("root")),r()},9:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.928ca96e.chunk.js.map