// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   ActivityIndicator,
//   Text,
//   View,
//   StyleSheet,
//   TouchableHighlight,
//   Image,
//   Alert,
// } from 'react-native';

// import {
//   ViroARSceneNavigator
// } from 'react-viro';

// import renderIf from './js/helpers/renderIf';
// var InitialARScene = require('./js/ARHitTestSample');

// // Array of 3d models that we use in this sample. This app switches between this these models.
// var objArray = [
//   require('./js/res/coffee_mug/object_coffee_mug.vrx'),
//   require('./js/res/object_flowers/object_flowers.vrx'),
//   require('./js/res/emoji_smile/emoji_smile.vrx')];

// export default class ViroSample extends Component {
//   constructor() {
//     super();

//     this._onShowObject = this._onShowObject.bind(this);
//     this._renderTrackingText = this._renderTrackingText.bind(this);
//     this._onTrackingInit = this._onTrackingInit.bind(this);
//     this._onDisplayDialog = this._onDisplayDialog.bind(this);
//     this._onLoadStart = this._onLoadStart.bind(this);
//     this._onLoadEnd = this._onLoadEnd.bind(this);

//     this.state = {
//       viroAppProps: {displayObject:false, objectSource:objArray[0], yOffset:0, _onLoadEnd: this._onLoadEnd, _onLoadStart: this._onLoadStart, _onTrackingInit:this._onTrackingInit},
//       trackingInitialized: false,
//       isLoading: false,
//     }
//   }

//   render() {
//     return (
//       <View style={localStyles.outer} >
//         <ViroARSceneNavigator style={localStyles.arView} apiKey="old-art-6684"
//           initialScene={{scene:InitialARScene, passProps:{displayObject:this.state.displayObject}}}  viroAppProps={this.state.viroAppProps}
//         />

//         {this._renderTrackingText()}

//         {renderIf(this.state.isLoading,
//           <View style={{position:'absolute', left:0, right:0, top:0, bottom:0, alignItems: 'center', justifyContent:'center'}}>
//             <ActivityIndicator size='large' animating={this.state.isLoading} color='#ffffff'/>
//           </View>)
//         }

//         <View style={{position: 'absolute',  left: 0, right: 0, bottom: 77, alignItems: 'center'}}>
//           <TouchableHighlight style={localStyles.buttons}
//             onPress={this._onDisplayDialog}
//             underlayColor={'#00000000'} >
//             <Image source={require("./js/res/btn_mode_objects.png")} />
//           </TouchableHighlight>
//         </View>
//       </View>
//     );
//   }

//   // Invoked when a model has started to load, we show a loading indictator.
//   _onLoadStart() {
//     this.setState({
//       isLoading: true,
//     });
//   }

//   // Invoked when a model has loaded, we hide the loading indictator.
//   _onLoadEnd() {
//     this.setState({
//       isLoading: false,
//     });
//   }

//   _renderTrackingText() {
//     if(this.state.trackingInitialized) {
//       return (<View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top: 30, alignItems: 'center'}}>
//         <Text style={{fontSize:12, color:"#ffffff"}}>Tracking initialized.</Text>
//       </View>);
//     } else {
//       return (<View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top:30, alignItems: 'center'}}>
//         <Text style={{fontSize:12, color:"#ffffff"}}>Waiting for tracking to initialize.</Text>
//         </View>);
//     }
//   }

//   _onTrackingInit() {
//     this.setState({
//       trackingInitialized: true,
//     });
//   }

//   _onDisplayDialog() {
//     Alert.alert(
//     'Choose an object',
//     'Select an object to place in the world!',
//     [
//       {text: 'Coffee Mug', onPress: () => this._onShowObject(0, "coffee_mug", 0)},
//       {text: 'Flowers', onPress: () => this._onShowObject(1, "flowers", .290760)},
//       {text: 'Smile Emoji', onPress: () => this._onShowObject(2, "smile_emoji", .497823)},
//     ],
//     );
//   }

//   _onShowObject(objIndex, objUniqueName, yOffset) {
//     this.setState({
//         viroAppProps:{...this.state.viroAppProps, displayObject: true, yOffset: yOffset, displayObjectName: objUniqueName, objectSource:objArray[objIndex]},
//     });
//   }
// }

// var localStyles = StyleSheet.create({
//   outer : {
//     flex : 1,
//   },

//   arView: {
//     flex:1,
//   },

//   buttons : {
//     height: 80,
//     width: 80,
//     paddingTop:20,
//     paddingBottom:20,
//     marginTop: 10,
//     marginBottom: 10,
//     backgroundColor:'#00000000',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ffffff00',
//   }
// });

// module.exports = ViroSample


/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var apiKey = "old-art-6684";

var vrScenes = {
    '360PhotoTour': require('./js/360PhotoTour/MainScene'),
}

var arScenes = {
  'ARSimpleSample': require('./js/ARSample/HelloWorldSceneAR.js'),
}

var showARScene = true;

var ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {

    if (showARScene) {
      return (
        <ViroARSceneNavigator
          initialScene={{
            scene: arScenes['ARSimpleSample'],
          }}
          apiKey={apiKey} />
        );
    } else {
      return (
        <ViroVRSceneNavigator
          initialScene={{
            scene: vrScenes['360PhotoTour'],
          }}
          apiKey={apiKey} />
      );

    }
  }
});

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

module.exports = ViroCodeSamplesSceneNavigator;
