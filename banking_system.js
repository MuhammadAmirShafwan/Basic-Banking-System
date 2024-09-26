class BankAccount {
    constructor(saldoAwal) {
        this.saldo = saldoAwal;
    }

    tampilkanSaldo() {
        console.log(`Saldo saat ini: Rp ${this.saldo.toLocaleString("id-ID")}`);
    }

    deposit(amount) {
        console.log(`Proses menambahkan Rp ${amount.toLocaleString("id-ID")}...`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0) {
                    this.saldo += amount;
                    // this.tampilkanSaldo();
                    resolve(`Deposit berhasil! Saldo baru: Rp ${this.saldo.toLocaleString("id-ID")}`);
                } else {
                    reject("amount deposit tidak valid.");
                }
            }, 5000); // Simulasi delay 5 detik
        });
    }

    tarik(amount) {
        console.log(`Proses penarikan Rp ${amount.toLocaleString("id-ID")}...`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0 && amount <= this.saldo) {
                    this.saldo -= amount;
                    // this.tampilkanSaldo();
                    resolve(`Penarikan berhasil! Saldo baru: Rp ${this.saldo.toLocaleString("id-ID")}`);
                } else {
                    reject("amount tidak valid atau saldo tidak mencukupi.");
                }
            }, 5000); // Simulasi delay 5 detik
        });
    }
}

// Contoh penggunaan
const rekeningSaya = new BankAccount(10000);
rekeningSaya.tampilkanSaldo();
rekeningSaya.deposit(5000).then(console.log).catch(console.error);
rekeningSaya.tarik(3000).then(console.log).catch(console.error);
