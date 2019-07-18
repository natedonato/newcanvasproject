document.addEventListener("DOMContentLoaded", () =>{
    const canvas = document.getElementById("gameCanvas")
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 800;

    canvas.onmousemove = function(e) { 
    if(e.buttons > 0){
    var x = e.pageX - this.offsetLeft; 
    var y = e.pageY - this.offsetTop; 
    ctx.fillRect(x, y, 2, 2);
    }
    }

});