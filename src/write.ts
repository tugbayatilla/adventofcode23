import * as fs from "fs";

export function write(filePath:string, data: any): void {
  fs.writeFile(filePath, data.join('\n').toString(), 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been created');
});
}
