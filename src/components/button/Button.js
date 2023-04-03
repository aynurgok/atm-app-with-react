import React, {useContext}from 'react'
import { Context } from '../../context/SiteContext'
import './button.css'

function Button() {
    const { balance, setBalance,showPopup,setShowPopup,newData,setNewData} = useContext(Context)
    

    const handleAdd = () => {
      setShowPopup(false);
      setBalance(balance+parseFloat(newData.name))
    }
    const handleDelete = () => {
        setShowPopup(false);
        setBalance(balance-parseFloat(newData.name))
    }
  
    return (
      <div className='popup'>
        <button onClick={() => setShowPopup(true)}>Ekle</button>
        {showPopup &&
          <div className="amount-popup">
            <h3>Para miktarını girin</h3>
            <form>
              <label>
                Miktar:
                <input type="number" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
              </label>
              <button type="button" onClick={handleAdd} >Yatır</button>
              <button type="button" onClick={handleDelete} >Çek</button>
            </form>
          </div>
        }
      </div>
    );
}

export default Button
