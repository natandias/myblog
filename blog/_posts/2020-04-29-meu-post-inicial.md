---
title: GIT e Github
date: 2020-10-12
author: natandias
tags: 
  - Git
  - Github
---

"O Git é um sistema open-source de controle de versão utilizado pela grande maioria dos desenvolvedores atualmente. Com ele podemos criar todo histórico de alterações no código do nosso projeto e facilmente voltar para qualquer ponto para saber como o código estava naquela data.
Além disso, o Git nos ajuda muito a controlar o fluxo de novas funcionalidades entre vários desenvolvedores no mesmo projeto com ferramentas para análise e resolução de conflitos quando o mesmo arquivo é editado por mais de uma pessoa em funcionalidades diferentes."

Rockseat, 2017

## Instalando o GIT e integrando ao Github

1. **Faça o download e instale o GIT BASH:**
  [Git Bash Download](https://git-scm.com/downloads)

2. **Crie uma conta no Github.**

3. **Abra o Git Bash e gere uma chave SSH, que será usada para realizar as operações entre o seu dispositivo local e o Github:**
   Obs: email deve ser o mesmo que foi cadastrado no Github.  
   `ssh-keygen -t rsa -b 4096 -C "seuEmail@exemplo.com"`  
   Dê Enter em todas as etapas. Recomendo que não coloque senha para não ter que digita-lá toda vez que precisar realizar uma operação.

4. **Inicie o agente SSH:**
   `eval $(ssh-agent -s)`

5. **Adicione a chave SSH gerada ao agente SSH:**
   `ssh-add ~/.ssh/id_rsa`

6. **Copie a chave SSH gerada para a área de transferência:**  
   `clip < ~/.ssh/id_rsa.pub`  
   Obs: se o comando clip não funcionar, tente usar o cat e copiar a chave que aparece no terminal:  
   `cat < ~/.ssh/id_rsa.pub`  
   A chave deve estar no formato "ssh-rsa CaratecteresAleatorios seuEmail".

7. **Adicione a chave SSH ao Github:**
   No canto direito superior do site, clique na foto de perfil, e em seguida clique em ‘settings’, na barra lateral clique em ‘SSH and GPG keys’, na tela que abriu clique no botão ‘New SSH Key’.
   Em seguida, escolha um nome pelo qual a sua máquina será conhecida, no campo ‘key’ insira a chave copiada e clique em ‘Add SSH Key’.

_Esse passos podem ser diferentes de acordo com o Sistema Operacional usado, clique [aqui](https://help.github.com/pt/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) para acessar o artigo completo._

## Criando um repositório no GIT

### Criando repositório remoto no Github

Na página inicial do [Github](https://github.com):
Clique no ‘+’ no canto superior direito, vá em ‘new repository’:
Escolha um nome para o ‘repository name’ e clique em criar. Prefira criar um repósitorio vazio para evitar erros na hora de subir o seu repositório local.  
Agora, você precisa criar um repositório local que será subido para o Github.

## Criando repositórios locais

### Configurando o GIT

**Todos os comandos abaixo devem ser rodados no Git Bash ou no terminal se estiver usando Mac ou Linux.**

É necessário configurar o seu nome de usuário e email para utilizar o GIT, para isso rode os seguintes comandos no Git Bash:  
**Os dados devem ser os mesmos dos usados na criação da conta do Github, e devem ser digitados entre aspas:**  
git config --global user.name "_seunome_"  
git config --global user.email "_seuemail_"  
**Se quiser, pode definir um editor de texto de sua preferência:**  
git config --global core.editor "_seuEditordeTexto_"

### Listando configurações do GIT

Mostra config específica (substitua _user.name_ pela config que quiser)  
`git config user.name`

Listar todas as configs  
`git config --list`

### Iniciando o repositório local

Crie uma pasta no computador onde ficará armazenado o seu projeto.  
Clique com o botão direito do mouse e escolha ‘Git Bash here’, um terminal do Git Bash será aberto. Rode então o comando para iniciar um novo repositório:  
`git init`

Crie um arquivo ‘teste.txt’ dentro da pasta e insira algum texto nele.

### Visualizando status do repositório local

`git status`  
Esse comando mostra informações sobre seu repositório, como a _branch_ em que você está trabalhando, se o seu repositório local está sincronizado com o remoto, e o status dos arquivos do seu repo, se estão sendo rastreados, se precisam ser commitados, etc.

### Rastreando os arquivos

`git add .`  
Esse comando adiciona todos os arquivos da pasta para que sejam monitorados pelo sistema de versionamento, ou seja, você poderá voltar para uma versão antiga do arquivo se necessário.

Se quiser adicionar um arquivo especifíco use: `git add nomeDoArquivo`

### Commitando alterações

`git commit -m “mensagem”`

Esse comando criará uma versão do seu projeto, em mensagem, você deve inserir uma curta descrição do que foi alterado nessa versão em relação a anterior.  
Ex: você criou um arquivo index.js na pasta, então você pode rodar o seguinte comando:
`git commit -m “Add index.js”`

Cada commit possui um hash, que funciona como seu número de identificação, isso serve para manter a integridade do sistema, e poder realizar operações sobre um commit posteriormente.

### Subindo o seu repositório para o Github

Volte agora para o repositório que você criou no Github. Agora, copie o primeiro comando que está na área: **“...or push an existing repository from the command line”**, abra o Git Bash (botão direito do mouse -> Get Git Bash here) na pasta em que está o seu projeto local, cole o comando (shift + insert) e rode. Logo após, copie e rode o segundo comando.

**PRONTO, VOCÊ JÁ TEM O SEU PRIMEIRO REPOSITÓRIO NO GITHUB.**

## Extra

### Listar conteúdo de uma pasta

`ls`: lista somente arquivos  
`ls -a`: lista arquivos e pastas  
`ls -l`: lista somente arquivos com informações sobre eles  
`ls -la`: combina os outros dois (arquivos, pastas e infos)

### Usando editor externo

`code Readme.md`  
Abre o arquivo no VsCode

### Usando editor interno (terminal)

`vim Readme.md`  
i: habilita edição

Para sair:  
pressione `ESC`  
digite `:wq`  
dê `ENTER`

### Estados do Git

Para visualizar:  
`git status`

O Git implementa um sistema em que os arquivos do repósitorio sempre estão em um dos seguintes estados possíveis:

**Arquivo foi criado:**  
_Untracked:_ arquivo foi adicionado, mas ainda não foi 'registrado' no Git.

**Após dar git add arquivo**  
_Staged:_ arquivo começa a ser monitorado.

**Após dar commit**  
_Unmodified:_ versão do arquivo é salva e passa a ser tratada como a versão atual

**Após editar**  
_Modified:_ a versão criada com o commit anterior foi modificada

**Dê git add arquivo**  
_Staged:_ é criada nova versão do arquivo

**Dê commit (git commit -m "mensagem de log")**  
Nova versão é consolidada e salva.

### Outros comandos úteis

`git log`  
Mostra relatório dos commits feitos no repositório

`git log --decorate`  
log com informações adicionais

`git log --author="nome"`  
procura commits feitas por determinada pessoa

`git shortlog`  
log resumido somente com autores e commits

`git shortlog -sn`  
mostra as pessoas que contribuiram no projeto

`git shortlog -graph`  
log gráfico

`git show hash_do_commit`  
mostra dados sobre determinado commit

`git diff`  
mostra os arquivos modificados e quais as modificações

`git diff --name-only`  
mostra somente o nome dos arquivos que foram modificados

`git commit -am "log msg"`  
Adiciona e já comita os arquivos modificados

`dir`  
mostra os diretórios da local em que o terminal está aberto

`git checkout`  
cancela modifições que ainda não foram para staged (não foi feito add ainda)

`git rm -r --cached arquivo`  
remove arquivos que ainda não foram pro stage

`git reset Head arquivo`  
cancela o comando _add_, quando o arquivo já está no estado staged mas ainda não foi feito commit

`git reset --`  
restaura para um commit anterior, usa-se hash do commit anterior ao que você quer cancelar, pois o último commit atua como ponteiro

`git reset --soft hash_do_commit`  
volta do commit pro staged

`git reset --mixed hash_do_commit`  
volta do commit pro modified (antes do staged)

`git reset --hard hash_do_commit`  
desaparece com o commit do mapa

`git push`  
envia atualizações do projeto pro Github

`git pull`  
atualiza o projeto local com o do Github

`git clone link_do_repositorio diretorio_onde_sera_armazenado`  
clona repositório do Github para o seu computador  
quando você clona o repositório não é possível fazer push se ele não for o seu

`git checkout -b nome_do_branch`  
cria branch  
Branches são como uma versão só sua do código, é imprescindível usá-las quando estamos trabalhando em um projeto com várias pessoas, para que um não atrapalhe o trabalho do outro.

`git branch`  
lista branch's existentes

`git rebase -i HEAD~N`  
remover commits mais antigos sem excluir os mais recentes

`git checkout nome_do_branch`  
movimentar entre branches

`git branch -d nome_do_branch`  
deletar branch  
**Não é possível deletar a branch em uso, é necessário ir para outra branch primeiro**

Para unir os branches:  
`git merge nome_do_branch`  
merge - é uma operação não destrutiva e cria um commit extra para juntar os branches, cria um árvore com várias bifurcações, bagunça o histórico

`git rebase nome_do_branch`  
rebase - coloca uma branch no ínicio da fila, deixa de forma linear, evita commit extra e mantém o histórico linear, mas perde ordem cronológica

`git pull --rebase`  
evita mudanças de histórico  
uso comum: quando for atualizar sua branch com master, use rebase.

Quando for introduzir a sua branch no master, use merge.  
chame o rebase ou merge na branch que deseja que eles sejam adicionados (geralmente a master).

`vim .gitignore`  
git ignore - lista de arquivos que não devem ser upados para o repositório  
insira os arquivos que devem ser ignorados ou insira as extensões que devem ser ignoradas. ex: senhas.txt ou \*.doc

**git stash - guarda modificação enquanto você edita**  
`git stash` - pra criar o arquivo  
`git stash creat 'nome_do_stage'` - cria com mensagem  
`git stash apply` - retorna o arquivo guardado  
`git stash list` - mostra o que está guardado  
`git stash clear` - limpa stash

`git config --global alias.novo_comando comando_a_substituir`  
alias - cria atalhos para comandos

`git tag -a nome_da_tag -m "Mensagem"`  
`git push origin master --tags`  
tags - serve para indicar novas versões (releases)

### Apagar tags e branches

`git revert hash_do_commit`  
git Revert - cria um novo commit apagando as ultimas alterações mas mantém o commit anterior, diferente do reset que apaga o commit

**Recuperar arquivo deletado**  
`git status`  
`git checkout -- nome_do_arquivo_deletado`

**Apagar tags e branches remotos**  
`git push origin :nome_Da_tag`  
`git push origin :nome_do_Branch`

`git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch nomeDoArquivo" HEAD`
remover arquivo do histórico do git -> se você upou um arquivo critíco e deseja apagar ele completamente do repositório.

**Fork**  
É uma cópia exata do projeto original para sua conta do Github, vá no repositório remoto que deseja e clique em fork, depois é só dar um clone do repositório copiado para sua máquina.
