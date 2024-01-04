import React, { useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { setSelectedEntry } from '../../redux/slices/fileEntriesSlice';
import { AppDispatch } from '../../redux/store';
import { FileEntryTypes, FormatedFileEntry } from '../../types/types';
import { styles } from './styles';

interface FolderCardProps {
  onPressFolder: () => void;
  folderData: FormatedFileEntry;
}

const FolderCard = ({ folderData, onPressFolder }: FolderCardProps) => {
  const { tag, name } = folderData;

  const popoverAnchorRef = useRef<View>(null);

  const dispatch: AppDispatch = useDispatch();

  const handlePressMenu = () => {
    dispatch(setSelectedEntry(folderData));
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={tag === FileEntryTypes.folder ? onPressFolder : () => { }}>
        <Icon name={tag} size={50} color="#517fa4" />
      </TouchableOpacity>
      <Text style={styles.folderName}>{name}</Text>
      <View ref={popoverAnchorRef} style={styles.menuButton}>
        <TouchableOpacity onPress={handlePressMenu}>
          <Icon name="dots-horizontal" size={40} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FolderCard;
