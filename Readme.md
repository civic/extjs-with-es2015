# ExtJS6 with ES2015 source

build ES2015 javascript source.

- app-src: es2015 javascript source files
- app:  es2015 -> es5 javascript source files.

```
$ npm run watch
```

Other terminal.
```
$ sencha app watch
```

```
(edit) -> app-src -> (babel) -> app -> (sencha cmd) -> build -> (browser sync) -> browser
           es2015               es5              sencha build source
```
