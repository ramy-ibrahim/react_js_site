function Morning(){
	
	return(<>Good Morinig</>);
	
}
		   
function Evening(){
		return(<>Good Evening</>);
}

			   
// Example 1
export function IF_Condition(arg){
	
	if(arg.input == "morning"){
		
		return(<h3><Morning /></h3>);
		
	}else if(arg.input== "evening"){
			
		return(<h3><Evening /></h3>);
			   
	}else{
			   
		return(<h3>Hi</h3>);
	}
	
	
}
			   
// Example 2
	
export function Ternary_Operator(arg){
	
	return (<h3>
			{ arg.input == "morning" ? <Morning /> : <Evening />}, {arg.user_name} 
			</h3>);	
}
			
// Example 3
	
export function Ternary_Operator2(arg){
	
	return (<h4>
			Hey, {arg.user_name} { arg.mood == "good" ? "Enjoy your day :)" : "Focus on your feeling and your idea, try to go deep to get the root of the idea that makes you in this mood!"}
			</h4>);	
}
			

// Example 4
	
export function Ternary_Operator3(arg){
	
	return (<h4>
			Hey, {arg.user_name} { arg.mood == "good" ? <>Enjoy your day</> : <>Focus on your feeling and your idea, try to go deep to get the root of the idea that makes you in this mood!</>}
			</h4>);	
}

// Example 5
export function Logical_and_Operator1(arg){
		
		return (
			<h4>{arg.age >= 30 && <>Your age 30 or over, you must start workout at least twice a week.</>}</h4>
		);
}

// Example 6
export function Logical_and_Operator2(arg){
		
		return (
			<h4>{arg.age >= 30 && arg.age < 50 && <>Your age 30 or over, but less than 50, you must start workout at least twice a week.</>}</h4>
		);
}

// Example 7
export default function Conditional(arg){
	
	let GetDate = new Date();
    let GetTime  = GetDate.getHours() > 12? 'evening' : 'morning';
			
	return (<>
		<h3><IF_Condition input={GetTime} /></h3>
		
		<p><Ternary_Operator input={GetTime} user_name={arg.info.name} /> </p>
		
		<p><Ternary_Operator3 user_name={arg.info.name} mood = {arg.info.mood} /> </p>
			
		<p><Logical_and_Operator2 age={arg.info.age} /> </p>
		
		</>);
			
}