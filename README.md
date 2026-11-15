# Museus de Aljezur

Protótipo de site para os museus do concelho de Aljezur, com visita virtual em 360° ao
Museu Municipal. Site estático, sem build e sem dependências de servidor.

**Não é o site oficial do Município de Aljezur.** É uma demonstração preparada para
apresentação ao Município.

## Estrutura

```
index.html        Site institucional: sete espaços, bilhete, marcação
visita.html       Visita virtual 360° ao Museu Municipal
css/site.css      Folha de estilos partilhada pelas duas páginas
js/visita.js      Motor panorâmico e conteúdo da visita
lib/three.min.js  three.js r152 (cópia local, usada se o CDN falhar)
img/              Imagens dos sete espaços
img/visita/       Renders e panorâmicas equirretangulares do Museu Municipal
.nojekyll         Impede o GitHub Pages de processar os ficheiros
```

## Correr localmente

As panorâmicas são carregadas como texturas WebGL, o que exige HTTP: abrir o ficheiro
com `file://` falha por CORS.

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Publicar

Definições do repositório → Pages → Deploy from a branch → `main` / `root`.

## Como funciona a visita

Cada sala tem uma panorâmica equirretangular de 4096×2048 projetada no interior de uma
esfera, com a câmara ao centro: arrasta-se para girar 360°. As quatro vistas de pormenor
são renders planos projetados numa calote de 98°, o que dá liberdade de olhar sem mostrar
as bordas da imagem.

Os pontos sobre as peças são posições em 3D, projetadas no ecrã a cada fotograma. Em
ecrãs com menos de 820 px carrega-se uma panorâmica de 2048×1024 em vez da de 4K.

Para mudar um ponto de sítio, editar as coordenadas `x` e `y` em `SALAS` dentro de
`js/visita.js`. São percentagens da imagem: `x` da esquerda, `y` do topo.

## Origem da informação

Horários, preços, contactos e descrições das salas foram recolhidos nas páginas públicas
de [cm-aljezur.pt](https://cm-aljezur.pt), em novembro de 2026.

## Por validar antes de publicar como material oficial

- **As imagens são renders de síntese**, não fotografias dos espaços reais. As salas
  foram reconstituídas a partir da descrição oficial do museu e não correspondem à
  disposição real das vitrinas nem às peças expostas.
- **Os textos das 22 peças são rascunhos.** A parte factual (épocas, machados mirenses,
  Sítio da Barrada, Pedra de Armas) vem da página oficial. O contexto sobre o uso de cada
  objeto foi escrito de raiz e carece de validação pelo museu.
- O núcleo de arqueologia está encerrado por obras na casa adjacente, e o Museu de Arte
  Sacra está encerrado por decisão da Santa Casa da Misericórdia. Confirmar antes de
  publicar.
- O formulário de marcação não envia nada. Falta definir o destino de cada pedido.
- A visita existe apenas em português. O resto do site é bilingue PT/EN.
