import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

export function GetImageFileFromPicker(options) {
  const defaultOptions = {
    noData: true,
    allowsEditing: true,
    mediaType: 'photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.5,
    ...options,
  }

  return new Promise((resolve, reject) => {
    launchCamera(defaultOptions, response => {
      if (response.didCancel) {
        reject('User cancelled image picker')
      } else if (response.error) {
        reject(response.error)
      } else {
        resolve(response)
      }
    })
  })
}