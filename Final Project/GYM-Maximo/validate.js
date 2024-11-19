
function Order(CardName, CardNumber, ExpirationMonth, ExpirationYear, CVC)
{
	this.Firstname= Firstname;
	this.Lastname= Lastname;
	this.Password= Password;
   this.CardName = CardName;
   this.CardNumber = CardNumber;
   this.ExpirationMonth = ExpirationMonth;
   this.ExpirationYear = ExpirationYear;
   this.CVC = CVC;
}





	  
function ValidateForm(Firstname, Lastname, Password, CardName,CardNumber,ExpirationMonth, ExpirationYear, CVC)
{
   var letters = /^[A-Za-z\s]+$/;  
   if(Firstname.value.match(letters))  
    {
		var letters = /^[A-Za-z\s]+$/;  
		if(Lastname.value.match(letters))
		{  
			var pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/; 
			if(Password.value.match(pattern))  
				{
					var letters = /^[A-Za-z\s]+$/;  
					if(CardName.value.match(letters))  
						{  
				  
						  
						
							  var cardno = /^([0-9]{16})$/;  
							  if(CardNumber.value.match(cardno))  
									{  
								  alert('Your  card accepted');  
								  
										  var cardmonth = /^([0-9]{2})$/;  
										  if(ExpirationMonth.value.match(cardmonth))  
												{  
											  alert('Your  card month accepted');  

													  var cardyear = /^([0-9]{4})$/;  
													  if(ExpirationYear.value.match(cardyear))  
															{  
														  alert('Your  card year accepted');  

																  var cardcvc = /^([0-9]{3})$/;  
																  if(CVC.value.match(cardcvc))  
																		{  
																	  alert('Your  card CVC accepted');  
																	  return true;  
																		}  
																	  else  
																		{  
																		alert("Not a valid credit card CVC! 3 Numeric required");  
																		return false;  
																		}
														  
															}  
														  else  
															{  
															alert("Not a valid credit card year! 4 Numeric required");  
															return false;  
															}
											  
												}  
											  else  
												{  
												alert("Not a valid credit card month! 2 Numeric required");  
												return false;  
												}			  
								  
									}  
								  else  
									{  
									alert("Not a valid credit card number! 16 Numeric required");  
									return false;  
									}  
						  
						}  
						else  
						{  
						alert('Please input alphabet characters only');  
						return false;  
						}  
						
				}  
						else  
						{  
						alert('Must contain at least one number and one special charactcters and one uppercase and lowercase letter, and at least 8 or more characters');  
						return false;  
						}  	
			}  
			else  
			{  
			alert('Please input alphabet characters only');  
			return false;  
			}  

						
	}  
		else  
		{  
		alert('Please input alphabet characters only');  
		return false;  
		}  



}

