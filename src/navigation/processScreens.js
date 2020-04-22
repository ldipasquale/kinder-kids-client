import { withNavigation } from 'react-navigation'

const processScreen = Screen => withNavigation(Screen)

let screenId = 0

const getScreenId = (Screen) => {
  if (Screen.navigationOptions) {
    return Screen.navigationOptions.id
  }

  screenId += 1

  return screenId
}

export default (screens) => screens.reduce((accumulator, Screen) => ({
  ...accumulator,
  [getScreenId(Screen)]: processScreen(Screen),
}), {})
