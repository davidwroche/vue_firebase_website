import firebase from "firebase";
import store from "../src/store/store"


let firebaseModule = {

    firebaseLogin: function (self) {
        firebase
            .auth()
            .signInWithEmailAndPassword(self.email, self.password)
            .then(
                data => {
                    //deconstruct user object
                    const { user } = data
                    if (user) {
                        store.addUserAction(user);
                        self.$router.replace("home");
                    }
                },
                err => {
                    alert("Oops. " + err.message);
                }
            );
    },
    firebaseRegister: function (self) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(self.email, self.password)
            .then(
                user => {
                    store.addUserAction(user);
                    this.$router.replace("home");
                },
                err => {
                    alert("Oops. " + err.message);
                }
            );
    },
    firebaseLogout: function (self) {
        firebase
            .auth()
            .signOut()
            .then(() => {
                self.$router.replace("login");
            });
    }

}

export default firebaseModule