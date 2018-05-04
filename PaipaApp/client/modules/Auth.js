import { AsyncStorage } from 'react-native';


export default {
  async authenticateToken(key, value) {
      try {
        console.log("AUTH FILE WORKING")
          return await AsyncStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
          // console.error('AsyncStorage#setItem error: ' + error.message);
      }
  },

  async getToken(key) {
      return await AsyncStorage.getItem(key)
          .then((result) => {
              if (result) {
                  try {
                    console.log("AUTH FILE WORKING")

                      result = JSON.parse(result);
                      console.log("getToken: " + result)
                  } catch (e) {
                      console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
                  }
              }
              return result;
          });
  },

  async isUserAuthenticated(key) {
      await AsyncStorage.getItem(key)
          .then((result) => {
              if (result) {
                  try {
                    console.log("AUTH FILE WORKING")

                      var result = JSON.parse(result);
                      result = result!==null
                      console.log("userIsAuthenticated function raw result: " + result)
                  } catch (e) {
                      console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
                  }

              }
              // result = (result !== null);

              console.log("isUserAuthenticated: " + result)
              console.log("after isUserAuthenticated authState:" + this.state.auth)


              console.log("after isUserAuthenticated authState:" + this.state.auth + result)
              // return result;
          })
          this.setState({
            auth: result,
            signInComplete: true,
          })
          console.log("signInComplete: " + this.state.signInComplete)
          return (result !== null)

  },

  async deauthenticateUser(key) {
      return await AsyncStorage.removeItem(key);
  }
// async setItem(key, value) {
//     try {
//         return await AsyncStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//         // console.error('AsyncStorage#setItem error: ' + error.message);
//     }
// },
// async getItem(key) {
//     return await AsyncStorage.getItem(key)
//         .then((result) => {
//             if (result) {
//                 try {
//                     result = JSON.parse(result);
//                 } catch (e) {
//                     // console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
//                 }
//             }
//             return result;
//         });
// },
// async removeItem(key) {
//     return await AsyncStorage.removeItem(key);
// }
}
