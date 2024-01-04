import { FileEntry } from "../types/types";

export const getFormatedFileEntry = (fileEntry: FileEntry) => {
    return {
        tag: fileEntry[".tag"],
        name: fileEntry.name,
        serverModified: formatDate(fileEntry.server_modified),
        id: fileEntry.id,
        size: fileEntry.size || null,
        pathDisplay: fileEntry.path_display,
    }
}

export const getFormatedFileEntriesList = (fileEntries: FileEntry[]) => {
    return fileEntries.map(fileEntrie => getFormatedFileEntry(fileEntrie));
}

export const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

 export const removeLastPath = (path: string) => {
    const pathList = path.split('/');
    const newPath = pathList.slice(0, -1);
    return newPath.join('/');
}