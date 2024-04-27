import { FlatList, RefreshControl, ScrollView } from "react-native";
import { fetchAreasByLot } from "../api/index";
import commonStyles from "../commonStyles";
import useRefresh from "../useRefresh";
import AreaCard from "../components/AreaCard";

const AreasView = ({ route, navigation }) => {
    const { data, isRefreshing, loadData } = useRefresh(
        fetchAreasByLot,
        route.params.lotId,
        "joinArea"
    );

    return (
        <ScrollView
            contentContainerStyle={[
                commonStyles.screen,
                {
                    marginHorizontal: 16,
                },
            ]}
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={loadData}
                />
            }
        >
            <FlatList
                contentContainerStyle={{
                    gap: 32,
                }}
                data={data}
                renderItem={({ item }) => (
                    <AreaCard item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item._id}
            />
        </ScrollView>
    );
};

export default AreasView;
