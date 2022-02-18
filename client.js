
var type=document.getElementById("type");
var username=document.getElementById("username");
var password=document.getElementById("password");
var post=document.getElementById("post");

document.getElementById("submit").onclick=()=>{

    var ajax=new XMLHttpRequest();
    

    ajax.open("GET",`http://localhost:1000/getUserDetails?type=${type.value}&name=${username.value}&pass=${password.value}&data=${post.value}`);

    ajax.send();

    ajax.onload=()=>{

        alert(ajax.responseText);
        
    }

}

