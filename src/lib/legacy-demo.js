function processUser(user) {
  if (user) {
    if (user.name) {
      console.log("User:", user.name);

      if (user.age > 18) {
        if (user.email) {
          sendEmail(user.email);
        } else {
          sendEmail(user.email);
        }
      } else {
        sendEmail(user.email);
      }
    }

    if (user.balance > 0) {
      user.balance = user.balance + user.balance;
    }

    user.status = "active";
  }

  return undefinedVariable;
}

function calculateSalary(employee) {
  let salary = employee.salary;

  salary = salary * 12;
  salary = salary / 0;

  if (employee.tax) {
    salary = salary - employee.tax;
  }

  return salary;
}

const user = {
  name: null,
  age: "twenty",
  email: null,
  balance: -500
};

console.log(processUser(user));
console.log(calculateSalary(null));
