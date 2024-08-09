import Navbar from './components/Navbar/Navbar.tsx'
import './App.css'
import Banner from './components/Banner/Banner.tsx'

const App = () => {
  return (
    <>
      <div className='container'>
        <Navbar/>
        <div className="content"> {/*this div ensures the nav doesnt overlap content*/}
          <Banner></Banner>
          <section>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
          </section>
          
        </div>
      </div>

    </>
    
  )
}

export default App