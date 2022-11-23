function SiteName(){
		alert("www.ramy.pro");
	}

	function Welcome(UserName){
				
		alert("Welcome "+UserName);
	}

	function GetTheEvent(event){
				
		alert(event.type);
	}

export default function Events(){
			
	  return(
				<div style={{padding:"20px"}}>
				<button onClick ={SiteName}>Site name</button>
				
				<button onClick ={()=>Welcome("Ramy")}>Welcome Message</button>

				<button onMouseOver ={(event)=>GetTheEvent(event)}>Test</button>
				</div>
		);
}
