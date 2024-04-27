import { StyleSheet } from "react-native";

const DEFAULT_BORDER_RADIUS = 2;
const DEFAULT_PADDING = 16;
const DEFAULT_SMALLSIZE = 8;

export default StyleSheet.create({
    screen: {
        flex: 1,
        paddingVertical: 32,
        gap: 32,
        color: "white",
    },
    listCard: {
        marginLeft: 48,
        marginRight: 24,
        backgroundColor: "white",
        borderRadius: DEFAULT_BORDER_RADIUS,
        padding: DEFAULT_PADDING,
    },
    withShadow: {
        shadowColor: "black",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    box: {
        padding: DEFAULT_PADDING,
        width: 64,
        height: 24,
        position: "absolute",
        borderWidth: 4,
        borderRadius: DEFAULT_BORDER_RADIUS,
    },
    map: {
        flex: 1,
        position: "relative",
        marginHorizontal: 32,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: DEFAULT_BORDER_RADIUS,
        padding: 4,
    },
    lotImg: {
        height: 128,
        width: 128,
        borderRadius: DEFAULT_BORDER_RADIUS,
        position: "absolute",
        left: -32,
        top: 24,
    },
    lotCard: {
        marginLeft: 48,
        marginRight: 24,
        backgroundColor: "white",
        borderRadius: DEFAULT_BORDER_RADIUS,
        padding: DEFAULT_PADDING,
        padding: 0,
        flexDirection: "row",
        height: 176,
    },
    lotContent: {
        paddingLeft: 128,
        paddingRight: DEFAULT_PADDING,
        paddingVertical: DEFAULT_PADDING,
        flexDirection: "column",
        gap: 4,
    },
    lotTitle: {
        fontSize: 24,
    },
    contentText: {
        fontSize: 12,
        color: "#666",
    },
    iconWithText: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
    },
    greenCircle: {
        height: DEFAULT_SMALLSIZE,
        width: DEFAULT_SMALLSIZE,
        borderRadius: "50%",
        backgroundColor: "green",
    },
    redCircle: {
        height: DEFAULT_SMALLSIZE,
        width: DEFAULT_SMALLSIZE,
        borderRadius: "50%",
        backgroundColor: "red",
    },
    areaCard: {
        backgroundColor: "white",
        borderRadius: DEFAULT_BORDER_RADIUS,
        padding: DEFAULT_PADDING,
        margin: 0,
        padding: 0,
        shadowColor: "black",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    areaImg: {
        height: 256,
        borderTopLeftRadius: DEFAULT_BORDER_RADIUS,
        borderTopRightRadius: DEFAULT_BORDER_RADIUS,
    },
    areaContent: {
        padding: DEFAULT_PADDING,
        flexDirection: "column",
        gap: 4,
    },
    areaTitle: {
        fontSize: 18,
    },
    mapHeader: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        marginHorizontal: 32,
    },
    legendContainer: {
        flexDirection: "column",
        padding: DEFAULT_SMALLSIZE,
        flex: 1,
    },
    boxNumber: {
        position: "absolute",
        bottom: 0,
        left: 0,
        fontWeight: 700,
    },
    selectionContainer: {
        flexDirection: "row",
        height: 64,
        gap: DEFAULT_SMALLSIZE,
        alignItems: "center",
    },
    chip: {
        borderRadius: DEFAULT_BORDER_RADIUS,
        padding: DEFAULT_PADDING,
    },
});
