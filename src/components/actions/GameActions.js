// import * as Actions from './ActionName'
// import database from '@react-native-firebase/database'
// import firestore from '@react-native-firebase/firestore'
// import * as Const from '../helpers/AppConst'
// import Strings from '../helpers/Strings'
// import { _storeData } from '../helpers/Functions'
// import axios from 'axios'

// export const removeError = () => {
//   return dispatch => {
//     dispatch({ type: Actions.DEFAULT, payload: null })
//   }
// }

// export const updateDrawer = () => {
//   return dispatch => {
//     dispatch({ type: Actions.UPDATE_DRAWER, payload: null })
//   }
// }

// export const getScratchCards = () => {
//   return async function (dispatch) {
//     try {
//       dispatch({ type: Actions.SCRATCH_OFFER_BEGIN, payload: null })
//       let rootRef = await firestore()
//         .collection('scratch_cards')
//         .get()
//       if (rootRef.docs !== null && rootRef.docs.length > 0) {
//         let array = []
//         rootRef.docs.forEach(task => {
//           const ColorCode =
//             'rgb(' +
//             Math.floor(Math.random() * 256) +
//             ',' +
//             Math.floor(Math.random() * 256) +
//             ',' +
//             Math.floor(Math.random() * 256) +
//             ')'
//           const childData = task.data()
//           childData.colorCode = ColorCode
//           array.push(childData)
//         })
//         console.log("Array---------------", array)
//         dispatch({ type: Actions.SCRATCH_OFFER_SUCCESS, payload: array })
//       } else {
//         dispatch({
//           type: Actions.SCRATCH_OFFER_FAILURE,
//           payload: Strings.errors.record_not_exist,
//         })
//       }
//     } catch (e) {
//       console.log("error......", e)
//       dispatch({
//         type: Actions.SCRATCH_OFFER_FAILURE,
//         payload: Strings.errors.record_not_exist,
//       })
//     }
//   }
// }

// export const getWordBank = () => {
//   return async function (dispatch) {
//     try {
//       //dispatch({type: Actions.ANAGRAM_BEGIN, payload: null})
//       axios
//         .get(
//           `https://random-word-api.herokuapp.com/word?key=${Const.APIKEY}&number=200&swear=1`,
//         )
//         .then(res => {
//           if (res.data !== null && res.data.length > 0) {
//             const response = res.data
//             let array = []
//             response.forEach(element => {
//               if (element.length < 6) {
//                 array.push(element)
//               }
//             })
//             shuffle(array)
//             dispatch({
//               type: Actions.ANAGRAM_SUCCESS,
//               payload: array,
//             })
//           } else {
//             dispatch({
//               type: Actions.ANAGRAM_FAILURE,
//               payload: Strings.errors.record_not_exist,
//             })
//           }
//         })
//         .catch(error => {
//           dispatch({
//             type: Actions.ANAGRAM_FAILURE,
//             payload: Strings.errors.record_not_exist,
//           })
//         })
//     } catch (e) {
//       dispatch({
//         type: Actions.ANAGRAM_FAILURE,
//         payload: Strings.errors.record_not_exist,
//       })
//     }
//   }
// }

// export const shuffle = array => {
//   var currentIndex = array.length,
//     temporaryValue,
//     randomIndex
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex)
//     currentIndex -= 1
//     temporaryValue = array[currentIndex]
//     array[currentIndex] = array[randomIndex]
//     array[randomIndex] = temporaryValue
//   }
//   return array
// }

// export const updatePoints = (points, totalPoints, weeklyPoint, key, amount, weeklyTotalpoint, referralPoint) => {
//   return async function (dispatch) {
//     console.log("amount===========    ", weeklyPoint)
//     try {
//       dispatch({ type: Actions.UPDATE_POINT_BEGIN, payload: null })
//       let rootRef = database().ref()
//       let updates = {}
//       if (points) {
//         updates['/users/' + key + '/user_point'] = points
//       }
//       if (amount) {
//         updates['/users/' + key + '/user_token'] = amount
//       } if (totalPoints) {
//         updates['/users/' + key + '/totalPoint'] = totalPoints
//       } if (weeklyPoint) {
//         updates['/users/' + key + '/weeklyPoint'] = parseInt(weeklyPoint)
//       } if (weeklyTotalpoint) {
//         updates['/users/' + key + '/weeklyTotalPoints'] = weeklyTotalpoint
//       } if (referralPoint) {
//         updates['/users/' + key + '/referralPoints'] = referralPoint
//       }
//       rootRef
//         .update(updates)
//         .then(() => {
//           dispatch({ type: Actions.UPDATE_POINT_SUCCESS, payload: null })
//         })
//         .catch(() => {
//           setTimeout(() => {
//             dispatch({
//               type: Actions.UPDATE_POINT_FAILURE,
//               payload: Strings.errors.update_error,
//             })
//           }, 500)
//         })
//     } catch (e) {
//       setTimeout(() => {
//         dispatch({
//           type: Actions.UPDATE_POINT_FAILURE,
//           payload: Strings.errors.update_error,
//         })
//       }, 500)
//     }
//   }
// }

// export const updateUserPoints = (points, totalPoints, weeklyPoint, key, amount, weeklyTotalpoint) => {
//   return async function (dispatch) {
//     console.log("amount===========    ", weeklyPoint)
//     try {
//       dispatch({ type: Actions.UPDATE_USER_POINT_BEGIN, payload: null })
//       let rootRef = database().ref()
//       let updates = {}
//       if (points) {
//         updates['/users/' + key + '/user_point'] = points
//       }
//       if (amount) {
//         updates['/users/' + key + '/user_token'] = amount
//       } if (totalPoints) {
//         updates['/users/' + key + '/totalPoint'] = totalPoints
//       } if (weeklyPoint) {
//         updates['/users/' + key + '/weeklyPoint'] = parseInt(weeklyPoint)
//       } if (weeklyTotalpoint) {
//         updates['/users/' + key + '/weeklyTotalPoints'] = weeklyTotalpoint
//       }
//       rootRef
//         .update(updates)
//         .then(() => {
//           dispatch({ type: Actions.UPDATE_USER_POINT_SUCCESS, payload: null })
//         })
//         .catch(() => {
//           setTimeout(() => {
//             dispatch({
//               type: Actions.UPDATE_USER_POINT_FAILURE,
//               payload: Strings.errors.update_error,
//             })
//           }, 500)
//         })
//     } catch (e) {
//       setTimeout(() => {
//         dispatch({
//           type: Actions.UPDATE_USER_POINT_FAILURE,
//           payload: Strings.errors.update_error,
//         })
//       }, 500)
//     }
//   }
// }