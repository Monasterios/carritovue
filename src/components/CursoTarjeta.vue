<template>
  <div class="row">
    <div class="four columns" v-for="(curso, index) in listCourse" :key="index">
      <div class="card" id="{{curso.id}}">
        <img :src="curso.image" class="imagen-curso u-full-width">
        <div class="info-card">
          <h4>{{ curso.titulo }}</h4>
          <p>{{ curso.nombre }}</p>
          <img src="img/estrellas.png">
          <p class="precio">{{ curso.precio }} <span class="u-pull-right ">$15</span></p>
          <a href="" class="u-full-width button-primary button input agregar-carrito"
             @click.prevent="addTocart(curso)">Agregar Al Carrito</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'CursoTarjeta',
  props: {
    listCourse: Array,
    course: { type: Object, required: true },
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