<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
import MaterialBadge from "../../../../../components/MaterialBadge.vue";

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
  <section class="py-4">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge variant="gradient" color="primary" class="mb-3">Localização</MaterialBadge>
            <h2 class="">Nosso espaço</h2>
            <p class="lead">
              Saiba mais sobre nosso espaço
            </p>
          </div>
        </div>
        <div class="col-lg-6 my-auto">
          <h3 class="mt-5 mt-lg-0">Venha nos conhecer! </h3>

        </div>
        <div class="col-lg-6 my-auto ps-lg-0 ps-0 ">
          <AboutUsOption variant="gradient" color="primary" icon="mediation" content="It becomes harder for us to give others a hand.<br />
            We get our heart broken by people we love." />
          <AboutUsOption variant="gradient" color="primary" icon="settings_overscan" content="As we live, our hearts turn colder.<br />
            Cause pain is what we go through as we become older." />

          <AboutUsOption variant="gradient" color="primary" icon="token" content="When we lose family over
            time. <br />
            What else could rust the heart more over time? Blackgold." />
          <a :href="action.route" class="icon-move-right p-3" :class="`text-${action.label.color ?? 'success'}`">
            {{ action.label.text }}
            <i class="fas fa-arrow-right text-sm ms-1"></i>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
