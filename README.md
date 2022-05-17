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

### OBS: Banco POSTGRESQL rodando no mesmo HOST, caso não esteja alterar o host app.module.ts 
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

Resposta caso solicitação for Ok:
  {
    "id": 1,
    "name": "name",
    "email": "email@email.com",
    "tel": "999999999",
    "ddi": "55",
    "privacy": "sim",
    "newsletter": "sim"
  }

Resposta caso username não exista exista:
  {
	  "statusCode": 401,
	  "message": "Username Dont Exists"
  }

Resposta caso senha esteja incorreta:
  {
    "statusCode": 401,
    "message": "Invalid Password"
  }

OBS: Username poder ser E-mail ou Tel

```

## Rota de Cadastro API

```
# Rota POST: 'http://localhost:4000/account/create'

Body Params:
  {
    "name":"",
    "email":"",
    "password":"",
    "tel":"",
    "ddi":""
    "newsletter":""
    "privacy":""
  }

Resposta caso solicitação for Ok:
  {
    "id": 1,
    "name": "name",
    "email": "email@email.com",
    "ddi": "55",
    "tel": "999999999",
    "newsletter": "sim",
    "privacy": "sim"
  }

Resposta caso o username já exista
  {
    "statusCode": 400,
    "message": "Email or Tel already exists"
  }

```

## LinkedIn
- Author - [Herton Mota](https://www.linkedin.com/in/herton-mota/)


## License

[MIT licensed](LICENSE).