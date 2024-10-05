import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const LandingPage = ({navigation}) => {
  return (
    <View>
      <Text>LandingPage</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;
