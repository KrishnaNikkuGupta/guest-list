var Names_Of_The_Guest_Array = [];
    
function Submit()
{
    var Guest_Name = document.getElementById("Enter_name").value;
	Names_Of_The_Guest_Array.push(Guest_name);
document.getElementById("Display_names").innerHTML=Names_Of_The_Guest_Array;
	console.log(Names_Of_The_Guest_Array );    
    var lenght_of_the_array = Names_Of_The_Guest_Array.length;
    console.log(lenght_of_the_array);
   }



function Show_list()
{
	var i= Names_Of_The_Guest_Array.join("<br>");
	console.log(Names_Of_The_Guest_Array);
	document.getElementById("Show_names").innerHTML=i.toString();
	}


function sorting()
	{
		Names_Of_The_Guest_Array.sort();        
		var i= Names_Of_The_Guest_Array.join("<br>");
		console.log(Names_Of_The_Guest_Array);		
		document.getElementById("Sorted_names").innerHTML=i.toString();
		}


function Search()
{
	var s= document.getElementById("Search_name").value;
	var found=0;
	var j;
	for(j=0; j<Names_Of_The_Guest_Array.length; j++)
		{
			if(s==Names_Of_The_Guest_Array[j]){
				found=found+1;
			}	
		}
	document.getElementById("Search_names").innerHTML="Name found "+found+" Time/s";
	console.log("Found name "+found+" Time/s");
}
