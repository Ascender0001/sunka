import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppContext } from "../contexts/AppContext";

const HouseListing = ({ house }) => {
  const { state } = useAppContext();

  return (
    <View
      style={[
        styles.container,
        state.theme === "dark" ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <Text
        style={[
          styles.price,
          state.theme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        $
        {typeof house.price === "number"
          ? house.price.toLocaleString()
          : house.price}
      </Text>
      <Text
        style={[
          styles.details,
          state.theme === "dark"
            ? styles.darkSecondaryText
            : styles.lightSecondaryText,
        ]}
      >
        {house.area} sq ft • {house.bedrooms} bed • {house.bathrooms} bath
      </Text>
      <Text
        style={[
          styles.details,
          state.theme === "dark"
            ? styles.darkSecondaryText
            : styles.lightSecondaryText,
        ]}
      >
        {house.stories} stories • Parking: {house.parking}
      </Text>
      <View style={styles.featuresContainer}>
        <Text
          style={[
            styles.features,
            state.theme === "dark"
              ? styles.darkFeaturesText
              : styles.lightFeaturesText,
          ]}
        >
          {house.mainroad === "yes" ? "Main Road • " : ""}
          {house.guestroom === "yes" ? "Guest Room • " : ""}
          {house.basement === "yes" ? "Basement • " : ""}
          {house.hotwaterheating === "yes" ? "Hot Water • " : ""}
          {house.airconditioning === "yes" ? "AC • " : ""}
          {house.prefarea === "yes" ? "Preferred Area • " : ""}
          Furnished: {house.furnishingstatus}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginVertical: 12,
    marginHorizontal: 0,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#2a2a2a",
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  lightText: {
    color: "#1a1a1a",
  },
  darkText: {
    color: "#ffffff",
  },
  details: {
    fontSize: 16,
    marginBottom: 6,
    lineHeight: 20,
  },
  lightSecondaryText: {
    color: "#666666",
  },
  darkSecondaryText: {
    color: "#cccccc",
  },
  featuresContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1.5,
    borderTopColor: "rgba(0,0,0,0.15)",
  },
  features: {
    fontSize: 14,
    lineHeight: 18,
  },
  lightFeaturesText: {
    color: "#888888",
  },
  darkFeaturesText: {
    color: "#aaaaaa",
  },
});

export default HouseListing;
