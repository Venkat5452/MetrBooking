import React from 'react'

function About() {
  return (
    <>
    <div className='container-fluid d-block w-100 text-center'>
        <div className='ss1'>
        <img
                    className="d-block w-100 ss"
                    src="https://www.ltmetro.com/wp-content/uploads/2018/10/HMRStablingYard.jpg"
                    alt="Third slide"
                />
        </div>
    </div>
    <div className='mt-3 p-2 '>
        <h4>About Hyderabad Metro Rail (HMR)</h4>
        <p className='m-2'>Hyderabad Metro Rail (HMR) is the world’s largest Public-Private Partnership (PPP) project in the Metro rail sector. Metro rail and other forms of Mass Rapid Transport System (MRTS) are emerging as prominent infrastructure requirement offering a viable solution to the transportation woes that accompany urban expansion. Hyderabad Metro Rail (HMR) Project is an integrated urban transport development project with inter-modal connectivity and convenient sky walks that will mark the beginning of an era of seamless commuting across Hyderabad.</p>
        <p className='m-2'>The Hyderabad Metro Rail Network will cover a total distance of around 69.2 Km across three corridors:</p>
        <ul className='m-3'>
            <li>Corridor I : Miyapur to LB Nagar</li>
            <li>Corridor II : JBS to MGBS</li>
            <li>Corridor III : Nagole to Raidurgam</li>
        </ul>
    </div>
    </>
  )
}

export default About;