<div align="center">
  <h1>Climatempo - Challenge</h1>
</div>

![Banner](https://i.imgur.com/OaHBlXQ.jpg)

#### Seja bem vindo ao projeto Climatempo - Challenge! Leia os tópicos abaixo se quiser saber mais sobre o projeto, ou queira testar localmente no seu dispositivo! ;)

## 🟢 Sobre:

<br>

### 🗂️ O projeto: 
&nbsp; • Consistindo em uma aplicação de previsão do tempo, criei todo o layout no <code>Figma</code>, utilizei o <code>ReactJS</code> para desenvolver toda a UI no Front-End e <code>NodeJS</code> com <code>Express</code> para desenvolver o Back-End. <br><br>
&nbsp; • Por não possuir grandes conhecimentos em criação de APIs, <code>aprendi na prática, seguindo documentações</code> e aproveitando os conhecimentos que eu já tinha. <br><br>
&nbsp; • Atualmente a aplicação conta somente com duas localizações, sendo <code>São Paulo</code> e <code>Osasco</code>, também <code>é possível pesquisar lugares pela sigla do estado</code>.

<br>

### 🔗 Links: 
&nbsp; • Deploy: <a href="https://climatempo-challenge-pi.vercel.app/" target="_blank">Clique aqui</a>\
&nbsp; • Servidor: <a href="https://github.com/GuilhermeDunguel/Climatempo-Challenge-Server" target="_blank">Clique aqui</a>\
&nbsp; • Figma: <a href="https://www.figma.com/file/IeI4LBINBtfn4shoOfjiri/Untitled?node-id=49%3A978&t=E2hhWE4HgX1D54N3-1" target="_blank">Clique aqui</a>


<br>

### ❗ Instruções:
#### É possível acessar este projeto pelo deploy, sendo completamente funcional graças ao <a href="https://github.com/GuilhermeDunguel/Climatempo-Challenge-Server">servidor desenvolvido</a>, porém, se você deseja baixar e testar o projeto localmente, existem alguns passos que você deve seguir!

<strong> 1️⃣ • Clone o repositório usando o GIT </strong>

```
git clone git@github.com:GuilhermeDunguel/Climatempo-Challenge.git
```

<br>


<strong> 2️⃣ • Instale as dependências do projeto</strong>

```
npm install
```

<br>

<strong> 3️⃣ • Altere a URL da requisição da API para o JSON-Server</strong><br>
<ol>
  <li>Vá no diretório <code>src/utils/axios.ts</code></li>  
  <li>Descomente o <code>baseURL</code> cujo valor seja igual a <code>"http://localhost:3000/"</code> para que seja possível utilizar o <a href="https://www.npmjs.com/package/json-server">JSON-SERVER</a>
  <li>Comente a <code>baseURL</code> cujo valor seja da API externa, </code>
</ol>

#### O seu código deve ficar assim: 
```js
import axios from "axios";

export const api = axios.create({
  // baseURL: "https://climatempo-challenge-server.vercel.app/",
  baseURL: "http://localhost:3000/",
}, )
```

<br>

<strong> 4️⃣ • Inicialize o servidor e a aplicação</strong><br>
##### &nbsp;&nbsp; 1. Rode o comando abaixo para iniciar o servidor:

```
npm run server
```

##### &nbsp;&nbsp; 2. Rode o comando abaixo para iniciar a aplicação:

```
npm run dev
```

<br>

### 🖥️ Linguagens e ferramentas: 
• <img width="20px" src="https://skillicons.dev/icons?i=react" alt="react icon"/> ReactJS\
• <img width="20px" src="https://skillicons.dev/icons?i=typescript" alt="typescript icon"/> TypeScript\
• <img width="20px" src="https://skillicons.dev/icons?i=sass" alt="sass icon"/> SASS\
• <img width=20px src="https://phosphoricons.com/favicon-512.png"> Phosphor Icons

## ✏️ Criado por
<div align='center'>
  <img src="https://avatars.githubusercontent.com/u/89926690?v=4" width="100px">
  <br>
  <a align='center' src="https://github.com/GuilhermeDunguel">Guilherme Dunguel</a>
</div>
