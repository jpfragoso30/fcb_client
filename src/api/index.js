import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HTTPREQ = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL || "",
    timeout: 1000,
    maxRedirects: 2,
});

export const fetchParkingLots = async () => {
    try {
        const { data: res } = await HTTPREQ.get("fetchParkingLots");

        await AsyncStorage.setItem(
            "parkingLots",
            JSON.stringify({ data: res?.data })
        );

        return res;
    } catch (err) {
        console.log(err);
    }

    return JSON.parse(await AsyncStorage.getItem("parkingLots"));
};

export const fetchAreasByLot = async (lotId) => {
    try {
        const { data: res } = await HTTPREQ.get(`fetchAreasByLot/${lotId}`);

        await AsyncStorage.setItem(
            `areas/${lotId}`,
            JSON.stringify({ data: res?.data })
        );

        return res;
    } catch (err) {
        console.log(err);
    }

    return JSON.parse(await AsyncStorage.getItem(`areas/${lotId}`));
};

export const fetchBoxesByArea = async (areaId) => {
    try {
        const { data: res } = await HTTPREQ.get(`fetchBoxesByArea/${areaId}`);

        await AsyncStorage.setItem(
            `boxes/${areaId}`,
            JSON.stringify({ data: res?.data })
        );

        return res;
    } catch (err) {
        console.log(err);
    }

    return JSON.parse(await AsyncStorage.getItem(`boxes/${areaId}`));
};
