import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Link } from "expo-router";

const index = () => {
  const [state, setState] = React.useState(0);
  return (
    <View>
      <SafeAreaView className="flex items-center justify-center space-y-2 mt-48">
        <TouchableOpacity
          className="bg-black  px-3 py-2 rounded-md"
          onPress={() => setState(state + 1)}
        >
          <Text className="text-white">LOL</Text>
        </TouchableOpacity>
        <Text className="text-lg">{state}</Text>
      </SafeAreaView>
    </View>
  );
};

export default index;
