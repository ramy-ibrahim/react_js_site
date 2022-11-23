import {useState,useEffect} from "react";


function AlertWithEveryRender(){
	const [counter,ChangeCount] = useState(0);
	
	useEffect(()=>{
		alert("This alert fired by the AlertWithEveryRender component \n\r Counter:"+counter);
	  });
	
	return (
		<>
	  <div>
		<h4>Alert With Every Render</h4>
		Counter: {counter}
		
		<button onClick={()=>ChangeCount(counter+1)}>Change the counter</button>
        
		</div>
		<hr />
		</>
		
	  
	);
}

function AlertAtStartup(){
	
	const [counter,ChangeCount] = useState(0);

	
	
	useEffect(()=>{
		alert("This on time alert, fired by the AlertAtStartup component \n\r Counter:"+counter);
	  },[]);
	
	return (
		<>
	  <div>
		<h4>Alert At Startup</h4>
		Counter: {counter}
		
		<button onClick={()=>ChangeCount(counter+1)}>Change the counter</button>
		</div>
        <hr />
		</>
	  
	);
	
	
}



function AlertWithCounter2Changes(){
	
	const [counter,ChangeCount] = useState(0);
	const [counter2,ChangeCount2] = useState(0);

	
	
	useEffect(()=>{
		alert("This on time alert, fired by the AlertWithCounter2Changes component \n\r Counter: "+counter+"\n\rCounter2: "+counter2);
	  },[counter2]);
	
	return (
		<>
	  <div>
		<h4>Alert With Counter2 Changes</h4>
		Counter: {counter}
		  - Counter2: {counter2}
		
		<button onClick={()=>ChangeCount(counter+1)}>Change the counter</button>
       <button onClick={()=>ChangeCount2(counter2+1)}>Change the counter2</button>
		</div>
		<hr />
	  </>
	);
	
	
}

function AlertWithCounterOrConter2Changes(){
	
	
	const [counter,ChangeCount] = useState(0);
	const [counter2,ChangeCount2] = useState(0);

	
	
	useEffect(()=>{
		alert("This on time alert, fired by the AlertWithCounterOrConter2Changes component \n\r Counter: "+counter+"\n\rCounter2: "+counter2);
	  },[counter,counter2]);
	
	return (
		<>
	  <div>
		<h4>Alert With Counters Changes</h4>
		Counter: {counter}
		  - Counter2: {counter2}
		
		<button onClick={()=>ChangeCount(counter+1)}>Change the counter</button>
       <button onClick={()=>ChangeCount2(counter2+1)}>Change the counter2</button>
		</div>
        <hr />
		</>
	  
	);
	
}


export default function Effects(){
	 
	return(
		<>
		 <AlertWithEveryRender />
		 <AlertAtStartup />
		<AlertWithCounter2Changes />
		<AlertWithCounterOrConter2Changes />
		
		</>
	);
		
	
	
}