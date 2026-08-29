<template>
  <div class="flex flex-col justify-center items-center gap-9 mt-[200px] mb-[200px] sm:mt-[400px] sm:mb-[200px]">
    <span class="text-5xl font-[500] text-center">Interested in this Amazing Event?</span>

    <span class="text-center opacity-60 max-w-[500px]">
      <!-- Click the button below and fill the form to express your interest in participating. In addition, you will be
      among the first to receive updates about the Neural Wave hackathon. -->
      Are you a company and interested in this event? Click below to check our prospectus for sponsoring Neural Wave.
    </span>

     <!-- <span class="text-center opacity-60">Registrations are not opened yet, check back later!</span>  -->
     <!-- <cta-component href="https://usi.qualtrics.com/jfe/form/SV_bgCFvEjVFUvXq4u">Fill in the Form</cta-component>  -->
    <cta-component href="https://raw.githubusercontent.com/neural-wave/www/main/src/assets/branding/prospectus.pdf" external>To the Prospectus</cta-component> 
  </div>
</template>

<script lang="ts">
import CtaComponent from "@/components/CtaComponent.vue";

export default {
  name: 'FinalSectionComponent',
  components: {CtaComponent}
}
</script>