
const Emp = require('./employee');

Employee = Emp.Employee


class Manager extends Employee{

    constructor(name , salary , title , manager, employees)
    {
        super(name , salary , title , manager);
        if(employees == undefined)
        {
            this.employees = [];
        }
        else
        {
            this.employees = employees;
        }
    }

    addEmployee(employee)
    {
        this.employees.push(employee);
    }

    calculateBonus(multiplier)
    {
        let ret= multiplier * this.salary;

        this.employees.forEach(ele => {


            ret += ele.calculateBonus(multiplier);

        });

        return(ret);

        //return(this.salary * multiplier);
    }

}

module.exports.Manager = Manager;

/*
const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000
*/
