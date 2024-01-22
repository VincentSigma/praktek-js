let beratMadan = 60
let tinggiMadan= 1.6;

let beratJoan = 64;
let tinggiJoan = 1.65;

const MadanIMT = beratMadan / tinggiMadan ** 2;
const JoanIMT =  beratJoan / tinggiJoan ** 2;

const MadanHigherIMT = MadanIMT>JoanIMT

// console.log('IMT Madan: ' + MadanIMT);
// console.log('IMT Joan: ' + JoanIMT);
// console.log('Nilai IMT madan (28.3) Lebih Tinggi Dari Joan (23.9)' + MadanHigherIMT);

if (MadanIMT>=JoanIMT) {
    console.log(`Nilai IMT  Madan (${MadanIMT}) Lebih tinggi dari Joan (${JoanIMT})`);
    
} else {
    console.log(`Nilai IMT  Joan (${JoanIMT}) Lebih tinggi dari Madan (${MadanIMT}
        )`);
    
}
    