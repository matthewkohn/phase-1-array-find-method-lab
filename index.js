// Will loop through array of records
// Find the first object that has a win or return undefined

function superbowlWin(results) {
  let winner = results.find(item => item.result === "W");
  if (winner !== undefined) {
    return winner.year;
  } else {
    return undefined;
  }
}

console.log(superbowlWin(record));