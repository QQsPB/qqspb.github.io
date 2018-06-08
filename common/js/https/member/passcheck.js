//Accountinfo step1
function Fun_ItemBuy_PWD_Check()
{
	var frm;
	frm = document.form1;
	if (Fun_TextNull_Check(frm.checkResult,"Please enter your password."))
	{
	return ;
	}
	
	 var strResponseURL='checkPassProcess.html';
	 var httpObj = new Ajax.Request  
		(    
			            strResponseURL,         
			            {               
			                 method:'post',    // post가 기본값이므로 생략 가 능               
			                parameters:Form.serialize('form1'),    
			                onSuccess:function(xhr)
					        {
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_ItemBuy_PWD_Check_Succ(responseObj);
			            	},               
			                onFailure:Fun_ItemBuy_PWD_Check_Fail
			            }       
			        ); 
}

function Fun_ItemBuy_PWD_Check_Succ(data)
{

	var code;
	code=data.results[0].RetValue;
	if (code=="Y"){
		$('wrongtxt').innerHTML = "";
		$('checkResult').value="Y";	
		
	}
	else
	{	
		$('wrongtxt').innerHTML = "* You have entered an incorrect password.";
		$('checkResult').value="N";
		
	}

}

function Fun_ItemBuy_PWD_Check_Fail(response)
{
//	alert('N');
	$('checkResult').value="N";

	alert('error' + response.responseText);
}




//Accountinfo step1
function Fun_Cart_DELETE()
{
	var frm;
	frm = document.form_basketList;
	
	 var strResponseURL='cartDelProcess.html';

	 var httpObj = new Ajax.Request  
		(    
			            strResponseURL,         
			            {               
			                 method:'post',    // post가 기본값이므로 생략 가 능               
			                parameters:Form.serialize('form1'),                   
			                onSuccess:function(xhr)
					        {
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_Cart_DELETE_Succ(responseObj);
			            	},               
			                onFailure:Fun_ItemBuy_PWD_Check_Fail               
			            }       
			        ); 
}

function Fun_Cart_DELETE_Succ(data)
{

	var code;
	code=data.results[0].RetValue;

	if (code=="Y")
	{
		alert("Deletion complete.");
		document.location='shopping_cart.html';
//		$(totCash).innerHTML="0";
//		$(emptyCash).innerHTML="0";
//		document.location.reload();
	}
	else
	{
			document.location='shopping_cart.html';
//		$(totCash).innerHTML="0";
//		$(emptyCash).innerHTML="0";
//		document.location.reload();
	}
}






//Accountinfo step1
function Fun_Cart_UPDATE()
{
	var frm;
	frm = document.form_basketList;
	
	 var strResponseURL='cartUpdateProcess.html';

	 var httpObj = new Ajax.Request  
		(    
			            strResponseURL,         
			            {               
			                 method:'post',    // post가 기본값이므로 생략 가 능               
			                parameters:Form.serialize('form1'),                   
			                onSuccess:function(xhr)
					        {
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_Cart_UPDATE_Succ(responseObj);
			            	},               
			                onFailure:Fun_ItemBuy_PWD_Check_Fail
			            }       
			        ); 
}

function Fun_Cart_UPDATE_Succ(data)
{

	var code;
	code=data.results[0].RetValue;

	if (code=="Y")
	{
		document.location='shopping_cart.html';
//		$(totCash).innerHTML="0";
//		$(emptyCash).innerHTML="0";
//		document.location.reload();
	}
	else
	{
		document.location='shopping_cart.html';
//		$(totCash).innerHTML="0";
//		$(emptyCash).innerHTML="0";
//		document.location.reload();
	}
}


//Accountinfo step1
function Fun_ItemBuy_Cart_In()
{

	var frm;
	frm = document.form1;
	//if (Fun_TextNull_Check(frm.checkResult,"Please check your password."))
	//{
	//return ;
	//}



	//if (frm.checkResult.value == "N")
	//{
	//	alert("Please check your password.");
	//	return ;
	//}

	
	 var strResponseURL='cartInProcess.html';
	 var httpObj = new Ajax.Request  
		(    
			            strResponseURL,         
			            {               
			                 method:'post',    // post가 기본값이므로 생략 가 능               
			                parameters:Form.serialize('form1'),                   
			                onSuccess:function(xhr)
					        {
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_ItemBuy_Cart_In_Succ(responseObj);
			            	},               
			                onFailure:Fun_ItemBuy_PWD_Check_Fail               
			            }       
			        ); 
}

function Fun_ItemBuy_Cart_In_Succ(data)
{
	var code;
	code=data.results[0].RetValue;
	if (code=="Y")
	{
		
		if(confirm("Added to your shopping cart. Do you wish to view your cart?")){        
			document.location='shopping_cart.html';
		}else{
			document.location='item_list.html';

		}
	}
	else
	{
	//	alert(code);
	}
}


//KOS ITEM BUY
function Fun_ItemBuy_Order_In()
{
	var frm;
	frm = document.form1;
	if (Fun_TextNull_Check(frm.checkResult,"Please enter your password."))
	{
	return ;
	}

	if (frm.checkResult.value == "N")
	{
		alert("Please check your password.");
		return ;
	}

	 var strResponseURL='orderInProcess.html';
	 var httpObj = new Ajax.Request  
		(    
			            strResponseURL,
			            {               
			                method:'post',    // post가 기본값이므로 생략 가 능
			                parameters:Form.serialize('form1'),                   
			                onSuccess:function(xhr)
					        {
					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_ItemBuy_Order_In_Succ(responseObj);
			            	},
			                onFailure:Fun_ItemBuy_Order_In_Fail
			            }       
			        ); 
	
	alert('Success');	
	document.location.href= 'item_purchased.html';
}


function Fun_ItemBuy_Order_In_Succ(data)
{
	var code;
	code=data.results[0].RetValue;
	if (code=="Y")
	{
		document.location.href= 'item_purchased.html';
	}else{
		alert("Item Buy Error : Message["+code+"]");
		document.location.reload();
	}
	
}
function Fun_ItemBuy_Order_In_Fail(response)
{
	
	alert('Item Buy Error : ErrorCode[-10001]'+xhr.responseText);
	document.location.reload();
}

//Accountinfo step1
function Fun_ItemCartBuy_Order_In()
{
	var frm;
	frm = document.form1;
	if (Fun_TextNull_Check(frm.checkResult,"Please enter your password."))
	{
	return ;
	}

	if (frm.checkResult.value == "N")
	{
		alert("Please check your password.");
		return ;
	}
	var strResponseURL='cartorderInProcess.html'

	 var httpObj = new Ajax.Request  
		(    
			            strResponseURL,         
			            {               
			                 method:'post',    // post가 기본값이므로 생략 가 능               
			                parameters:Form.serialize('form1'),                   
			                onSuccess:function(xhr)
					        {

					          var responseObj=eval("("+xhr.responseText+")");
					          Fun_ItemCartBuy_Order_In_Succ(responseObj);
			            	},               
			                onFailure:Fun_ItemCartBuy_Order_In_Fail 
			            }       
			        ); 
}


function Fun_ItemCartBuy_Order_In_Succ(data)
{
	var code;
	code=data.results[0].RetValue;
	if (code=="Y")
	{
		document.location.href= 'item_purchased.html';	
	}else{
		alert('code : ' + code);
		document.location.reload();
	}
	
}

function Fun_ItemCartBuy_Order_In_Fail(response)
{
	alert('Item Buy Error : ErrorCode[-10001]'+xhr.responseText);
	document.location.reload();
}

// ajax 
function xmlhttpPostSeal(strURL, query) {
	var randnum = Math.random();
	randnum = randnum * 10000;

	var xmlHttpReq = false;
	var self = this;
	var responsetext;
	// Mozilla/Safari
	if (window.XMLHttpRequest) {
		self.xmlHttpReq = new XMLHttpRequest();
	}
	// IE
	else if (window.ActiveXObject) {
        	self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	self.xmlHttpReq.open('GET', strURL + "?rand=" + randnum + "&" +  query, false);
   
	    
	self.xmlHttpReq.send(null);

	if (self.xmlHttpReq.status == 200) {

		var responsetext;
		responsetext = self.xmlHttpReq.responseText;
		
		return responsetext;
	}
	else {
		return false;
	}
}



