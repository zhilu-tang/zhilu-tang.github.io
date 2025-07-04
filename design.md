
## Project Design Documentation

### Overview
- **Project Name**: hitme.github.io
- **Description**: A personal website built with Next.js and hosted on GitHub Pages.
- **Purpose**: To provide an easy-to-set-up and deploy website or blog.

### Technologies Used
- **Next.js**: Framework for building server-rendered React applications.
- **MDX**: Extension of Markdown that allows embedding JSX within Markdown documents.
- **GitHub Actions**: Automation tool for continuous integration and deployment.
- **Sass**: CSS extension language used for styling components.
- **TypeScript**: Superset of JavaScript that adds static typing.

### Workflow for MDX Podcast Article Writing
1. **Writing Content**:
   - Use `.mdx` files for writing blog posts.
   - Include JSX components such as [InternalLink](file:///Users/markus/dev/code/workspace/gemini-cli/hitme.github.io/components/InternalLink/index.tsx#L15-L39), [ExternalLink](file:///Users/markus/dev/code/workspace/gemini-cli/hitme.github.io/components/ExternalLink/index.tsx#L14-L42), [Figure](file:///Users/markus/dev/code/workspace/gemini-cli/hitme.github.io/components/Figure/index.tsx#L18-L60), etc., for rich content.
   - Utilize `gray-matter` for front matter metadata (e.g., title, description, date).

2. **Content Processing**:
   - Parse `.mdx` files using `next-mdx-remote/rsc` to render MDX content in React components.
   - Extract metadata and content using `getPost` function from `@helpers/postUtils.mjs`.

3. **Static Generation**:
   - Generate static paths for blog posts using [generateStaticParams](file:///Users/markus/dev/code/workspace/gemini-cli/hitme.github.io/app/(footer)/blog/[slug]/page.tsx#L192-L196) in the blog post page component.
   - Fetch and render individual blog posts using `getStaticProps`.

### Static Page Output for GitHub Pages Deployment
1. **Build Process**:
   - Run `npm run build` to generate static files.
   - Configure [next.config.js](file:///Users/markus/dev/code/workspace/gemini-cli/hitme.github.io/next.config.js) to output static HTML files suitable for GitHub Pages.

2. **Deployment**:
   - Deploy automatically via GitHub Actions whenever commits are pushed to the `main` branch.
   - Use the workflow defined in `.github/workflows/deploy.yml`.

### Areas for Improvement
1. **Automation Enhancements**:
   - Ensure that the deployment script handles all edge cases, such as failed builds and rollbacks.
   - Implement more comprehensive logging and error handling in the GitHub Actions workflow.

2. **Code Quality and Testing**:
   - Add unit tests for critical components and utility functions.
   - Integrate linting tools like ESLint and Prettier for consistent code style.

3. **Performance Optimization**:
   - Optimize images and assets for faster load times.
   - Implement lazy loading for non-critical resources.

4. **Documentation and Onboarding**:
   - Provide detailed setup instructions for local development.
   - Document any custom scripts or workflows for future contributors.

5. **Security Considerations**:
   - Regularly update dependencies to patch vulnerabilities.
   - Use secure practices for handling user input and data.

By following this structured approach, you can effectively document the project's technical landscape, streamline the content creation process, and enhance the deployment pipeline for better reliability and maintainability.