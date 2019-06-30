import Vue from "vue"

let AppStore = new Vue({
    data: {
        store: {
            user:""
        }
    },
    methods:{
        dataUpdated(){
            localStorage.setItem("AppStore", JSON.stringify(this.store));
        },
        addUserAction(value) {
            this.store.user = value
            this.dataUpdated()

        }
    }
  })

export default AppStore;