document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btninput').addEventListener('click', doinput);
});

function doinput(ev) {
    ev.preventDefault();
    let re = new RegExp(document.getElementById('Validate').value, 'g');
    let text = document.querySelector('.content').textContent;
    let output = document.querySelector('.output');

    //if (re.test(text === "")) {
     //   output.textContent = 'This can only take either an empty string or an empty set regex'
   
    // if(/[^a-zA-Z0-9\!\@\#\$\%\^\*\_\|]+/.test(text)){              
     //   output.textContent = ("Your Password Cant Have any thing other than a-zA-Z0-9!@#$%^*_| - Play It    Straight!");
     //   return false;
     //    }               
        
      //  return true;
     //    }    
    //if (re.test(text == "! /^[a-zA-Z0-9]+$/" )) {
      // output.textContent = 'This can only take a single character regex'
   // }
    
    if (! /^[a-zA-Z0-2]+$/.test(text)) {
        output.textContent = 'This can only take a single character regex'
    }
('^[a-zA-Z]{2}');
     if( re.test(text)){
      output.textContent = 'verified'
     } else{
     output.textContent = 'not verified'
     }
//}
}
