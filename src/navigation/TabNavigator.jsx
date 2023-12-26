import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { colors } from "../global/colors";
import { AntDesign, Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()


const TabNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather name="shopping-bag" size={30} color={focused ? "black" : "white"} />
                        )
                    }}
                />
                <Tab.Screen
                    name="CartStack"
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather name="shopping-cart" size={30} color={focused ? "black" : "white"} />
                        )
                    }}
                />
                <Tab.Screen
                    name="OrderStack"
                    component={OrdersNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <AntDesign name="profile" size={30} color={focused ? "black" : "white"} />)
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        shadowColor: "#ccc",
        elevation: 1,
        position: "absolute",
        left: 25,
        right: 25,
        bottom: 25,
        height: 60,
        borderRadius: 20,
    }
})