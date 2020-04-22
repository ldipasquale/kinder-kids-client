import { createStackNavigator as rawCreateStackNavigator } from 'react-navigation'

import processScreens from './processScreens'

export default (screens, Config = {}) => {
  const StackNavigator = rawCreateStackNavigator(processScreens(screens), {
    ...Config,
  })

  if (Config.navigationOptions) {
    StackNavigator.navigationOptions = Config.navigationOptions
  }

  return StackNavigator
}
