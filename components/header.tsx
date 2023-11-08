import Link from 'next/link'

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center  mt-16 mb-16 md:mb-12">
      <div className='header-links'>
        <Link href="/"><img className='intro-img' src='/assets/blog/logo/header-logo.png'></img></Link>
        <div className='nav-links'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Meet the Team</Link>
        </div>
      </div>
    </section>
  )
}

export default Header
