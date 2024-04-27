import { FlatList, Text, TouchableOpacity, View } from "react-native";
import commonStyles from "../commonStyles";

const ChipSelectors = ({ selections, onSelect }) => {
    return (
        <View contentContainerStyle={{ flex: 1 }}>
            <FlatList
                contentContainerStyle={commonStyles.selectionContainer}
                scrollEnabled={false}
                data={selections}
                renderItem={({ item: { title, active }, index }) => (
                    <TouchableOpacity
                        onPress={() => onSelect(index)}
                        style={[
                            commonStyles.chip,
                            {
                                backgroundColor: active ? "black" : "white",
                            },
                            commonStyles.withShadow,
                        ]}
                    >
                        <Text
                            style={{
                                color: active ? "white" : "black",
                            }}
                        >
                            {title}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, i) => item.title + i}
            />
        </View>
    );
};

export default ChipSelectors;
