const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(process.cwd(), 'posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

let hasError = false;

files.forEach(file => {
  const fullPath = path.join(postsDir, file);
  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    matter(content); // 只要能解析就不会抛异常
  } catch (e) {
    hasError = true;
    console.error(`❌ Frontmatter parse error in ${file}:`, e.message);
  }
});

if (hasError) {
  console.error('\nSome MDX files have invalid frontmatter. Please fix them before build.');
  process.exit(1);
} else {
  console.log('✅ All MDX frontmatters are valid!');
}