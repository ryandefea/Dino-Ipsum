import DinoService from './js/dino-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


// function clearFields() {
//   $('#dinosaurs').val("")
//   $('.showErrors').text("")
// }

$(document).ready(function() {
  
  ('#dinosaurs1').text(newArray);
  $('#submit').click(function(){
    let newArray = []
    let letter = $('#letter').val();
    let dinoArray = `${body}`.split('')
    for (let i = 0; i <= dinoArray.length; i++) {
      if (i.includes(letter)) { newArray.push(letter)
      } return newArray;
    }
  })
  
  
  
  
  
  $('#dinoResult').click(function() {
   //clearFields();
   let promise = DinoService.getDinoIpsum();
   promise.then(function(response){
    const body = JSON.parse(response);
    $('#dinosaur2').html(`${body}`);
   }, function(error) {
    $('.showErrors').text(`there has been a error ${error}`);
   });
   return `${body}`;
  });

});