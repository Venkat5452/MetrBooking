import React from 'react'
import './Footer.css'
function Services() {
  return (
    <div>
        <div className='text-center m-2 text-primary'><h1>Train Timings</h1> </div>
        <ul className='m-3'>
            <li className='m-1'>Hyderabad Metro Rail services are now made available across the city by connecting three different lines through three interchange stations. 
                <ul>
                    <li><p className='text-danger '>Red Line </p><p>- Miyapur to L B Nagar via MG Bus Station, Nampally & Ameerpet</p></li>
                    <li><p className='text-success'>Green Line </p><p>- JBS Parade Ground to MG Bus Station via Secunderabad</p></li>
                    <li><p className='text-primary'>Blue Line </p><p>- Nagole to Raidurg via Secunderabad & Ameerpet</p></li>
                </ul>
            </li>
            <li className='m-1'>Interchange stations connecting two different lines. 
                <ul>
                    <li className='m-3'>MG Bus Station connects Red Line and Green Line</li>
                    <li className='m-3'>JBS Parade Ground connects Green Line and Blue Line</li>
                    <li className='m-3'>Ameerpet Station connects Red Line and Blue Line</li>
                </ul>
            </li>
            <li>Hyderabad Metro Rail is operational from 06:00 am to 11:00 pm. The first train starts at 06:00 am and last train departs at 11:00 pm from all terminal stations.</li>
        </ul>
    </div>
  )
}

export default Services;