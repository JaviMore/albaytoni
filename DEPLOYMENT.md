# Deployment instructions for GitHub Pages

1. Replace `<your-github-username>` and `<your-repo-name>` in `.env` and `vite.config.ts` with your actual GitHub username and repository name.
2. Commit and push your changes to GitHub.
3. Run the following command to deploy:

    

This will build your Vite project and publish the `dist` folder to the `gh-pages` branch for GitHub Pages hosting.

If you have not already, initialize a git repository and push to GitHub:

    git init
    git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
    git add .
    git commit -m "Initial commit"
    git push -u origin main

After deployment, your site will be available at:

    https://<your-github-username>.github.io/<your-repo-name>/
