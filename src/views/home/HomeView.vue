<template>
    <div>
        <div class="bg-color-primary">
            <v-container>
                <div class="mt-9 text-center">
                    <h1 class="text-h1 mb-n2">Hi I'm Ollie</h1>
                    <h2 class="text-h3 mb-n2">Software Developer</h2>
                </div>
                <v-img
                    contain
                    max-height="55vh"
                    max-width="100%"
                    :src="greetingImg"
                />
            </v-container>
            <v-container class="d-flex justify-center flex-wrap skills-container mb-10">
                <v-img 
                    v-for="(skill, index) in skills"
                    :key="'skillLogo' + index"
                    class=""
                    contain
                    height="75px"
                    max-width="100px"
                    :alt="skill.alt"
                    :src="skill.src"
                />
            </v-container>
            <section-border />
        </div>

        <section-head>Current Role</section-head>
        <section-border position="btm" />
        <cards-collection :cards="jobs" class="hidden-md-and-up"/>
        <horizontal-card
            class="mx-2 hidden-sm-and-down"
            :cardTitle="jobs[0].title"
            :cardSubtitle="jobs[0].subtitle"
            :cardImg="jobs[0].img"
            :cardText="jobs[0].text"
            :buttons="jobs[0].buttons"
        />

        <section-border />
        <section-head>Personal Projects</section-head>
        <section-border position="btm" />
        <cards-collection :cards="projects" />

        <articles-section />
        <contact-section />
        <site-footer />
    </div>
</template>

<script>
    import SectionHead from '../../components/SectionHead.vue'
    import SectionBorder from '@/components/SectionBorder.vue'
    import SiteFooter from '../../components/SiteFooter.vue'
    import CardsCollection from '@/components/CardsCollection.vue'
    import HorizontalCard from '@/components/HorizontalCard.vue'

    import ArticlesSection from './sections/ArticlesSection.vue'
    import ContactSection from './sections/ContactSection.vue'

    import greetingImg from '../../assets/images/png/programing.png'
    import sfGif from '../../assets/images/gif/salaryFinance.gif'
    import vueLogo from '../../assets/images/png/vue.png'
    import csharpLogo from '../../assets/images/png/csharp.png'
    import dotnetLogo from '../../assets/images/png/dotnet.png'
    import reactLogo from '../../assets/images/png/react.png'
    import mysqlLogo from '../../assets/images/png/mysql.png'
    import javascriptLogo from '../../assets/images/png/javascript.png'
    import cssLogo from '../../assets/images/png/css.png'
    import htmlLogo from '../../assets/images/png/html.png'
    import typescriptLogo from '../../assets/images/png/typescript.png'

    import portfolioImg from '../../assets/images/png/portfolio.png'
    import maxwellImg from '../../assets/images/jpg/maxwellMysteries2.jpg'
    import actorImg from '../../assets/images/jpg/actorPortfolio1.jpg'
    import directorImg from '../../assets/images/jpg/directorPortfolio.jpg'
    import autoschedulerImg from '../../assets/images/jpg/autoscheduler.jpg'


    export default {
        name: 'HomeView',

        components: {
            SectionHead,
            SiteFooter,
            ArticlesSection,
            CardsCollection,
            ContactSection,
            HorizontalCard,
            SectionBorder
        },

        data: function () {
            return {
                greetingImg: greetingImg,
                skills: [
                    {
                        alt: "Csharp Logo",
                        src: csharpLogo
                    },
                    {
                        alt: "Vue Logo",
                        src: vueLogo
                    },
                    {
                        alt: ".Net logo",
                        src: dotnetLogo
                    },
                    {
                        alt: "React logo",
                        src: reactLogo
                    },
                    {
                        alt: "MySQL logo",
                        src: mysqlLogo
                    },
                    {
                        alt: "Typescript logo",
                        src: typescriptLogo
                    },
                    {
                        alt: "Javascript logo",
                        src: javascriptLogo
                    },
                    {
                        alt: "CSS logo",
                        src: cssLogo
                    },
                    {
                        alt: "HTML logo",
                        src: htmlLogo
                    },
                ],
                sfGif: sfGif,
                jobs: [
                    {
                        title: 'Salary Finance',
                        subtitle: 'Junior Software Developer',
                        img: sfGif,
                        text: "When it comes to managing money, there’s no one-size-fits-all approach. Salary Finance is here to make managing your money simple and help you improve your financial situation with responsible financial products and educational resources. Working with C#, .Net, Vue, Typescript, MySQL",
                        buttons: [
                            {
                                name: 'Visit LinkedIn',
                                linkTo: 'https://www.linkedin.com/in/olliechurch/'
                            },
                            {
                                name: 'Download CV',
                                linkTo: 'ollieChurchCV.pdf'
                            }
                        ]
                    }
                ],
                projects: [
                    {
                        title: 'Maxwell Mysteries',
                        img: maxwellImg,
                        text: 'Online puzzle game series following the cases of 1930s P.I. Larry Maxwell through the New York underworld. Over 550 games purchased and generated ~£6000 in profit. Built using React, React Router and CSS.',
                        buttons: [
                            {
                                name: 'See The Code',
                                linkTo: 'https://github.com/ollieChurch/MaxwellMysteriesDemo'
                            },
                            {
                                name: 'Take It For A Spin',
                                linkTo: 'https://mysteries-demo.co.uk'
                            }
                        ]
                    },
                    {
                        title: "Director's Portfolio",
                        img: directorImg,
                        text: 'Indiana Lown-Collins is an award winning theatre director who, following a high profile win, was looking for a website she could provide to professional contacts to showcase her work. I built this site using Vue and Bootstrap, designed mobile-first, and included a CMS for Indiana to edit the content.',
                        buttons: [
                            {
                                name: 'See The Code',
                                linkTo: 'https://github.com/ollieChurch/IndianaDirector'
                            },
                            {
                                name: 'Take It For A Spin',
                                linkTo: 'https://indianalowncollins.co.uk'
                            }
                        ]
                    },
                    {
                        title: "Actor's Portfolio",
                        img: actorImg,
                        text: "Isobelle Pippin is an actor who needed a portfolio website for her self promotion. After discussing with Isobelle her requirements, I created this site, deisgned 'mobile first', and included a CMS so that Isobelle can edit her own content. Built using HTML, CSS and Javascript.",
                        buttons: [
                            {
                                name: 'See The Code',
                                linkTo: 'https://github.com/ollieChurch/ActingPortfolioIP'
                            },
                            {
                                name: 'Take It For A Spin',
                                linkTo: 'https://isobellepippin.co.uk'
                            }
                        ]
                    },
                    {
                        title: "Autoscheduler",
                        img: autoschedulerImg,
                        text: 'Built as a purely personal project to develop my knowledge of C#, ASP.Net and Blazor components. This tool helps me schedule out my to-do list based on priority and how much time I have to get stuff done. It uses the basic Bootstrap features for the design and the logic uses C#',
                        buttons: [
                            {
                                name: 'See The Code',
                                linkTo: 'https://github.com/ollieChurch/Autoscheduler'
                            }
                        ]
                    },
                    {
                        title: 'This Website',
                        img: portfolioImg,
                        text: "This is the second iteration of my coding portfolio. Designed 'mobile first' and built using Vue, Vue-Router, Vuex and Vuetify.",
                        buttons: [
                            {
                                name: 'See The Code',
                                linkTo: 'https://github.com/ollieChurch/CodingPortfolioV2'
                            },
                            {
                                name: 'Take It For A Spin',
                                linkTo: 'https://olliechurch.co.uk'
                            }
                        ]
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    .skills-container {
        gap: 1.5em;
    }
</style>
