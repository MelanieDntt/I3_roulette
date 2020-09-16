import $ from 'jquery';
import { tapis } from './app/tapis';
// import { balance } from './app/solde';
import { getRand } from './app/helpers/random';

$('.tapis').append(tapis);

let myBalance = 10;

$('.tapis td').on('click', function () {
  $(this).append('<div class=\'jeton\'>1€</div>');
  myBalance -= 1;
  $('.myBalance').text(`${myBalance}€`);
  if (myBalance < 0) {
    alert('Sorry you don\'t have enough money to play');
    myBalance = 0;
    $('.myBalance').text(`${myBalance}€`);
  }
});

$('#play').on('click', () => {
  const rand = getRand(36);
  console.log(rand);
  console.log($(`#n${rand}`).find('.jeton').length);
  $('.number h3').text(`The number was : ${rand}`);
  if ($(`#n${rand}`).find('.jeton').length === 1) {
    setTimeout(() => {
      alert('You win!');
      myBalance += 36;
      $('.myBalance').text(`${myBalance}€`);
    }, 1000);
  } else {
    setTimeout(() => {
      alert('You lost...');
    }, 1000);
  }

  setTimeout(() => {
    $('.jeton').remove();
  }, 1500);
});

$('.myBalance').append(`${myBalance}€`);
