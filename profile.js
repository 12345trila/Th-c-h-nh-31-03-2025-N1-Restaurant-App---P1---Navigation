import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode && styles.darkBackground]}>
    <Text style={styles.header}>Profile</Text>
    <View style={styles.profileHeader}>
    <Image source={require("./assets/anh.png")} style={{ width: 100, height: 100, borderRadius: 50,marginTop:50 }} />
      <Text style={styles.profileName}> La Quy Tri</Text>
      <Text style={styles.profileEmail}>deobietok12@gmail.com</Text>
    </View>
      <View style={styles.menuContainer}>
        <MenuItem icon="home" text="Home" />
        <MenuItem icon="credit-card" text="My Card" />
        <MenuItem icon="moon" text="Dark Mode" isSwitch value={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        <MenuItem icon="truck" text="Track Your Order" />
        <MenuItem icon="settings" text="Settings" />
        <MenuItem icon="help-circle" text="Help Center" />
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const MenuItem = ({ icon, text, isSwitch, value, onToggle }) => {
  return (
    <View style={styles.menuItem}>
      <Icon name={icon} size={22} color="#000" />
      <Text style={styles.menuText}>{text}</Text>
      {isSwitch ? <Switch value={value} onValueChange={onToggle} /> : <Icon name="chevron-right" size={22} color="#000" />}
    </View>
  );
};

const HomeScreen = () => <View style={styles.screen}><Text>Home Screen</Text></View>;
const OrderScreen = () => <View style={styles.screen}><Text>Order Screen</Text></View>;
const InboxScreen = () => <View style={styles.screen}><Text>Inbox Screen</Text></View>;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name="home" size={22} color={color} />, 
            tabBarLabel: "HOME"
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name="shopping-bag" size={22} color={color} />, 
            tabBarLabel: "ORDER"
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={InboxScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name="message-circle" size={22} color={color} />, 
            tabBarLabel: "INBOX"
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name="user" size={22} color={color} />, 
            tabBarLabel: "PROFILE"
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F7", alignItems: "center", paddingTop: 50 },
  darkBackground: { backgroundColor: "#333" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  profileHeader: { alignItems: "center", marginBottom: 20 ,backgroundColor: '#FFFFE0',width: 1000,height:250},
  profileImage: { width: 80, height: 80, borderRadius: 40 },
  profileName: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  profileEmail: { fontSize: 14, color: "gray" },
  menuContainer: { width: "90%" },
  menuItem: { flexDirection: "row", alignItems: "center", paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#E0E0E0" },
  menuText: { fontSize: 16, flex: 1, marginLeft: 10 },
  logoutButton: { backgroundColor: "#635BFF", padding: 15, borderRadius: 10, marginTop: 20, width: "90%", alignItems: "center" },
  logoutText: { color: "white", fontSize: 16, fontWeight: "bold" },
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;
