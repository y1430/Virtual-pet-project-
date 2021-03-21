class Food{
    constructor(){
        var foodStock,lastFed;
        var milkImg;
        milkImg=loadImage("images/Milk.png");

    }

    getFoodStock(){
        var FoodRef=database.ref('Food');
        FoodRef.on("value",function(data){
            foodStock=data.val();
        })
    }

    updateFoodStock(x){
database.ref('/').update({
    Food:x
});
    }

    deductFoodStock(x){
        if (x <= 0) {
            x=0;
        }
        else {
            x = x-1;
        }
        database.ref('/').update({
            Food:x
        });
    }

}