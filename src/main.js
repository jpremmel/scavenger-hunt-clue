import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Farm, Fish, Chicken, Cow, Dog, Bear } from './animal-game.js';

$(document).ready(function() {
  $("#new-game").submit(function(event) {
    event.preventDefault();
    $("#new-game").hide();
    $("#start-over").show();
    $("#fish-card").show();
    let farm = new Farm();
    let intervals = [];

    let fishHunger = farm.fish.setHunger();
    intervals.push(setInterval(function() {
      console.log(farm.fish.hunger);
      $("#fish-hunger").text(farm.fish.hunger);
      if (farm.fish.hunger === 10) {
        $("#feed-fish").removeClass("btn-success");
        $("#feed-fish").addClass("btn-warning");
      } else if (farm.fish.hunger === 13) {
        $("#feed-fish").removeClass("btn-warning");
        $("#feed-fish").addClass("btn-danger");
      } else if (farm.fish.hunger === 15) {
        for (let i = 0; i < intervals.length; i++) {
          clearInterval(intervals[i]);
        }
        clearInterval(fishHunger);
        $("#end-game").show();
      }
    }, 1000));

    $('#feed-fish').click(function() {
      $(".btn").removeClass("btn-danger");
      $(".btn").removeClass("btn-warning");
      $(".btn").addClass("btn-success");
      farm.fish.feedFish();
    });
  });

  $("#start-over").click(function() {
    location.reload();
  });

});
