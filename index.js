let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let button = document.querySelector('.btn');


button.addEventListener('click', perfectMatch);

function perfectMatch(e, percent) {
    e.preventDefault();
    if (input1.value.trim() == '' || input2.value.trim() == '' ) {
        alert('The fields must not be empty!');
        input1.value = ''
        input2.value = ''
        return
    }   
    var percent = Math.round((Math.random()+1)*100);
    var outputPercent = document.querySelector('.outputPercent').innerHTML = percent + "%";
    if (percent < 40) {
        var output = document.querySelector('.output').innerHTML = "The chance of a relationship working out between  " + input1.value + " and " + input2.value + " is not very big, but relatioship is very possible, if the two of you really want it to, and are prepared to make some sacrafices fot it.";
      } else {
        var output = document.querySelector('.output').innerHTML = "Oh, wow " + input1.value + " and " + input2.value + " looks like you are each other soulmates.";
      }
      input1.value = ''
      input2.value = ''
      return
      }
    



