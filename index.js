// Write your solution here!
let cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat() {
    cats.push('Ralph')
}

function destructivelyPrependCat() {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(params) {
    cats.pop('Ralph')
}

function destructivelyRemoveFirstCat(params) {
    cats.shift("Bob")
}

function appendCat(name) {
    let cats2 = cats.slice()
    cats2.push(name)
    return cats2
}

function prependCat(name) {
    let cats2 = cats.slice()
    cats2.unshift(name)
    return cats2
}

function removeLastCat(name) {
    let cats2 = cats.slice()
    cats2.pop()
    return cats2
}
function removeFirstCat(name) {
    let cats2 = cats.slice()
    cats2.shift()
    return cats2
}
