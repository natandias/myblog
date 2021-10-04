(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{409:function(a,s,t){a.exports=t.p+"assets/img/nginx-running.67ff9d80.png"},410:function(a,s,t){a.exports=t.p+"assets/img/nginx-running-localhost.f3536e91.png"},411:function(a,s,t){a.exports=t.p+"assets/img/nginx-new-project-running.0315a219.png"},412:function(a,s,t){a.exports=t.p+"assets/img/etc-hosts-nginx.2ab20716.png"},413:function(a,s,t){a.exports=t.p+"assets/img/nginx-configured-server-block.6ab76085.png"},444:function(a,s,t){"use strict";t.r(s);var e=t(11),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"breve-introducao-ao-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#breve-introducao-ao-nginx"}},[a._v("#")]),a._v(" Breve introdução ao NGINX")]),a._v(" "),e("p",[a._v("O NGINX é um servidor web muito poderoso, com a capacidade de servir arquivos estáticos como HTML, CSS e Javascript, realizar balanceamento de carga, atuar como proxy para servidores de email e outros servidores web. O NGINX possui como vantagens a capacidade de lidar tranquilamente com milhares de conexões simultâneas e uma configuração inicial fácil, além de ser bastante extensível, contando com uma grande gama de configurações que podem ser utilizadas para adequar o servidor a diversas necessidades, servindo tanto para aplicações simples quanto para aplicações complexas e ambientes de alto tráfego de dados.")]),a._v(" "),e("h2",{attrs:{id:"instalando-o-nginx-em-distribuicoes-baseadas-no-ubuntu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instalando-o-nginx-em-distribuicoes-baseadas-no-ubuntu"}},[a._v("#")]),a._v(" Instalando o NGINX em distribuições baseadas no Ubuntu")]),a._v(" "),e("p",[a._v("Para escrita desse tutorial foi utilizada uma máquina com o sistema PopOS! 20.04 LTS 64 Bits, mas como é uma distribuição baseada no Ubuntu, os passos a serem seguidos aqui provavelmente funcionarão nele.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nginx\n")])])]),e("h3",{attrs:{id:"iniciando-o-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iniciando-o-nginx"}},[a._v("#")]),a._v(" Iniciando o NGINX")]),a._v(" "),e("p",[a._v("Se o NGINX não iniciar sozinho, o que pode ser conferido usando o comando:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl status nginx\n")])])]),e("p",[a._v("Você pode iniciá-lo assim:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start nginx\n")])])]),e("p",[a._v("O resultado esperado no terminal é esse:\n"),e("img",{attrs:{src:t(409),alt:"Nginx funcionando no terminal"}})]),a._v(" "),e("p",[a._v("E ao abrir o navegador no endereço localhost deverá ser exibida essa página, se a instalação tiver funcionado corretamente:\n"),e("img",{attrs:{src:t(410),alt:"Nginx funcionando no navegador"}})]),a._v(" "),e("h3",{attrs:{id:"possiveis-problemas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#possiveis-problemas"}},[a._v("#")]),a._v(" Possíveis problemas")]),a._v(" "),e("ul",[e("li",[a._v("Pode ocorrer algum conflito com o firewall que não permita o NGINX escutar as portas, se isso ocorrer, adicione o NGINX como exceção no firewall:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw allow "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Nginx HTTP'")]),a._v("\n")])])]),e("ul",[e("li",[a._v("Na etapa de acessar a aplicação pelo "),e("code",[a._v("server_name")]),a._v(" pode ser necessário utilizar o navegador Chromium ou o Chrome, no Firefox pode ser que não funcione.")])]),a._v(" "),e("h3",{attrs:{id:"diretorios-importantes-para-o-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diretorios-importantes-para-o-nginx"}},[a._v("#")]),a._v(" Diretórios importantes para o NGINX")]),a._v(" "),e("p",[a._v("Lembrando que as localizações desses diretórios podem mudar de sistema para sistema.")]),a._v(" "),e("p",[e("code",[a._v("/etc/nginx")]),a._v(": É onde se encontra toda a configuração do servidor.")]),a._v(" "),e("p",[e("code",[a._v("/var/www")]),a._v(": É onde ficam os projetos que serão servidos.")]),a._v(" "),e("p",[e("code",[a._v("/etc/nginx/sites-available")]),a._v(": Local onde devem ser adicionados os arquivos de configuração de cada projeto.")]),a._v(" "),e("p",[e("code",[a._v("/etc/nginx/sites-enabled")]),a._v(": Local onde devem ser criados links para os arquivos disponíveis no diretório sites-available que pertencem a projetos que serão executados.")]),a._v(" "),e("h3",{attrs:{id:"servindo-uma-pagina-html-simples-com-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servindo-uma-pagina-html-simples-com-nginx"}},[a._v("#")]),a._v(" Servindo uma página html simples com NGINX")]),a._v(" "),e("h4",{attrs:{id:"criando-projeto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#criando-projeto"}},[a._v("#")]),a._v(" Criando projeto")]),a._v(" "),e("p",[a._v("No diretório "),e("code",[a._v("/var/www")]),a._v(' crie uma nova pasta com o nome "testando".\nDentro dessa nova pasta adicione um arquivo index.html.\nInsira esse código dentro do arquivo:')]),a._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token doctype"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<!")]),e("span",{pre:!0,attrs:{class:"token doctype-tag"}},[a._v("DOCTYPE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token name"}},[a._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("meta")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("charset")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("UTF-8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Hello, World!"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("link")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rel")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("stylesheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("stylesheet.css"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Hello, World!"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),e("p",[a._v("Dica: se não possuir muita habilidade com a criação de diretórios e arquivos no terminal, é possível rodar o comando:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" nautilus "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),e("p",[a._v("Assim, será aberto o gerenciador de arquivos em modo root e todas as operações necessárias poderão realizadas mais facilmente.")]),a._v(" "),e("h4",{attrs:{id:"configurando-permissoes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurando-permissoes"}},[a._v("#")]),a._v(" Configurando permissões")]),a._v(" "),e("p",[a._v("É necessário transferir a propriedade do diretório do projeto do root para o usuário:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v(" /var/www/testando\n")])])]),e("p",[a._v("E adicionar permissões:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" -R "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("755")]),a._v(" /var/www/testando\n")])])]),e("h4",{attrs:{id:"configurando-o-nginx-para-servir-o-projeto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurando-o-nginx-para-servir-o-projeto"}},[a._v("#")]),a._v(" Configurando o NGINX para servir o projeto")]),a._v(" "),e("p",[a._v('Crie um novo arquivo com o nome "testando" dentro da pasta '),e("code",[a._v("/etc/nginx/sites-available")]),a._v(" com o código:")]),a._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("81")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v(" [::]:81")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server_name")]),a._v(" testando.com")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("root")]),a._v(" /var/www/testando")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("index")]),a._v(" index.html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("location")]),a._v(" /")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try_files")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v("/ =404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Depois disso, crie um link simbólico desse arquivo dentro da pasta "),e("code",[a._v("/etc/nginx/sites-enabled/")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -s /etc/nginx/sites-available/testando /etc/nginx/sites-enabled/\n")])])]),e("p",[a._v("Reinicie o NGINX:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart nginx\n")])])]),e("p",[a._v("Se tudo correu bem, ao final desse processo, você poderá abrir o navegador no endereço "),e("code",[a._v("localhost:81")]),a._v(" e deverá ver a seguinte página:\n"),e("img",{attrs:{src:t(411),alt:"Novo projeto aberto no navegador"}})]),a._v(" "),e("h4",{attrs:{id:"configurando-hosts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurando-hosts"}},[a._v("#")]),a._v(" Configurando hosts")]),a._v(" "),e("p",[a._v("Perceba que no arquivo de configuração do projeto, adicionamos a diretiva "),e("code",[a._v("server_name")]),a._v(", que serve para poder acessar o projeto por meio de uma url amigável. Isso é alcançado por meio de uma funcionalidade do NGINX chamada  "),e("em",[a._v("Server Blocks")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server_name")]),a._v(" testando.com")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("É uma funcionalidade muito interessante pois permite que por meio de um único endereço IP de um servidor seja possível acessar múltiplas aplicações, pois o NGINX sabe identificar pelo nome o recurso que o cliente deseja e direcioná-lo para a aplicação correta.")]),a._v(" "),e("p",[a._v("Para se usar essa funcionalidade é preciso realizar uma configuração adicional no arquivo "),e("code",[a._v("hosts")]),a._v(" do sistema operacional localizado geralmente no diretório "),e("code",[a._v("etc")]),a._v(". Ele deve ficar da seguinte maneira:\n"),e("img",{attrs:{src:t(412),alt:"Configuração do arquivo /etc/host"}})]),a._v(" "),e("p",[a._v('Ainda temos um problema pois ao entrar no endereço "testando.com" será feito um redirecionamento para a página padrão do NGINX. Para corrigir, é necessário voltar no arquivo '),e("code",[a._v("/etc/nginx/sites-available/testando")]),a._v(" e alterar o listen para a porta 80, ficando assim a configuração final:")]),a._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v(" [::]:80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server_name")]),a._v(" testando.com")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("root")]),a._v(" /var/www/testando")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("index")]),a._v(" index.html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("location")]),a._v(" /")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try_files")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v("/ =404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Reinicie o NGINX:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart nginx\n")])])]),e("p",[a._v('Agora ao abrir o navegador no endereço "testando.com" esse deverá ser o resultado final:\n'),e("img",{attrs:{src:t(413),alt:"Nginx server block configurado"}})]),a._v(" "),e("h2",{attrs:{id:"configurando-proxy-reverso"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurando-proxy-reverso"}},[a._v("#")]),a._v(" Configurando proxy reverso")]),a._v(" "),e("p",[a._v("Uma interessante funcionalidade do NGINX é poder redirecionar as requisições que recebe para outra uma aplicação externa. Isso pode ser feito por meio de proxy reverso. Pode-se usar essa funcionalidade caso se possua, por exemplo, uma aplicação backend em NodeJS, .Net, PHP ou outra tecnologia e se deseje usar o mesmo IP do servidor para elas. Com essa funcionalidade podemos obter vantagens como balanceamento de carga, menor consumo de recursos do servidor e maior segurança por meio da configuração de políticas de acesso no NGINX.")]),a._v(" "),e("p",[a._v('Podemos configurar um proxy reverso no mesmo arquivo de configuração do nosso projeto "testando". O objetivo aqui será servir a página html no endereço "testando.com" e acessar o servidor externo, que estará rodando na porta 5000, no endereço "testando.com/api". Para isso basta abrir o arquivo '),e("code",[a._v("/etc/nginx/sites-available/testando")]),a._v(" e configurá-lo da seguinte maneira:")]),a._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v(" [::]:80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server_name")]),a._v(" testando.com")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("root")]),a._v(" /var/www/testando")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("index")]),a._v(" index.html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("location")]),a._v(" /")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try_files")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v("/ =404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  \n   \n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# testando.com/api redirecionará as requisições para http://127.0.0.1:5000")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("location")]),a._v(" /api/")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   \t    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_pass")]),a._v(" http://127.0.0.1:5000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_http_version")]),a._v(" 1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Upgrade "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$http_upgrade")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Connection "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'upgrade'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Host "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$host")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_cache_bypass")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$http_upgrade")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \t      "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_pass_request_headers")]),a._v("      "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("on")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Reinicie o NGINX:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart nginx\n")])])]),e("p",[a._v('Pronto, agora as requisições realizadas para o endereço "http://testando.com/api/" serão repassadas ao servidor externo corretamente.')]),a._v(" "),e("h2",{attrs:{id:"configurando-balanceamento-de-carga"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurando-balanceamento-de-carga"}},[a._v("#")]),a._v(" Configurando balanceamento de carga")]),a._v(" "),e("p",[a._v("Fazer o balanceamento de carga com o NGINX também não é uma tarefa complexa. Supondo que temos três servidores idênticos, um rodando na porta 5000, outro na 5001 e o terceiro na 5002, basta editarmos o arquivo de configuração do projeto da seguinte maneira:")]),a._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Declaração dos endereços dos servidores")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("upstream")]),a._v(" backend")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server")]),a._v(" 127.0.0.1:5000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server")]),a._v(" 127.0.0.1:5001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server")]),a._v(" 127.0.0.1:5002")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Configuração do servidor")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v(" [::]:80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server_name")]),a._v(" testando.com")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("root")]),a._v(" /var/www/testando")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("index")]),a._v(" index.html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("location")]),a._v(" /")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try_files")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v("/ =404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  \n   \n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Configuração do proxy reverso")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("location")]),a._v(" /api/")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   \t    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_pass")]),a._v(" http://backend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# o proxy_pass será feito para os três servidores")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_http_version")]),a._v(" 1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Upgrade "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$http_upgrade")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Connection "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'upgrade'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Host "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$host")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_cache_bypass")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$http_upgrade")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \t      "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_pass_request_headers")]),a._v("      "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("on")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Salve o arquivo e depois reinicie o NGINX:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart nginx\n")])])]),e("p",[a._v("Tudo certo, agora as requisições vão ser distríbuidas pelos três servidores. Existem outras configurações possíveis para o balanceamento de carga, mas o básico é isso.")])])}),[],!1,null,null,null);s.default=n.exports}}]);