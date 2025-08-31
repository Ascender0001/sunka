import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { useAppContext } from "../contexts/AppContext";
import HouseListing from "../components/HouseListing";

export default function HomeScreen({ navigation }) {
  const { state, actions } = useAppContext();
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minBedrooms: "",
    minBathrooms: "",
    maxPrice: "",
    furnishingStatus: "",
  });

  useEffect(() => {
    const loadHouses = () => {
      try {
        const response = require("../assets/data.json");
        setHouses(response);
        setFilteredHouses(response);
      } catch (error) {
        console.error("Error loading houses data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHouses();
  }, []);

  useEffect(() => {
    if (houses.length === 0) return;

    let filtered = houses.filter((house) => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const featuresString =
          `${house.area} ${house.bedrooms} ${house.bathrooms} ${house.stories} ${house.parking} ${house.mainroad} ${house.guestroom} ${house.basement} ${house.hotwaterheating} ${house.airconditioning} ${house.prefarea} ${house.furnishingstatus}`.toLowerCase();

        if (!featuresString.includes(query)) {
          return false;
        }
      }

      // Numeric filters
      if (
        filters.minBedrooms &&
        house.bedrooms < parseInt(filters.minBedrooms)
      ) {
        return false;
      }
      if (
        filters.minBathrooms &&
        house.bathrooms < parseInt(filters.minBathrooms)
      ) {
        return false;
      }
      if (filters.maxPrice && house.price > parseInt(filters.maxPrice)) {
        return false;
      }
      if (
        filters.furnishingStatus &&
        house.furnishingstatus !== filters.furnishingStatus
      ) {
        return false;
      }

      return true;
    });

    setFilteredHouses(filtered);
  }, [searchQuery, filters, houses]);

  if (loading) {
    return (
      <View
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
          Loading houses...
        </Text>
      </View>
    );
  }

  return (
    <View
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
        Houses for Sale
      </Text>

      {/* Search Bar */}
      <TextInput
        style={[
          styles.searchInput,
          state.theme === "dark" ? styles.darkInput : styles.lightInput,
        ]}
        placeholder="Search by features, area, bedrooms..."
        placeholderTextColor={state.theme === "dark" ? "#bdc3c7" : "#7f8c8d"}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Filter Toggle Button */}
      <TouchableOpacity
        style={styles.filterToggleButton}
        onPress={() => setShowFilters(!showFilters)}
      >
        <Text style={styles.filterToggleText}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Text>
      </TouchableOpacity>

      {/* Filters Section - Conditionally Rendered */}
      {showFilters && (
        <View style={styles.filtersMenu}>
          <View style={styles.filtersContainer}>
            <TextInput
              style={[
                styles.filterInput,
                state.theme === "dark" ? styles.darkInput : styles.lightInput,
              ]}
              placeholder="Min Bedrooms"
              placeholderTextColor={
                state.theme === "dark" ? "#bdc3c7" : "#7f8c8d"
              }
              value={filters.minBedrooms}
              onChangeText={(text) =>
                setFilters({ ...filters, minBedrooms: text })
              }
              keyboardType="numeric"
            />
            <TextInput
              style={[
                styles.filterInput,
                state.theme === "dark" ? styles.darkInput : styles.lightInput,
              ]}
              placeholder="Min Bathrooms"
              placeholderTextColor={
                state.theme === "dark" ? "#bdc3c7" : "#7f8c8d"
              }
              value={filters.minBathrooms}
              onChangeText={(text) =>
                setFilters({ ...filters, minBathrooms: text })
              }
              keyboardType="numeric"
            />
            <TextInput
              style={[
                styles.filterInput,
                state.theme === "dark" ? styles.darkInput : styles.lightInput,
              ]}
              placeholder="Max Price"
              placeholderTextColor={
                state.theme === "dark" ? "#bdc3c7" : "#7f8c8d"
              }
              value={filters.maxPrice}
              onChangeText={(text) =>
                setFilters({ ...filters, maxPrice: text })
              }
              keyboardType="numeric"
            />
          </View>

          <View style={styles.furnishingFilter}>
            <Text
              style={[
                styles.filterLabel,
                state.theme === "dark" ? styles.darkText : styles.lightText,
              ]}
            >
              Furnishing:
            </Text>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.furnishingStatus === "" && styles.activeFilterButton,
              ]}
              onPress={() => setFilters({ ...filters, furnishingStatus: "" })}
            >
              <Text style={styles.filterButtonText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.furnishingStatus === "furnished" &&
                  styles.activeFilterButton,
              ]}
              onPress={() =>
                setFilters({ ...filters, furnishingStatus: "furnished" })
              }
            >
              <Text style={styles.filterButtonText}>Furnished</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.furnishingStatus === "semi-furnished" &&
                  styles.activeFilterButton,
              ]}
              onPress={() =>
                setFilters({ ...filters, furnishingStatus: "semi-furnished" })
              }
            >
              <Text style={styles.filterButtonText}>Semi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.furnishingStatus === "unfurnished" &&
                  styles.activeFilterButton,
              ]}
              onPress={() =>
                setFilters({ ...filters, furnishingStatus: "unfurnished" })
              }
            >
              <Text style={styles.filterButtonText}>Unfurnished</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <Text
        style={[
          styles.resultsCount,
          state.theme === "dark"
            ? styles.darkSecondaryText
            : styles.lightSecondaryText,
        ]}
      >
        Showing {filteredHouses.length} of {houses.length} houses
      </Text>

      <FlatList
        data={filteredHouses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <HouseListing house={item} />}
        contentContainerStyle={styles.listContent}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  list: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  lightText: {
    color: "#000000",
  },
  darkText: {
    color: "#ffffff",
  },
  lightSecondaryText: {
    color: "#7f8c8d",
  },
  darkSecondaryText: {
    color: "#bdc3c7",
  },
  counter: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 60,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
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
  themeButton: {
    backgroundColor: "#34C759",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  themeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchInput: {
    height: 55,
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "500",
  },
  lightInput: {
    backgroundColor: "#f8f9fa",
    borderColor: "#e9ecef",
    color: "#212529",
  },
  darkInput: {
    backgroundColor: "#2d2d2d",
    borderColor: "#495057",
    color: "#f8f9fa",
  },
  filtersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 20,
  },
  filterInput: {
    height: 45,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    minWidth: 120,
    fontSize: 14,
    fontWeight: "500",
  },
  furnishingFilter: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 15,
    fontWeight: "600",
    marginRight: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    backgroundColor: "#e9ecef",
  },
  activeFilterButton: {
    backgroundColor: "#0d6efd",
  },
  filterButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#495057",
  },
  resultsCount: {
    fontSize: 14,
    marginBottom: 15,
    fontStyle: "italic",
    opacity: 0.8,
  },
  filterToggleButton: {
    backgroundColor: "#0d6efd",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  filterToggleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  filtersMenu: {
    marginBottom: 20,
  },
});
