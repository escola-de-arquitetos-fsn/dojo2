FROM node:8.12.0-alpine

LABEL maintainer="filipef9@hotmail.com"

RUN \
    apk add --no-cache --virtual .persistent-deps \
        curl \
        openssl \
        vim \
        git \
        # node-sass dependencies
        build-base \
        python \
        py-pip &&\
    # shell setup
    sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd &&\
    npm cache verify &&\
    # config npm with user root
    npm -g config set user root &&\
    # install node dev packages
    npm install -g \
        browser-sync \
        gulp \
        grunt \
        bower \
        eslint

# set up the workspace directory
VOLUME ["/workspace"]
WORKDIR /workspace

EXPOSE 3000 3001 8000

CMD ["npm", "-v"]