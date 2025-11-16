<template>
    <nav class="flex flex-col justify-center p-[50px] gap-10 overflow-y-hidden h-[300px]">
        <div class="flex justify-between items-center max-[848px]:flex-col max-[848px]:gap-8">
            <img
                src="../../assets/branding/logo-white.svg"
                alt="white variant of the Neural Wave logo"
                class="h-[30px]"
            />
            <navigation-component class="max-[1045px]:hidden" />
            <social-component />
        </div>

        <separator class="bg-nw-border h-[1px]" />

        <span class="text-center opacity-60 font-[200] text-[14px]"
            >&copy;2024 Neural Wave</span
        >

         <!-- <background-bottom-component />  -->
    </nav>
</template>

<script lang="ts">
import SocialComponent from "@/components/navigation/SocialComponent.vue";
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";
import BackgroundBottomComponent from "@/components/background/BackgroundBottomComponent.vue";

export default {
    name: "FooterBarComponent",
    components: {
        NavigationComponent,
        SocialComponent,
        BackgroundBottomComponent,
    },
};
</script>

<style></style>
