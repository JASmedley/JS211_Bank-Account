class BankAccount {
  constructor(owner, number, transactions) {
    this.owner = owner
    this.number = number
    this.transactions = transactions
  }

  deposit (amt) {
    let t = new this.Transaction(...);
    this.transactions.push(t);
  }

  charge(payee, amt) {
    let t = new Transaction(...);
    this.transactions.push(t);
  }

  balance(){
    //loop through the transactions, and sum up the amounts;
    // return the sum
  }
}

class Transaction {
  constructor(date, payee, amount) {
    this.date = date
    this.payee = payee
    this.amount = amount
    this.data = new Date()
  }

}