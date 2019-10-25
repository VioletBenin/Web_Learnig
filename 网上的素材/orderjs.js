//定义原型函数trim()来去掉表单输入数据前后的空格
String.prototype.trim=function(){
	return this.replace (/(^\s*)(\s*$)/g,"");
}
function check(){
	var product=document.getElementById("product");
	var account=document.getElementById("account");
	var company=document.getElementById("company");
	var name=document.getElementById("name");
	var tel=document.getElementById("tel");
	var email=document.getElementById("email");
	//判断订购产品表单元素是否有输入值
	if(product.value.trim().length==0){
		alert("请填写想订购的产品");
		product.focus();
		return false;
	}
	else if(account.value.trim().length==0){
		alert("请填写订购数量");
		account.focus();
		return false;
	}
	//判断输入的数量是否是数字类型
	else if(isNaN(account.value)){
		alert("请填写正确的订购数量");
		account.select();
		return false;
	}
	else if(company.value.trim().length==0){
		alert("请填写订购的公司名称");
		company.focus();
		return false;
	}
	else if(name.value.trim().length==0){
		alert("请填写公司联系人");
		name.focus();
		return false;
	}
	else if(tel.value.trim().length==0){
		alert("请填写联系电话");
		tel.focus();
		return false;
	}
	else if(email.value.trim().length==0){
		alert("请填写email");
		email.focus;
		return false;
	}
	//判断输入的email是否含有"@"符号
	else if(email.value.indexOf("@")==-1){
		alert("请填写正确的eamil");
		email.select();
		return false;
	}
	else{
		str="亲爱的客户，您订购的产品为"+product.value+",订购数量为"+account.value+"。您公司"+company.value+"联系人"+name.value+"的电话为"+tel.value+",邮箱"+email.value+"。感谢您的订购！";
		document.getElementById("txt").value=str;
		document.getElementById("txt").style.cssText="border:1px solid #000000;";
		return false;
	}
}