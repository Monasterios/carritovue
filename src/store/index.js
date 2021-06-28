import {createStore} from 'vuex'

export default createStore({
    state: {
        listCourse: [
            {id: 1, title: 'HTML5, CSS3, JavaScript', name: 'Juan Pedro', image: 'img/curso1.jpg', price: 240, amount: 1},
            {id: 2, title: 'JavaScript', name: 'Maria casas', image: 'img/curso2.jpg', price: 40, amount: 1},
            {id: 3, title: 'Typscript', name: 'Daniel Martinez', image: 'img/curso3.jpg', price: 120, amount: 1},
        ],
        shoppingCart: [],
        badgeAmount: null
    },
    getters: {
        shoppingCart: store => store.shoppingCart,
        listCourse: store => store.listCourse,
        badgeAmount: store => store.badgeAmount
    },
    actions: {
        addTocart(context, course) {
            context.commit("addTocart", course)
        },
        removeFromCart(context, { index, courseRow }) {
            context.commit("removeFromCart", { index, courseRow })
        }
    },
    mutations: {
        addTocart(state, course) {
            state.badgeAmount++
            verifyIdEquality(state.shoppingCart, course.id) ? course.amount++ : state.shoppingCart.push(course)
        },
        removeFromCart(state, { index, courseRow }) {
            state.badgeAmount--
            if(verifyIdEquality(state.shoppingCart, courseRow.id)) {
              if(courseRow.amount > 1) {
                courseRow.amount--
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
