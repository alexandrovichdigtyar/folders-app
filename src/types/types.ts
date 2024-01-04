export enum ScreensList {
    Home = "Home",
    Folders = "Folders",
    Create = "Create",
    Photos = "Photos",
    Account = "Account"
}

export enum FileEntryTypes {
    file = "file",
    folder = "folder"
}

export enum NavTabsIcon {
    Home = 'home-outline',
    Folders = 'folder-outline',
    Create = 'add-circle-outline',
    Photos = 'images-outline',
    Account = 'person-outline'

}

export const navTabs = [
    { name: ScreensList.Home, icon: NavTabsIcon.Home },
    { name: ScreensList.Folders, icon: NavTabsIcon.Folders },
    { name: ScreensList.Create, icon: NavTabsIcon.Create },
    { name: ScreensList.Photos, icon: NavTabsIcon.Photos },
    { name: ScreensList.Account, icon: NavTabsIcon.Account },
];

export interface FileEntry {
    ".tag": FileEntryTypes.file | FileEntryTypes.folder;
    server_modified: string;
    name: string;
    id: string;
    size?: string;
    path_display: string;
}

export interface FormatedFileEntry {
    tag: FileEntryTypes.file | FileEntryTypes.folder;
    serverModified: string;
    name: string;
    id: string;
    size: string | null;
    pathDisplay: string;
}

export type RootStackParamList = {
    Home: undefined;
    Folders: { path: string };
};

export class ServerError {
    constructor(public code: 200 | 404 | 400, public message: string) {
    }
}