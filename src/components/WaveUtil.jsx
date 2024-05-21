import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function WaveUtil(
  {
    customStyles,
    customHeight,
    svgStyle,
    customBgColor,
    customWavePattern
  }
) {
  return (
    <View style={customStyles}>
      <View style={{ backgroundColor: customBgColor, height: customHeight }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 1440 320"
          style={svgStyle}
        >
          <Path fill={customBgColor} d={customWavePattern} />
        </Svg>
      </View>
    </View>
  );
}