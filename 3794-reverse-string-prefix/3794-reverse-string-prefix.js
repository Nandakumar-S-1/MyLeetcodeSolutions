/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let rev=''
    let st=[]
    for(let i=0;i<k;i++){ 
        st.push(s[i])
    }
    while(st.length>0){
        rev+=st.pop()
    }
    console.log(rev)
    for(let i=k;i<s.length;i++){
        rev+=s[i]
    }
    return rev
};