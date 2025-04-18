
import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import TabBarContent from "@/components/ui/TabLayout/TabBarContent";

interface TabLayoutProps {
    tabs: string[];
    activeTab: string;
    position?: "top" | "bottom" | "left" | "right";
    onTabChange: (tab: string) => void;
    children: React.ReactNode;
}

export default function TabLayout({
                                      tabs,
                                      activeTab,
                                      position = "top",
                                      onTabChange,
                                      children
                                  }: TabLayoutProps) {
    const isVertical = position === "left" || position === "right";

    return (
        <ThemedView
            style={[styles.container, isVertical && styles.horizontalContainer]}
        >
            {(position === "top" || position === "left") && (
                <TabBarContent
                    tabs={tabs}
                    activeTab={activeTab}
                    position={position}
                    onTabPress={onTabChange}
                />
            )}
            <ThemedView style={styles.content}>
                {children}
            </ThemedView>
            {(position === "bottom" || position === "right") && (
                <TabBarContent
                    tabs={tabs}
                    activeTab={activeTab}
                    position={position}
                    onTabPress={onTabChange}
                />
            )}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    horizontalContainer: {
        flexDirection: "row",
    },
    content: {
        flex: 1,
    }
});
