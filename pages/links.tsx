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
              <li className="border-2 rounded-md hover:bg-purple-400 border-purple-400 text-center m-5"><a className="text-purple-400 block w-100 hover:text-black p-5" href="https://fortes.digital">Site</a></li>
              <li className="border-2 rounded-md hover:bg-purple-400 border-purple-400 text-center m-5"><a className="text-purple-400 block w-100 hover:text-black p-5" href="https://www.instagram.com/fortes.digital/">Instagram</a></li>
              <li className="border-2 rounded-md hover:bg-purple-400 border-purple-400 text-center m-5"><a className="text-purple-400 block w-100 hover:text-black p-5" href="https://wa.me/5548988107225/">Whatsapp</a></li>
          </ul>
        </div>
    </div>
  </Layout>
)

export default LinksPage
