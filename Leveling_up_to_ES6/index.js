/* Section 1 */
/* Section 2 */
// 3. Const
// const keyword - The value will remain constant, so that if the variable is declared again it won't change its value and give user an exception
//  4. let
// let keyword - It can be declared and it will stay to that function scope
// const and let will be defined in the block scope where it is declared
//  for example : 
const numbers = [1, 8, 56, 98, 8]

function getMax(numbers) {
    let max = -Infinity;

    numbers.forEach( function (number) {
        max = Math.max(max,number)
    })
    return max;
}
const max = getMax(numbers);
console.log(max)

/* 5. Scope */
    function fn (){ 
        return 1;
    }
    console.log(fn())
    {
        function fn(){
            return 2;
        }
        console.log(fn())
    }
    console.log(fn())

/* Section 4 */
//  6. Arrow Function

