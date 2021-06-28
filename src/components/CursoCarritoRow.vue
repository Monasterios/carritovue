<template>
  <tr>
        <td>{{ courseRow.amount }}</td>
        <td>{{ courseRow.title }}</td>
        <td>{{ courseRow.name }} {{index}}</td>
        <td><img :src="courseRow.image" alt="producto"></td>
        <td>{{ courseRow.price * basePrice }}</td>
        <td>{{ courseRow.id }}</td>
        <td><a href="#" @click.prevent="removeFromCart({index, courseRow})" > X </a></td>
  </tr>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'CursoCarritoRow',
  props: {
    index: Number,
    courseRow: Object,
    basePrice: Number,
  },
  methods: {
    ...mapActions(['removeFromCart'])
  }
}
</script>
