
import React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable, Platform } from "react-native";
import { Stack, Link } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";
import { LinearGradient } from "expo-linear-gradient";

export default function StereotypesScreen() {
  const activities = [
    {
      title: "Questionnaire",
      description: "20 questions sur les stéréotypes de genre",
      route: "/stereotypes/quiz",
      icon: "questionmark.circle.fill",
      color: colors.primary,
      count: "20 questions",
    },
    {
      title: "Situations Réelles",
      description: "20 scénarios illustrant les stéréotypes",
      route: "/stereotypes/situations",
      icon: "person.2.fill",
      color: colors.secondary,
      count: "20 situations",
    },
    {
      title: "Vrai ou Faux",
      description: "20 affirmations sur les stéréotypes",
      route: "/stereotypes/game",
      icon: "gamecontroller.fill",
      color: colors.accent,
      count: "20 affirmations",
    },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          title: "Stéréotypes",
          headerShown: Platform.OS === 'ios',
        }}
      />
      <View style={[commonStyles.container]}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            Platform.OS !== 'ios' && styles.scrollContentWithTabBar
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <IconSymbol name="person.2.fill" color={colors.accent} size={48} />
            </View>
            <Text style={styles.headerTitle}>Stéréotypes de Genre</Text>
            <Text style={styles.headerDescription}>
              Les stéréotypes de genre sont des croyances simplifiées sur ce que sont 
              ou devraient être les hommes et les femmes. Apprenez à les identifier 
              et à les déconstruire.
            </Text>
          </View>

          <View style={styles.activitiesContainer}>
            {activities.map((activity, index) => (
              <Link key={index} href={activity.route as any} asChild>
                <Pressable style={styles.activityCard}>
                  <LinearGradient
                    colors={[activity.color, activity.color + 'DD']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.activityGradient}
                  >
                    <View style={styles.activityHeader}>
                      <View style={styles.activityIconContainer}>
                        <IconSymbol name={activity.icon as any} color="#FFFFFF" size={28} />
                      </View>
                      <View style={styles.activityBadge}>
                        <Text style={styles.activityBadgeText}>{activity.count}</Text>
                      </View>
                    </View>
                    <Text style={styles.activityTitle}>{activity.title}</Text>
                    <Text style={styles.activityDescription}>{activity.description}</Text>
                    <View style={styles.activityFooter}>
                      <Text style={styles.activityLink}>Commencer</Text>
                      <IconSymbol name="arrow.right" color="#FFFFFF" size={16} />
                    </View>
                  </LinearGradient>
                </Pressable>
              </Link>
            ))}
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Pourquoi c&apos;est important ?</Text>
            <Text style={styles.infoText}>
              Les stéréotypes de genre limitent le potentiel de chacun en imposant 
              des attentes rigides. Les déconstruire permet à tous de s&apos;épanouir 
              librement, sans être enfermés dans des rôles prédéfinis.
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
    marginBottom: 32,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.accent + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 12,
  },
  headerDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  activitiesContainer: {
    marginBottom: 24,
  },
  activityCard: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  activityGradient: {
    padding: 20,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  activityIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  activityBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  activityTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  activityDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
    marginBottom: 16,
  },
  activityFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  activityLink: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  infoCard: {
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
});
