import {createStore} from 'vuex'

export default createStore({
    state: {
        shoppingCart: []
    },
    getters: {
        shoppingCart: store => store.shoppingCart
    },
    actions: {
        addTocart(context, course) {
            context.commit("addTocart", course)
        },
        removeFromCart(context, {index, Cursofilas}) {
            context.commit("removeFromCart", {index, Cursofilas})
        }
    },
    mutations: {
        addTocart(state, course) {
            verifyIdEquality(state.shoppingCart, course.id) ? course.cantidad++ : state.shoppingCart.push(course)
        },
        removeFromCart(state, {index, Cursofilas}) {
            if(verifyIdEquality(state.shoppingCart, Cursofilas.id)) {
              if(Cursofilas.cantidad > 1) {
                Cursofilas.cantidad--
              } else {
                state.shoppingCart.splice(index, 1)
              }
            }
        }
    },
    modules: {}
})


function verifyIdEquality(list, id) {
    return list.find(curso => curso.id === id)
}
