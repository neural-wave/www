<template>
    <div class="flex justify-center p-40">
        <companies-section-component :year="new Date().getFullYear()" />
    </div>
</template>

<script lang="ts">
import CompaniesSectionComponent from "../components/sections/CompaniesSectionComponent.vue";

export default {
    name: "SponsorsView",
    components: {
        CompaniesSectionComponent,
    },
};
</script>
