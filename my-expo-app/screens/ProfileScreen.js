import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useAppContext } from "../contexts/AppContext";

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
          John Doe
        </Text>
        <Text
          style={[
            styles.title,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Senior Software Developer
        </Text>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          About Me
        </Text>
        <Text
          style={[
            styles.sectionContent,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Passionate software developer with 5+ years of experience in building
          scalable web and mobile applications. Specialized in React Native,
          JavaScript, and modern web technologies.
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
          • Senior Developer at TechCorp (2022-Present)
          {"\n"}• Full Stack Developer at StartupXYZ (2020-2022)
          {"\n"}• Junior Developer at WebSolutions (2019-2020)
        </Text>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Skills
        </Text>
        <Text
          style={[
            styles.sectionContent,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          React Native • JavaScript • TypeScript • Node.js • Python • AWS • Git
          • CI/CD
        </Text>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Education
        </Text>
        <Text
          style={[
            styles.sectionContent,
            state.theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Bachelor of Computer Science - University of Technology (2015-2019)
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
          Email: john.doe@example.com
          {"\n"}
          Phone: +1 (555) 123-4567
          {"\n"}
          LinkedIn: linkedin.com/in/johndoe
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
