# Dev Containers (Remote Containers)

### Requirements

- Git
- Docker
- Remote Containers Extension VS Code

### Steps to create dev container:

- Open the code folder in VS Code.
- Search "Add Development Container Config Files" in command palette (cmd+shift+P).
- Configure with things that you need like Python, Node etc.
- Add features which you want like oh-my-zsh, autocomplete etc.
- Search "Rebuild Container" in command palette.
- Configure the `devcontainer.json` file with things like post creation script to install dependencies, port forwarding, adding necessary extensions etc.

- > Anything you install manually inside the container will be deleted on the next run. Use Dockerfile instead.
- To install any other software we can use `RUN` command in the Dockerfile.

### Things you might want to do:

- By default the code folder is put inside the `/workspace` folder. You can change this in `devcontainer.json` file using `workspaceMount` and `workspaceFolder` properties.

- You can also load all the env variables from the `.env` file using `runArgs` property. We won't use it as we generally use `dotenv` package.

- To improve the speed of installation of the node modules use mounts. Check the `devcontainer.json` file. Read more about it [here](https://code.visualstudio.com/remote/advancedcontainers/improve-performance?WT.mc_id=devcloud-0000-buhollan#_use-a-targeted-named-volume).

- `mutantdino.resourcemonitor` extension can show resource usage in the status bar. By default docker desktop doesn't allow too much resources to container. If more memory or CPU is required follow the steps mentioned [here](https://code.visualstudio.com/docs/devcontainers/tips-and-tricks#_speeding-up-containers-in-docker-desktop).
