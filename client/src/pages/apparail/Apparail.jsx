import React from 'react'
import "./apparail.scss"
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import DatatableApp from '../../component/dataTable/DataTableApp'


const Apparail = () => {
  return (
    <div className='apparails'>
        <Sidebar />
        <div className="apparailContainer">
            <Navbar />
            <div className="charContainer">
            <DatatableApp />

            </div>
            
        </div>
    </div>
  )
}

export default Apparail
