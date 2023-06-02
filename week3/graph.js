




class Graph{
    constructor(){
    this.graph = new Map()
    }
  
    addvertex(vertex){
       this.graph.set(vertex,new Array())
    } 
    
    insert(vertex,edge,isBIDirectional){
        if(!this.graph.has(vertex)){
            this.addvertex(vertex)
        }
  
        if(!this.graph.has(edge)){
            this.addvertex(edge)
        }
          let edges=this.graph.get(vertex)
          if(!edges.includes(edge)){

              this.graph.get(vertex).push(edge)
              if(isBIDirectional){
                  this.graph.get(edge).push(vertex)
              }
          }
    }
  
    delete(vertex){
        if(this.graph.has(vertex)){
            let edges = this.graph.get(vertex)
             for(let edge of edges){
                this.graph.get(edge).splice(this.graph.get(edge).indexOf(vertex),1 )
            }
            
            //this delete is a pre defined delete of the set()..like get(),has()
            this.graph.delete(vertex)
        }
    }
    
//  
  
  
    dfs(start, visited = new Set()) {
      visited.add(start);
      console.log(start);
      for (let neighbor of this.graph.get(start)) {
        if (!visited.has(neighbor)) {
          this.dfs(neighbor, visited);
        }
      }
    }
    
  
  
    bfs(startVertex) {
      let visited = new Set();
      let queue = [];
    
      visited.add(startVertex);
      queue.push(startVertex);
    
      while (queue.length > 0) {
        let vertex = queue.shift();
        console.log(vertex);
    
        let neighbors = this.graph.get(vertex);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
    
  
  
    display(){
        for(let vertex of this.graph.keys()){
           let edges = this.graph.get(vertex)
            console.log(vertex,edges);
        }
    }
  }
  
  const gp = new Graph();
  
  gp.insert(1,22,true)
  gp.insert(22,66,false)
  gp.insert(66,100,false)
  gp.insert(3,12,false)
  gp.insert(3,766,true)
  gp.insert(66,13,false)
  gp.insert(22,11,false)
  gp.insert(3,31,true)
  gp.insert(12,23,false)
 
//   gp.deletenishad(3)
//    gp.display();
  gp.dfs(1)
//   gp.bfs(4)