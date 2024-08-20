 function Display(props){
    const bodystyle={
        color:props.color,
        backgroundColor:props.backgroundColor
    }
    return <div>
           <button style={bodystyle}>{props.name}</button>
    </div>
 }
 function Greeting(props){
    const names =["maste","degu","mulusew",'tutu',"asi","lule"]
    console.log(props.number)
    return <div>
        <ul>
           {names.map(name=>{
            return <Display key={name} name={name} color={"red"} backgroundColor={"green"}/>
           })}
        </ul>
    </div>

}
export default Greeting;
