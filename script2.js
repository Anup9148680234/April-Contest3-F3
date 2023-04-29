let access = localStorage.getItem("access-token");
if(access){
    if(access == "null"){
        window.location.href = "index.html";
    }
}
else{
    window.location.href = "index.html";
}



let x = localStorage.getItem("userState");
x = JSON.parse(x);

document.getElementById('p1').innerText += " "+ x.name;
document.getElementById('p2').innerText += " "+ x.email;
document.getElementById('p3').innerText += " "+ x.password;

function logOutFunc(){
    localStorage.setItem("userState","null");
    localStorage.setItem("access-token","null");
    window.location.href ="index.html"
}

function proMsg(){
    document.getElementById('preMsg').innerHTML = `<p style="color:green;">Already Done!!</p>`
    setTimeout(erasePreMsg,2000);
}

function erasePreMsg(){
    document.getElementById('preMsg').innerHTML = ``;
}