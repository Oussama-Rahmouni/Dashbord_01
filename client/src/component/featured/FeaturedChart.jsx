import React from 'react'
import './featuredchart.scss'

const FeaturedChart = () => {
  const states = [
'Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kebili', 'Kef', 'Mahdia', 'Manouba',
'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'];
  return (
    <div className='featuredChart'>
      <form action="">
        <div className='states'>
        <label>Gouvernorat:</label>
           <select name="state" id="state">
              <option value="">Gouvernorat : </option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
        </div>
        <div className="city">
          <label htmlFor="">city : </label>
          <input type="text" placeholder='city'/>
        </div>
        <div className="adress">
          <label htmlFor="">adress : </label>
          <input type="text" placeholder='adress' />
        </div>
        <div className="postal">
          <label htmlFor="">code postal : </label>
          <input type="Numer" placeholder='code postal' />
        </div>
      </form>
    </div>
  )
}

export default FeaturedChart
