var React = require('react');
var ReactDom = require('react-dom');
// var ReactDOMServer = require('react-dom/server');
// ReactDOMServer.renderToStaticMarkup(ReactElement);


//React.createElement(type,props,children)  //创建节点
//ReactDom.render(reactElement,document.getElementById('react-application'));   //挂载节点
// var h1 = React.createElement('h1',{className:'header',key:'header'},'This is react');
// var p = React.createElement('p',{className:'content',key:'content'},'And that\'s is how it works.');
// var reactFragment=[h1,p];
// var section = React.createElement('section',{className:'container'},reactFragment);
// ReactDom.render(section,document.getElementById('react-application'));



//React.createFactory(type)  //批量制造同一元素
// var createListItemElement = React.createFactory('li');
// var listItemElement1=createListItemElement({className:'item-1',key:'item-1'},'item-1');
// var listItemElement2=createListItemElement({className:'item-2',key:'item-2'},'item-2');
// var listItemElement3=createListItemElement({className:'item-3',key:'item-3'},'item-3');
// var reactFragment=[listItemElement1,listItemElement2,listItemElement3];
// var listOfItems=React.createElement('ul',{className:'list-of-item'},reactFragment);
// reactDom.render(listOfItems,document.getElementById('react-application'));



//React.DOM.type   //创建元素
// var listItemElement1=React.DOM.li({className:'item-1',key:'item-1'},'item-1');
// var listItemElement2=React.DOM.li({className:'item-2',key:'item-2'},'item-2');
// var listItemElement3=React.DOM.li({className:'item-3',key:'item-3'},'item-3');
// var reactFragment=[listItemElement1,listItemElement2,listItemElement3];
// var listOfItems=React.DOM.ul({className:'list-of-item'},reactFragment);
// reactDom.render(listOfItems,document.getElementById('react-application'));



//JSX语法
// var listOfItems=<ul className='list-of-item'>
// 					<li className='item-1'>1</li>
// 					<li className='item-2'>2</li>
// 					<li className='item-3'>3</li>
// 				</ul>;
// ReactDom.render(listOfItems,document.getElementById('react-application'));



var noState=React.reactClass({//创建无状态组件
	render:function(){
		return React.createElement('h1',{className:'header'},'React Compotent');
	}
});

var haveState=React.reactClass({//创建条件渲染组件
	render:function(){
		var elementState={
			isHidden:true
		};
		if(elementState.isHidden){
			return null;
		}
		return React.createElement('h1',{className:'header'},this.props.header);
	}
});

var protoState=React.reactClass({//
	if(this.props.isHidden){//用this.props处理要渲染的数据
		return null;
	}
	return React.createElement('h1',{className:'header'},this.props.header);
});

var protoState=React.reactClass({
	
});

var reactComponentElement=React.createElement(ReactClass);
var reactComponent=ReactDom.render(reactComponentElement,document.getElementById('react-application'));


var st=document.getElementById('sougou_bottom');
st.style.display='block';