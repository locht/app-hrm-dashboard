import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import TabLayout from "@/components/ui/TabLayout/index";

const TabContent = ({ activeTab }: { activeTab: string }) => {
    // if (activeTab === "Featured") {
    //     return <Components />;
    // }
    return (
        <ThemedView style={styles.defaultTabContent}>
            <Text style={styles.tabContentText}>{activeTab} Content</Text>
        </ThemedView>
    );
};

interface TabScreenProps {
    position?: "top" | "bottom" | "left" | "right";
}

export default function TabScreen({
                                          position = "top",
                                      }: TabScreenProps) {
    const [activeTab, setActiveTab] = useState("Featured");
    const tabs = ["Featured", "Popular", "New", "Following"];

    return (
        <TabLayout
            tabs={tabs}
            activeTab={activeTab}
            position={position}
            onTabChange={setActiveTab}
        >
            <TabContent activeTab={activeTab} />
        </TabLayout>
    );
}

const styles = StyleSheet.create({
    defaultTabContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tabContentText: {
        fontSize: 20,
    },
});
