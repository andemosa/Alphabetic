function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

const alphabetic = (int) => {
    let array = [];
    let numbers = range(1, int);
    for(let i of numbers){
        if(i % 2 == 0 && i % 3 == 0 && i % 5 == 0){
            i = "yu-gi-oh"
            array.push(i);
        }
        else if(i % 2 == 0 && i % 5 == 0){
            i = "yu-oh"
            array.push(i);
        }
        else if(i % 3 == 0 && i % 5 == 0){
            i = "gi-oh"
            array.push(i);
        }
        else if(i % 2 == 0){
            i = "yu"
            array.push(i);
        }
        else if(i % 3 == 0){
            i = "gi"
            array.push(i);
        }
        else if(i % 5 == 0){
            i = "oh"
            array.push(i);
        } 
        else{
            i = i
            array.push(i);
        }
    }
    return array
}

console.log(alphabetic(100))
console.log(alphabetic(50))


