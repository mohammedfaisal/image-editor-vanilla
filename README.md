# image-editor-vanilla

### Steps to reproduce

1. create vite vanilla project
    ```bash
    npm create vite@latest image-editor-vanilla -- --template vanilla
    ```

2. install dependencies
    ```bash
    cd image-editor-vanilla
    npm install
    ```

3. Verify if vanilla project works
    ```bash
    npm run dev
    ```

4. Add image-edtor dependencies as specified here: https://github.com/scaleflex/filerobot-image-editor?tab=readme-ov-file#vanillajs
    ```bash
    npm install --save filerobot-image-editor react-filerobot-image-editor
    ```

5. Copy the vanillaJS example into the `main.js`