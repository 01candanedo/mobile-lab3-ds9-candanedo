import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

const Handlertouchable = ({ children, handlerstyle, utilFunction}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={utilFunction}
    >
      <View style={[handlerstyle, { opacity: isPressed ? 0.9 : 1 }]}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Handlertouchable;