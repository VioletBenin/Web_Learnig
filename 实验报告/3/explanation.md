# 1.需求
用html编写一个简单的注册界面，完成注册和信息的收集。
知识点如下：

###### 1.html基本元素
主要是表单
###### 2.js事件的响应
1.鼠标事件类
点击事件：单击，双击
鼠标：悬浮，按下，抬起
2.input文本框&焦点类
获得焦点，失去焦点
3.页面加载类
###### 3.js数据类型及函数
日期
字符串
数字
###### 4.js的DOM层级查询（与更改？？）
正文里有写。


# 2.详解
#### 一.简单的信息注册系统

1、创建my-js.js文件

2、创建register.html页面，在该文件中链接my-js.js文件，该页面内容如下：
![登录图片示例](https://img-blog.csdnimg.cn/20191020153335518.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzkyMzY3NA==,size_16,color_FFFFFF,t_70)

###### 需求分析
*考点：表单、注册中的常用事件、js对象常用函数。

————HTML分析：

表单里有：

1.文本框（用户名，口令，确认口令，生日）
2.单选框（学历）
3.选择（地区）
4.文本区域（备注）
5.按钮（重置，提交，选择测试）

###### 代码详解
先写出html代码：

(真过分 没有直接的html 还得手动改....)
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	<script type="text/javascript" src="my-js.js" ></script> 
	<style type="text/css">
			select,textarea,input{
				margin: 5px;
			}
		</style>
		<title></title>
	</head>
	<body >
	<div id="p"> </div>
		<h1>请注册</h1>		
		<form action="#" onsubmit="#" method="post">			
			用户名:  <input type="text" name="用户名" class="must" onfocusout="inputLengthTest(this,3,8)" />2-10位<br />
			口令:    <input type="text" name="口令" class="must" onfocusout="inputLengthTest(this,3,8)" />2-8位，不能与用户名相同<br />
			确认口令:<input type="text" name="确认口令" class="must" onfocusout="passwordTest(this)"/><br />
			生日:    <input type="text" name="生日" class="must" onfocusout="dateTest(this)" />格式为1988-1-1<br />
			学历：    
			<input type="radio" name="学历" name="college" />专科
			<input type="radio" name="学历" name="bachelor" />本科
			<input type="radio" name="学历" name="master" />硕士研究生
			<br />
			地区：    
			<select class="must2" name="地区">
				<option value="">东北</option>
				<option value="">西北</option>
			</select>
			<br />
			备注：
			<textarea rows="10px" cols="40px">
		</textarea>
			<br />
			<input type="reset" name="" id="" value="重置" >
			<input type="button" name="" id="" value="提交并进行checkbox测试" onclick="$submitTest()">
			<input type="button" name="" id="" value="select测试" onclick='window.open("selectTest.html");'>
		</form>				
	</body>
</html>
```

————JS：

3、在my-js.js文件中实现功能：register.html页面加载完成后，根据系统日期更新register.html页面最顶端的日期。
提示：页面加载完成触发onload事件，获取系统日期可使用Date对象

#### Way1.网页加载完成后显示日期
onload事件，创建文字元素“font”，更改内容，在预先的位置中加入该“font”元素
```javascript
window.onload = function() {
	var d = new Date();
	var s = "今天是" + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
	var f = document.createElement("font");
	f.innerHTML = s;
	//以上两行也可用如下一行代替
	//var f=document.createTextNode(s);
	document.getElementById('p').appendChild(f);
}
```
#### Way2.应该还有别的方法但是我不会啊。。。

==错误示范：==
 ##### 1.~~按说这个函数可以在onload事件之后调用啊~~
您说的真有道理，但我不会啊~~
 ##### 2.~~使用函数： document.write()~~
 document.write()这个函数有点厉害，他会把页面上的所有东西都清空，然后再放进去自己想放进去的东西。而且它放进去的甚至可以是代码。
 例如：
 使用函数： document.write()完成新网页的构建
#### html

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script type="text/javascript">
			function refreshNewPages()
			{
				alert("当你确定，就会触发document.write()事件")
				var showStr="";
				showStr+="<em>这行字是斜体的</em>"
				document.write(showStr);
			}
		</script>
	</head>
	<body onload="refreshNewPages()">
		这是一行关闭弹窗后就会消失的话
	</body>
</html>
```
4、在my-js.js文件中实现下列函数：

（分组讲解，逐层递进）
1.
function isNull(str)            //验证str是否是空

```javascript
//验证str是否是空
function isNull(str) {
	return (str == "");
}
```
（？？？）似乎不可以用NULL判断字符串是否为空，有类似的关键字或者属性吗？



2.验证长度
function minLength(str,length)   //验证str是否满足最小长度length
function maxLength(str,length)   //判断str是否满足最大长度length

```javascript

//验证str是否满足最小长度length
function minLength(str, length) {
	return (str.length >= length);
}

//判断str是否满足最大长度length
function maxLength(str, length) {
	return (str.length <= length);
}
```
这个没得说，但是这种写法重用性更好。

3.
function isDigital(str)           //判断str字符串是否是纯数字
function isNumber(str)         //判断str是否是整数


#### Way1.转换一次
```javascript
//判断str字符串是否是纯数字(0个引用)
function isDigital(str) {
	if (!isNull(str)) //是空
		return !isNaN(parseFloat(str));
}

//判断(string)str是否是整数(引用:密码检验)
function isNumber(str) {
	if (!isNull(str)) //是空
	return !isNaN(parseInt(str)) ;
}

```
传入一个字符串，然后尝试变为（整数/浮点数），如果失败则返回NaN。
#### Way2.转换两次
```javascript
//判断str字符串是否是纯数字(0个引用)
function isDigital(str) {
	if (!isNull(str)) //是空
		return (eval(parseFloat(str)) == str);
}

//判断(string)str是否是整数(引用:密码检验)
function isNumber(str) {
	if (!isNull(str)) //是空
		return (eval(parseInt(str)) == str);
}

```
传入一个字符串，然后尝试变为（整数/浮点数），再尝试转换回来。如果符合要求，转换的结果与原来相同。

4.
function isDate(date1)  //判断date1的格式是否为1988-1-19（①是否包含两个短线，②短线前后是否是纯数字，③月份是否正确，即在1-12之间，④日期是否正确）

#### Way1.正则匹配（有bug）

```javascript
function isDate(date1){
	var regex = /^(\d{4})-([0-1])([0-9])-([0-3])([0-9])$/;
	var result = regex.test(date1);
	return result;
}
```
我不太会写正则，但是这个思路肯定不对。
因为并不是每个月的天数都相同。
不过大家可以借此学学==正则匹配==。

#### Way2.借用Date

```javascript
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
	return (y && m && d)&&(day.length==3);
	//②短线前后是否是纯数字
	//③月份是否正确，即在1-12之间
	//④日期是否正确
}
```

思路和前面的类似，都是经过两次转换，判断是否相等。
（先将日期读入字符串，用Date.split函数以“-”作为分割，将字符串分为多个数组，再一一判断数字是否相等）
这种写法，避免了以下的错误类型：

1.日期错误
1988-1-50
2000-2-30（√）
2001-2-30（×）

2.输入格式错误
2000/2/31

3.一个正确的格式+一堆乱码
1988-1-11-1-1
1988-1-11-ddgywu678oxij


5、在my-js.js文件中给register.html页面上用户名文本框的失去焦点事件添加事件响应程序来验证文本框中内容的字符串长度，要求在改事件响应程序中调用minLength、maxLength函数
6、在my-js.js文件中给register.html页面上口令框的失去焦点事件添加事件响应程序来验证用户的输入是否符合要求

```javascript
//用户名/密码/确认密码 长度+合格性检验
function inputLengthTest(thisInput, minL, maxL) {
	var str = thisInput.value;
	if (!minLength(str, minL) || !maxLength(str, maxL))
		alert("请输入" + minL + "-" + maxL + "位的" + thisInput.name);
	//口令：非纯数字
	else if (thisInput.name == "口令")
		if (isNumber(thisInput.value))
			alert(thisInput.name + "不能只包含数字！");

}
//用户名文本框的失去焦点事件添加事件响应程序来验证文本框中内容的字符串长度，要求在改事件响应程序中调用minLength、maxLength函数
//口令框的失去焦点事件添加事件响应程序来验证用户的输入是否符合要求
```
长度和合格性一起检验


```javascript
//必填项检验
function mustTest() {
	var must = document.getElementsByClassName("must"); //获取全部必填节点的集合
	for (var i = 0; i < must.length; i++) {
		//必填检验
		if (isNull(must[i].value))
			alert(must[i].name + "不能为空");
	}
}
```
当焦点移出的时候，显示当前的name不能为空

7、在my-js.js文件中给register.html页面上生日文本框的失去焦点事件添加事件响应程序验证用户的输入是否符合要求

```javascript
//生日文本框的失去焦点事件添加事件响应程序验证用户的输入是否符合要求
function dateTest(thisInput) {
	if (!isDate(thisInput.value) == true)
		alert(thisInput.name + "格式错误！");
}

```
##### 有错！！！！！！！!！！！!！！
8、在my-js.js文件中给register.html页面上“提交并进行checkbox测试”按钮的单击事件添加事件响应程序，该程序的功能：创建数组对象，存储用户表单输入的信息，弹出消息框显示该数组对象的内容，用户点击消息框的确定按钮后打开checkboxTest.html页面。

```javascript
function $submitTest() {
	var obj = document.forms[0];
	var Infom = getAllInfor(obj);
	if (confirm(Infom))
		window.open("checkboxTest.html");
}

```
打开新的网址和页面用window下的函数：
window.open("URL地址");



```javascript
function getAllInfor(obj) {

	for (let i of arr) {
		console.log(i);
	}
	obj.forEach(function(value, i) {
		console.log('forEach遍历:' + i + '--' + value);

	})
}
```
遍历所有元素。并将所有元素的内容输出。

#### 二.复选框的选择
9、创建checkboxTest.html页面内容如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191020220805867.png)
其中单击全选按钮，所有选项被选中，单击取消全选，所有选项都不被选中，单击显示信息按钮在页面上显示选中项的value值
该页面JavaScript代码包括三个函数如下：
function selectAll( )  //CheckBox全选
function unSelectAll( )  //CheckBox取消全选
function showInfo( ) //显示选中的value值
10、在my-js.js文件中添加代码实现功能：在register.html页面单击“select测试按钮”显示“selectTest.html”。

#### 三.选择项的移动
11、创建selectTest.html该页面显示内容如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191020220640945.png)

该页面中包括两个select组件和四个按钮，左边select组件的列表项为页面加载完成后由JavaScript代码生成，四个按钮的功能分别为：向右移动选中项，向右移动所有项，向左移动选中项，向左移动所有项
该页面JavaScript代码包括如下三个函数：
function init( )  // /对列表进行初始化
function move(s1,s2)  // 把选中的选项从s1移动到s2
function moveAll(s1,s2) // 把所有选项s1移动到s2



### HTML布局：
```html
<!-- selectTest.html -->
<html>
	<head>
		<script type="text/javascript" src="selectTest.js">			
		</script>
		<style type="text/css">
			form {
				display: inline-flex;
			}
		</style>
	</head>
	<body onload="init()">
		<form>
			<select id="mySelect1" size='8' multiple='multiple' style="width:100px"></select>					
			<div style="padding: 20px;">
				<input type="button" onclick="AddToRight()" value=">"><br><br>
				<input type="button" onclick="AddAllToRight()" value=">>"><br><br>
				<input type="button" onclick="init()" value="O"><br><br>				
				<input type="button" onclick="AddToLeft()" value="<"><br><br>
				<input type="button" onclick="AddAllToLeft()" value="<<"><br><br>
			</div>
			<select id="mySelect2" size='8' multiple='multiple' style="width:100px"></select>			
		</form>
	</body>
</html>
```

1.这里的10个选项偷了个懒，1到10差不多的字，就用循环重复生成，再用window.onload事件用添加元素添加进去。正好重置事件可以直接拿来用。
2.CSS样式采用弹性布局flex，
form {display: inline-flex;	}
虽然不知道为什么要对form这样布局，
尝试了几种错误方式，如下：

body：没反应
*：乱码错位
### 初始化函数
最开始加载页面调用一次，单击重置按钮也会调用。
```javascript
function init() // /对列表进行初始化
{
	var originDiv = document.getElementById("mySelect1"); //清空盒子
	while (originDiv.firstChild) {
		originDiv.removeChild(originDiv.firstChild);
	}
		for (var i = 1; i <= 10; i++) {
		var op = document.createElement("option");
		op.text = "选项" + i;
		//设置<option></option>的文本内容为 fromSelect列表中被选中的列表项的文本内容
		originDiv.appendChild(op);
	}
}
```

### 全选函数代码

```javascript

			
function AddAllTo(fromSide, toSide) {
	var num = 0;
	while (fromSide.firstChild) {
		//alert(num++)
		var thisNode = fromSide.firstChild;
		var op = document.createElement("option");
		op.text = thisNode.text;
		op.value = thisNode.value;
		toSide.appendChild(op);
		fromSide.removeChild(thisNode);
	}
}

```
写了一个小函数，函数通过传入两个option对象，把两边的互相添加。

```javascript

function AddAllToRight() {
	AddAllTo(document.getElementById("mySelect1"), document.getElementById("mySelect2"));
}

function AddAllToLeft() {
	AddAllTo(document.getElementById("mySelect2"), document.getElementById("mySelect1"));
}

```

有时候实验这个全选功能的时候会出错，移动之后会莫名其妙的多出一个undefined选项
这个时候有可能是你的HTML代码的问题
例如：
![](https://img-blog.csdnimg.cn/20191026205822554.png)


如图，莫名其妙的多了一个undefined。第一次全部移动（左→右）不会出现，第二次选择（右→左）会出现，以后undefined都不会再变多。

这种情况是第二个select写的不对。你可能是个完美主义，习惯了一句代码换一次行，如下：

```html
<form>
			<select id="mySelect1" size='8' multiple='multiple' style="width:100px">
				<!--A.这里本不该有空格的，不过这里有也没关系-->
			</select>					
			<div style="padding: 20px;">
				<input type="button" onclick="AddToRight()" value=">"><br><br>
				<input type="button" onclick="AddAllToRight()" value=">>"><br><br>
				<input type="button" onclick="init()" value="O"><br><br>				
				<input type="button" onclick="AddToLeft()" value="<"><br><br>
				<input type="button" onclick="AddAllToLeft()" value="<<"><br><br>
			</div>
			<select id="mySelect2" size='8' multiple='multiple' style="width:100px">
					<!--B.这里也本不该有空格的，而且这些空格（还是换行）就是多出的select的元凶-->
			</select>	
```
于是，在第一次移动的时候，你的select1(注释A)被清空了，而select2（注释B）原本有一些文本元素，在下次移动的时候就会被识别为元素undefined。这个函数默认的是，select标记对中每个元素都是option。

有两种解决方案。
## 1.如果完美主义坚持完（zhi）美（nan）
可以考虑在HTML文本之间加注释，如下：
```html
		<select id="mySelect2" size='8' multiple='multiple' style="width:100px"><!-- 				
			 --></select>			
```
## 2.然而真正的直男怎么会放弃完美！？
于是我们修改js代码，寻求所有的option元素。

```javascript
//快考试了代码懒得写了
```

如法炮制，两个函数同时调用同一个一个小的全选函数。
### 移动选中的选项
```javascript
		function move(s1, s2) {
	var i = s1.selectedIndex;
	//获取fromSelect列表中被选中的列表项的索引值			
	var op = document.createElement("option");
	//创建<option></option>
	op.text = s1.options[i].text;
	//设置<option></option>的文本内容为 fromSelect列表中被选中的列表项的文本内容
	op.value = s1.options[i].value;
	//设置<option></option>的value值为 fromSelect列表中被选中的列表项的value值					
	s2.appendChild(op);
	//把创建好的<option></option>插入到toSelect列表中去
	s1.remove(i);
	//删除fromSelect列表中 索引值为i的列表项（被选中的列表项）
}
```

```javascript

		
function AddToRight() {
	move(document.getElementById("mySelect1"), document.getElementById("mySelect2"));
}

function AddToLeft() {
	move(document.getElementById("mySelect2"), document.getElementById("mySelect1"));
}

```



#### 然后，直男们又发现，单个移动是不按顺序的！这怎么行！是男人就不要忍！
于是用一些取巧的法子，比如说隐藏掉一些元素，移动的时候全移过去

```javascript
//dbq
//我只能说代码略...
//毕竟我是个垃圾...
```
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
好吧我写我写，谁叫我卑微呢...
## 这样的话整个js代码都得改...

#### 1.初始化
第一块代码是“移动”的核心代码，因为后面还要重用，干脆单独写一个函数，将某个option的display设置为none或list-item
```javascript

function setDisplay(op, Display) {
	if (typeof(op) == "object") {
		if (Display == true)
			op.style.display = "list-item";
		else if (Display == false)
			op.style.display = "none";
		else {
			alert("setDisplay函数true/false参数传递错误")
			return
		}
	}
}
```
如果设成inline就如图了：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191026225658246.png)
同理，如果想要设置横向列表，就得用inline设置

```css
			li{
				float:left;
			}
```

BTW，列表另一个常用功能 取消列表前面的符号
```html
<ul style="list-style: none;">


```
~~（好像这些都和display关系不大？？？）~~

真正的初始化函数：
```javascript
function init() // /对列表进行初始化
{
	createBox("mySelect1", true)
	createBox("mySelect2", false)
}

function createBox(nameID, Display) {
	var originDiv = document.getElementById(nameID); //清空盒子
	while (originDiv.firstChild) {
		originDiv.removeChild(originDiv.firstChild);
	}
	for (var i = 1; i <= 10; i++) {
		var op = document.createElement("option");
		op.text = "选项" + i;
		setDisplay(op, Display);
		originDiv.appendChild(op);
	}
}
```
#### 2.移动

# 3.代码编写技巧&易错点


### 1.技巧
1.尽信书不如无书
看书不如亲自动手尝试。

2.js代码有时候运行不出来，可以先删掉后面一部分代码，测试一下是否正确（不推荐使用注释，/**/注释不可以嵌套，//注释行数太多很麻烦）

3.js调试时，记得常用alert输出当前变量的值，或者typeof看类型


### 2.易错点
1.函数Window.write() 会清除页面全部元素，所以不能在onload事件中添加。
2.时间的正常输出需要调用的函数：
getFullYear() +(getMonth() + 1) + getDate()
3.两个NaN不相等
4.js函数记得加function关键字
5.一定记得“” 和‘’交替使用！！

# 遗留问题
1.正则怎么写i
2.加载时间的？？
3.css

		学弟学妹们如果有没看明白的地方，可以给我邮箱留言：625310165@qq.com