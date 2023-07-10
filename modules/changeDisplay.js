export function changeDisplayedPage(diplay, notDisplayedA, notDisplayedB) {
  diplay.classList.remove('noDisplay');
  notDisplayedA.classList.add('noDisplay');
  notDisplayedB.classList.add('noDisplay');
}

export function redIndicator(red, noRedA, noRedB) {
  red.classList.add('dark_red');
  noRedA.classList.remove('dark_red');
  noRedB.classList.remove('dark_red');
}