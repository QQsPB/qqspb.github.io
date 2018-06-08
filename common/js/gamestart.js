
//GAME START
function Gamestart(gameId)
{
	var startFrame = document.getElementById("startFrame");
	if (startFrame == null)	{
		var obj = document.createElement('iframe');
		obj.setAttribute('id','startFrame');
		obj.style.border = '0px';
		obj.style.width = '0px';
		obj.style.height = '0px';
		obj.style.visibility = 'hidden';
		startFrame = document.body.appendChild(obj);
		}
		if(navigator.appName == "Netscape" || navigator.appName == "Opera") {
			startFrame.src=UrlChannel+"/Launcher/prelaunch_fire.html?gameId=" + gameId;
		}else{
			startFrame.src=UrlChannel+"/Launcher/prelaunch.html?gameId=" + gameId;
		}
}


function Gamestart_plus(gameId)
{

	var startFrame = document.getElementById("startFrame");
	if (startFrame == null)	{
		var obj = document.createElement('iframe');
		obj.setAttribute('id','startFrame');
		obj.style.border = '0px';
		obj.style.width = '0px';
		obj.style.height = '0px';
		obj.style.visibility = 'hidden';
		startFrame = document.body.appendChild(obj);
		}

		if(navigator.appName == "Netscape" || navigator.appName == "Opera") {
			startFrame.src=UrlChannel+"/Launcher/prelaunch_fire_plus.html?gameId=" + gameId;
		}else{

			startFrame.src=UrlChannel+"/Launcher/prelaunch_plus.html?gameId=" + gameId;
		}
}

//GAME START
function Gamestart2(gameId)
{

	var startFrame = document.getElementById("startFrame");
	if (startFrame == null)	{
		var obj = document.createElement('iframe');
		obj.setAttribute('id','startFrame');
		obj.style.border = '0px';
		obj.style.width = '0px';
		obj.style.height = '0px';
		obj.style.visibility = 'hidden';
		startFrame = document.body.appendChild(obj);
		}

		if(navigator.appName == "Netscape" || navigator.appName == "Opera") {

			startFrame.src=UrlChannel+"/Launcher/prelaunch_fire2.html?gameId=" + gameId;
		}else{

			startFrame.src=UrlChannel+"/Launcher/prelaunch2.html?gameId=" + gameId;
		}


}


function sendToActionScript(){
    if (document.getElementById("ka_avi") != undefined)
    {
	    document.getElementById("ka_avi").sendToFlash();
    }
}


//KRAZY ACES GAME START
function Gamestart3(gameId)
{


	var startFrame = document.getElementById("startFrame");

	if (startFrame == null)	{
		var obj = document.createElement('iframe');
		obj.setAttribute('id','startFrame');
		obj.style.border = '0px';
		obj.style.width = '0px';
		obj.style.height = '0px';
		obj.style.visibility = 'hidden';
		startFrame = document.body.appendChild(obj);
		}
		
		if(navigator.appName == "Netscape" || navigator.appName == "Opera") {
			//document.getElementById("download").style.display='none';
			startFrame.src=UrlChannel+"/Launcher/prelaunch_fire3.html?gameId=" + gameId;
		}else{
			//sendToActionScript();
			startFrame.src=UrlChannel+"/Launcher/prelaunch3.html?gameId=" + gameId;
		}

}


//KOS GAME START
function Gamestart4(gameId)
{
   // alert("Open Beta Coming Soon!");
    //return false;
	/*if('200911111800' >  sysDatetime()) {
			alert('Servers will open at 6PM PST, 11/10/09 !');
			return;
	}else{*/
	
	document.location.href = "https://portal.playrohan.com/Member/Register/Register.html";//  "http://forum.playrohan.com/forum/showthread.php?t=8048";
	return ;
	
    var startFrame = document.getElementById("startFrame");
		if (startFrame == null)	{
			var obj = document.createElement('iframe');
			obj.setAttribute('id','startFrame');
			obj.style.border = '0px';
			obj.style.width = '0px';
			obj.style.height = '0px';
			obj.style.visibility = 'hidden';
			startFrame = document.body.appendChild(obj);
		}
		if( navigator.appName == "Netscape") {

			startFrame.src=UrlChannel+"/Launcher/prelaunch_fire4.html?gameId=" + gameId;
		}else{

			startFrame.src=UrlChannel+"/Launcher/prelaunch4.html?gameId=" + gameId;
		}
	//}
}


function sysDatetime()
{
   var nowDate = new Date();
   var year = nowDate.getYear();
   var month = nowDate.getMonth() + 1;
   var date = nowDate.getDate();
   var hour = nowDate.getHours();
   var minute = nowDate.getMinutes();


   if((year + "").length < 4)                             //FireFox? ?? year? 1900? ????.

   {

    year = 1900 + year;
   }
   if((month + "").length < 2)                           //?? ??? ?? 1~9?? ?? ?? ???

                                                                  //0? ????. (? : 01?, 02? ...)
   {
    month = "0" + month;
   }
   if((date + "").length < 2)                             //?? ??
   {
    date = "0" + date;
   }
   if((hour + "").length < 2)                            //?? ??
   {
    hour = "0" + hour;
   }
   if((hour + "").length < 2)                            //?? ??
   {
    hour = "0" + hour;
   }

   var now = parseInt(year + "" + month + "" + date + "" + hour + "" + minute);

	return now;


}






//GAME START
function sysinfo()
{
    var SysFrame = document.getElementById("SysFrame");
	if (SysFrame == null)	{
		var obj = document.createElement('iframe');
		obj.setAttribute('id','SysFrame');
		obj.style.border = '0px';
		obj.style.width = '0px';
		obj.style.height = '0px';
		obj.style.visibility = 'hidden';
		SysFrame = document.body.appendChild(obj);
	}

	SysFrame.src=UrlHttp+"/download/SysCheck.html";

}






