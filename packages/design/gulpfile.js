const gulp = require('gulp');
const fs = require('fs');
const path = require('path');

// SVG 파일을 Base64로 변환하는 Gulp 작업
gulp.task('base64', function () {
  fs.writeFileSync('./src/utils/base64.ts', '')
  return gulp.src('./src/base64/*.{svg,png}') // 변환할 SVG 파일 경로
    .on('data', function (file) {
      if (file.isBuffer()) {
        const type = file.extname === '.svg' ? "data:image/svg+xml" : "data:image/png"
        // SVG 파일 내용을 버퍼에서 읽어서 Base64로 변환
        const svgContent = file.contents.toString();
        const base64 = Buffer.from(svgContent).toString('base64');
        const dataUri = `${type};base64,${base64}`;
        const fileName = path.basename(file.path, file.extname);
        const exportStatement = `export const ${fileName} = "${dataUri}";\n`;
        // outputFile에 추가
        fs.appendFileSync('./src/utils/base64.ts', exportStatement);
      }
    });
});