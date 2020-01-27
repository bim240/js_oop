function CreateUser(name, score = 0) {
  this.name = name;
  this.score = score;
}

CreateUser.prototype = {
  increaseScroe() {
    return ++this.score;
  },
  decreaseScore() {
    return ++this.score;
  }
};

function CreatePaidUser(name, score = 0, balance = 0) {
  CreateUser.call(this, name, score);
  this.balance = balance;
}

CreatePaidUser.prototype = {
  increaseBalance() {
    return ++this.balance;
  }
};

Object.setPrototypeOf(CreatePaidUser.prototype, CreateUser.prototype);

var bim = new CreateUser("bim", 100);
bim.increaseScroe();
console.log(bim);

var paidUser1 = new CreatePaidUser("raj", 50, 500);
paidUser1.increaseScroe();
paidUser1.increaseBalance();
console.log(paidUser1);
