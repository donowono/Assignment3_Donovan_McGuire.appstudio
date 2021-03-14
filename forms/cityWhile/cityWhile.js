let cities = []
let i = 0
let doneWithCities = false
while(doneWithCities == false){
    cities[i] = prompt('Enter the next city:')
    i++
    doneWithCities = confirm("Are you done with the names?")
    while(doneWithCities == true){
        lc_cities =  cities.forEach( element => console.log(element.toLowerCase())
        lc_cities.forEach( element => console.log(element))
        }
    }

