import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Farm, Fish, Chicken, Cow, Dog, Bear } from './animal-game.js';

$(document).ready(function() {
  $("#new-game").submit(function(event) {
    event.preventDefault();
    const farm = new Farm();
    let intervals = [];

    farm.fish.setHunger();

    intervals.push(setInterval(function() {
      console.log(intervals.length);
      if (farm.fish.hunger === 10) {
        $("#fish-hunger").text(farm.fish.hunger);
        $("#feed-fish").removeClass("btn-success");
        $("#feed-fish").addClass("btn-warning");
      } else if (farm.fish.hunger === 13) {
        $("#fish-hunger").text(farm.fish.hunger);
        $("#feed-fish").removeClass("btn-warning");
        $("#feed-fish").addClass("btn-danger");
      } else if (farm.fish.hunger === 15) {
        $("#fish-hunger").text(farm.fish.hunger);
        for (let i = 0; i < intervals.length; i++) {
          clearInterval(intervals[i]);
        }
        $("#end-game").text("GAME OVER");
      } else {
      $("#fish-hunger").text(farm.fish.hunger);
      }
    }, 1000));

    $('#feed-fish').click(function() {
      farm.fish.feedFish();
    });
  });

});
