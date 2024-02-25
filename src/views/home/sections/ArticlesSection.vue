<template>
    <div>
        <section-border />
        <section-head>Articles</section-head>
        <div class="bg-color-primary articles-wrapper">
            <section-border position="btm" />
            <v-container class="d-flex flex-column align-self-left mt-3">
                <v-list color="primary" class="article-list">
                    <v-list-item
                        v-for="(article, index) in $store.state.articles.featured"
                        :key="'article' + article.name + index"
                        class="articles-link text-h5 accent--text"
                        @click="handleClick(article.linkTo)"
                        link
                    >
                        <v-list-item-icon>
                            <v-icon x-large>mdi-lightning-bolt-circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            {{ article.name }}
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-btn
                    large
                    color="accent"
                    class="articles-btn primary--text mt-6 mb-10"
                    @click="handleClick($store.state.articles.homeLink)"
                >
                    Read More On Notion
                </v-btn>
            </v-container>
            <v-img contain max-width="100%" :src="rocketImg" class="rocket" />
        </div>
    </div>
</template>

<script>
    import SectionHead from '@/components/SectionHead.vue'
    import SectionBorder from '@/components/SectionBorder.vue'
    import rocketImg from '../../../assets/images/png/rocket.png'

    export default {
        components: {
            SectionHead,
            SectionBorder
        },

        data: function () {
            return {
                rocketImg: rocketImg
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

    .articles-btn {
        align-self: center;
    }

    .article-list {
        width: fit-content;
        max-width: 600px;
        margin: 0 auto;
    }

    .articles-link:hover {
        color: var(--v-secondary-base) !important;
    }

    .articles-wrapper {
        position: relative;
    }

    @media (min-width: 960px) {
        .rocket {
            position: absolute;
            right: -20%;
            bottom: 0;
            width: 90%;
            max-height: 92%;
        }

        .article-list {
            margin: 0;
            z-index: 5;
        }

        .articles-btn {
            width: fit-content;
            align-self: flex-start;
            margin-left: 16px;
            z-index: 5;
        }
    }
</style>
