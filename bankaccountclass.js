class BankAccount {
  constructor(ownerName, accountNumber, balance = 0) {
    this.ownerName = ownerName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  
  deposit(miqdor) {
    if (miqdor > 0) {
      this.balance += miqdor;
      console.log(`${this.balance}`);
    } else {
      console.log("Error");
    }
  }

  
  withdraw(miqdor) {
    if (miqdor > this.balance) {
      console.log("Error");
    } else {
      this.balance -= miqdor;
      console.log(`${this.balance}`);
    }
  }

  
  showBalance() {
    console.log(`${this.ownerName}- ${this.balance}`);
  }
}


const a1 = new BankAccount("Azizbek", "123456");
const a2 = new BankAccount("Asadbek", "123564", 100);

a1.deposit(10);
a1.withdraw(20);
a1.showBalance();

a2.showBalance();
a2.withdraw(30);
a2.deposit(40);
