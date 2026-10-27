<template>
    <router-link
        :to="`/series/${serie.year}`"
        class="flex flex-col items-start bg-[#160D2F]/20 border border-nw-border rounded-[8px] p-7 gap-5"
    >
        <div class="flex items-center gap-5">
            <img :src="getImage()" alt="cover image" class="w-md rounded h-74.5 object-cover" />
        </div>

        <a class="flex w-full justify-between items-center">
            <div class="flex flex-col gap-2">
                <span class="text-justify font-bold text-lg">{{ serie.title }}</span>
                <span class="text-justify text-[rgba(255,255,255,0.7)]">{{ serie.subtitle }}</span>
            </div>

            <span class="pr-3">→</span>
        </a>
    </router-link>
</template>

<script lang="ts">
import { Serie } from "@/store/series.ts";

export default {
    name: "SeriesCardComponent",
    props: {
        serie: {
            type: Object as Serie,
            required: true,
        },
    },
    methods: {
        getImage() {
            return new URL(
                `../../assets/gallery/${this.serie.year}/${this.serie.cover}`,
                import.meta.url,
            ).href;
        },
    },
};
</script>
