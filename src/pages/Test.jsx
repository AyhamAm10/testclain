import React from 'react'
import img2 from "../assets/img2.jpg"
import img5 from "../assets/img5.jpg"
import { Link } from 'react-router-dom'
import Cardservice from './Cardservice'
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Services = ({setmyservice}) => {
    const items = [
        {
            id: 1,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        }
        ,
        {
            id: 2,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        },
        {
            id: 3,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        }
        ,
        {
            id: 4,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        },
        {
            id: 5,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        },
        {
            id: 6,
            item: "item ",
            price: 300,
            priceE: 900,
            title: "Property Cleaning",
            img: img2
        }
    ]

    const handeloption = (e) => {
        setmyservice(e)
        console.log(e)

    }


  return (
    <>
    <div className="services">
    <div className="bg-services d-flex align-items-center justify-content-center" style={{ backgroundImage: `url('${img5}')` }}>
                <h1 className='white'>Services 01</h1>
            </div>
            
            
        <div className="container">
                <div className="row">
                    {
                        items.map((service , index) => (

                            <div className="col-12 col-md-6 col-lg-4 reletive mt-50 serv" onClick={() => { handeloption(service) }}>
                                <Link to={'/order'}>
                                <Cardservice service={service} />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

    </div>
    </>
  )
}

export default Services

