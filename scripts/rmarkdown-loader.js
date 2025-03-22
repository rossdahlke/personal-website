const { execSync } = require('child_process');
const matter = require('gray-matter');
const path = require('path');

module.exports = function(source) {
  const callback = this.async();
  
  try {
    // Extract frontmatter
    const { data, content } = matter(source);
    
    // Create a temporary file
    const tmpFile = path.join(process.cwd(), 'tmp', path.basename(this.resourcePath));
    require('fs').writeFileSync(tmpFile, source);
    
    // Convert R Markdown/Quarto to Markdown using Pandoc
    // This assumes you have Pandoc installed
    const output = execSync(`Rscript -e "rmarkdown::render('${tmpFile}', output_format='md_document')"`, {
      encoding: 'utf8'
    });
    
    // Read the converted markdown
    const convertedContent = require('fs').readFileSync(tmpFile.replace(/\.(qmd|rmd)$/, '.md'), 'utf8');
    
    // Clean up temporary files
    require('fs').unlinkSync(tmpFile);
    require('fs').unlinkSync(tmpFile.replace(/\.(qmd|rmd)$/, '.md'));
    
    // Reconstruct the markdown with frontmatter
    const finalContent = `---
${Object.entries(data).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n')}
---

${convertedContent}`;
    
    callback(null, finalContent);
  } catch (error) {
    callback(error);
  }
}; 