<template>
    <div :class="bgClass" class="py-8">
        <h3 class="text-h2 text-center font-weight-medium" :class="fontColor">
            <slot></slot>
        </h3>
    </div>
</template>

<script>
export default {
    props: {
        background: {
            type: String,
            default: "secondary"
        }
    },

    data: function() {
        return {
            bgClass: `bg-color-${this.background}`
        }
    },

    computed: {
        fontColor: function() {
            let result
            
            if (this.background == "secondary") {
                result = "primary--text"
            } else if (this.background == "none") {
                result = "secondary--text"
            } else {
                result = "accent--text"
            }

            return result
        }
    }
}
</script>
