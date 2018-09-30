 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    const fifteen = inventors.filter((inventor)=>{
        if(inventor.year>=1500 && inventor.year<1600){
          return true // porque filter devuleve valores booleans
        }
    })
    //en casi una linea
    //const fifteen = inventors.filter(inventor=>(inventor.year>=1500&&inventor.year<1600))
    //porque la flecha tiene un return explicito y el operador && retorna valor boolean

    console.table(fifteen); //me muestra en una tabla a los obj q 
                            //cumplen la condicion y por columna hay un key.
    
    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
   const nameLastName = inventors.map(inventor=> `${inventor.first} ${inventor.last}`)
   console.log(nameLastName);

    // Array.prototype.sort()-- ordenar de dos en dos
    // 3. Sort the inventors by birthdate, oldest to youngest
    const oldToYoung = inventors.sort((a,b)=>{
      if(a.year>b.year){//si el primero es mayor q el segundo retorne 1
        return 1;
      }else {
        return -1;//si el primero es menor retorna -1
      }
    });
    //con operador ternanrio
    //const oldToYoung = inventors.sort((a,b)=> a.year>b.year ? 1 : -1)
    console.table(oldToYoung);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const totalLive = inventors.reduce((total, inventor)=>{
      
      return total+(inventor.passed - inventor.year);
    },0)//valor inicial es 0
    console.log(totalLive);

    // 5. Sort the inventors by years lived

    const moreOld = inventors.sort((a,b)=>{
      const men = a.passed - a.year;
      const men2 = b.passed - b.year;
      return men>men2?-1:1 //del muerto mas viejo al mas joven
      //1:-1 del muerto mas joven al mas viejo
    })
    console.table(moreOld);
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const content = document.querySelector(".mw-category");
    // const links = Array.from(content.querySelectorAll("a"));

    // const de = links
    //             .map(link=>link.textContent)//primero un map para sacar los nombres
    //             .filter(name => name.includes("de"));//luego filtro todos lo q tengan "de"

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const abc = people.sort((lastperson, nextperson)=>{
      const [aLastName, aFirstName] = lastperson.split(",");
      const [bLastName, bFirstName] = nextperson.split(",");
      return aLastName>bLastName?1:-1
    });
    console.log(abc);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const via = data.reduce((obj,item)=>{
      if(!obj[item]){//consolelog obj ---{} vacios
        obj[item]=0; //si es la primera vez q aparece una key el counter empieza en 0
      }
      obj[item]++;//y por cada aparicion se suma 1
      
      return obj;
    }, {});
    console.log(via)