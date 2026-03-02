import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Template02({ navigation }) {
  const categories = [
    { id: "1", title: "Resort", icon: "umbrella-beach" },
    { id: "2", title: "Homestay", icon: "home" },
    { id: "3", title: "Hotel", icon: "hotel" },
    { id: "4", title: "Lodge", icon: "building" },
    { id: "5", title: "Villa", icon: "house-user" },
    { id: "6", title: "Apartment", icon: "city" },
    { id: "7", title: "Hostel", icon: "bed" },
    { id: "8", title: "See all", icon: "th-large" },
  ];

  const destinations = [
    {
      id: "1",
      image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
    },
  ];

  const recommended = [
    {
      id: "1",
      image: "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg",
    },
    {
      id: "2",
      image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    },
  ];

  const renderizarCategoria = ({ item }) => (
    <View style={styles.categoryItem}>
      <View style={styles.categoryCircle}>
        <FontAwesome5 name={item.icon} size={22} color="#fff" />
      </View>
      <Text style={styles.categoryText}>{item.title}</Text>
    </View>
  );

  const renderizarDestino = ({ item }) => (
    <Image source={{ uri: item.image }} style={styles.imageCard} />
  );

  const renderizarRecomendacao = ({ item }) => (
    <Image source={{ uri: item.image }} style={styles.recommendedCard} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#999" />
            <TextInput
              placeholder="Search here..."
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={20} color="#fff" />
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
        </View>

        <View style={styles.profileRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="person-circle" size={40} color="#fff" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.welcome}>Welcome!</Text>
              <Text style={styles.name}>Donna Stroupe</Text>
            </View>
          </View>

          <Pressable style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </Pressable>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Category</Text>
          <MaterialIcons name="menu" size={24} color="#5A5A5A" />
        </View>

        <FlatList
          data={categories}
          renderItem={renderizarCategoria}
          keyExtractor={(item) => item.id}
          numColumns={4}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <MaterialIcons name="menu" size={24} color="#5A5A5A" />
        </View>

        <FlatList
          data={destinations}
          renderItem={renderizarDestino}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended</Text>
        </View>

        <FlatList
          data={recommended}
          renderItem={renderizarRecomendacao}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="home" size={24} color="#FFD54F" />
          <Text style={[styles.navText, { color: "#FFD54F" }]}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="compass-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Explore</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="search-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Search</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },

  header: {
    backgroundColor: "#5E57C8",
    padding: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },

  searchBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
    flex: 1,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 20,
  },

  backButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 4,
  },

  input: {
    marginLeft: 8,
    flex: 1,
  },

  profileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    color: "#fff",
    fontSize: 14,
  },

  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  notificationButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 8,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  categoryItem: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },

  categoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#5E57C8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  categoryText: {
    fontSize: 12,
  },

  imageCard: {
    width: 140,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
  },

  recommendedCard: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 15,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#5E57C8",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
});
