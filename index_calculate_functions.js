//SUM
function doMath1()
   {
       // Capture the entered values of two input boxes
       var my_input1 = document.getElementById('my_input1').value;
       var my_input2 = document.getElementById('my_input2').value;

       // Add them together and display
       var sum = parseInt(my_input1) + parseInt(my_input2);
       return sum;
   }

   //Extract value from inputs

   // document.getElementById("sum_button").addEventListener("click", function(){   //callback buna anonyme functions
   //   console.log("try", doMath1());
   //
   //   document.getElementById("result").textContent = doMath1() ;          //inner Html nesaugus
   // });

//SUBTRACTION
function doMath2()
   {
       // Capture the entered values of two input boxes
       var my_input1 = document.getElementById('my_input1').value;
       var my_input2 = document.getElementById('my_input2').value;

       // Add them together and display
       var subtraction = parseInt(my_input1) - parseInt(my_input2);
       return subtraction;
   }

   //Extract value from inputs

   document.getElementById("subtraction_button").addEventListener("click", function(){   //callback buna anonyme functions
     console.log("try", doMath2());

     document.getElementById("result").textContent = doMath2() ;          //inner Html nesaugus
   });

//DIVISION

function doMath3()
   {
       // Capture the entered values of two input boxes
       var my_input1 = document.getElementById('my_input1').value;
       var my_input2 = document.getElementById('my_input2').value;

       // Add them together and display
       var division = parseInt(my_input1) / parseInt(my_input2);
       return division;
   }

   //Extract value from inputs

   document.getElementById("division_button").addEventListener("click", function(){   //callback buna anonyme functions
     console.log("try", doMath3());

     document.getElementById("result").textContent = doMath3() ;          //inner Html nesaugus
   });

   //MULTIPLY

   function doMath4()
      {
          // Capture the entered values of two input boxes
          var my_input1 = document.getElementById('my_input1').value;
          var my_input2 = document.getElementById('my_input2').value;

          // Add them together and display
          var multiply = parseInt(my_input1) * parseInt(my_input2);
          return multiply;
      }

      //Extract value from inputs

      document.getElementById("multiply_button").addEventListener("click", function(){   //callback buna anonyme functions
        console.log("try", doMath4());

        document.getElementById("result").textContent = doMath4() ;          //inner Html nesaugus
      });

    //RESET form
    function resetFunction() {
  document.getElementById("myForm").reset();
}

//Every button should call the same function
document.querySelector('#buttons').addEventListener('click',
function(){
  console.log(event.target.id);
  let buttonName = event.target.id;

  switch (buttonName) {
    case "sum_button":
      document.getElementById("result").textContent = doMath1() ;
      break;
    case "subtraction_button":
      document.getElementById("result").textContent = doMath2() ;
      break;
    case "division_button":
      document.getElementById("result").textContent = doMath3() ;
      break;
    case "multiply_button":
      document.getElementById("result").textContent = doMath4() ;
      break;
      default:
      console.log('No button action');
  }
}
);
