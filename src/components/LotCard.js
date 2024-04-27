import { Image, Text, TouchableOpacity, View } from "react-native";
import commonStyles from "../commonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const LotCard = ({ item, isRecent = false, navigation }) => {
    return (
        <TouchableOpacity
            style={commonStyles.lotCard}
            onPress={async () => {
                if (!isRecent)
                    await AsyncStorage.setItem(
                        "preferedLot",
                        JSON.stringify(item)
                    );

                navigation.navigate("Areas", {
                    lotId: item._id,
                });
            }}
        >
            <Image
                style={commonStyles.lotImg}
                source={{ uri: item.imageUrl }}
            />
            <View style={commonStyles.lotContent}>
                <Text style={commonStyles.lotTitle}>{item.lotName}</Text>
                <Text style={commonStyles.contentText}>{item.location}</Text>
                <View style={commonStyles.iconWithText}>
                    <MaterialIcons name="price-change" size={16} color="#666" />

                    <Text style={commonStyles.contentText}>
                        {item.priceRate}
                    </Text>
                </View>

                <Text style={commonStyles.contentText}>
                    Payment Type: {item.paymentTypes}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default LotCard;
