<template>
    <div className='sectionBorder-container'>
        <div :class="`sectionBorder ${getClasses}`"></div>
    </div>
</template>

<script>
    export default {
        props: {
            position: {
                type: String,
                default: 'top'
            },
            color: {
                type: String,
                default: 'secondary'
            }
        },

        computed: {
            getClasses: function() {
                return `sectionBorder-${this.position} sectionBorder-${this.position}-${this.color}`
            } 
        }
    }
</script>


<style scoped>
    .sectionBorder-container {
        overflow: hidden;
        max-width: 100%;
    }

    .sectionBorder {
        width: 0;
        height: 0;
    }

    .sectionBorder-top {
        border-bottom: 50px solid;
        border-left: 100vw solid transparent;
    }

    .sectionBorder-btm {
        border-top: 50px solid;
        border-right: 100vw solid transparent;
    }

    .sectionBorder-top-secondary { border-bottom-color: var(--v-secondary-base); }
    .sectionBorder-btm-secondary { border-top-color: var(--v-secondary-base); }

    .sectionBorder-top-primary { border-bottom-color: var(--v-primary-base); }
    .sectionBorder-btm-primary { border-top-color: var(--v-primary-base); }
</style>