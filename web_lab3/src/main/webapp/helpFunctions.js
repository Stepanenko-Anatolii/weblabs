function getCurrentPath() {
    let url, foldersAndFile, folders, folderPath, protocol, host, currLocation;
    url = window.location;

    foldersAndFile = url.pathname.split("/");
    folders = foldersAndFile.slice(0, foldersAndFile.length - 1);
    folderPath = folders.join("/");

    protocol = url.protocol + "//";
    host = url.host;

    currLocation = protocol+host+folderPath;
    return currLocation;
}