// let nilaiAkhir = prompt("Masukkan Nilai Akhir");

// if (nilaiAkhir >= 80 && nilaAkhir <= 100) {
//   document.write(`Nilai Akhir Anda A (${nilaiAkhir})`);
// } else if (nilaiAkhir > -70 && nilaiAkhir <= 80) {
//   document.write(`Nilai Akhir Anda B (${nilaiAkhir}) `);
// } else if (nilaiAkhir >= 60 && nilaiAkhir <= 70) {
//   document.write(`Nilai Akhir Anda C(${nilaiAkhir})`);
// } else {
//   document.write("Anda Belum Mengikuti Ujian");
// }

// let userRole = prompt("Login sebagai: ");

// if (userRole == "Admin") {
//   document.write("Selamat Datang Admin");
// } else if (userRole == "Operator") {
//   document.write("Selamat Datang Operator");
// } else {
//   document.write("Anda Dilarang Mengakses Halaman Ini");
// }

//Tugas
 const timA = ((96+108+89)/3);
 const timB = ((88+91+110)/3);

 console.log(`Rata-Rata Score ${timA}`);
 console.log(`Rata-Rata Score ${timB}`);

if (timA>timB) {
    console.log(`Tim A(${timA}) lebih ungul dari Tim B(${timB})`);
    console.log(`Nilai rata rata tim A adalah (${timA})`);
} else if (timA<timB) {
    console.log(`Tim b(${timB}) lebih ungul dari Tim A(${timA})`);
    console.log(`Nilai rata rata tim B adalah (${timB})`)
} else {
    console.log(`Hasil pertandingan seri dengan nilai rata rata (${timA})`);

}
