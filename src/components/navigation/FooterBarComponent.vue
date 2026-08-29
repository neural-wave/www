<template>
    <nav class="flex flex-col justify-center p-[50px] gap-10 overflow-y-hidden">
        <div class="flex flex-col gap-8 max-[848px]:flex-col max-[848px]:gap-8">
            <img
                src="../../assets/branding/logo-white.svg"
                alt="White Neural Wave logo"
                class="w-[210px] translate-x-[-12px]"
            />

            <div class="flex gap-20 max-[848px]:flex-col max-[848px]:gap-8">
                <div class="flex flex-col gap-4">
                    <p class="font-bold text-xl">Pages</p>

                    <div class="flex flex-col gap-1 text-[rgba(255,255,255,0.7)]">
                        <router-link to="/">Neural Wave</router-link>
                        <router-link to="/location">Location</router-link>
                        <router-link to="/schedule">Schedule</router-link>
                        <router-link to="/faq">FAQs</router-link>
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <p class="font-bold text-xl">Resources</p>

                    <div class="flex flex-col gap-1 text-[rgba(255,255,255,0.7)]">
                        <a
                            href="https://raw.githubusercontent.com/neural-wave/www/main/src/assets/branding/prospectus.pdf"
                            target="_blank"
                        >
                            Event Prospectus
                        </a>
                        <a href="https://drive.proton.me/urls/2V2SGKB2Y4#zCGlN52IrROP" target="_blank">
                            Brand Assets
                        </a>
                        <a href="https://github.com/neural-wave" target="_blank">Open Source</a>
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <p class="font-bold text-xl">Series</p>

                    <div class="flex flex-col gap-1 text-[rgba(255,255,255,0.7)]">
                        <router-link to="/series/2024">1st Edition [2024]</router-link>
                    </div>
                </div>
            </div>
        </div>

        <separator class="bg-nw-border h-[1px] flex-shrink-0" />

        <div class="flex justify-between items-center max-[848px]:flex-col max-[848px]:gap-8">
            <span class="text-center opacity-60 font-[200] text-[14px]">
                &copy;2024-{{ year }} Neural Wave
            </span>

            <social-component />
        </div>
    </nav>
</template>

<script lang="ts">
import SocialComponent from "@/components/navigation/SocialComponent.vue";
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";

export default {
    name: "FooterBarComponent",
    components: {
        NavigationComponent,
        SocialComponent,
    },
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
};
</script>

<style></style>
