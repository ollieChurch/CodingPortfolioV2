<template>
    <div class="py-6 px-5">
        <v-container>
            <v-card color="primary" elevation="8" class="mb-6 card d-flex flex-row justify-space-between">
                <div class="card-content d-flex flex-column pl-4 py-2">
                    <div>
                        <v-card-title class="text-h4">{{ cardTitle }}</v-card-title>
                        <v-card-subtitle class="text-h5">{{ cardSubtitle }}</v-card-subtitle>
                    </div>
                    <v-card-text class="body-text-size">{{ cardText }}</v-card-text>
                    <v-card-actions class="flex-column mt-2">  
                        <v-btn
                            v-for="(button, index) in buttons"
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
                    </v-card-actions>
                </div>
                <v-img :aspect-ratio="2 / 1" max-width="47%" :src="cardImg" />
            </v-card>
        </v-container>
    </div>
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
                window.open(link, '_blank, norefferer')
            }
        }
    }
</script>

<style scoped>
    .card-content {
        max-width: 50%;
    }

    .cardBtn:hover,
    .cardBtn:focus {
        background-color: var(--v-secondary-base) !important;
    }

    .body-text-size {
        font-size: 1.25rem;
    }
</style>
