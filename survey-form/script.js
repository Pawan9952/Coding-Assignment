
		 function clr() { 
            document.getElementById("result").value = "" 
        	} 

		function takevalue() {
   			var name1=document.getElementById("fname").value;
		    var name2=document.getElementById("lname").value;
			var phone1=document.getElementById("phone").value;
			var email1=document.getElementById("email").value;
			var pro=document.getElementById("pro").value;
			var role=document.getElementById("role").value;
			//for gender
			var gen1=document.getElementById("gender-1");
			var gen2=document.getElementById("gender-2");
			var gen3=document.getElementById("gender-3");
			
			
			document.write("First Name = "+name1+"<br/>")
   			document.write("Last Name = "+name2+"<br/>")
   			document.write("Mobile Number = "+phone1+"<br/>")
   			document.write("Email = "+email1+"<br/>")			
   			document.write("Profession = "+pro+"<br/>")
			// for country
   			document.write("Country = "+role+"<br/>")
			   if(gen1.checked==true){
				document.write("Gender = "+gen1.value+"<br/>")
			}else if(gen2.checked==true){
				document.write("Gender = "+gen2.value+"<br/>")
			}else if(gen3.checked==true){
				document.write("Gender = "+gen3.value+"<br/>")
			}
			

			
		}
