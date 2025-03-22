# Personal Website

This is my personal website built with [Next.js](https://nextjs.org), featuring my portfolio, resources, and blog.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── blog/            # Blog section
│   ├── resources/       # Resources section
│   └── page.tsx         # Home page
├── content/             # Content directory
│   ├── blog/           # Blog posts (markdown)
│   └── resources/      # Resource posts (markdown)
├── components/          # React components
└── public/             # Static assets
```

## Adding New Content

### Adding a Resource Post

1. Create a new markdown file in `content/resources/` with the format `your-post-title.md`
2. Add the following frontmatter at the top of the file:
   ```markdown
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   description: "A brief description of your resource"
   ---
   ```
3. Write your content in markdown below the frontmatter
4. For R/Python tutorials, you can include code blocks with syntax highlighting:
   ````markdown
   ```r
   # Your R code here
   ```
   ````

### Adding a Blog Post

1. Create a new markdown file in `content/blog/` with the format `YYYY-MM-DD-post-title.md`
2. Add the following frontmatter:
   ```markdown
   ---
   title: "Your Blog Post Title"
   date: "YYYY-MM-DD"
   description: "A brief description of your blog post"
   ---
   ```
3. Write your blog content in markdown

### Adding Images

1. Place images in the `public/images/` directory
2. Reference them in your markdown:
   ```markdown
   ![Alt text](/images/your-image.png)
   ```

## Development Notes

### Configuration

- The site configuration is in `next.config.js`
- Page layouts are in `app/layout.tsx`
- Styling is done with Tailwind CSS

### Important Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

### Working with R Markdown / Quarto

For R Markdown (.rmd) or Quarto (.qmd) files:

1. Place your .rmd/.qmd files in the appropriate content directory
2. The files will be automatically converted to markdown when displayed
3. Make sure your code chunks are properly formatted:
   ````markdown
   ```{r}
   # Your R code here
   ```
   ````

### Troubleshooting

If you encounter the error "Cannot find module '../server/require-hook'":
1. Delete the `.next` directory
2. Delete `node_modules`
3. Run `npm install`
4. Run `npm run dev`

## Deployment

The site is deployed on Vercel. Any push to the main branch will trigger an automatic deployment.

To deploy manually:
1. Push your changes to GitHub
2. Vercel will automatically build and deploy the site
3. Check the deployment status in the Vercel dashboard

## Contributing

1. Create a new branch for your changes
2. Make your changes and test locally
3. Submit a pull request
4. Wait for review and approval

## License

This project is licensed under the MIT License - see the LICENSE file for details.
