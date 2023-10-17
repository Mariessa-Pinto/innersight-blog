import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center  mt-16 mb-16 md:mb-12">
      <img className='intro-img' src='/assets/blog/logo/logo.png'></img>
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        InnerSight
      </h1>
    </section>
  )
}

export default Intro
