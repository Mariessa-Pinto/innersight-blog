import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="footer-bg">
        <div className="footer-content">
          <div className="footer-container">
            <Link href="/"><img className='footer-img' src='/assets/blog/logo/footer-logo.png'></img></Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer
