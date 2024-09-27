class BankAccount {
    constructor(saldoAwal) {
        this.saldo = saldoAwal;
        this.updateSaldoDisplay();
    }

    updateSaldoDisplay() {
        document.getElementById("saldo-display").innerText = `Saldo saat ini: Rp ${this.saldo.toLocaleString("id-ID")}`;
    }

    deposit(amount) {
        console.log(`Proses menambahkan Rp ${amount.toLocaleString("id-ID")}...`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0) {
                    this.saldo += amount;
                    this.updateSaldoDisplay();
                    resolve(`Deposit berhasil! Saldo baru: Rp ${this.saldo.toLocaleString("id-ID")}`);
                } else {
                    reject("Nominal deposit tidak valid.");
                }
            }, 5000); // Simulasi delay 5 detik
        });
    }

    withdraw(amount) {
        console.log(`Proses penarikan Rp ${amount.toLocaleString("id-ID")}...`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0 && amount <= this.saldo) {
                    this.saldo -= amount;
                    this.updateSaldoDisplay();
                    resolve(`Penarikan berhasil! Saldo baru: Rp ${this.saldo.toLocaleString("id-ID")}`);
                } else {
                    reject("Nominal tidak valid atau saldo tidak mencukupi.");
                }
            }, 5000); // Simulasi delay 5 detik
        });
    }
}

// Membuat instance rekening
const rekeningSaya = new BankAccount(10000);

// Function untuk menangani deposit dari input prompt
function depositHandler() {
    const amount = parseInt(prompt("Masukkan nominal deposit:"));
    rekeningSaya.deposit(amount).then(alert).catch(alert);
}

// Function untuk menangani penarikan dari input prompt
function withdrawHandler() {
    const amount = parseInt(prompt("Masukkan nominal penarikan:"));
    rekeningSaya.withdraw(amount).then(alert).catch(alert);
}