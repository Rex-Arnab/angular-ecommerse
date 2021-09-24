const cartArray: any = [];

let isExist = (data: any) => {
    let result: boolean = false;
    cartArray.forEach((item: any) => {
        if(item.id === data.id) {
            result = true;
        }
    })
    return result
}

const addToCart = (data: any) => {
    console.log("Exist: ", isExist(data))
    if(isExist(data)) {
        cartArray[data.id].quantity = data.quantity;
    } else {
        cartArray.push(data);
    }
}

export {
    addToCart,
    cartArray
}