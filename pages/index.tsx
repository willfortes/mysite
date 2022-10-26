import Layout from '../components/Layout'
import Logo from '../components/Logo'

const IndexPage = () => (
  <Layout title="Fortes Digital | Go to Digital">
   <header className="w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="h-screen flex justify-center align-middle">
        <Logo />  
      </div>
      <div className="img-back">
        <div className="w-100 h-screen flex justify-center items-center content-center align-middle transparent-bg-pur">
          <p className="text-white text-6xl bold font">Design,<br/>Code,<br/>Optimize<br/>& Sale</p>
        </div>
      </div>
   </header>
  </Layout>
)

export default IndexPage
