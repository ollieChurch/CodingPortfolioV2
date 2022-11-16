<template>
    <section id="contact">
        <section-head background="none">Contact Me</section-head>
        <v-container class="d-flex btn-container justify-space-around">
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
            <v-container v-if="formSubmitted">
                <p class="text-h5 white--text text-center">Thanks for sending a message. I will get back to you soon!</p>
            </v-container>

            <v-container v-else>
                <p v-if="formError" class="text-body white--text">** {{ formError }} **</p>
                <v-form name="contact-form" class="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="submitForm()">
                    <input type="hidden" name="form-name" value="contact-form" />
                    <v-text-field
                        name="name"
                        required
                        filled
                        background-color="white"
                        color="accent"
                        label="Name"
                        v-model="contactForm.name"
                    ></v-text-field>
                    <v-text-field
                        name="email"
                        required
                        filled
                        background-color="white"
                        color="accent"
                        label="Email"
                        type="email"
                        v-model="contactForm.email"
                    ></v-text-field>
                    <v-textarea
                        name="message"
                        required
                        filled
                        background-color="white"
                        color="accent"
                        auto-grow
                        label="Message"
                        v-model="contactForm.message"
                    ></v-textarea>
                    <v-btn type="submit" class="contactBtn" block large color="accent">
                        Send
                    </v-btn>
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
                formError: '',
                formSubmitted: false,

                contactForm: {
                    name: '',
                    email: '',
                    message: ''
                },

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
            },

            encode: function(data) {
                return Object.keys(data)
                    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                    .join("&");
            },

            submitForm: function () {
                if (!this.contactForm.name) {
                    this.formError = 'please enter a valid name'
                    return
                } else if (
                    !this.contactForm.email || 
                    !this.contactForm.email.includes('@') || 
                    this.contactForm.email.includes(' ')
                ) {
                    this.formError = 'please enter a valid email address'
                    return
                } else if (!this.contactForm.message) {
                    this.formError = 'please enter a valid message'
                    return
                }

                this.formError = ''
                

                fetch('/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: this.encode({'form-name': 'contact-form', ...this.contactForm})
                })
                    .then(() => {
                        console.log('Form successfully submitted')
                        this.formSubmitted = true
                    })
                    .catch((error) => {
                        alert(error)
                        this.formError = 'Oops! Something went wrong. Please try again.'
                    })
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

    .contact-form,
    .btn-container {
        max-width: 700px;
        margin: 0 auto;
    }
</style>