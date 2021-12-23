import React from 'react'
import Animatedbg from '../../components/Animatedbg'
import Navigation from '../../components/Navigation'
import Footer from '../../components/footer'
import "./profile_participant.css"
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';

export default function edit_participant() {
    return (
        <div>
            <Navigation />
            <Animatedbg />
            <div className="profile_personal">
            <div className="pro_btn">
          <Link to="/login/profile/profile_mentor">
            <button >Personal Details</button>
          </Link>

          <Link to="/login/profile/edit_mentor">
            <button>Edit profile</button>
          </Link>

          <Link to="/login/profile/dashboard_mentor">
            <button>Dashboard</button>
          </Link>

          <Link to="/login/profile/project_details">
            <button className="active_pro">Project details</button>
          </Link>
        </div>
        <div className="pro_details edit_details">
            <h2>Add Project</h2>
            <hr className="conf_hr"/>

            
            
            
            
            <form method="post" action="">

            
            
                <div className="profile_details">
                    <p><label for="inputPassword3" className="col-form-label">Name</label></p>
                    <div className="edit_fill">
                        <input className="edit-fill-form" type="text" className="form-control" id="inputPassword3" name="name"  required/>
                    </div>
                </div>

                <div className="profile_details">
                    <p><label for="inputPassword3" className="col-form-label">Github link of Project</label></p>
                    <div className="edit_fill">
                        <input className="edit-fill-form" type="text" className="form-control" id="inputPassword3" name="name"  required/>
                    </div>
                </div>

                <div className="profile_details">
                    <p><label for="inputPassword3" className="col-form-label">Project Description</label></p>
                    <textarea className="edit_fill">
                    <div className="edit_fill">
                        <input className="edit-fill-form" type="textarea" className="form-control" id="inputPassword3" defaultValue=" " name="name"  required/>
                    </div>
                    </textarea>
                </div>
                
                <div className="profile_details">
                    <p><label for="inputPassword3" className="col-form-label">Tags</label></p>
                    <div className="edit_fill">
                        <input className="edit-fill-form" type="text" className="form-control" id="inputPassword3" name="clg" required/>
                    </div>
                </div>

                <div className="profile_details">
                    <div>
                        <button type="submit" className=" btnlog" name="update">Add Project</button>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
    <Footer/>
        </div>
    )
}
