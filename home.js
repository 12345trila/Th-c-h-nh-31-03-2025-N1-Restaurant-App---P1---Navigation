import React from "react";
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  { id: 1, name: "🍕 PIZZA" },
  { id: 2, name: "🍔 BURGER" },
  { id: 3, name: "🥤 DRINK" },
  { id: 4, name: "🍚 RICE" },
];

const popularItems = [
  { id: 1, name: "BURGER", image: require("./assets/burger.png") },
  { id: 2, name: "PIZZA", image: require("./assets/pizza.png") },
];

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View style={{ padding: 20, flexDirection: "row", alignItems: "center" }}>
        <Image source={require("./assets/anh.png")} style={{ width: 50, height: 50, borderRadius: 25 }} />
        <View style={{ marginLeft: 10 }}>
          <Text>Your Location</Text>
          <Text style={{ fontWeight: "bold" }}>Savar, Dhaka</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} style={{ marginLeft: "auto" }} />
      </View>

      {/* Search Bar */}
      <View style={{ padding: 10, flexDirection: "row", alignItems: "center", backgroundColor: "#EEE", borderRadius: 10, margin: 20 }}>
        <Ionicons name="search" size={20} color="#888" style={{ marginRight: 10 }} />
        <TextInput placeholder="Search your food" style={{ flex: 1 }} />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
        {categories.map((category, index) => (
          <TouchableOpacity key={category.id} style={{ padding: 10, marginRight: 10, backgroundColor: index === 0 ? "#4A90E2" : "#EEE", borderRadius: 10 }}>
            <Text style={{ color: index === 0 ? "#FFF" : "#000" }}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular Items */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Popular Items</Text>
        <FlatList
          horizontal
          data={popularItems}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ padding: 10, marginRight: 10, backgroundColor: "#FFF", borderRadius: 10, alignItems: "center" }}>
              <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 10 }} />
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default App;