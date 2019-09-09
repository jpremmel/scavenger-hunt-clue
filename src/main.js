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
    let secondsPassed = 0;

    let fishHunger = farm.fish.setHunger();
    intervals.push(setInterval(function() {
      $("#fish-hunger").text(farm.fish.hunger);
      secondsPassed++;
      console.log(secondsPassed);
      if (farm.fish.hunger === 10) {
        $("#feed-fish").removeClass("btn-success");
        $("#feed-fish").addClass("btn-warning");
      } else if (farm.fish.hunger === 13) {
        $("#feed-fish").removeClass("btn-warning");
        $("#feed-fish").addClass("btn-danger");
      } else if (farm.fish.hunger === 15) {
        clearInterval(fishHunger);
        for (let i = 0; i < intervals.length; i++) {
          clearInterval(intervals[i]);
        }
        $("#end-game").show();
      }
      if (secondsPassed === 20) {
        secondsPassed = 0;
        addChickenCard();
      }
    }, 1000));

    function addChickenCard() {
      $("#chicken-card").show();
      farm.addChicken();
      let chickenHunger = farm.chicken.setHunger();
      let chickenEggs = farm.chicken.setEggs();
      intervals.push(setInterval(function() {
        $("#chicken-hunger").text(farm.chicken.hunger);
        if(farm.chicken.hunger === 10) {
          $("#feed-chicken").removeClass("btn-success");
          $("#feed-chicken").addClass("btn-warning");
        } else if (farm.chicken.hunger === 13) {
          $("#feed-chicken").removeClass("btn-success");
          $("#feed-chicken").addClass("btn-warning");
        } else if (farm.chicken.hunger === 15) {
          clearInterval(chickenHunger);
          for (let i = 0; i < intervals.length; i++) {
            clearInterval(intervals[i]);
          }
          $("#end-game").show();
        }
        $("#chicken-egg-level").text(farm.chicken.eggs);
        if(farm.chicken.eggs === 10) {
          $("#collect-eggs").removeClass("btn-success");
          $("#collect-eggs").addClass("btn-warning");
        } else if (farm.chicken.eggs === 13) {
          $("#collect-eggs").removeClass("btn-success");
          $("#collect-eggs").addClass("btn-warning");
        } else if (farm.chicken.eggs === 15) {
          clearInterval(chickenHunger);
          for (let i = 0; i < intervals.length; i++) {
            clearInterval(intervals[i]);
          }
          $("#end-game").show();
        }
        // if (secondsPassed === 20) {
        //   secondsPassed = 0;
        //   addChickenCard();
        // }
      }, 1000));
    }

    $('#feed-fish').click(function() {
      $("#feed-fish").removeClass("btn-danger btn-warning");
      $("#feed-fish").addClass("btn-success");
      farm.fish.feedFish();
    });
    $("#feed-chicken").click(function() {
      $("#feed-chicken").removeClass("btn-danger btn-warning");
      $("#feed-chicken").addClass("btn-success");
      farm.chicken.feedChicken();
    });
    $("#collect-eggs").click(function() {
      $("#collect-eggs").removeClass("btn-danger btn-warning");
      $("#collect-eggs").addClass("btn-success");
      farm.chicken.collectEggs();
    });

  });

  $("#start-over").click(function() {
    location.reload();
  });

});
