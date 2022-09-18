canvas = document.getElementById("mycanvas");
color = "red";

ctx = canvas.getContext("2d");

ctx.begingpath();
ctx.strokestyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2 *Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
   color = document.getElementById("color").value;
   console.log(color);

   mouse_x = e.clientX - canvas.offsetLeft;
   mouse_y = e.clientY - canvas.offsetTop;

   circle(mouse_x,mouse_y);
}

function cicrle(mouse_x,mouse_y)
{
ctx.begingpath();
ctx.strokestyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2 *Math.PI);
ctx.stroke();
}
