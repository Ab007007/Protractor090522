const Person = function (fn,ln,birthyear) {
    this.fn = fn;
    this.ln = ln;
    this.birthyear = birthyear
}

Person.prototype.calAge = function() {
    console.log(`Age of a person ${2022-this.birthyear}`);
}

const ahb = new Person("AAAA" , "BBBB" , 1980)
console.log(ahb.fn);
console.log(Person.prototype);
ahb.calAge()