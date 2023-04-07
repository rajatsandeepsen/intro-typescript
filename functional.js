var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function woo() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            resolve(10);
        });
    });
}
woo().then((data) => console.log(data));
const create = (x) => (y) => x + y;
// create custom function
const addTen = create(10);
const addTwenty = create(20);
console.log(addTen(30));
