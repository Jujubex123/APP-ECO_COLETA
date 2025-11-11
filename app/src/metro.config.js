const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Garante que o resolver e assetExts existem antes de modificar
if (config.resolver && Array.isArray(config.resolver.assetExts)) {
    config.resolver.assetExts.push('cjs');
}

// Ignora pastas do Windows que causam erro EPERM
if (Array.isArray(config.watchFolders)) {
    config.watchFolders = config.watchFolders.filter(
        folder => !folder.includes('AppData')
    );
}

module.exports = config;

