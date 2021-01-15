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

function colorize(e) {
  let tdCell = e.target;
  if (tdCell.tagName === 'TD') {
    tdCell.className = color;
  }
}
table.addEventListener('click', colorize);

select.addEventListener('change', function (e) {
  color = e.target.value;
});
