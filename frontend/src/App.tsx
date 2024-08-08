import Navbar from './components/Navbar/Navbar.tsx'
import './App.css'

const App = () => {
  return (
    <>
      <div className='container'>
        <Navbar/>
        <div className="content"> {/*this div ensures the nav doesnt overlap content*/}
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