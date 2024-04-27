import { FlatList, Image, Text, View } from "react-native";
import commonStyles from "../commonStyles";

const AvailabilityList = ({ data }) => {
    return (
        <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={({ item }) => (
                <>
                    <View
                        style={[
                            commonStyles.box,
                            {
                                left: item.coords.x,
                                top: item.coords.y,
                                borderColor: "#bababa",
                                backgroundColor: "#bababa",
                            },
                        ]}
                    >
                        {item.available && (
                            <Text style={commonStyles.boxNumber}>
                                {item.referenceId}
                            </Text>
                        )}
                    </View>

                    {!item.available && (
                        <Image
                            style={{
                                height: 32,
                                width: 48,
                                position: "absolute",
                                left: item.coords.x + 8,
                                top: item.coords.y + 4,
                            }}
                            source={require("../images/car.png")}
                        />
                    )}
                </>
            )}
            keyExtractor={(item) => item._id}
        />
    );
};

export default AvailabilityList;
