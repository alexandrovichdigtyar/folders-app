import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { ActivityIndicator, Modal, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import EmptyMessage from "../../components/EmptyMessage/EmptyMessage";
import FileModal from "../../components/FileModal/FileModal";
import { removeLastPath } from "../../helpers";
import { fetchFileEntities } from "../../redux/asyncThunks/filesThunk";
import { AppDispatch } from "../../redux/store";
import { AppState } from "../../redux/types";
import { RootStackParamList, ScreensList } from "../../types/types";
import FolderGrid from "./components/FoldersList/FoldersList";
import { styles } from "./styles";

interface FoldersScreen {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<any, ScreensList.Folders>;
}

const FoldersScreen = ({ navigation, route }: FoldersScreen) => {
    const path = route.params?.path || "";

    const dispatch: AppDispatch = useDispatch();

    const { entries, isLoading, selectedEntry } = useSelector((state: AppState) => state.fileEntries);

    const isNeededEmptyMessage = !isLoading && (!entries || entries.length === 0);

    useEffect(() => {
        dispatch(fetchFileEntities(path));
    }, [path])

    const onPressFolder = (path: string, folderName: string) => {
        navigation.navigate(ScreensList.Folders, { path: `${path}/${folderName}` });
    }

    const onPressBack = () => {
        navigation.navigate(ScreensList.Folders, { path: removeLastPath(path) });
    }

    return (
        <SafeAreaView style={styles.container}>
            {path && (
                <TouchableOpacity style={styles.button} onPress={onPressBack}>
                    <Ionicons name="arrow-back" size={18} color="#ffff" />
                    <Text style={styles.buttonText}>
                        Back
                    </Text>
                </TouchableOpacity>
            )}
            {isNeededEmptyMessage && (
                <EmptyMessage text="You haven't created any files/folders yet. Create them on the page" link="www.dropbox.com" />
            )}
            {entries && (
                <FolderGrid folders={entries!} onPressFolder={onPressFolder} path={path} />
            )}
            {Boolean(selectedEntry) && (
                <FileModal
                    path={path}
                    isOpen={Boolean(selectedEntry)}
                    selectedEntry={selectedEntry!} />
            )}
            {isLoading && (
                <Modal
                    transparent
                    animationType="fade">
                    <ActivityIndicator style={styles.activityIndicator} size="large" color="#0000ff" />
                </Modal>
            )}
        </SafeAreaView>
    )
}

export default FoldersScreen;
