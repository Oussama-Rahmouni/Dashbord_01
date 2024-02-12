import React from 'react'
import './widget.scss'
import PrintIcon from '@mui/icons-material/Print';

const Widget = ({type}) => {
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">Apparail</span>
        <span className="state">state</span>
        <span className="link">see all apparails</span>
      </div>
      <div className="right">
        <div className="percentage">
            <PrintIcon />
            <p className="state">normal</p>
        </div>
      </div>
    </div>
  )
}

export default Widget
