import { readFile, writeFile } from "fs/promises";

// Caminho do seu arquivo CSS (ajuste conforme necessário)
const cssPath = "./src/assets/css/bootstrap.min.css";
const cssOut = "./src/assets/css/bootstrap.min.fixed.css";

// Lê o CSS original
let css = await readFile(cssPath, "utf8");

// 1. Adiciona os prefixos de appearance onde encontrar "appearance:"
css = css.replace(
  /([^{]+)\{([^}]*?)appearance\s*:\s*([a-zA-Z-]+);([^}]*)\}/g,
  (match, selectors, before, value, after) => {
    // Garante que não repita prefixos se já existirem
    if (
      before.includes("-webkit-appearance") ||
      before.includes("-moz-appearance")
    ) {
      return match;
    }
    return `${selectors}{${before}-webkit-appearance: ${value};-moz-appearance: ${value};appearance: ${value};${after}}`;
  }
);

// 2. Remove blocos de regras vazios, incluindo comentários e espaços
css = css.replace(/([^{]+)\{\s*\}/g, "");

// Salva o CSS corrigido em um novo arquivo
await writeFile(cssOut, css, "utf8");

console.log(`Arquivo corrigido salvo como: ${cssOut}`);
