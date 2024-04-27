import { FlatList, View } from "react-native";
import commonStyles from "../commonStyles";

const HeatList = ({ data, areaHours }) => {
    return (
        <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={({ item }) => (
                <View
                    style={[
                        commonStyles.box,
                        {
                            left: item.coords.x,
                            top: item.coords.y,
                            backgroundColor: `hsl(${
                                100 - (item.totalHours / areaHours) * 100
                            } 100% 40%)`,
                            borderColor: `hsl(${
                                100 - (item.totalHours / areaHours) * 100
                            } 100% 40%)`,
                        },
                    ]}
                />
            )}
            keyExtractor={(item) => item._id}
        />
    );
};

export default HeatList;
