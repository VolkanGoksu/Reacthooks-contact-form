import React from 'react'

export default function ContactForm() { 
    return (
        <form>
            <div className="form-group input-group">
               <div>                
                     < input className='form-control' type='text' placeholder='Name' ></input>
                </div>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                     < input className='form-control' placeholder='Surname'></input>
                </div>
            </div>
            <div className = "form-row">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                     < input className='form-control' placeholder='Number' ></input>
                </div>
            </div>
            <div className="form-group input-group ">
                <div className="input-group-prepend">
                     < input className='form-control' placeholder='Email' ></input>
                </div>
            </div>
            </div>
            <div className="form-group">
                <input type = "submit" value="kaydet" className = "btn btn-success"/>
            </div>
        </form>
    )
}
