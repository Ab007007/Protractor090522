const grade =  new Set()

grade.add("A")
grade.add("B")
grade.add("C")

console.log(`total elements in the collection ${grade.size}` );

grade.add("A")
grade.add("B")
grade.add("C")

console.log(`total elements in the collection ${grade.size}` );

grade.delete("A")
console.log(`total elements in the collection ${grade.size}` );

console.log(grade.values());