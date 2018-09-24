# curso_node
Curso Node.js API c/ Restify e mongodb

# NPM
* init modulo gerenciado pelo npm com defaults - npm init -y 
* instalar modulo para dev apenas - npm i --save-dev (ou -D)
* instalar modulo para runtime - npm i --save (ou -P)
* add param -E para indicar no package.json que deve sempre baixar a versão indicada da dependência - ex npm i restify@6.3.4 --save -E

# Compilador TS
* compilador typescript - tsc (-w p/ watchdog arquivos e compilar js)
* tsc --init - inicializa compilador e cria arquivo tsconfig.json default
* arquivo tsconfig.json com configurações para compilação
* target - definir como es6
* outDir - definir pasta (dist por ex) para geração dos js compilados
* sourceMap - definir como true para gerar mapa para debug com codigo ts em vez do js gerado
* esModuleInterop - comentar ou desabilitar para manter js usando commonjs para import / export (require e exports)

# Debug
* node --inspect-brk
* usar chrome://inspect e conectar a instância do node

# Pacotes úteis
* nodemon - monitor de projetos node (inst global)
* typescript - compilador typescript x js
* yargs - gerenciador de parametros de linha de comando
* restify - framework api rest
* @types/node - pacote de definições TS p/ pacotes comuns js
* @types/yargs - pacote definiçoes do yargs
* @types/restify

# Comandos úteis
* nodemon - disparar projeto e monitorar por alterações

# Extensoes vscode úteis
* eslint
* tslint
* gitlens
* javascript(es6) code snippets
* node.js extension pack
* node.js modules intellisense
* npm
* npm intellisense
* path intellisense
* search node_modules
* typescript hero
* vscode great icons

#mongodb
* db.collection.insert(obj)
* db.collection.find([{attr:value}])
* db.collection.findOne([{attr:value}])
* db.collection.update({attr:value}, obj)
* db.collection.update({attr:value}, {'$set':obj})
* db.collection.find({attr:/regex/}) - "like"
