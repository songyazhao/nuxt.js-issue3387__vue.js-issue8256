# nuxt.js-issue3387__vue.js-issue8256

Tips: My English is very poor, forgive me, The following part of the English description translation.

> A minimal reproduction, bug in 'vue-server-renderer'

> 一个关于'vue-server-renderer'的最小化问题重现仓库


## Reproduction Step
## 复现步骤

- Step one
- 第一步
``` bash
# install dependencies
$ yarn install # Or npm install
```

- Step two
- 第二步

  *`nuxt.config.js` Add the following configuration:*

  *`nuxt.config.js` 添加配置如下：*

  ```javascript
  module.exports = {
    ...
    build: {
      filenames: {
        chunk: '[name].js?v=[chunkhash]'
      }
    }
  }
  ```

- Step three
- 第三步

  ``` bash
  # generate static project
  $ yarn generate # Or npm run generate
  ```

- Step four
- 第四步

  *An error is as follows:*

  *呈现如下错误：*

  ```bash
  Generate errors summary:

  ROUTE  /

    Error: Cannot find module 'pages_index.js?v=4759969c1da21941ddd6' from 'E:\GitRepo-Other\vue-server-renderer-bug-mini-repo'

    - sync.js:42 Function.module.exports [as sync]
      [vue-server-renderer-bug-mini-repo]/[resolve]/lib/sync.js:42:15

    - build.js:8350 r
      [vue-server-renderer-bug-mini-repo]/[vue-server-renderer]/build.js:8350:44

    - server-bundle.js:41 Function.requireEnsure [as e]
      server-bundle.js:41:25

    - server-bundle.js:2910 _47e85732
      server-bundle.js:2910:45

    - server-bundle.js:221 __WEBPACK_IMPORTED_MODULE_1_E_GitRepo_Other_vue_server_renderer_bug_mini_repo_node_modules_babel_runtime_core_js_promise___default.a.all.flatMapComponents
      server-bundle.js:221:25

    - server-bundle.js:212
      server-bundle.js:212:14

    - Array.map

    - server-bundle.js:211
      server-bundle.js:211:163

    - Array.map

    - server-bundle.js:210 flatMapComponents
      server-bundle.js:210:57

    - server-bundle.js:218 resolveRouteComponents
      server-bundle.js:218:147

    - server-bundle.js:229 getRouteData
      server-bundle.js:229:9

    - server-bundle.js:309 setContext
      server-bundle.js:309:48

    - server-bundle.js:1609 createApp
      server-bundle.js:1609:76

    - server-bundle.js:1284 module.exports.__webpack_exports__.default
      server-bundle.js:1284:100

    - build.js:8446
      [vue-server-renderer-bug-mini-repo]/[vue-server-renderer]/build.js:8446:15
  ```

## Bug tracking
## Bug 追溯

  *` nuxt.Js ` the configuration above will generate related ` webpack ` configuration is as follows:*

  *` nuxt.js ` 的上述配置会生成相关的 `webpack` 配置如下：*

  ```javascript
  module.exports = {
  ...
    output: {
      ...
      chunkFilename: '[name].js?v=[chunkhash]'
    }
  ...
  }
  ```

  *Locating the problem:*

  *最终定位到问题：*

  > vue-server-renderer/server-plugin.js:78

  ```javascript
  if (asset.name.match(/\.js$/)) {
    ...
  }
  ```

  *Modified to:*

  *修改为：*

  ```javascript
  if (isJS(asset.name)) {
    ...
  }
  ```

  *Can solve this problem, but I don't know his judgment changed here will not affect other places*

  *可以解决这个问题，但是我不知道他这里的判断改了会不会对其他地方产生影响*
