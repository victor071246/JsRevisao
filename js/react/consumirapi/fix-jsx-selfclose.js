const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2] || process.cwd();
const extensions = ['.jsx', '.tsx', '.js'];

function processFile(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');
    const fixedCode = code.replace(/<(\w+)([^>]*)><\/\1>/g, '<$1$2 />');
    if (fixedCode !== code) {
        fs.writeFileSync(filePath, fixedCode, 'utf8');
        console.log(`Corrigido: ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        // Ignorar node_modules
        if (file.isDirectory() && file.name === 'node_modules') {
            // pula essa pasta
            continue;
        }

        if (file.isDirectory()) {
            console.log(`Entrando na pasta: ${fullPath}`);
            walkDir(fullPath);
        } else if (extensions.includes(path.extname(file.name))) {
            console.log(`Processando arquivo: ${fullPath}`);
            processFile(fullPath);
        }
    }
}

walkDir(targetDir);

console.log('Processamento finalizado.');
