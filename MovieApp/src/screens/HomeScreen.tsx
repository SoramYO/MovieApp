/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
  Dimensions, ActivityIndicator, ScrollView, StatusBar,
} from 'react-native';
import { COLORS, SPACING } from '../theme/theme';

import {
  upcomingMovies,
  nowPlayingMovies,
  popularMovies,
  baseImagePath,
}
  from '../api/apicalls';
import InputHeader from '../components/InputHeader';

const { width, height } = Dimensions.get('window');
const getNowPlayingMoviesList = async () => {
  try {
    let response = await fetch(nowPlayingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log('Something went wrong in getNowPlayingMoviesList', error);
  }
};
const getUpComingMovieList = async () => {
  try {
    let response = await fetch(upcomingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log('Something went wrong in getUpComingMovieList', error);
  }
};
const getNowPopularMoviesList = async () => {
  try {
    let response = await fetch(popularMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log('Something went wrong in getNowPopularMoviesList', error);
  }
};
const HomeScreen = ({ navigation }: any) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any>(undefined);
  const [popularMovies, setPopularMoviesList] = useState<any>(undefined);
  const [upcomingMovies, setUpcomingMoviesList] = useState<any>(undefined);
  useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingMoviesList();
      setNowPlayingMovies({ ...tempNowPlaying.results });

      let tempUpcoming = await getUpComingMovieList();
      setUpcomingMoviesList({ ...tempUpcoming.results });

      let tempPopular = await getNowPopularMoviesList();
      setPopularMoviesList({ ...tempPopular.results });
    })();
  }, []);

  const searchMovieFunction = () => {
    navigation.navigate('Search');
  };
  if (
    nowPlayingMovies === undefined && nowPlayingMovies == null
    && popularMovies === undefined && popularMovies == null
    && upcomingMovies === undefined && upcomingMovies == null
  ) {
    return (
      <ScrollView style={styles.container} bounces={false}
        contentContainerStyle={styles.scollViewContainer}>
        <StatusBar hidden />

        <View style={styles.InputHeaderContainer} >
          <InputHeader searchFuntion={searchMovieFunction} />
        </View>


        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.Orange} />
        </View>

      </ScrollView>
    );
  }
  return (
    <ScrollView style={styles.container} bounces={false}
      contentContainerStyle={styles.scollViewContainer}>
      <StatusBar hidden />

      <View style={styles.InputHeaderContainer} >
        <InputHeader searchFuntion={searchMovieFunction} />
      </View>


      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={COLORS.Orange} />
      </View>

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
  },
  scollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
});

export default HomeScreen;
