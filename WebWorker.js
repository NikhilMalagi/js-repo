this.onmessage = function(e){
    if(e.data.addThis){
        this.postMessage({result : e.data.addThis.n1 + e.data.addThis.n2})
    }
}