import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Register from "../screens/register";
import { round } from "react-native-reanimated";
import { Route } from "../constants/route";

const Stack: any = createNativeStackNavigator();

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
    <Stack.Navigator initialRouteName={Route.Login}>
      <Stack.Screen name={Route.Login} component={Login} />
      <Stack.Screen name={Route.Register} component={Register} />
    </Stack.Navigator>
  );
};
