<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
import ImgCard from "../../../assets/img/shapes/waves-white.svg";
</script>
<template>
    <section class="my-3 py-3">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
                    <RotatingCard>
                        <RotatingCardFront :image="ImgCard" icon="touch_app" title="O melhor <br /> para você!"
                            description="Buscando sempre atender com qualidade renomada e para sua satisfação." />

                        <RotatingCardBack :image="ImgCard" title="Descubra mais"
                            description="Economize com nossos tratamentos e produtos. Tenha mais facilidade para agendamentos e entenda tudo que você está pagando."
                            :action="[
                                {
                                    route: './/sections/page-sections/hero-sections.html',
                                    label: 'Comece agora!',
                                },
                            ]" />
                    </RotatingCard>
                </div>
                <div class="col-lg-6 ms-auto">
                    <div class="row justify-content-start">
                        <DefaultInfoCard icon="favorite" title="Atendimento"
                            description="Nos preocupamos com você, fazemos uma análise para detectarmos o melhor tratamento para que fique super linda." />
                        <DefaultInfoCard icon="location_on" title="Localização"
                            description="O Studio BioSecret está localizado no coração de Brasília. Situado no plano piloto, estaremos sempre por perto." />
                    </div>
                    <div class="row justify-content-start mt-5">
                        <DefaultInfoCard class="mt-3" icon="price_change" title="Salve seu dinheiro"
                            description="Temos parcelamentos facilitados, personalizado para sua necessidade. Preços atrativos para tratamentos e produtos." />
                        <DefaultInfoCard class="mt-3" icon="devices" title="Plataformas"
                            description="Tenha acesso a diferentes plataformas para realizar seu agendamento e outras funcionalidades." />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
