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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1919.633787318506!2d-47.88413211010477!3d-15.789838998750255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39350a1127c9%3A0xcd7f35e9480fc3d7!2sStudio%20Bio%20Secret%20Est%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1692821191407!5m2!1spt-BR!2sbr"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
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
</section></template>
