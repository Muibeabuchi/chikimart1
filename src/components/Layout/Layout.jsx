import Routers from '../../router/Routers';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Layout() {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout;