import React, { useState, useRef } from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { webLink } from '@/constants';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const webViewRef = useRef(null);

  const handleLoadEnd = () => {
    setLoading(false);
    setRefreshing(false);
  };

  // @ts-ignore
  const handleError = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    setError(nativeEvent);
    setLoading(false);
    setRefreshing(false);
  };

  const handleReload = () => {
    setLoading(true);
    setError(null);
    if (webViewRef.current) {
      // @ts-ignore
      webViewRef.current.reload();
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    handleReload();
  };

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Oops! Something went wrong.</Text>
        <Text style={styles.errorSubText}>
          {(error as any).description || "Unable to load the page."}
        </Text>
        <TouchableOpacity style={styles.reloadButton} onPress={handleReload}>
          <Text style={styles.reloadButtonText}>Reload</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <WebView
          ref={webViewRef}
          style={styles.webView}
          source={{ uri: webLink }}
          onLoadEnd={handleLoadEnd}
          onError={handleError}
          pullToRefreshEnabled={true}
          onScroll={({ nativeEvent }) => {
            if (nativeEvent.contentOffset.y <= -50) {
              onRefresh();
            }
          }}
        />
      </ScrollView>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
          <ThemedText>X-Ticket loading...</ThemedText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  errorSubText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  reloadButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  reloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});