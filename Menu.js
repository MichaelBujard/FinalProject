const Menu = {
    name,
    imageSrc,
    constructor(name, imgSrc) {
        this.name = name;
        this.imageSrc = imgSrc;
    },

    //getters
    get getName() {
        return this.name;
    },
    get getImageSrc() {
        return this.imageSrc;
    },
    // setters
    set setName(name) {
        this.name = name;
    },
    set setImageSrc(src) {
        this.imageSrc = src;
    }


};

        //get ref to database service
    var database = firebase.database();

    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('users/' + userId).set({
          username: name,
          email: email,
          profile_picture : imageUrl
        });
      }
      //set() overwrites data at specified location, including children
firebase.database.ref('/lhttps://test-web-app-83707.firebaseio.com/ist').on('value').then(function(data) {

});

var config = {
  apiKey: "AIzaSyDfRplASOJe-c7-3gSOCjtZDi1inVFc6Do",
  authDomain: "test-web-app-83707.firebaseapp.com",
  databaseURL: "https://test-web-app-83707.firebaseio.com",
  projectId: "test-web-app-83707",
  storageBucket: "test-web-app-83707.appspot.com",
  messagingSenderId: "248318515426"
};
firebase.initializeApp(config);

<pre id="object">

</pre>