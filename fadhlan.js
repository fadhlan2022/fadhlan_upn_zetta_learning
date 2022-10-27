/**
 * @param {Book} book
 * @param {Number} discount
 * @param {Number} tax
 * @param {Number} stock
 * @param {Number} order
 */

 function cashier(book, discount, tax, stock, order){
    let result = 0;
    for(let loopIndex = 0;  loopIndex < order; loopIndex++){
        if(book && book.price && (loopIndex < stock)){
            const price = book.price;
            const totalDiscount = price * (discount/100);
            const priceAfterDiscount = price - totalDiscount;
            const totalTax = priceAfterDiscount * (tax/100);
            const priceAfterTax = priceAfterDiscount + totalTax;
            result += priceAfterTax;
        }else{
            console.log('Run out of stock :(');
            break;
        }
        
    }
    console.log('TOTAL HARGA', result);
    return result;
}

/**
 * @param {Number} result
 * @param {Number} cicil
 */

function sistemCicil(result, cicil){
    hargaTiapCicil = result/cicil;
    bayarCicil = [];
    for(let loopIndex2 = 0; loopIndex2<cicil; loopIndex2++){
        bayarCicil.push({
            cicilan_ke: loopIndex2+1,
            harga: hargaTiapCicil
        })
    }
    return bayarCicil;
}

console.log(sistemCicil(cashier({title: "Book 1", price:5000, publicity: true}, 0, 0, 4, 4), 4));