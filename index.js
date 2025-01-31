
document.getElementById("yes-button").onclick = function()
{
    console.log("work");
    document.getElementById("face").src = "look2.png";
    document.getElementById("yes-button").style.display = "none";
    document.getElementById("no-button").style.display = "none";
    document.getElementById("heart").style.display = "none";
}

document.getElementById("yes").onclick = function()
{
    console.log("work");
    document.getElementById("style-class").style.display = "none";
    document.getElementById("no-button").style.display = "none";
}

document.getElementById("no").onclick = function()
{
    console.log("work");
    document.getElementById("no").style.display = "none";
    
}

document.getElementById("no-button").onclick = function()
{
  
    document.getElementById("box-wrapp").style.display = "flex";
    
}
