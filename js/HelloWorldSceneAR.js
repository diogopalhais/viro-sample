'use strict';

import React, { Component } from 'react';

import {Alert} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroVideo,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  state = {
    isTracking: false,
    initialized: false
  } 

  render() {

    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
      
        <ViroARImageMarker
            target={'businessCard'}
            onAnchorFound={() => Alert.alert('found') }
            >
              <ViroVideo
                source={{uri: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4' }}
                loop={true}
                position={[0,0,0]}
                scale={[.07, .07, .07]}
                rotation={[-90, 0, 0]}
              />
          </ViroARImageMarker>
        
        </ViroARScene>
    );

  }

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      isTracking: true
    } else if (state == ViroConstants.TRACKING_NONE) {
      isTracking: false
    }
  }
}

ViroARTrackingTargets.createTargets({
  "businessCard" : {
    source : require('./res/augmented-images-earth.jpg'),
    orientation : "Up",
    physicalWidth : 0.01 // real world width in meters
  }
});


module.exports = HelloWorldSceneAR;
