function checkNode(thisNode) {
				var value0 = thisNode.getElementsByTagName("input")[0].value;
				var name0 = thisNode.getElementsByClassName("label")[0].innerText;
				var name = name0.slice(0, -1);
				if (value0 == "") {
					alert("请填写" + name);
					return true; //停下							
				} else if (name == "E-mail")
					checkEmail(value0)
			}

			function checkEmail(sEmail) {
				var num = sEmail.indexOf('@');
				if (num < 1 || num == sEmail.length - 1)
					alert("请填写正确的email")
			}

			function check() {
				var formSets = document.getElementsByTagName("tr");
				for (let i of formSets) {
					if (checkNode(i))
						break;
				}
			}









