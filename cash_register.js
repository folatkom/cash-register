function checkCashRegister(price, cash, cid) {
  let cashBalance = 0;
  let changeNeeded = cash - price;
  let multiplier = 1;
  let pennyBalance = cid[0][1];
  let nickelBalance= cid[1][1];
  let dimeBalance = cid[2][1];
  let quarterBalance = cid[3][1];
  let oneBalance = cid[4][1];
  let fiveBalance = cid[5][1];
  let tenBalance = cid[6][1];
  let twentyBalance = cid[7][1];
  let hundredBalance = cid[8][1];
  let changeObj = {status :"OPEN",change : []}
  for (let i = 0; i < cid.length; i++){
    cashBalance += cid[i][1]
  }
  cashBalance = Math.round(cashBalance*100)/100;
  if (changeNeeded > cashBalance){
    changeObj.status = "INSUFFICIENT_FUNDS";
    changeObj.change = [];
  }
  else if (changeNeeded == cashBalance){
    changeObj.status = "CLOSED";
    changeObj.change = cid;
  }
  else{
    if (changeNeeded >= 100){
      multiplier = Math.floor(changeNeeded/100);
      if(100*multiplier<=hundredBalance){
        changeObj.change.push(["ONE HUNDRED", 100*multiplier]);
        changeNeeded -= 100*multiplier;
      }
      else{
        changeObj.change.push(["ONE HUNDRED", hundredBalance]);
        changeNeeded -= hundredBalance;
      }
    }
    if (changeNeeded >= 20){
      multiplier = Math.floor(changeNeeded/20);
      if(20*multiplier<=twentyBalance){
        changeObj.change.push(["TWENTY", 20*multiplier]);
      changeNeeded -= 20*multiplier;
      }
      else{
        changeObj.change.push(["TWENTY", twentyBalance]);
        changeNeeded -= twentyBalance;
      }
      
    }
    if (changeNeeded >= 10){
      multiplier = Math.floor(changeNeeded/10);
      if(10*multiplier<=tenBalance){
        changeObj.change.push(["TEN", 10*multiplier]);
      changeNeeded -= 10*multiplier;
      }
      else{
        changeObj.change.push(["TEN", tenBalance]);
        changeNeeded -= tenBalance;
      }
    }
    if (changeNeeded >= 5){
      multiplier = Math.floor(changeNeeded/5);
      if(5*multiplier<=fiveBalance){
        changeObj.change.push(["FIVE", 5*multiplier]);
      changeNeeded -= 5*multiplier;
      }
      else{
        changeObj.change.push(["FIVE", fiveBalance]);
        changeNeeded -= fiveBalance;
      }
      
    }
    if (changeNeeded >= 1){
      multiplier = Math.floor(changeNeeded);
      if(multiplier<=oneBalance){
        changeObj.change.push(["ONE", multiplier]);
      changeNeeded -= multiplier;
      }
      else{
        changeObj.change.push(["ONE", oneBalance]);
        changeNeeded -= oneBalance;
      }
    }
    if (changeNeeded >= .25){
      multiplier = Math.floor(changeNeeded/.25);
      if(.25*multiplier<=quarterBalance){
        changeObj.change.push(["QUARTER", .25*multiplier]);
      changeNeeded -= .25*multiplier;
      }
      else{
        changeObj.change.push(["QUARTER", quarterBalance]);
        changeNeeded -= quarterBalance;
      }
      
    }
    if (changeNeeded >= .10){
      multiplier = Math.floor(changeNeeded/.1);
      if(.1*multiplier<=dimeBalance){
        changeObj.change.push(["DIME", .1*multiplier]);
      changeNeeded -= .1*multiplier;
      }
      else{
        changeObj.change.push(["DIME", tenBalance]);
        changeNeeded -= dimeBalance;
      }

    }
    if (changeNeeded >= .05){
      multiplier = Math.floor(changeNeeded/.05);
      if(.05*multiplier<=nickelBalance){
       changeObj.change.push(["NICKEL", .05*multiplier]);
      changeNeeded -= .05*multiplier;
      }
      else{
        changeObj.change.push(["NICKEL", nickelBalance]);
        changeNeeded -= nickelBalance;
      } 
    }
    if (changeNeeded > 0){
      multiplier = Math.round(changeNeeded/.01);
      if(.01*multiplier<=pennyBalance){
       changeObj.change.push(["PENNY", 0.01*multiplier]);
      changeNeeded -= 0.01*multiplier;
      }
      else{
        changeObj.status = "INSUFFICIENT_FUNDS";
    changeObj.change = [];
      }      
    } 
  } 
  return changeObj;
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))