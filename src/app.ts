export{}

type user = {
    id: number,
    name: string
    stutus?: boolean 
}

type product = {
    id: number,
    name: string,
    price: number,
    desc: string,
    img: string
}

const a: number = 10;
const b: number = 30;
const myName: string = "Bui Tien Dinh";
const objectArr: user = {id:1, name: "BTD"};

const arrNumber: number[] = [1,2,3,4];
const arrString: string[] = ["1","2","3","4"];
const arrobject: user[] = [{id: 1,name:"a"},{id: 2,name: "b"}];

const productAdd: product = {
    id: 1,
    name: "dinh",
    price: 19000,
    desc: "dsadasdas",
    img: "dsadsa"
}

function sum(numA: number, numB: number): number {
    return numA + numB;
}

console.log(sum(a,b));
