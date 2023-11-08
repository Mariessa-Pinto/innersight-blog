import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Link from 'next/link'

type Props = {
  allPosts: Post[]
}

export default function About({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <Container>
          <Intro />
          <div className="aboutContainer">
                <div className="about-img">
                    <img src="/assets/blog/mockups/blog-about-mockup.png"></img>
                </div>
                <div className="about-app">
                    <h2>What is InnerSight?</h2>
                    <p>InnerSight is a mobile application that enables users experiencing symptoms of depression or anxiety to conveniently journal and analyze their moods in one place. Users have the option of completing prompt-based journal entries or writing an entry without one. Our innovative artificial intelligence (AI) analyzes users' journal entries, extracting any sentiments they express. This eliminates the hassle of users manually scanning their journals to recall how they felt on a certain day. Based on these sentiments, our AI tool provides users with activity recommendations to either enhance their mood or continue ensuring they feel their best possible selves.</p>
                </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
