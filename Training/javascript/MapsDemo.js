let resto = new Map()

resto.set('name' , 'Nandini')
resto.set(1,'Bangalore')
resto.set('address',['btm','jayanagar','indranagar','whitefield'])
resto
.set('categories', ['Indian', 'Andra style', 'Chinese'])
.set('open' , 11)
.set('close', 23)
.set(true, 'Resto is Open')
.set(false,'Resto is closed')

console.log(resto.get('name'));
console.log(resto.get('categories'));

const time  =12
console.log(resto.get((time >=resto.get('open') && time <=resto.get('close'))));