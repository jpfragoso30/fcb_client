import {
    LogBox,
    NativeModules,
    Platform,
    SafeAreaView,
    Text,
    View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LotsView from "./src/screens/LotsView";
import AreasView from "./src/screens/AreasView";
import MapView from "./src/screens/MapView";
import { createContext, useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Stack = createNativeStackNavigator();
export const Context = createContext(null);
const { StatusBarManager } = NativeModules;
LogBox.ignoreAllLogs();

export default function App() {
    const [store, setStore] = useState({ success: true });

    const updateStore = (update) =>
        setStore((prev) => ({ ...prev, ...update }));

    return (
        <Context.Provider value={{ store, updateStore }}>
            <NavigationContainer
                initialRouteName="Parking Lots"
                fallback={<View>Loading...</View>}
                style={{
                    flex: 1,
                    backgroundColor: "#fcd",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <SafeAreaView
                    style={
                        store?.success
                            ? {}
                            : {
                                  paddingTop:
                                      Platform.OS === "android"
                                          ? StatusBarManager.HEIGHT
                                          : 0,
                                  backgroundColor: "gray",
                              }
                    }
                >
                    {!store?.success && (
                        <View
                            style={{
                                paddingTop:
                                    Platform.OS === "android"
                                        ? StatusBarManager.HEIGHT
                                        : 0,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignContent: "center",
                                backgroundColor: "gray",
                                paddingBottom: 16,
                                gap: 16,
                            }}
                        >
                            <FontAwesome5 name="wifi" size={16} color="white" />
                            <Text
                                style={{
                                    color: "white",
                                }}
                            >
                                No Internet Connection
                            </Text>
                        </View>
                    )}
                </SafeAreaView>
                <Stack.Navigator>
                    <Stack.Screen name="Parking Lots" component={LotsView} />
                    <Stack.Screen name="Areas" component={AreasView} />
                    <Stack.Screen name="Map" component={MapView} />
                </Stack.Navigator>
            </NavigationContainer>
        </Context.Provider>
    );
}
