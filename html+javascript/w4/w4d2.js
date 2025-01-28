//W4D2 Demo - External JS file - Data Structure

//cariable - smallest data storage device
var name = `Levi`
//ONE name --> one value

//data structures: ONE name --> MANY values
//key + value pair - need name & key to access value

//ARRAYS--------------------------------------------------
//ket --> [ INDEX ]  start at 0, whole #'s, positive
var htmlNames = [
    `Loki`,           //index: 0
    `Abigail`,        //index: 1
    `Andrew`,         //index: 2
]

//access one value: name + key --> htmlNames[#]
console.log(`INDEX 0: ${htmlNames[0]}`)

//add a new name to the array using the naxt .push()
htmlNames.push(`Wolfy`)  //auto does this

//add another new name to this array using the next index
htmlNames[4] = `Max`

//BATCH PROCESSING: "do the same to all"
//repeat --> loop | array --> for loop
for(var i = 0; i < htmlNames.length; i++){

    console.log(`INDEX ${i}: ${htmlNames[i]}`)


}

//ASSOCIATIVE ARRAY---------------------------------------
//key --> [STR INDEX] must be unique, decided by the developer
var htmlColors = []
htmlColors [`zero`] =`Green`
htmlColors [`one`] = `Blue`
htmlColors [`two`] = `Blue`
htmlColors [`three`] = `Blue`
htmlColors [`four`] = `Orange`

//"FOR KEY IN" loop --used for associative arrays (and objects)
for(var key in htmlColors){

    console.log(`INDEX ${key}: ${htmlColors[key]}`)


}

//OBJECTS----------------------------------------------------------
//key --> property; can be reused across objects;
//use "dot syntax" object.property to access the value
var gds111_0 = {
    first: `Loki`,     //string type
    color: `green`,    //string type
    age: 20,           //number type
    hasPets: true,     // boolean type
    petNames: [`Arthur`,`Merlin`]
}

//access one value: object.property to access the value
//read like the POSESSIVE APOSTROPJE: gds111_0's first name
console.log(`gds111_0 name: ${gds111_0.first}`)

for(var key in gds111_0){

    console.log(`PROPERTY ${key}: ${gds111_0[key]}`)

    if(key == `hasPets`){
        console.log(`73`)
        if(gds111_0[key] == true){
            console.log(`75`)
            for(var i = 0; i < gds111_0.petNames.length; i++){
                console.log(`Pets#${i}: ${gds111_0.petNames[i]}`)
            }
        }
    }
}
