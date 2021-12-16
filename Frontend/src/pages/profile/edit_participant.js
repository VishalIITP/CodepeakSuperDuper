import React from 'react'
import Animatedbg from '../../components/Animatedbg'
import Navigation from '../../components/Navigation'
import Footer from '../../components/footer'
import "./profile_participant.css"
import { Link } from 'react-router-dom';

export default function edit_participant() {
    return (
        <div>
            <Navigation />
            <Animatedbg />
            <div className="profile_personal">
        <div className="pro_btn">
        <Link to="/login/profile/profile_participant">
              <button >Personal Details</button>
            </Link>
            <Link to="/login/profile/edit_participant">
              <button className="active_pro">Edit profile</button>
            </Link>

        </div>
        <div className="pro_details edit_details">
            <h2>Edit Details</h2>
            <hr className="conf_hr"/>

            
            
            
            
            <form method="post" action="">

            
            
                <div className="profile_details">
                    <p><label for="inputPassword3" className="col-form-label">Name</label></p>
                    <div className="edit_fill">
                        <input className="edit-fill-form" type="text" className="form-control" id="inputPassword3" name="name" defaultValue="Name" required/>
                    </div>
                </div>

                <div className="profile_details">
                    <p><label for="inputPassword3" className="col-form-label">Email</label></p>
                    <div className="edit_fill">
                        <input className="edit-fill-form" type="text" className="form-control" id="inputPassword3" name="name" defaultValue="Email" required/>
                    </div>
                </div>

                <div className="profile_details">
                    <p><label for="inputPassword3" className="col-form-label">Github-Id</label></p>
                    <div className="edit_fill">
                        <input className="edit-fill-form" type="text" className="form-control" id="inputPassword3" name="name" defaultValue="Id" required/>
                    </div>
                </div>
                
                <div className="profile_details">
                    <p><label for="inputPassword3" className="col-form-label">College Name</label></p>
                    <div className="edit_fill">
                        <input className="edit-fill-form" type="text" className="form-control" id="inputPassword3" name="clg" defaultValue="Clg name" required/>
                    </div>
                </div>

                <div className="profile_details">
                    <p><label for="phone" className=" col-form-label">Phone Number</label></p>
                    <div className="edit_fill">
                        <input className="edit-fill-form" type="text" className="form-control" id="inputPassword3" name="phno" defaultValue="number" required/>
                    </div>
                </div>
                
                
                <div className="profile_details">
                    <p><label for="inputPassword3" className="col-form-label">Password</label></p>
                    <div className="edit_fill">
                        <input className="edit-fill-form" type="password" className="form-control" id="inputPassword3" name="password" defaultValue=""  required/>
                    </div>
                </div>
                <div className="profile_details">
                    <div>
                        <button type="submit" className="btn btn-primary" name="update">Update</button>
                    </div>
                </div>

                
          
                
            </form>
        </div>
    </div>
    <Footer/>
        </div>
    )
}
