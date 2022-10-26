import Layout from '../components/Layout'
import Logo from '../components/Logo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons'

const LinksPage = () => (
  <Layout title="Fortes Digital | Links">
    <div className="container flex justify-center">
        <div>
          <Logo />
          <ul className="w-100">
              <li className="border-2 border-pur rounded-md bg-pur-hover text-center m-5">
                <a className="text-pur block w-100 hover:text-white p-5 flex gap-3 justify-center align-middle" href="https://fortes.digital">
                  <FontAwesomeIcon icon={faWindowMaximize} fontSize="20"/>
                  <span className='relative -top-0.5'>
                    Acesse o site
                  </span>
                </a>
              </li>
              <li className="border-2 border-pur rounded-md bg-pur-hover text-center m-5">
                <a className="text-pur block w-100 hover:text-white p-5 flex gap-3 justify-center align-middle" href="https://www.instagram.com/fortes.digital/">
                  <FontAwesomeIcon icon={faInstagram} fontSize="20"/>
                  <span className='relative -top-0.5'>
                    Acompanhe nossa rotina
                  </span>
                </a>
              </li>
              <li className="border-2 border-pur rounded-md bg-pur-hover text-center m-5">
                <a className="text-pur block w-100 hover:text-white p-5 flex gap-3 justify-center align-middle" href="https://wa.me/5548988107225/">
                  <FontAwesomeIcon icon={faWhatsapp} fontSize="20"/>
                  <span className='relative -top-0.5'>
                    Bora marcar um café?
                  </span>
                </a>
              </li>
          </ul>

          <p className="text-pur m-20 mb-15 text-center">© Copyright 2022 Fortes.digital</p>
        </div>
    </div>
  </Layout>
)

export default LinksPage
