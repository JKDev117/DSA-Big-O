/* #11. Organization Chart ------------------------------------------------------------------ */

const employees = require('./employees.js')

const employees_example = [
  {
    name: 'Phteve Yobs',
    employees: [
                { name:'Phteve Bozniak', employees: [] }
               ]
  }
]

let ticks = 0;

function companyStructure(tree, i=0){

  return tree.reduce((output, employee) => {
    ticks++
    output += `${new Array(i).fill('\t').join('')}${employee.name}\n`
    
    if(employee.employees.length){
      ticks++
      output += companyStructure(employee.employees, i+1)
    }

    return output
  },'')
}

companyStructure(employees_example)
console.log({ticks})
ticks=0

companyStructure(employees)
console.log({ticks})
ticks=0




//node 11-organization-chart.js