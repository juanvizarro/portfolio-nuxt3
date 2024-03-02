interface State {
  counter: number;
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    counter: 1
  }),
  getters: {
    double: state => state.counter * 2
  },
  actions: {
    increment () {
      this.counter++
    }
  }
})
