import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Farm, Fish, Chicken, Cow, Dog, Bear } from './animal-game.js';

$(document).ready(function() {
  $("#new-game").submit(function(event) {
    event.preventDefault();
    const farm = new Farm();

    farm.fish.setHunger();
    setInterval(function() {
      $("#fish-hunger").text(farm.fish.hunger);
    }, 1000);

    $('#feed-fish').click(function() {
      farm.fish.feedFish();
    });
  });

});
