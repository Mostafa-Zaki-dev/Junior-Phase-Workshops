// Your code here
const table = document.getElementsByTagName('table')[0];
const button = document.getElementById('add-row');
const select = document.querySelector('select');
let color = '';

function makeRow() {
  const tr = document.createElement('tr');
  let n = 50;
  while (n) {
    const td = document.createElement('td');
    tr.append(td);
    n--;
  }
  table.append(tr);
}

button.addEventListener('click', makeRow);

/* function colorize(e) {
  let tdCell = e.target;
  if (tdCell.tagName === 'TD') {
    tdCell.className = color;
  }
}
table.addEventListener('click', colorize);

select.addEventListener('change', function (e) {
  color = e.target.value;
}); */

// revisited this PairExercise after almost 1 month of gaining more knowledge
// and instead of having a color variable we can get rid of it and use the below:

function colorize(e) {
  let tdCell = e.target;
  if (tdCell.tagName === 'TD') {
    tdCell.className = select.value;
  }
}
table.addEventListener('click', colorize);

// so we can get rid of color variable and the below eventlistener ;) ;) -wink wink-

/* 
select.addEventListener('change', function (e) {
  color = e.target.value;
}); 
*/
