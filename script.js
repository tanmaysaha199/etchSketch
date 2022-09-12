const container = document.querySelector('.container');
let clicked = 0;

function squareCreator(){    
    if(clicked>0){
        return;
    }
    let input = prompt("Please enter your value");
    console.log(input);
    let side = 640/input;
    for(i=0;i<input; i++){
        const sqrRow = document.createElement('div');
        sqrRow.classList.add('sqrRow');
        sqrRow.classList.add('square');        
        
        sqrRow.style.setProperty('height', '640px');
        sqrRow.style.setProperty('width', side+"px");
        for(j=0; j<input; j++){
            const sqrColumn = document.createElement('div');
            sqrColumn.classList.add('sqrColumn');
            sqrColumn.classList.add('square');
            sqrColumn.style.setProperty('height', side+"px");
            sqrColumn.style.setProperty('width', side+"px");            
            sqrRow.appendChild(sqrColumn);
        }
        container.appendChild(sqrRow);
    }
    clicked++;
    hover();
}

function hover(){
    const square = document.querySelectorAll('.square');

    square.forEach((square)=>{
        
        square.addEventListener('mouseover',(e)=>{
            let colorValue = e.target.style.getPropertyValue('background-color');
            
            console.log(colorValue);
            if(colorValue==""){
                console.log('if');
                let red = Math.random()*255;
                let green = Math.random()*255;
                let blue = Math.random()*255;
                let alpha = Math.random()*1;
                e.target.style.setProperty('background-color', "rgba(" + red +", "+green+", "+blue+", "+alpha+")");
            }
            else{
                console.log(colorValue);
                const values = colorValue.split(',');
                console.log(values);
                const firstValue = values[0].split('(');

                const lastValue = values[3].split(')');

                let red = parseInt(firstValue[1]);
                let green = parseInt(values[1]);
                let blue = parseInt(values[2]);
                
                let alpha = parseFloat(lastValue[0]);
                if(alpha<0.9){
                    alpha = alpha+0.1;
                }
                if(alpha>0.9){
                    alpha =0.991;
                }
                console.log(red);
                console.log(green);
                console.log(blue);
                console.log(alpha);
                e.target.style.setProperty('background-color', "rgba(" + red +", "+green+", "+blue+", "+alpha+")");
            }
        });
    });

}