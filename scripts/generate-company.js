#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function usage() {
  console.log(`Usage: node scripts/generate-company.js --slug <slug> --name "NAME" --displayName "Display" --phone "+61..." --whatsapp "+61..." --email "a@b.com" --address "line1;line2" --tagline "Tag" --established 2010 --headline "Hero" --subtext "Subtext"`);
}

const args = require('minimist')(process.argv.slice(2));
if (!args.slug || !args.name) {
  usage();
  process.exit(1);
}

const slug = String(args.slug);
const outConfig = path.resolve(__dirname, '..', 'src', 'config', `company.${slug}.ts`);
const outPage = path.resolve(__dirname, '..', 'src', 'pages', `Index.${slug}.tsx`);

const company = {
  name: args.name || '',
  displayName: args.displayName || args.name || '',
  established: args.established ? Number(args.established) : 2010,
  tagline: args.tagline || '',
  phoneDisplay: args.phone || '',
  whatsappNumber: args.whatsapp || args.phone || '',
  email: args.email || '',
  address: (args.address || '').split(';').map(s => s.trim()).filter(Boolean),
  hero: {
    headline: args.headline || '',
    subtext: args.subtext || '',
  },
};

const configContent = `const company = ${JSON.stringify(company, null, 2)};\n\nexport default company;\n`;

// Write config
fs.writeFileSync(outConfig, configContent, 'utf8');

// Read template Index and replace config import
const templatePath = path.resolve(__dirname, '..', 'src', 'pages', 'Index.tsx');
let page = fs.readFileSync(templatePath, 'utf8');
page = page.replace(/import company from "@\/config\/company";/, `import company from "@/config/company.${slug}";`);

fs.writeFileSync(outPage, page, 'utf8');

console.log('Generated:');
console.log(' -', path.relative(process.cwd(), outConfig));
console.log(' -', path.relative(process.cwd(), outPage));
console.log('\nYou can now run the dev server and open the generated page component as needed, or adjust routing to serve it.');

// --- Add route to App.tsx ---
try {
  const appPath = path.resolve(__dirname, '..', 'src', 'App.tsx');
  let appSrc = fs.readFileSync(appPath, 'utf8');

  // Create a valid component identifier from slug
  const compName = 'Index' + slug.replace(/[^a-zA-Z0-9]/g, '_');
  const importLine = `import ${compName} from "./pages/Index.${slug}";`;
  if (!appSrc.includes(importLine)) {
    // insert import after existing Index import if present, otherwise after other imports
    if (appSrc.includes('import Index from "./pages/Index";')) {
      appSrc = appSrc.replace('import Index from "./pages/Index";', `import Index from "./pages/Index";\n${importLine}`);
    } else {
      // fallback: add near top
      const firstImportEnd = appSrc.indexOf('\n', appSrc.indexOf('import'));
      appSrc = appSrc.slice(0, firstImportEnd + 1) + importLine + '\n' + appSrc.slice(firstImportEnd + 1);
    }
  }

  // Add <Route path="/slug" element={<Comp/>} /> before the catch-all route
  const routeLine = `          <Route path="/${slug}" element={<${compName} />} />`;
  if (!appSrc.includes(routeLine)) {
    const marker = '<Route path="*" element={<NotFound />} />';
    if (appSrc.includes(marker)) {
      appSrc = appSrc.replace(marker, `${routeLine}\n          ${marker}`);
    } else {
      // fallback: append inside Routes (best-effort)
      appSrc = appSrc.replace('</Routes>', `  ${routeLine}\n        </Routes>`);
    }
  }

  fs.writeFileSync(appPath, appSrc, 'utf8');
  console.log('Updated routing in src/App.tsx ->', path.relative(process.cwd(), appPath));
} catch (err) {
  console.error('Failed to update App.tsx routing:', err.message || err);
}
