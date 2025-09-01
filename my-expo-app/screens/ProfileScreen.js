import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useAppContext } from "../contexts/AppContext";
import profile from "../assets/profile.png";

export default function ProfileScreen({ navigation }) {
  const { state } = useAppContext();

  return (
    <ScrollView
      style={[
        styles.scrollContainer,
        state.theme === "dark" ? styles.darkContainer : styles.lightContainer,
      ]}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Text
          style={[
            styles.name,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Prágai Dominik
        </Text>
        <Text
          style={[
            styles.title,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          2nd Year Computer Science Student
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={profile} style={styles.profileImage} />
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          About myself
        </Text>
        <Text
          style={[
            styles.sectionContent,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          In School with little experience and some high school experinece to go
          with in all things its about 2.5 years of studying and some work.
        </Text>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Experience
        </Text>
        <Text
          style={[
            styles.sectionContent,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          • all time experience (2021-Present)
          {"\n"}• VTS experience(2023-2025)
          {"\n"}• highschool experinece(2021-2023)
        </Text>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Hobbys
        </Text>
        <Text
          style={[
            styles.sectionContent,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Football and fixing PCs
        </Text>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Contact
        </Text>
        <Text
          style={[
            styles.sectionContent,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Email: dominikpragai17@gmail.com
          {"\n"}
          Phone: 064 ***
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    paddingTop: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    opacity: 0.8,
  },
  lightText: {
    color: "#000000",
  },
  darkText: {
    color: "#ffffff",
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#5856D6",
    paddingBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 22,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#5856D6",
  },
  info: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  navButton: {
    backgroundColor: "#5856D6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    minWidth: 200,
    alignItems: "center",
  },
  navButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
