
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";

interface TabBarContentProps {
    tabs: string[];
    activeTab: string;
    position: "top" | "bottom" | "left" | "right";
    onTabPress: (tab: string) => void;
}

export default function TabBarContent({
                                          tabs,
                                          activeTab,
                                          position,
                                          onTabPress,
                                      }: TabBarContentProps) {
    const isVertical = position === "left" || position === "right";

    return (
        <ThemedView
            style={[
                styles.tabs,
                position === "top" && styles.topTabs,
                position === "bottom" && styles.bottomTabs,
                position === "left" && styles.leftTabs,
                position === "right" && styles.rightTabs,
            ]}
        >
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab}
                    style={[styles.tab, isVertical && styles.verticalTab]}
                    onPress={() => onTabPress(tab)}
                >
                    <View
                        style={[
                            styles.tabView,
                            activeTab === tab &&
                            (position === "top"
                                ? styles.activeTopTab
                                : position === "bottom"
                                    ? styles.activeBottomTab
                                    : position === "left"
                                        ? styles.activeLeftTab
                                        : styles.activeRightTab),
                        ]}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === tab && styles.activeTabText,
                            ]}
                        >
                            {tab}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    tabs: {
        backgroundColor: "#fff",
    },
    bottomTabs: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#eee",
        height: 50,
    },
    topTabs: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        height: 50,
    },
    leftTabs: {
        borderRightWidth: 1,
        borderRightColor: "#eee",
        width: 100,
    },
    rightTabs: {
        borderLeftWidth: 1,
        borderLeftColor: "#eee",
        width: 100,
    },
    tab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    verticalTab: {
        height: 50,
    },
    tabView: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingHorizontal: 8,
    },
    activeTopTab: {
        borderBottomWidth: 2,
        borderBottomColor: "#007AFF",
    },
    activeBottomTab: {
        borderTopWidth: 2,
        borderTopColor: "#007AFF",
    },
    activeLeftTab: {
        borderRightWidth: 2,
        borderRightColor: "#007AFF",
    },
    activeRightTab: {
        borderLeftWidth: 2,
        borderLeftColor: "#007AFF",
    },
    tabText: {
        fontSize: 12,
        color: "#8E8E93",
    },
    activeTabText: {
        color: "#007AFF",
    },
});
