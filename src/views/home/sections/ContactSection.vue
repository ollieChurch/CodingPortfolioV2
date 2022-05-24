<template>
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
                    <v-btn class="contactBtn" block large color="accent"
                        >Send</v-btn
                    >
                </v-form>
            </v-container>
        </div>
    </section>
</template>

<script>
    import SectionHead from '@/components/SectionHead.vue'

    export default {
        components: {
            SectionHead
        },

        data: function() {
            return {
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
            handleClick: function (link) {
                window.open(link, '_blank, norefferer')
            }
        }
    }
</script>

<style scoped>
    .contactBtn:hover,
    .contactBtn:focus {
        background-color: var(--v-primary-base) !important;
        color: var(--v-accent-base) !important;
    }
</style>