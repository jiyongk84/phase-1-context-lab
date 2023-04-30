/* Your Code Here */
function createEmployeeRecord (employeeData) {
    const [firstName, familyName, title, payPerHour] = employeeData;
    return  {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
     };
}

function createEmployeeRecords(employeeData) {
    return employeeData.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    const timeInEvent = {
      type: 'TimeIn',
      hour: parseInt(hour),
      date: date
    };
  
    this.timeInEvents.push(timeInEvent);
  
    return this;
  }
  
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    
    const timeOutEvent = {
      type: 'TimeOut',
      hour: parseInt(hour),
      date: date
    };

    this.timeOutEvents.push(timeOutEvent);

    return this;
  }
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) /100;
    return hoursWorked;
  }
  
function wagesEarnedOnDate(date) {
    const calcWages = (hoursWorkedOnDate.call(this, date) * (this.payPerHour));
    return calcWages;
  }
  
  
  function findEmployeeByFirstName(srcArray, firstName) {
    const employee = srcArray.find(employee => employee.firstName === firstName);
  
    return employee;
  }

  function calculatePayroll (employeeRecords) {
    let totalPay = 0;
    for (let i = 0; i < employeeRecords.length; i++) {
      totalPay += allWagesFor.call(employeeRecords[i]);
    }
    return totalPay;
  }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

