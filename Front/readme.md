

# Demanda 02:
---
## Front-end Html + Nginx + Docker

---

## Estrutura do Projeto

```
Front/
└── src/
    ├── index.html
    ├── Dockerfile
    └── nginx.conf
```


---

## Como Executar

1. **Acesse o diretório do projeto:**

```bash
cd Front/src
```

2. **Construa a imagem Docker:**

```bash
docker build -t deltech-nginx .
```

3. **Execute o container:**

```bash
docker run -d --name deltech-nginx -p 8080:80 deltech-nginx
```

4. **Acesse no navegador:**

```
http://localhost:8080
```

Você deve ver a mensagem **Hello Del.Tech World**.

---

## Lógica Utilizada

- O **index.html** contém o texto solicitado e é copiado para o diretório padrão do Nginx (`/usr/share/nginx/html`).
- O **nginx.conf** foi configurado para garantir que o Nginx sirva corretamente o arquivo HTML na raiz, ouvindo na porta 80.
- O **Dockerfile** remove a configuração padrão do Nginx, copia o arquivo de configuração customizado e o HTML para os diretórios corretos, utilizando o comando `COPY` conforme exigido.

---

## Dificuldades e Soluções

- **Diretório correto para servir arquivos:**
Inicialmente, tentei servir o HTML a partir de `/var/www/html`, mas descobri que a imagem oficial do Nginx no Docker utiliza `/usr/share/nginx/html` como diretório padrão para arquivos estáticos. Ajustei o Dockerfile e o nginx.conf para usar o caminho correto.
- **Configuração personalizada do Nginx:**
Foi necessário remover a configuração padrão (`default.conf`) e garantir que o novo `nginx.conf` fosse copiado para o local correto, evitando conflitos e garantindo que o index.html fosse servido como página inicial.
- **Validação do build:**
Tive que ajustar o contexto do build e garantir que todos os arquivos necessários estivessem no diretório correto para que o Dockerfile funcionasse sem erros.
- **Execução e testes:**
Testei diferentes portas e comandos de execução para garantir que o container estivesse acessível e servindo o HTML corretamente, conforme os critérios de validação.

---

## Referência

- [Deploying NGINX and NGINX Plus with Docker - Documentação Oficial](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-docker/)

---

