FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

# Since we have "ghcr.io/devcontainers/features/common-utils:2" feature installed it will install zsh and oh-my-zsh.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
  && apt-get -y install --no-install-recommends bat tmux

# Install Powerlevel10k theme
RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git /home/node/.oh-my-zsh/custom/themes/powerlevel10k
# RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# Install fast zsh syntax highlighting plugin
RUN git clone https://github.com/z-shell/F-Sy-H.git /home/node/.oh-my-zsh/custom/plugins/F-Sy-H
# RUN git clone https://github.com/z-shell/F-Sy-H.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/F-Sy-H

# Install zsh autocomplete plugin
RUN git clone https://github.com/zsh-users/zsh-autosuggestions /home/node/.oh-my-zsh/custom/plugins/zsh-autosuggestions
# RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions