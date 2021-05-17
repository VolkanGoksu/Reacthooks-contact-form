import React from 'react'
import ContactForm from './ContactForm'
export default function Contacts() {
    const dataSave=(nesne)=>{
             console.log(nesne);
    }
    return (
        <div>
            <div className ="jumbotron">
                 <div className="container">
                       <h2 className="display-4">
                            İletişim Bilgileri
                       </h2>
                 </div>
            </div>
            <div className='row'>
                <div className="col-md-5">
                    <ContactForm props={dataSave} />
                </div>
                <div className = "col-md-7">
                    Iletişim Bilgileri Listesi
                </div>
            </div>
        </div>
    )
}
