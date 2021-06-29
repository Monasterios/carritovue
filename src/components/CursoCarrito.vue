<template>
  <div id="carrito">
    <table id="lista-carrito" class="u-full-width">
      <thead>
      <tr>
        <th>Cantidad</th>
        <th>Titulo</th>
        <th>Nombre</th>
        <th>Image</th>
        <th>Precio</th>
        <th>ID</th>
        <th>Borrar</th>
      </tr>

      <CursoCarritoRow v-for="(items, index) in list" :courseRow="items" :basePrice="items.amount" :index="index" :key="index" v-bind="$attrs"/>

      </thead>
      <tbody></tbody>
    </table>
    <a href="#" id="vaciar-carrito" class="button u-full-width" @click.prevent="emptyCart">Vaciar Carrito</a>
  </div>

</template>
<script>

import { mapActions } from 'vuex';
import CursoCarritoRow from "./CursoCarritoRow";

export default {
  name: 'CursoCarrito',
  components: {
    CursoCarritoRow
  },
  props: {
    list: Array,
  },
  methods: {
    ...mapActions(['emptyCart'])
  }
}
</script>
