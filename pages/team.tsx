import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'

type Props = {
    allPosts: Post[]
}

export default function Team({ allPosts }: Props) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <>
            <Layout>
                <Head>
                    <title>Meet the Team</title>
                </Head>
                <Container>
                    <Intro />
                    <div className="teamContainer">
                        <div className="teammate">
                            <div className="teammate-image">
                                <img src="/assets/blog/authors/mariessa.png"></img>
                            </div>
                            <div className="teammate-info">
                                <h3>Mariessa Pinto</h3>
                                <h4>Project Manager & Developer</h4>
                                <p>Mariessa is a front-end web developer and UX/UI designer. She designs and codes websites and apps for businesses and takes a special  interest in react and react-native. In her free time, she enjoys spending time with her dog, Auri.</p>
                            </div>
                        </div>
                        <div className="teammate">
                            <div className="teammate-image">
                                <img src="/assets/blog/authors/anika.png"></img>
                            </div>
                            <div className="teammate-info">
                                <h3>Anika Grewal</h3>
                                <h4>Project Manager & Developer</h4>
                                <p>Anika is a front-end developer and UI/UX designer. Combining coding and design, she creates websites and app. In her free time, she enjoys spending time with her dogs and traveling to the island.</p>
                            </div>
                        </div>
                        <div className="teammate">
                            <div className="teammate-image">
                                <img src="/assets/blog/authors/bri.png"></img>
                            </div>
                            <div className="teammate-info">
                                <h3>Bri-lynn Guemos</h3>
                                <h4>Front-End Developer & UX Designer</h4>
                                <p>Bri-lynn is a front end web developer and UI/UX designer, she designs websites with the goal of creating the best user experience possible. She spends her free time taking spin classes and hanging out with her dog, Bruce.</p>
                            </div>
                        </div>
                        <div className="teammate">
                            <div className="teammate-image">
                                <img src="/assets/blog/authors/patricia.png"></img>
                            </div>
                            <div className="teammate-info">
                                <h3>Patricia Jiang</h3>
                                <h4>Developer</h4>
                                <p>Patricia is a front-end coder and digital designer. She creates websites for businesses using digital art and coding. Recently, Patricia re-designed and developed a website for a UBC psychology lab.</p>
                            </div>
                        </div>
                        <div className="teammate">
                            <div className="teammate-image">
                            <img src="/assets/blog/authors/glenda.png"></img>
                            </div>
                            <div className="teammate-info">
                                <h3>Glenda Cheung</h3>
                                <h4>UX/UI Designer</h4>
                                <p>Glenda is a UX/UI designer and communication designer. She creates digital mediums like interfaces and social media posts that are appealing to all audiences.</p>
                            </div>
                        </div>
                        <div className="teammate">
                            <div className="teammate-image">
                            <img src="/assets/blog/authors/lauryn.png"></img>
                            </div>
                            <div className="teammate-info">
                                <h3>Lauryn Kung</h3>
                                <h4>UX/UI & Graphic Designer</h4>
                                <p>Lauryn is a UX/UI designer who designs web pages and digital assets. In her free time, she enjoys digital drawing on the side as a hobby.</p>
                            </div>
                        </div>
                        <div className="teammate">
                            <div className="teammate-image">
                            <img src="/assets/blog/authors/kyle.jpg"></img>
                            </div>
                            <div className="teammate-info">
                                <h3>Kyle Arthur</h3>
                                <h4>UX/UI Designer</h4>
                                <p>Kyle is a UX/UI and graphic designer with a focus on print design. In their free time, they screen print and boulder.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout >
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
