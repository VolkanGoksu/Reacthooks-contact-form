
import React,{useState} from 'react'

export default function ContactForm() { 
    const formFields = { 
        name:'',
        surname:'',
        number:'',
        mail:''
    }
    const [fields, Setfields] = useState(formFields)
    const changeFields=(e)=>{
          var fieldName = e.target.name;
          var fieldValue = e.target.value

          Setfields({
              ...fields,[fieldName]:fieldValue
          })
    }
    const dataSave=(e)=>{
         e.preventDefault();
        console.log(fields);
    }
  
    return (
        <form onSubmit={dataSave}>
            <div className="form-group input-group">
               <div>                
                     < input className='form-control' onChange={changeFields} type='text' name='name' placeholder='Name' ></input>
                </div>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                     < input className='form-control' onChange={changeFields} name='surname' placeholder='Surname'></input>
                </div>
            </div>
            <div className = "form-row">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                     < input className='form-control' onChange={changeFields}  name='number' placeholder='Number' ></input>
                </div>
            </div>
            <div className="form-group input-group ">
                <div className="input-group-prepend">
                     < input className='form-control' onChange={changeFields} name='mail' placeholder='Email' ></input>
                </div>
            </div>
            </div>
            <div className="form-group">
                <input type = "submit" value="kaydet" className = "btn btn-success"/>
            </div>
        </form>
    )
}
