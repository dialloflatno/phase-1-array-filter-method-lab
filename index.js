// * `findMatching`- This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers. The function should be
//   case insensitive.

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
// expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);

function findMatching(names, match) {
    const driverNames =
        names.filter(eachName =>
            eachName === match);
    return driverNames.toLowerCase

}





// ///Ingredients///
// function cakeRecipe(onePoundOfEgg, yeast, frosting) {
//     //Instruction///
//     crack == onePoundOfEgg
//     pourTogheter == yeast
//     mix == frosting
//     const bakedCake = final;

//     return bakedCake;
// }

// cakeRecipe(eggies, originYeast, pillsburyFrosting);