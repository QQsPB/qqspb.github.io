<!--
var keyCode;
var tempX = 0
var tempY = 0
var mouseX = 0
var mouseY = 0
var base_x = 0;
var base_y = 0;
var previous_x = 0;
var previous_y = 0;
var selectedobj;
var dragapproved = false;
var zindex = 100;
/*	
function $(id)
{
	//return document.all?document.all[id]:document.getElementById(id)?document.getElementById(id):document.getElementsByName(id);
	var ret = new Array;
	var el  = null;
	var reg = /^<([a-z]+|h[1-5])>$/i;
	var reg2 = /^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
	
	for(var i=0; i < arguments.length; i++) {
		el = arguments[i];
		if (typeof el == "string") {
		
			if (reg.test(el)) {
				el = document.createElement(RegExp.$1);
			} else if (reg2.test(el)) {

				var p = { thead:'table', tbody:'table', tr:'tbody', td:'tr', dt:'dl', dd:'dl', li:'ul', legend:'fieldset' };
				var tag = RegExp.$1.toLowerCase();
				
				var parents = [];

 				for (var j = 0; tag = p[tag]; j++) {
 				
 					var o = document.createElement(tag);
 					if (j) o.appendChild(parents[j - 1]);
 					
 					parents.push(o);
 					
 				}
 				
 				if (!parents[0]) parents[0] = document.createElement('div');
 				
 				var first = parents[0];
				$Element(first).html(el);
				
				for (el = first.firstChild; el; el = el.nextSibling)
					if (el.nodeType == 1) ret[ret.length] = el;
				
			} else {
				el = document.getElementById(el);
			}
		}
		if (el) ret[ret.length] = el;
	}
	
	return ret.length>1?ret:(ret[0] || null);
}
*/

// Core object
var yk = new Object();
yk.util = {
	_isIE : function()
	{
		if(navigator.userAgent.indexOf('MSIE') > 0) return true;
		return false;
	},

	_isOpera5 : function()
	{
		if(navigator.userAgent.indexOf('Opera5') > 0) return true;
		return false;
	},

	_isNS4 : function()
	{
		if(navigator.userAgent.indexOf('NS4') > 0) return true;
		return false;
	},

	_isFI : function()
	{
		if(navigator.userAgent.indexOf('Firefox') > 0) return true;
		return false;
	},

	_isCH : function()
	{
		if(navigator.userAgent.indexOf('Chrome') > 0) return true;
		return false;
	},

	_isVersion : function(){
		var b_version;
		var version;
		var _leng = 0;
		if(yk.util._isIE()){
			_leng = window.navigator.userAgent.indexOf('MSIE');
			b_version = window.navigator.userAgent; 
			version = b_version.substr(_leng+5, 1 );
		}else{
			b_version=window.navigator.appVersion; 
			version=parseFloat(b_version); 
		}
		return version;
	},
	_isLogin : function(xml)
	{
		var login = xml.getElementsByTagName("login");
		
		if(!login || login[0].childNodes[0].nodeValue != '1')
		{
			document.location = '/member/login/?returnURL='+encodeURI(document.location);
			return false;
		}
		
		return true;
	},
	
	_getError : function(xmlDoc)
	{
		var error = xmlDoc.getElementsByTagName("error");
		var result = new Array();
		
		if(!error) return;
		
		for(var i=0; i< error[0].childNodes.length; i++)
		{
			result[i] = error[0].childNodes[i].childNodes[0].nodeValue;
		}
		
		return result;
	},
	
	_error : function(xmlDoc, objId)
	{
		if(!$(objId))
		{
			return;
		}
		
		var errorArea = $(objId);
		var error = xmlDoc.getElementsByTagName("error");
		
		if(!errorArea || !error || !error[0].childNodes.length)
		{
			return;
		}
		
		var errorField = errorArea.getElementsByTagName("fieldset");
		var html = '';
		
		/*if(errorField)
		{
			obj = errorField;
		}
		else
		{*/
			//divTodoErrorArea.style.display = 'none';
			html = '<fieldset class="error">';
			html += '<legend>&nbsp;에 러&nbsp;</legend>';
		//}
		
		for(var i=0; i< error[0].childNodes.length; i++)
		{
			html += '<div id="message">'+error[0].childNodes[i].childNodes[0].nodeValue+'</div>';
		}
		
		if(!errorField)
		{
			html += '</fieldset>';
		}
		
		if(html) errorArea.innerHTML = html;
		//obj.style.display = '';
	},
	
	_addListener : function(eventTarget, eventType, eventListener)
	{
		if(eventTarget.addEventListener)
		{
			eventTarget.addEventListener(eventType, eventListener, false);
		}
		else if(eventTarget.attachEvent)
		{
			eventTarget.attachEvent("on"+eventType, eventListener);
		}
	},
	
	_removeListener : function(eventTarget, eventType, eventListener)
	{
		if(eventTarget.removeEventListener)
		{
			eventTarget.removeEventListener(eventType, eventListener, false);
		}
		else if(eventTarget.detachEvent)
		{
			eventTarget.detachEvent("on"+eventType, eventListener);
		}
	},
	
	_windowWidth : function()
	{
		if(window.innerWidth)
		{
			return window.innerWidth;
		}
		else
		{
			if(yk.util._isIE() && document.documentElement.clientWidth)
			{
				return document.documentElement.clientWidth;
			}
			
			return document.body.clientWidth;
		}
	},
	
	_windowHeight : function()
	{
		if(window.innerWidth)
		{
			return window.innerHeight;
		}
		else
		{
			if(yk.util._isIE() && document.documentElement.clientHeight)
			{
				return document.documentElement.clientHeight;
			}
			
			return document.body.clientHeight;
		}
	},
	
	_scrollTop : function()
	{
		if(document.documentElement.scrollTop)
		{
			return document.documentElement.scrollTop;
		}
		else if(document.body.scrollTop)
		{
			return document.body.scrollTop;
		}
		else if(self.pageYOffset)
		{
			return self.pageYOffset;
		}
		else
		{
			return 0;
		}
	},
	
	_scrollLeft : function()
	{
		if(document.documentElement.scrollLeft)
		{
			return document.documentElement.scrollLeft;
		}
		else if(document.body.scrollLeft)
		{
			return document.body.scrollLeft;
		}
		else if(self.pageXOffset)
		{
			return self.pageXOffset;
		}
		else
		{
			return 0;
		}
	},
	
	today : function(date, dateOnly)
	{
		var dt = new Date();
		var ndt = yk.util.strToDate(date);
		
		if(dt.getFullYear() == ndt.getFullYear() &&
		   dt.getMonth() == ndt.getMonth() &&
		   dt.getDate() == ndt.getDate())
		{
			return '<b>' + date.substr(11,5) + '</b>';
		}
		
		var result = date.substr(2,8);
		result = result.replace('-', '/');
		result = result.replace('-', '/');
		
		if(dateOnly = 'md')
		{
			result = result.substr(3);
		}
		
		return result;
	},
	
	strToDate : function(stringDate)
	{
		var dt = new Date();
		
		dt.setYear(stringDate.substr(0, 4));
		dt.setMonth(parseInt(stringDate.substr(5, 2), 10) - 1);
		dt.setDate(parseInt(stringDate.substr(8, 2), 10));
		dt.setHours(parseInt(stringDate.substr(11, 2), 10));
		dt.setMinutes(parseInt(stringDate.substr(14, 2), 10));
		
		return dt;
	},
	
	isEmail : function(email)
	{
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		if(filter.test(email))
		{
			return true;
		}
		
		return false;
	},
	
	isNumeric : function(x)
	{
		for(var i=0; i < x.length; i++ )
		{
			if ((x.charAt(i) < '0' || x.charAt(i) > '9' ) && x.charAt(i) != '.' &&  x.charAt(i) != '-')
			{
				return false;
			}
		}
		return true;
	},
	
	debug : function()
	{
		var src = $('debugInfo');
		
		yk.layer.alert(src.innerHTML, 850, 400, 'html', true);
	},
		
	css : function (_obj, _key, _val)
	{
		if(yk.util._isIE)
		{
			_obj.style.setAttribute(_key, _val);
		}
		else
		{
			_obj.setAttribute(_key, _val);
		}
	},
		
	show : function(_id)
	{
		var showid = $(_id)
		showid.style.display="block";
	},
		
	hide : function(id)
	{
		var showid = $(_id);
		showid.style.display="none";
	},
	
	submit : function(frm)
	{
		var frmid = null;
		try{
			frmid = $(frm);
		}catch (e){
			alert(e);
		}

		if(typeof frmid == "object" ){
			frmid = frm;
		}else{
			return false; 
		}
		
		return f_sumit(frmid);
	},
	__Synch : function(){
		var parameter = {
				url : S_domain.__PortalHttps + "/Member/Integration/Synch_step1.html"
				,width : 580
				,height : 630
				,scroll : 0
				,resize : 0
				}
		yk.util.__winopen_obj(parameter);
	},
		
	__winopen_obj : function(_obj){
		if (_obj != ""){
			var parameter = "menubar=0, location=0, status=0";
			try{
				if(_obj.url == ""){_obj.url = "about:blank"}
				if(_obj.name == ""){_obj.name = "windows"}
				if(_obj.width == ""){parameter += ", width=400"}else{parameter += ", width=" + _obj.width}
				if(_obj.height == ""){parameter += ", height=400"}else{parameter += ", height=" + _obj.height}
				if(_obj.left == ""){parameter += ", left=100"}else{parameter += ", left=" + _obj.left}
				if(_obj.top == ""){parameter += ", top=100"}else{parameter += ", top=" + _obj.top}
				if(_obj.scroll == ""){parameter += ", scrollbars=0"}else{parameter += ", scrollbars=" + _obj.scroll}
				if(_obj.resize == ""){parameter += ", resizeable=0"}else{parameter += ", resizeable=" + _obj.resize}
			}catch(e){
				debug.__debug("js_util.__winopen [error] : " + e);
				return;
			}
			var w = window.open(_obj.url, _obj.name, parameter);
		}
	},		
	getElement : function()
	{
		
	}
};



//////////////////////////////////////////////////////////
// ajax
//////////////////////////////////////////////////////////
var xmlHttp;											// AJAX XML OBJECT

function getXmlHttpObject()
{
	var tmpXmlHttp = null;
	
	try
	{
		// Firefox, Opera 8.0+, Safari
		tmpXmlHttp = new XMLHttpRequest();
	}
	catch (e)
	{
		// Internet Explorer
		try
		{
			tmpXmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			tmpXmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	
	return tmpXmlHttp;
}

//ajax send
function xmlSend(url, call_fnc){
	xmlHttp = getXmlHttpObject();
	xmlHttp.open("POST", url, true);
	xmlHttp.onreadystatechange = eval(call_fnc);
	xmlHttp.send(null);
}

yk.util.e = function(e) { return e; };
function setKeyCode(e)
{
	if(yk.util._isIE())
	{
		if(!e) var e = window.event;
		keyCode = e.keyCode;
	}
	else
	{
		keyCode = e.which;
	}
}

function getMouseXY(e)
{
  if (yk.util._isIE()) {
    tempX = event.clientX + yk.util._scrollLeft();
    tempY = event.clientY + yk.util._scrollTop();
  } else {
    tempX = e.pageX;
    tempY = e.pageY;
  } 
  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;}  
	mouseX = tempX;
	mouseY = tempY;
  return;
}

yk.util._addListener(document, 'keydown', setKeyCode);
yk.util._addListener(document, 'keyup', setKeyCode);
yk.util._addListener(document, 'click', getMouseXY);

//drag
function drag_move(){
	if(dragapproved){
		var x = 0;
		var y = 0;
  		if (yk.util._isIE()) {
			x = event.clientX;
			y = event.clientY;
		} else {
			x = e.pageX;
			y = e.pageY;
  		}
		selectedobj.style.left = base_x + x - previous_x;
		selectedobj.style.top  = base_y + y - previous_y;
		return false;
	}
}
function start_drag(drag_id){
	var x = 0;
	var y = 0;
	if (yk.util._isIE()) {
		x = event.clientX;
		y = event.clientY;
	} else {
		x = e.pageX;
		y = e.pageY;
	}
	selectedobj = document.getElementById(drag_id);
	selectedobj.style.zIndex = zindex++;
	base_x = parseInt(selectedobj.style.left);
	base_y = parseInt(selectedobj.style.top);
	previous_x = x
	previous_y = y;
	dragapproved = true;
	selectedobj.onmousemove = drag_move;
	selectedobj.onmouseup = drag_release;
}
function drag_release(){
	dragapproved=false;
}
//-->