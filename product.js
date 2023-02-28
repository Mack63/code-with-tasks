class Product {
   static selectionFields = {
       contains: "includes",
       starts: "startsWith",
       ends: "endsWith"
    }
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
    static selectProduct(str, arrayProducts){
        let selectionArr = str.split("&");
        let selectStr = "item =>";
        let countStr = 0;
        for (let elem of selectionArr) {
            let and = countStr == selectionArr.length-1 ? "" : "&&";
            countStr++;
            let elemArr = elem.split("-");
            if (elemArr[0] == "name" || elemArr[0] == "description") {
                selectStr += `item.${elemArr[0]}.${this.selectionFields[elemArr[1]]}("${elemArr[2]}") ${and} `;
            }else {
                let equal = elemArr[1][0] === "=" ? "=" + elemArr[1] : elemArr[1];
                selectStr += `item.${elemArr[0]}${equal} ${and} `;
            }

        }
        return arrayProducts.filter(eval(selectStr));
    }
}

let products = [
    new Product("dddfdiii", 2, 8, "rrrrrrrrrrabc"),
    new Product("fdddfiii", 7, 5, "rrrrrrrrrrabcp"),
]

let p = Product.selectProduct("name-contains-fd&price-=2&quantity->5&description-ends-abc", products);
console.log(p)