# Primeiro Projeto com NodeJS Express

Esse projeto não irá envolver banco de dados. Vou utilizar o framework
*express*, para desenvolver o projeto.

Vamos instalar as dependências do projeto com *npm install*. Para isso, vamos instalar o *express* e o *ejs*.

```js
npm init
npm install express
npm install ejs
```

Com essas duas dependências, conseguimos fazer muita coisa. 

| **Obs**: Também utilizei o módulo **nodemon**, contudo, não é essencial.

## Finalidade do Projeto

É um projeto simples onde não farei uso de banco de dados, apenas com **arrays**, vamos criar um projeto de criação e deleção de tarefas, utilizando as rotas com **express** e renderizando com **ejs** as páginas **html**.

O mais importante é entender como criar um site que faça a renderização de maneira dinâmica, e através deste projeto, consegui perceber o quão forte e incrível os métodos **JavaScript** são, e sua forte utilidade.

Durante o desenvolvimento do projeto, que é a de manipulação de tarefas, surgiu a necessidade da criação de um formulário em **POST**, e durante o envio, é preciso recuperar os dados transmitidos, e para isso, se faz necessário o uso de uma nova dependência:

```bash
npm install body-parser
```

Feito isto, agora temos integração total com o site.

## Para depois

Quero que, ao deletar uma tarefa, através das rotas, seja reencaminhado para a página principal, contudo, vou deixar para depois, por enquanto.

Por enquanto, vou dar continuidade no curso, e conforme for lendo as documentações, adquirindo mais experiência, vou melhorando e adicionando novas funcionalidades no projeto.
