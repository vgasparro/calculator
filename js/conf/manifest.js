// fichier de configuration

var conf= {
    application:"calculator",
    version:12,
    modules:[{name:"calculatrice",
              rootpath:"js/lib/calculator/",
              version:"V02",
              src:["calculator-core-V02.js",
                   "calculator-events-V02.js"
                   ],
              active:true
             },
             {name:"scientifique",
              rootpath:"js/lib/v01/",
              version:"v01",
              src:["calculator-core-V01.js",
                   "calculator-events-V01.js"
                   ],
              active:false
             }]

    
}

