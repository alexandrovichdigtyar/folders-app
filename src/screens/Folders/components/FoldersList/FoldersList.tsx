import React from 'react';
import { FlatList, View } from 'react-native';
import FolderCard from '../../../../components/FolderCard/FolderCard';
import { FormatedFileEntry } from '../../../../types/types';
import { styles } from './styles';

interface FolderGridProps {
  folders: FormatedFileEntry[];
  onPressFolder: (path: string, name: string) => void;
  path: string;
}

const FolderGrid = ({ folders, onPressFolder, path }: FolderGridProps) => {
  
  const renderItem = ({ item }: { item: FormatedFileEntry }) => (
    <View style={styles.itemContainer}>
      <FolderCard
        onPressFolder={() => onPressFolder(path, item.name)}
        folderData={item}
      />
    </View>
  );

  return (
    <FlatList
      data={folders}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      numColumns={2}
      style={styles.container}
    />
  );
};

export default FolderGrid;