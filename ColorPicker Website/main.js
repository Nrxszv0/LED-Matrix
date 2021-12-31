const container = document.querySelector('.container')
const sizeEl = document.querySelector('.size')
let size = sizeEl.value
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.btn')
const clrBtn = document.querySelector('.clrBtn')

const colorsBox = document.querySelector('.colors')

let draw = false
let colorList =""
function populate(size){
    colorList =""    
    container.style.setProperty('--size',size)
    for(let i = 0; i < size*size; i++){
        const div = document.createElement('div')
        const divColor = document.createElement('div')
        div.classList.add('pixel')
        div.addEventListener('mouseover',function(){
            if(!draw) return
            div.style.backgroundColor=color.value
        })
        divColor.innerHTML = "#3e3e3e"
        let str = "#3e3e3e"
        div.addEventListener('mousedown',function(){        
            div.style.backgroundColor=color.value
            divColor.innerHTML=color.value
            str = color.value

        })
        str= str.toUpperCase()
        str = str.replace("#","0x")
        colorList+=str +", "
        
        
        

        container.appendChild(div)

        
    }

}

window.addEventListener("mousedown",function(){
    draw = true
})
window.addEventListener("mouseup",function(){
    draw = false
})

function reset(){
    container.innerHTML = ''
    colorsBox.innerHTML= ''
    // colorList =""
    populate(size)
}



resetBtn.addEventListener('click', reset)


clrBtn.addEventListener('click', function(){
    colorList=colorList.substring(0,colorList.length-2)
    const divColors = document.createElement('div')
    divColors.innerHTML = colorList
    colorsBox.appendChild(divColors)
})

sizeEl.addEventListener('change',function(){
    size=sizeEl.value
    reset()
})

populate(size)