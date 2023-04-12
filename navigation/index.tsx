/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/SettingScreen";
import ReportsScreen from "../screens/ReportsScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import SettingScreen from "../screens/SettingScreen";
import HomeScreen from "../screens/HomeScreen";
import ContractScreen from "../screens/ContractScreen";
import BookJobScreen from "../screens/BookJobScreen";
import ReportViewScreen from "../screens/ReportViewScreen";
import LogInScreen from "../screens/LogInScreen";
import LogInTypeScreen from "../screens/LogInTypeScreen";
import CleanerDetailScreen from "../screens/CleanerDetailScreen";
import InspectionScreen from "../screens/InspectionScreen/InspectionSreen";
import AnimationScreen from "../screens/AnimationScreen";
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginType"
        component={LogInTypeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LogInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnimatedScreen"
        component={AnimationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BookJob"
        component={BookJobScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CleanerDetail"
        component={CleanerDetailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ReportView"
        component={ReportViewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Inspection"
        component={InspectionScreen}
        options={{ headerShown: false }}
      />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        listeners={({ navigation }) => ({
          tabPress: (event: { preventDefault: () => void }) => {
            event.preventDefault();
            // setShowBottom(true);
            navigation.navigate("Home");
          },
        })}
        options={() => ({
          title: "Home",
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#195532",
          tabBarActiveBackgroundColor: "747B84",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                justifyContent: "center",
                width: 19,
                height: 18,
                tintColor: focused ? "#195532" : "#747B84", // : "#fff 498BEA",
              }}
              source={require("../assets/nav/home.png")}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Contract"
        component={ContractScreen}
        listeners={({ navigation }) => ({
          tabPress: (event: { preventDefault: () => void }) => {
            event.preventDefault();
            // setShowBottom(true);
            navigation.navigate("Contract");
          },
        })}
        options={() => ({
          title: "Contract",
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#195532",
          tabBarActiveBackgroundColor: "747B84",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                justifyContent: "center",
                width: 17,
                height: 20,
                tintColor: focused ? "#195532" : "#747B84", // : "#fff 498BEA",
              }}
              source={require("../assets/nav/contract.png")}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Reports"
        component={ReportsScreen}
        listeners={({ navigation }) => ({
          tabPress: (event: { preventDefault: () => void }) => {
            event.preventDefault();
            // setShowBottom(true);
            navigation.navigate("Reports");
          },
        })}
        options={() => ({
          title: "Reports",
          tabBarShowLabel: true,
          tabBarLabel: "Reports",
          tabBarActiveTintColor: "#195532",
          tabBarActiveBackgroundColor: "747B84",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                justifyContent: "center",
                width: 17,
                height: 20,
                tintColor: focused ? "#195532" : "#747B84", // : "#fff 498BEA",
              }}
              source={require("../assets/nav/report.png")}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingScreen}
        listeners={({ navigation }) => ({
          tabPress: (event: { preventDefault: () => void }) => {
            event.preventDefault();
            // setShowBottom(true);
            navigation.navigate("Setting");
          },
        })}
        options={() => ({
          title: "Setting",
          tabBarShowLabel: true,
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "#195532",
          tabBarActiveBackgroundColor: "747B84",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                justifyContent: "center",
                width: 20,
                height: 20,
                tintColor: focused ? "#195532" : "#747B84", // : "#fff 498BEA",
              }}
              source={require("../assets/nav/settings.png")}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
