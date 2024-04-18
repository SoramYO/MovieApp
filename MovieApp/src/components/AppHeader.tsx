/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
//import CustomIcon from './CustomIcon';
import CustomIcon from 'react-native-vector-icons/FontAwesome';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
const AppHeader = (props: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style = {styles.iconBG} onPress={() => props.action()}>
                <CustomIcon name={props.name} style={styles.iconStyle} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{props.header}</Text>
            <View style={styles.emptyContainer} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        fontSize: FONTSIZE.size_24,
        color: COLORS.White,
    },
    headerText: {
        flex: 1,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        color: COLORS.White,
    },
    emptyContainer: {
        height: SPACING.space_20 * 2,
        width: SPACING.space_20 * 2,
    },
    iconBG: {
        height: SPACING.space_20 * 2,
        width: SPACING.space_20 * 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.Orange,
    },
});


export default AppHeader;
