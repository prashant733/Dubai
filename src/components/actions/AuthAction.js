import * as Actions from './ActionName'
import database from '@react-native-firebase/database'
import Strings from './Strings'
// import { _storeData } from '../helpers/Functions'

export const removeError = () => {
  return dispatch => {
    dispatch({ type: Actions.DEFAULT, payload: null })
  }
}

export const updateDrawer = () => {
  return dispatch => {
    dispatch({ type: Actions.UPDATE_DRAWER, payload: null })
  }
}

export const onLogin = (phoneNumber) => {
  console.log("onLogin : ", phoneNumber)
  return async function (dispatch) {
    try {
      dispatch({ type: Actions.LOGIN_BEGIN, payload: null })
      let rootRef = database().ref()
      console.log('rootRef : ', rootRef.child('/users'))
      rootRef
        .child('/users')
        .orderByChild('phone')
        .equalTo(phoneNumber)
        .once('value')
        .then(snapshot => {
          console.log('onLogin snapshot : ', snapshot.exists())
          if (snapshot.exists()) {
            const userObj = snapshot.val()
            console.log("user object : ", userObj)
            setTimeout(() => {
              dispatch({ type: Actions.LOGIN_SUCCESS, payload: userObj })
            }, 500)
          } else {
            setTimeout(() => {
              dispatch({
                type: Actions.LOGIN_FAILURE,
                payload: Strings.errors.user_not_exist,
              })
            }, 500)
          }
        })
    } catch (e) {
      setTimeout(() => {
        dispatch({
          type: Actions.LOGIN_FAILURE,
          payload: Strings.errors.user_not_exist,
        })
      }, 500)
    }
  }
}

export const doRegistration = (name, email, phoneNumber, avatar, fcmToken) => {
  console.log(name, email, phoneNumber)
  return async function (dispatch) {
    try {
      dispatch({ type: Actions.REGISTRATION_BEGIN, payload: null })
      let rootRef = database().ref()
      rootRef
        .child('/users')
        .orderByChild('phone')
        .equalTo(phoneNumber)
        .once('value')
        .then(snapshot => {
          console.log(snapshot.val(), "doRegistration snapshot : ", snapshot.exists())
          if (snapshot.exists()) {
            setTimeout(() => {
              dispatch({
                type: Actions.REGISTRATION_FAILURE,
                payload: Strings.errors.email_exist,
              })
            }, 500)
          } else {
            const user = {
              name: name,
              email: email,
              phone: phoneNumber,
              avatar: avatar,
              isSubscribe: false,
              fcmToken: fcmToken
            }
            console.log("user data : ", user)
            rootRef
              .child('/users/')
              .push(user)
              .then(() => {
                setTimeout(() => {
                  dispatch({ type: Actions.REGISTRATION_SUCCESS, payload: null })
                }, 500)
              })
              .catch(() => {
                setTimeout(() => {
                  dispatch({
                    type: Actions.REGISTRATION_FAILURE,
                    payload: Strings.errors.registration_error,
                  })
                }, 500)
              })
          }
        })
    } catch (e) {
      setTimeout(() => {
        dispatch({
          type: Actions.REGISTRATION_FAILURE,
          payload: Strings.errors.registration_error,
        })
      }, 500)
    }
  }
}

export const getUser = phoneNumber => {
  console.log("getUser phoneNumber : ", phoneNumber)
  return async function (dispatch) {
    try {
      dispatch({ type: Actions.GET_USER_BEGIN, payload: null })
      let rootRef = database().ref()
      rootRef
        .child('/users')
        .orderByChild('phone')
        .equalTo(phoneNumber)
        .once('value')
        .then(snapshot => {
          if (snapshot.exists()) {
            const userObj = snapshot.val()
            console.log("user object", userObj)
            dispatch({ type: Actions.GET_USER_SUCCESS, payload: userObj })
          } else {
            setTimeout(() => {
              dispatch({
                type: Actions.GET_USER_FAILURE,
                payload: Strings.errors.user_not_exist,
              })
            }, 500)
          }
        })
    } catch (e) {
      setTimeout(() => {
        dispatch({
          type: Actions.GET_USER_FAILURE,
          payload: Strings.errors.user_not_exist,
        })
      }, 500)
    }
  }
}

export const updateProfile = (name, avatar, key) => {
  console.log(key, "updateProfile image source : ", avatar)
  return async function (dispatch) {
    try {
      dispatch({ type: Actions.UPDATE_PROFILE_BEGIN, payload: null })
      let rootRef = database().ref()
      let updates = {}
      updates['/users/' + key + '/name'] = name
      updates['/users/' + key + '/avatar'] = avatar
      rootRef
        .update(updates)
        .then(() => {
          setTimeout(() => {
            dispatch({ type: Actions.UPDATE_PROFILE_SUCCESS, payload: null })
          }, 500)
        })
        .catch(() => {
          setTimeout(() => {
            dispatch({
              type: Actions.UPDATE_PROFILE_FAILURE,
              payload: Strings.errors.update_error,
            })
          }, 500)
        })
    } catch (e) {
      setTimeout(() => {
        dispatch({
          type: Actions.UPDATE_PROFILE_FAILURE,
          payload: Strings.errors.update_error,
        })
      }, 500)
    }
  }
}