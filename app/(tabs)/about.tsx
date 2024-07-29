import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { webLink } from '@/constants';

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image source={require('@/assets/images/logo.jpg')} style={styles.headerImage} />}
    >
      <ScrollView style={styles.contentContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type='title'>X-Ticket</ThemedText>
        </ThemedView>

        <ThemedText style={styles.tagline}>Unlock unforgettable experiences with X-Ticket.</ThemedText>

        <ThemedText style={styles.description}>
          X-Ticket, is a revolutionary digital platform for buying, selling, and reselling event tickets. We utilize blockchain technology to authenticate and verify every ticket transaction, addressing the significant issues of ticket fraud and scalping that undermine trust in traditional event ticketing systems.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>Our Mission</ThemedText>
        <ThemedText style={styles.description}>
          We're committed to creating a seamless, secure, and user-friendly experience for both event organizers and attendees. Our platform simplifies the ticket purchasing process while providing transparency and reliability.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>Key Features</ThemedText>
        <ThemedText style={styles.description}>
          • Blockchain-based ticket authentication{'\n'}
          • Streamlined purchasing process{'\n'}
          • Safe and reliable reselling platform{'\n'}
          • Exclusive ticket offers and promotions{'\n'}
          • Support for niche events and emerging artists
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>Our Vision</ThemedText>
        <ThemedText style={styles.description}>
          X-Ticket aims to revolutionize the event ticketing industry by leveraging technology to create trust, simplicity, and accessibility. We're not just a ticketing platform; we're your gateway to unforgettable experiences.
        </ThemedText>

        <ThemedView style={styles.footerText}>
          <ThemedText>Explore our web version for more details: {" "}</ThemedText>
          <ExternalLink href={webLink}>
            <ThemedText type="link">X-Ticket Website</ThemedText>
          </ExternalLink>
        </ThemedView>
        <ThemedText style={styles.ownerText}>BAHATI Pierre (CEO of XTICKET)</ThemedText>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  contentContainer: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  tagline: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    marginBottom: 16,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  footerText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 24,
  },
  ownerText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 24,
  }
});