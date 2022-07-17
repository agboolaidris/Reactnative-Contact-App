import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Register from "../screens/register";

const Stack = createNativeStackNavigator();

// export const PrivateStack = () => {
//   return (
//     <>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Notifications" component={HomeScreen} />
//       </Stack.Navigator>
//     </>
//   );
// };

export const PublicStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Notifications" component={Register} />
    </Stack.Navigator>
  );
};
