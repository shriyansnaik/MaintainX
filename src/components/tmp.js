import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function tmp() {
  const [counter, setCounter] = useState(0);

  const incre = () => {
    const tmp = counter;
    setCounter(tmp + 1);
  };

  const decre = () => {
    const tmp = counter;
    setCounter(tmp - 1);
  };

  return (
    <>
      <View>
        <Text>Counter: {counter}</Text>
      </View>
      <TouchableOpacity style={{height: 20, width: 50}} onPress={() => incre()}>
        Increment
      </TouchableOpacity>
      <TouchableOpacity style={{height: 20, width: 50}} onPress={() => decre()}>
        Decrement
      </TouchableOpacity>
    </>
  );
}
