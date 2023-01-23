import React, { useState } from 'react';
import { CheckBox, Text, StyleSheet, View } from 'react-native';

const CustomCheckBox = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>¿Te resulta dificil React Native?</Text>
            </View>
            <Text>Checkbox seleccionado: {isSelected ? 'SI 👍' : 'NO 👎'}</Text>
        </View>
    );
};

export default CustomCheckBox;