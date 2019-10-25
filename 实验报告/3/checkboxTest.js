function selectAllCheckedboxByName(str) {
				return document.getElementsByName(str);
			} //选择全部name=str的元素

			function selectAll(str) {
				var sets = selectAllCheckedboxByName(str);
				sets.forEach(function(currentValue) {
					//currentValue.setAttribute("checked","checked");//如果是选中的，就让所有的状态为选中。
					currentValue.checked = true;
				})
			}

			function unselectAll(str) {
				var sets = selectAllCheckedboxByName(str);
				sets.forEach(function(currentValue) {
					currentValue.checked = false;
				})
			}

			function showValue(str) {
				var sets = selectAllCheckedboxByName(str);
				var checkedValue = "已选择的项目有：";


				sets.forEach(function(currentValue) {

					if (currentValue.checked == true) {
						checkedValue += "\n";
						checkedValue += currentValue.value;
					}
				})

				if (checkedValue == "已选择的项目有：") //
					alert("未选择任何项目")
				else
					alert(checkedValue)
			}





			//function showInfo( ) //显示选中的value值
			// function showValue(thisNode)
			// {
			// 	alert("");
			// 	var showContent=document.createElement("font");
			// 	showContent.innerHTML=thisNode.value;
			// 	document.getElementById("div1").appendChild(showContent);
			// }