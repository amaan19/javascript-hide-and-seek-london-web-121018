const getFirstSelector = selector => document.querySelector(selector)


const nestedTarget = () => document.querySelector("#nested .target")

const increaseRankBy = n => {
    let ranks = document.querySelectorAll(".ranked-list li")
    for (let i = 0; i < ranks.length; i++) {
        debugger
        ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString()
    }
}

const deepestChild = () => {
    return document.querySelector("#grand-node div div div div")
}