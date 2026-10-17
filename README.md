# Portfólio de Mikael Silva

Aplicação de portfólio construída com React. O conteúdo apresenta o perfil profissional, habilidades, experiência, projetos, formação e canais de contato em uma única página responsiva.

## Componentes

Os componentes ficam em `src/components/`. Cada um representa uma seção ou parte visual do portfólio, o que facilita localizar, atualizar e reutilizar a interface sem concentrar toda a página em um único arquivo.

| Componente | Responsabilidade | Por que é usado |
| --- | --- | --- |
| `Navbar` | Navegação pelas seções, menu para telas menores e alternância entre temas claro e escuro. | Mantém os links principais acessíveis durante a navegação e agrupa os controles globais do site. |
| `Hero` | Apresentação inicial, chamadas para contato e métricas profissionais; permite imprimir/salvar o currículo pelo navegador. | Destaca rapidamente quem é o profissional e oferece caminhos diretos para ações importantes. |
| `Skills` | Exibe habilidades por categoria e permite filtrar por categoria ou texto. | Ajuda visitantes a encontrar competências específicas sem percorrer uma lista extensa. |
| `Experience` | Apresenta a trajetória profissional em uma linha do tempo. | Organiza cargos, períodos e realizações em uma sequência fácil de acompanhar. |
| `Projects` | Mostra projetos e seus detalhes em cartões interativos. | Dá contexto às competências por meio de exemplos de soluções e tecnologias. |
| `Education` | Reúne formação acadêmica e certificações. | Mantém qualificações em uma seção própria e estruturada. |
| `Terminal` | Simula um terminal interativo com comandos de consulta ao conteúdo do portfólio. | Oferece uma forma lúdica e alternativa de explorar informações profissionais. |
| `Contact` | Exibe canais de contato e formulário que prepara uma mensagem para envio. | Facilita o contato e ações como copiar o e-mail ou iniciar uma conversa. |
| `Footer` | Mostra navegação complementar, identificação e atalho para voltar ao topo. | Fecha a página com acesso rápido a links e ações úteis. |
| `PrintResume` | Estrutura limpa do currículo executivo (padrão A4) exibida exclusivamente durante a impressão/exportação para PDF. | Garante que o documento impresso seja formal, legível e otimizado para processos seletivos. |
| `Icons` | Define ícones SVG próprios (LinkedIn e GitHub). | Centraliza elementos gráficos vetoriais com controle preciso de tamanho e traço. |

### Composição da página

`src/App.js` funciona como componente raiz: controla o tema, persiste a preferência no `localStorage` e compõe as seções na ordem em que aparecem. `src/index.js` monta a aplicação React no elemento raiz do HTML.

O conteúdo que alimenta as seções está separado da apresentação em `src/data/portfolioData.js`. Essa separação permite atualizar textos, listas e informações profissionais sem alterar a estrutura visual dos componentes.

## Tecnologias e bibliotecas

- **React 19** organiza a interface em componentes e gerencia estados locais, como filtros, menu, terminal e tema.
- **React DOM** conecta a aplicação React à página HTML.
- **Lucide React** fornece os ícones usados nas seções; os ícones são componentes e podem ser ajustados por tamanho e classe CSS.
- **Create React App (`react-scripts`)** fornece os comandos de desenvolvimento, build e testes configurados no projeto.
- **CSS** (`src/index.css` e `src/App.css`) controla estilos, temas e apresentação responsiva.
- **Testing Library** está disponível para testes de componentes e interações; **Web Vitals** é incluído pelo template para medição de métricas de carregamento, caso seja configurada.

## Como executar

É necessário ter Node.js e npm instalados. Na pasta do projeto:

```bash
npm install
npm start
```

O servidor de desenvolvimento fica disponível em [http://localhost:3000](http://localhost:3000).

### Comandos disponíveis

```bash
npm start    # inicia o ambiente de desenvolvimento
npm test     # executa os testes no modo interativo
npm run build # gera a versão de produção em build/
```

## Estrutura principal

```text
src/
├── components/       # seções e elementos da interface
├── data/
│   └── portfolioData.js  # conteúdo do portfólio
├── App.js            # composição da página e estado do tema
├── App.css           # estilos da aplicação
└── index.css         # estilos globais
```
