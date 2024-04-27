import { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import { useIsFocused } from "@react-navigation/native";
import { io } from "socket.io-client";

export default (fetchFn, id, emitTitle) => {
    const { updateStore } = useContext(Context);
    const [data, setData] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const isFocused = useIsFocused();

    useEffect(() => {
        if (emitTitle) {
            const socket = io(process.env.EXPO_PUBLIC_SOCKET_URL || "");

            socket.on("connect", () => {
                socket.emit(emitTitle, id);
            });

            socket.on("data", (data) => {
                setData(data);
            });

            socket.on("connect_error", (error) => {
                if (!socket.active) {
                    console.log(error.message);

                    updateStore({ success: false });
                }
            });
        }
    }, []);

    useEffect(() => {
        if (isFocused) loadData();
    }, [isFocused]);

    const loadData = async () => {
        setIsRefreshing(true);

        const { data = [], success } = await fetchFn(id);

        setData(data);

        updateStore({ success });

        setIsRefreshing(false);
    };

    return { data, isRefreshing, loadData, setData };
};
