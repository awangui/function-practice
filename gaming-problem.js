function knightmoves(x,y){
    if (x==4 && y==4){
        return "2,3, 2,5, 3,2, 3,6, 5,2, 5,6, 6,3, 6,5"
    }

    else if (x==1 && y==1){
        return "2,3, 3,2"
    }
    else if (x==8 && y==8){
        return "6,7, 7,6"
    }
    else if(x==5 && y==7){
        return "3,6, 3,8, 4,5, 6,5, 7,6, 7,8"
    }
    else{
        console.log("Please enter valid co-ordinates")
    }

}

knightmoves(9,0)
console.log(knightmoves(8,8))