<template>
    <!-- 
    app bar
        nav list in drawer
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
                        class="text-h4"
                    >
                        <v-list-item-icon>
                            <v-icon x-large>mdi-lightning-bolt-circle</v-icon>
                        </v-list-item-icon>
                        {{ link.name }}
                    </v-list-item>
                </v-list>
                <v-btn x-large color="accent" class="articles-btn primary--text align-self-center mt-6 mb-10">Read More</v-btn>
            </v-container>
            <v-img contain max-width="100%" :src="rocketImg" />
        </div>

        <section-head background="none">Contact Me</section-head>
        <v-container class="d-flex justify-space-around">
            <div
                v-for="(button, index) in contactButtons"
                :key="'contactBtn' + button.label + index"
                class="flex-column"
            >
                <v-btn x-large rounded color="secondary">
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
                    <v-btn block large color="accent">Send</v-btn>
                </v-form>
            </v-container>
        </div>

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
                            name: 'Visit LinkedIn'
                        },
                        {
                            name: 'Download CV'
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
                                name: 'See The Code'
                            },
                            {
                                name: 'Take It For A Spin'
                            }
                        ]
                    },
                    {
                        title: "Actor's Portfolio",
                        img: sfGif,
                        text: 'Online puzzle game series following the cases of fictional 1930s P.I. Larry Maxwell. Over 500 users and generated ~£5000 in profit. Built using React.',
                        buttons: [
                            {
                                name: 'See The Code'
                            },
                            {
                                name: 'Take It For A Spin'
                            }
                        ]
                    },
                    {
                        title: 'Orlando Travel Club',
                        img: sfGif,
                        text: 'Online puzzle game series following the cases of fictional 1930s P.I. Larry Maxwell. Over 500 users and generated ~£5000 in profit. Built using React.',
                        buttons: [
                            {
                                name: 'See The Code'
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
                        onClick: function () {
                            console.log(this.label)
                        }
                    },
                    {
                        icon: 'linkedin',
                        label: 'LinkedIn',
                        onClick: function () {
                            console.log(this.label)
                        }
                    },
                    {
                        icon: 'clipboard-arrow-down-outline',
                        label: 'CV',
                        onClick: function () {
                            console.log(this.label)
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .contact-form button:hover,
    .contact-form button:focus {
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
</style>
