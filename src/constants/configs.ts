export const languageMappingsWithText: {[key: string]: string} = {
    c: "printf(\"{selectedSnippet}: %d\", {selectedSnippet});",
    cpp: "cout << \"{selectedSnippet}: \" << {selectedSnippet};",
    go: "fmt.Printf(\"{selectedSnippet}: %d\", {selectedSnippet})",
    java: "System.out.println(\"{selectedSnippet}: \" + {selectedSnippet});",
    javascript: "console.log('{selectedSnippet}: ', {selectedSnippet});",
    javascriptreact: "console.log('{selectedSnippet}: ', {selectedSnippet});",
    php: "echo '<pre>';\necho '${selectedSnippet}: ';\nvar_dump(${selectedSnippet});\ndie;",
    ruby: "puts \"{selectedSnippet}: #\{{selectedSnippet}.pretty_inspect\}\"",
    python: "print('{selectedSnippet}: ' + str({selectedSnippet}))",
    typescript: "console.log('{selectedSnippet}: ', {selectedSnippet});",
    typescriptreact: "console.log('{selectedSnippet}: ', {selectedSnippet});",
    vue: "console.log('{selectedSnippet}: ', {selectedSnippet});",
};

export const languageMappingsBase: {[key: string]: string} = {
    c: "printf();",
    cpp: "cout << \"\";",
    go: "fmt.Printf()",
    java: "System.out.println();",
    javascript: "console.log();",
    javascriptreact: "console.log();",
    php: "echo '<pre>';\nvar_dump();\ndie;",
    python: "print()",
    ruby: "puts",
    typescript: "console.log();",
    typescriptreact: "console.log();",
    vue: "console.log();",
};

export const languageImportMappings: {[key: string]: string} = {
    c: "#include <stdio.h>",
    cpp: "#include <iostream>",
    go: "import \"fmt\"",
    java: "import java.util.*;",
    javascript: "",
    javascriptreact: "",
    php: "",
    python: "",
    ruby: "",
    typescript: "",
    typescriptreact: "",
    vue: "",
};

// abap
// bat
// bibtex
// clojure
// coffeescript
// c
// cpp
// csharp
// css
// diff
// dockerfile
// fsharp
// git-commit
// git-rebase
// go
// groovy
// handlebars
// html
// ini
// java
// javascript
// javascriptreact
// json
// jsonc
// latex
// less
// lua
// makefile
// markdown
// objective-c
// objective-cpp
// perl
// perl6
// php
// plaintext
// powershell
// jade
// python
// r
// razor
// rust
// scss
// sass
// shaderlab
// shellscript
// sql
// swift
// typescript
// typescriptreact
// tex
// vb
// xml
// xsl
// yaml
