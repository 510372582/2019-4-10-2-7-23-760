module.exports = function main(inputs) {
    // write your code here...
    var fee;
    if (inputs.distance<=2){
fee=6;
    }else if(inputs.distance<=8){
fee=0.8*inputs.distance;
    }else{
fee=6.4+(inputs.distance-8)*1.6;
    }
    if(inputs.parkTime!=0){
        fee+=inputs.parkTime*0.25;
    }
    fee=Math.round(fee);
    return fee;
};
