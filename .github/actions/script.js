const replace = require('replace-in-file');

const questionMark = "3ad7980d-0a2f-4903-93f8-c1ed6a6ccb5";
const backTick = "311c50ec-0898-4152-b284-9164c1a59505";

function doReplace() {
    return {
        files: 'main.lua',
        from: [/\?\./g, /`/g],
        to: [questionMark, backTick],
        countMatches: true
    };
}

function undoReplace() {
    return {
        files: 'main.lua',
        from: [new RegExp(questionMark, 'g'), new RegExp(backTick, 'g')],
        to: ['?.', '`'],
        countMatches: true
    };
}

const mode = process.argv[2];

try {
    const results = replace.sync(mode === 'do' ? doReplace() : undoReplace());
    console.log('Replacement results:', results);
} catch (error) {
    console.error('Error occurred:', error);
}
