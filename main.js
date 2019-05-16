/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here
var getName = function(first, last, reverse){
    if(reverse){
        return {"name" : last + " " + first};
    }
    else{
        return {"name" : first + " " + last};    
    }
}

var dict = {};

for (var i in employees){
    var emp = employees[i];
    if (!(emp.group in dict)) {
        dict[emp.group] = [];
    }
    dict[emp.group].push(getName(emp.first, emp.last, emp.nameOrder==="reverse"));
}
for (var groups in dict){
    console.log(groups + ":" + JSON.stringify(dict[groups]));
}
/*****************************************************************************************
{ 
    receiving: [{name: "Xia Ye"}]
    sales: [{name: "Amanda Byron"}, {name: "Miltiades Crescens"}],       
}

* Bonus
****************************************************************************************/

// Bonus Anwser Here
