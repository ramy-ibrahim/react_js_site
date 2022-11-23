export default function Container(arg_obj){
	
	if(arg_obj.full_width == "true"){
		
		return(<div>{arg_obj.content}</div>);
	}else{
		
		return(
		 <div className="container">
			<div className="row">
		  
		  		<div className="col-12">{arg_obj.content}</div>
		  </div>	
		
		</div>
		
	);
		
		
	}
	
	
	
}