import { useState } from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { fetchBoxesByArea } from "../api/index";
import commonStyles from "../commonStyles";
import useRefresh from "../useRefresh";
import HeatList from "../components/HeatList";
import AvailabilityList from "../components/AvailabilityList";
import ChipSelectors from "../components/ChipSelectors";
import { LinearGradient } from "expo-linear-gradient";

const MapView = ({ route }) => {
    const [displays, setDisplays] = useState([
        { title: "Availability", active: true },
        { title: "Heat Map", active: false },
    ]);
    const { data, isRefreshing, loadData } = useRefresh(
        fetchBoxesByArea,
        route.params.areaId,
        "joinMap"
    );

    const handleSelect = (index) =>
        setDisplays((prev) =>
            prev.map((d, i) => ({ ...d, active: i === index }))
        );

    return (
        <ScrollView
            contentContainerStyle={commonStyles.screen}
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={loadData}
                />
            }
        >
            <View style={commonStyles.mapHeader}>
                <ChipSelectors selections={displays} onSelect={handleSelect} />
                {displays[1].active && (
                    <View style={commonStyles.legendContainer}>
                        <LinearGradient
                            style={{ flex: 1 }}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={[`hsl(100 100% 40%)`, `hsl(0 100% 40%)`]}
                        />
                        <Text style={{ textAlign: "center" }}>
                            Least - Most Used
                        </Text>
                    </View>
                )}
            </View>
            <View style={commonStyles.map}>
                {displays[0].active ? (
                    <AvailabilityList data={data} />
                ) : (
                    <HeatList data={data} areaHours={route.params.areaHours} />
                )}
            </View>
        </ScrollView>
    );
};

export default MapView;
