import React from 'react'

const Card = () => {
  return (
    <div className='card-part'>
      <h1>Unsere Dienstleistungen im Überblick</h1>
        <div className="container cards">
            <div className="row justify-content-around align-items-center">
                <div className=' cover col-12 col-md-5 col-lg-3'>
                <div className="card  p-12 shadow ">
                    <div className="card-img d-flex align-items-center justify-content-center p-12">
                        <img width="150px" hieght="150px" src="https://manwork.at/wp-content/uploads/2021/12/Icon_Grey-DarkGrey_960x960-scaled-e1641898413992.webp" alt="" />
                    </div>
                    <div className="title-card d-flex flex-column align-items-center justify-content-between">
                        <h4>Personalberatung</h4>
                        <p>Unsere Kunden definieren das Anforderungsprofil, wir übernehmen das gesamte Recruiting und finden gezielt die Besten der Besten. Wir machen zwar nicht alles, aber finden jeden. Vertrauen Sie uns, testen Sie uns.</p>
                        <h4>MEHR ERFAHREN</h4>
                    </div>
                </div>
                </div>
                <div className='cover col-12 col-md-5 col-lg-3'>
                <div className="card  p-12 shadow ">
                    <div className="card-img d-flex align-items-center justify-content-center p-12">
                        <img width="150px" hieght="150px" src="https://manwork.at/wp-content/uploads/2021/12/Icon_Grey-DarkGrey_960x960-scaled-e1641898413992.webp" alt="" />
                    </div>
                    <div className="title-card d-flex flex-column align-items-center justify-content-between">
                        <h4>Personalberatung</h4>
                        <p>Unsere Kunden definieren das Anforderungsprofil, wir übernehmen das gesamte Recruiting und finden gezielt die Besten der Besten. Wir machen zwar nicht alles, aber finden jeden. Vertrauen Sie uns, testen Sie uns.</p>
                        <h4>MEHR ERFAHREN</h4>
                    </div>
                </div>
                </div>
                <div className=' cover col-12 col-md-5 col-lg-3'>
                <div className="card  p-12 shadow ">
                    <div className="card-img d-flex align-items-center justify-content-center p-12">
                        <img width="150px" hieght="150px" src="https://manwork.at/wp-content/uploads/2021/12/Icon_Grey-DarkGrey_960x960-scaled-e1641898413992.webp" alt="" />
                    </div>
                    <div className="title-card d-flex flex-column align-items-center justify-content-between">
                        <h4>Personalberatung</h4>
                        <p>Unsere Kunden definieren das Anforderungsprofil, wir übernehmen das gesamte Recruiting und finden gezielt die Besten der Besten. Wir machen zwar nicht alles, aber finden jeden. Vertrauen Sie uns, testen Sie uns.</p>
                        <h4>MEHR ERFAHREN</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="Branchen"style={{"margin-top": "40px"}}>
            <h1>Branchen</h1>
            <p>JOBS & PERSONALLÖSUNGEN.</p>
            <h4>UNSER KNOW-HOW FÜR IHREN ERFOLG.</h4>
            <hr />
        </div>
    </div>
  )
}

export default Card
