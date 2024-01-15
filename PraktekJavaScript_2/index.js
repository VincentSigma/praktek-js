let beratMadan = 60
let tinggiMadan= 1.6;

let beratJoan = 64;
let tinggiJoan = 1.65;

const MadanIMT = beratMadan / tinggiMadan ** 2;
const JoanIMT =  beratJoan / tinggiJoan ** 2;

const MadanHigherIMT = MadanIMT>JoanIMT
alert('IMT Madan: ' + MadanIMT);
alert('IMT Joan: ' + JoanIMT);
alert('Apakah IMT Madan lebih besar dari IMT Joan?' + MadanHigherIMT);

console.log('IMT Madan: ' + MadanIMT);
console.log('IMT Joan: ' + JoanIMT);
console.log('Apakah IMT Madan lebih besar dari IMT Joan?' + MadanHigherIMT);
