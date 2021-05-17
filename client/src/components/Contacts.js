import React ,{useState,useEffect}from 'react'
import ContactForm from './ContactForm'
import firebase from '../firebase'


export default function Contacts() {
   const [contactsData, setContactsData] = useState({})

   useEffect(()=>{
       firebase.child('Contact info').on('value',snapshot=>{
      if(snapshot.val()!=null){
          setContactsData({
              ...snapshot.val()
          })
         // console.log(contactsData);
      }
    })
   },[])
    const dataSave=(nesne)=>{
            // console.log(nesne);
            firebase.child('Contact info').push(
                nesne,
                err =>{
                    console.log(err);
                }
            )

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
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                             <tr>
                                 <th>Name & Surname</th>
                                 <th>Mail</th>
                                 <th>Telefon</th>
                                 <th>işlem</th>
                             </tr>
                        </thead>
                        <tbody>
                                 {Object.keys(contactsData).map(id=>{
                                     return (
                                         <tr key={id}>
                                             <td>{contactsData[id].isim}{contactsData[id].surname}</td>
                                             <td>{contactsData[id].mail}</td>
                                             <td>{contactsData.[id].number}</td>
                                             <td>
                                                 <a className="btn text-primary">
                                                     <i className="fas fa-pencil-alt trash"></i>
                                                 </a>
                                                 <a className="btn text-primary">
                                                     <i className="fas fa-trash"></i>
                                                 </a>
                                             </td>
                                         </tr>
                                     )
                                 })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
