function Fun_Member_Regist(){
	////id check
	var userid = document.getElementById("userid").value;
	var reuserid = document.getElementById("reuserid").value;
	if (userid=="" || userid.length < 6){
		alert(MemberArray[0]);
		document.getElementById("userid").value="";
		document.getElementById("userid").focus();
		return ;
	}
	if (Fsel_IDCheck(userid) == false){
		alert(MemberArray[1]);
		document.getElementById("userid").value="";
		document.getElementById("userid").focus();
		return ;
	}
	if (userid != reuserid){
		alert(MemberArray[26]);
		return;
	}
		
	var IDOverCheck = Fsel_IDOverCheck();
	if (IDOverCheck == -3) {
		alert(MemberArray[2]);	return ;
	}
	if (IDOverCheck == -2) {
		alert(MemberArray[2]);	return ;
	}

	/// nick name check
	var usernick = document.getElementById("usernick").value;
	var reusernick = document.getElementById("reusernick").value;

	if (usernick=="" || usernick.length < 6){
		alert(MemberArray[4]);
		document.getElementById("usernick").value="";
		document.getElementById("usernick").focus();
		return ;
	}
	if (Fsel_NickCheck(usernick) == false) {
		alert(MemberArray[5]);
		document.getElementById("usernick").value="";
		document.getElementById("usernick").focus();
		return ;
	}
	if (usernick != reusernick){
		alert(MemberArray[27]);	return;
	}
	var NICKOverCheck = Fsel_NickOverCheck();
	if (NICKOverCheck == -3) {
		alert(MemberArray[6]);	return ;
	}
	if (NICKOverCheck == -2) {
		alert(MemberArray[7]);	return ;
	}
	// password check
	var pass = document.getElementById("password").value;
	var pass2 = document.getElementById("repassword").value;
	if (pass=="" || pass.length < 6){
		alert(MemberArray[8]);
		document.getElementById("pass").value="";
		document.getElementById("pass").focus();
		return ;
	}
	if (Fsel_PasswordCheck() == false) {
		alert(MemberArray[9]);	return ;
	}
	if (pass != pass2){
		alert(MemberArray[10]);		return ;
	}

   //Fsel_EmailCheck
    if (Fsel_EmailCheck() == false) {
		alert(MemberArray[11]);		return ;
	 }

	var EmailOverCheck = Fsel_EmailOverCheck();
	if (EmailOverCheck == -3) {
		alert(MemberArray[11]);	return ;
	}
	if (EmailOverCheck == -2) {
		alert(MemberArray[11]);	return ;
	}

	 var email = document.getElementById("email").value;
	 var reemail = document.getElementById("reemail").value;
	if (email != reemail){
		alert(MemberArray[28]);	return;
	}

   ///name
	var NameCheck = Fsel_NameCheck();
	if (NameCheck == -1) {
		alert(MemberArray[13]);	
		document.getElementById("first_name").value="";
		document.getElementById("first_name").focus();
		return ;
	}
	if (NameCheck == -3) {
		alert(MemberArray[14]);	
		document.getElementById("last_name").value="";
		document.getElementById("last_name").focus();
		return ;
	}
    //gender
	/*if (Fsel_GenderCheck() == false) {
		alert(MemberArray[15] );		return ;
	}*/
	//birthday
	var Val_BirthCheck =  Fsel_BirthCheck();
	if (Val_BirthCheck == -1 || Val_BirthCheck == -2 || Val_BirthCheck == -3 || Val_BirthCheck == -4) {
		alert(MemberArray[16]);		return ;
	}
    //country
	/*if (Fsel_CountryCheck() == false) {
		alert(MemberArray[17]);		
		return ;
	}*/
	//country
	/*if (Fsel_StateCheck() == false) {
		alert(MemberArray[18]);		return ;
	}*/
	var question = document.getElementById("question"); 
	var questionvalue = question.options[question.selectedIndex].value;;
	if (questionvalue == "") {
		document.getElementById("question").focus();
		alert('Please select a Security Question from the drop down.\n');
		return ;
	}else{
		questionvalue = parseInt(questionvalue);
	}
	if (questionvalue < 1 || questionvalue > 8 ) {
		document.getElementById("question").focus();
		alert('Please select a Security Question from the drop down.\n');
		return ;
	}
	if (document.getElementById("answer").value=="") {
		alert('Please type in an answer for your Security Question you have selected.\n');
		return ;
	}
	/*
	// reference game check - sung add
	var myRGame_Check = false;
	var reggameN = document.getElementByName("rgame");

	for (i=0; i<reggames.length; i++) {
		if (reggameN[i].checked)	{
				myRGame_Check = true;
		}
	}
	if (!myRGame_Check)	{
		alert('Please select the game you are interested in\n');
		return ;
	}
	*/
	
	//verify check
	if (Fsel_VeriCheck() == false) {
		alert(MemberArray[19]);		return ;
	}
	if (document.getElementById("agree").checked == false) {
		alert(MemberArray[20]);		return ;
	}
	 var strResponseURL='Member_Process.html';
	 var httpObj = new Ajax.Request (
			            strResponseURL,{
			                method:'post',
			                parameters:Form.serialize('registmem'),
			                onSuccess:function(xhr) {
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_Member_Regist_Result(responseObj);
			            	},
			                onFailure:Fun_Member_Regist_Fail
			            }
			        ); 
}


function Fun_Member_Regist_Result(data){
	var code=data.results[0].RetValue;
	if(code=="Y"){
		alert(MemberArray[22]);
		if (document.getElementById("cpCheck").value == 1) {
			Fun_Web_UrlMenu('01015');
		}else{
			Fun_Web_UrlMenu('01014');
		}
	}else if(code=="N"){
		alert(MemberArray[23]+':'+data.results[0].RetCode);
		document.registmem.reset();
	}
}

function Fun_Member_Regist_Fail(){
	alert('Error');
}

// id exists check
function Fun_ID_Exist_check(){
	var userid = document.getElementById("userid").value;
	if (userid=="" || userid.length < 6){
		alert(MemberArray[0]);
		document.getElementById("userid").value="";
		document.getElementById("userid").focus();
		return;
	}
	if (Fsel_IDCheck(userid) == false) {
		alert(MemberArray[1]);
		document.getElementById("userid").value="";
		document.getElementById("userid").focus();
		return;
	}
	var IDOverCheck = Fsel_IDOverCheck();
	if (IDOverCheck == -3){
		alert(MemberArray[2]);	return ;
	}
	if (IDOverCheck == -2){
		alert(MemberArray[2]);	return ;
	}
	if (IDOverCheck == -1){
		document.getElementById("reuserid").value = userid;
		alert(MemberArray[3]);
	}
}

//// nickname exists check
function Fun_NICK_Exist_check(){
	var usernick = document.getElementById("usernick").value;
	if (usernick=="" || usernick.length < 6){
		alert(MemberArray[4]);
		document.getElementById("usernick").value="";
		document.getElementById("usernick").focus();
		return;
	}
	if (Fsel_NickCheck(usernick) == false) {
		alert(MemberArray[5]);
		document.getElementById("usernick").value="";
		document.getElementById("usernick").focus();
		return;
	}

	var NICKOverCheck = Fsel_NickOverCheck();
	if (NICKOverCheck == -3) {
		alert(MemberArray[6]);	return ;
	}
	if (NICKOverCheck == -2) {
		alert(MemberArray[7]);	return ;
	}
	if (NICKOverCheck == -1) {
		document.getElementById("usernick").value = usernick;		alert(MemberArray[7]);	
	}
}

// User ID conditions
function Fsel_IDCheck(checkval) {
	var regex = /^([a-z]){1}([a-z0-9]){5,16}$/
	if (checkval.search(regex) == -1) {
		return false;
	}else{
		return true;
	}
}

// User ID over check
function Fsel_IDOverCheck() {
	var responsecheck = xmlhttpPost('/member/check_userid.html', 'userid=' + escape(document.getElementById("userid").value));
	if (responsecheck == -3) {
		document.getElementById("userid").focus(); return -3;
	}else if (responsecheck == -2) {
		document.getElementById("userid").focus();	return -2;
	}else {
		return -1;
	}
}

function Fsel_NickCheck(checkval) {
	var regex = /^([a-zA-Z]){1}([a-zA-Z0-9]){3,16}$/
	if (checkval.search(regex) == -1) {
		return false;
	}else{
		return true;
	}
}


// User nickname over check
function Fsel_NickOverCheck() {
	var responsecheck = xmlhttpPost('/member/check_nickname.html', 'usernick=' + escape(document.getElementById("usernick").value));
	if (responsecheck == -3) {
		document.getElementById("usernick").focus();	return -3;
	}else if (responsecheck == -2) {
		document.getElementById("usernick").focus();	return -2;
	}else {
		return -1;
	}
}


// Password conditions
function Fsel_PasswordCheck() {
	var regex = /^([a-zA-Z0-9]){6,16}$/
	if (document.getElementById("password").value.search(regex) == -1) {
		document.getElementById("password").focus();
		return false;
	}else if (document.getElementById("password").value == document.getElementById("userid").value) {
		document.getElementById("password").focus();
		return false;
	}else {
		return true;
	}
}

//// nickname exists check
function Fun_Email_Exist_check(){
	
	var email = document.getElementById("email").value;
	if (email=="" || email.length < 10){
		alert(MemberArray[11]);
		document.getElementById("email").value="";
		document.getElementById("email").focus();
		return;
	}
	if (Fsel_EmailCheck(email) == false) {
		alert(MemberArray[11]);
		document.getElementById("email").value="";
		document.getElementById("email").focus();
		return;
	}
	var EmailOverCheck = Fsel_EmailOverCheck();
	if (EmailOverCheck == -3){
		alert(MemberArray[37]);	return ;
	}
	if (EmailOverCheck == -2){
		alert(MemberArray[37]);	return ;
	}
	if (EmailOverCheck == -1){
		document.getElementById("reemail").value = email;
		alert(MemberArray[12]);	
	}
}
//Email conditions
function Fsel_EmailCheck() {
	var regex = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i
	if (document.getElementById("email").value.search(regex) == -1){
		document.getElementById("email").focus();
		return false;
	}else{
		return true;
	}
}


// Email over check
function Fsel_EmailOverCheck(){
	var responsecheck = xmlhttpPost('check_email.html', 'email=' + escape(document.getElementById("email").value));
	if (responsecheck == -3) {
		document.getElementById("email").focus();
		return -3;
	}else{
		return -1;
	}
}

//// Name check
function Fsel_NameCheck() {
	if (document.getElementById("first_name").value == "" ) {
		document.getElementById("first_name").focus();	return -1;
	}else if (document.getElementById("last_name").value == "" ) {
		document.getElementById("last_name").focus();	return -3;
	}else {
		return 0;
	}
}


// Gender check
function Fsel_GenderCheck() {
	if (document.getElementById("gender").checked == false && document.getElementById("gender2").checked == false) {
		return false;
	}else {
		return true;
	}
}

// Birthday check
function Fsel_BirthCheck() {
	var month = document.getElementById("month");
	var monthvalue = month.options[month.selectedIndex].value;
	if (monthvalue == "") {
		document.getElementById("month").focus();		return -1;
	}else {
		monthvalue = Number(monthvalue);
	}

	var day = document.getElementById("day");
	var dayvalue = day.options[day.selectedIndex].value;
	if (dayvalue == "") {
		document.getElementById("day").focus();	return -2;
	}else{
		dayvalue = Number(dayvalue);
	}
	
	var year = document.getElementById("year");
	var yearvalue = year.options[year.selectedIndex].value;
	if (yearvalue == "") {
		document.getElementById("year").focus();	return -3;
	}else {
		yearvalue = Number(yearvalue);
	}
	if (Age(dayvalue, monthvalue, yearvalue) == false) {
		document.getElementById("year").focus();	return -4;
	}
}

//age 
function Age(bday, bmo, byr) {
	bday=parseInt(bday);
	bmo=(parseInt(bmo)-1);
	byr=parseInt(byr);
	var byr;
	var age;
	var now = new Date();
	tday=now.getDate();
	tmo=(now.getMonth());
	tyr=(now.getFullYear());
	
	if((tmo > bmo)||(tmo==bmo & tday>=bday)) {
		age=byr;
	}else{
		age=byr+1;
	}
	
	if ((tyr-age) < 13) {
		return false;
	}else{
		return true;
	}
}


// Country check
function Fsel_CountryCheck() {
	var country = document.getElementById("country");
	var countryvalue = country.options[country.selectedIndex].value;
	if (countryvalue == "") {
		document.getElementById("country").focus();		return false;
	}else {
		countryvalue = parseInt(countryvalue);
	}

	if (countryvalue < 0 || countryvalue > 300 ) {
		document.getElementById("country").focus();		return false;
	}else {
		return true;
	}
}

// State check
function Fsel_StateCheck() {
	var state = document.getElementById("state");
	var statevalue = state.options[state.selectedIndex].value;
	if (statevalue == "") {
		document.getElementById("state").focus();	return false;
	}else {
		statevalue = parseInt(statevalue);
	}

	if (statevalue < 0 || statevalue > 50) {
		document.getElementById("state").focus();	return false;
	}else {
		return true;
	}
}

///veritify api
function Fsel_VeriCheck() {
	if (document.getElementById("recaptcha_response_field").value == "") {
		document.getElementById("recaptcha_response_field").focus();		return false;
	}else {
		return true;
	}
}

// ajax 
function xmlhttpPost(strURL, query) {
	var randnum = Math.random();
	randnum = randnum * 10000;

	var xmlHttpReq = false;
	var self = this;
	var responsetext;
	// Mozilla/Safari
	if (window.XMLHttpRequest) {
		self.xmlHttpReq = new XMLHttpRequest();
	}else if (window.ActiveXObject) { // IE
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}
	self.xmlHttpReq.open('GET', strURL + "?rand=" + randnum + "&" +  query, false);
	self.xmlHttpReq.send(null);
	if (self.xmlHttpReq.status == 200) {
		var responsetext = self.xmlHttpReq.responseText;
		if (responsetext == "true") {
				return -1;
		}else if (responsetext == "filtered") {
				return -2;
		}else {
				return -3;
		}
	}else {
		return false;
	}
}


function Fun_Verifi_Regist(){
	////id check
	var code = document.getElementById("vericode").value;
	if (code=="" || code.length != 32){
		alert(MemberArray[21]);
		document.getElementById("vericode").value="";
		document.getElementById("vericode").focus();
		return ;
	}
	//Fsel_EmailCheck

	var mail = document.getElementById("email").value;
	if (mail=="" ){
		alert(MemberArray[21]);
		document.getElementById("email").value="";
		document.getElementById("email").focus();
		return ;
	}
	 var strResponseURL='Verification_Process.html';
	 var httpObj = new Ajax.Request(
			            strResponseURL,{
			                 method:'post',
			                parameters:Form.serialize('frmverify'),
			                onSuccess:function(xhr)
					        {
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_Verifi_Regist_Result(responseObj);
			            	},
			                onFailure:Fun_Verifi_Regist_Fail
			            }
			        ); 
}

function Fun_Verifi_Regist_Result(data){
	var code;data.results[0].RetValue;

	if(code=="Y"){
		alert(MemberArray[25]);
		Fun_Web_UrlMenu('03010');
	}else if(code=="N"){
		alert(MemberArray[24]+data.results[0].RetCode);
		document.frmverify.reset();
	}
}

function Fun_Verifi_Regist_Fail(){
	alert('Error');
}

//Accountinfo step1
function handleEnter(field, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13) {
            searchData();
    }else{
          return true;
    }
}


//Accountinfo step1
function Fun_Account_Step1(){
	var frm = document.frmedit;
	if (Fun_TextNull_Check(frm.userpwd,"Please check your password.")){
		return false;
	}
	 var strResponseURL='Member_Edit_Step1_Process.html';
	 var httpObj = new Ajax.Request (
			            strResponseURL,{
			                method:'post',
			                parameters:Form.serialize('frmedit'),
			                onSuccess:function(xhr){
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_Account_Step1_submit(responseObj);
			            	},
			                onFailure:Fun_Account_Step1_Fail
			            }
			        ); 
					
	return false;
}


function Fun_Account_Step1_submit(data){
	var code=data.results[0].RetValue;
	if (code=="Y"){
		var frm;
		frm = document.frmedit;
		frm.action="Member_Edit_Step3.html";
		frm.submit();
	}else{
		$('wrongtxt').innerHTML = "* You have entered an incorrect password.";
		$('userpwd').value="";
		return false;
	}
}

function Fun_Account_Step1_Fail(){
	alert('error');
}

//password layer popup
function MemberPassPopUp(){
	MemberPassPopUpClose();
	var st=document.body.scrollTop + 200;
	var sl=document.body.clientWidth / 2 - 50;
	$('MemberPassDiv').style.left=sl; 
	$('MemberPassDiv').style.top=st; 	
	$('MemberPassDiv').style.display="";
}

function MemberPassPopUpSuccess(data){
	var code=data.results[0].RetValue;
	if(code=="Y"){
		alert('Password Change success');
		MemberPassPopUpClose();
	}else{
		alert('old password wrong');
		MemberPassPopUpClose();
	}
}

//password layer popup close
function MemberPassPopUpClose(){
	$('oldpwd').value="";
	$('newpwd').value="";
	$('newpwd2').value="";
	$('MemberPassDiv').style.display="none";
}

function Member_Password_Change(){
	var frm = document.MemberPass;
	if (Fun_TextNull_Check(frm.oldpwd,"Please check your password.")){	return ;	}
	if (Fun_TextNull_Check(frm.newpwd,"Please check your password.")){	return ;	}
	if (Fun_TextNull_Check(frm.newpwd2,"Please check your password.")){	return ;	}
	if (frm.newpwd.value != frm.newpwd2.value){
		alert('Please check your password.');	return ;
	}
	 var strResponseURL='Member_Edit_Step3_Pwd.html';
	 var httpObj = new Ajax.Request  (
			            strResponseURL,{
			                 method:'post',
			                parameters:Form.serialize('MemberPass'),
			                onSuccess:function(xhr){
					          var responseObj=eval("("+xhr.responseText+")");
					          MemberPassPopUpSuccess(responseObj);
			            	},
			                onFailure:MemberPassPopUpClose
			            }
			        ); 
}

///edit 
function Fun_Member_Modify(){
	var oldpass = document.getElementById("oldpassword").value;
	if (oldpass=="" || oldpass.length < 6){
		alert(MemberArray[8]);
		document.getElementById("oldpassword").value="";
		document.getElementById("oldpassword").focus();
		return ;
	}
	var pass = document.getElementById("password").value;
	var pass2 = document.getElementById("repassword").value;
	if (pass=="" || pass.length < 6){
		alert(MemberArray[8]);
		document.getElementById("password").value="";
		document.getElementById("password").focus();
		return ;
	}
	if (Fsel_PasswordCheck() == false) {
		alert(MemberArray[9]);
		return ;
	}
	if (pass != pass2){
		alert(MemberArray[10]);
		document.getElementById("password").value="";
		document.getElementById("repassword").value="";
		return ;
	}
	
   //Fsel_EmailCheck
    if (Fsel_EmailCheck() == false) {
		alert(MemberArray[11]);	return;
	 }

	var EmailOverCheck = Fsel_EmailOverCheck();
	if (EmailOverCheck == -3) {
		alert(MemberArray[11]);	return ;
	}
	if (EmailOverCheck == -2) {
		alert(MemberArray[11]);	return ;
	}
    //country
	/*if (Fsel_CountryCheck() == false) {
		alert(MemberArray[17]);	return ;
	}
	//country
	if (Fsel_StateCheck() == false) {
		alert(MemberArray[18]);	return ;
	}*/

 	var strResponseURL='Member_Edit_Step3_Process.html';
	var httpObj = new Ajax.Request(
			            strResponseURL,{
			                method:'post',
			                parameters:Form.serialize('memedit3'),
			                onSuccess:function(xhr){
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_Member_Modify_Result(responseObj);
			            	},
			                onFailure:function(transport){
			                	var response = transport.responseText;
			                	alert("FAIL! \n\n" + response);
			                	Fun_Member_Modify_Fail
			                }
			            }
			        ); 
			        
}

function Fun_Member_Modify_Result(data){
	var code=data.results[0].RetValue;
	if(code=="Y"){
		alert(MemberArray[36]);	Fun_Web_UrlMenu('03012');
	}else if(code=="N"){
		if (data.results[0].RetCode == 4){	alert(MemberArray[29]);	}
		else{alert('fail'+data.results[0].RetCode);	}
		document.memedit3.action='Member_Edit_Step3.html';
		document.memedit3.submit();
	}
}

function Fun_Member_Modify_Fail(){
	alert('Error');
}

////seal user id check
function Fun_SealID_Exist_check(){
	var userid = document.getElementById("userid").value;
	if (userid=="" || userid.length < 6){
		alert(AgreesArray[0]);
		document.getElementById("userid").value="";
		document.getElementById("userid").focus();
		return;
	}
	var SealIDOverCheck= Fsel_SealIDOverCheck();
	if (SealIDOverCheck == -3) {
		alert(AgreesArray[0]);	return ;
	}
	if (SealIDOverCheck == -2) {
		alert(AgreesArray[0]);	return ;
	}
	if (SealIDOverCheck == -1) {
		document.getElementById("reuserid").value = userid;
		alert(AgreesArray[0]);	
	}
}


// SealUser ID over check
function Fsel_SealIDOverCheck() {
	var responsecheck = xmlhttpPost('/member/check_sealid.html', 'userid=' + escape(document.getElementById("userid").value));
	if (responsecheck == -3) {
		document.getElementById("userid").focus();	return -3;
	}else if (responsecheck == -2) {
		document.getElementById("userid").focus();	return -2;
	}else {
		return -1;
	}
}

//// agree step
function Fun_Agree_Regist(){
	if (document.getElementById("policy").checked == false) {
		alert(MemberArray[31]);		return ;
	}
	var userid = document.getElementById("userid").value;
	var reuserid = document.getElementById("reuserid").value;
	if (userid=="" || userid.length < 6){
		alert(MemberArray[0]);
		document.getElementById("userid").value="";
		document.getElementById("userid").focus();
		return ;
	}
	if (userid != reuserid){
		alert(MemberArray[2]);		return;
	}

	var IDOverCheck = Fsel_SealIDOverCheck();
	if (IDOverCheck == -3) {
		alert(MemberArray[0]);	return ;
	}
	if (IDOverCheck == -2) {
		alert(MemberArray[0]);	return ;
	}
	
	// password check
	var oldpass = document.getElementById("oldpassword").value;
	var pass = document.getElementById("password").value;
	var pass2 = document.getElementById("repassword").value;
	if (oldpass==""){
		MemberArray[8]
		document.getElementById("oldpassword").value="";
		document.getElementById("oldpassword").focus();
		return ;
	}
	if (pass=="" || pass.length < 6){
		MemberArray[9]
		document.getElementById("password").value="";
		document.getElementById("password").focus();
		return ;
	}
	if (Fsel_PasswordCheck() == false){
		MemberArray[9];	return ;
	}
	if (pass != pass2){
		MemberArray[9];	return ;
	}

	 var strResponseURL='Agree_Process.html';
	 var httpObj = new Ajax.Request(
			            strResponseURL,{
			                method:'post',
			                parameters:Form.serialize('Agreefrm'),
			                onSuccess:function(xhr){
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_Agree_Regist_Result(responseObj);
			            	},
			                onFailure:Fun_Agree_Regist_Fail
			            }
			        ); 
}


function Fun_Agree_Regist_Result(data){
	var code=data.results[0].RetValue;
	var Ret=data.results[0].RetCode;

	if(code=="Y"){
		alert(MemberArray[30]);
		Fun_Web_UrlMenu('00000');
	}else if(code=="N"){
		if (Ret=="6"){
			alert(AgreesArray[4]);
			//document.Agreefrm.reset();
		}else{
			alert(AgreesArray[5]);
			//document.Agreefrm.reset();
		}
	}
}

function Fun_Agree_Regist_Fail(){
	alert('Error');	document.Agreefrm.reset();
}

function Fun_ID_Find_STep_One(){
    if (Fsel_EmailCheck() == false) {
		alert(MemberArray[11]);		return ;
	 }

	 var strResponseURL='IDPwd_Step1_Process.html';
	 var httpObj = new Ajax.Request(
			            strResponseURL,{
			                method:'post',
			                parameters:Form.serialize('frmid'),
			                onSuccess:function(xhr){
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_ID_Find_STep_One_Result(responseObj);
			            	},               
			                onFailure:Fun_ID_Find_STep_One_Fail
			            }
			        ); 
}

function Fun_ID_Find_STep_One_Result(data){
	var code=data.results[0].RetValue;
	if(code=="Y"){
		document.frmid.action="FindID.html";
		document.frmid.submit();
	}else if(code=="N"){
		alert(MemberArray[32]);
		document.frmid.reset();
	}
}

function Fun_ID_Find_STep_One_Fail(){
	alert('Error');	document.frmid.reset();
}

function Fun_ID_Find_STep_Two(){
	if (document.getElementById("codeverify").value == ""){
		alert(MemberArray[19]);		return ;
	}
	 var strResponseURL='FindID_Process.html';
	 var httpObj = new Ajax.Request(
			            strResponseURL,{
			                method:'post',
			                parameters:Form.serialize('frmid'),
			                onSuccess:function(xhr){
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_ID_Find_STep_Two_Result(responseObj);
			            	},
			                onFailure:Fun_ID_Find_STep_Two_Fail
			            }
			        ); 
}


function Fun_ID_Find_STep_Two_Result(data){
	var code=data.results[0].RetValue;
	if(code=="Y"){
		document.frmid.action="IdPwdFinish.html";
		document.frmid.submit();
		return;
	}else if(code=="N"){
		$('failtitle').innerHTML = "Invalid verification code. Please try again";
		document.frmid.reset();
	}
}

function Fun_ID_Find_STep_Two_Fail(){
	alert('Error');	document.frmid.reset();
}

function Fun_PWD_Find_STep(){
	var userid = document.getElementById("userid").value;
	if (userid=="" || userid.length < 6){
		alert(MemberArray[0]);
		document.getElementById("userid").value="";
		document.getElementById("userid").focus();
		return ;
	}
	if (Fsel_IDCheck(userid) == false) {
		alert(MemberArray[1]);
		document.getElementById("userid").value="";
		document.getElementById("userid").focus();
		return ;
	}
	if (document.getElementById("codeverify").value == ""){
		alert(MemberArray[19]);		
		return ;
	}
	 var strResponseURL='FindPWd_Process.html';
	 var httpObj = new Ajax.Request(
			            strResponseURL,{
			                method:'post',
			                parameters:Form.serialize('passfind'),
			                onSuccess:function(xhr){
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_PWD_Find_STep_Result(responseObj);
			            	},
			                onFailure:Fun_PWD_Find_STep_Fail
			            }
			        ); 
}

function Fun_PWD_Find_STep_Result(data){
	var code=data.results[0].RetValue;
	var Ret=data.results[0].RetCode;
	if(code=="Y"){
		document.passfind.email.value=data.results[0].RetEmail;
		document.passfind.action="IdPwdFinish.html";
		document.passfind.submit();
		return;
	}else if(code=="N"){
		if (Ret=="3"){
			alert(MemberArray[33]);
			document.passfind.action="IdPwd.html";
			document.passfind.submit();
		}else if (Ret=="4"){
			$('failtitle').innerHTML = "Invalid verification code. Please try again";
			document.passfind.reset();
		}else if (Ret=="5"){
			$('failtitle').innerHTML = "Invalid UserID code. Please try again";
			document.passfind.reset();
		}else{
			alert("Invalid info");
			document.passfind.reset();
		}
	}

}


function Fun_PWD_Find_STep_Fail(){
	alert('Error');	document.passfind.reset();
}

function Fun_PWD_Find_STep_Finish(){
	var userid = document.getElementById("userid").value;
	if (userid=="" || userid.length < 6){
		return ;
	}
	if (Fsel_IDCheck(userid) == false) {
		return ;
	}
    if (document.getElementById("code").value == ""){
		return ;
	}
	if (document.getElementById("Seq").value == "") 
	{
		return ;
	}

	var pass = document.getElementById("password").value;
	var pass2 = document.getElementById("repassword").value;
	if (pass=="" || pass.length < 6){
		alert(MemberArray[8]);
		document.getElementById("pass").value="";
		document.getElementById("pass").focus();
		return ;
	}
	if (Fsel_PasswordCheck() == false) {
		alert(MemberArray[9]);		return ;
	}
	if (pass != pass2)	{
		alert(MemberArray[10]);		return ;
	}
	 var strResponseURL='VerificationPwd_Process.html';
	 var httpObj = new Ajax.Request(
			            strResponseURL,{
			                method:'post',
			                parameters:Form.serialize('passfind'),
			                onSuccess:function(xhr){
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_PWD_Find_STep_Finish_Result(responseObj);
			            	},
			                onFailure:Fun_PWD_Find_STep_Finish_Fail
			            }
			        ); 
}

function Fun_PWD_Find_STep_Finish_Result(data){
	var code=data.results[0].RetValue;
	var Ret=data.results[0].RetCode;
	if(code=="Y"){
		alert(MemberArray[34]);		Fun_Web_UrlMenu('03010');		return;
	}else if(code=="N"){
		if (Ret=="2"){
			alert(MemberArray[33]);
			document.passfind.action="IdPwd.html";
			document.passfind.submit();
		}else{
			alert("Error"+Ret);
			document.passfind.reset();
		}
	}
}

function Fun_PWD_Find_STep_Finish_Fail(){
	alert('Error');	document.passfind.reset();	return;	
}
