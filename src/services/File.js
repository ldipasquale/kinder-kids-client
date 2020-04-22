import Constants from 'expo-constants'
import * as RawImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import { RNS3 } from 'react-native-aws3'
import uuidv4 from 'uuid/v4'
import AWSConfig from '@config/aws'

import { Toast } from '@navigation'

async function getPermissions() {
  if (Constants.platform.ios) {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA)
    const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL)

    if (cameraRollPermission.status !== 'granted' || cameraPermission.status !== 'granted') {
      Toast.show('Necesitamos los permisos de la cámara')
    }
  }
}

async function takePhoto() {
  await getPermissions()

  const result = await RawImagePicker.launchCameraAsync({
    mediaTypes: RawImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
  })

  if (result.cancelled) {
    return null
  }

  return result.uri
}

async function upload(uri) {
  const extension = uri.split('.').pop()

  try {
    const { body: { postResponse: { location: imageUrl } } } = await RNS3.put({
      uri,
      name: `${uuidv4()}.${extension}`,
      type: `image/${extension}`,
    }, AWSConfig)

    return imageUrl
  } catch (error) {
    throw new Error()
  }
}

async function uploadPhoto({ onTakePhoto } = {}) {
  const uri = await takePhoto()

  if (onTakePhoto) {
    onTakePhoto()
  }

  if (uri) {
    return upload(uri)
  }

  return null
}

export default {
  upload,
  uploadPhoto,
}
