
//page login
function Fun_Submit()
{
	var frm = document.login;
	if (Fun_TextNull_Check(frm.userid,"Please check your User ID.")){
		return false;
	}else if (Fun_TextNull_Check(frm.userpwd,"Please check your password.")){
		return false;
	}else{
		frm.target="ifrm_1";
		frm.action = UrlHttps+"/login/login_ok.html";
		return true;
	}
}


function Fun_Submit_Main(){
	var frm = document.login;
	if (Fun_TextNull_Check(frm.userid,"Please check your User ID.")){
		return false;
	}else if (Fun_TextNull_Check(frm.userpwd,"Please check your password.")){
		return false;
	}else{
		frm.target="ifrm_1";
		frm.action = UrlHttps+"/login/login_ok.html";
		return true;
	}
}

function Fun_Verify_Check(){
	 if (Fsel_EmailCheck() == false) {		
			alert(MemberArray[11]);
		return ;
	 }
	
	 var strResponseURL='Verification_process.html';
	 var httpObj = new Ajax.Request(
			            strResponseURL,{
			                method:'post',
			                parameters:Form.serialize('verification'),
			                onSuccess:function(xhr){
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_Verify_Check_Result(responseObj);
			            	},onFailure:Fun_Verify_Check_Fail}       
			        ); 
}

function Fun_Verify_Check_Result(data){
	var code,Ret;
	code=data.results[0].RetValue;
	Ret=data.results[0].RetCode;
	if(code=="Y"){
		alert(Verifimsg[3]);
		document.verification.reset();
	}else if(code=="N"){
		if (Ret=="3"){
			alert(Verifimsg[0]);
			document.verification.reset();
			document.verification.email.focus();
		}else if (Ret=="4"){
			alert(Verifimsg[1]);
			document.verification.reset();
		}else if (Ret=="5"){
			if(confirm(Verifimsg[2])!= 0)
			{
				Fun_Web_UrlMenu('01013');
			}
			else
			{
			document.verification.reset();
			document.verification.email.focus();
			}

		
		
		}
		else
		{
		alert("Error"+Ret);
		
		}
		
	
	}
}

function Fun_Verify_Check_Fail()
{
	alert('Error');
	document.verification.reset();
	return;	
}

