//Flash Write
function flashWrite(url,w,h,id,bg,vars,win){

	var flashStr=
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='"+w+"' height='"+h+"' id='"+id+"' align='middle'>"+
	"<param name='allowScriptAccess' value='always' />"+
	"<param name='movie' value='"+url+"' />"+
	"<param name='FlashVars' value='"+vars+"' />"+
	"<param name='wmode' value='"+win+"' />"+
	"<param name='menu' value='false' />"+
	"<param name='quality' value='high' />"+
	"<param name='bgcolor' value='"+bg+"' />"+
	"<embed src='"+url+"' FlashVars='"+vars+"' wmode='"+win+"' menu='false' quality='high' bgcolor='"+bg+"' width='"+w+"' height='"+h+"' name='"+id+"' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />"+
	"</object>";

	document.write(flashStr);
}

function callFlash(flashURL,flashVALUE, flashWIDTH, flashHEIGHT)
{
	document.writeln ('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" WIDTH='+flashWIDTH+' HEIGHT='+flashHEIGHT+' %>');
	document.writeln ('<PARAM NAME=movie VALUE="'+flashURL+'">');
	document.writeln ('<PARAM NAME=FlashVars VALUE="'+flashVALUE+'">');
	document.writeln ('<PARAM NAME=wmode VALUE=transparent>');
	document.writeln ('<PARAM NAME=loop VALUE=true>');
	document.writeln ('<PARAM NAME=quality VALUE=high>');
	document.writeln ('<PARAM NAME=base VALUE=.>');
	document.writeln ('<PARAM NAME=allowScriptAccess VALUE=always>');
	document.writeln ('<EMBED base="."  src='+flashURL+' flashvars='+flashVALUE+' allowScriptAccess=always loop=true wmode=transparent quality=high swLiveConnect=FALSE WIDTH='+flashWIDTH+' HEIGHT='+flashHEIGHT+' TYPE="application/x-shockwave-flash" PLUGINSPAGE="https://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED>');
	document.writeln ('</OBJECT>');
}

// flash 
function callFlashById(flashURL,flashVALUE, flashWIDTH, flashHEIGHT, flashId )
{
	document.writeln ('<OBJECT name='+flashId+' id='+flashId+' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,22,0" WIDTH='+flashWIDTH+' HEIGHT='+flashHEIGHT+' %>');
	document.writeln ('<PARAM NAME=movie VALUE="'+flashURL+'">');
	document.writeln ('<PARAM NAME=FlashVars VALUE="'+flashVALUE+'">');
	//document.writeln ('<PARAM NAME=wmode VALUE=transparent>');
	document.writeln ('<PARAM NAME=loop VALUE=true>');
	document.writeln ('<PARAM NAME=quality VALUE=high>');
	document.writeln ('<PARAM NAME=base VALUE=.>');
	document.writeln ('<PARAM NAME=allowScriptAccess VALUE="sameDomain">');
	document.writeln ('<EMBED name='+flashId+'  base="."  src='+flashURL+' flashvars='+flashVALUE+' allowScriptAccess="sameDomain" loop=true wmode=transparent quality=high swLiveConnect=FALSE WIDTH='+flashWIDTH+' HEIGHT='+flashHEIGHT+' TYPE="application/x-shockwave-flash" PLUGINSPAGE="https://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED>');
	document.writeln ('</OBJECT>');
}



function callFlashTrans(flashURL,flashVALUE, flashWIDTH, flashHEIGHT)
{
	document.writeln ('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" WIDTH='+flashWIDTH+' HEIGHT='+flashHEIGHT+' %>');
	document.writeln ('<PARAM NAME=movie VALUE="'+flashURL+'">');
	document.writeln ('<PARAM NAME=FlashVars VALUE="'+flashVALUE+'">');
	document.writeln ('<PARAM NAME=wmode VALUE=transparent>');
	document.writeln ('<PARAM NAME=loop VALUE=true>');
	document.writeln ('<PARAM NAME=quality VALUE=high>');
	document.writeln ('<PARAM NAME=base VALUE=.>');
	document.writeln ('<PARAM NAME=allowScriptAccess VALUE=always>');
	document.writeln ('<EMBED base="."  src='+flashURL+' flashvars='+flashVALUE+' allowScriptAccess=always loop=true wmode=transparent quality=high swLiveConnect=FALSE WIDTH='+flashWIDTH+' HEIGHT='+flashHEIGHT+' TYPE="application/x-shockwave-flash" PLUGINSPAGE="https://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED>');
	document.writeln ('</OBJECT>');
}

// Tab menu
function tab1Change(tab, layer, obj){
	var tabObj = document.getElementById(tab).getElementsByTagName("a");
	var layerObj = document.getElementById(layer);
	var selectIdx;
	var checkIdx=0;
	
	for(var i=0; i< tabObj.length; i++){
		if(obj == tabObj[i]){
			selectIdx = i;
			tabObj[i].className = "on";
		}else{
			tabObj[i].className = "";
		}
	}
	for(var i=0; i< layerObj.childNodes.length; i++){
		if(layerObj.childNodes[i].tagName == "DIV"){
			if(checkIdx==selectIdx){
				layerObj.childNodes[i].style.display = "block";
			}else{
				layerObj.childNodes[i].style.display = "none";
			}
			checkIdx++;
		}
	}
}

// 입력시 텍스트 사라짐
function clearText(thefield){
if (thefield.defaultValue==thefield.value)
	thefield.value = "";
	thefield.style.background="#b1b1b1 none";
}


// Input 클릭시 기본값 사라짐
// [사용예] onfocus="clearText(this)"
var sel;
function getView(obj){
	obj.className = "on";
	if(sel != null) sel.className = "";
	sel = obj;
}

// PNG - ie6
function setPng24(obj) { 
    obj.width=obj.height=1; 
    obj.className=obj.className.replace(/\bpng24\b/i,''); 
    obj.style.filter = 
    "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');" 
    return ''; 
} 

//Layer
var Nnum = 1;// ???Number
var imgname = "td";// TD ID
var imgname2 = "img";// TD ID
var Bigimg = 2;
 
function prev(){
	if(Nnum != 1){
		Nnum = Nnum - 1;
		var Snum = 1; //??
		var Enum = Nnum + 3;  //?
		Bigimg = Bigimg - 1;
 
		var obj = document.getElementById(imgname+Enum);
		obj.style.display = "none";
 
		for(Snum = Nnum; Snum < Enum; Snum ++ ){
			var obj = document.getElementById(imgname+Snum);
			obj.style.display = "block";
			obj.className="items";
			var obj2 = document.getElementById(imgname2+Snum);
			obj2.style.width = 57+ "px";
			obj2.style.height = 27+ "px";
		}
 
			var obj = document.getElementById(imgname+Bigimg);
			obj.className="item_view";
			var obj2 = document.getElementById(imgname2+Bigimg);
			obj2.style.width = 92+ "px";
			obj2.style.height = 43+ "px";
 
	}else{
	//alert("?? ??? ???.");
	}
}
 
 
 
function next(cnt){
	if(cnt > 3){
		if(Nnum != cnt-2){
			Bigimg = Bigimg + 1;
			var obj = document.getElementById(imgname+Nnum);
			obj.style.display = "none";
			
			Nnum = Nnum + 1;
			var Snum = 1; //??
			var Enum = Nnum + 3;  //?
 
 
			for(Snum = Nnum; Snum < Enum; Snum ++ ){
				
 
				var obj = document.getElementById(imgname+Snum);
				obj.style.display = "block";
				obj.className="items";
				var obj2 = document.getElementById(imgname2+Snum);
				obj2.style.width = 57+ "px";
				obj2.style.height = 27+ "px";
			}
				var obj = document.getElementById(imgname+Bigimg);
				obj.className="item_view";
				var obj2 = document.getElementById(imgname2+Bigimg);
				obj2.style.width = 92+ "px";
				obj2.style.height = 43+ "px";
				
				
		}else{
	//	alert("??? ???? ????.");
		}
	}
}




function makeWin(url, winname, width, height, scrolltype){
   xposition=0; yposition=0;
   if (parseInt(navigator.appVersion) >= 4){
      xposition = (screen.width - width) / 2;
      yposition = (screen.height - height) / 2;
   }
   args = "width=" + width + "," + "height=" + height + "," + "location=0," + "menubar=0," + "resizable=0,"
         + "scrollbars=" + scrolltype + "," + "status=0," + "titlebar=0," + "toolbar=0," + "hotkeys=0,"
		 + "screenx=" + xposition + ","  //NN Only
		 + "screeny=" + yposition + ","  //NN Only
		 + "left=" + xposition + ","     //IE Only
		 + "top=" + yposition;           //IE Only

   var newWin=window.open(url,winname,args)
   newWin.focus();
}


function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

//input not enter
function None_Submit()
{

if (event.keyCode ==13) { window.event.returnValue=false;}

}

//top global menu
function Fun_Web_UrlMenu(menuNo){
	//alert(menuNo);
	var go = window.top.document.location;
	if (menuNo == "00000") {go.href = UrlHttp;}
	//account
	if (menuNo == "01010") {go.href = UrlHttps + "/Member/Member.html";}
	if (menuNo == "01011") {go.href = UrlHttps + "/Member/Member_Edit_Step1.html";}
	if (menuNo == "01012") {go.href = UrlHttps + "/Member/Agree.html";}
	if (menuNo == "01013") {go.href = UrlHttps + "/Member/IdPwd.html";}
	if (menuNo == "01014") {go.href = UrlHttps + "/Member/Member_Finish.html";}
	if (menuNo == "01015") {go.href = UrlHttps + "/Member/Member_Finish_cp.html";}

	//login-logout
	if (menuNo == "03010") {go.href = UrlHttps + "/Login/Login.html";}
	if (menuNo == "03011") {go.href = UrlHttps + "/Login/Logout.html";}
	if (menuNo == "03012") {go.href = UrlHttps + "/Login/Logout.html?retcode=login";}
	if (menuNo == "03012") {go.href = UrlHttps + "/Member/Register/Register.html";}

	//cash
	if (menuNo == "06011") {go.href = UrlHttps + "/Point/Add_RPs.html";}
	if (menuNo == "06012") {go.href = UrlHttps + "/Point/";}
	if (menuNo == "06013") {go.href = UrlHttps + "/Point/";}
	if (menuNo == "06014") {go.href = UrlHttps + "/Point/";}
}

function Fun_Seal_UrlMenu(menuNo){
	
	//alert(menuNo);
	var go = window.top.document.location;
	if (menuNo == "00000") {go.href = UrlSeal;}
	if (menuNo == "01010") {go.href = UrlSeal + "/background/seal_online.html";}
	if (menuNo == "01011") {go.href = UrlSeal + "/background/seal_story.html";}
	if (menuNo == "01012") {go.href = UrlSeal + "/background/launch.html";}
	if (menuNo == "01031") {go.href = UrlSeal + "/background/launch.html";}
	if (menuNo == "01032") {go.href = UrlSeal + "/background/basic_controls.html";}
	if (menuNo == "01033") {go.href = UrlSeal + "/background/servival_guide.html";}
	if (menuNo == "01034") {go.href = UrlSeal + "/background/classes.html";}
	if (menuNo == "01035") {go.href = UrlSeal + "/background/items.html";}
	if (menuNo == "01036") {go.href = UrlSeal + "/background/monsters.html";}
	if (menuNo == "01037") {go.href = UrlSeal + "/background/quests.html";}


	//support
	if (menuNo == "02010") {go.href = UrlSeal + "/download/download.html";}
	if (menuNo == "02011") {go.href = UrlSeal + "/download/install_guide.html";}
	if (menuNo == "02012") {go.href = UrlSeal + "/download/down_movies.html";}
	if (menuNo == "02013") {go.href = UrlSeal + "/download/down_wallpapers.html";}
	if (menuNo == "02014") {go.href = UrlSeal + "/download/down_calendars.html";}
	if (menuNo == "02015") {go.href = UrlSeal + "/download/down_screenshot.html";}
	if (menuNo == "02016") {go.href = UrlSeal + "/download/paper-art.html";}
	if (menuNo == "02017") {go.href = UrlSeal + "/download/seal_jump.html";}

	//login-logout
	if (menuNo == "03010") {go.href = UrlSeal + "/BBS/news_latest.html";}
	if (menuNo == "03021") {go.href = UrlSeal + "/BBS/announce.html";}
	if (menuNo == "03022") {go.href = UrlSeal + "/BBS/updates.html";}
	if (menuNo == "03023") {go.href = UrlSeal + "/BBS/event.html";}
	if (menuNo == "03011") {go.href = UrlSoforum;}

	// game list
	//alert(UrlSealShop);
	if (menuNo == "04010") {go.href = UrlSealShop ;}
	if (menuNo == "04011") {go.href = UrlSealShop + "/item_mall_main.html";}
	if (menuNo == "04012") {go.href = UrlSealShop + "/item_list.html";}
	if (menuNo == "04013") {go.href = UrlSealShop + "/shopping_guide.html";}
	if (menuNo == "04014") {go.href = UrlSealShop + "/Login/Login.html";}
	if (menuNo == "04015") {go.href = UrlSealShop + "/redeem_code.html";}
	if (menuNo == "04016") {go.href = UrlSealShop + "/seal_friend.html";}
	if (menuNo == "04017") {go.href = UrlSealShop + "/gift_box.html";}
	if (menuNo == "04018") {go.href = UrlSealShop + "/shopping_cart.html";}
	if (menuNo == "04019") {go.href = UrlSealShop + "/item_purchased.html";}

	if (menuNo == "04020") {go.href = UrlSealShop + "/grabbit_start.html";}
	if (menuNo == "04021") {go.href = UrlSealShop + "/grabbit_tokens.html";}
	if (menuNo == "04022") {go.href = UrlSealShop + "/grabbit_grab.html";}
	if (menuNo == "04023") {go.href = UrlSealShop + "/grabbit_guide.html";}

	if (menuNo == "05010") {go.href = UrlSeal + "/sitemap/sitemap.html";}




	// Seal main flash banner (main_banner.swf)
	if (menuNo == "09011") {go.href = UrlSoforum+'/viewtopic.php?f=22&t=17442';}
				//http://soforum.playrohan.com/viewtopic.php?f=22&t=17442
	if (menuNo == "09012") {go.href = UrlSeal+'';}
							//http://sealonline.playrohan.com
	if (menuNo == "09013") {go.href = UrlSoforum+'/viewtopic.php?f=22&t=17306';}
				//http://soforum.playrohan.com/viewtopic.php?f=22&t=17306
	if (menuNo == "09015") {go.href = UrlSoforum+'/viewtopic.php?f=21&t=16912&start=0&st=0&sk=t&sd=a';}
				//http://soforum.playrohan.com/viewtopic.php?f=21&t=16912&start=0&st=0&sk=t&sd=a
	if (menuNo == "09016") {go.href = UrlSealShop+'/item_list.html?nPage=8&sort_key=3&category=4&search_key=';}
							//https://soshop.playrohan.com/item_list.html?nPage=8&sort_key=3&category=4&search_key=
	if (menuNo == "09017") {go.href = UrlSoforum+'/viewtopic.php?f=24&t=16512';}
				//http://soforum.v/viewtopic.php?f=24&t=16512


	// Seal main flash right banner (right_banner.swf)
	if (menuNo == "09021") {go.href = Urlrohan+'';}
							//http://www.playrohan.com
	if (menuNo == "09022") {go.href = UrlSting+'';}
							//http://kos.playrohan.com
	if (menuNo == "09023") {go.href = UrlCraypas+'';}
							//http://krazyaces.playrohan.com

	if (menuNo == "99999") {go.href = UrlHttp;}

	// Seal Ranking
	if (menuNo == "11010" || menuNo == "11011") {go.href = UrlSeal + "/ranking/ranking.html";}
	if (menuNo == "11011_1") {go.href = UrlSeal + "/ranking/ranking.html?RankingType=2";}
	
	if (menuNo == "11012") {go.href = UrlSeal + "/ranking/Guild_Ranking.html";}
	if (menuNo == "11012_1") {go.href = UrlSeal + "/ranking/Guild_DMR_Ranking.html";}
	if (menuNo == "11012_2") {go.href = UrlSeal + "/ranking/Guild_PGR_Ranking.html";}
	
	if (menuNo == "11013") {go.href = UrlSeal + "/ranking/Monster_Survival.html";}

	//cash
	if (menuNo == "06011") {go.href = UrlHttps + "/Point/Add_RPs.html";}
	if (menuNo == "06012") {go.href = UrlHttps + "/Point/";}
	if (menuNo == "06013") {go.href = UrlHttps + "/Point/";}
	if (menuNo == "06014") {go.href = UrlHttps + "/Point/";}
}


function Wallpaper_Down(menuNo){
	
	var go = window.top.document.location;
	if (menuNo == "0701") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_07_1024_768.zip";}
	if (menuNo == "0702") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_07_1280_1024.zip";}
	if (menuNo == "0703") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_07_1600_1200.zip";}

	if (menuNo == "0801") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_08_1024_768.zip";}
	if (menuNo == "0802") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_08_1280_1024.zip";}
	if (menuNo == "0803") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_08_1600_1200.zip";}


	if (menuNo == "0901") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_09_1024_768.zip";}
	if (menuNo == "0902") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_09_1280_1024.zip";}
	if (menuNo == "0903") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_09_1600_1200.zip";}

	if (menuNo == "1001") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_10_1024_768.zip";}
	if (menuNo == "1002") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_10_1280_1024.zip";}
	if (menuNo == "1003") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_10_1600_1200.zip";}


	if (menuNo == "1101") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_11_1024_768.zip";}
	if (menuNo == "1102") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_11_1280_1024.zip";}
	if (menuNo == "1103") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_11_1600_1200.zip";}

	if (menuNo == "1201") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_12_1024_768.zip";}
	if (menuNo == "1202") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_12_1280_1024.zip";}
	if (menuNo == "1203") {go.href = UrlSting + "/image/kos_info/wallpaper/kos_wall_12_1600_1200.zip";}


}
function Fun_TextNull_Check(a,b)
{
	if(a.value == "")
	{
		alert(b);
		a.focus();

		
		return true;
	}
	else
	{
		
		return false;
	}
}

function logincheck()
{
	alert('Please Log in.');
}

var __mouse_pos_x = 0;
var __mouse_pos_y = 0;
document.onmousemove=mtrack;
function mtrack(e) {
	var scrolledValue = getScrollXY();
 
	if ( typeof(window.screenLeft) == 'number' ) {
		__mouse_pos_x = event.screenX - window.screenLeft + scrolledValue[0];
		__mouse_pos_y = event.screenY - window.screenTop + scrolledValue[1];
	} else {
		if (typeof(event) != 'undefined'){
			__mouse_pos_x = event.clientX;
			__mouse_pos_y = event.clientY;
		} else {
			__mouse_pos_x = e.pageX;
			__mouse_pos_y = e.pageY;
		}
	}
}


function getScrollXY() {
	var scrOfX = 0, scrOfY = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
		//Netscape compliant
		scrOfY = window.pageYOffset;
		scrOfX = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		//DOM compliant
		scrOfY = document.body.scrollTop;
		scrOfX = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		//IE6 standards compliant mode
		scrOfY = document.documentElement.scrollTop;
		scrOfX = document.documentElement.scrollLeft;
	}
	return [ scrOfX, scrOfY ];
}



/* length check */
function CheckLength(input,len) 
  {
     var byteLength = 0;
     for (var inx = 0; inx < input.length; inx++) {
       var oneChar = escape(input.charAt(inx));
       if ( oneChar.length == 1 ) {
     byteLength ++;
    } else if (oneChar.indexOf("%u") != -1) {
         byteLength += 2;
    } else if (oneChar.indexOf("%") != -1) {
          byteLength += oneChar.length/3;
    }
   }     
   if(byteLength <= len) return true;
   else false;  
  } 


//special character check
function intcheckTF(sval){
	var i = 0;
	for(m=0;m<sval.length;m++){
		if((sval.charCodeAt(m)==37)){i++;}
		if((sval.charCodeAt(m)==39)){i++;}
		if((sval.charCodeAt(m)==59)){i++;}
		if((sval.charCodeAt(m)==61)){i++;}
	}
	if ( i > 0 ){	return true	;}
	else{	return false	;}

}



/* gif, jpg,zip check */
function validImageExt(filename) {
	filename = filename.toLowerCase();
	if(filename.match(".gif")!=null || filename.match(".jpg")!=null || filename.match(".zip")!=null) return true;
	else return false;
}


function go_news()
{
	document.fsearch.submit();
}


function CharInfo()
{
	makeWin('/clan/CharInfo.html', 'viewcharPop', 500, 710);
}



function CharInfo()
{
	makeWin(UrlSting+'/clan/CharInfo.html', 'viewcharPop', 500, 710);
}
function memoBox()
{
	makeWin(UrlSting+'/community/received_msg.html', 'viewcharPop2', 550, 393);
}

function viewImgPop(seq)
{
	makeWin(UrlThis+'/downloads/screenshotspop.html?seq='+seq, 'viewImgPop', 548, 475);
}

//###################################################################
// ) <iframe name="content" width="100%" onload="iframeResize(this)"></iframe>
//###################################################################

function iframeResize(ifrm) 
{
	if(ifrm) {
		try {
			//ifrm.style.height = eval(ifrm.name).document.body.scrollHeight;
			ifrm.setAttribute("height", eval(ifrm.name).document.body.scrollHeight);
		} catch(ex) {}
		document.body.scrollTop = 0;
	} else {
		var obj  = parent.document.getElementsByTagName("iframe");
		for(var i=0;i<obj.length;i++) {
			if(obj[i].name == window.name) {
			try {
				//obj[i].style.height = document.body.scrollHeight;
				obj[i].setAttribute("height", document.body.scrollHeight);
			} catch(ex) {}
			}
		}
	}
}



	
/*Cafe Plus*/
function f_cafeplus(){
	newURL2 = "http://cafeplus.playrohan.com/Popguide/seal-item-info.html";
	window.open(newURL2, 'cafeplus', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=900,height=700,top=100,left=100');
}