<template>
  <UButton
    block
    type="submit"
    class="gradient-button rounded-3xl w-4/5 mt-2 text-center"
    size="lg"
    :class="
      !areRequiredFieldsValid()
        ? ''
        : 'hover:shadow-md hover:shadow-green-400/50 dark:hover:shadow-green-600/50 hover:scale-105 active:scale-100 transition-all duration-150 ease-in-out'
    "
    :disabled="!areRequiredFieldsValid()"
    :style="gradientStyle"
    @mousemove="moveGradient"
    @mouseleave="leaveGradient"
  >
    {{ buttonText }}
  </UButton>
</template>

<script lang="ts">
export default {
  name: "GradientButton",
  props: {
    buttonText: {
      type: String,
      default: "Click Me",
    },
    validate: {
      type: Function,
      required: true,
    },
    state: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      gradientStyle: {
        background: "linear-gradient(135deg, #00C16A, #0cf294)",
      },
    };
  },
  methods: {
    moveGradient(event) {
      if (this.areRequiredFieldsValid()) {
        const { offsetX, offsetY, target } = event;
        const x = (offsetX / target.offsetWidth) * 100;
        const y = (offsetY / target.offsetHeight) * 100;
        this.gradientStyle.background = `radial-gradient(circle at ${x}% ${y}%, #0cf294, #00C16A)`;
      }
    },
    leaveGradient() {
      if (this.areRequiredFieldsValid()) {
        this.gradientStyle.background =
          "linear-gradient(135deg, #00C16A, #0cf294)";
      }
    },
    areRequiredFieldsValid() {
      const errors = this.validate(this.state);
      return !errors.some(
        (error) => error.path === "email" || error.path === "password",
      );
    },
  },
};
</script>

<style scoped>
.gradient-button {
  color: #fff;
  background: linear-gradient(135deg, #00c16a, #0cf294);
}
</style>
