# Projeto:

O projeto consiste em uma aplicação web que oferece aos usuários a possibilidade de cadastrar, organizar e pesquisar os pokemons avistados e capturados em suas aventuras. Para tornar a experiência mais ágil, foi implementada uma barra de pesquisa na Pokedex.

A segurança dos dados dos usuários é uma prioridade, e por isso a autenticação é realizada por meio do Firebase, garantindo acesso exclusivo aos pokemons cadastrados por cada usuário. Dessa forma, as informações ficam protegidas e acessíveis apenas ao dono da conta.

A aplicação foi desenvolvida para ser utilizada em qualquer dispositivo com acesso à internet, proporcionando flexibilidade e praticidade aos usuários. Com a Pokedex personalizada, os treinadores têm uma ferramenta poderosa para acompanhar e aprimorar suas coleções de pokemons. A aplicação oferece uma experiência agradável e intuitiva, tornando o gerenciamento dos pokemons mais prático e organizado.

## Resumo:

- Aplicação web para cadastro de pokemons avistados e favoritados;
- Autenticação através do Firebase.
- Cadastro das informações no Firestore Database.

## Identificação do problema:

- Dificuldade de organização da Pokedex;
- Falta de agilidade na pesquisa.

## Solução:

- Cadastro de pokemons;
- Organização da Pokedex;
- Acesso exclusivo e seguro através da autenticação com o Firebase.

## Rodando o projeto:

No terminal, digite:

```
https://github.com/pvcapuano/next-pokedex.git
cd next-pokedex
yarn install
```

Na pasta raiz, crie um arquivo chamado ".env.local" e cole o conteúdo do arquivo que foi disponibilizado por e-mail

Feito isso, rode o comando abaixo:

```
yarn dev
```

####

## Telas:

![image](https://github.com/pvcapuano/desafio-ng/assets/10540844/0c5311fc-26ab-4ebc-a460-3a8362461870)
<sub>Login</sub>

![image](https://github.com/pvcapuano/desafio-ng/assets/10540844/2f0b1784-0509-4be7-ba18-4404a6b630c7)
<sub>Dashboard</sub>

![image](https://github.com/pvcapuano/desafio-ng/assets/10540844/44df5b9d-cd5f-41b8-9497-5a43a2c34f07)
<sub>Firebase Firestore</sub>

![image](https://github.com/pvcapuano/desafio-ng/assets/10540844/6d9849c5-df80-404f-9aa4-f53f53b92074)
<sub>Code</sub>

## Projeto em produção:

<p>
 <a href="https://desafio-ng-git-main-pvcapuano.vercel.app/" target="_blank"> 
  <img src="https://ml.globenewswire.com/Resource/Download/3a54c241-a668-4c94-9747-3d3da9da3bf2?size=2" alt="Vercel" width="100"/> 
 </a>
</p>

## Tecnologias:

- NextJs
- React Hooks
- Context
- Custom Hooks
- Redux
- Tailwind
- Toastify
- Firebase Firestore
- Firebase Authentication
- Prettier

## Atividades realizadas:

- A escolha do Next.js como framework principal para o desenvolvimento da aplicação web, proporcionando uma base sólida e eficiente para a construção do projeto.
- A implementação do Tailwind CSS como biblioteca de estilos, permitindo uma abordagem simplificada e eficaz para o desenvolvimento e estilização dos componentes da aplicação.
- A utilização do Firebase Firestore como banco de dados, oferecendo uma solução confiável e escalável para armazenar e gerenciar as séries de treino cadastradas pelos usuários.
- A integração do Firebase Authentication para garantir a autenticação segura dos usuários, protegendo os dados e fornecendo acesso exclusivo a cada usuário.
- A adoção do Prettier como ferramenta de formatação de código, garantindo a padronização e a legibilidade do código ao manter uma formatação consistente e organizada.

## Futuras melhorias:

- Criar um botão para remover os pokemons da Pokedex.
- Melhorar o design da aplicação.
- Criar o fluxo de "Esqueci a senha"
- Colocar autenticação via SSO.
