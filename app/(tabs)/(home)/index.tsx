
import React from "react";
import { Stack, Link } from "expo-router";
import { ScrollView, Pressable, StyleSheet, View, Text, Platform } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const sections = [
    {
      title: "Consentement",
      description: "Comprendre et respecter le consentement dans toutes les situations",
      route: "/(tabs)/consent",
      color: colors.primary,
      icon: "hand.raised.fill",
    },
    {
      title: "Égalité Hommes-Femmes",
      description: "Promouvoir l'égalité des genres dans tous les aspects de la vie",
      route: "/(tabs)/equality",
      color: colors.secondary,
      icon: "equal.circle.fill",
    },
    {
      title: "Stéréotypes",
      description: "Identifier et déconstruire les stéréotypes de genre",
      route: "/(tabs)/stereotypes",
      color: colors.accent,
      icon: "person.2.fill",
    },
  ];

  const renderHeaderRight = () => (
    <View style={styles.headerButtonContainer}>
      <IconSymbol name="info.circle" color={colors.primary} size={24} />
    </View>
  );

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "EgaDarras 🩷",
            headerRight: renderHeaderRight,
          }}
        />
      )}
      <View style={[commonStyles.container]}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            Platform.OS !== 'ios' && styles.scrollContentWithTabBar
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>EgaDarras 🩷</Text>
            <Text style={styles.headerSubtitle}>
              Apprendre ensemble pour un monde plus égalitaire
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>60+</Text>
              <Text style={styles.statLabel}>Activités</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Thèmes</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Gratuit</Text>
            </View>
          </View>

          <View style={styles.sectionsContainer}>
            {sections.map((section, index) => (
              <Link key={index} href={section.route as any} asChild>
                <Pressable style={styles.sectionCard}>
                  <LinearGradient
                    colors={[section.color, section.color + 'CC']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.sectionGradient}
                  >
                    <View style={styles.sectionIconContainer}>
                      <IconSymbol name={section.icon as any} color="#FFFFFF" size={32} />
                    </View>
                    <View style={styles.sectionContent}>
                      <Text style={styles.sectionTitle}>{section.title}</Text>
                      <Text style={styles.sectionDescription}>{section.description}</Text>
                    </View>
                    <IconSymbol name="chevron.right" color="#FFFFFF" size={20} />
                  </LinearGradient>
                </Pressable>
              </Link>
            ))}
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>À propos d&apos;EgaDarras</Text>
            <Text style={styles.infoText}>
              EgaDarras est une application pédagogique conçue pour sensibiliser aux questions 
              de consentement, d&apos;égalité hommes-femmes et de stéréotypes de genre. 
              À travers des jeux, des questionnaires et des exemples de situations réelles, 
              vous développerez une meilleure compréhension de ces enjeux essentiels.
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  scrollContentWithTabBar: {
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  sectionsContainer: {
    marginBottom: 24,
  },
  sectionCard: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  sectionGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  sectionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  sectionContent: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
  },
  infoSection: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  headerButtonContainer: {
    padding: 6,
  },
});
