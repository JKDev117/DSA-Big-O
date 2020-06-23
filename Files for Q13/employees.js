//22.2 Assignment
//data for question 11

//36 employees total

const employees = [
    {//zuckerberg object
      name: 'Zuckerberg',
      employees: [
          {
            name: 'Schroepfer',
            employees: [
                {
                  name: 'Bosworth',
                  employees: [
                    { name: 'Steve', employees: [] },
                    { name: 'Kyle' , employees: [] },
                    { name: 'Andra', employees: [] },
                  ]
                },
                {
                  name: 'Zhao',
                  employees: [
                    { name: 'Richie', employees: [] },
                    { name: 'Sofia' , employees: [] },
                    { name: 'Jen', employees: [] },
                  ]
                }
            ] //end employees for Schroepfer
          },
          {
            name: 'Schrage',
            employees: [
                {
                  name: 'VanDyck',
                  employees:[
                    { name: 'Sabrina', employees: [] },
                    { name: 'Michelle' , employees: [] },
                    { name: 'Josh', employees: [] },
                  ]
                },
                {
                  name: 'Swain',
                  employees: [
                    { name: 'Blanch', employees: [] },
                    { name: 'Tome' , employees: [] },
                    { name: 'Joe', employees: [] },
                  ]
                }
            ] //end employees for Schrage
          },
          {
            name: 'Sandberg',
            employees: [
                {
                  name: 'Goler',
                  employees:[
                    { name: 'Eddie', employees: [] },
                    { name: 'Julie' , employees: [] },
                    { name: 'Annie', employees: [] },
                  ]
                },
                {
                  name: 'Hernandez',
                  employees: [
                    { name: 'Rowi', employees: [] },
                    { name: 'Inga' , employees: [] },
                    { name: 'Morgan', employees: [] },
                  ]
                },
                {
                  name: 'Mossinac',
                  employees: [
                    { name: 'Amy', employees: [] },
                    { name: 'Chuck' , employees: [] },
                    { name: 'Vinni', employees: [] },
                  ]
                },
                {
                  name: 'Kelley',
                  employees: [
                    { name: 'Eric', employees: [] },
                    { name: 'Ana' , employees: [] },
                    { name: 'Wes', employees: [] },
                  ] 
                }
            ] //end employees for Sandberg
          }
      ]//end employees key-value for Zuckerberg
    }//end Zuckerberg object
]//end employees array

module.exports = employees