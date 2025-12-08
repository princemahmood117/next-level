// grouping and aggregating data

const surveyResponse = [
    'A',
    'B',
    'C',
    'A',
    'B',
    'B',
    'C',
    'A',
    'A',
    'D',
    'C',
    'C',
    'B',
    'A',
]

const count = surveyResponse.reduce((table, response) => {
    console.log(table, ': ' , "next iteration value", response);

    if(table[response]) {
        table[response] = table[response] + 1  // for next found of 'A' :--> table['A'] + 1 ==== 1 + 1 == 2
    }
    else {
        table[response] = 1
    }
    return table

    // table[response] = (table[response] || 0) + 1 ;  return table  // one-liner diyao kore felte pari upor er if-else statement ta
},{})

console.log('\nfinal output : ', count);


// ! output : { A: 5, B: 4, C: 4, D: 1 }
// * output : { A: 5, B: 4, C: 4, D: 1 }
// ? output : { A: 5, B: 4, C: 4, D: 1 }
// todo output : { A: 5, B: 4, C: 4, D: 1 }
// // output : { A: 5, B: 4, C: 4, D: 1 }