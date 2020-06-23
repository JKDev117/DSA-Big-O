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

function companyStructure(tree, i=0){
  return tree.reduce((output, employee) => {
    output += `${new Array(i).fill('\t').join('')}${employee.name}\n`
    
    if(employee.employees.length){
      output += companyStructure(employee.employees, i+1)
    }

    return output
  },'')
}

console.log(companyStructure(employees))

//console.log(companyStructure(employees_example))

/*
    input to program: employees_example
    
    output of the program:
    Phteve Yobs
      Phteve Bozniak

    input to each recursive call: 
    ([ { name:'Phteve Bozniak', employees: [] } ], 1)

    output of each recursive call:
        Phteve Yobs
          Phteve Bozniak

-------------------------------------------------------------------------------------- */

//node 11-organization-chart.js