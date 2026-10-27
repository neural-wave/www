<template>
    <div class="h-[calc(100vh-445px)]">
        <div class="flex flex-col gap-10 w-full p-[50px] sm:p-[100px]">
            <span class="text-2xl font-bold">Previous Editions</span>

            <div class="flex gap-6">
                <series-card-component
                    v-for="serie in series"
                    :key="serie.year"
                    :serie="serie"
                    class="w-max"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mapActions } from "pinia";
import { useSeriesStore, Serie } from "@/store/series.ts";
import SeriesCardComponent from "@/components/cards/SeriesCardComponent.vue";

export default {
    name: "SeriesListView",
    components: {
        SeriesCardComponent,
    },
    data() {
        return {
            series: [] as Serie[],
        };
    },
    mounted() {
        this.series = this.getSeries();
    },
    methods: {
        ...mapActions(useSeriesStore, ["getSeries"]),
    },
};
</script>
