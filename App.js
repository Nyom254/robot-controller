import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from "react";
import Slider from '@react-native-community/slider';
import { GestureDetector, Gesture, GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  // orientation
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };
  // text input ip addresses 
  const [ipAddress, setIpAddress] = useState()

  // controll robot
  const [robotCommand, setRobotCommand] = useState()
  const [carSpeed, setCarSpeed] = useState()
  const [control, setControl] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  })

  useEffect( async () => {
    if (robotCommand === 'F') {
      await fetch(`http://${ipAddress}:80/?State=F`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    } else if (robotCommand === 'B') {
      await fetch(`http://${ipAddress}:80/?State=B`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    } else if (robotCommand === "L") {
      await fetch(`http://${ipAddress}:80/?State=L`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === "R") {
      await fetch(`http://${ipAddress}:80/?State=R`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === "FR") {
      await fetch(`http://${ipAddress}:80/?State=I`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === "FL") {
      await fetch(`http://${ipAddress}:80/?State=G`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === "BR") {
      await fetch(`http://${ipAddress}:80/?State=J`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === "BL") {
      await fetch(`http://${ipAddress}:80/?State=H`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === 0) {
      await fetch(`http://${ipAddress}:80/?State=0`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === 1) {
      await fetch(`http://${ipAddress}:80/?State=1`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === 2) {
      await fetch(`http://${ipAddress}:80/?State=2`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === 3) {
      await fetch(`http://${ipAddress}:80/?State=3`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === 4) {
      await fetch(`http://${ipAddress}:80/?State=4`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === 5) {
      await fetch(`http://${ipAddress}:80/?State=5`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === 6) {
      await fetch(`http://${ipAddress}:80/?State=6`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === 7) {
      await fetch(`http://${ipAddress}:80/?State=7`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === 8) {
      await fetch(`http://${ipAddress}:80/?State=8`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === 9) {
      await fetch(`http://${ipAddress}:80/?State=9`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
    else if (robotCommand === "S") {
      await fetch(`http://${ipAddress}:80/?State=S`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    }
  }, [robotCommand])

  useEffect(() => {

    const { forward, backward, right, left } = control;

    if (forward && left) {
      // Handle forward-left logic
      setRobotCommand("FL")
    } else if (forward && right) {
      // Handle forward-right logic
      setRobotCommand("FR")
    } else if (backward && left) {
      // Handle backward-left logic
      setRobotCommand("BL")
    } else if (backward && right) {
      // Handle backward-right logic
      setRobotCommand("BR")
    } else if (forward) {
      // Handle forward logic
      setRobotCommand('F')
    } else if (backward) {
      // Handle backward logic
      setRobotCommand('B')
    } else if (left) {
      // Handle left logic
      setRobotCommand('L')
    } else if (right) {
      // Handle right logic
      setRobotCommand('R')
    } else {
      setRobotCommand('S')
    }
  }, [control])

  // button handler
  const handleControlPress = (control) => {
    setControl((prevControls) => ({ ...prevControls, [control]: true }));
  };

  const handleControlRelease = (control) => {
    setControl((prevControls) => ({ ...prevControls, [control]: false }));
  };

  const forwardGesture = Gesture.LongPress()
    .maxDistance(100)
    .minDuration(0)
    .onTouchesDown(() => {
      handleControlPress("forward")
    })
    .onFinalize(() => {
      handleControlRelease("forward")
    })
  const backwardGesture = Gesture.LongPress()
    .maxDistance(100)
    .minDuration(0)
    .onTouchesDown(() => {
      handleControlPress("backward")
    })
    .onFinalize(() => {
      handleControlRelease("backward")
    })
  const leftGesture = Gesture.LongPress()
    .maxDistance(100)
    .minDuration(0)
    .onTouchesDown(() => {
      handleControlPress("left")
    })
    .onFinalize(() => {
      handleControlRelease("left")
    })
  const rightGesture = Gesture.LongPress()
    .maxDistance(100)
    .minDuration(0)
    .onTouchesDown(() => {
      handleControlPress("right")
    })
    .onFinalize(() => {
      handleControlRelease("right")
    })


  return (
    <GestureHandlerRootView style={styles.container}>
      <Text>IP Address</Text>
      <TextInput
        style={styles.ipInput}
        onChangeText={setIpAddress}
        value={ipAddress}
        keyboardType='numeric'
      />
      <Text>{robotCommand}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <GestureDetector gesture={forwardGesture}>
            <View
              style={[styles.button, { marginBottom: 50 },]}
            >
              <Text
                style={{ color: 'white' }}
              >Forward</Text>
            </View>
          </GestureDetector>
          <GestureDetector gesture={backwardGesture}>
            <View
              style={[styles.button, { marginBottom: 50 },]}
            >
              <Text
                style={{ color: 'white' }}
              >Back</Text>
            </View>
          </GestureDetector>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <GestureDetector gesture={leftGesture}>
            <View
              style={[styles.button, { marginBottom: 50 },]}
            >
              <Text
                style={{ color: 'white' }}
              >Left</Text>
            </View>
          </GestureDetector>
          <GestureDetector gesture={rightGesture}>
            <View
              style={[styles.button, { marginBottom: 50 },]}
            >
              <Text
                style={{ color: 'white' }}
              >Right</Text>
            </View>
          </GestureDetector>
        </View>
      </View>
      <Slider
        style={{
          width: '60%',
          height: 20,
          marginTop: -50,
          marginBottom: 15,
        }}
        value={carSpeed}
        minimumValue={0}
        maximumValue={9}
        step={1}
        minimumTrackTintColor="black"
        maximumTrackTintColor="gray"
        onSlidingComplete={(speed) => { setCarSpeed(speed), setRobotCommand(speed) }}
      />
      <StatusBar style='light' />
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ipInput: {
    borderBottomWidth: 1,
    padding: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    width: 180,
    borderRadius: 4,
    backgroundColor: 'black'
  }
});
