import { FlatList, RefreshControl, ScrollView } from "react-native";
import { fetchParkingLots } from "../api/index";
import commonStyles from "../commonStyles";
import useRefresh from "../useRefresh";
import LotCard from "../components/LotCard";

const LotsView = ({ navigation }) => {
    const { data, isRefreshing, loadData } = useRefresh(fetchParkingLots);

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
            <FlatList
                contentContainerStyle={{
                    gap: 16,
                }}
                data={data}
                renderItem={({ item }) => (
                    <LotCard item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item._id}
            />
        </ScrollView>
    );
};

export default LotsView;
