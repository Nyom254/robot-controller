import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from "react";
import Slider from '@react-native-community/slider';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

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

  useEffect(() => {
    if (robotCommand === 'F') {
      fetch(`http://${ipAddress}:80/?State=F`)
        .catch(error => {
          setRobotCommand(`${error}`)
        })
    } else if (robotCommand === 'B') {
      fetch(`http://${ipAddress}:80/?State=B`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    } else if (robotCommand === "L") {
      fetch(`http://${ipAddress}:80/?State=L`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === "R") {
      fetch(`http://${ipAddress}:80/?State=R`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === "FR") {
      fetch(`http://${ipAddress}:80/?State=I`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === "FL") {
      fetch(`http://${ipAddress}:80/?State=G`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === "BR") {
      fetch(`http://${ipAddress}:80/?State=J`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === "BL") {
      fetch(`http://${ipAddress}:80/?State=H`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === 0) {
      fetch(`http://${ipAddress}:80/?State=0`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === 1) {
      fetch(`http://${ipAddress}:80/?State=1`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === 2) {
      fetch(`http://${ipAddress}:80/?State=2`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === 3) {
      fetch(`http://${ipAddress}:80/?State=3`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === 4) {
      fetch(`http://${ipAddress}:80/?State=4`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === 5) {
      fetch(`http://${ipAddress}:80/?State=5`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === 6) {
      fetch(`http://${ipAddress}:80/?State=6`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === 7) {
      fetch(`http://${ipAddress}:80/?State=7`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === 8) {
      fetch(`http://${ipAddress}:80/?State=8`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === 9) {
      fetch(`http://${ipAddress}:80/?State=9`)
      .catch(error => {
        setRobotCommand(`${error}`)
      })
    }
    else if (robotCommand === "S") {
      fetch(`http://${ipAddress}:80/?State=S`)
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



  return (
    <View style={styles.container}>
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
          <View
            style={[styles.button, { marginBottom: 50 },]}
            onTouchStart={() => handleControlPress("forward")}
            onTouchEnd={() => handleControlRelease("forward")}
          >
            <Text
              style={{ color: 'white' }}
            >Forward</Text>
          </View>
          <View
            style={[styles.button, { marginBottom: 50 },]}
            onTouchStart={() => handleControlPress("backward")}
            onTouchEnd={() => handleControlRelease("backward")}
          >
            <Text
              style={{ color: 'white' }}
            >Back</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <View
            style={[styles.button, { marginBottom: 50 },]}
            onTouchStart={() => handleControlPress("left")}
            onTouchEnd={() => handleControlRelease("left")}
          >
            <Text
              style={{ color: 'white' }}
            >Left</Text>
          </View>
          <View
            style={[styles.button, { marginBottom: 50 },]}
            onTouchStart={() => handleControlPress("right")}
            onTouchEnd={() => handleControlRelease("right")}
          >
            <Text
              style={{ color: 'white' }}
            >Right</Text>
          </View>
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
        onSlidingComplete={(speed) => {setCarSpeed(speed), setRobotCommand(speed)}}
      />
      <StatusBar style='light' />
    </View>
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
