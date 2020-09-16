export const tab = [];
for (let i = 0; i < 36; i++) {
  tab.push(i + 1);
}

export let tapis = `
  <table>
    <tr>
      <th colspan="3">
        0
      </th>
    </tr>
    <tr>`;

for (let i = 0; i < tab.length; i++) {
  tapis += `<td id='n${i}'>${tab[i]}</td>`;
  if (tab[i] % 3 === 0) {
    tapis += '</tr>';
    tapis += '<tr>';
  }
}
tapis += '</tr></table>';
