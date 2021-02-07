const fs = require('fs');
const glob = require('glob');
const { lang } = require('moment');
const path = require('path');

const targetAssetsI18nDir = 'src/assets/i18n';

const output = {};

const args = process.argv.slice(2);
const isDebugMode = args.includes('--debug');

const extractComponentName = (filePath) => {
    const fileName = path.basename(filePath);
    const i18nFileNameRegEx = /(?<component>.+)\.(en|fr)\.json/;
    return i18nFileNameRegEx.exec(fileName).groups.component;
}

const computeI18nComponentContent = (filePath) => {
    if (isDebugMode) {
        console.log('file path', filePath);
    }
    const componentName = extractComponentName(filePath);
    const jsonContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let targetI18nContent = {};
    targetI18nContent[componentName] = jsonContent;
    if (isDebugMode) {
        console.log(`Content for ${componentName} is ${JSON.stringify(targetI18nContent)}`);
    }
    return targetI18nContent;
}

const computeI18nByLanguage = (languages) => {
    languages.forEach(language => {
        if (isDebugMode) {
            console.log(`--> Bundle resource for language ${language} ...`);
        }
        glob(`src/app/**/*.${language}.json`, (error, files) => {
            files.forEach(filePath => {
                Object.assign(output, computeI18nComponentContent(filePath));
            });
            fs.writeFileSync(`${targetAssetsI18nDir}/${language}.json`, JSON.stringify(output));
        });
        if (isDebugMode) {
            console.log(`--> Bundle resource from language ${language} done`);
        }
    });
}

const computeSharedI18n = (languages) => {
    languages.forEach(language => {
        if (isDebugMode) {
            console.log(`--> Bundle shared resource for language ${language} ...`);
        }
        glob(`src/assets/i18n/shared.${language}.json`, (error, files) => {
            files.forEach(filePath => {
                Object.assign(output, computeI18nComponentContent(filePath));
            });
            fs.writeFileSync(`${targetAssetsI18nDir}/${language}.json`, JSON.stringify(output));
        });
        if (isDebugMode) {
            console.log(`--> Bundle shared resource from language ${language} done`);
        }
    });
}

const i18nBundleSetup = () => {
    if (isDebugMode) {
        console.log(`--> Create folder ${targetAssetsI18nDir} for I18n resources ...`);
    }
    fs.mkdirSync(targetAssetsI18nDir, { recursive: true });
}

i18nBundleSetup();
computeSharedI18n(['fr']);
computeI18nByLanguage(['fr']);