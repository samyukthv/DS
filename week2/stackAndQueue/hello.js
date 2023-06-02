
function freq(a){
    let count=0
    let prev=0
    let curr
    for(let i=0;i<a.length;i++){
        if(a[i]%2==0){
            for(let j=0;j<a.length;j++){
                if(a[i]==a[j]){
                    count++
                }
            }
            if(prev<count){
                prev=count
                curr=a[i];

            }else if(prev==count && curr<a[i]){
                curr=a[i]
            }

            
        }else{
            curr=-1
        }
    }
   return curr
}

let arr=[1,3,5,7,9,13,1,3,5,5,7,2]
console.log(freq(arr));