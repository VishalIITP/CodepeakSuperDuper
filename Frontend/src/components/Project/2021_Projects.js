import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from './2021_details.json';
import avl from '../../pages/Images/avl.png';

function Project2021_Search() {
    let [projects, setProjects] = useState(data);

    const searchHandler = (e) => {
        console.log(e.target.value)
        let query = e.target.value.toLowerCase().trim();
        let temp = [];
        data.forEach((project) => {
            let flag = false;
            project.tag.map((t) => {
                if (t.toLowerCase().includes(query))
                    flag = true;
            })
            project.lang.map((lan) => {
                if (lan.toLowerCase().includes(query))
                    flag = true;
            })
            if (flag) temp.push(project);
        })
        setProjects(temp);
    }

    return <>
        <input
            type="search"
            name="searchBar"
            id="searchBar"
            placeholder="Search for Project using tags"
            onChange={(e) => searchHandler(e)}
        />
        
        <div className="row">
            {projects.map((el) => {
                return (
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        
                        {el.special === true ?[el.avl=== true?
                            <div className="nwoc-repo-card"> 
                        <a href={el["repo-url"]} target="_blank">                
                         <div className="repo-heading">
                            <img src={avl} style={{width:"6rem",float:"left"}} />                               
                           {/* <img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/mark-github.svg" /> */}
                              <a className="repo-title-aviyel" href={el["repo-url"]} target="_blank">{el.title}</a>
                          </div></a>      <div className="repo-desc">{el.desc}</div>
                          {/* <div className="repo-mentors">Mentors: {"  "}
                              {
                                  el.mentors.map((mentor) =>
                                      (<a href={"https://github.com/" + mentor} target="_blank">{mentor + " "}</a>)
                                  )
                              }
                          </div> */}
                          <ul className="repo-stats">
                              <li><img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/file-code.svg" /> {
                                  el.lang.toString().replaceAll(',', '/')
                              }</li>
                              <li><img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/tag.svg" /> {el.tag.toString().replaceAll(',', '/')}</li>
                          </ul>
                      </div>: <div style={{ backgroundImage: `linear-gradient(135deg, #04b471 , rgb(13,35,59) 10%)`}} className="nwoc-repo-card">
                         <div className="repo-heading">    
                           <img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/mark-github.svg" />
                              <a className="repo-title" href={el["repo-url"]} target="_blank">{el.title}</a>
                          </div>  <div className="repo-desc">{el.desc}</div>
                          {/* <div className="repo-mentors">Mentors: {"  "}
                              {
                                  el.mentors.map((mentor) =>
                                      (<a href={"https://github.com/" + mentor} target="_blank">{mentor + " "}</a>)
                                  )
                              }
                          </div> */}
                          <ul className="repo-stats">
                              <li><img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/file-code.svg" /> {
                                  el.lang.toString().replaceAll(',', '/')
                              }</li>
                              <li><img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/tag.svg" /> {el.tag.toString().replaceAll(',', '/')}</li>
                          </ul>
                      </div>]:
                      <div className="nwoc-repo-card">
                      <a href={el["repo-url"]} target="_blank">
                      <div className="repo-heading"> 
                           
                           <img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/mark-github.svg" />
                              <a className="repo-title" href={el["repo-url"]} target="_blank">{el.title}</a>
                          </div></a>  <div className="repo-desc">{el.desc}</div>
                          <div className="repo-mentors">Mentors: {"  "}
                              {
                                  el.mentors.map((mentor) =>
                                      (<a href={"https://github.com/" + mentor} target="_blank">{mentor + " "}</a>)
                                  )
                              }
                          </div>
                          <ul className="repo-stats">
                              <li><img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/file-code.svg" /> {
                                  el.lang.toString().replaceAll(',', '/')
                              }</li>
                              <li><img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/tag.svg" /> {el.tag.toString().replaceAll(',', '/')}</li>
                          </ul></div>
                          }
                        
                        
                           
                
               </div> )
            })}
        </div>
        </>
}
export default Project2021_Search;