import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import Logo from '../components/Logo'


const LinksPage = () => (
  <Layout title="Fortes Digital | Links">
    <div className="container flex justify-center align-center">
        <div>
          <Logo />
          <ul className="w-100">
              <li className="border-white"><a className="text-white" href="https://fortes.digital">Site</a></li>
              <li><a className="text-white" href="https://www.instagram.com/fortes.digital/">Instagram</a></li>
              <li><a className="text-white" href="https://wa.me/5548988107225/">Whatsapp</a></li>
          </ul>
        </div>
    </div>
  </Layout>
)

export default LinksPage
