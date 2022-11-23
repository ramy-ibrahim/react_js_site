export function SimpleExample(){
	
	let StudentNames = ['hana','ramy','jon','ahmed'];
	
	return(
	   <><h4>Our students: </h4> { StudentNames.map((name)=> <h5 style={{color:"blue"}}>{name}</h5>) }
		
		</>
	
	);
}

function StudentsInfo(){
	
	return [
		{
		name:"hana",
		age:10,
		hobby:"draw",
		points: 150
		},
		
		{
		name:"ramy",
		age:35,
		hobby:"music",
		points: 170
		},
		
		{
		name:"jon",
		age:20,
		hobby:"fishing",
		points: 140
		},
		
		{
		name:"ahmed",
		age:27,
		hobby:"reading",
		points: 160
		}
		
	];
}

export function StudentInfoForm(arg){
	let Max = 200;
	return(
	<p>
		 Name: {arg.info.name}
		 <br/>Age: {arg.info.age}
		 <br/>Hobby: {arg.info.hobby}
		 <br />Score: % {( 100 * arg.info.points)/Max}
		 <hr />
	 </p>
   );
}


export function GetStudents(){
	let Students = StudentsInfo();

	
	return ( 
	  <div>
		  <h4>Students List: </h4>
		  <div>
		    {Students.map((Student)=> <StudentInfoForm info={Student} />)}
		  </div>
		</div>
	);
}


export function StudentById(arg){
	let Students = StudentsInfo();

	
	if(Students.length <=0 || arg.id > Students.length || arg.id <=0 ){
		return(<>Invalid id number!</>);
			   
	}else{
		let GetId = arg.id -1;
	    return( <StudentInfoForm info={Students[GetId]} /> );		   
	}
}

export default function ListsExamples(){
			return(
			   <div className="container">
				  <div className="row">
				
				   <div className="col-12">
				       
				       <p><h4>SimpleExample output</h4>
				          <SimpleExample />
				         
				       </p>
				
				      <p><h4>StudentInfoForm output</h4>
				          <StudentInfoForm info={{name:"Ramy",age:"35",hobby:"Music",points:"177"}} />
						  
				       </p>
				      
				      <p><h4>GetStudents output</h4>
				          <GetStudents />
						  
				       </p>
				
				      <p><h4>StudentById output</h4>
				          <StudentById id="1" />
						  
				       </p>
				
				
				      
				  </div>
				</div>
				  
				</div>
			);
		}

