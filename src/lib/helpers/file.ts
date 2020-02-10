const fs = require('fs');
const path = require('path');

export const files = {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },

    directoryExists: (filePath: string) => {
        return fs.existsSync(filePath);
    }
};
