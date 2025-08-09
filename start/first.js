/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
let numOfUnplacedFruits = function(fruits, baskets) {
    // frouits data on variable
    let fruitsNum1 = fruits[0];
    let fruitsNum2 = fruits[1];
    let fruitsNum3 = fruits[2];

    // baskets data on variable
    let basketsNum1 = baskets[0];
    let basketsNum2 = baskets[1];
    let basketsNum3 = baskets[2];

    // parking variable
    let val1 = 0;
    let val2 = 0;
    let val3 = 0;

    // macking a algorithm
    if(basketsNum1 < fruitsNum1){
        val1 = fruitsNum1 - basketsNum1 ;

        if(val1 + basketsNum2 < fruitsNum2){
            val2 =  fruitsNum2 - basketsNum2 ;

            if(val2 + basketsNum3 < fruitsNum3){
                return 1;
            }else{
                return 0;
            }

        }else if (basketsNum3 < fruitsNum3){
            return 1;
        }else{
            return 0;
        }

    }else if ( basketsNum2 < fruitsNum2){
        val2 =  fruitsNum2 - basketsNum2 ;

        if(val2 + basketsNum3 < fruitsNum3){
            return 1;
        }else{
            return 0;
        }

    }else if (basketsNum3 < fruitsNum3){
        return 1;
    }else{
        return 0;
    }


};
