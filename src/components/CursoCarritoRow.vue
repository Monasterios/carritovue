<template>
  <tr>
        <td>{{ Cursofilas.cantidad }}</td>
        <td>{{ Cursofilas.titulo }}</td>
        <td>{{ Cursofilas.nombre }} {{index}}</td>
        <td><img :src="Cursofilas.image" alt="producto"></td>
        <td>{{ Cursofilas.precio * Preciobase }}</td>
        <td>{{ Cursofilas.id }}</td>
        <td><a href="#" @click.prevent="removeFromCart({index, Cursofilas})" > X </a></td>
  </tr>
  <tr>
    <td colspan="7">{{ Cursofilas }}</td>
  </tr>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'CursoCarritoRow',
  props: {
    index: Number,
    Cursofilas: Object,
    Preciobase: Number,
  },
  methods: {
    ...mapActions(['removeFromCart'])
  }
}
</script>
