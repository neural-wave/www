<template>
  <div class="flex flex-col">
    <nav class="flex flex-col items-center gap-8 p-[50px] min-[1045px]:flex-row min-[1045px]:justify-between bg-transparent">
      <div class="flex flex-row items-center justify-between w-full min-[1045px]:hidden">
        <img src="../../assets/branding/logo-horizontal.svg" class="w-[210px]" alt="Neural Wave logo"/>
        <navigation-component />
      </div>

      <img src="../../assets/branding/logo-horizontal.svg" class="w-[210px] max-[1045px]:hidden" alt="Neural Wave logo"/>
      <navigation-component class="max-[1045px]:hidden" />
      
      <div class="flex flex-wrap justify-center items-center w-full gap-8 max-[1045px]:flex-row sm:w-fit">
        <social-component />
        <!-- <cta-component class="block" href="https://usi.qualtrics.com/jfe/form/SV_bgCFvEjVFUvXq4u" external>
          Register Now!
        </cta-component> -->
      </div>
    </nav>

    <separator class="mx-[50px] bg-nw-border h-[1px]" />
  </div>
</template>

<script lang="ts">
import CtaComponent from "@/components/CtaComponent.vue";
import SocialComponent from "@/components/navigation/SocialComponent.vue";
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";

export default {
  name: 'NavigationBarComponent',
  components: {
    NavigationComponent,
    SocialComponent,
    CtaComponent
  }
}
</script>
