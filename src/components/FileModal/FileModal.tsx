import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetModalProvider, TouchableWithoutFeedback } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, { Ref, useCallback, useEffect, useMemo, useRef } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteFileEntity, fetchFileEntities } from '../../redux/asyncThunks/filesThunk';
import { setSelectedEntry } from '../../redux/slices/fileEntriesSlice';
import { AppDispatch } from '../../redux/store';
import { FileEntryTypes, FormatedFileEntry } from '../../types/types';
import { styles } from './styles';

interface FileModal {
    selectedEntry: FormatedFileEntry;
    path: string;
    isOpen: boolean
}

const FileModal = ({ isOpen, selectedEntry, path }: FileModal) => {
    const dispatch: AppDispatch = useDispatch();

    const bottomSheetModalRef: Ref<BottomSheetModalMethods> | null = useRef(null);

    const snapPoints = useMemo(() => ['30%'], []);

    useEffect(() => {
        if (isOpen) {
            bottomSheetModalRef.current?.present();
        }
    }, [isOpen]);

    const handleDelete = async () => {
        await dispatch(deleteFileEntity(`${path}/${selectedEntry.name}`))
        await dispatch(fetchFileEntities(path));
        dispatch(setSelectedEntry(null));

        bottomSheetModalRef.current!.dismiss();
    }

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            dispatch(setSelectedEntry(null));
            bottomSheetModalRef.current?.dismiss();
        }
    }, [isOpen]);

    const handlePressOutside = async () => {
        bottomSheetModalRef.current?.dismiss();
    }

    return (
        <Modal
            visible={isOpen}
            transparent
        >
            <BottomSheetModalProvider>
                <TouchableWithoutFeedback onPress={handlePressOutside}>
                    <View style={styles.fullScreen}>
                        <BottomSheetModal
                            ref={bottomSheetModalRef}
                            index={0}
                            snapPoints={snapPoints}
                            onChange={handleSheetChanges}
                        >
                            <View style={styles.fileContainer}>
                                <View style={styles.iconContainer}>
                                    <Ionicons name="document-outline" color="#090909" size={20} />
                                    <Text style={styles.fileName}>{selectedEntry.name}</Text>
                                </View>
                                {selectedEntry.tag === FileEntryTypes.file && (
                                    <View style={styles.fileDetails}>
                                        <Text style={styles.fileSize}>{selectedEntry.size} KB</Text>
                                        <Text style={styles.fileModified}>
                                            last modified: {selectedEntry.serverModified}
                                        </Text>
                                    </View>
                                )}
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={handleDelete}>
                                    <Ionicons name="trash-outline" size={24} color="#090909" />
                                    <Text style={styles.buttonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </BottomSheetModal>
                    </View>
                </TouchableWithoutFeedback>
            </BottomSheetModalProvider>
        </Modal>
    );
};

export default FileModal;