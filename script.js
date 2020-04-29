

//Insert Function
function insert(num){
	var myString = document.form.textview.value;  
	var lastChar = myString[myString.length - 1]; 
	if (myString.length < 30) { 
		

	 if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
  
	  document.form.textview.value = myString + num; 
	 }else if(num != lastChar){ 
	  document.form.textview.value = myString.replace(lastChar, num); 
	 }
	}
   }


// Function Result
   function equal(){
	var sum = document.form.textview.value;  
	if (sum){ 
 
		document.form.textview.value = eval(sum)	
	}
   }
  

// Function Currency exchange
function Currency_exchange_1(){
	var sum=document.form.textview.value; 
	if(sum){
		document.form.textview.value =  0.29 * eval(sum) 
		}
	else{
		alert(No)	
		}
}
//________________________________
function Currency_exchange_2(){
	var sum = document.form.textview.value;  
	if (sum){ document.form.textview.value =  3.56 * eval(sum) }	
	else{
		alert(No)	
		}
}
//________________________________
function Currency_exchange_3(){
	var sum = document.form.textview.value;  
	if (sum){ document.form.textview.value =  0.26 * eval(sum) }	
	else{
		alert(No)	
		}
}
//________________________________
function Currency_exchange_4(){
	var sum = document.form.textview.value;  
	if (sum){ document.form.textview.value =  3.84 * eval(sum) }	
	else{
		alert(No)	
		}
}


// Functin Clear
   function Clear(){  
	document.form.textview.value = '';
   }

//Function Delete Back 
   function back(){ 
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length - 1); 
   }

