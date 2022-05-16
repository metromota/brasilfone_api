# Descrição do Teste

## Projeto BRASILFONE_API em NestJS

## Banco de dados

```bash
# Baixando imagem Postgres
$ docker pull postgres

# Sob container postgres
$ docker run --name brasilfone_api -e POSTGRES_PASSWORD=SENHA -p 5432:5432 -d postgres

```

## Instalação das Dependências

```bash
$ yarn install
```

## Rodando a Aplicação

```bash
# modo de desenvolvimento
$ yarn run start:dev

# modo de produção
$ yarn run start:prod
```

### OBS: Banco POSTGRESQL rodando no mesmo HOST, caso não esteja alterar app.module.ts 
```
 TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost', //host do banco
      port: 5432,
      username:'postgres',
      password:'SENHA',
      database:'postgres',
      entities: [__dirname+ '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

```


## Rota de Login API

```
# Rota POST: 'http://localhost:4000/account/login'

Body Params:
{
	"username":"",
	"password":""
}

Resposta caso solicitação for ok:
{
  "message": "User Authenticate",
  "success": true,
  "data": {
    "id": "",
    "name": "",
    "email": ""
  },
  "error": null
}

OBS: Username poder ser E-mail ou Número

```

## Rota de Cadastro API

```
# Rota POST: 'http://localhost:4000/account/create'
{
	"name":"",
	"email":"",
	"password":"",
	"tel":"",
	"ddi":""
	"newsletter":""
	"privacy":""
}

Resposta caso solicitação for ok:
{
  "message": "Usuário Criado com Sucesso.",
  "success": true,
  "error": null
}

```

## Resposta de Erro

```
{
  "message": "Verificar os dados.",
  "success": false,
  "data": null,
  "error": [
    "Nome do usuário já existe.",
    "Email do usuário já existe.",
    "Número do usuário já existe."
  ]
}

```


## Manter contato
- Author - [Herton Mota](https://www.linkedin.com/in/herton-mota/)


## License

[MIT licensed](LICENSE).