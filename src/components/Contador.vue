<template>
    <div>
        <h3 class="font-weight-light">Contador: {{ contadorAlias }}</h3>
        <button class="btn btn-lg btn-danger" @click="decrementar">-</button>
        <button class="btn btn-lg btn-success" @click="incrementar">+</button>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        // computed: mapState(['contador']),
        computed: mapState({
           // contador: state => state.contador
           // contador: 'contador'
           contadorAlias: 'contador'
        }),
        methods: {
            decrementar() {
                this.$store.state.contador--
            },
            incrementar() {
                this.$store.state.contador++
            }
        }
    }
</script>