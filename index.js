

const findMatching = (drivers, string) => {
   return drivers.filter(function hello(returnDrivers){
       return returnDrivers ===  string || returnDrivers === string.toLowerCase()
   })
}


const fuzzyMatch = (drivers, string) => {
    return drivers.filter(function yes(individualDriver){
        return individualDriver.startsWith(string)
        
    })
}



const matchName = (drivers, name) => {
   return  drivers.filter(function(driverObject){
        return driverObject.name ===  name
    })
}