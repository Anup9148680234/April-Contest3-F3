
let access = localStorage.getItem("access-token");
if(access != "null"){
    window.location.href = "profile.html";
}

function proMsg(){
    document.getElementById('preMsg').innerHTML = `<p style="color:red;">Please Sign up First!</p>`;
    console.log('sign up first');
}

function generateRandomString() {
    let res = '';
    let length = 16;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      res += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return res;
  }

function handleForm(event) { event.preventDefault(); } 
var form = document.getElementById("myForm");
form.addEventListener('submit', handleForm)

let dialog = document.getElementById('message');


function dispSwitch(){
    window.location.href = "profile.html";
}

function SignUpUser(){
    dialog.innerHTML = ``;
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let pass1 = document.getElementById('pass1');
    let pass2 = document.getElementById('pass2');

    if(name.value.trim() == ""){
        dialog.innerHTML = `
            <p style="color:red;">Error: Name cannot be empty</p>
        `
    }
    else if(email.value.trim() == ""){
        dialog.innerHTML = `
            <p style="color:red;">Error: Email cannot be empty</p>
        `
    }
    else if(pass1.value.trim() == "" || pass2.value.trim() == ""){
        dialog.innerHTML = `
            <p style="color:red;">Error: Password cannot be empty</p>
        `
    }
    else if(pass1.value != pass2.value){
        dialog.innerHTML = `
            <p style="color:red;">Error: Both passwords do not match</p>
        `
    }
    else{
        
        let token = generateRandomString();
        localStorage.setItem("access-token",token);
        setTimeout(dispSwitch, 3000);

        let userState = {
            "name": name.value,
            "email": email.value,
            "password": pass1.value
        }
        
        localStorage.setItem("userState",JSON.stringify(userState));
        dialog.innerHTML = `
            <p style="color:green;">Signed Up successfully!</p>
        `;
    }
}
