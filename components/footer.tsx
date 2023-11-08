import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="footer-bg">
      <Container>
        <div className="footer-content">
          <Link href="/"><img className='footer-img' src='/assets/blog/logo/footer-logo.png'></img></Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
