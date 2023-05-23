<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import ImgBeneficiosBotox from "../../../assets/img/illustrations/4-beneficios-botox.png";
import ImgOqueTrata from "../../../assets/img/illustrations/oque-trata.png";
import ImgCuidadosPosteriores from "../../../assets/img/illustrations/cuidados-posteriores.png";
import ImgBotoxAgendamento from "../../../assets/img/illustrations/botox-agendamento.png";

defineProps({
  action: {
    type: Object,
    required: true,
    label: {
      type: Object,
      required: true,
      text: String,
      color: String,
    },
    route: {
      type: String,
      required: true,
    },
  },
});
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge variant="gradient" color="primary" class="mb-3">Destaques</MaterialBadge>
            <h2 class="">O Botox</h2>
            <p class="lead">
              Ja fez aplicação de Toxina Boutolínica?
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>
              O que é?
            </h3>
            <h6 class="text-secondary font-weight-normal">
              Toxina botulínica, o famoso Botox®, se origina de uma bactéria
              chamada Clostridium botulinum. Essa toxina é utilizada para
              prevenir ou amenizar rugas e linhas de expressão na região dos
              olhos -como pés de galinha, região da testa ou no espaço entre
              as sobrancelhas.
            </h6>
            <a :href="action.route" class="icon-move-right" :class="`text-${action.label.color ?? 'success'}`">
              {{ action.label.text }}
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row mt-2">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard class="shadow-lg" title="Benefícios" :image="ImgBeneficiosBotox" route="about" />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard class="shadow-lg" title="O que trata" :image="ImgOqueTrata" route="contactus" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard classes="mt-5" title="Cuidados" :image="ImgCuidadosPosteriores" route="signin-basic" />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard classes="mt-5" title="Agendamento" :image="ImgBotoxAgendamento" route="signin-basic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
