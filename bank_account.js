class BankAccount {
    constructor(saldoAwal) {
        this.saldo = saldoAwal;
    }

    tampilkanSaldo() {
        document.getElementById("saldo-display").innerText = `Rp ${this.saldo.toLocaleString("id-ID")}`;
    }

    tambahSaldo() {
        let tambah = parseInt(window.prompt("Masukkan nominal yang ingin ditambahkan"));

        if (tambah === null || isNaN(tambah)) {
            alert("Operasi dibatalkan atau input tidak valid");
            return;
        }

        if (tambah > 0) {
            this.saldo += tambah;
            this.tampilkanSaldo();
            alert(`Berhasil! \nSaldo saat ini: Rp ${this.saldo.toLocaleString("id-ID")}`);
        } else {
            alert("Nominal tidak valid");
        }
    }

    kurangiSaldo() {
        let kurang = parseInt(window.prompt("Masukkan nominal yang ingin dikurangi"));

        if (kurang === null || isNaN(kurang)) {
            alert("Operasi dibatalkan atau input tidak valid");
            return;
        }

        if (kurang > 0 && kurang <= this.saldo) {
            this.saldo -= kurang;
            this.tampilkanSaldo();
            alert(`Berhasil! \nSaldo saat ini: Rp ${this.saldo.toLocaleString("id-ID")}`);
        } else {
            alert("Nominal tidak valid atau lebih besar dari saldo");
        }
    }
}

const dompetKu = new BankAccount(10000); // Membuat instance dari class Dompet dengan saldo awal

window.onload = function () {
    dompetKu.tampilkanSaldo(); // Menampilkan saldo awal saat halaman dimuat
};

function depositHandler() {
    dompetKu.tambahSaldo();
}

function withdrawHandler() {
    dompetKu.kurangiSaldo();
}
