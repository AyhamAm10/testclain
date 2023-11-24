
import Footer from './componant/Footer'
import Mainpage from './pages/Mainpage'
import { useEffect, useState } from 'react'
import Foraplicants from './pages/Foraplicants'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Services from './pages/Services'
import Test from './pages/Test'
import Navbar from './componant/nav'
import Services from './pages/Test';


function App() {

  const [openlist, setopenlist] = useState(false);
  const [myservice, setmyservice] = useState(null)

  const handelopen = () => {
    openlist ?
      setopenlist(false) : setopenlist(true)
  }
  const handelclose = () => {
    openlist ? null : setopenlist(false)
  }


  return (
    <>
      {/* <Header handelclose={handelclose} handelopen={handelopen} />
      <Hiddenlist openlist={openlist}/> */}
     <Navbar/>
      <Routes>
        <Route path="/" exact element={<Mainpage />} />
        <Route path="/services" element={<Test setmyservice={setmyservice} myservice={myservice} />} />
        <Route path="/order" element={<Foraplicants myservice={myservice} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
