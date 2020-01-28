# Desafio | Frontend Developer

> **Link da aplicação no Netlify:** https://confident-nobel-0ee512.netlify.com/.

### Resumo:

Projeto construido utilizando HTML, CSS E JavaScipt com a biblioteca React e todo seu ecossistema. Busquei me aproximar ao máximo do layout inicial e dar vida com o JavaScript, procurando trazer melhorias como uma melhor responsividade.

---

### Layout:

Layout construido de forma simples, procurando trazer simplicidade e desempenho. Usei o template grid para construção da sessão de produtos, facilitando a adição de produtos na página. Utilizei os styled componentes buscando simplificar o CSS.

---

### Funcionamento da página:

- Inicialmente a página carrega de forma em que o useEffect tem a função de carregar os itens iniciais da api e setar estados como o próximo link da api. Com a requisição feita, e a lista já armazenada em um estado da aplicação, uso o método .map que faz a leitura do estado e me devolve os itens que são carregados em tela. Após todo carregamento da página, caso o botão **Ainda mais produtos aqui!** seja acionado, ele dispara uma função que faz uma requisição com o link setado com o useEffect, que devolve outra lista e é adicionada juntamente com o estado anterior da lista.

- Foi utlizada a função formatPrice, para no momento da requição a resposta já incluisse no estado, os preços formatados de forma correta, evitando ter que fazer isso no momento da leitura, fazendo assim com que o melhor desempenho fosse garantido.

- Newsletter: Foi utilizada a biblioteca de unform da Rocketseat, buscando facilitar e aprimorar a função, utilizando também yup para validar as informações.

---

## Instruções:

- Faça o download da aplicação e rode o comando **yarn install** para instalar todas as dependencias do projeto;
- Após installar todas as dependencias, rode **yarn start** para vizualizar a aplicação na web

> Garanta que você possui o Node.js e o Yarn devidamente instalado.

---

### Ferramentas/Bibliotecas utilizadas:

- Axios
- Reactotron (utlizado para debug em ambiente de desenvolvimento)
- Yup
- Unform
- ReactJs
- Styled Components
- Eslint, editorConfig, prettierrc(Buscando padronizar o código)

---

## Considerações sobre o resultado:

- Procurei melhorar a resposividade da página, procurando seguir ao máximo o layout inicial.

- Os botões do header e o da compra estão sem emitir resposta propositalmente.

- Os inputs do newsletter estão fazendo a validação e mandando os dados normalmente para data após dar o Submit.

---

**Obrigado (ツ)**
