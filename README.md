<!DOCTYPE html><html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Guia Rápido de Maquiagem — 3 estilos</title>
  <meta name="description" content="Site simples com 3 tipos de maquiagem: Natural, Soft Glam e Glam Noite. Dicas rápidas do que combina com cada estilo, cores e produtos-chave." />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg: #0f1020;
      --card: #181a2a;
      --muted: #aab0c0;
      --text: #ECF1FF;
      --brand: #B388FF;
      --brand2:#66E3C4;
      --ring: #66E3C477;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0; font-family: Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      background: radial-gradient(1200px 600px at 20% -10%, #1b1f38 0%, #0f1020 50%, #0f1020 100%);
      color:var(--text);
    }
    header{
      max-width:1100px; margin:0 auto; padding:32px 20px 8px;
    }
    .badge{
      display:inline-flex; gap:8px; align-items:center; padding:6px 10px; border-radius:999px; border:1px solid #2a2d45; color:var(--muted); font-size:12px; letter-spacing:.3px;
      background:linear-gradient(180deg, #16182b 0%, #111228 100%);
    }
    .badge .dot{width:6px;height:6px;border-radius:999px;background:var(--brand2); box-shadow:0 0 0 4px var(--ring)}
    h1{
      font-size: clamp(28px, 4.5vw, 42px); line-height:1.15; margin:14px 0 10px; font-weight:700;
    }
    .sub{color:var(--muted); max-width:60ch}
    .grid{
      display:grid; gap:18px; grid-template-columns: repeat(12, 1fr); max-width:1100px; margin:24px auto; padding:0 20px 40px;
    }
    .card{
      grid-column: span 12; background:linear-gradient(180deg, #1a1c31 0%, #14162a 100%); border:1px solid #2a2d45; border-radius:24px; padding:18px; position:relative; overflow:hidden;
      box-shadow: 0 10px 30px #0004;
    }
    .card:focus-within, .card:hover{outline:none; border-color:#38406b; box-shadow:0 0 0 4px #0000, 0 0 0 1px #38406b inset}
    .card h3{margin:0 0 8px; font-size:22px}
    .card p{margin:0 0 12px; color:var(--muted)}
    .chips{display:flex; flex-wrap:wrap; gap:8px; margin-top:6px}
    .chip{font-size:12px; padding:6px 10px; background:#0f1124; border:1px solid #2a2d45; border-radius:999px}
    .kicker{font-size:12px; letter-spacing:.3px; text-transform:uppercase; color:#9AA2C7}
    .cols{display:grid; gap:14px; grid-template-columns:repeat(1, 1fr)}
    .cols div{background:#0f1124; border:1px solid #2a2d45; border-radius:16px; padding:12px}.accent{position:absolute; inset:-40px auto auto -40px; width:160px; height:160px; border-radius:50%; filter:blur(30px); opacity:.25}
.a1{background: radial-gradient(circle at 30% 30%, var(--brand), transparent 60%), radial-gradient(circle at 70% 70%, var(--brand2), transparent 60%)}
.a2{background: radial-gradient(circle at 30% 30%, #FF9ECB, transparent 60%), radial-gradient(circle at 70% 70%, #FFD480, transparent 60%)}
.a3{background: radial-gradient(circle at 30% 30%, #9AD6FF, transparent 60%), radial-gradient(circle at 70% 70%, #C49BFF, transparent 60%)}

.rec{
  grid-column: span 12; background:linear-gradient(180deg, #12132a 0%, #0f1124 100%); border:1px dashed #334; border-radius:24px; padding:18px; position:relative
}
.rec h2{margin:0 0 10px}
.row{display:grid; gap:12px; grid-template-columns:repeat(1, 1fr)}
label{font-size:14px; color:#C2C8E0}
select{width:100%; padding:12px 14px; border-radius:12px; background:#0b0d20; color:var(--text); border:1px solid #2a2d45}
.btn{display:inline-flex; align-items:center; gap:8px; padding:12px 14px; border-radius:12px; background:linear-gradient(180deg, #6B5BDE, #4C3FC9); color:white; border:none; cursor:pointer; font-weight:600}
.btn:hover{filter:brightness(1.05)}
.out{margin-top:14px; background:#0f1124; border:1px solid #2a2d45; border-radius:16px; padding:12px; min-height:60px}

footer{max-width:1100px; margin:0 auto; padding:0 20px 60px; color:#98A0C3}

@media (min-width: 720px){
  .card{grid-column: span 4}
  .cols{grid-template-columns:repeat(2, 1fr)}
  .row{grid-template-columns:repeat(4, 1fr)}
  .row > div{grid-column: span 1}
  .row .wide{grid-column: span 2}
}

  </style>
</head>
<body>
  <header>
    <span class="badge"><span class="dot"></span> Guia rápido</span>
    <h1>Maquiagem em 3 estilos — simples, bonita e do seu jeito</h1>
    <p class="sub">Resumo prático de três vibes que funcionam no dia a dia. Cada uma com o que combina melhor em <em>ocasiões</em>, <em>tipos de pele</em> e <em>cores</em> que valorizam. Role, escolha sua energia e brilhe.</p>
  </header>  <main class="grid" aria-label="Conteúdo principal">
    <!-- NATURAL -->
    <section class="card" aria-labelledby="t1">
      <div class="accent a1" aria-hidden="true"></div>
      <span class="kicker">Leve & fresh</span>
      <h3 id="t1">1) Natural (make do dia)</h3>
      <p>Pele respirando, correções suaves, blush saudável, cílios definidos e boca hidratada. Nada pesa, tudo realça.</p>
      <div class="cols" role="list">
        <div role="listitem">
          <strong>Combina com</strong>
          <ul>
            <li>Rotina, escola/trabalho, encontros de dia</li>
            <li>Peles sensíveis ou acneicas (texturas leves)</li>
            <li>Formato de rosto: todos — foco no equilíbrio</li>
          </ul>
        </div>
        <div role="listitem">
          <strong>Produtos‑chave</strong>
          <ul>
            <li>Hidratante + protetor com cor ou base leve</li>
            <li>Corretivo pontual, blush pêssego/rosado</li>
            <li>Máscara de cílios, balm/gloss</li>
          </ul>
        </div>
        <div role="listitem">
          <strong>Cores que favorecem</strong>
          <div class="chips">
            <span class="chip">nude</span>
            <span class="chip">pêssego</span>
            <span class="chip">marrom claro</span>
            <span class="chip">rosé</span>
          </div>
        </div>
        <div role="listitem">
          <strong>Passo‑chave</strong>
          <p>Uniformize só onde precisa e deixe a pele aparecer.</p>
        </div>
      </div>
    </section><!-- SOFT GLAM -->
<section class="card" aria-labelledby="t2">
  <div class="accent a2" aria-hidden="true"></div>
  <span class="kicker">Polido & fotogênico</span>
  <h3 id="t2">2) Soft Glam (suave, porém marcante)</h3>
  <p>Pele polida, contorno discreto, iluminado estratégico. Olho esfumado neutro que aparece sem pesar.</p>
  <div class="cols" role="list">
    <div role="listitem">
      <strong>Combina com</strong>
      <ul>
        <li>Fotos, eventos à tarde/noite, formaturas</li>
        <li>Peles mistas/oleosas (selar pontos estratégicos)</li>
        <li>Rostos ovais/redondos — contorno suave alonga</li>
      </ul>
    </div>
    <div role="listitem">
      <strong>Produtos‑chave</strong>
      <ul>
        <li>Base média, contorno/bronzer, iluminador</li>
        <li>Sombras terrosas, delineado discreto</li>
        <li>Batom em tons terrosos/rosados</li>
      </ul>
    </div>
    <div role="listitem">
      <strong>Cores que favorecem</strong>
      <div class="chips">
        <span class="chip">dourado</span>
        <span class="chip">rosé</span>
        <span class="chip">terracota</span>
        <span class="chip">caramelo</span>
      </div>
    </div>
    <div role="listitem">
      <strong>Passo‑chave</strong>
      <p>Esfumar é tudo: transições macias elevam o look.</p>
    </div>
  </div>
</section>

<!-- GLAM NOITE -->
<section class="card" aria-labelledby="t3">
  <div class="accent a3" aria-hidden="true"></div>
  <span class="kicker">Impacto & atitude</span>
  <h3 id="t3">3) Glam Noite (drama elegante)</h3>
  <p>Cobertura maior, olho poderoso (smokey/delineado), brilhos pontuais. Perfeito para luz baixa.</p>
  <div class="cols" role="list">
    <div role="listitem">
      <strong>Combina com</strong>
      <ul>
        <li>Baladas, casamentos noturnos, palcos</li>
        <li>Peles oleosas: primer e selagem duradoura</li>
        <li>Rostos quadrados/coração: foco em alongar</li>
      </ul>
    </div>
    <div role="listitem">
      <strong>Produtos‑chave</strong>
      <ul>
        <li>Primer, base média/alta, pó fino</li>
        <li>Sombras escuras/metálicas, cílios postiços</li>
        <li>Contorno mais marcado + batom intenso</li>
      </ul>
    </div>
    <div role="listitem">
      <strong>Cores que favorecem</strong>
      <div class="chips">
        <span class="chip">vinho</span>
        <span class="chip">preto</span>
        <span class="chip">chumbo</span>
        <span class="chip">glitter</span>
      </div>
    </div>
    <div role="listitem">
      <strong>Passo‑chave</strong>
      <p>Construa camadas finas: intensidade sem craquelar.</p>
    </div>
  </div>
</section>

<!-- RECOMENDADOR -->
<section class="rec" aria-labelledby="rec-title">
  <h2 id="rec-title">Descubra seu estilo agora</h2>
  <p class="sub">Escolha sua ocasião, como está sua pele hoje e a vibe que você quer passar. Eu te digo qual estilo e truques combinam.</p>
  <div class="row" role="group" aria-label="Seletor de preferências">
    <div>
      <label for="oc">Ocasião</label>
      <select id="oc" aria-label="Ocasião">
        <option value="dia">Dia a dia / Escola</option>
        <option value="trabalho">Trabalho / Entrevista</option>
        <option value="tarde">Evento à tarde</option>
        <option value="noite">Festa / Noite</option>
        <option value="foto">Fotos / Vídeo</option>
        <option value="criativo">Criativo / Artístico</option>
      </select>
    </div>
    <div>
      <label for="pele">Tipo de pele</label>
      <select id="pele" aria-label="Tipo de pele">
        <option value="normal">Normal</option>
        <option value="seca">Seca</option>
        <option value="mista">Mista</option>
        <option value="oleosa">Oleosa</option>
        <option value="sensivel">Sensível / Acneica</option>
      </select>
    </div>
    <div class="wide">
      <label for="vibe">Vibe desejada</label>
      <select id="vibe" aria-label="Vibe desejada">
        <option value="discreta">Discreta e fresh</option>
        <option value="equilibrada">Equilibrada e fotogênica</option>
        <option value="impacto">Impacto e brilho</option>
      </select>
    </div>
    <div>
      <label>&nbsp;</label>
      <button id="go" class="btn" aria-live="polite">Ver sugestão ✨</button>
    </div>
  </div>
  <div id="out" class="out" aria-live="polite"></div>
</section>

  </main>  <footer>
    <p><strong>Dica geral:</strong> pele bonita é preparação. Limpar, hidratar, proteger (FPS) — o resto desliza.</p>
    <p style="font-size:12px">Este guia é educativo. Adapte tudo ao seu gosto e pele. Você manda no seu espelho. 💜</p>
  </footer>  <script>
    const oc = document.getElementById('oc');
    const pele = document.getElementById('pele');
    const vibe = document.getElementById('vibe');
    const out = document.getElementById('out');
    document.getElementById('go').addEventListener('click', () => {
      const o = oc.value, p = pele.value, v = vibe.value;

      let estilo = 'Natural';
      if (v === 'equilibrada' || o === 'tarde' || o === 'foto') estilo = 'Soft Glam';
      if (v === 'impacto' || o === 'noite') estilo = 'Glam Noite';

      let peleTip = '';
      if (p === 'oleosa') peleTip = 'Use primer matificante e sele a zona T com pó fino.';
      if (p === 'seca') peleTip = 'Prefira bases hidratantes e brumas para viço sem marcar.';
      if (p === 'mista') peleTip = 'Hidrate as áreas secas e sele só onde precisa (zona T).';
      if (p === 'sensivel') peleTip = 'Texturas leves e não comedogênicas, menos fricção ao aplicar.';

      const combos = {
        'Natural': {
          cores: 'nudes, pêssego, marrons claros',
          truque: 'corrija apenas onde necessário e aposte no blush cremoso.'
        },
        'Soft Glam': {
          cores: 'dourado, rosé, terracota',
          truque: 'esfumado em 2–3 tons com transições macias; iluminador sutil.'
        },
        'Glam Noite': {
          cores: 'vinho, preto, chumbo, brilhos',
          truque: 'construa camadas finas e capriche no delineado/cílios.'
        }
      }

      const c = combos[estilo];

      out.innerHTML = `
        <div style="display:grid; gap:6px">
          <div><strong>Sugestão:</strong> <span style="padding:4px 8px; border:1px solid #38406b; border-radius:999px">${estilo}</span></div>
          <div><strong>Cores que combinam:</strong> ${c.cores}</div>
          <div><strong>Truque-chave:</strong> ${c.truque}</div>
          ${peleTip ? `<div><strong>Para sua pele:</strong> ${peleTip}</div>` : ''}
        </div>
      `;
    });
  </script></body>
</html># Site-de-maquiagem-
E um site a fala sobre tipos de maquiagem 
