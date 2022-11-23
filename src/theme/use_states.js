// JavaScript Document

import { useState } from "react";
import ReactDOM from "react-dom/client";


function Welcome(){
	
	const [site_name,setSiteName] = useState("ramy.pro");
	const [site_url,setSiteURL] = useState("https://ramy.pro");
	
    function SwitchToEmail(){
		
		setSiteName("ramy@ramy.pro"); 
		setSiteURL("emailto:ramy@ramy.pro");
	}
	
	function SwitchToSite(){
		
		setSiteName("ramy.pro"); 
		setSiteURL("https://ramy.pro");
	}
	return(
	   <>
	  <button onClick={SwitchToEmail}>Switch to email</button>
		<button onClick={SwitchToSite}>Switch to site</button>
	  <h5>Welcome, <a href={site_url} target="_blank"> {site_name} </a> </h5>
	  </>
	);
	
}


function CopyMe(){
	
	const [text,setText] = useState("");
	
	return(
	   <>
		<textarea onKeyUp={(event)=>setText(event.target.value)}  style={{width:"400px",height:"200px"}}></textarea>
		
		<div style={{borderStyle:"solid",width:"400px",padding:"5px"}}>
		<button onClick = {()=>alert(text)}>Alert Me!</button>
		<div>The content: </div>
		<pre>{text}</pre>

		</div>
	  </>
	);
}

function ChangeColor(){
	
	const [BGColor,setBgColor] = useState("#000");
	const [FontColor,setFontColor] = useState("#fff");
	
	return(
	  <>
		BG Color:<select onChange={(event)=>setBgColor(event.target.value) }>
		<option value="#fff">White</option>
		<option value="#000">Black</option>
		<option value="blue">Blue</option>
		<option value="green">Green</option>
		<option value="red">Red</option>
		</select>
		
		<label style={{padding:"5px"}}>Font Color:</label><select onChange={(event)=>setFontColor(event.target.value) }>
		<option value="#fff">White</option>
		<option value="#000">Black</option>
		<option value="blue">Blue</option>
		<option value="green">Green</option>
		<option value="red">Red</option>
		</select>
		
		<div style={{
		color:FontColor,
		backgroundColor:BGColor,
		width:"400px",
		borderStyle:"solid",
		padding:"50px",
		textAlign:"center",
		fontSize:"30px"
		}}>Hi, my name is <br/>Ramy Ibrahim</div>
	  </>
	
	);
}

function AboutMe(){
	
	const [info,setInfo] = useState({name:"Ramy Ibrahim",age:"35",location:"USA",site:"www.ramy.pro"});
	
	function ChangeLocation(){
		setInfo(previousState=>{
			return {...previousState,location:"Egypt"}
		});
	}
	
	
	
	return(
		<>
		<div>
		<button onClick={ChangeLocation}> Change Location</button>
		</div>
	  <div>
		 Name: {info.name}
		<br />Age: {info.age}
		<br />Location {info.location}
		<br />Web Site: {info.site}
	  </div>
		</>
	);
}

export default function States(){
	const [color, setColor] = useState("red");
	const [name,getName] = useState('');
	

	
	return(
      <div className="container">
		<div className="row">
		   <div className="col-12">
		
		<div>
		  <h4>Welcome Example</h4>
		  
		    <Welcome />
		    <hr />
		</div>
		
		
		<div>
		  <h4>CopyMe Example</h4>
		  
		    <CopyMe />
		    <hr />
		</div>
		
		<div>
		  <h4>ChangeColor Example</h4>
		  
		    <ChangeColor />
		    <hr />
		</div>
		
		<div>
		  <h4>AboutMe Example</h4>
		  
		    <AboutMe />
		    <hr />
		</div>
		
		
		   </div>
		</div>
		
      </div>
	
	);
}