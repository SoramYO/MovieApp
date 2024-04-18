/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';


const componentName = (props: any) => {
    return (
        <View
            style={[
                styles.container,
                props.shoudlMarginAtEnd
                    ? props.isFirst
                        ? { marginLeft: SPACING.space_24 }
                        : props.isLast
                            ? { marginRight: SPACING.space_24 }
                            : {}
                    : {},
                { maxWidth: props.cardWidth },
            ]}>
            <Image source={{ uri: props.imagePath }} style={[styles.cardImage,{width: props.cardWidth}]} />
            <Text style={styles.title} numberOfLines={1}> {props.title}</Text>
            <Text style={styles.subtitle} numberOfLines={1}> {props.subtitle}</Text>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    cardImage: {
        aspectRatio: 1920/2880,
        borderRadius: BORDERRADIUS.radius_25 * 4,
    },
    title:{
        alignSelf: 'stretch',
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_10,
        color: COLORS.White,
    },
    subtitle:{
        alignSelf: 'stretch',
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_8,
        color: COLORS.White,
    },
});

export default componentName;
