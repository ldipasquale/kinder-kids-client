import React from 'react'
import { createStackNavigator as rawCreateStackNavigator } from 'react-navigation'

import processScreens from './processScreens'
import Modal from './Modal'

export default (Screen, modals) => {
  const processedModals = modals.map((ModalScreen) => {
    const ProcessedModal = ({ navigation }) => ( // eslint-disable-line react/prop-types
      <Modal
        navigation={navigation}
        renderContent={({ handleClose }) => (
          <ModalScreen onClose={handleClose} />
        )}
      />
    )

    ProcessedModal.navigationOptions = ModalScreen.navigationOptions

    return ProcessedModal
  })

  const ProcessedScreen = rawCreateStackNavigator(processScreens([Screen, ...processedModals]), {
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    transitionConfig: () => ({
      screenInterpolator: () => ({
        opacity: 1,
      }),
    }),
  })

  ProcessedScreen.navigationOptions = Screen.navigationOptions

  return ProcessedScreen
}
