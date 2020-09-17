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
  $('#roulette img').toggleClass('flip');
  const rand = getRand(36);
  console.log(rand);
  console.log($(`#n${rand}`).find('.jeton').length);
  setTimeout(() => {
    $('.number h3').text(`The number was : ${rand}`);
  }, 2100);

  if ($(`#n${rand}`).find('.jeton').length === 1) {
    setTimeout(() => {
      alert('You win!');
      myBalance += 36;
      $('.myBalance').text(`${myBalance}€`);
    }, 2600);
  } else {
    setTimeout(() => {
      alert('You lost...');
    }, 2600);
  }

  setTimeout(() => {
    $('.jeton').remove();
  }, 3000);
});

$('.myBalance').append(`${myBalance}€`);
