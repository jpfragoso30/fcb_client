import { Image, Text, TouchableOpacity, View } from "react-native";
import commonStyles from "../commonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AreaCard = ({ item, isRecent = false, navigation }) => {
    return (
        <TouchableOpacity
            style={commonStyles.areaCard}
            onPress={async () => {
                if (!isRecent)
                    await AsyncStorage.setItem(
                        "preferedArea",
                        JSON.stringify(item)
                    );

                navigation.navigate("Map", {
                    areaId: item._id,
                    areaHours: item.totalHours,
                });
            }}
        >
            <Image
                style={commonStyles.areaImg}
                source={{ uri: item.imageUrl }}
            />
            <View style={commonStyles.areaContent}>
                <Text style={commonStyles.areaTitle}>{item.areaName}</Text>
                <View style={commonStyles.iconWithText}>
                    <View style={commonStyles.iconWithText}>
                        <View style={commonStyles.greenCircle} />
                        <Text style={commonStyles.contentText}>
                            {item.nAvailable}
                        </Text>
                    </View>
                    <View style={commonStyles.iconWithText}>
                        <View style={commonStyles.redCircle} />
                        <Text style={commonStyles.contentText}>
                            {item.nOccupied}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default AreaCard;
