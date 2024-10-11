const isHappyTicket = (ticket) => {
  if (ticket.length !== 6) {
    return false;
  }
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 0; i < ticket.length / 2; i += 1) {
    firstSum += Number(ticket[i]);
  }
  for (let k = ticket.length - 1; k > (ticket.length - 1) / 2; k -= 1) {
    secondSum += Number(ticket[k]);
  }
  return firstSum === secondSum;
}

console.log(isHappyTicket('385916')) ; // true
console.log(isHappyTicket('231002')); // false
console.log(isHappyTicket('1222'));   // false
console.log(isHappyTicket('054702')); // true
console.log(isHappyTicket('00'));     // true