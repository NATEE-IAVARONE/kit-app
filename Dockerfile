FROM mcr.microsoft.com/devcontainers/typescript-node:0-18

ARG PROJ_NAME
ENV PROJ_NAME $PROJ_NAME

ARG OLD_USER_NAME
ENV OLD_USER_NAME $OLD_USER_NAME

ARG USER_NAME
ENV USER_NAME $USER_NAME

ARG USER_DIR
ENV USER_DIR $USER_DIR

############################ Generator: plugin-git #############################
ARG GIT_USER_NAME
ENV GIT_USER_NAME $GIT_USER_NAME

ARG GIT_USER_EMAIL
ENV GIT_USER_EMAIL $GIT_USER_EMAIL

ARG REL_HOME__PROJ
ENV REL_HOME__PROJ $REL_HOME__PROJ


######################### Generator: plugin-vscode.dev #########################
RUN echo "${OLD_USER_NAME}:${USER_NAME}" | chpasswd
RUN usermod -md "${USER_DIR}" -l "${USER_NAME}" "${OLD_USER_NAME}"
RUN groupmod -n "${USER_NAME}" "${OLD_USER_NAME}"
RUN usermod -aG sudo "${USER_NAME}"
RUN mkdir -p "${USER_DIR}/${REL_HOME__PROJ}"

RUN echo "${USER_NAME} ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee "/etc/sudoers.d/${USER_NAME}"

########################## Generator: plugin-ssh.dev ###########################
RUN mkdir -p "${USER_DIR}/.ssh"
COPY installation/secrets/.ssh/* "${USER_DIR}/.ssh/"
RUN touch "${USER_DIR}/.ssh/known_hosts"
RUN chmod 644 "${USER_DIR}/.ssh/known_hosts"
RUN chown ${USER_NAME}:${USER_NAME} "${USER_DIR}/.ssh/known_hosts"

USER "${USER_NAME}"

############################ Generator: plugin-git #############################
RUN ssh-keyscan -t rsa 'gitlab.com' >> "${USER_DIR}/.ssh/known_hosts"

RUN git config --global user.name  "${GIT_USER_NAME}"
RUN git config --global user.email "${GIT_USER_EMAIL}"
