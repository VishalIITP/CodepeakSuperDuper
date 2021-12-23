import React from 'react'
import Animatedbg from '../../components/Animatedbg'
import Navigation from '../../components/Navigation'
import Footer from '../../components/footer'
import Style from "./projectDetails.css"
import "./profile_participant.css"
import "../Login/style.css";
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';

const ProjectDetails = () => {
const data = React.useMemo(() =>
 [
 {
 name: 'Kim Parrish',
 address: '4420 Valley Street, Garnerville, NY 10923',
 date: '07/11/2020',
 order: '87349585892118',
 },
 {
 name: 'Michele Castillo',
 address: '637 Kyle Street, Fullerton, NE 68638',
 date: '07/11/2020',
 order: '58418278790810',
 },
 {
 name: 'Eric Ferris',
 address: '906 Hart Country Lane, Toccoa, GA 30577',
 date: '07/10/2020',
 order: '81534454080477',
 },
 {
 name: 'Gloria Noble',
 address: '2403 Edgewood Avenue, Fresno, CA 93721',
 date: '07/09/2020',
 order: '20452221703743',
 },
 {
 name: 'Darren Daniels',
 address: '882 Hide A Way Road, Anaktuvuk Pass, AK 99721',
 date: '07/07/2020',
 order: '22906126785176',
 },
 {
 name: 'Ted McDonald',
 address: '796 Bryan Avenue, Minneapolis, MN 55406',
 date: '07/07/2020',
 order: '87574505851064',
 },
 ],
 []
)
const columns = React.useMemo(
    () => [
    {
    Header: 'Project Name',
    accessor: 'name',
    },
    {
    Header: 'Description',
    accessor: 'address',
    },
    
    ],
    []
   )
   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
   } = useTable({ columns, data })

    return (
        <div style = {Style}>
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
            <button className="active_pro">Projects</button>
          </Link>
        </div>
        <div className="pro_details edit_details projectTable">
            {/* <h2>Project Details</h2>
            <hr className="conf_hr"/> */}

            
            <table {...getTableProps()} className='tableProject'>
   <thead>
     {headerGroups.map(headerGroup => (
       <tr {...headerGroup.getHeaderGroupProps()}>
         {headerGroup.headers.map(column => (
           <th {...column.getHeaderProps()}>{column.render('Header')}</th>
         ))}
       </tr>
     ))}
   </thead>
   <tbody {...getTableBodyProps()}>
     {rows.map(row => {
       prepareRow(row)
       return (
         <tr {...row.getRowProps()}>
           {row.cells.map(cell => {
             return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
           })}
         </tr>
       )
     })}
   </tbody>
 </table>
 <Link to="/login/profile/project_mentor">
 <button className="btnlog btnproj">Add project</button>
 </Link>
            
            
        </div>
    </div>
    <Footer/>
        </div>
    )

}
export default ProjectDetails;