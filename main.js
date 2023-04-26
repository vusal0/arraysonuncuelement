// bu birinci hell usulu
// let myArray = [1, 2, 3, 4, 5, 6];
// myArray.pop(); // Son elementi silmek ucun
// console.log(myArray); // [1, 2, 3, 4]


// bu da ikinci hell usulu
// Array.prototype.removeItem = function(item) {
//     for (i = 0; i < this.length; i++) {
//         if (this[i] === item) {
//             for (var j = i; j < this.length - 1; j++) {
//                 this[j] = this[j + 1];
//             }
//             this.length = this.length - 1
//             return;
//         }
//     }
// }

// var items = [1, 2, 3, 4, 5, 6];
// items.removeItem(6);
// console.log(items)