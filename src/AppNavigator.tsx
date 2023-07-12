/**
 * Generated with the Lezzmo Razzle Treact Natigation template
 * https://github.com/lezzmo/razzle-treact-natigation
 *
 * @format
 */

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, ScrollView } from 'react-navigation';
import { createStackNavigator, NavigationStackScreenProps } from 'react-navigation-stack';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    padding: 32,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

class HomeScreen extends React.Component<NavigationStackScreenProps<{}>> {
  render() {
    const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;

    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {!usingHermes ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step One</Text>
            <Text style={styles.sectionDescription}>
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Learn More</Text>
            <Text style={styles.sectionDescription}>
              Read the docs to discover what to do next.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Details')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

class DetailsScreen extends React.Component<NavigationStackScreenProps<{}>> {
  render() {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step Two</Text>
            <Text style={styles.sectionDescription}>
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
}, {
  initialRouteName: 'Home'
});
