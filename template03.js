import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Template03({ navigation }) {
  const messages = [
    {
      id: "1",
      name: "Claudia Alves",
      message: "Do more of what you love.",
      time: "3m ago",
      unread: 3,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "2",
      name: "Dani Martinez",
      message: "Do your own thing.",
      time: "5m ago",
      unread: 1,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "3",
      name: "Kimberly Nguyen",
      message: "Kindness is beautiful.",
      time: "1h ago",
      unread: 2,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: "4",
      name: "Mariana Napolitani",
      message: "Live your purpose.",
      time: "2h ago",
      unread: 1,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: "5",
      name: "Olivia Wilson",
      message: "You got this.",
      time: "5h ago",
      unread: 0,
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: "6",
      name: "Rachelle Beaudry",
      message: "You're wonderful.",
      time: "Yesterday",
      unread: 0,
      image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      id: "7",
      name: "Soo Jin Ae",
      message: "Keep it simple.",
      time: "Yesterday",
      unread: 0,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.messageCard}>
      <Image source={{ uri: item.image }} style={styles.avatar} />

      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.time}>{item.time}</Text>

        {item.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.blueShape} />

        <View style={styles.headerContent}>
          <View style={styles.iconCircle}>
            <Ionicons name="mail-outline" size={28} color="#4A66A0" />
            <View style={styles.iconBadge}>
              <Text style={styles.iconBadgeText}>1</Text>
            </View>
          </View>

          <Text style={styles.headerTitle}>Messages & Chat</Text>

          <View style={styles.headerLine} />

          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color="#5E57C8" />
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.actionRow}>
        <Text style={styles.markRead}>Mark all read</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.sort}>Sort by time</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#555" />
        </View>
      </View>

      <ScrollView>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={{ padding: 16 }}
        />
        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#5E57C8" />
          <Text style={styles.navText}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#5E57C8" />
          <Text style={styles.navText}>Chat</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="mail" size={24} color="#5E57C8" />
          <Text style={styles.navText}>Mail</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#5E57C8" />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  headerContainer: {
    height: 180,
    backgroundColor: "#F4F4F4",
    position: "relative",
  },

  blueShape: {
    position: "absolute",
    left: -120,
    top: -120,
    width: 300,
    height: 300,
    backgroundColor: "#3d4eca",
    borderRadius: 150,
  },

  headerContent: {
    marginTop: 60,
    marginRight: 20,
    alignItems: "flex-end",
  },

  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 30,
    top: -20,
  },

  iconBadge: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#5A6CF3",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  iconBadgeText: {
    color: "#fff",
    fontSize: 12,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "500",
    color: "#444",
  },

  headerLine: {
    width: "40%",
    height: 2,
    backgroundColor: "#4A66A0",
    marginTop: 20,
    borderRadius: 2,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 10,
  },

  backButtonText: {
    color: "#5E57C8",
    fontSize: 16,
    marginLeft: 4,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  markRead: {
    color: "#555",
  },

  sort: {
    color: "#555",
  },

  messageCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  name: {
    fontWeight: "bold",
    fontSize: 14,
  },

  message: {
    color: "#777",
    fontSize: 13,
  },

  time: {
    fontSize: 11,
    color: "#999",
  },

  unreadBadge: {
    backgroundColor: "#5E57C8",
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  unreadText: {
    color: "#fff",
    fontSize: 12,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 12,
    color: "#5E57C8",
    marginTop: 4,
  },
});
