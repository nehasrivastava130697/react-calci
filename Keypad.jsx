let Keypad = (props)=>
{
    return(<div className = "keypad">
                <button className = "key" id="z" onClick={()=>{props.buttonPressed(0)}}>0</button>
                <button className = "key" id="o" onClick={()=>{props.buttonPressed(1)}}>1</button>
                <button className = "key" id="t" onClick={()=>{props.buttonPressed(2)}}>2</button>
                <button className = "key" id="th" onClick={()=>{props.buttonPressed(3)}}>3</button>
                <button className = "key" id="f" onClick={()=>{props.buttonPressed(4)}}>4</button>
                <button className = "key" id="fi" onClick={()=>{props.buttonPressed(5)}}>5</button>
                <button className = "key" id="s" onClick={()=>{props.buttonPressed(6)}}>6</button>
                <button className = "key" id="se" onClick={()=>{props.buttonPressed(7)}}>7</button>
                <button className = "key" id="e" onClick={()=>{props.buttonPressed(8)}}>8</button>
                <button className = "key" id="n" onClick={()=>{props.buttonPressed(9)}}>9</button>
                <button className = "key" id="eq" onClick={()=>{props.answer(props.result)}}>=</button>
                <button className = "key" id="c" onClick={()=>{props.clearOutput()}}>C</button>
            </div>
            );
}
export default Keypad;