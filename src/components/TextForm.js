import React,{useState} from 'react'

var a=0;
function TextForm(props) {
  
  const [text,settext]=useState('enter the text')

  const handleonchange=(event)=>{
        console.log("onchange");
        
        settext(event.target.value);    
  }
  const handle=()=>{
    
    console.log("clicked");
    
    if(a===0){
      settext('');;
    }
    a=1;
  }
  const changetouppercase=()=>{
      let newtext=text.toUpperCase();
      settext(newtext);
  }
  const changetolowercase=()=>{
    let newtext=text.toLowerCase();
    settext(newtext);
}
const handlleoncopy=()=>{
  var text =document.getElementById("myBox");
  text.select();  
  navigator.clipboard.writeText(text.value)
}
const trailingspace=()=>{
  let newtext=text.trimEnd();
  settext(newtext);
}
const trimspace=()=>{
let newtext=text.replace(/\s+/g,' ');
settext(newtext);

}
const Count=(text)=>{
  var t = 0;
  if(text===""){
    return t;
  }
  t=text.split(" ").length;
  return t;
}
    return (
   <>
   <form>
   
  <div className="form-group mb-2">
  <h1>{props.heading}</h1>
  <label htmlFor="exampleFormControlTextarea1"></label>
    <textarea className="form-control" value={text} onClick={handle} onChange={handleonchange} style={{backgroundColor:props.mode==='light'?'white':"grey", color:props.mode==='light'?'black':'white'}}id="myBox" rows="5"></textarea>
  </div>    
    
    </form>
<button className="btn btn-success mx-2" onClick={changetouppercase}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={changetolowercase}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={trimspace}>Trim extra Spaces</button>
<button className='btn btn-primary mx-2' onClick={trailingspace}>Remove Trailing Spaces</button>
<button className='btn btn-primary mx-2' onClick={handlleoncopy}>Copy text</button>
      <div className="container">

      <h1>Text Summary</h1>
      <p>{/*text.split(" ").length} words and {text.length */ Count(text)} characters</p>
      <p>{0.008*text.split(" ").length} minute read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
   </>
  )
}

export default TextForm
