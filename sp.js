import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [quantity, setQuantity] = useState(2);

  return (
    <View style={[styles.container, darkMode && styles.darkBackground]}>
      <Text style={styles.header}>Shopping Cart</Text>
      <View style={styles.cartContainer}>
        <Image source={require("./assets/burger.png")} style={styles.productImage} />
        <Text style={styles.saleBadge}>10% OFF</Text>
        <Text style={styles.productTitle}>BURGER</Text>
        <Text style={styles.productPrice}>$28</Text>
        <Text style={styles.productRating}>⭐ 4.9 (3k+ Rating)</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.productQuantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Delivery Address */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.paymentValue}>Dhaka, Bangladesh</Text>
          <TouchableOpacity style={styles.changeButton}><Text style={styles.changeText}>Change</Text></TouchableOpacity>
        </View>
      </View>
      
      {/* Payment Method */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.paymentMethodContainer}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxMZqmBuxn7k-nTFB1xXoYlATe8gEbWjbJA&s' }} style={styles.paymentImage} />          <TouchableOpacity style={styles.changeButton}><Text style={styles.changeText}>Change</Text></TouchableOpacity>
        </View>
      </View>
      
      {/* Checkout Summary */}
      <View style={styles.checkoutSummary}>
        <Text style={styles.summaryText}>Subtotal ({quantity}): ${quantity * 28}</Text>
        <Text style={styles.summaryText}>Delivery Fee: $6.20</Text>
        <Text style={styles.payableTotal}>Payable Total: ${(quantity * 28 + 6.2).toFixed(2)}</Text>
      </View>
      
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={ProfileScreen} options={{
          tabBarIcon: ({ color }) => <Icon name="home" size={22} color={color} />, 
          tabBarLabel: "HOME"
        }} />
        <Tab.Screen name="Order" component={ProfileScreen} options={{
          tabBarIcon: ({ color }) => <Icon name="shopping-bag" size={22} color={color} />, 
          tabBarLabel: "ORDER"
        }} />
        <Tab.Screen name="Inbox" component={ProfileScreen} options={{
          tabBarIcon: ({ color }) => <Icon name="message-circle" size={22} color={color} />, 
          tabBarLabel: "INBOX"
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({ color }) => <Icon name="user" size={22} color={color} />, 
          tabBarLabel: "PROFILE"
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  cartContainer: { alignItems: "center", backgroundColor: "#f8f8f8", padding: 20, borderRadius: 10 },
  productImage: { width: 300, height: 200, borderRadius: 10 },
  saleBadge: { position: "absolute", top: 10, left: 10, backgroundColor: "#ff5733", color: "white", padding: 5, borderRadius: 5, fontSize: 14 },
  productTitle: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
  productPrice: { fontSize: 20, color: "#ff5733", fontWeight: "bold" },
  productRating: { fontSize: 16, color: "gray" },
  quantityContainer: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  quantityButton: { padding: 10, backgroundColor: "#ddd", borderRadius: 5, marginHorizontal: 5 },
  quantityText: { fontSize: 20, fontWeight: "bold" },
  productQuantity: { fontSize: 18, marginHorizontal: 10 },
  sectionContainer: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  addressContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  paymentMethodContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  paymentImage: { width: 50, height: 30, resizeMode: "contain" },
  changeButton: { backgroundColor: "#ddd", padding: 5, borderRadius: 5 },
  changeText: { color: "#333", fontSize: 14 },
  checkoutSummary: { padding: 20, backgroundColor: "#fff", borderRadius: 10, marginTop: 20 },
  summaryText: { fontSize: 16, color: "#333" },
  payableTotal: { fontSize: 18, fontWeight: "bold", color: "#ff5733", marginTop: 5 },
  confirmButton: { backgroundColor: "#635BFF", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  confirmText: { color: "white", fontSize: 16, fontWeight: "bold" }
});

export default App;