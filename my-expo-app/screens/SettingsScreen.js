import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { useAppContext } from "../contexts/AppContext";

export default function SettingsScreen({ navigation }) {
  const { state, actions } = useAppContext();

  const settingsSections = [
    {
      title: "Appearance",
      settings: [
        {
          label: "Dark Mode",
          type: "switch",
          value: state.theme === "dark",
          onValueChange: actions.toggleTheme,
        },
        {
          label: "Font Size",
          type: "option",
          value: "Medium",
          options: ["Small", "Medium", "Large"],
        },
      ],
    },
    {
      title: "Notifications",
      settings: [
        {
          label: "Email Notifications",
          type: "switch",
          value: true,
          onValueChange: () => console.log("Email notifications toggled"),
        },
        {
          label: "Push Notifications",
          type: "switch",
          value: false,
          onValueChange: () => console.log("Push notifications toggled"),
        },
        {
          label: "New Listing Alerts",
          type: "switch",
          value: true,
          onValueChange: () => console.log("New listing alerts toggled"),
        },
      ],
    },
    {
      title: "Search Preferences",
      settings: [
        {
          label: "Default Sort By",
          type: "option",
          value: "Price: Low to High",
          options: [
            "Price: Low to High",
            "Price: High to Low",
            "Newest First",
            "Area",
          ],
        },
        {
          label: "Save Search History",
          type: "switch",
          value: true,
          onValueChange: () => console.log("Search history toggled"),
        },
      ],
    },
    {
      title: "Data & Storage",
      settings: [
        {
          label: "Clear Cache",
          type: "action",
          onPress: () => console.log("Cache cleared"),
        },
        {
          label: "Reset Preferences",
          type: "action",
          onPress: () => console.log("Preferences reset"),
        },
      ],
    },
    {
      title: "About",
      settings: [
        {
          label: "App Version",
          type: "info",
          value: "1.2.0",
        },
        {
          label: "Privacy Policy",
          type: "action",
          onPress: () => console.log("Privacy policy opened"),
        },
        {
          label: "Terms of Service",
          type: "action",
          onPress: () => console.log("Terms opened"),
        },
        {
          label: "Contact Support",
          type: "action",
          onPress: () => console.log("Support contacted"),
        },
      ],
    },
  ];

  const renderSetting = (setting, index) => {
    switch (setting.type) {
      case "switch":
        return (
          <View key={index} style={styles.settingRow}>
            <Text
              style={[
                styles.settingLabel,
                state.theme === "dark" ? styles.darkText : styles.lightText,
              ]}
            >
              {setting.label}
            </Text>
            <Switch
              value={setting.value}
              onValueChange={setting.onValueChange}
              trackColor={{ false: "#767577", true: "#0d6efd" }}
              thumbColor={setting.value ? "#ffffff" : "#f4f3f4"}
            />
          </View>
        );
      case "option":
        return (
          <TouchableOpacity
            key={index}
            style={styles.settingRow}
            onPress={() => console.log("Option selected")}
          >
            <Text
              style={[
                styles.settingLabel,
                state.theme === "dark" ? styles.darkText : styles.lightText,
              ]}
            >
              {setting.label}
            </Text>
            <Text
              style={[
                styles.optionValue,
                state.theme === "dark"
                  ? styles.darkSecondaryText
                  : styles.lightSecondaryText,
              ]}
            >
              {setting.value} ›
            </Text>
          </TouchableOpacity>
        );
      case "action":
        return (
          <TouchableOpacity
            key={index}
            style={styles.settingRow}
            onPress={setting.onPress}
          >
            <Text
              style={[
                styles.settingLabel,
                state.theme === "dark" ? styles.darkText : styles.lightText,
              ]}
            >
              {setting.label}
            </Text>
          </TouchableOpacity>
        );
      case "info":
        return (
          <View key={index} style={styles.settingRow}>
            <Text
              style={[
                styles.settingLabel,
                state.theme === "dark" ? styles.darkText : styles.lightText,
              ]}
            >
              {setting.label}
            </Text>
            <Text
              style={[
                styles.infoValue,
                state.theme === "dark"
                  ? styles.darkSecondaryText
                  : styles.lightSecondaryText,
              ]}
            >
              {setting.value}
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView
      style={[
        styles.container,
        state.theme === "dark" ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <Text
        style={[
          styles.title,
          state.theme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        Settings
      </Text>

      {settingsSections.map((section, sectionIndex) => (
        <View key={sectionIndex} style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              state.theme === "dark" ? styles.darkText : styles.lightText,
            ]}
          >
            {section.title}
          </Text>
          <View style={styles.sectionContent}>
            {section.settings.map((setting, index) =>
              renderSetting(setting, index)
            )}
          </View>
        </View>
      ))}

      <Text
        style={[
          styles.footerText,
          state.theme === "dark"
            ? styles.darkSecondaryText
            : styles.lightSecondaryText,
        ]}
      >
        © 2024 House Finder App. All rights reserved.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  lightText: {
    color: "#000000",
  },
  darkText: {
    color: "#ffffff",
  },
  lightSecondaryText: {
    color: "#666666",
  },
  darkSecondaryText: {
    color: "#cccccc",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    paddingLeft: 10,
  },
  sectionContent: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 12,
    padding: 5,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  optionValue: {
    fontSize: 14,
    opacity: 0.8,
  },
  infoValue: {
    fontSize: 14,
    opacity: 0.8,
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 40,
    opacity: 0.7,
  },
});
