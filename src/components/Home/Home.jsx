
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
function Home () {
    return (
      <div style={{ minHeight: '100vh' }}>
            <Header position="sticky" sx={{zIndex:'10'}}/>
            <Body sx={{zIndex:'1'}}/>
            <Footer sx={{zIndex:'10'}}/>
      </div>
    )
  }
  
  export default Home