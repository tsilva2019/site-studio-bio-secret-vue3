<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
    <section class="pt-3 pb-4" id="count-stats">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
                    <div class="row">
                        <a class="col-md-4 position-relative" role="button" href="#tratamentos-mais-procurados">
                            <DefaultCounterCard color="primary" title="Tratamentos para você"
                                description="Veja nossos tratamentos mais procurados, todos personalizados para você."
                                :count="16" suffix="+" :duration="3000" divider="vertical" />
                        </a>
                        <a class="col-md-4 position-relative" role="button" href="#promocoes">
                            <DefaultCounterCard color="primary" title="Promoções ativas"
                                description="Veja as promoções da semana e aproveite para da um brilho na sua vida."
                                :count="5" suffix="+" :duration="3000" divider="vertical" />
                        </a>
                        <a class="col-md-4" role="button" href="#dicas">
                            <DefaultCounterCard color="primary" title="Dicas"
                                description="Confira as dicas que eu selecionei para sua pele fica bela e saudável."
                                :count="10" suffix="+" :duration="3000" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
