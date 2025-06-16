


# Demanda 3:

---

# Jenkins Pipeline 

## Descrição

Este projeto demonstra uma pipeline declarativa do Jenkins (Jenkinsfile) que automatiza etapas essenciais de integração e entrega contínua (CI/CD) utilizando Docker. O objetivo é mostrar, de forma clara e organizada, como orquestrar o clone de um repositório público do GitHub, a execução de containers Docker durante a pipeline, a execução de comandos genéricos dentro desses containers e o deploy de um serviço Docker.

---

## Estrutura do Projeto

```
Jenkins/
└── Jenkinsfile
```


---

## Jenkinsfile

O arquivo `Jenkinsfile` implementa as seguintes etapas:

- **Clone:** Clona o repositório público `https://github.com/BrasilAPI/BrasilAPI.git`.
- **Run Docker:** Executa um container Docker com a imagem `alpine` e roda um comando de teste dentro do container.
- **Deploy:** Sobe um container Docker com a imagem `nginx`, mapeando a porta 8080 do host para a porta 80 do container.

---

## Como Executar

1. **Configure o Jenkins:**
    - Instale o Jenkins localmente ou via Docker.
    - Instale os plugins: **Pipeline**, **Docker Pipeline** e **Git**.
    - Certifique-se de que o Jenkins tem acesso ao Docker (ex: mapeando `/var/run/docker.sock`).
2. **Crie um novo Pipeline:**
    - No painel do Jenkins, clique em **Novo Item** > **Pipeline**.
    - Configure para usar o `Jenkinsfile` deste projeto (pode ser via SCM ou colando o conteúdo).
3. **Execute o Pipeline:**
    - Clique em **Build Now**.
    - Acompanhe a execução pelo console do Jenkins.

---

## Dificuldades e Lógica Utilizada para Superação

- **Integração Jenkins + Docker:**
Inicialmente, enfrentei dificuldades para permitir que o Jenkins executasse comandos Docker, especialmente ao rodar Jenkins em container. A solução foi mapear o socket do Docker (`/var/run/docker.sock`) para dentro do container Jenkins, permitindo o controle dos containers Docker pelo pipeline.
- **Permissões do Docker:**
Em alguns ambientes, foi necessário adicionar o usuário Jenkins ao grupo Docker para evitar erros de permissão.
- **Execução de comandos dentro do container:**
Ajustei a sintaxe do Jenkinsfile para garantir que o comando fosse executado dentro do container correto, utilizando o bloco `agent { docker { ... } }` para isolar o ambiente.
- **Deploy de container na etapa final:**
Testei diferentes formas de rodar containers na etapa de deploy, optando por `docker.image('nginx').run('-d -p 8080:80')` para garantir que o serviço estivesse acessível e rodando ao final da pipeline.
- **Validação do ambiente:**
Realizei testes locais e em ambiente Docker para garantir que todos os passos funcionassem independentemente do sistema operacional do host.

---

## Referências

[Learn Jenkins! Complete Jenkins Course - Zero to Hero](https://www.youtube.com/watch?v=6YZvp2GwT0A)
[Documentação Oficial Jenkins](https://www.jenkins.io/doc/book/)


