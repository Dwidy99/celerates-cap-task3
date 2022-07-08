// - Buatlah sebuah class Supermarket yang memiliki fitur yang dapat menampilkan hasilnya.
class Supermarket {
  // - Buatlah stock pada setiap masing" barang
  produks = [
    ["mangga", 10],
    ["gula", 20],
    ["nila", 25],
  ];

  // - Setiap barang dibeli, stock berkurang.
  cekStok(namaBarang) {
    for (let i = 0; i < this.produks.length; i++) {
      if (namaBarang == this.produks[i][0]) {
        console.log(`${namaBarang} tersedia ${this.produks[i][1]} buah`);
      }
    }
  }

  // 1. - Jika stocknya ada, return jumlah barang dan sisa barang.
  pesanBarang(namaBarang, pemesananBarang) {
    let barang = namaBarang.toLowerCase();

    for (let i = 0; i < this.produks.length; i++) {
      //   console.log(this.produks[i][0]);
      if (this.produks[i][0] == barang) {
        // - Kalo, barang gak ada. return 'Barang kosong"
        if (this.produks[i][0] !== barang) {
          return "Barang kosong";
        }

        // 1.
        if (this.produks[i][1] > pemesananBarang) {
          let stok = this.produks[i][1];
          let hasil = this.produks[i][1] - pemesananBarang;

          this.produks[i][1] = hasil;
          //   console.log(this.produks[i][1]);
          return `${barang} tersedia ${stok} stok, jika dibeli menjadi ${this.produks[i][1]} stok`;
        }
        // Kalo stocknya kurang, stock += (jumlah pemesanan barang * 2) lalu dikalkulasi kembali
        else if (this.produks[i][1] < pemesananBarang) {
          let hasil = (this.produks[i][1] += stok * 2);
          return `Permintaan ${this.produks[i][0]} terkakulasi menjadi ${hasil} stok`;
        }
      }
    }
  }
}

let indomaret = new Supermarket();
// let indomaret = new Supermarket("Beras", 20);
// indomaret.namaMethod();
