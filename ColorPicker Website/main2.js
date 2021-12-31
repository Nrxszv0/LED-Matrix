const container = document.querySelector('.container')
const sizeEl = document.querySelector('.size')
let size = sizeEl.value
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.btn')
const clrBtn = document.querySelector('.clrBtn')

const colorsBox = document.querySelector('.colors')

let draw = false
let colorList = ""
let colorArray = []
function populate(size) {
    container.style.setProperty('--size', size)
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
        const divColor = document.createElement('div')
        div.classList.add('pixel')
        div.addEventListener('mouseover', function () {
            if (!draw) return
            div.style.backgroundColor = color.value
        })
        let strColor = ""
        strColor = "#3e3e3e"
        strColor = strColor.toUpperCase()
        strColor = strColor.replace("#", "0x")
        divColor.innerHTML = strColor
        div.addEventListener('mousedown', function () {
            div.style.backgroundColor = color.value
            strColor = color.value
            strColor.toUpperCase()
            strColor = strColor.replace("#", "0x")
            divColor.innerHTML = strColor
            colorArray[i] = strColor

        })
        strColor = strColor.replace("#", "0x")
        colorList += strColor
        colorArray[i] = strColor

        container.appendChild(div)

        colorsBox.appendChild(divColor)
    }
}

window.addEventListener("mousedown", function () {
    draw = true
})
window.addEventListener("mouseup", function () {
    draw = false
})

function reset() {
    container.innerHTML = ''
    colorsBox.innerHTML = ''
    // colorList =""
    populate(size)
}



resetBtn.addEventListener('click', reset)
clrBtn.addEventListener('click', function () {
    console.log(colorArray)
    let str = "{"
    let count = -1;
    for (var r = 0; r < colorArray.length / size; r++) {
        str += "{"
        for (c = 0; c < colorArray.length / size; c++) {
            count += 1
            str += "'" + colorArray[count] + "'" + ", "
        }
        str = str.substring(0, str.length - 2)
        str += "}, "
    }
    str = str.substring(0, str.length - 2)
    str += "}"
    console.log(str)
})

sizeEl.addEventListener('change', function () {
    size = sizeEl.value
    reset()
})

populate(size)