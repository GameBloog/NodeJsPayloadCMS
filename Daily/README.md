## Perguntas e Considerações sobre o Sistema

### 1. Um produto poderia estar em mais de um catálogo?
- Essa é uma dúvida importante, pois pode afetar a estrutura do banco de dados e a lógica de negócios. A resposta dependerá de como a relação entre produtos e catálogos será modelada.

### 2. O usuário pode ler apenas seu catálogo ou o de outros usuários?
- É necessário definir se a leitura dos catálogos será restrita ao próprio usuário ou se haverá permissão para acessar catálogos de outros usuários.

### 3. Quem serão os usuários do PayloadCMS?
- Apenas administradores ou qualquer usuário autenticado poderá acessar o PayloadCMS para gerenciar produtos e catálogos?

### 4. A API está destinada a um e-commerce ou alguma aplicação específica?
- Caso seja para um e-commerce, há alguma regra especial para gerenciamento de produtos (ex.: desconto, categorias)? Este é um ponto fundamental para definir como a API deve ser estruturada.

### 5. Os catálogos pertencem a usuários específicos. Algum usuário poderá ter mais de um catálogo, ou será sempre um catálogo por usuário?
- A resposta a essa pergunta definirá a relação entre usuários e catálogos.

### 6. No caso de um produto fazer parte de múltiplos catálogos, devemos tratar cada produto como uma entidade única ou será permitida a criação de cópias do mesmo produto em diferentes catálogos?
- Esta é uma decisão importante para a modelagem do sistema. Devemos garantir que não haja duplicação desnecessária, ou permitir cópias para flexibilidade?

## Considerações Técnicas

- **Autenticação**: Considero a possibilidade de usar o sistema de autenticação do PayloadCMS para simplificar e acelerar a configuração de autenticação. Isso aproveita as ferramentas prontas para administrar usuários e permissões, além de tornar o sistema mais seguro, pois o PayloadCMS já lida com práticas de segurança embutidas. Mas vou ter que criar métodos para garantir os acessos corretos as rotas. 

- **Documentação da API**: Vou usar o Swagger para documentar os endpoints da API, pois ele oferece um visual interativo, facilitando a exploração da API e testes de requisições.

- **Dificuldades no Desenvolvimento**:
  - Devido à falta de prática com a ferramenta, enfrentei problemas na hora de implementar algumas soluções, tendo que improvisar em algumas situações.
  - Durante o desenvolvimento, me deparei com um bug onde o sistema exigia um email em um local onde não havia campo de email. Depois de muito procurar em fóruns, encontrei um usuário comentando sobre um possível índice que o banco de dados criava em determinadas operações. Após analisar os dados do banco de dados com cuidado, percebi que o índice realmente estava lá. Foi um processo difícil, mas bastante excitante e curioso.

- **Implementação do Swagger**: Queria implementar a documentação com o Swagger diretamente no PayloadCMS, mas não encontrei como fazer isso de forma nativa. Por isso, optei por criar a documentação manualmente, tanto em markdown quanto no Swagger.
