class Student {
    
    constructor(name, id)
    {
        this.name = name;
        this.id = id
    }
      
}

let stu = new Student("ARU" , "2SR222222")
console.log(stu.name);
console.log(stu['id']);

module.exports = Student