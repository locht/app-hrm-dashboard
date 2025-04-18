import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import TabLayout from "@/components/ui/TabLayout/index";
import ProductList from "@/app/pages/tabs/ProductList";
import CounterDemo from "@/app/pages/tabs/CouterDemo";
import NewTabUseMobx from "@/app/pages/tabs/NewTabUseMobx";
import FollowingUseContext from "@/app/pages/tabs/FollowingUseContext";

const TabContent = ({ activeTab }: { activeTab: string }) => {
    if (activeTab === "Featured") {
        return <CounterDemo />;
    }
    if (activeTab === "Popular") {
        return <ProductList />;
    }
    if (activeTab === "New") {
        return <NewTabUseMobx />;
    }
    if (activeTab === "Following") {
        return <FollowingUseContext />;
    }
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
