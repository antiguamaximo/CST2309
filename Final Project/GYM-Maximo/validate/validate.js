
function order(firstName, lastName ,cardName, cardNumber, expnMonth, expYear, cvc)
{
	this.firstName= firstName;
	this.lastName= lastName;
	this.password= password;
	this.cardName = cardName;
	this.cardNumber = cardNumber;
	this.expMonth = expMonth;
	this.expYear = expYear;
	this.cvc = cvc;
}
	  
function ValidateForm(firstName, lastName, password, cardName,cardNumber,expMonth, expYear, cvc)
{
   var letters = /^[A-Za-z\s]+$/;  
   if(firstName.value.match(letters))  
    {
		var letters = /^[A-Za-z\s]+$/;  
		if(lastName.value.match(letters))
		{  
			var pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/; 
			if(password.value.match(pattern))  
				{
					var letters = /^[A-Za-z\s]+$/;  
					if(cardName.value.match(letters))  
						{
							  var cardNum = /^([0-9]{16})$/;  
							  if(cardNumber.value.match(cardNum))  
									{  
								  alert('Your card accepted');  
										  var cardMonth = /^([0-9]{2})$/;  
										  if(expMonth.value.match(cardMonth))  
												{  
											  alert('Your card month accepted');  
													  var cardYear = /^([0-9]{4})$/;  
													  if(expYear.value.match(cardYear))  
															{  
														  alert('Your  card year accepted');  
																  var cardCvc = /^([0-9]{3})$/;  
																  if(cvc.value.match(cardCvc))  
																		{  
																	  return true;  
																		}  
																	  else  
																		{  
																		alert("Invalid CVC! 3 Numbers required");  
																		return false;  
																		}
															}  
														  else  
															{  
															alert("Not a valid credit card year! 4 Numbers required");  
															return false;  
															}
												}  
											  else  
												{  
												alert("Not a valid credit card month! 2 Numbers required");  
												return false;  
												}			  
									}  
								  else  
									{  
									alert("Not a valid credit card number! 16 Numbers required");  
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
						alert('Must contain at least one number and one special character and one uppercase and lowercase letter, and at least 8 or more characters');  
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

