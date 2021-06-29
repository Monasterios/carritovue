<template>
      <div class="card" v-for="(card, index) in listCourse" :key="index" id="{{card.id}}" style="margin: 10px;">
        <img :src="card.image" class="imagen-curso u-full-width">
        <div class="info-card">
          <h4>{{ card.title }}</h4>
          <p>{{ card.name }}</p>
          <img src="img/estrellas.png">
          <p class="precio">{{ card.price }} <span class="u-pull-right ">$15</span></p>
          <a href="" class="u-full-width button-primary button input agregar-carrito"
             @click.prevent="addTocart(card)">Agregar Al Carrito</a>
        </div>
      </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'CursoTarjeta',
  props: {
    listCourse: Array,
    card: Object,
  },
  methods: {
    ...mapActions(['addTocart'])
  }
}
</script>

<style scoped>

#lista-cursos .row {
  margin-bottom: 20px;
}

.agregar-carrito {
  margin: 10px 0;
}

.card {
  text-align: center;
  border: 1px solid #e1e1e1;
  background: white;
}

@media (min-width: 550px) {
  .card {
    text-align: left;
  }
}

.info-card {
  padding: 10px 20px;
}

.info-card p,
.card h4 {
  margin-bottom: 5px;
}

.info-card .precio {
  text-decoration: line-through;
  font-size: 18px;
  margin-top: 10px;
}

.info-card .precio span {
  font-weight: 700;
  font-size: 22px;
}

</style>