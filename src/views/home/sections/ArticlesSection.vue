<template>
    <div>
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
                        <v-list-item-content>
                            {{ link.name }}
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-btn
                    x-large
                    color="accent"
                    class="articles-btn primary--text align-self-center mt-6 mb-10"
                    @click="handleClick('#')"
                >
                    Read More
                </v-btn>
            </v-container>
            <v-img contain max-width="100%" :src="rocketImg" />
        </div>
    </div>
</template>

<script>
    import SectionHead from '@/components/SectionHead.vue'
    import rocketImg from '../../../assets/images/png/rocket.png'

    export default {
        components: {
            SectionHead
        },

        data: function () {
            return {
                rocketImg: rocketImg,
                articleLinks: [
                    {
                        name: 'From Actor to Software Developer',
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
                ]
            }
        },

        methods: {
            handleClick: function (link) {
                window.open(link, '_blank, norefferer')
            }
        }
    }
</script>

<style scoped>
    .articles-btn:hover,
    .articles-btn:focus {
        background-color: var(--v-secondary-base) !important;
    }

    .article-list {
        width: fit-content;
        margin: 0 auto;
    }

    .articles-link:hover {
        color: var(--v-secondary-base) !important;
    }
</style>
