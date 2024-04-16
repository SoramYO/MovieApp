/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Touchable } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { TouchableOpacity } from 'react-native';
import CustomIcon from './CustomIcon';

const InputHeader = (props: any) => {
    const [searchText, setSearchText] = React.useState<String>('');
    return (
        <View style={styles.inputBox}>
            <TextInput style={styles.textInput}
                onChangeText={textInput => setSearchText(textInput)}
                value={searchText as string} // Change the type of searchText from String to string
                placeholder="Search your movie here..."
                placeholderTextColor={COLORS.WhiteRGBA32}
            />
            <TouchableOpacity style={styles.searchIcon}
                onPress={() => props.searchFuntion(searchText)}>
                <CustomIcon name="search"
                    color={COLORS.Orange}
                    size={FONTSIZE.size_20} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        display: 'flex',
        paddingVertical: SPACING.space_8,
        paddingHorizontal: SPACING.space_24,
        borderWidth: 2,
        borderColor: COLORS.WhiteRGBA15,
        borderRadius: BORDERRADIUS.radius_24,
        flexDirection: 'row',
    },
    textInput: {
        width: '90%',
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
    },
    searchIcon: {
        padding: SPACING.space_10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default InputHeader;