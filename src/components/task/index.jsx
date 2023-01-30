import React, { useState } from "react";
import { FlatList, View, Button, Text} from "react-native";
import TaskItem from "./item";
import { styles } from "./styles";

const TaskList = ({ tasks, onHandlerModal }) => {
    const [isReadyVisible, setIsReadyVisible] = useState(false);

    const renderItem = ({ item }) => (
        <View>
            <TaskItem
                item={item}
                onHandlerModal={onHandlerModal}
            />
            <Button
                title="¿Esta todo listo?"
                onPress={() => setIsReadyVisible(!isReadyVisible)}
            />
            {isReadyVisible && (
                <Text>{item.name}Listo!</Text>
            )}
        </View>
    )

    const keyExtractor = (item) => item.id;

    return (
        <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.listContainer}

        />
    )
}
export default TaskList;