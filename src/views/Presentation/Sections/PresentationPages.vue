<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import ImgTratamentoFacial from "../../../assets/img/illustrations/tratamento-facial.png";
import ImgTratamentoCorporal from "../../../assets/img/illustrations/tratamento-corporal.png";
import ImgTratamentoCapilar from "../../../assets/img/illustrations/tratamento-capilar.png";
</script>
<template>
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="row text-center my-sm-5 mt-5">
                    <div class="col-lg-6 mx-auto">
                        <MaterialBadge variant="gradient" color="primary" class="mb-3">Serviços</MaterialBadge>
                        <h2 class="">Nossos Tratamentos</h2>
                        <p class="lead">
                            Clique nos cards abaixo para ver os tratamentos que você tem interesse.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-8">
                    <div class="row mt-2">
                        <div class="col-md-6 mt-md-0 mt-5">
                            <ExampleCard class="shadow-lg" title="Faciais" :image="ImgTratamentoFacial" route="servicos" />
                        </div>
                        <div class="col-md-6 mt-md-0 mt-5">
                            <ExampleCard class="shadow-lg" title="Corporais" :image="ImgTratamentoCorporal"
                                route="servicos" />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-6 mt-md-0 mt-5">
                            <ExampleCard classes="mt-5" title="Capilares" :image="ImgTratamentoCapilar" route="servicos" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mx-auto mt-md-0 mt-3">
                    <div class="position-sticky" style="top: 100px !important">
                        <h3>
                            Os tratamentos
                        </h3>
                        <h6 class="text-secondary font-weight-normal">
                            Antes de realizar qualquer tratamento, é realizado uma avaliação especializada
                            para definir qual o melhor tratamento para você.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
