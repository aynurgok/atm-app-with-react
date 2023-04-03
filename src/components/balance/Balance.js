import React, {useContext} from 'react'
import SiteContext, {Context} from '../../context/SiteContext'
import './style.css'
import Button from '../button/Button'
function Balance() {
  const {balance} = useContext(Context)
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <div className='balance-container'>
      <p className='balance-title'>Current Balance</p>
      <p className='amount'>{formatter.format(balance)}</p>
      <Button />
      
    </div>
  )
}
export default Balance
