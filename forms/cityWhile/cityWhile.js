
let cities = []
let i = 0
let t = 0
let doneWithCities = false
while(doneWithCities == false){
    cities[i] = prompt('Enter the next city:')
    i++
    doneWithCities = confirm("Are you done with entering cities?")

    }

while ( t < cities.length){
    console.log(cities[t].toLowerCase())
    t++
}
