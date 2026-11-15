/* ======================= VISITA VIRTUAL ======================= */
(function(){
"use strict";
const PECAS = {
  machados:{t:"Machados mirenses",y:"Mirense · c. 7000 a.C.",img:"img/visita/arq-2.jpg",cx:41,cy:28,z:270,
    d:"O conjunto mais conhecido do museu. São machados de pedra polida deixados pelos mirenses, um povo que ocupou a faixa costeira entre a foz do rio Mira e o Burgau no final da Idade Glaciária. A forma é simples e eficaz: uma lâmina afiada numa das pontas, a outra arredondada para encaixar num cabo de madeira.",
    f:[["Material","Pedra polida"],["Período","Final da Idade Glaciária"],["Núcleo","Arqueológico"]]},
  placas:{t:"Placas de xisto",y:"Neolítico Final / Calcolítico · 3000–2500 a.C.",img:"img/visita/arq-2.jpg",cx:45,cy:50,z:270,
    d:"Placas de xisto gravadas com padrões geométricos: triângulos, ziguezagues e faixas paralelas. Aparecem associadas a contextos funerários do Neolítico Final e do Calcolítico em todo o sudoeste peninsular. As gravuras foram feitas com um instrumento de ponta dura sobre uma superfície previamente alisada.",
    f:[["Material","Xisto gravado"],["Período","3000–2500 a.C."],["Núcleo","Arqueológico"]]},
  pesos:{t:"Pesos de rede",y:"Pré-história recente",img:"img/visita/arq-2.jpg",cx:45,cy:72,z:290,
    d:"Seixos com um entalhe de cada lado, usados para fazer as redes afundar na água. São das peças mais claras do museu a mostrar até que ponto estas comunidades dependiam dos recursos à sua volta: o mar, as ribeiras e a terra a poucos quilómetros da costa.",
    f:[["Material","Seixo entalhado"],["Função","Lastro de rede de pesca"],["Núcleo","Arqueológico"]]},
  brasao:{t:"Pedra de Armas",y:"Ordem de Santiago · anterior a 1755",img:"img/visita/arq-3.jpg",cx:38,cy:45,z:215,
    d:"Escudo de pedra com a cruz-espada da Ordem de Santiago, a ordem militar que recebeu Aljezur depois da conquista cristã. Julga-se que venha da antiga Igreja Matriz, totalmente destruída pelo terramoto de 1755. É a peça com maior carga histórica do núcleo: liga o museu ao momento em que a vila muda de mãos.",
    f:[["Material","Pedra calcária"],["Proveniência","Atribuída à antiga Igreja Matriz"],["Núcleo","Arqueológico"]]},
  pelourinho:{t:"Fuste do Pelourinho",y:"Época moderna",img:"img/visita/arq-3.jpg",cx:68,cy:42,z:230,
    d:"O tronco do antigo pelourinho de Aljezur. O pelourinho marcava o lugar onde se afixavam as decisões e se aplicavam as penas públicas, e era o símbolo visível de que a povoação tinha foro próprio. Resta o fuste, com a perfuração onde encaixavam as ferragens.",
    f:[["Material","Pedra"],["Função","Símbolo do poder municipal"],["Núcleo","Arqueológico"]]},
  lareira:{t:"A cozinha algarvia",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-2.jpg",cx:44,cy:44,z:190,
    d:"A chaminé larga e caiada é o centro da casa algarvia. Cozinhava-se no chão da lareira, com o caldeiro suspenso na cremalheira sobre a lenha, e era ali que a família se juntava no inverno. O banco e a mesa corrida ficavam encostados, para deixar o chão livre durante o dia.",
    f:[["Ambiente","Recriação de uma cozinha rural"],["Núcleo","Etnográfico"]]},
  caldeiro:{t:"Caldeiro de cobre",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-2.jpg",cx:44,cy:60,z:300,
    d:"Pendurado na cremalheira, o caldeiro de cobre servia para a água, as sopas e as papas. O cobre aguentava o fogo direto e conduzia bem o calor, mas exigia estanhagem por dentro e limpeza frequente. Era uma peça cara, por isso passava de geração em geração.",
    f:[["Material","Cobre batido"],["Núcleo","Etnográfico"]]},
  loica:{t:"Loiça de barro",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-2.jpg",cx:28,cy:40,z:260,
    d:"Bilhas, talhas e alguidares de barro guardavam a água, o azeite e os cereais. O barro vidrado a verde e a melado aparece em quase todas as casas da região. Ficavam nas prateleiras junto à lareira, ao alcance de quem cozinhava.",
    f:[["Material","Barro vidrado e barro vermelho"],["Núcleo","Etnográfico"]]},
  cama:{t:"O quarto",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-3.jpg",cx:50,cy:50,z:185,
    d:"Cama de ferro com colcha de franja branca, tapete de trapos no chão e uma imagem religiosa na parede. O quarto tinha pouco mobiliário e muita arrumação vertical: tudo o que não estava à vista guardava-se na arca aos pés da cama.",
    f:[["Ambiente","Recriação de um quarto rural"],["Núcleo","Etnográfico"]]},
  arca:{t:"Arca de madeira",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-3.jpg",cx:63,cy:73,z:280,
    d:"A arca guardava a roupa de linho, o enxoval e os documentos da casa. Reforçada a ferro nos cantos e fechada a chave, era muitas vezes a peça de mobiliário mais valiosa de uma família e acompanhava as mulheres desde o casamento.",
    f:[["Material","Madeira com ferragens"],["Núcleo","Etnográfico"]]},
  candeeiro:{t:"Candeeiro a petróleo",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-3.jpg",cx:22,cy:43,z:330,
    d:"Antes da eletricidade chegar às aldeias do concelho, a luz da noite vinha daqui. O depósito de latão levava petróleo, a torcida subia por um bico regulável e a chaminé de vidro protegia a chama das correntes de ar.",
    f:[["Material","Latão e vidro"],["Núcleo","Etnográfico"]]},
  arado:{t:"Arado de madeira",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-4.jpg",cx:45,cy:67,z:210,
    d:"Arado de tração animal, quase todo em madeira, com a relha a abrir o sulco. Era puxado por uma junta de muares ou bois e servia para lavrar os terrenos pobres e pedregosos do interior do concelho, antes das sementeiras de outono.",
    f:[["Material","Madeira e ferro"],["Atividade","Agricultura"],["Núcleo","Etnográfico"]]},
  foice:{t:"Foice",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-4.jpg",cx:52,cy:30,z:260,
    d:"Usada para ceifar os cereais e cortar erva para os animais. A lâmina curva era afiada à pedra várias vezes por dia durante a ceifa, que juntava toda a gente disponível e se fazia à mão até meados do século XX.",
    f:[["Material","Ferro e madeira"],["Atividade","Agricultura"],["Núcleo","Etnográfico"]]},
  rede:{t:"Rede e boias de cortiça",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-4.jpg",cx:74,cy:37,z:260,
    d:"A costa de Aljezur é brava e sem portos abrigados, por isso pescava-se sobretudo à linha e com redes lançadas de barcos pequenos ou da própria praia. As boias de cortiça mantinham a rede à superfície; os pesos faziam o resto do trabalho.",
    f:[["Material","Fio e cortiça"],["Atividade","Pesca"],["Núcleo","Etnográfico"]]},
  nassa:{t:"Nassa de vime",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-4.jpg",cx:84,cy:70,z:280,
    d:"Armadilha de vime entrançado com uma entrada em funil: o peixe ou o marisco entra e não encontra a saída. Deixava-se submersa com isco e recolhia-se mais tarde. Era feita em casa, com material apanhado nas margens das ribeiras.",
    f:[["Material","Vime entrançado"],["Atividade","Pesca e marisco"],["Núcleo","Etnográfico"]]},
  cesto:{t:"Cesto de vime",y:"Finais do séc. XIX / início do séc. XX",img:"img/visita/etn-4.jpg",cx:33,cy:36,z:290,
    d:"Transportava de tudo: figos, amêndoa, batata-doce, peixe, roupa lavada. O vime era colhido junto às linhas de água, posto de molho e entrançado à mão. Cada cesto tinha a forma adequada ao que havia de carregar.",
    f:[["Material","Vime"],["Núcleo","Etnográfico"]]},
  anfora:{t:"Talha de armazenamento",y:"Período islâmico · séc. VIII–XIII",img:"img/visita/and-2.jpg",cx:37,cy:48,z:215,
    d:"Grande recipiente de barro claro com duas asas, usado para guardar e transportar água, azeite ou cereal. A pasta clara e porosa deixava transpirar uma pequena quantidade de líquido, e essa evaporação mantinha o conteúdo fresco nos meses de calor.",
    f:[["Material","Cerâmica comum"],["Proveniência","Concelho de Aljezur"],["Núcleo","Legado Andalusino"]]},
  bilhas:{t:"Bilhas vidradas a verde",y:"Período islâmico · séc. VIII–XIII",img:"img/visita/and-2.jpg",cx:69,cy:52,z:250,
    d:"O vidrado verde, obtido com óxido de cobre, é uma das marcas da cerâmica andalusina. Além de decorar, impermeabilizava o barro e tornava a peça mais fácil de lavar. Estas bilhas serviam para levar água à mesa.",
    f:[["Material","Cerâmica vidrada"],["Decoração","Vidrado verde"],["Núcleo","Legado Andalusino"]]},
  pratos:{t:"Pratos de decoração geométrica",y:"Período islâmico · séc. VIII–XIII",img:"img/visita/and-3.jpg",cx:41,cy:33,z:260,
    d:"Pratos com estrelas de oito pontas, faixas de ziguezagues e círculos concêntricos. A arte islâmica evita a figura humana e animal na loiça de uso corrente, e desenvolve em troca um repertório geométrico muito rigoroso, que se repete da cerâmica ao estuque e à madeira.",
    f:[["Material","Cerâmica vidrada"],["Decoração","Motivos geométricos"],["Núcleo","Legado Andalusino"]]},
  tacas:{t:"Taças",y:"Período islâmico · séc. VIII–XIII",img:"img/visita/and-3.jpg",cx:37,cy:57,z:290,
    d:"Loiça de mesa do dia a dia. As taças serviam-se individualmente ou em comum, no centro, e a decoração pintada concentra-se no interior, que é a parte que se vê quando a peça está pousada.",
    f:[["Material","Cerâmica vidrada"],["Núcleo","Legado Andalusino"]]},
  lamparinas:{t:"Lamparinas de azeite",y:"Período islâmico · séc. VIII–XIII",img:"img/visita/and-3.jpg",cx:50,cy:69,z:320,
    d:"Pequenas lamparinas de bico, com um depósito para o azeite e uma abertura por onde saía a torcida. Dão uma chama pequena, suficiente para iluminar uma divisão ao fim do dia. São das peças mais comuns em escavação, e também das que mais se partem.",
    f:[["Material","Cerâmica"],["Função","Iluminação doméstica"],["Núcleo","Legado Andalusino"]]},
  fragmentos:{t:"Fragmentos cerâmicos",y:"Período islâmico · séc. VIII–XIII",img:"img/visita/and-1.jpg",cx:62,cy:47,z:330,
    d:"A maior parte do que sai de uma escavação são fragmentos. Cada um guarda informação sobre a pasta, o vidrado e o desenho, e é a comparação entre milhares deles que permite datar um sítio. Os expostos aqui vêm de intervenções arqueológicas no concelho.",
    f:[["Material","Cerâmica"],["Proveniência","Escavações no concelho"],["Núcleo","Legado Andalusino"]]}
};
const SALAS = {
  arqueologico:{
    n:"01", acc:"var(--ocre)", nome:"Núcleo<br>Arqueológico",
    sub:"Mais de 10.000 anos de presença humana no território de Aljezur, da última Idade Glaciária ao terramoto de 1755.",
    lead:"O núcleo de arqueologia reúne um vasto conjunto de objetos que testemunham mais de dez mil anos de ocupação humana na região.",
    txt:["O percurso começa no <strong>espólio mirense</strong>, do final da Idade Glaciária, por volta de 7000 a.C., passa pelo <strong>Neolítico Final e Calcolítico</strong>, entre 3000 e 2500 a.C., e chega à <strong>Idade do Bronze</strong>, entre 1200 e 900/800 a.C.",
      "Destacam-se a coleção de machados mirenses, as placas de xisto e os pesos de rede, todos ligados a comunidades que viviam dos recursos naturais do território. Pelo seu valor histórico, expõem-se também a Pedra de Armas com o brasão da Ordem de Santiago, que se julga proveniente da antiga Igreja Matriz destruída pelo terramoto de 1755, e o fuste do antigo pelourinho."],
    capa:"img/visita/arq-1.jpg",
    vistas:[
      {img:"img/visita/pano-arqueologico.jpg",img2k:"img/visita/pano-arqueologico-2k.jpg",
       lbl:"Panorâmica 360°",equi:true,hs:[
        {p:"machados",x:20,y:53},{p:"pesos",x:20,y:60},{p:"placas",x:37,y:56},
        {p:"brasao",x:54,y:50},{p:"pelourinho",x:59,y:50},
        {k:"info",go:"linha",lbl:"Linha do tempo",x:66,y:43},
        {p:"machados",x:83,y:53}]},
      {img:"img/visita/arq-2.jpg",lbl:"Vitrina pré-histórica",hs:[
        {p:"machados",x:41,y:28},{p:"placas",x:45,y:50},{p:"pesos",x:45,y:72}]},
      {img:"img/visita/arq-3.jpg",lbl:"Pedra de Armas",hs:[
        {p:"brasao",x:38,y:45},{p:"pelourinho",x:68,y:42}]},
      {img:"img/visita/arq-4.jpg",lbl:"Painel cronológico",hs:[
        {p:"brasao",x:28,y:47},{p:"pelourinho",x:41,y:45}]}
    ],
    mod:"linha"
  },
  etnografico:{
    n:"02", acc:"var(--terra)", nome:"Núcleo<br>Etnográfico",
    sub:"O quotidiano do mar e da terra em Aljezur, nos finais do século XIX e no início do século XX.",
    lead:"Um piso inteiro dedicado ao modo de vida das gentes do concelho, entre a agricultura, a criação de gado e a pesca.",
    txt:["O núcleo reúne <strong>alfaias antigas</strong> ligadas às atividades agrícolas, pecuárias e piscatórias típicas da vida do mar e da terra. São objetos de uso diário, fabricados em madeira, ferro, cortiça e vime, muitos deles feitos na própria casa de quem os usava.",
      "Ao lado, recriam-se dois <strong>ambientes tradicionais rurais</strong>: um quarto e uma cozinha algarvia, decorados com os utensílios das lides diárias. São o melhor ponto de partida para perceber como se vivia numa casa do concelho há cerca de um século."],
    capa:"img/visita/etn-1.jpg",
    vistas:[
      {img:"img/visita/pano-etnografico.jpg",img2k:"img/visita/pano-etnografico-2k.jpg",
       lbl:"Panorâmica 360°",equi:true,hs:[
        {p:"loica",x:21,y:48},{p:"lareira",x:30,y:52},{p:"cesto",x:43,y:47},
        {p:"foice",x:47,y:42},{p:"rede",x:54,y:46},{p:"arado",x:46,y:59},
        {p:"nassa",x:55,y:61},{p:"cama",x:76,y:57},{p:"arca",x:85,y:65}]},
      {img:"img/visita/etn-2.jpg",lbl:"Cozinha",hs:[
        {p:"lareira",x:44,y:40},{p:"caldeiro",x:44,y:60},{p:"loica",x:28,y:40},{p:"arado",x:80,y:60}]},
      {img:"img/visita/etn-3.jpg",lbl:"Quarto",hs:[
        {p:"cama",x:50,y:50},{p:"arca",x:63,y:73},{p:"candeeiro",x:22,y:43}]},
      {img:"img/visita/etn-4.jpg",lbl:"Alfaias e artes de pesca",hs:[
        {p:"cesto",x:33,y:36},{p:"foice",x:48,y:22},{p:"rede",x:74,y:37},
        {p:"arado",x:45,y:67},{p:"nassa",x:84,y:70}]}
    ],
    mod:"video"
  },
  legado:{
    n:"03", acc:"var(--azul)", nome:"Sala do<br>Legado Andalusino",
    sub:"Cerâmica islâmica recolhida em escavações no concelho, com destaque para o Sítio da Barrada.",
    lead:"Entre os séculos VIII e XIII, Aljezur pertenceu ao al-Gharb al-Ândalus. Esta sala reúne o que ficou desse tempo.",
    txt:["A exposição integra espólio do <strong>período islâmico</strong>, proveniente de vários locais arqueologicamente intervencionados no concelho de Aljezur, e centra-se sobretudo em material recolhido no <strong>Sítio da Barrada</strong>, na sua maioria cerâmicas.",
      "Numa perspetiva didática, cada conjunto é acompanhado de informação sobre a utilização das peças no quotidiano e a sua relação com outros elementos da cultura islâmica. É a sala que explica porque é que o nome da vila vem do árabe."],
    capa:"img/visita/and-1.jpg",
    vistas:[
      {img:"img/visita/pano-legado.jpg",img2k:"img/visita/pano-legado-2k.jpg",
       lbl:"Panorâmica 360°",equi:true,hs:[
        {p:"anfora",x:18,y:55},{p:"bilhas",x:23,y:62},{p:"pratos",x:33,y:52},
        {p:"tacas",x:31,y:62},{p:"lamparinas",x:35,y:62},{p:"fragmentos",x:48,y:52},
        {p:"anfora",x:62,y:55},{k:"info",go:"cartoes",lbl:"Ver as peças",x:74,y:47}]},
      {img:"img/visita/and-2.jpg",lbl:"Talhas e bilhas",hs:[
        {p:"anfora",x:37,y:48},{p:"bilhas",x:69,y:52},{p:"bilhas",x:47,y:58}]},
      {img:"img/visita/and-3.jpg",lbl:"Loiça de mesa",hs:[
        {p:"pratos",x:41,y:33},{p:"pratos",x:61,y:35},{p:"tacas",x:37,y:57},{p:"lamparinas",x:50,y:69}]},
      {img:"img/visita/and-4.jpg",lbl:"Alcova e painel",hs:[{p:"anfora",x:20,y:55}]}
    ],
    mod:"cartoes"
  }
};
const LINHA = [
  {y:"c. 7000 a.C.",t:"Mirense",img:"img/visita/arq-2.jpg",cx:41,cy:28,z:260,
   d:"Fim da Idade Glaciária. Grupos de caçadores-recoletores ocupam a faixa costeira entre a foz do Mira e o Burgau. Deixam machados de pedra polida, hoje a coleção mais conhecida do museu."},
  {y:"3000–2500 a.C.",t:"Neolítico Final e Calcolítico",img:"img/visita/arq-2.jpg",cx:45,cy:50,z:260,
   d:"A agricultura e o pastoreio fixam as comunidades no território. É deste período o conjunto de placas de xisto gravadas com motivos geométricos, ligadas a práticas funerárias."},
  {y:"1200–800 a.C.",t:"Idade do Bronze",img:"img/visita/arq-1.jpg",cx:50,cy:50,z:190,
   d:"A metalurgia transforma as ferramentas e as trocas a longa distância. O núcleo arqueológico documenta esta fase, que fecha o longo ciclo pré-histórico do concelho."},
  {y:"Séc. VIII–XIII",t:"al-Gharb al-Ândalus",img:"img/visita/and-2.jpg",cx:37,cy:48,z:200,
   d:"Aljezur é povoação islâmica, com castelo e território próprio. Do nome árabe vem o topónimo atual. A cerâmica recolhida no Sítio da Barrada está exposta na Sala do Legado Andalusino."},
  {y:"1249 e 1755",t:"Santiago e o terramoto",img:"img/visita/arq-3.jpg",cx:38,cy:45,z:200,
   d:"Com a conquista cristã, o território passa para a Ordem de Santiago, cujo brasão sobrevive numa Pedra de Armas. O terramoto de 1755 destrói a antiga Igreja Matriz e muda a vila para sempre."}
];
const CARTOES = ["anfora","bilhas","pratos","tacas","lamparinas","fragmentos"];

/* ---- motor panorâmico ---- */
const DEF  = {fov:52, h:98,  v:65,  min:34, max:68};
const EQUI = {fov:74, h:360, v:180, min:40, max:96};
const R=500, D2R=Math.PI/180;
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const crop=p=>`background-image:url('${p.img}');background-size:${p.z}%;background-position:${p.cx}% ${p.cy}%`;

class Pano{
  constructor(el){
    this.el=el; this.ok=false;
    try{ this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false}); }catch(e){ return; }
    if(!this.renderer) return;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
    this.renderer.setClearColor(0x191B18,1);
    if("outputColorSpace" in this.renderer && THREE.SRGBColorSpace)
      this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    el.insertBefore(this.renderer.domElement, el.firstChild);
    this.layer=document.createElement("div"); this.layer.className="vv-hs-layer";
    el.insertBefore(this.layer, $("vvCompass"));
    this.scene=new THREE.Scene();
    this.cam=new THREE.PerspectiveCamera(DEF.fov,1.5,1,1100);
    this.loader=new THREE.TextureLoader();
    this.lon=0;this.lat=0;this.vx=0;this.vy=0;this.moved=0;
    this.cfg={...DEF}; this.equi=false; this.spots=[]; this.pts=new Map();
    this.tgt=new THREE.Vector3(); this.tmp=new THREE.Vector3(); this.anim=null;
    this.sujo=true; this.ok=true; this.bind();
    new ResizeObserver(()=>this.size()).observe(el); this.size();
    this.loop=this.loop.bind(this); requestAnimationFrame(this.loop);
  }
  size(){ const w=this.el.clientWidth||1,h=this.el.clientHeight||1;
    this.renderer.setSize(w,h,false); this.cam.aspect=w/h; this.cam.updateProjectionMatrix();
    this.invalida(); if(this.mesh) this.zoom(this.cam.fov); }
  /* num render plano, a abertura não pode exceder a calote projetada */
  fovTeto(){
    if(this.equi) return this.cfg.max;
    const alvo=(this.cfg.h-4)/2*D2R;
    const f=2*Math.atan(Math.tan(alvo)/this.cam.aspect)/D2R;
    return Math.min(this.cfg.max, Math.max(this.cfg.min, Math.min(f, this.cfg.v-2)));
  }
  fovH(){ return 2*Math.atan(Math.tan(this.cam.fov*D2R/2)*this.cam.aspect)/D2R; }
  clamp(){
    if(this.equi){ this.lat=Math.max(-78,Math.min(78,this.lat));
      if(this.lon>180)this.lon-=360; if(this.lon<-180)this.lon+=360; return; }
    const lo=Math.max(0,(this.cfg.h-this.fovH())/2), la=Math.max(0,(this.cfg.v-this.cam.fov)/2);
    if(this.lon>lo){this.lon=lo;this.vx=0} if(this.lon<-lo){this.lon=-lo;this.vx=0}
    if(this.lat>la){this.lat=la;this.vy=0} if(this.lat<-la){this.lat=-la;this.vy=0}
  }
  zoom(f){ this.cam.fov=Math.max(this.cfg.min,Math.min(this.fovTeto(),f));
    this.cam.updateProjectionMatrix(); this.clamp(); this.invalida(); }
  p3(u,v){
    const H=(this.equi?360:this.cfg.h)*D2R, V=(this.equi?180:this.cfg.v)*D2R;
    const phi=(-Math.PI/2-H/2)+u*H, th=(Math.PI/2-V/2)+v*V;
    return new THREE.Vector3(R*Math.cos(phi)*Math.sin(th), R*Math.cos(th), R*Math.sin(phi)*Math.sin(th));
  }
  geo(){
    const H=(this.equi?360:this.cfg.h)*D2R, V=(this.equi?180:this.cfg.v)*D2R;
    const g=new THREE.SphereGeometry(R,96,64,-Math.PI/2-H/2,H,Math.PI/2-V/2,V);
    g.scale(-1,1,1); return g;
  }
  mostrar(vista,hotspots){
    const cfg={...(vista.equi?EQUI:DEF),...(vista.pano||{})};
    const url=(vista.img2k && Math.min(innerWidth,innerHeight)<=820)?vista.img2k:vista.img;
    this.el.classList.add("loading");
    this.loader.load(url, tex=>{
      if(THREE.SRGBColorSpace && "colorSpace" in tex) tex.colorSpace=THREE.SRGBColorSpace;
      tex.minFilter=THREE.LinearFilter; tex.generateMipmaps=false; tex.wrapS=THREE.RepeatWrapping;
      if(this.mesh){ this.scene.remove(this.mesh); this.mesh.geometry.dispose();
        if(this.mesh.material.map) this.mesh.material.map.dispose(); this.mesh.material.dispose(); }
      this.cfg=cfg; this.equi=!!vista.equi;
      this.mesh=new THREE.Mesh(this.geo(), new THREE.MeshBasicMaterial({map:tex}));
      this.scene.add(this.mesh);
      this.lon=0;this.lat=0;this.vx=0;this.vy=0; this.zoom(cfg.fov);
      this.pontos(hotspots);
      this.el.classList.remove("loading"); this.el.classList.add("live"); this.invalida();
      if(!matchMedia("(prefers-reduced-motion: reduce)").matches){
        const lo=this.equi?22:Math.max(0,(this.cfg.h-this.fovH())/2);
        this.lon=-Math.min(this.equi?16:9,lo); this.deslizar(0,0,this.equi?1900:1500);
      }
    }, undefined, ()=>this.el.classList.remove("loading"));
  }
  pontos(list){
    this.layer.innerHTML="";
    this.spots=list.map(h=>{
      const lbl=h.k==="info"?h.lbl:PECAS[h.p].t;
      const b=document.createElement("button");
      b.type="button"; b.className="vv-hs"; b.setAttribute("aria-label",lbl);
      if(h.k==="info"){ b.dataset.go=h.go; b.dataset.k="info"; } else { b.dataset.peca=h.p; }
      b.innerHTML='<i></i><b>'+esc(lbl)+'</b>';
      this.layer.appendChild(b);
      return {el:b, v3:this.p3(h.x/100,h.y/100)};
    });
  }
  colocar(){
    const w=this.el.clientWidth,h=this.el.clientHeight;
    for(const s of this.spots){
      const v=this.tmp.copy(s.v3).project(this.cam);
      const on=v.z<1 && v.x>-1.1 && v.x<1.1 && v.y>-1.1 && v.y<1.1;
      s.el.style.display=on?"":"none";
      if(on) s.el.style.transform="translate("+((v.x+1)/2*w)+"px,"+((1-v.y)/2*h)+"px) translate(-50%,-50%)";
    }
  }
  voar(v3,cb){
    const lat=Math.asin(Math.max(-1,Math.min(1,v3.y/R)))/D2R;
    let lon=Math.atan2(v3.z,v3.x)/D2R+90;
    while(lon-this.lon>180)lon-=360; while(lon-this.lon<-180)lon+=360;
    this.anim={l0:this.lon,a0:this.lat,l1:lon,a1:lat,t0:performance.now(),d:520,cb};
    this.vx=0;this.vy=0;
  }
  deslizar(lon,lat,d){ this.anim={l0:this.lon,a0:this.lat,l1:lon,a1:lat,t0:performance.now(),d,cb:null}; }
  invalida(){ this.sujo=true; }
  loop(){
    requestAnimationFrame(this.loop);
    if(!this.mesh) return;
    let mexeu=false;
    if(this.anim){
      const a=this.anim,k=Math.min(1,(performance.now()-a.t0)/a.d);
      const e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
      this.lon=a.l0+(a.l1-a.l0)*e; this.lat=a.a0+(a.a1-a.a0)*e;
      if(k>=1){ this.anim=null; if(a.cb)a.cb(); }
      mexeu=true;
    } else if(!this.pts.size && (this.vx||this.vy)){
      this.lon+=this.vx; this.lat+=this.vy; this.vx*=0.9; this.vy*=0.9;
      if(Math.abs(this.vx)<0.002)this.vx=0; if(Math.abs(this.vy)<0.002)this.vy=0;
      mexeu=true;
    }
    /* parado e sem nada por redesenhar: não gasta GPU */
    if(!mexeu && !this.sujo) return;
    this.sujo=false;
    this.clamp();
    const phi=(90-this.lat)*D2R, th=(this.lon-90)*D2R;
    this.tgt.set(R*Math.sin(phi)*Math.cos(th), R*Math.cos(phi), R*Math.sin(phi)*Math.sin(th));
    this.cam.lookAt(this.tgt);
    this.renderer.render(this.scene,this.cam);
    this.colocar();
    const c=$("vvCompass"); if(c) c.firstElementChild.style.transform="rotate("+this.lon+"deg)";
  }
  bind(){
    const el=this.el, dist=()=>{const a=[...this.pts.values()];return Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)};
    el.addEventListener("pointerdown",e=>{
      if(e.target.closest(".vv-nav,.vv-tools,.vv-hs,.vv-peca")) return;
      el.setPointerCapture(e.pointerId);
      this.pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
      this.vx=0;this.vy=0;this.moved=0;this.anim=null;
      if(this.pts.size===2){ this.pd=dist(); this.pf=this.cam.fov; }
      el.classList.add("grabbing");
    });
    el.addEventListener("pointermove",e=>{
      const p=this.pts.get(e.pointerId); if(!p) return;
      const dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;
      this.moved+=Math.abs(dx)+Math.abs(dy);
      if(this.pts.size>=2){ const d=dist(); if(this.pd>4) this.zoom(this.pf*this.pd/d); return; }
      const k=this.cam.fov/(el.clientHeight||600);
      this.lon-=dx*k; this.lat+=dy*k; this.vx=-dx*k*0.6; this.vy=dy*k*0.6; this.invalida();
    });
    const up=e=>{ this.pts.delete(e.pointerId); if(!this.pts.size) el.classList.remove("grabbing"); };
    el.addEventListener("pointerup",up); el.addEventListener("pointercancel",up);
    el.addEventListener("wheel",e=>{ e.preventDefault(); this.zoom(this.cam.fov+e.deltaY*0.06); },{passive:false});
  }
}

/* ---- estado e interface ---- */
const ORDEM=Object.keys(SALAS);
let sala="arqueologico", vista=0, pano=null, arrancou=false;

function tabs(){
  $("vvTabs").innerHTML=ORDEM.map(k=>{
    const s=SALAS[k], curto=s.nome.replace(/<br>/g," ").replace("Núcleo ","").replace("Sala do ","");
    return `<button type="button" class="vv-tab${k===sala?" on":""}" data-sala="${k}">
      <b>${s.n}</b><span>${curto}</span></button>`;
  }).join("");
}
function modulo(s){
  if(s.mod==="linha") return `<section class="section"><div class="container">
      <div class="section-head"><p class="label">Cronologia</p>
      <h2 class="section-title">Dez mil anos em cinco paragens.</h2>
      <p class="lede">Toque numa época para ler o que a define e que peças do museu lhe pertencem.</p></div>
      <div class="vv-tl">${LINHA.map((e,i)=>`<article id="vvTl${i}">
        <div class="ph" style="${crop(e)}"></div>
        <div class="bd"><p class="yr">${esc(e.y)}</p><h3>${esc(e.t)}</h3><div class="more">${esc(e.d)}</div></div>
        <button type="button" class="tg" data-tl="${i}"><s>+</s><span>Ver mais</span></button>
      </article>`).join("")}</div></div></section>`;
  if(s.mod==="video") return `<section class="section"><div class="container">
      <div class="section-head"><p class="label">Depoimento</p>
      <h2 class="section-title">O olhar do historiador.</h2>
      <p class="lede">Uma leitura do modo de vida que estas salas recriam, contada por quem o estudou.</p></div>
      <div class="vv-video"><div class="frame">
        <div class="bg" style="background-image:url('img/visita/etn-1.jpg')"></div>
        <div class="in"><div class="play"><svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg></div>
        <h3>Espaço reservado ao vídeo</h3>
        <p>Assim que o vídeo estiver disponível, ocupa este bloco, com legendas e transcrição por baixo.</p></div>
      </div><div class="cap">Duração prevista 3 a 5 minutos · português com legendas</div></div>
    </div></section>`;
  return `<section class="section"><div class="container">
      <div class="section-head"><p class="label">Coleção</p>
      <h2 class="section-title">As peças desta sala.</h2>
      <p class="lede">Cerâmica recolhida em escavações no concelho. Toque num cartão para ler a ficha.</p></div>
      <div class="vv-cards">${CARTOES.map(id=>{const p=PECAS[id];return `
        <button type="button" class="vv-card" data-peca="${id}">
          <div class="ph" style="${crop(p)}"></div>
          <div class="bd"><p class="yr">${esc(p.y)}</p><h3>${esc(p.t)}</h3>
          <p>${esc(p.d.split(". ")[0])}.</p></div></button>`}).join("")}</div>
    </div></section>`;
}
function abreSala(k){
  sala=k; vista=0;
  const s=SALAS[k];
  $("tour").dataset.sala=k;
  document.querySelectorAll(".vv-tab").forEach(b=>b.classList.toggle("on",b.dataset.sala===k));
  $("vvTot").textContent=String(s.vistas.length).padStart(2,"0");
  $("vvThumbs").innerHTML=s.vistas.map((v,n)=>`
    <button type="button" data-v="${n}"><img src="${v.equi?s.capa:v.img}" alt="" loading="lazy"><em>${v.equi?"360°":esc(v.lbl)}</em></button>`).join("");
  $("vvTxt").innerHTML=`<div><p class="lead">${s.lead}</p></div><div class="bd">${s.txt.map(t=>`<p>${t}</p>`).join("")}</div>`;
  $("vvMod").innerHTML=modulo(s);
  fecha();
  mostraVista(0);
  if(window.scrollY>40) window.scrollTo({top:0,behavior:"smooth"});
}
function mostraVista(n){
  const s=SALAS[sala]; vista=(n+s.vistas.length)%s.vistas.length;
  const v=s.vistas[vista];
  document.querySelectorAll("#vvThumbs button").forEach(b=>b.classList.toggle("on",+b.dataset.v===vista));
  $("vvNum").textContent=String(vista+1).padStart(2,"0");
  $("vvLbl").textContent=v.lbl;
  $("vvPoster").src=v.equi?s.capa:v.img; $("vvPoster").alt=v.lbl;
  $("vvHint").innerHTML=v.equi?'Arraste para girar<span> 360° · toque nos pontos</span>'
                              :'Arraste para olhar<span> em volta · toque nos pontos</span>';
  if(pano&&pano.ok) pano.mostrar(v,v.hs); else planoB(v);
  etiquetas(v);
}
function planoB(v){
  const st=$("vvStage");
  let L=st.querySelector(".vv-hs-layer");
  if(!L){ L=document.createElement("div"); L.className="vv-hs-layer"; st.appendChild(L); }
  L.innerHTML=v.hs.map(h=>{
    const lbl=h.k==="info"?h.lbl:PECAS[h.p].t;
    const a=h.k==="info"?`data-go="${h.go}" data-k="info"`:`data-peca="${h.p}"`;
    return `<button type="button" class="vv-hs" ${a} style="left:${h.x}%;top:${h.y}%;transform:translate(-50%,-50%)"
      aria-label="${esc(lbl)}"><i></i><b>${esc(lbl)}</b></button>`;
  }).join("");
}
function etiquetas(v){
  const c=$("vvChips"), vistos=new Set();
  const lista=v.hs.map((h,i)=>({h,i})).filter(({h})=>{
    if(h.k==="info") return false;
    if(vistos.has(h.p)) return false; vistos.add(h.p); return true; });
  c.innerHTML='<span class="cl">Nesta vista</span>'+lista.map(({h,i})=>
    `<button type="button" data-spot="${i}">${esc(PECAS[h.p].t)}</button>`).join("");
}
function abre(id){
  const p=PECAS[id]; if(!p) return;
  $("vvPecaPh").style.cssText=crop(p);
  $("vvPecaY").textContent=p.y; $("vvPecaT").textContent=p.t; $("vvPecaD").textContent=p.d;
  $("vvPecaF").innerHTML=p.f.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("");
  $("vvPeca").classList.add("on"); document.body.classList.add("vv-peca-aberta"); $("vvPecaX").focus();
}
function fecha(){ $("vvPeca").classList.remove("on"); document.body.classList.remove("vv-peca-aberta"); }

/* ---- arranque: o three.js só carrega quando a visita abre ---- */
function arranca(){
  if(arrancou) return; arrancou=true;
  tabs();
  const go=()=>{ pano=window.THREE?new Pano($("vvStage")):null; if(pano&&!pano.ok)pano=null; abreSala(sala); };
  if(window.THREE) return go();
  const s=document.createElement("script");
  s.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.152.2/three.min.js";
  s.onload=go;
  s.onerror=()=>{ const l=document.createElement("script"); l.src="lib/three.min.js";
    l.onload=go; l.onerror=go; document.head.appendChild(l); };
  document.head.appendChild(s);
}

/* ---- eventos ---- */
document.addEventListener("click",e=>{
  if(!document.body.classList.contains("vv-open") && !e.target.closest("#tour")) return;
  const t=e.target;
  const tab=t.closest(".vv-tab"); if(tab){ abreSala(tab.dataset.sala); return; }
  const th=t.closest("#vvThumbs button"); if(th){ mostraVista(+th.dataset.v); return; }
  const sp=t.closest("[data-spot]");
  if(sp){ const i=+sp.dataset.spot, h=SALAS[sala].vistas[vista].hs[i];
    if(pano&&pano.ok&&pano.spots[i]) pano.voar(pano.spots[i].v3,()=>abre(h.p)); else abre(h.p); return; }
  const pc=t.closest("[data-peca]");
  if(pc){ if(pano&&pano.moved>9&&pc.classList.contains("vv-hs")){pano.moved=0;return} abre(pc.dataset.peca); return; }
  const gg=t.closest("[data-go]");
  if(gg){ if(pano&&pano.moved>9){pano.moved=0;return}
    const el=document.querySelector("#vvMod .section"); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); return; }
  const tl=t.closest("[data-tl]");
  if(tl){ const a=$("vvTl"+tl.dataset.tl), open=a.classList.toggle("open");
    tl.querySelector("s").textContent=open?"–":"+";
    tl.querySelector("span").textContent=open?"Fechar":"Ver mais"; return; }
  if(t.closest("#vvPecaX")) fecha();
});
document.addEventListener("keydown",e=>{
  if(!document.body.classList.contains("vv-open")) return;
  if(e.key==="Escape"){ fecha(); return; }
  if($("vvPeca").classList.contains("on")) return;
  if(e.key==="ArrowLeft") mostraVista(vista-1);
  if(e.key==="ArrowRight") mostraVista(vista+1);
});

/* página autónoma: arranca de imediato */
const intro=$("vvIntro");
function entra(){
  if(!intro || intro.classList.contains("fora")) return;
  intro.classList.add("fora");
  setTimeout(()=>{ intro.hidden=true; }, 500);
}
$("vvComecar").addEventListener("click",entra);
/* arrastar sobre o cartão também entra */
intro.addEventListener("pointerdown",e=>{ if(!e.target.closest(".vv-intro__btn")) entra(); });
document.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" ") entra(); },{once:true});
arranca();
})();
