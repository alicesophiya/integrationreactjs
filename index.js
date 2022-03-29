import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';



class EmployeeComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      employee:{
      full_name:'',
      email:'',
      company:'',
      project_description:'',
      project_type:'',
      phone:'',
      mobile_code:''
      }
  };
}

changeHandler = e => {
  const name =e.target.name;
  const value= e.target.value;
  this.setState({ employee:{
    ...this.state.employee,
    [name]:value
  }
  });
}
onCreateEmployee=()=>{
  console.log(this.state.employee);  
  axios.post("xxxxxxxxxxxxxxxxxxxxxxxxxxxx", this.state.employee)
  
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err);
  });
}
     render(){
       return(
         <div>
           <h2 style={{color: "blue",textAlign:'left'}} >New Empolyee Form</h2>
           <form>
           <p  style={{color: "blue",textAlign:'left'}} >
    <label>full_name : <input type="text" name="full_name" value={this.state.employee.full_name} 
				onChange={this.changeHandler} ></input>
	</label>
</p>
<p  style={{color: "blue",textAlign:'left'}} >
	<label>email : <input type="text" name="email" 
                                 value={this.state.employee.email} 
                                onChange={this.changeHandler}></input>
	</label>
</p>
<p  style={{color: "blue",textAlign:'left'}} >
	<label>company : <input type="text" name="company" 
                            value={this.state.employee.company} 
                            onChange={this.changeHandler}></input>
	</label>
</p>
<p  style={{color: "blue",textAlign:'left'}} >
	<label>project_description : <input type="text" name="project_description"
							value={this.state.employee.project_description} 
                            onChange={this.changeHandler}></input>
	</label>
</p> 
<p  style={{color: "blue",textAlign:'left'}} >
	<label>project_type : <input type="text" name="project_type"
							value={this.state.employee.project_type} 
                            onChange={this.changeHandler}></input>
	</label>
</p> 
<p  style={{color: "blue",textAlign:'left'}} >
	<label>phone : <input type="text" name="phone"
							value={this.state.employee.phone} 
                            onChange={this.changeHandler}></input>
	</label>
</p> 
<p  style={{color: "blue",textAlign:'left'}} >
	<label>mobile_code : <input type="text" name="mobile_code"
							value={this.state.employee.mobile_code} 
                            onChange={this.changeHandler}></input>
	</label>
</p> 
</form>

<button className="btn btn-primary"  onClick={this.onCreateEmployee}>save</button>
         </div>
       )
     }
   }
 const element=<EmployeeComponent></EmployeeComponent>
 ReactDOM.render(element,document.getElementById("root"))
