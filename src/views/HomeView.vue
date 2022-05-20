<template>
    <!-- 
    app bar
    greeting
    current role
    projects
    articles
    contact
-->
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
                    :src="mouseImg"
                />
            </v-container>
        </div>

        <section-head>Current Role</section-head>
        <div class="py-2 px-5">
            <v-container>
                <project-card
                    :cardTitle="jobCard.title"
                    :cardSubtitle="jobCard.subtitle"
                    :cardImg="jobCard.img"
                    :cardText="jobCard.text"
                    :buttons="jobCard.buttons"
                />
            </v-container>
        </div>

        <section-head>Personal Projects</section-head>
        <div class="py-2 px-5">
            <v-container>
                <project-card
                    v-for="(project, index) in projects"
                    :key="'card' + project.title + index"
                    :cardTitle="project.title"
                    :cardImg="project.img"
                    :cardText="project.text"
                    :buttons="project.buttons"
                />
            </v-container>
        </div>

        <section-head>Articles</section-head>
        <div class="pt-6 bg-color-primary">
            <v-container class="d-flex flex-column">
                <v-list color="primary" class="article-list">
                    <v-list-item
                        v-for="(link, index) in articleLinks"
                        :key="'article' + link.name + index"
                        class="articles-link text-h4 accent--text"
                        :to="link.linkTo"
                        link
                    >
                        <v-list-item-icon>
                            <v-icon x-large>mdi-lightning-bolt-circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>{{ link.name }}</v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-btn x-large color="accent" class="articles-btn primary--text align-self-center mt-6 mb-10">Read More</v-btn>
            </v-container>
            <v-img contain max-width="100%" :src="rocketImg" />
        </div>
        
        <section id="contact">
            <section-head background="none">Contact Me</section-head>
            <v-container class="d-flex justify-space-around">
                <div
                    v-for="(button, index) in contactButtons"
                    :key="'contactBtn' + button.label + index"
                    class="flex-column"
                >
                    <v-btn 
                        class="contactBtn"
                        x-large 
                        rounded 
                        color="secondary" 
                        @click="handleClick(button.linkTo)"
                    >
                        <v-icon x-large>mdi-{{ button.icon }}</v-icon>
                    </v-btn>

                    <p class="text-center mt-2 secondary--text">
                        {{ button.label }}
                    </p>
                </div>
            </v-container>

            <div class="bg-color-secondary py-4">
                <v-container>
                    <v-form class="contact-form">
                        <v-text-field
                            required
                            filled
                            background-color="white"
                            color="accent"
                            label="Name"
                        ></v-text-field>
                        <v-text-field
                            required
                            filled
                            background-color="white"
                            color="accent"
                            label="Email"
                            type="email"
                        ></v-text-field>
                        <v-textarea
                            required
                            filled
                            background-color="white"
                            color="accent"
                            auto-grow
                            label="Message"
                        ></v-textarea>
                        <v-btn class="contactBtn" block large color="accent">Send</v-btn>
                    </v-form>
                </v-container>
            </div>
        </section>
        <site-footer />
    </div>
</template>

<script>
    import SectionHead from '../components/SectionHead.vue'
    import ProjectCard from '../components/ProjectCard.vue'
    import  SiteFooter from '../components/SiteFooter.vue'

    import mouseImg from '../assets/images/png/programing.png'
    import rocketImg from '../assets/images/png/rocket.png'
    import sfGif from '../assets/images/gif/salaryFinance.gif'

    export default {
        name: 'HomeView',

        components: {
            SectionHead,
            ProjectCard,
            SiteFooter
        },

        data: function () {
            return {
                mouseImg: mouseImg,
                rocketImg: rocketImg,
                sfGif: sfGif,
                jobCard: {
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
                },
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
                articleLinks: [
                    {
                        name: "Wouldn't It Be Cool If...",
                        linkTo: '#'
                    },
                    {
                        name: 'Why I Love CSS Grid',
                        linkTo: '#'
                    },
                    {
                        name: 'Transferable Skills',
                        linkTo: '#'
                    },
                    {
                        name: 'Build Tic Tac Toe',
                        linkTo: '#'
                    }
                ],
                contactButtons: [
                    {
                        icon: 'github',
                        label: 'GitHub',
                        linkTo: 'https://github.com/ollieChurch'
                    },
                    {
                        icon: 'linkedin',
                        label: 'LinkedIn',
                        linkTo: 'https://linkedin.com/in/olliechurch/'
                    },
                    {
                        icon: 'clipboard-arrow-down-outline',
                        label: 'CV',
                        linkTo: 'ollieChurchCV.pdf'
                    }
                ]
            }
        },

        methods: {
            handleClick: function(link) {
                window.open(link, '_blank, norefferer')
            },
        }
    }
</script>

<style scoped>
    .contactBtn:hover,
    .contactBtn:focus {
        background-color: var(--v-primary-base) !important;
        color: var(--v-accent-base) !important;
    }

    .articles-btn:hover,
    .articles-btn:focus {
        background-color: var(--v-secondary-base) !important;
    }

    .v-btn:not(.v-btn--round).v-size--x-large {
        height: min-content;
        padding: 0.5em;
        font-size: 2rem;
    }

    .article-list {
        width: fit-content;
        margin: 0 auto;
    }

    .articles-link:hover {
        color: var(--v-secondary-base) !important;
    }
</style>
