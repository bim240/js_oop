var userMethods = {
  increaseScroe() {
    return ++this.score;
  },

  decreaseScore() {
    return --this.score;
  }
};

function createUser(name, score = 0) {
  var obj = Object.create(userMethods);
  obj.name = name;
  obj.score = score;
  return obj;
}

var paidUserMethod = {
  increaseBalance() {
    return ++this.score;
  }
};

function createPaidUser(name, score = 0, balance = 0) {
  var obj = createUser(name, score);
  obj.balance = balance;
  Object.setPrototypeOf(obj, paidUserMethod);
  Object.setPrototypeOf(paidUserMethod, userMethods);
  return obj;
}

var bim = createUser("bim", 100);
bim.increaseScroe();
console.log(bim);

var paidUser1 = createPaidUser("raj", 50, 500);
paidUser1.increaseScroe();
paidUser1.increaseBalance();
console.log(paidUser1);
