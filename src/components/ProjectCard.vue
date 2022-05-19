<template>
    <v-card color="primary" elevation="8" class="mb-6">
        <v-card-title class="text-h4">{{ cardTitle }}</v-card-title>
        <v-card-subtitle class="text-h5">{{ cardSubtitle }}</v-card-subtitle>
        <v-img :aspect-ratio="2 / 1" max-width="100%" :src="cardImg" />
        <v-card-text class="text-body-1">{{ cardText }}</v-card-text>
        <v-card-actions class="flex-column mt-2">  
            <template v-for="(button, index) in buttons">
                <v-btn
                    v-if="button.download"
                    :key="cardTitle + '-downloadButton-' + index"
                    large
                    block
                    color="accent"
                    class="cardBtn mb-2 mx-0 primary--text font-weight-bold"
                    elevation="4"
                    download
                    :href="button.linkTo"
                    :disabled="button.linkTo ? false : true"
                >
                    {{ button.linkTo ? button.name : "Oops! Check back later" }}
                </v-btn>

                <v-btn
                    v-else
                    :key="cardTitle + '-button-' + index"
                    large
                    block
                    color="accent"
                    class="cardBtn mb-2 mx-0 primary--text font-weight-bold"
                    elevation="4"
                    @click="handleClick(button.linkTo)"
                    :disabled="button.linkTo ? false : true"
                >
                    {{ button.linkTo ? button.name : "Oops! Check back later" }}
                </v-btn>
            </template>
            
        </v-card-actions>
    </v-card>
</template>

<script>
    import sfGif from '../assets/images/gif/salaryFinance.gif'

    export default {
        props: {
            cardTitle: {
                type: String,
                default: "Card Title"
            },
            cardSubtitle: String,
            cardImg: {
                default: sfGif
            },
            cardText: String,
            buttons: Array
        },

        methods: {
            handleClick: function(link) {
                window.open(link)
            }
        }
    }
</script>

<style scoped>
    .cardBtn:hover,
    .cardBtn:focus {
        background-color: var(--v-secondary-base) !important;
    }
</style>
