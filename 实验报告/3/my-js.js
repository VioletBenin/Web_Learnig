//网页加载完成后显示日期
window.onload = function() {
	var f = document.createElement("font");
	var d = new Date();
	var s = "今天是" + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
	f.innerHTML = s; //			
	document.getElementById('p').appendChild(f);
}

//验证str是否是空
function isNull(str) {
	return (str == "");
}

//判断str字符串是否是纯数字
function isDigital(str) {
	if (!isNull(str)) //是空
		return (eval(parseFloat(str)) == str);
}

//判断(string)str是否是整数
function isNumber(str) {
	if (!isNull(str)) //是空
		return (eval(parseInt(str)) == str);
}

//验证str是否满足最小长度length
function minLength(str, length) {
	return (str.length >= length);
}

//判断str是否满足最大长度length
function maxLength(str, length) {
	return (str.length <= length);
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
	return (y && m && d);
	//②短线前后是否是纯数字
	//③月份是否正确，即在1-12之间
	//④日期是否正确
}


//生日文本框的失去焦点事件添加事件响应程序验证用户的输入是否符合要求
dateTest(thisInput)
{
	alert("格式错误！");
	if(!isDate(thisInput.value))
	alert(thisInput.name+"格式错误！");
}

//必填项检验
function mustTest() {
	var must = document.getElementsByClassName("must"); //获取全部必填节点的集合
	for (var i = 0; i < must.length; i++) {
		//必填检验
		if (isNull(must[i].value))
			alert(must[i].name + "不能为空");
	}
}

//用户名/密码长度检验
function inputLengthTest(thisInput, minL, maxL) {
	var str = thisInput.value;
	if (!minLength(str, minL) || !maxLength(str, maxL))
		alert("请输入" + minL + "-" + maxL + "位的" + thisInput.name);
		else
		elseTest(thisInput);
}
//用户名文本框的失去焦点事件添加事件响应程序来验证文本框中内容的字符串长度，要求在改事件响应程序中调用minLength、maxLength函数



//口令框的失去焦点事件添加事件响应程序来验证用户的输入是否符合要求



elseTest(thisInput)
{
	if(thisInput.name=="口令")
	{
		
	}
	else if(thisInput.name=="确认口令")
	{
		
	}

}



function $submitTest() {

}



function $isNumber() {
	var ans = isDate("2000-2-29");
	alert(ans);
}


//长度检验

//密码复杂性检验







function selectAll() //CheckBox全选 
{}

function unSelectAll() //CheckBox取消全选
{}

function showInfo() //显示选中的value值
{}

//“提交并进行checkbox测试”按钮的单击事件添加事件响应程序，该程序的功能：创建数组对象，存储用户表单输入的信息，弹出消息框显示该数组对象的内容，用户点击消息框的确定按钮后打开checkboxTest.html页面。
//创建checkboxTest.html页面内容如下：
// 
// 其中单击全选按钮，所有选项被选中，单击取消全选，所有选项都不被选中，单击显示信息按钮在页面上显示选中项的value值
// 该页面JavaScript代码包括三个函数如下：
// 
//  
//  
// 10、在my-js.js文件中添加代码实现功能：在register.html页面单击“select测试按钮”显示“selectTest.html”。
// 11、创建selectTest.html该页面显示内容如下：
// 
// 该页面中包括两个select组件和四个按钮，左边select组件的列表项为页面加载完成后由JavaScript代码生成，四个按钮的功能分别为：向右移动选中项，向右移动所有项，向左移动选中项，向左移动所有项
// 该页面JavaScript代码包括如下三个函数：
// function init( )  // /对列表进行初始化
// function move(s1,s2)  // 把选中的选项从s1移动到s2
// function moveAll(s1,s2) // 把所有选项s1移动到s2
// 内容二：
// 练习课本P257示例21-9，P258示例21-10z
