

//////////////////////MAX HEAP//////////////////////////////
class maxHeap {
    constructor(array){
        this.heap = []
        if(array){
            this.buildHeap(array)
        }
    }

    buildHeap(array){
        this.heap = array
        for(let i=this.parent(this.heap.length-1);i>=0;i--){
            this.shiftDown(i)
        }
    }

    shiftDown(currentidx){
        let endIdx = this.heap.length-1 
        let leftIdx = this.leftChild(currentidx)
        while(leftIdx<=endIdx){
            let rightIdx = this.rightChild(currentidx)
            let idxToShift;
            if(rightIdx<= endIdx && this.heap[leftIdx]<this.heap[rightIdx]){
                idxToShift =  rightIdx
            }else{
                idxToShift = leftIdx
            }
            if(this.heap[idxToShift]>this.heap[currentidx]){
                [this.heap[idxToShift],this.heap[currentidx]] = [this.heap[currentidx],this.heap[idxToShift]]
                currentidx = idxToShift
                leftIdx = this.leftChild(currentidx)
            }else{
                return;
            }
        }
    }

    shiftUp(currentidx){
        let parentIdx = this.parent (currentidx)
        while(currentidx>0 && this.heap[parentIdx]<this.heap[currentidx]){
            [this.heap[parentIdx],this.heap[currentidx]] = [this.heap[currentidx],this.heap[parentIdx]]
            currentidx = parentIdx
            parentIdx = this.parent(currentidx)
        }
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    remove(){
        [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
        let valueToRemove = this.heap.pop()
        this.shiftDown(0)
        return valueToRemove;
    }

    
    sort(){
        for(let i= this.heap.length-1;i>=0;i--){
            this.sorting(i)
        }
      }
      sorting(currentidx){
        [this.heap[0],this.heap[currentidx]] = [this.heap[currentidx],this.heap[0]]
        console.log(this.heap[currentidx]);
        this.heap.pop()
        this.shiftDown(0)
    
      }
    
    parent(i){
        return Math.floor((i-1)/2)
    }

    leftChild(i){
        return i*2 +1
    }

    rightChild(i){
        return i*2 +2
    }

    display(){
        console.log(this.heap);
    }
}

const array = [3,4,2,1,7]
const heap = new maxHeap(array)
// heap.insert(33)
// heap.insert(335)
heap.display()