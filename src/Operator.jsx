let Operator=(props)=>
{
    return(<div className="operator">
                <button className = "op" onClick={()=>{props.buttonPressed('-')}}>-</button>
                <button className="op" onClick={()=>{props.buttonPressed('+')}}>+</button>
                <button className = "op" onClick={()=>{props.buttonPressed('*')}}>*</button>
                <button className = "op" onClick={()=>{props.buttonPressed('/')}}>/</button>
            </div>

    );
}
export default Operator;