//用户名文本框的失去焦点事件添加事件响应程序来验证文本框中内容的字符串长度，要求在改事件响应程序中调用minLength、maxLength函数
//口令框的失去焦点事件添加事件响应程序来验证用户的输入是否符合要求



//function getAllInfor(obj) {

// 	for (let i of arr) {
// 		console.log(i);
// 	}
// 	obj.forEach(function(value, i) {
// 		console.log('forEach遍历:' + i + '--' + value);
// 
// 	})
//}


//“提交并进行checkbox测试”按钮的单击事件添加事件响应程序，该程序的功能：
//创建数组对象，存储用户表单输入的信息，弹出消息框显示该数组对象的内容，
//用户点击消息框的确定按钮后打开checkboxTest.html页面。




//验证str是否是空
function isNull(str) {
	return (str == "");
}


//必填项检验
function mustTest() {
	
	var must = document.getElementsByClassName("must"); //获取全部必填节点的集合
	
		
	
	for (var i = 0; i < must.length; i++) {
		//必填检验
		//alert(45678)
		
		if (isNull(must[i].value)) {
			
			
			alert(must[i].name + "不能为空");
			break;
		}
		else{	
			
			
			
					
					
			if(i==must.length-1)
			var flag=true;
		}
		
	}




if(flag)
return true;
 else return false;
}



function submitTest() {

	var obj = document.forms[0];
	//var Infom = getAllInfor(obj);	
	var str = "";




	for (let i of obj) {
		
		
		
		
		if (mustTest()) {
			
			//alert(2222)
			
			if (i.tagName == "TEXTAREA") {
				str += "备注:";
				str += i.value;
				str += "\n";
				var flag = true;
				break;
			} else if (i.tagName == "SELECT") {

				str += i.name;
				str += ":";
				str += i.value;
				str += "\n";

			}
			if (i.tagName == "INPUT") {
				if (i.type == 'radio') {
					if (i.checked) {
						str += i.name;
						str += ":";
						str += i.value;
						str += "\n";
					}
				} else {
					str += i.name;
					str += ":";
					str += i.value;
					str += "\n";
				}
			}

		} else break;

	
	}

	if (flag) {
		if (confirm(str))
			window.open("checkboxTest.html");
	}

}






//网页加载完成后显示日期
window.onload = function() {
	var d = new Date();
	var s = "今天是" + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
	var f = document.createElement("font");
	f.innerHTML = s;
	//var f=document.createTextNode(s);
	document.getElementById('p').appendChild(f);
}


//判断str字符串是否是纯数字(0个引用)
function isDigital(str) {
	if (!isNull(str)) //是空
		return (eval(parseFloat(str)) == str);
}

//判断(string)str是否是整数(引用:密码检验)
function isNumber(str) {
	if (!isNull(str)) //是空
		return (eval(parseInt(str)) == str);
	//return !(isNaN(parseInt(str)) == str);
}



//日期格式检验
function isDate(date1) {
	//判断date1的格式是否为1988-1-19
	var day = date1.split("-");
	//①是否包含两个短线	
	var testDate = new Date();
	testDate.setFullYear(day[0]);
	testDate.setMonth(day[1] - 1);
	testDate.setDate(day[2]);
	var y = day[0] == testDate.getFullYear();
	var m = day[1] == testDate.getMonth() + 1;
	var d = day[2] == testDate.getDate();
	return (y && m && d) && (day.length == 3);
	//②短线前后是否是纯数字
	//③月份是否正确，即在1-12之间
	//④日期是否正确
}

//生日文本框的失去焦点事件添加事件响应程序验证用户的输入是否符合要求
function dateTest(thisInput) {
	if (!isDate(thisInput.value) == true)
		alert(thisInput.name + "格式错误！");
}




//验证str是否满足最小长度length
function minLength(str, length) {
	return (str.length >= length);
}

//判断str是否满足最大长度length
function maxLength(str, length) {
	return (str.length <= length);
}
//用户名/密码/确认密码 长度+合格性检验
function inputLengthTest(thisInput, minL, maxL) {
	var str = thisInput.value;
	if (!minLength(str, minL) || !maxLength(str, maxL))
		alert("请输入" + minL + "-" + maxL + "位的" + thisInput.name);
	//口令：非纯数字
	else if (thisInput.name == "口令")
	{
		if (isNumber(thisInput.value))
			alert(thisInput.name + "不能只包含数字！");
			}

}

function passwordTest() {
	var user = document.getElementsByName("用户名");
	var psw = document.getElementsByName("口令");
	if (user[0].value == psw[0].value)
		alert("口令不能和用户名相同")
}

//确认口令：仅和口令比对，是否相等
function repasswordTest() {
	var psw0 = document.getElementsByName("口令");
	var psw1 = document.getElementsByName("确认口令");
	if (psw0[0].value != psw1[0].value)
		alert("确认口令和口令不同")
}

