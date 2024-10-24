import React from 'react';
import {Pressable} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

interface IconButtonProps {
  onPress: () => void;
}

export default function IconButton({onPress}: IconButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Icons name="home" size={16} color="white" />
    </Pressable>
  );
}
