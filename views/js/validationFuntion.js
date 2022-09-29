function sign_up(name,email,password){
    
//    console.log(name);
//    console.log(email);
//    console.log(password);

   if(name === ''&&email === ''&&password === ''){
    alert('Fill the all filde');
    }else{
        createUserWithEmailAndPassword(email,password);
    }
    if(name === '' ){
        alert('Fill the Name filde');
    }
     if(email === '' ){
        alert('Fill the email filde');
    }
     if(password === '' ){
        alert('Fill the password filde');
    }
    
}

function sign_in(email,password){
    console.log(email);
   console.log(password);
   if(email === ''&&password === ''){
    alert('Fill the all filde');
    }else{
        signInWithEmailAndPassword(email,password);
    }
    if(email === '' ){
        alert('Fill the email filde');
    }
     if(password === '' ){
        alert('Fill the password filde');
    }
}