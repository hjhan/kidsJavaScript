/**
 * Define a Rectangle class
 */
class Rect{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }

    circumference() {
        return (this.width + this.height) * 2;
    }
}
var r = new Rect(100,30);
r.area();
r.circumference();