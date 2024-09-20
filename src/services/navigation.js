import { NavigationActions, DrawerActions } from 'react-navigation'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

function goBack() {
  _navigator.dispatch(NavigationActions.back())
}

function toggleDrawer() {
  _navigator.dispatch(DrawerActions.toggleDrawer())
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  toggleDrawer,
}