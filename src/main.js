import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $("#yes-response").hide();
  $("#no-response").hide();
  $("#reset-btn").hide();

  $('#yes-btn').on('click', function() {
    $("#answer-options").hide();
    $("#yes-response").show();
    $("#reset-btn").show();
  });
  $("#no-btn").on('click', function() {
    $("#answer-options").hide();
    $("#no-response").show();
    $("#reset-btn").show();
  });

  $("#reset-btn").on('click', function() {
    $("#answer-options").show();
    $("#yes-response").hide();
    $("#no-response").hide();
    $("#reset-btn").hide();
  });
});
