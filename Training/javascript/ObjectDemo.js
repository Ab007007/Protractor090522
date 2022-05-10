let  employee1 = {
    firstname : 'Aravind',
    lastname : " H ",
    employeeID : 'EMp1234',
    employeeEmail : 'Emp123@abc.com',
    employeeContact : 5522522, 
    employeeAddress : {
        street : "BTM",
        city : " Bangalore",
        state : "Karnataka"
    },
    fullName :  function() {
        console.log(`Employee full name ${this.firstname} , ${this.lastname}`);
    }

}

console.log(employee1.firstname + " : " + employee1.employeeID);
console.log(employee1.employeeAddress['state']);
employee1.fullName();

let empp2 = employee1;
console.log(empp2.employeeAddress);

empp2.firstname = "Lilly";

console.log(employee1.firstname);
console.log(empp2.firstname);