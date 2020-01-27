class user {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }
  increaseScroe() {
    return ++this.score;
  }
  decreaseScore() {
    return ++this.score;
  }
}

class paidUser extends user {
  constructor(name, score = 0, balance = 0) {
    super(name, score);
    this.balance = balance;
  }
  increaseBalance() {
    return ++this.balance;
  }
}

var bim = new CreateUser("bim", 100);
bim.increaseScroe();
console.log(bim);

var paidUser1 = new CreatePaidUser("raj", 50, 500);
paidUser1.increaseScroe();
paidUser1.increaseBalance();
console.log(paidUser1);
