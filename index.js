let queue = []
let head = null

function Enqueue(){
    if(queue.length === 0) shifts.value = ""
    queue.push(Math.floor(Math.random() * 201))
    if(document.querySelector('#flag').checked){
        queue.sort((x,y) => y - x)
    }
    insert()

}

function Dequeue(){
        head = queue.shift()
        insert()
        addShift()
}

function insert() {

    let i = 0;
    let elems = document.querySelectorAll('#table th');
    elems.forEach(function(elem) {
        if (i < 6) {
            elem.textContent = queue[i++]
        } else {
            elem.textContent = '' 
        }
    })    
}

function addShift(){
    if (head != undefined)
    shifts.value+= head + ", "
}


