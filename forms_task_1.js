
function calc()
{
    var result1 = 0;
    var result2 = 0;
    var result3 = 0;
    var result4 = 0;
    var quantity_1 = 0;
    var quantity_2 = 0;
    var quantity_3 = 0;
    var quantity_4 = 0;
    
	    		if (document.getElementById("model1").checked)
                    {
                        result1 += parseInt(document.form1.model1_price.value.slice(0, document.form1.model1_price.value.indexOf(" ")));
                    }

	    		if (document.getElementById("model2").checked)
	    			{
                        result2 += parseInt(document.form1.model2_price.value.slice(0, document.form1.model2_price.value.indexOf(" ")));
                    }
	    		if (document.getElementById("model3").checked)
	    			{
                        result3 += parseInt(document.form1.model3_price.value.slice(0, document.form1.model3_price.value.indexOf(" ")));
                    }
	    		if (document.getElementById("model4").checked)
	    			{
                        result4 += parseInt(document.form1.model4_price.value.slice(0, document.form1.model4_price.value.indexOf(" ")));
                    }
                
                quantity_1 = document.form1.model1_cost.value;
                if(quantity_1 >= 0)
                    {}
                     else
                     {
                        quantity_1=0;
                        document.form1.model1_cost.value = quantity_1;
                    }
                    
                    
                quantity_2 = document.form1.model2_cost.value;
                if(quantity_2 >= 0)
                    {}
                     else
                     {
                        quantity_2=0;
                        document.form1.model2_cost.value = quantity_2;
                    }

                quantity_3 = document.form1.model3_cost.value;
                if(quantity_3 >= 0)
                    {}
                     else
                     {
                        quantity_3=0;
                        document.form1.model3_cost.value = quantity_3;
                    }
                quantity_4 = document.form1.model4_cost.value;
                if(quantity_4 >= 0)
                    {}
                     else
                     {
                        quantity_4=0;
                        document.form1.model4_cost.value = quantity_4;
                    }


                    result=(quantity_1 * result1)+(quantity_2 * result2)+(quantity_3 * result3)+(quantity_4 * result4);
                    form1.sum.value = result;
}