<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FeaturesLocalizacao from "../../layouts/sections/page-sections/features/components/FeatureLocalizacao.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationDestaques from "./Sections/PresentationDestaques.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import vueMkHeader from "@/assets/img/shoulder-isolated-over-white.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
    body.classList.add("presentation-page");
    body.classList.add("bg-gray-200");
});
onUnmounted(() => {
    body.classList.remove("presentation-page");
    body.classList.remove("bg-gray-200");
});
</script>

<template>
    <div class="container-fill position-sticky z-index-sticky top-0">
        <div class="row w-100 m-0">
            <div class="col-12 p-0">
                <NavbarDefault :sticky="false" />
            </div>
        </div>
    </div>
    <Header>
        <div class="page-header min-vh-100" :style="`background-image: url(${vueMkHeader})
`" loading="lazy">
            <span class="mask bg-gradient-primary opacity-2"></span>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 text-left mx-5">
                        <h1 class="text-white pt-3 mt-n5" :style="{ display: 'inline-block ' }">
                            Agende um horário
                        </h1>
                        <p class="lead text-white mt-3" :style="{ fontWeight: '500' }">
                            Venha conhecer o Studio Bio Secret e<br />
                            faça uma avaliação da sua pele.
                        </p>
                        <button type="button" class="btn bg-gradient-secondary w-auto me-2">
                            Agendar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Header>

    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
        <PresentationCounter />
        <PresentationInformation />
        <PresentationPages />
        <PresentationDestaques :action="{
            route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
            label: { text: 'Mais destaques', color: 'primary' },
        }" />
        <PresentationExample :data="data" />
        <FeaturesLocalizacao :action="{
            route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
            label: { text: 'Veja mais', color: 'primary' },
        }" />
        <!-- <BuiltByDevelopers /> -->

        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <FilledInfoCard class="p-4" :color="{ text: 'white', background: 'bg-gradient-success' }"
                        :icon="{ component: 'flag', color: 'white' }" title="Getting Started"
                        description="Check the possible ways of working with our product and the necessary files for building your own project."
                        :action="{
                            route:
                                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
                            label: { text: 'Let\'s start', color: 'primary' },
                        }" />
                </div>
                <div class="col-lg-4">
                    <FilledInfoCard class="p-4" height="h-100"
                        :icon="{ component: 'precision_manufacturing', color: 'success' }" title="Plugins" description="Get inspiration and have an overview about the plugins that we
                used to create the Material Kit." :action="{
                    route:
                        'https://www.creative-tim.com/learning-lab/vue/input/material-kit/',
                    label: { text: 'Read more' },
                }" />
                </div>
                <div class="col-lg-4">
                    <FilledInfoCard class="p-4" :icon="{ component: 'receipt_long', color: 'success' }"
                        title="Utility Classes" description="Material Kit is giving you a lot of pre-made elements. For those
                who want flexibility, we included many utility classes." :action="{
                    route:
                        'https://www.creative-tim.com/learning-lab/vue/utilities/material-kit/',
                    label: { text: 'Read more' },
                }" />
                </div>
            </div>
        </div>
        <PresentationTestimonials />
    </div>
    <DefaultFooter />
</template>
