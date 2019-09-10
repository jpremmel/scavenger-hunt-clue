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
      secondsPassed += 0.5;
      if (farm.fish.hunger === 10) {
        $("#feed-fish").removeClass("btn-success");
        $("#fish-hunger").addClass("warning");
        $("#feed-fish").addClass("btn-warning");
      } else if (farm.fish.hunger === 13) {
        $("#feed-fish").removeClass("btn-warning");
        $("#fish-hunger").removeClass("warning");
        $("#fish-hunger").addClass("danger");
        $("#feed-fish").addClass("btn-danger");
      } else if (farm.fish.hunger === 15) {
        clearInterval(fishHunger);
        for (let i = 0; i < intervals.length; i++) {
          clearInterval(intervals[i]);
        }
        $("#end-game").show();
        turnOffButtons();
        generateGif();
      }
      if (secondsPassed === 20 && farm.animals.length === 1) {
        secondsPassed = 0;
        addChickenCard();
      }
    }, 500));

    function addChickenCard() {
      $("#chicken-card").show();
      farm.addChicken();
      let chickenHunger = farm.chicken.setHunger();
      let chickenEggs = farm.chicken.setEggs();
      intervals.push(setInterval(function() {
        $("#chicken-hunger").text(farm.chicken.hunger);
        if(farm.chicken.hunger === 10) {
          $("#feed-chicken").removeClass("btn-success");
          $("#chicken-hunger").addClass("warning");
          $("#feed-chicken").addClass("btn-warning");
        } else if (farm.chicken.hunger === 13) {
          $("#feed-chicken").removeClass("btn-warning");
          $("#chicken-hunger").removeClass("warning");
          $("#feed-chicken").addClass("btn-danger");
          $("#chicken-hunger").addClass("danger");
        } else if (farm.chicken.hunger === 15) {
          clearInterval(chickenHunger);
          for (let i = 0; i < intervals.length; i++) {
            clearInterval(intervals[i]);
          }
          $("#end-game").show();
          turnOffButtons();
          generateGif();
        }
        $("#chicken-egg-level").text(farm.chicken.eggs);
        if(farm.chicken.eggs === 10) {
          $("#collect-eggs").removeClass("btn-success");
          $("#chicken-egg-level").addClass("warning");
          $("#collect-eggs").addClass("btn-warning");
        } else if (farm.chicken.eggs === 12) {
          $("#collect-eggs").removeClass("btn-warning");
          $("#chicken-egg-level").removeClass("warning");
          $("#collect-eggs").addClass("btn-danger");
          $("#chicken-egg-level").addClass("danger");
        } else if (farm.chicken.eggs === 16) {
          clearInterval(chickenHunger);
          for (let i = 0; i < intervals.length; i++) {
            clearInterval(intervals[i]);
          }
          $("#end-game").show();
          turnOffButtons();
          generateGif();
        }
        if (secondsPassed === 20 && farm.animals.length === 2) {
          secondsPassed = 0;
          addCowCard();
        }
      }, 500));

      function addCowCard() {
        $("#cow-card").show();
        farm.addCow();
        let cowHunger = farm.cow.setHunger();
        let cowMilk = farm.cow.setMilk();
        intervals.push(setInterval(function() {
          $("#cow-hunger").text(farm.cow.hunger);
          if(farm.cow.hunger === 10) {
            $("#feed-cow").removeClass("btn-success");
            $("#cow-hunger").addClass("warning");
            $("#feed-cow").addClass("btn-warning");
          } else if (farm.cow.hunger === 13) {
            $("#feed-cow").removeClass("btn-warning");
            $("#cow-hunger").removeClass("warning");
            $("#feed-cow").addClass("btn-danger");
            $("#cow-hunger").addClass("danger");
          } else if (farm.cow.hunger === 15) {
            clearInterval(cowHunger);
            for (let i = 0; i < intervals.length; i++) {
              clearInterval(intervals[i]);
            }
            $("#end-game").show();
            turnOffButtons();
            generateGif();
          }
          $("#cow-milk-level").text(farm.cow.milkLevel);
          if(farm.cow.milkLevel === 10) {
            $("#milk").removeClass("btn-success");
            $("#cow-milk-level").addClass("warning");
            $("#milk").addClass("btn-warning");
          } else if (farm.cow.milkLevel === 12) {
            $("#milk").removeClass("btn-warning");
            $("#cow-milk-level").removeClass("warning");
            $("#milk").addClass("btn-danger");
            $("#cow-milk-level").addClass("danger");
          } else if (farm.cow.milkLevel === 16) {
            clearInterval(cowMilk);
            for (let i = 0; i < intervals.length; i++) {
              clearInterval(intervals[i]);
            }
            $("#end-game").show();
            turnOffButtons();
            generateGif();
          }
          if (secondsPassed === 20 && farm.animals.length === 3) {
            secondsPassed = 0;
            addDogCard();
          }
        }, 500));

        function addDogCard() {
          $("#dog-card").show();
          farm.addDog();
          let dogHunger = farm.dog.setHunger();
          let dogEnergy = farm.dog.setEnergy();
          intervals.push(setInterval(function() {
            $("#dog-hunger").text(farm.dog.hunger);
            if(farm.dog.hunger === 10) {
              $("#feed-dog").removeClass("btn-success");
              $("#dog-hunger").addClass("warning");
              $("#feed-dog").addClass("btn-warning");
            } else if (farm.dog.hunger === 13) {
              $("#feed-dog").removeClass("btn-warning");
              $("#dog-hunger").removeClass("warning");
              $("#feed-dog").addClass("btn-danger");
              $("#dog-hunger").addClass("danger");
            } else if (farm.dog.hunger === 15) {
              clearInterval(dogHunger);
              for (let i = 0; i < intervals.length; i++) {
                clearInterval(intervals[i]);
              }
              $("#end-game").show();
              turnOffButtons();
              generateGif();
            }
            $("#dog-energy-level").text(farm.dog.energyLevel);
            if(farm.dog.energyLevel === 10) {
              $("#walk").removeClass("btn-success");
              $("#dog-energy-level").addClass("warning");
              $("#walk").addClass("btn-warning");
            } else if (farm.dog.energyLevel === 12) {
              $("#walk").removeClass("btn-warning");
              $("#dog-energy-level").removeClass("warning");
              $("#walk").addClass("btn-danger");
              $("#dog-energy-level").addClass("danger");
            } else if (farm.dog.energyLevel === 16) {
              clearInterval(dogEnergy);
              for (let i = 0; i < intervals.length; i++) {
                clearInterval(intervals[i]);
              }
              $("#end-game").show();
              turnOffButtons();
              generateGif();
            }
            if (secondsPassed === 20 && farm.animals.length === 4) {
              secondsPassed = 0;
              addBearCard();
            }
          }, 500));

          function addBearCard() {
            $(".bear-col-left").show()
            $(".bear-col").show();
            $(".bear-col-right").show();
            farm.addBear();
            let bearHunger = farm.bear.setHunger();
            intervals.push(setInterval(function() {
              $("#bear-hunger").text(farm.bear.hunger);
              if(farm.bear.hunger === 10) {
                $("#feed-bear").removeClass("btn-success");
                $("#bear-hunger").addClass("warning");
                $("#feed-bear").addClass("btn-warning");
              } else if (farm.bear.hunger === 12) {
                $("#feed-bear").removeClass("btn-warning");
                $("#bear-hunger").removeClass("warning");
                $("#feed-bear").addClass("btn-danger");
                $("#bear-hunger").addClass("danger");
              } else if (farm.bear.hunger === 16) {
                clearInterval(bearHunger);
                for (let i = 0; i < intervals.length; i++) {
                  clearInterval(intervals[i]);
                }
                $("#end-game").show();
                turnOffButtons();
                generateGif();
              }
            }, 500));
          }
        }
      }
    }


    $('#feed-fish').click(function() {
      $("#feed-fish").removeClass("btn-danger btn-warning");
      $("#fish-hunger").removeClass("warning danger");
      $("#feed-fish").addClass("btn-success");
      farm.fish.feedFish();
    });
    $("#feed-chicken").click(function() {
      $("#feed-chicken").removeClass("btn-danger btn-warning");
      $("#chicken-hunger").removeClass("warning danger");
      $("#feed-chicken").addClass("btn-success");
      farm.chicken.feedChicken();
    });
    $("#collect-eggs").click(function() {
      $("#collect-eggs").removeClass("btn-danger btn-warning");
      $("#chicken-egg-level").removeClass("warning danger");
      $("#collect-eggs").addClass("btn-success");
      farm.chicken.collectEggs();
    });
    $("#feed-cow").click(function() {
      $("#feed-cow").removeClass("btn-danger btn-warning");
      $("#cow-hunger").removeClass("warning danger");
      $("#feed-cow").addClass("btn-success");
      farm.cow.feedCow();
    });
    $("#milk").click(function() {
      $("#milk").removeClass("btn-danger btn-warning");
      $("#cow-milk-level").removeClass("warning danger");
      $("#milk").addClass("btn-success");
      farm.cow.milkCow();
    });
    $("#feed-dog").click(function() {
      $("#feed-dog").removeClass("btn-danger btn-warning");
      $("#dog-hunger").removeClass("warning danger");
      $("#feed-dog").addClass("btn-success");
      farm.dog.feedDog();
    });
    $("#walk").click(function() {
      $("#walk").removeClass("btn-danger btn-warning");
      $("#dog-energy-level").removeClass("warning danger");
      $("#walk").addClass("btn-success");
      farm.dog.walkDog();
    });
    $("#feed-bear").click(function() {
      $("#feed-bear").removeClass("btn-danger btn-warning");
      $("#bear-hunger").removeClass("warning danger");
      $("#feed-bear").addClass("btn-success");
      farm.bear.feedBear();
    });
  });

  $("#start-over").click(function() {
    location.reload();
  });

  function turnOffButtons() {
    $("#feed-fish").off();
    $("#feed-chicken").off();
    $("#collect-eggs").off();
    $("#feed-cow").off();
    $("#milk").off();
    $("#feed-dog").off();
    $("#walk").off();
    $("#feed-bear").off();
  }

  function generateGif () {
    // let request = new XMLHttpRequest();
    // const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&rating=g&tag=bear`;
    //
    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const response = JSON.parse(this.responseText);
    //     getElements(response);
    //   }
    // }
    //
    // request.open("GET", url, true);
    // request.send();
    //
    // const getElements = function(response) {
    //   $('.gif').html(`<img src="${response.data.images.downsized_medium.url}">`);
    // }
  }

});
