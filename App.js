
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>

        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            style={styles.profileImage}
          />

          {/* Green Check */}
          <View style={styles.checkContainer}>
            <Text style={styles.check}>✓</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Name */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Salitha</Text>
        </View>

        {/* Email */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Email</Text>

          <View style={styles.emailRow}>
            <Text style={styles.emailIcon}>✉</Text>
            <Text style={styles.value}>
              salithad889@gmail.com
            </Text>
          </View>
        </View>

        {/* Points */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Points</Text>

          <View style={styles.pointsRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.value}>0</Text>
          </View>
        </View>

      </View>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  /* Header */
  header: {
    height: 58,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  /* Main Content */
  content: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 15,
  },

  /* Profile Picture */
  profileImageContainer: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#eeeeee",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 12,
  },

  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },

  /* Green Check */
  checkContainer: {
    position: "absolute",
    right: 2,
    bottom: 5,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  check: {
    color: "#20c463",
    fontSize: 25,
    fontWeight: "bold",
  },

  /* Divider */
  divider: {
    height: 1,
    backgroundColor: "#333333",
    width: "100%",
    marginBottom: 12,
  },

  /* Information */
  infoSection: {
    marginBottom: 17,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 6,
  },

  value: {
    fontSize: 13,
    color: "#222222",
  },

  /* Email */
  emailRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  emailIcon: {
    fontSize: 15,
    marginRight: 7,
    color: "#222222",
  },

  /* Points */
  pointsRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  star: {
    fontSize: 16,
    color: "#000000",
    marginRight: 9,
  },

  /* Floating Button */
  addButton: {
    position: "absolute",
    right: 18,
    bottom: 18,

    width: 58,
    height: 58,

    borderRadius: 29,
    backgroundColor: "#000000",

    justifyContent: "center",
    alignItems: "center",

    elevation: 6,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  addText: {
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "300",
    marginTop: -2,
  },
});