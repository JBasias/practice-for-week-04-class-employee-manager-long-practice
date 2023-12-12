const Emp = require('./employee');
const Man = require('./manager');

Employee = Emp.Employee
Manager = Man.Manager

const Hobbes = new Manager("Hobbes", 1000000, "Founder", null);
const Calvin = new Manager("Calvin", 130000 , "Director", Hobbes);
const Susie = new Manager("Susie", 100000, "TA Manager", Calvin);
const Lily = new Employee("Lily", 90000, "TA", Susie);
const Clifford = new Employee("Clifford", 90000, "TA", Susie);

console.log(Hobbes.calculateBonus(.05));
console.log(Calvin.calculateBonus(.05));
console.log(Susie.calculateBonus(.05));
console.log(Lily.calculateBonus(.05));
console.log(Clifford.calculateBonus(.05));


/*

| Name     | Salary  | Title      | Boss   |
| -------- | ------- | ---------- | ------ |
| Hobbes   | 1000000 | Founder    | null   |
| Calvin   | 130000  | Director   | Hobbes |
| Susie    | 100000  | TA Manager | Calvin |
| Lily     | 90000   | TA         | Susie  |
| Clifford | 90000   | TA         | Susie  |

*/
