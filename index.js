var rect = {
    perimeter: (x,y)=>(2*(x+y)),
    area: (x,y)=>(x*y)
}
function solveRect(l,b)
{
    console.log("solving for rectangle with length " + l + " and width " + b);
    if(l<=0 || b<=0)
        console.log("rectangle not fisible");
    else
    {
        console.log("rectangle area is " + rect.area(l,b));
        console.log("rectangle perimeter is " + rect.perimeter(l,b));
    }
}
solveRect(3,5);
solveRect(5,6);
console.log("server is running");