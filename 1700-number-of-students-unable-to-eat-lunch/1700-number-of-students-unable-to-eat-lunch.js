/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let a=0
    let b=0
    for(let s of students){
        if(s===0){
            a++
        }else{
            b++
        }
    }
    for(let s of sandwiches){
        if(s===0&&a>0){
            a--
        }else if(s==1&&b>0){
            b--
        }else{
            break
        }
    }
    return a+b
};