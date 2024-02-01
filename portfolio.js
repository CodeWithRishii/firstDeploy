 

let edu = false
function education(){
    let skillscontent = document.getElementById("skills-content").innerHTML="";
        document.getElementById("education").style.display="block";
}

// --------responsive navbar------------------

let clinkIcon = false
function menuButton()
{
    if(!clinkIcon){
        document.getElementById('nav-list').style.display = 'block';
        clinkIcon = true
    }else{
        document.getElementById('nav-list').style.display = 'none';
        clinkIcon = false
 
}
}

