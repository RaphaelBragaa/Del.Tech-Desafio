
# Demanda 3:

## ELK Stack + Docker Compose

## Como Executar

1. **Suba os containers:**

```bash
docker-compose up -d
```

5. **Verifique se os serviços estão rodando:**
    - **Elasticsearch:**
Acessível em `http://localhost:9200` (usuário: `elastic`, senha: `MinhaSenhaForte123!`)
    - **Logstash:**
Pronto para receber logs na porta `5044`

---


## Dificuldades e Lógica de Superação

- **Configuração de segurança no Elasticsearch:**
Inicialmente, não estava claro como habilitar a autenticação via Docker Compose. Utilizei a documentação oficial da Elastic e exemplos da comunidade para definir corretamente as variáveis de ambiente (`xpack.security.enabled=true` e `ELASTIC_PASSWORD`).
- **Integração entre Elasticsearch e Logstash:**
Tive dificuldades para garantir que o Logstash se conectasse ao Elasticsearch com autenticação. A solução foi definir as variáveis de ambiente e o arquivo de configuração do Logstash com as credenciais corretas.
- **Persistência de dados:**
Para garantir que os dados do Elasticsearch não fossem perdidos ao reiniciar os containers, configurei um volume dedicado (`elastic_data`).
- **Organização dos arquivos:**
Mantive a estrutura de pastas simples e clara, facilitando a manutenção e a execução do projeto.
- **Aprendizado sobre Docker Compose e ELK Stack:**
Como nunca havia trabalhado com ELK Stack antes, precisei estudar a documentação, assistir tutoriais e testar diferentes configurações até alcançar o resultado esperado.

---

## Referências

[How To Install ELK Stack Using Docker Compose](https://www.youtube.com/watch?v=pkQyH8xF-Xo)
[Documentação Oficial - Elastic](https://www.elastic.co/docs/deploy-manage)

