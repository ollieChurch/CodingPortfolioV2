<template>
    <div>
        <div class="bg-color-primary pb-10">
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
            <v-container class="d-flex justify-center flex-wrap skills-container">
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
        </div>

        <section-head>Current Role</section-head>
        <cards-collection :cards="jobs" />

        <section-head>Personal Projects</section-head>
        <cards-collection :cards="projects" />

        <articles-section />
        <contact-section />
        <site-footer />
    </div>
</template>

<script>
    import SectionHead from '../../components/SectionHead.vue'
    import SiteFooter from '../../components/SiteFooter.vue'
    import CardsCollection from '@/components/CardsCollection.vue'

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

    export default {
        name: 'HomeView',

        components: {
            SectionHead,
            SiteFooter,
            ArticlesSection,
            CardsCollection,
            ContactSection
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
                        img: sfGif,
                        text: 'Online puzzle game series following the cases of 1930s P.I. Larry Maxwell through the New York underworld. Over 500 games purchased and generated ~£6000 in profit. Built using React, React Router and CSS.',
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
                        title: "Actor's Portfolio",
                        img: sfGif,
                        text: "Isobelle Pippin is an actor who needed a portfolio website for her self promotion. After discussing with Isobelle her requirements I created this site, deisgned 'mobile first', and linked it to Netlify CMS and Identity so that Isobelle can edit her own content. Built using HTML, CSS and Javascript.",
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
                        title: 'This Portfolio',
                        img: sfGif,
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