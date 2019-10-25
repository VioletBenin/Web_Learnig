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

function AddToRight() {
	move(document.getElementById("mySelect1"), document.getElementById("mySelect2"));
}

function AddToLeft() {
	move(document.getElementById("mySelect2"), document.getElementById("mySelect1"));
}

function AddAllTo(fromSide, toSide) {
	var num=0;
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

function AddAllToRight() {
	AddAllTo(document.getElementById("mySelect1"), document.getElementById("mySelect2"));
}

function AddAllToLeft() {
	AddAllTo(document.getElementById("mySelect2"), document.getElementById("mySelect1"));
}


function init() // /对列表进行初始化
{

	var originDiv = document.getElementById("mySelect1");//清空盒子

while(originDiv.firstChild)
{
	originDiv.removeChild(originDiv.firstChild);
}


	for (var i = 1; i <=10; i++) {
		var op = document.createElement("option");
		//创建<option></option>
		op.text = "选项" + i;
		//设置<option></option>的文本内容为 fromSelect列表中被选中的列表项的文本内容
		originDiv.appendChild(op);
	}

}
