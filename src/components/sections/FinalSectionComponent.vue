<template>
  <div class="flex flex-col justify-center items-center gap-9 h-[90vh] sm:h-[100vh]">
    <span class="text-5xl font-[500] text-center">Interested in this Amazing Event?</span>

    <span class="text-center opacity-60 max-w-[500px]">
      Click the button below and fill the form to express your interest in participating. In addition, you will be
      among the first to receive updates about the Neural Wave hackathon
    </span>

    <span class="text-center opacity-60">Registrations are now closed. See you next year!</span>
<!--    <cta-component href="https://usi.qualtrics.com/jfe/form/SV_bgCFvEjVFUvXq4u" variant="cta">Fill in the Form</cta-component>-->
  </div>
</template>

<script lang="ts">
import CtaComponent from "@/components/CtaComponent.vue";

export default {
  name: 'FinalSectionComponent',
  components: {CtaComponent}
}
</script>