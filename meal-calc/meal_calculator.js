var Diner = function(name, meals){
    
    this.name = name;
    this.meals = meals;
}

Diner.prototype.display_name = function() {
    console.log('\n' + this.name + '\n');
}

Diner.prototype.meal_total = function() {
     
    var total = 0;
    var cost = this.meals;
    
     for(var meal in cost) {
        
        total += cost[meal];
        
    }

    return total;
}

Diner.prototype.print_bill = function() {
    
    var cost = this.meals;
    
    for(var meal in cost) {
        
    console.log( meal + " : $" + cost[meal] + "");
    
    }
}

/*
 *--------- Main Program -----------
 */

var Diners = {};

var diner_names = ['Riley Schriner', 'John Doe', 'Jane Doe'];

var number_of_diners = 3;

var dishes = [{Steak: 15.00, Potatos: 35.00, Salad: 25.00 },
              {Steak: 15.00, Salad: 25.00 },
              {Steak: 15.00, Potatos: 35.00 }];

var meal_totals = [];

for(var c = 0; c < number_of_diners; c++){
    Diners[c] = new Diner(diner_names[c], dishes[c]);
    meal_totals.push(Diners[c].meal_total());
}

var tax = 6.75;
var tip_perc = 20;

var tip = tip_percentage(tip_perc);



var meal_total = dinner_total_pre_tax(meal_totals);

var tax_meal_total = dinner_total_with_tax(meal_total, tax);

var tip_meal_total = tip(tax_meal_total);

var tip_total_split = split_tip_even(tip_meal_total, tax_meal_total, number_of_diners);

for(var c = 0; c < number_of_diners; c++){
    
    var diner_tax_total = dinner_total_with_tax(Diners[c].meal_total(), tax);
    
    var diner_total = Number(tip_total_split) + Number(diner_tax_total);
    diner_total = diner_total.toFixed(2);
    console.log('-----------------Diner ' + (c + 1) +'----------------');
    Diners[c].display_name();
    Diners[c].print_bill();
    console.log('\nMeal total: $'+ Diners[c].meal_total(), '\n');
    console.log('Meal Total (with tax = '+ tax + '%): $'+ diner_tax_total, '\n');
    console.log('Tip cost (total bill split evenly): $' + tip_total_split, '\n');
    console.log('Diners total bill: $' + diner_total, '\n');
    
}

console.log('-----------------Total Bill----------------');

console.log('Total bill (pre-tax): $' + meal_total);

console.log('Total bill (with tax): $' + tax_meal_total);

console.log('Total bill (with tax and tip): $' + tip_meal_total);



/*
 *--------- Functions ---------
 */

function tip_total(percentage, bill) {
    var tip_bill = bill * (1 + (percentage * .01));
    
    return tip_bill.toFixed(2);
}

function tip_percentage(percentage) {
    return function(bill) {
        return tip_total(percentage, bill);
    }
}

function dinner_total_pre_tax(totals) {
    
    var return_total = 0;
    totals.forEach(function logArrayElements(element, index, array) {
    return_total += element;
});
    return return_total;
}


function dinner_total_with_tax(bill, tax) {
    var total_tax = tax * .01;
    var return_val = bill * (1 + total_tax);
    
    return return_val.toFixed(2);
}

function split_tip_even(tip_total, tax_total, number_of_diners) {
    var return_total = (tip_total - tax_total) / number_of_diners;
    return return_total.toFixed(2);
}