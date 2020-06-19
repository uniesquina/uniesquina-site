# vuedocker-started

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### New Project with Docker
mkdir myproject && cd "$_" && docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -it node:lts-alpine sh -c "yarn global add @vue/cli && vue create ."