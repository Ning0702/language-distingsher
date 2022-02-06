import { franc, francAll } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2]
const langCode = franc(input);

if (langCode === 'und') {
    console.log('Sorry, could not figure it out! Try longer'.red)
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is ${language.name}`.green);
}

