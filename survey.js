
// total sample space => mens + women + kids in colony.
// survey target => find out all advance cigarette smoker mens.
//               => find out all maghai pan consumer women.


// how to do the survey for smokers.
// step: 1 => find out all the mens in colony.
// step: 2 => find out all the mens who are cigarette smokers.
// step: 3 => find out all the smoker mens who smoke `Advance cigarette`.

// how to do the survey for pan consumers.
// step: 1 => find out all the women in colony.
// step: 2 => find out all the women who are consume pan.
// step: 3 => find out all the pan consumer women who eat `maghai pan`.


let sample_space = [
    {
        name: 'Akshay',
        sex: 'male',
        isSmoker: true,
        isPanEater: false,
        cigaretteBrand: 'advance',
    },
    {
        name: 'Laxman',
        sex: 'male',
        isSmoker: false,
        isPanEater: true,
        panType: 'banrasi'
    },
    {
        name: 'sanjana',
        sex: 'female',
        isSmoker: true,
        cigaretteBrand: 'gold flake',
        isPanEater: true,
        panType: 'magahi'
    },
    {
        name: 'nandu',
        sex: 'kid',
        isSmoker: true,
        cigaretteBrand: 'double mint',
        isPanEater: true,
        panType: 'kalkatta'
    },
    {
        name: 'thakur saab',
        sex: 'male',
        isSmoker: true,
        cigaretteBrand: 'cigar',
        isPanEater: false
    },
];


function searchForSex(sampleSpace, sexType) {
    let menOrWomenOrKids = sampleSpace.filter((value) => value.sex === sexType);
    return function isManSmoker(isSmoker) {
        let smokerOrNonSmokers = menOrWomenOrKids.filter((value) => value.isSmoker === isSmoker);
        if(isSmoker) {
            return function whichCigaretteBrand(brand) {
                return smokerOrNonSmokers.filter((value) => value.cigaretteBrand === brand);
            }
        } else {
            console.log("list of non smokers");
            return smokerOrNonSmokers;
        }
    }
}

console.log(searchForSex(sample_space, 'male')(true)('advance'));
console.log(`********************************`);
console.log(searchForSex(sample_space, 'male')(false));