<script setup>
//example components
import NavbarDefault from '../../../examples/navbars/NavbarDefault.vue';
import Header from '../../../examples/Header.vue';
// import FilledInfoCard from '../../../examples/cards/infoCards/FilledInfoCard.vue';
import MaterialBadge from '../../../components/MaterialBadge.vue'
import ExampleCard from '../../Presentation/Components/ExampleCard.vue';
import servicosData from "../Servicos/Sections/Data/servicosData";
// import DefaultInfoCard from '../../../examples/cards/infoCards/DefaultInfoCard.vue'
//imagens
// import wavesWhite from "@/assets/img/waves-white.svg";
// import vueMkHeader from "@/assets/img/shoulder-isolated-over-white.jpg";
// import ImgTratamentoFacial from "../../../assets/img/illustrations/tratamento-facial.png";
</script>
<template>
    <div class="container-fill position-sticky z-index-sticky top-0">
        <NavbarDefault :sticky="false" />
    </div>
    <Header title="Tratamentos Faciais" minHeight="min-vh-50" />
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 shadow-lg">
        <!-- <div class="container mt-sm-4">
            <div class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl min-vh-70" loading="lazy">
                <span class="mask bg-gradient-dark ">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GXamfJuvkOs"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </span>
            </div>
        </div> -->

        <!-- <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <FilledInfoCard class="p-4" :color="{ text: 'white', background: 'bg-gradient-primary' }"
                        :icon="{ component: 'flag', color: 'white' }" title="Getting Started"
                        description="Check the possible ways of working with our product and the necessary files for building your own project."
                        :action="{
                            route:
                                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
                            label: { text: 'Let\'s start', color: 'white' },
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
        </div> -->
        <!-- <div class="container">
            <div class="row">
                <div class="row text-center my-sm-5 mt-5">
                    <div class="col-lg-6 mx-auto">
                        <MaterialBadge variant="gradient" color="primary" class="mb-3">Sem injetaveis</MaterialBadge> -->
        <!-- <DefaultInfoCard
                            :icon="{ component: 'fa-solid fa-syringe fa-beat', size: 'fa-xl', color: 'text-primary' }"
                            col="col-md-12" description="Tratamentos sem injetaveis significa
                            que em todo o processo até a conclusão, não terá aplicação de produtos com seringa." /> -->
        <!-- <p class="lead">
                            Tratamentos sem injetaveis significa
                            que em todo o processo até a conclusão, não terá aplicação de produtos com seringa.
                        </p>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="container mt-sm-5 mt-3">
            <div v-for="({ heading, description, items }, index) in servicosData"
                :class="`row ${index != 0 && index != -1 ? 'pt-lg-6' : ''}`" :key="heading">
                <div class="row">
                    <div class="row text-center my-sm-5 mt-5">
                        <div class="col-lg-6 mx-auto">
                            <MaterialBadge variant="gradient" color="primary" class="mb-3">{{ heading }}</MaterialBadge>
                            <!-- <DefaultInfoCard
                            :icon="{ component: 'fa-solid fa-syringe fa-beat', size: 'fa-xl', color: 'text-primary' }"
                            col="col-md-12" description="Tratamentos sem injetaveis significa
                            que em todo o processo até a conclusão, não terá aplicação de produtos com seringa." /> -->
                            <p class="lead">
                                {{ description }}
                            </p>
                        </div>
                    </div>
                </div>
                <div :class="`${col2 ?? 'col-lg-12'}`">
                    <div :class="`row ${index != 0 ? 'mt-3' : ''}`">
                        <div class="col-md-4 mt-md-0" v-for="{ image, title, subtitle, route, pro } in items" :key="title">
                            <ExampleCard class="min-height-160 shadow-lg mt-4" :image="image" :title="title"
                                :subtitle="subtitle" :route="route" :pro="pro" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="title-page-servicos blur shadow-blur mx-3 mx-md-4">
        <div class="mt-sm-5 border-radius-xl" :style="{
            background: 'bg-gradient-primary',
        }">
            <div class="page-header py-1 py-md-1 my-sm-3 mb-3 border-radius-xl" :style="{
                backgroundImage: `url(${wavesWhite})`,
            }" loading="lazy">
                <span class="mask bg-gradient-primary"></span>
                <div class="container">
                    <div class="row">
                        <div class="d-flex justify-content-left p-5">
                            <div class="col-lg-8 ms-lg-5 text-left">
                                <h3 class="text-white">
                                    Serviços Faciais
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    <!-- <div class="img-title-page z-index-2 w-20 h-20">
            <img :src="ImgTratamentoFacial" class="img-fluid border-radius-lg" />
        </div> -->
</template>
