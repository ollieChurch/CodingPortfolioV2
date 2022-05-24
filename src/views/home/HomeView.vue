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
                sfGif: sfGif,
                jobs: [
                    {
                        title: 'Salary Finance',
                        subtitle: 'Junior Software Developer',
                        img: sfGif,
                        text: 'Some information about my current role at Salary Finance and what that means. Tech stack: C#, MySQL, Vue, Typescript.',
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
                        text: 'Online puzzle game series following the cases of fictional 1930s P.I. Larry Maxwell. Over 500 users and generated ~£5000 in profit. Built using React.',
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
                        text: 'Online puzzle game series following the cases of fictional 1930s P.I. Larry Maxwell. Over 500 users and generated ~£5000 in profit. Built using React.',
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
                        title: 'Orlando Travel Club',
                        img: sfGif,
                        text: 'Online puzzle game series following the cases of fictional 1930s P.I. Larry Maxwell. Over 500 users and generated ~£5000 in profit. Built using React.',
                        buttons: [
                            {
                                name: 'See The Code',
                                linkTo: 'https://github.com/ollieChurch/floridaTravel'
                            },
                            {
                                name: 'Take It For A Spin'
                            }
                        ]
                    }
                ],
            }
        }
    }
</script>
