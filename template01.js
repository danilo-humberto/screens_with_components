import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Template01({ navigation }) {
  const categories = [
    { id: "1", title: "Consultation", icon: "people-outline" },
    { id: "2", title: "Dentist", icon: "medkit-outline" },
    { id: "3", title: "Cardiologist", icon: "heart-outline" },
    { id: "4", title: "Hospital", icon: "business-outline" },
    { id: "5", title: "Emergency", icon: "car-outline" },
    { id: "6", title: "Laboratory", icon: "flask-outline" },
  ];

  const doctors = [
    {
      id: "1",
      name: "dr. Olivia Wilson",
      specialty: "Consultant - Physiotherapy",
    },
    {
      id: "2",
      name: "dr. Jonathan Patterson",
      specialty: "Consultant - Internal Medicine",
    },
  ];

  const renderizarCategoria = ({ item }) => (
    <View style={styles.categoryCard}>
      <Ionicons name={item.icon} size={28} color="#5A6CF3" />
      <Text style={styles.categoryText}>{item.title}</Text>
    </View>
  );

  const renderizarDoutor = ({ item }) => (
    <View style={styles.doctorCard}>
      <Ionicons name="person-circle" size={60} color="#ccc" />

      <View style={{ marginLeft: 12 }}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#FFC107" />
          <Text style={styles.rating}>4.9 (37 Reviews)</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View style={styles.profile}>
            <Ionicons name="person-circle" size={50} color="#fff" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.name}>Dani Martinez</Text>
            </View>
          </View>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color="#fff" />
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
        </View>

        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search doctor"
            placeholderTextColor="#888"
            style={styles.input}
          />
          <Ionicons name="search" size={20} color="#5A6CF3" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.showAll}>Show All</Text>
        </View>

        <FlatList
          data={categories}
          renderItem={renderizarCategoria}
          keyExtractor={(item) => item.id}
          numColumns={3}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top doctors</Text>
        </View>

        <FlatList
          data={doctors}
          renderItem={renderizarDoutor}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="home" size={24} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="people-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Doctors</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="calendar-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Appointment</Text>
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
    backgroundColor: "#F3F4F6",
  },

  header: {
    backgroundColor: "#5A6CF3",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  backButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 4,
  },

  welcome: {
    color: "#fff",
    fontSize: 14,
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  searchBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  input: {
    flex: 1,
    fontSize: 14,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  showAll: {
    color: "#5A6CF3",
    fontSize: 14,
  },

  categoryCard: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 6,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  categoryText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
  },

  doctorCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },

  doctorName: {
    fontWeight: "bold",
    fontSize: 14,
  },

  specialty: {
    fontSize: 12,
    color: "#666",
    marginVertical: 4,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: {
    marginLeft: 4,
    fontSize: 12,
    color: "#666",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#5A6CF3",
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
