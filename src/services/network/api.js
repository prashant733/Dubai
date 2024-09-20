// import axios from 'axios'
import { Platform } from 'react-native'
// import stripe from 'tipsi-stripe'
import moment, { utc } from 'moment'
import baseURL from '../network/base_url';
import axios from 'axios';
// import  internetConnectionHandler from '../../hoc/internetConnectionHandler'

// const baseURL = "https://webmobril.org/dev/beverages/api/user/"
// const productionPubliashableKey = "pk_live_51I1i7KFiy9TW3WjULsMXQ2n2kdmMD8qmJcMXEtT8JdMtKCd7JMoB9N3Llyb7Wzhe0XqQ5ONgRVIqm4aoUWxOD4GE00hgaj0mfC";
// const testPublishableKey = 'pk_test_51I1i7KFiy9TW3WjU49QGOq4hBnzSacVoaNtrgZjEOjFGfQ1JilXEhE53ftJ9vJXd8fEKAd6evPwv3yPTuZA5iyuS00Mpayt6ex'
// stripe.setOptions({
//     publishableKey: productionPubliashableKey
// })



export function updateProfile(url, data, imageObj, type) {
    const formData = new FormData()
    console.log("baseURL + method", baseURL + url)
    for (let key in data) {
        formData.append(key, data[key])
    }
    if (imageObj) {
        console.log("imageObj", imageObj)
        var fileType;
        if (type) {
            fileType = 'document_front'
        } else {
            fileType = 'profile_img'
        }
        formData.append(fileType, {
            uri: Platform.OS == "ios" ? imageObj.uri : `file://${imageObj.path}`,
            type: imageObj.type,
            name: new Date().getTime() + "." + imageObj.uri.split(".")[imageObj.uri.split(".").length - 1]
        })
    }
    console.log("form datatata", formData)
    return fetch(baseURL + url,
        {
            body: formData,
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": 'multipart/form-data',
            },
        })
        .then(response => {
            return response.json()
                .then(responseJson => {
                    return responseJson
                })
        })
        .catch(err => console.log("%%%%%%%%%%%%%%%%%%%%%%%%%", err))
}


export async function getApi(method, authKey) {
    // console.log(authKey, "gitapi---------", baseURL + method);
    let response = {}
  
    await axios.get(baseURL.base_url + method, {
      headers: {
        'Authorization': `Bearer ${authKey}`,
        "Accept": "application/json",
        'Content-Type': 'application/json',
      }
    })
      .then(resp => {
        response = resp.data
        console.log("getApi response : ", response)
      })
      .catch(error => {
        
        // alert(error)
        // internetConnectionHandler
        console.log("error : ", error)
      })
    return response
    // return fetch(baseURL.base_url + method, {
    //   method: 'get',
    //   headers: {
    //     "Authorization": "Bearer " + authKey
    //   }
    // })
    //   .then((response) => {
    //     console.log("responseresponse--",response);
    //     return response.json()
    //   })
    //   .catch(function (error) {
    //     // alert(error)

    //     console.log('Request failed', error);
    //   });
  }

  export function getAPI(method ) {
    console.log( "gitapi---baseURL.termsBaseUrl + method------", baseURL.termsBaseUrl + method);
    return fetch(baseURL.termsBaseUrl + method, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
       "Content-Type": 'application/json',
      }
    })
      .then((response) => {
        console.log("responseresponse--",response);
        return response.json()
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
  }

export async function postAPI(method, data) {
    const formData = new FormData()
    let response = {}
    for (let key in data) {
        formData.append(key, data[key])
    }
    console.log("baseURL + method", baseURL.base_url + method)
    console.log("Request params", formData)
    await axios.post(baseURL.base_url + method, data)
        .then(res => {
          console.log("res--0--0------",res);
            response = res.data
        })
    return response
    // const formData = new FormData()
    // for (let key in data) {
    //     formData.append(key, data[key])
    // }
    // // if (imageObj) {
    // //     // console.log("imageObj", imageObj)
    // //     formData.append('profile_img', {
    // //         uri: Platform.OS == "ios" ? imageObj.uri : `file://${imageObj.path}`,
    // //         type: imageObj.type,
    // //         name: 'profilepic.' + imageObj.uri.split(".")[1]
    // //     })
    // // }
    // console.log("form datatata", formData)
    // console.log(method,"form dcccccccccatatata", data)

    // return fetch(baseURL.base_url + method,
    //     {
    //         body: formData,
    //         method: "POST",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": 'multipart/form-data',
    //         },
    //     })
    //     .then(response => {
    //         console.log("Respoooooooooooooooo", response)
    //         return response.json()
    //             .then(responseJson => {
    //                 return responseJson
    //             })
    //     })
    //     .catch(err => console.log("%%%%%%%%%%%%%%%%%%%%%%%%%", err))

}

export async function postApi(method, data, authKey) {
    const formData = new FormData()

  let response = {}
  for (let key in data) {
    formData.append(key, data[key])
  }
  console.log("baseURL + method", baseURL.base_url + method)
  console.log("Request params", formData)
  await axios.post(baseURL.base_url + method, data, {
    headers: {
        "Authorization": "Bearer " + authKey,
        // "Accept": "application/json",
        //  "Content-Type": 'application/json',
    }
  })
    .then(res => {
      console.log("******************", res)
      response = res.data
    })
  return response
    // const formData = new FormData()
    // for (let key in data) {
    //     formData.append(key, data[key])
    // }
   
    // console.log("form datatata", formData)
    // return fetch(baseURL.base_url+url,
    //     {
    //         body: formData,
    //         method: "POST",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": 'multipart/form-data',
    //             "Authorization": "Bearer " + authKey
    //         },
    //     })
    //     .then(response => {
    //         console.log("Respoooooooooooooooo", response)
    //         return response.json()
    //             .then(responseJson => {
    //                 return responseJson
    //             })
    //     })
    //     .catch(err => console.log("%%%%%%%%%%%%%%%%%%%%%%%%%", err))
}

export async function postApiRow(method, data, authKey) {
  const formData = new FormData()

let response = {}
for (let key in data) {
  formData.append(key, data[key])
}
console.log("baseURL + method", baseURL.base_url + method)
console.log("Request params", formData)
await axios.post(baseURL.base_url + method, data, {
  headers: {
      "Authorization": "Bearer " + authKey,
      // "Accept": "application/json",
       "Content-Type": 'application/json',
  }
})
  .then(res => {
    console.log("******************", res)
    response = res.data
  })
return response
  // const formData = new FormData()
  // for (let key in data) {
  //     formData.append(key, data[key])
  // }
 
  // console.log("form datatata", formData)
  // return fetch(baseURL.base_url+url,
  //     {
  //         body: formData,
  //         method: "POST",
  //         headers: {
  //             "Accept": "application/json",
  //             "Content-Type": 'multipart/form-data',
  //             "Authorization": "Bearer " + authKey
  //         },
  //     })
  //     .then(response => {
  //         console.log("Respoooooooooooooooo", response)
  //         return response.json()
  //             .then(responseJson => {
  //                 return responseJson
  //             })
  //     })
  //     .catch(err => console.log("%%%%%%%%%%%%%%%%%%%%%%%%%", err))
}


export async function deleteApi(method,authKey) {
  console.log("authKey-00---",authKey);
// await axios.delete(baseURL.base_url + method, data, {
//   headers: {
//       "Authorization": "Bearer " + authKey,
//       // "Accept": "application/json",
//       //  "Content-Type": 'application/json',
//   }
// })
//   .then(res => {
//     console.log("******************", res)
//     response = res.data
//   })

  let data = '';

  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: baseURL.base_url + method,
    headers: { 
      "Authorization": "Bearer " + authKey,
      // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNGUzZmZiNTM5MjYyY2ZkZDdmYjg0OTc0MGYyMWI3MWQzM2VmNDcxNDgyN2MxZDYzM2ViMjNkOWNiODA4NWU1OGYwMjkxMzVlNTBmMTYxNDEiLCJpYXQiOjE2ODUwMTAyMzYsIm5iZiI6MTY4NTAxMDIzNiwiZXhwIjoxNzE2NjMyNjM2LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.yomRJenWhiYxESsZSVe4JLbVh6aDoi4xGfgfAH0haFCHnGU3tYJwJTfIG-NsUJcCjbRtymemVrxIViM1lERnERxJEm1Uu7AHlOTn0IS-ep8OhwHDaPJJLr66ichk0wf5ieUkRymGVpSJ6lDukK8B-MWyexzNRj4sU-1Qe20IEUvnd-WTNrPN4NB85-e1L2E32rCQMHVygjMuAzQJqdE908Q36OppaLfTzAPX0FKwx5ZJG28LpUjl27RD5lzjK4Yw7aSAs74BL1mqQU7Y5KVfYTL6RdeiJ35Z6YudyRTNoziKEKRUd4p8p1vgnA3mdejYRYSd9l7ioCg5suAeys65Sw7PTqTuPzENlhexNJtQdHi3ZhlWaCfhkBwf3HUoAgzOjn2BtwavdOXARtoQ4ySbPKoeDlyF_20sVwtlsI09-nnnMQ6-IowW5CEhQisZuMZHAilaiGwPNfDfdktTYvKC5z4AlG2_wZ-cui3_OHbKC-4zmYDXPe53F4xjF0VrVAZu0B7Afgjt425YEeAfeg8CQPtA93Qkj1gAWOXWiNuJhoMm_CJT1YhX8ba77FHzIUQnSVo-iK3AlXOVfWijJqGG8UIR3Jf0Gz4cf7gDnwNIiknXqTcuqMSX_YGEh2mIRBvJR6ISneYRQQrlmnLWokRdDoaVxqZQyv-fDCFhRTGJlrM'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    return response.data
  })
  .catch((error) => {
    console.log(error);
  });


  
}

export async function reviewpostApi(method, data, authKey) {
  
  const formData = new FormData()
  for (let key in data) {
      formData.append(key, data[key])
  }
 
  console.log("form datatata", formData)
  return fetch(baseURL.base_url+url,
      {
          body: formData,
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": 'multipart/form-data',
              "Authorization": "Bearer " + authKey
          },
      })
      .then(response => {
          console.log("Respoooooooooooooooo", response)
          return response.json()
              .then(responseJson => {
                  return responseJson
              })
      })
      .catch(err => console.log("%%%%%%%%%%%%%%%%%%%%%%%%%", err))
}


// export async function getAPI(method) {
//     let response = {}
//     await axios.get(baseURL + method)
//         .then(res => {
//             response = res.data
//         })
//     return response
// }

export function generateTokenFromCards(cardObj) {
    return stripe.createTokenWithCard({
        number: (cardObj.cardNumber),
        expMonth: parseInt(cardObj.expMonth),
        expYear: parseInt(cardObj.expYear),
        cvc: cardObj.cvv,
        // optional
        name: cardObj.cardholderName,
        currency: 'usd',
        addressLine1: '123 Test Street',
        addressLine2: 'Apt. 5',
        addressCity: 'Test City',
        addressState: 'Test State',
        addressCountry: 'Test Country',
        addressZip: '55555',
    })
        .then((result) => {
            console.log("payment**********", result)
            return result
        })
        .catch(error => {
            console.log("Payment error", JSON.stringify(error))
            return { message_code: 0, message: error.message }

        })
}

export function localToG(date) {
    const gTime = moment(date).utc().format('YYYY-MM-DD HH:mm:ss')
    return gTime;
}

export function globleToLocal(date) {
    const localTime = moment(moment.utc(date).toDate()).local().format("DD MMM YYYY HH:mm:ss")
    return localTime;
}

export function compareDate(date1, date2) {
    const d1 = Date.parse(moment(date1, "DD MMM YYYY HH:mm:ss").toISOString());
    const d2 = Date.parse(moment(date2, "DD MMM YYYY HH:mm:ss").toISOString());
    return d1 < d2
}
