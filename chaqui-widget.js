/*! Chaqui — asistente de Ahumadores Chaquiro. Widget autónomo (sin dependencias). */
(function () {
  "use strict";
  if (window.__chaquiLoaded) return;
  window.__chaquiLoaded = true;

  var script = document.currentScript;
  var ENDPOINT = (script && script.getAttribute("data-endpoint")) || "https://nulfmzq6hiq5ccjn2m6lf6d5vu0liuge.lambda-url.us-east-1.on.aws/";
  var WA = "https://wa.me/573184720787";
  // "Chaqui" con la letra del logo de chaquiro.com (logo real recortado; PNG blanco con transparencia, incrustado para no depender de otro archivo)
  var LOGO = "data:image/png;base64,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";
  var ICON = "data:image/png;base64,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";
  var STORE_ADDRESS = "Cra. 43 A # 46 sur 20 (E/S Shell), Envigado, Antioquia";
  var MAP_QUERY = "Cra. 43A #46 Sur 20, Envigado, Antioquia, Colombia";
  var STORE_HOURS = "Lunes a viernes 9:00 a.m.–6:00 p.m. · Sábados 9:00 a.m.–4:00 p.m.";
  var STORE_KEY = "chaqui_threads_v1"; // conversaciones guardadas en el navegador de cada visitante
  var MAX_THREADS = 20, MAX_SAVED_MSGS = 40;
  var GREETING = "¡Hola! Soy Chaqui, el asesor virtual de Ahumadores Chaquiro. Con gusto te ayudo a escoger tu ahumador o asador. ¿En qué te puedo colaborar?";
  var SUGGESTIONS = ["¿Qué ahumador me recomiendan?", "Ver combos para empezar", "Filtrar productos", "¿Dónde están ubicados?", "Hablar con una persona"];

  var host = document.createElement("div");
  host.id = "chaqui-root";
  document.body.appendChild(host);
  var root = host.attachShadow({ mode: "open" });

  root.innerHTML =
    "<style>" +
    /* Verde de la marca (el mismo del banner y las etiquetas de chaquiro.com); reemplaza al negro */
    ":host{all:initial;--chq-green:#313e32;--chq-green-hover:#3f5041}" +
    "*{box-sizing:border-box;font-family:'Segoe UI',system-ui,-apple-system,Roboto,sans-serif}" +
    ".btn{position:fixed;right:20px;bottom:20px;width:60px;height:60px;border-radius:50%;background:var(--chq-green);color:#f7f9ed;border:2px solid #ffd875;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.3);z-index:2147483000;transition:transform .15s}" +
    ".btn:hover{transform:scale(1.06)}.btn svg{width:28px;height:28px;fill:currentColor}" +
    ".panel{position:fixed;right:20px;bottom:92px;width:430px;max-width:calc(100vw - 24px);height:660px;max-height:calc(100vh - 110px);background:#f7f9ed;color:#313e32;border-radius:16px;box-shadow:0 30px 80px -20px rgba(13,17,23,.35),0 8px 24px rgba(13,17,23,.15);display:none;flex-direction:column;overflow:hidden;z-index:2147483000;transition:width .2s ease}" +
    ".panel.open{display:flex}" +
    ".panel.side-open{width:min(1040px,calc(100vw - 40px))}" +
    ".panel.max{width:calc(100vw - 40px);height:calc(100vh - 112px);max-height:none}" +
    /* cabecera */
    ".head{background:var(--chq-green);color:#f7f9ed;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex:none}" +
    ".brand{display:flex;align-items:center;gap:9px}.icon{display:block;height:34px;width:auto;flex:none}.logo{display:block;height:30px;width:auto}.sub{font-size:12px;opacity:.8;margin-top:5px}" +
    ".hb{display:flex;gap:2px}.ib{background:none;border:0;color:#f7f9ed;cursor:pointer;line-height:1;padding:7px 8px;border-radius:8px;font-size:18px;display:flex;align-items:center}.ib:hover,.ib.on{background:rgba(247,249,237,.18)}.ib svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}" +
    /* cuerpo: panel lateral + chat */
    ".body{flex:1;display:flex;min-height:0}" +
    ".chat{flex:1;min-width:0;display:flex;flex-direction:column;position:relative}" +
    ".side{display:none;flex-direction:column;width:390px;flex:none;background:#fff;border-right:1px solid rgba(49,62,50,.14);min-height:0}" +
    ".panel.side-open .side{display:flex}" +
    ".panel.max.side-open .side{width:430px}" +
    ".tabs{display:flex;align-items:center;border-bottom:1px solid rgba(49,62,50,.12);padding:0 8px 0 4px;flex:none}" +
    ".tab{background:none;border:0;border-bottom:3px solid transparent;padding:14px 9px 11px;font-size:14px;font-weight:600;color:#6b756a;cursor:pointer;display:flex;align-items:center;gap:6px}" +
    ".tab.on{color:var(--chq-green);border-bottom-color:#ffd875}" +
    ".cnt{background:var(--chq-green);color:#f7f9ed;border-radius:999px;font-size:11px;padding:1px 7px;font-weight:700}.cnt:empty{display:none}" +
    ".sclose{margin-left:auto;background:none;border:0;font-size:18px;cursor:pointer;color:#313e32;padding:8px}" +
    ".pane-f,.pane-p,.pane-m,.pane-c{display:none;flex:1;min-height:0}" +
    ".side[data-tab=c] .pane-c{display:block;overflow-y:auto;padding:16px;background:#f7f9ed}" +
    ".ct-h{font-weight:700;font-size:16px;margin:0 0 4px}.ct-s{font-size:13px;color:#6b756a;margin:0 0 14px;line-height:1.45}" +
    ".cbtn{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid rgba(49,62,50,.14);border-radius:12px;padding:12px 14px;margin-bottom:10px;text-decoration:none;color:#313e32;transition:border-color .15s}" +
    ".cbtn:hover{border-color:rgba(255,216,117,.95)}.cbtn.main{background:var(--chq-green);color:#f7f9ed;border-color:var(--chq-green)}.cbtn.main .ic{background:#ffd875;color:var(--chq-green)}.cbtn.main small{color:#d4d9c7}" +
    ".cbtn .ic{width:40px;height:40px;border-radius:50%;background:var(--chq-green);color:#f7f9ed;display:flex;align-items:center;justify-content:center;flex:none}.cbtn .ic svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}" +
    ".cbtn b{display:block;font-size:14.5px}.cbtn small{display:block;font-size:12.5px;color:#6b756a;margin-top:1px;word-break:break-word}" +
    ".chrs{background:#fff;border:1px solid rgba(49,62,50,.14);border-radius:12px;padding:12px 14px;font-size:13px;line-height:1.55;margin-top:4px}.chrs b{display:block;margin-bottom:2px}" +
    ".clink{display:block;margin-top:10px;background:none;border:0;padding:0;color:#003331;font-weight:600;font-size:13px;text-decoration:underline;cursor:pointer;text-align:left}" +
    ".side[data-tab=m] .pane-m{display:flex;flex-direction:column;background:#f7f9ed}" +
    ".map{flex:1;min-height:220px;border:0;width:100%;background:#eef0e0}" +
    ".mi{padding:14px 16px;border-top:1px solid rgba(49,62,50,.12);background:#fff;display:flex;flex-direction:column;gap:8px}" +
    ".mi b{font-size:15px}.mi span{font-size:13.5px;line-height:1.45;color:#3f4a3f}" +
    ".mb{display:flex;gap:8px;margin-top:4px}.mb a{flex:1;text-align:center;text-decoration:none;font-size:13px;font-weight:700;padding:10px;border-radius:10px}" +
    ".mb .a1{background:var(--chq-green);color:#f7f9ed}.mb .a2{background:#fff;color:#313e32;border:1px solid rgba(49,62,50,.25)}" +
    ".side[data-tab=f] .pane-f{display:flex;flex-direction:column}" +
    ".side[data-tab=p] .pane-p{display:block;overflow-y:auto;padding:12px;background:#f7f9ed}" +
    ".db{flex:1;overflow-y:auto;padding:14px 16px}" +
    ".sec{font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:#6b756a;font-weight:700;margin:4px 0 8px}" +
    ".opt{display:flex;align-items:center;gap:9px;padding:6px 2px;font-size:14px;cursor:pointer}.opt input{accent-color:var(--chq-green);width:16px;height:16px}" +
    ".pr{display:flex;gap:8px;margin-bottom:12px}.pr input{flex:1;min-width:0;border:1px solid rgba(49,62,50,.25);border-radius:10px;padding:9px 10px;font-size:14px;color:#313e32;background:#fff}" +
    ".df{display:flex;gap:8px;padding:12px 16px;border-top:1px solid rgba(49,62,50,.12)}" +
    ".go{flex:1;background:var(--chq-green);color:#f7f9ed;border:0;border-radius:10px;padding:11px;font-weight:700;cursor:pointer;font-size:14px}.go:hover{background:var(--chq-green-hover)}" +
    ".clr{background:#fff;color:#313e32;border:1px solid rgba(49,62,50,.25);border-radius:10px;padding:11px 14px;cursor:pointer;font-size:14px}" +
    ".empty{color:#6b756a;font-size:14px;text-align:center;padding:40px 16px;line-height:1.5}" +
    /* mensajes */
    ".msgs{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}" +
    ".m{max-width:85%;padding:10px 13px;border-radius:16px;font-size:14px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}" +
    ".panel.max .m{font-size:15px;max-width:75%}" +
    ".m.bot{background:#eef0e0;align-self:flex-start;border-bottom-left-radius:4px}" +
    ".m.user{background:var(--chq-green);color:#f7f9ed;align-self:flex-end;border-bottom-right-radius:4px}" +
    ".m a{color:#003331;font-weight:600;text-decoration:underline}" +
    ".chips{display:flex;flex-wrap:wrap;gap:6px;padding:0 14px 8px}" +
    ".chip{background:#fff;border:1px solid rgba(255,216,117,.8);color:#313e32;border-radius:999px;padding:6px 11px;font-size:12.5px;cursor:pointer}.chip:hover{background:#f1f3e2}" +
    ".vp{align-self:flex-start;background:var(--chq-green);color:#f7f9ed;border:0;border-radius:999px;padding:7px 14px;font-size:12.5px;font-weight:600;cursor:pointer}.vp:hover{background:var(--chq-green-hover)}" +
    ".typing{display:inline-flex;gap:4px}.typing i{width:6px;height:6px;border-radius:50%;background:#6b756a;animation:b 1s infinite}.typing i:nth-child(2){animation-delay:.15s}.typing i:nth-child(3){animation-delay:.3s}" +
    "@keyframes b{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}" +
    ".form{display:flex;gap:8px;padding:10px 12px;border-top:1px solid rgba(49,62,50,.12);background:#f7f9ed}" +
    ".in{flex:1;border:1px solid rgba(49,62,50,.2);background:#fff;border-radius:14px;padding:10px 12px;font-size:14px;color:#313e32;outline:none}.in:focus{border-color:var(--chq-green)}" +
    ".send{background:var(--chq-green);color:#f7f9ed;border:0;border-radius:14px;padding:0 14px;cursor:pointer;font-weight:600}.send:disabled{opacity:.5;cursor:default}" +
    ".foot{font-size:11px;text-align:center;color:#6b756a;padding:0 10px 8px}.foot a{color:#6b756a}" +
    /* tarjetas de video (YouTube) dentro del chat */
    ".vlist{flex:none;display:flex;flex-direction:column;gap:8px;align-self:stretch}" +
    ".vc{display:flex;gap:10px;align-items:center;background:#fff;border:1px solid rgba(49,62,50,.12);border-radius:12px;padding:8px;text-decoration:none;color:inherit;transition:border-color .15s}" +
    ".vc:hover{border-color:rgba(255,216,117,.95)}" +
    ".vth{position:relative;flex:none;width:112px;aspect-ratio:16/9;border-radius:8px;overflow:hidden;background:#313e32}" +
    ".vth img{width:100%;height:100%;object-fit:cover;display:block}" +
    ".vplay{position:absolute;left:50%;top:50%;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;background:rgba(49,62,50,.85);display:flex;align-items:center;justify-content:center}" +
    ".vplay:after{content:'';border-left:10px solid #fff;border-top:6px solid transparent;border-bottom:6px solid transparent;margin-left:3px}" +
    ".vdur{position:absolute;right:4px;bottom:4px;background:rgba(0,0,0,.75);color:#fff;font-size:11px;padding:1px 5px;border-radius:4px}" +
    ".vtx{min-width:0;font-size:13px;line-height:1.3}.vtx b{display:block;font-weight:600;color:#313e32;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.vtx small{display:block;margin-top:3px;font-size:11px;color:#5d6a5e}" +
    /* tarjetas de producto */
    ".plist{display:flex;flex-direction:column;gap:10px}" +
    ".pc{background:#fff;border:1px solid rgba(49,62,50,.12);border-radius:12px;padding:12px;transition:border-color .15s}" +
    ".pc:hover{border-color:rgba(255,216,117,.95)}" +
    ".pt{display:flex;gap:12px;align-items:flex-start}" +
    ".pt img{width:96px;height:96px;object-fit:contain;flex:none;border-radius:8px;background:#fff}" +
    ".pi{min-width:0;display:flex;flex-direction:column;gap:5px}" +
    ".pn{font-weight:600;font-size:14px;line-height:1.3;color:#313e32;text-decoration:none}.pn:hover{text-decoration:underline}" +
    ".pp{font-weight:700;font-size:16px;color:#003331}" +
    ".bd{align-self:flex-start;font-size:11px;font-weight:600;padding:2px 9px;border-radius:999px}.bd.ok{background:#e4f3d8;color:#2b6a12}.bd.no{background:#fde4e4;color:#b02a2a}" +
    "details{margin-top:8px;border-top:1px solid rgba(49,62,50,.1);padding-top:6px}" +
    "summary{cursor:pointer;font-size:12.5px;font-weight:600;color:#313e32;list-style:none;display:flex;align-items:center;gap:5px}summary::-webkit-details-marker{display:none}" +
    "summary::before{content:'▸';font-size:11px;transition:transform .15s}details[open] summary::before{transform:rotate(90deg)}" +
    ".buy{margin-top:10px;padding-top:10px;border-top:1px solid rgba(49,62,50,.1);display:flex;flex-direction:column;gap:8px}" +
    ".brow{display:flex;gap:8px;align-items:stretch}" +
    ".vsel{flex:1;min-width:0;border:1px solid rgba(49,62,50,.25);border-radius:8px;padding:8px;font-size:13px;color:#313e32;background:#fff}" +
    ".qty{display:flex;align-items:center;border:1px solid rgba(49,62,50,.25);border-radius:8px;overflow:hidden;background:#fff;flex:none;margin-left:auto}" +
    ".qty button{width:32px;height:36px;border:0;background:none;font-size:17px;cursor:pointer;color:#313e32}.qty button:hover:not(:disabled){background:#f1f3e2}.qty button:disabled{opacity:.35;cursor:default}" +
    ".qty span{min-width:28px;text-align:center;font-size:14px;font-weight:700}" +
    ".bb{flex:1;padding:10px 6px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;border:1px solid var(--chq-green);line-height:1.2}" +
    ".bb.add{background:#fff;color:var(--chq-green)}.bb.add:hover:not(:disabled){background:#f1f3e2}.bb.now{background:var(--chq-green);color:#f7f9ed}.bb.now:hover:not(:disabled){background:var(--chq-green-hover)}" +
    ".bb:disabled{opacity:.4;cursor:default}" +
    ".cstat{font-size:12.5px;line-height:1.45;color:#3f4a3f}.cstat:empty{display:none}.cstat.ok{color:#2b6a12;font-weight:600}.cstat.err{color:#b02a2a}" +
    ".cstat a{color:#003331;font-weight:700;text-decoration:underline}" +
    ".dd{font-size:12.5px;line-height:1.5;color:#3f4a3f;padding-top:6px;white-space:pre-wrap}" +
    ".dd ul{margin:6px 0 0;padding-left:18px}" +
    ".vb{display:inline-block;margin-top:8px;background:var(--chq-green);color:#f7f9ed;text-decoration:none;font-size:12.5px;font-weight:600;padding:7px 12px;border-radius:8px}" +
    /* barra de conversaciones: historial + nuevo chat */
    ".ctop{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 12px;border-bottom:1px solid rgba(49,62,50,.12);background:#f7f9ed;flex:none}" +
    ".ctop button{font-size:13px;font-weight:600;cursor:pointer;border-radius:10px;padding:7px 12px;border:1px solid rgba(49,62,50,.22);background:#fff;color:#313e32}" +
    ".ctop button:hover:not(:disabled){background:#f1f3e2}.ctop button:disabled{opacity:.45;cursor:default}" +
    ".ctop .new-btn{background:var(--chq-green);color:#f7f9ed;border-color:var(--chq-green)}.ctop .new-btn:hover:not(:disabled){background:var(--chq-green-hover)}" +
    ".hwrap{position:relative;min-width:0}" +
    ".hmenu{display:none;position:absolute;left:0;top:calc(100% + 6px);width:min(340px,calc(100vw - 48px));max-height:340px;overflow-y:auto;background:#fff;border:1px solid rgba(49,62,50,.18);border-radius:12px;box-shadow:0 12px 32px rgba(13,17,23,.18);z-index:6}" +
    ".hmenu.open{display:block}" +
    ".hm-row{display:flex;align-items:stretch;border-bottom:1px solid rgba(49,62,50,.08)}.hm-row.on{background:#f1f3e2}" +
    ".hm-open{flex:1;min-width:0;text-align:left;background:none!important;border:0!important;border-radius:0!important;padding:10px 12px!important;display:flex;flex-direction:column;gap:2px}" +
    ".hm-t{font-size:13.5px;font-weight:600;color:#313e32;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hm-d{font-size:11.5px;font-weight:400;color:#6b756a}" +
    ".hm-x{background:none!important;border:0!important;color:#6b756a;padding:0 12px!important;font-size:14px!important}.hm-x:hover{color:#b02a2a}" +
    ".hm-empty{padding:16px 14px;font-size:13px;color:#6b756a}" +
    ".hm-foot{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 12px;font-size:11.5px;color:#6b756a}" +
    ".hm-foot button{border:0!important;background:none!important;color:#b02a2a!important;padding:2px 0!important;font-size:11.5px!important;text-decoration:underline}" +
    /* productos dentro del chat (celular): carrusel deslizable */
    ".pcar{flex:none;display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;margin:0 -12px;padding:2px 12px 10px;scrollbar-width:none;align-self:stretch}.pcar::-webkit-scrollbar{display:none}" +
    ".pcar .pc{flex:0 0 min(88%,340px);scroll-snap-align:center}" +
    ".phint{flex:none;align-self:center;font-size:12px;color:#6b756a;margin-top:-4px}" +
    ".scrim{display:none}" +
    /* CELULAR (pantalla estrecha o teléfono en horizontal): chat a pantalla completa + hoja inferior */
    "@media(max-width:760px),(max-height:520px){" +
    ".max-btn{display:none}" +
    ":host(.chq-open) .btn{display:none}" +
    ".btn{right:14px;bottom:calc(14px + env(safe-area-inset-bottom));width:58px;height:58px}" +
    ".panel,.panel.open,.panel.side-open,.panel.max{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;max-width:none;height:100vh;height:100dvh;max-height:none;border-radius:0;box-shadow:none;transition:none}" +
    ".head{padding:calc(14px + env(safe-area-inset-top)) 6px 12px 14px}" +
    ".ib{padding:12px;font-size:20px}" +
    ".ctop{padding:8px 12px}.ctop button{font-size:14px;padding:9px 14px;min-height:42px}" +
    ".msgs{padding:12px;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}" +
    ".m,.panel.max .m{font-size:15.5px;max-width:90%}" +
    ".chips{flex-wrap:nowrap;overflow-x:auto;padding:0 12px 8px;-webkit-overflow-scrolling:touch;scrollbar-width:none}.chips::-webkit-scrollbar{display:none}" +
    ".chip{flex:none;white-space:nowrap;padding:10px 15px;font-size:14px}" +
    ".form{padding:10px 12px calc(10px + env(safe-area-inset-bottom))}" +
    ".in{font-size:16px;padding:12px 14px}" +
    ".send{padding:0 18px;font-size:15px;min-height:46px}" +
    ".foot{display:none}" +
    ".body{position:relative}" +
    ".panel.side-open .scrim{display:block;position:absolute;inset:0;background:rgba(0,0,0,.42);z-index:19}" +
    ".panel .side,.panel.side-open .side,.panel.max.side-open .side{position:absolute;left:0;right:0;bottom:0;top:auto;width:100%;height:80vh;height:80dvh;max-height:calc(100% - 56px);border-radius:18px 18px 0 0;border-right:0;box-shadow:0 -14px 40px rgba(0,0,0,.28);z-index:20;padding-bottom:env(safe-area-inset-bottom)}" +
    ".panel.side-open .chat{display:flex}" +
    ".tabs{overflow-x:auto;scrollbar-width:none}.tabs::-webkit-scrollbar{display:none}" +
    ".tab{flex:none;padding:14px 10px 11px;font-size:14.5px}" +
    ".sclose{flex:none;font-size:22px;padding:10px 12px}" +
    ".pr input,.vsel{font-size:16px}" +
    ".opt{padding:11px 2px;font-size:15px}.opt input{width:20px;height:20px}" +
    ".go,.clr{padding:14px;font-size:15px}" +
    ".bb{padding:13px 6px;font-size:14px}.qty button{width:42px;height:44px}.vsel{padding:11px 8px}" +
    "summary{padding:8px 0;font-size:14px}" +
    ".cbtn{padding:14px}.cbtn b{font-size:15.5px}" +
    ".hmenu{width:calc(100vw - 24px)}" +
    "}" +
    /* teléfono en horizontal: poca altura, se compactan cabecera y barras para dejar espacio a los mensajes */
    "@media(max-height:520px){.sub{display:none}.head{padding-top:calc(6px + env(safe-area-inset-top));padding-bottom:6px}.ib{padding:8px 12px}.ctop{padding:4px 12px}.ctop button{min-height:36px;padding:6px 12px}.form{padding-top:6px;padding-bottom:calc(6px + env(safe-area-inset-bottom))}.chips{padding-bottom:4px}}" +
    "</style>" +
    '<button class="btn" aria-label="Abrir chat con Chaqui"><svg viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg></button>' +
    '<section class="panel" role="dialog" aria-label="Chat con Chaqui">' +
    '<div class="head"><div><div class="brand"><img class="icon" alt="" src="' + ICON + '"><img class="logo" alt="Chaqui" src="' + LOGO + '"></div><div class="sub">Asistente de Ahumadores Chaquiro</div></div>' +
    '<div class="hb">' +
    '<button class="ib filt-btn" aria-label="Filtros y productos" title="Filtros y productos"><svg viewBox="0 0 24 24"><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></svg></button>' +
    '<button class="ib max-btn" aria-label="Maximizar" title="Maximizar">⤢</button>' +
    '<button class="ib x" aria-label="Cerrar" title="Cerrar">✕</button></div></div>' +
    '<div class="body"><div class="scrim"></div>' +
    '<aside class="side" data-tab="f" aria-label="Filtros y productos">' +
    '<div class="tabs"><button class="tab tab-f on" type="button">Filtros</button><button class="tab tab-p" type="button">Productos <span class="cnt"></span></button><button class="tab tab-m" type="button">Ubicación</button><button class="tab tab-c" type="button">Contacto</button><button class="sclose" aria-label="Cerrar panel">✕</button></div>' +
    '<div class="pane-f"><div class="db"><div class="sec">Categoría</div><div class="cats">Cargando…</div>' +
    '<div class="sec" style="margin-top:14px">Precio (COP)</div><div class="pr"><input class="pmin" type="number" min="0" inputmode="numeric" placeholder="Mínimo"><input class="pmax" type="number" min="0" inputmode="numeric" placeholder="Máximo"></div>' +
    '<label class="opt"><input class="avail" type="checkbox"><span>Solo disponibles</span></label></div>' +
    '<div class="df"><button class="clr" type="button">Limpiar</button><button class="go" type="button">Buscar</button></div></div>' +
    '<div class="pane-p"></div>' +
    '<div class="pane-m"></div>' +
    '<div class="pane-c"></div>' +
    "</aside>" +
    '<div class="chat">' +
    '<div class="ctop"><div class="hwrap"><button class="hist-btn" type="button" aria-haspopup="true">Conversaciones ▾</button><div class="hmenu"></div></div><button class="new-btn" type="button">＋ Nuevo chat</button></div>' +
    '<div class="msgs" aria-live="polite"></div><div class="chips"></div>' +
    '<form class="form"><input class="in" maxlength="500" placeholder="Escribí tu pregunta…" autocomplete="off"><button class="send" type="submit">Enviar</button></form>' +
    '<div class="foot">Asistente con IA · puede equivocarse · <a href="' + WA + '" target="_blank" rel="noopener">WhatsApp</a></div></div>' +
    "</div></section>";

  var $ = function (s) { return root.querySelector(s); };
  var btn = $(".btn"), panel = $(".panel"), side = $(".side"), msgs = $(".msgs"), chips = $(".chips"), form = $(".form"), input = $(".in"), send = $(".send");
  var cats = $(".cats"), pmin = $(".pmin"), pmax = $(".pmax"), avail = $(".avail"), paneP = $(".pane-p"), cnt = $(".cnt");
  var tabF = $(".tab-f"), tabP = $(".tab-p"), tabM = $(".tab-m"), paneM = $(".pane-m"), filtBtn = $(".filt-btn");
  var tabC = $(".tab-c"), paneC = $(".pane-c");
  var histBtn = $(".hist-btn"), newBtn = $(".new-btn"), hmenu = $(".hmenu");
  var busy = false;
  var optionsCache = null;
  var memStore = []; // respaldo si el navegador bloquea localStorage

  /* ---------- Conversaciones guardadas ---------- */
  // Cada carga de la página empieza una conversación NUEVA; las anteriores quedan en el historial.
  function newThread() {
    return { id: "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), title: "", createdAt: Date.now(), updatedAt: Date.now(), messages: [] };
  }
  var thread = newThread();
  var history = thread.messages; // mensajes de la conversación actual

  function readAll() {
    try { var raw = localStorage.getItem(STORE_KEY); var a = raw ? JSON.parse(raw) : []; return Array.isArray(a) ? a : []; }
    catch (e) { return memStore.slice(); }
  }
  function writeAll(list) {
    list.sort(function (a, b) { return b.updatedAt - a.updatedAt; });
    list = list.slice(0, MAX_THREADS);
    for (;;) { // si no cabe (cuota llena), descarta las conversaciones más antiguas
      try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); return; }
      catch (e) { if (list.length <= 1) { memStore = list; return; } list.pop(); }
    }
  }
  function slimProducts(list) {
    return (list || []).map(function (p) {
      return { titulo: p.titulo, url: p.url, precio: p.precio, disponible: p.disponible, imagen: p.imagen, detalle: (p.detalle || "").slice(0, 350), variantes: p.variantes, vars: p.vars };
    });
  }
  // Guarda la conversación actual (solo si el usuario ya escribió algo)
  function save() {
    if (!history.some(function (m) { return m.role === "user"; })) return;
    thread.updatedAt = Date.now();
    if (!thread.title) {
      var first = history.filter(function (m) { return m.role === "user"; })[0].content;
      thread.title = first.length > 44 ? first.slice(0, 44) + "…" : first;
    }
    var copy = {
      id: thread.id, title: thread.title, createdAt: thread.createdAt, updatedAt: thread.updatedAt,
      messages: history.slice(-MAX_SAVED_MSGS).map(function (m) { return { role: m.role, content: m.content, products: m.products && m.products.length ? slimProducts(m.products) : undefined, videos: m.videos && m.videos.length ? m.videos : undefined }; })
    };
    var all = readAll().filter(function (t) { return t.id !== thread.id; });
    all.push(copy);
    writeAll(all);
  }

  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function render(text) {
    var h = esc(text);
    h = h.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    h = h.replace(/(^|[\s(])(https?:\/\/[^\s)<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
    h = h.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    return h;
  }
  function add(role, text) {
    var d = document.createElement("div");
    d.className = "m " + (role === "user" ? "user" : "bot");
    d.innerHTML = render(text);
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function post(payload) {
    return fetch(ENDPOINT, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); });
  }
  function money(n) { return "$" + Number(n).toLocaleString("es-CO"); }
  // "Celular": pantalla estrecha o teléfono en horizontal (poca altura). Debe coincidir con el @media del CSS.
  function isSmall() { return window.matchMedia("(max-width:760px),(max-height:520px)").matches; }
  // Llevar al inicio de un elemento dentro del chat (para ver la respuesta y sus productos juntos)
  // Si lo que sigue (respuesta + productos) cabe en pantalla, se alinea al inicio de la respuesta; si no, se baja hasta el final
  // para que los productos (y sus botones de compra) queden completos a la vista.
  function scrollToEl(node) {
    try {
      var top = node.getBoundingClientRect().top - msgs.getBoundingClientRect().top + msgs.scrollTop;
      msgs.scrollTop = (msgs.scrollHeight - top <= msgs.clientHeight) ? top - 8 : msgs.scrollHeight;
    } catch (e) {}
  }
  // Abrir/cerrar el chat. En celular: bloquea el scroll de la página de fondo y se ajusta al área visible (teclado, barra del navegador)
  var lockedScroll = null;
  function lockScroll(on) {
    try {
      var de = document.documentElement, b = document.body;
      if (on && !lockedScroll) { lockedScroll = { de: de.style.overflow, b: b.style.overflow }; de.style.overflow = "hidden"; b.style.overflow = "hidden"; }
      else if (!on && lockedScroll) { de.style.overflow = lockedScroll.de; b.style.overflow = lockedScroll.b; lockedScroll = null; }
    } catch (e) {}
  }
  function syncViewport() {
    var vv = window.visualViewport;
    if (!isSmall() || !panel.classList.contains("open") || !vv) { panel.style.top = ""; panel.style.height = ""; panel.style.bottom = ""; return; }
    panel.style.top = vv.offsetTop + "px"; panel.style.bottom = "auto"; panel.style.height = vv.height + "px";
  }
  function setOpen(on) {
    panel.classList.toggle("open", on);
    host.classList.toggle("chq-open", on);
    lockScroll(on && isSmall());
    syncViewport();
  }
  // Tarjetas de video de YouTube dentro del chat (escritorio y celular): miniatura + título; abre YouTube en otra pestaña
  function validVideos(list) {
    return (list || []).filter(function (v) { return v && /^[\w-]{11}$/.test(v.id || "") && v.titulo; });
  }
  function addVideos(list) {
    list = validVideos(list);
    if (!list.length) return;
    var box = el("div", "vlist");
    list.forEach(function (v) {
      var a = el("a", "vc"); a.href = "https://www.youtube.com/watch?v=" + v.id; a.target = "_blank"; a.rel = "noopener";
      var th = el("span", "vth"), im = document.createElement("img");
      im.src = "https://i.ytimg.com/vi/" + v.id + "/mqdefault.jpg"; im.alt = ""; im.loading = "lazy";
      th.appendChild(im); th.appendChild(el("span", "vplay"));
      if (v.duracion) th.appendChild(el("span", "vdur", v.duracion));
      var tx = el("span", "vtx"); tx.appendChild(el("b", "", v.titulo)); tx.appendChild(el("small", "", "Ver en YouTube"));
      a.appendChild(th); a.appendChild(tx); box.appendChild(a);
      a.addEventListener("click", function () { try { window.Shopify && Shopify.analytics && Shopify.analytics.publish("chaqui:video_click", { id: v.id }); } catch (e) {} });
    });
    msgs.appendChild(box);
  }
  // Tarjetas de producto dentro del chat (celular): carrusel deslizable con foto, opciones y botones de compra
  function addInlineProducts(list) {
    list = validProducts(list);
    if (!list.length) return;
    var car = el("div", "pcar");
    list.forEach(function (p) { car.appendChild(productCard(p)); });
    msgs.appendChild(car);
    if (list.length > 1) msgs.appendChild(el("div", "phint", "Deslizá para ver los " + list.length + " productos ▸"));
  }

  /* ---------- Panel lateral: pestañas Filtros / Productos ---------- */
  function showTab(name) {
    side.setAttribute("data-tab", name);
    tabF.classList.toggle("on", name === "f");
    tabP.classList.toggle("on", name === "p");
    tabM.classList.toggle("on", name === "m");
    tabC.classList.toggle("on", name === "c");
  }
  function openSide(name) {
    panel.classList.add("side-open");
    filtBtn.classList.add("on");
    showTab(name);
    if (name === "f") loadFilters();
    if (name === "m") loadMap();
    if (name === "c") loadContact();
  }
  // Panel de contacto: botones directos (WhatsApp, llamada, correo), horario y dirección. Se crea la primera vez que se abre.
  // El teléfono para llamadas es el mismo número del WhatsApp; el correo de contacto es redes@chaquiro.com
  var SUPPORT_PHONE = "+573184720787", SUPPORT_PHONE_TXT = "+57 318 472 0787", SUPPORT_EMAIL = "redes@chaquiro.com", WA_TXT = "+57 318 472 0787";
  var ICONS = {
    wa: '<svg viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>',
    tel: '<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>'
  };
  function contactBtn(cls, icon, title, sub, href) {
    var a = el("a", "cbtn" + (cls ? " " + cls : "")); a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    var ic = el("span", "ic"); ic.innerHTML = ICONS[icon]; a.appendChild(ic);
    var tx = el("div"); tx.appendChild(el("b", "", title)); tx.appendChild(el("small", "", sub)); a.appendChild(tx);
    return a;
  }
  function loadContact() {
    if (paneC.firstChild) return;
    paneC.appendChild(el("div", "ct-h", "Hablemos"));
    paneC.appendChild(el("div", "ct-s", "Elegí cómo querés que te atendamos. Con gusto te ayudamos."));
    paneC.appendChild(contactBtn("main", "wa", "Escribir por WhatsApp", WA_TXT, WA + "?text=" + encodeURIComponent("¡Hola Ahumadores Chaquiro! Vengo del sitio web y necesito asesoría")));
    paneC.appendChild(contactBtn("", "tel", "Llamar", SUPPORT_PHONE_TXT, "tel:" + SUPPORT_PHONE));
    paneC.appendChild(contactBtn("", "mail", "Escribir un correo", SUPPORT_EMAIL, "mailto:" + SUPPORT_EMAIL));
    var hrs = el("div", "chrs");
    hrs.appendChild(el("b", "", "Horario de atención"));
    hrs.appendChild(document.createTextNode(STORE_HOURS));
    hrs.appendChild(document.createElement("br"));
    hrs.appendChild(el("b", "", "Tienda"));
    hrs.appendChild(document.createTextNode(STORE_ADDRESS));
    var map = el("button", "clink", "Ver en el mapa ▸"); map.type = "button";
    map.onclick = function () { showTab("m"); loadMap(); };
    hrs.appendChild(map);
    paneC.appendChild(hrs);
  }
  // Mapa de Google (embed sin clave). Se crea solo la primera vez que se abre la pestaña.
  function loadMap() {
    if (paneM.firstChild) return;
    var ifr = el("iframe", "map");
    ifr.src = "https://www.google.com/maps?q=" + encodeURIComponent(MAP_QUERY) + "&output=embed";
    ifr.title = "Mapa de Ahumadores Chaquiro"; ifr.loading = "lazy"; ifr.referrerPolicy = "no-referrer-when-downgrade";
    ifr.setAttribute("allowfullscreen", "");
    var info = el("div", "mi");
    info.appendChild(el("b", "", "Ahumadores Chaquiro"));
    info.appendChild(el("span", "", STORE_ADDRESS));
    info.appendChild(el("span", "", STORE_HOURS));
    var row = el("div", "mb");
    var a1 = el("a", "a1", "Cómo llegar"); a1.href = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(MAP_QUERY); a1.target = "_blank"; a1.rel = "noopener";
    var a2 = el("a", "a2", "WhatsApp"); a2.href = WA; a2.target = "_blank"; a2.rel = "noopener";
    row.appendChild(a1); row.appendChild(a2); info.appendChild(row);
    paneM.appendChild(ifr); paneM.appendChild(info);
  }
  function closeSide() { panel.classList.remove("side-open"); filtBtn.classList.remove("on"); }

  /* ---------- Tarjetas de producto (imagen + datos + detalles desplegables) ---------- */
  /* ---------- Compra desde la tarjeta: variante, cantidad, "Agregar al carrito" y "Comprar ahora" ---------- */
  var STORE_ORIGIN = "https://chaquiro.com";
  // Agregar al carrito solo puede funcionar cuando el widget corre dentro de chaquiro.com (misma sesión de carrito).
  var ON_STORE = /(^|\.)chaquiro\.com$/i.test(location.hostname);
  function track(name, data) {
    try { if (window.Shopify && window.Shopify.analytics && window.Shopify.analytics.publish) window.Shopify.analytics.publish("chaqui:" + name, data || {}); } catch (e) {}
  }
  // Avisa al tema de que el carrito cambió (depende de cada tema: se prueba varias señales comunes)
  function notifyTheme(cart) {
    ["cart:refresh", "cart:updated", "cart:change"].forEach(function (n) { try { document.dispatchEvent(new CustomEvent(n, { detail: { cart: cart }, bubbles: true })); } catch (e) {} });
    // El tema de Chaquiro no escucha esos eventos: se pide a Shopify el encabezado ya actualizado (Section Rendering API)
    // y se reemplaza el contador del carrito. Los selectores son de este tema; si cambia, revisar aquí.
    fetch("/?sections=header", { headers: { accept: "application/json" } })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var html = j.header || j[Object.keys(j)[0]];
        if (!html) return;
        var doc = new DOMParser().parseFromString(html, "text/html");
        // El tema tiene más de un contador (p. ej. escritorio y móvil): se actualizan todos, con copias del HTML nuevo
        [".js-header-cart-item-count-wrapper", ".header__cart-count", "[data-cart-count]"].forEach(function (sel) {
          var live = document.querySelectorAll(sel), fresh = doc.querySelectorAll(sel);
          if (!live.length || live.length !== fresh.length) return;
          live.forEach(function (node, i) { node.replaceWith(fresh[i].cloneNode(true)); });
        });
      })
      .catch(function () {});
  }
  function actionLink(text, href) { var a = el("a", "", text); a.href = href; a.target = "_blank"; a.rel = "noopener"; return a; }
  function buyBox(p, ppEl, bdEl) {
    var vars = p.vars, qty = 1, sel = null;
    var cur = vars.filter(function (v) { return v.a; })[0] || vars[0];
    var box = el("div", "buy");
    var row1 = el("div", "brow");
    if (vars.length > 1) {
      sel = el("select", "vsel"); sel.setAttribute("aria-label", "Opción del producto");
      vars.forEach(function (v, i) {
        var o = el("option", "", (v.t || "Opción") + " · " + v.p + (v.a ? "" : " (agotado)"));
        o.value = String(i); if (v === cur) o.selected = true; sel.appendChild(o);
      });
      row1.appendChild(sel);
    }
    var q = el("div", "qty");
    var minus = el("button", "", "−"); minus.type = "button"; minus.setAttribute("aria-label", "Menos");
    var qv = el("span", "", "1");
    var plus = el("button", "", "+"); plus.type = "button"; plus.setAttribute("aria-label", "Más");
    q.appendChild(minus); q.appendChild(qv); q.appendChild(plus);
    row1.appendChild(q);
    box.appendChild(row1);

    var row2 = el("div", "brow");
    var add = el("button", "bb add", "Agregar al carrito"); add.type = "button";
    var now = el("button", "bb now", "Comprar ahora"); now.type = "button";
    row2.appendChild(add); row2.appendChild(now);
    box.appendChild(row2);
    var stat = el("div", "cstat");
    box.appendChild(stat);

    function refresh() {
      if (sel) cur = vars[Number(sel.value)];
      qv.textContent = String(qty);
      minus.disabled = qty <= 1; plus.disabled = qty >= 10;
      if (vars.length > 1) ppEl.textContent = cur.p;
      var ok = !!cur.a;
      bdEl.className = "bd " + (ok ? "ok" : "no"); bdEl.textContent = ok ? "En stock" : "Agotado";
      add.disabled = !ok; now.disabled = !ok;
      stat.textContent = "";
    }
    if (sel) sel.onchange = refresh;
    minus.onclick = function () { if (qty > 1) { qty--; refresh(); } };
    plus.onclick = function () { if (qty < 10) { qty++; refresh(); } };

    now.onclick = function () {
      var url = STORE_ORIGIN + "/cart/" + cur.id + ":" + qty + "?utm_source=chaqui&utm_medium=chat&utm_campaign=widget";
      track("buy_now", { product: p.titulo, variant_id: cur.id, quantity: qty });
      window.open(url, "_blank", "noopener");
    };
    add.onclick = function () {
      if (!ON_STORE) { // en la página de prueba no hay sesión de carrito de la tienda: llevar a la ficha
        stat.textContent = "";
        stat.appendChild(document.createTextNode("Esta es una página de prueba: agregar al carrito solo funciona dentro de chaquiro.com. "));
        stat.appendChild(actionLink("Ver la ficha ▸", p.url));
        return;
      }
      add.disabled = true; now.disabled = true;
      stat.className = "cstat"; stat.textContent = "Agregando…";
      fetch("/cart/add.js", { method: "POST", headers: { "content-type": "application/json", accept: "application/json" }, body: JSON.stringify({ items: [{ id: cur.id, quantity: qty }] }) })
        .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.description || j.message || String(r.status)); return j; }); })
        .then(function () { return fetch("/cart.js", { headers: { accept: "application/json" } }).then(function (r) { return r.json(); }); })
        .then(function (cart) {
          stat.className = "cstat ok"; stat.textContent = "";
          stat.appendChild(document.createTextNode("Agregado ✓ (" + cart.item_count + " en tu carrito) · "));
          stat.appendChild(actionLink("Ver carrito", "/cart")); stat.appendChild(document.createTextNode(" · ")); stat.appendChild(actionLink("Pagar", "/checkout"));
          notifyTheme(cart);
          track("add_to_cart", { product: p.titulo, variant_id: cur.id, quantity: qty });
        })
        .catch(function (e) {
          stat.className = "cstat err"; stat.textContent = "";
          stat.appendChild(document.createTextNode("No pude agregarlo (" + (e.message || "error") + "). "));
          stat.appendChild(actionLink("Probá desde la ficha ▸", p.url));
        })
        .then(function () { add.disabled = !cur.a; now.disabled = !cur.a; });
    };
    refresh();
    return box;
  }

  function productCard(p) {
    var card = el("div", "pc");
    var top = el("div", "pt");
    if (p.imagen && /^https:\/\//.test(p.imagen)) {
      var im = el("img"); im.src = p.imagen; im.alt = p.titulo || ""; im.loading = "lazy";
      top.appendChild(im);
    }
    var info = el("div", "pi");
    var name = el("a", "pn", p.titulo || ""); name.href = p.url; name.target = "_blank"; name.rel = "noopener";
    info.appendChild(name);
    var ppEl = el("div", "pp", p.precio || "");
    info.appendChild(ppEl);
    var stock = typeof p.stock === "number" && p.stock > 0 ? p.stock + " disponibles" : "En stock";
    var bdEl = p.disponible === false ? el("span", "bd no", "Agotado") : el("span", "bd ok", stock);
    info.appendChild(bdEl);
    top.appendChild(info);
    card.appendChild(top);
    if (p.vars && p.vars.length) card.appendChild(buyBox(p, ppEl, bdEl));
    if (p.detalle || (p.variantes && p.variantes.length)) {
      var det = el("details");
      det.appendChild(el("summary", "", "Detalles"));
      var dd = el("div", "dd");
      if (p.detalle) dd.appendChild(document.createTextNode(p.detalle + (p.detalle.length >= 600 ? "…" : "")));
      if (p.variantes && p.variantes.length) {
        var ul = el("ul");
        p.variantes.forEach(function (v) { ul.appendChild(el("li", "", v)); });
        dd.appendChild(ul);
      }
      var go = el("a", "vb", "Ver en la tienda"); go.href = p.url; go.target = "_blank"; go.rel = "noopener";
      dd.appendChild(document.createElement("br")); dd.appendChild(go);
      det.appendChild(dd);
      card.appendChild(det);
    }
    return card;
  }
  function validProducts(list) {
    return (list || []).filter(function (p) { return /^https:\/\/(www\.)?chaquiro\.com\/products\//.test(p.url || ""); });
  }
  // Pinta la lista en el panel lateral (pestaña Productos). open: abrir el panel automáticamente.
  function setProducts(list, open) {
    list = validProducts(list);
    paneP.innerHTML = "";
    if (!list.length) {
      paneP.appendChild(el("div", "empty", "Todavía no hay productos para mostrar. Usá los filtros o pedile a Chaqui que te muestre algo."));
      cnt.textContent = "";
    } else {
      var wrap = el("div", "plist");
      list.forEach(function (p) { wrap.appendChild(productCard(p)); });
      paneP.appendChild(wrap);
      cnt.textContent = list.length;
    }
    paneP.scrollTop = 0;
    if (open) openSide("p");
  }
  // Botón dentro del chat para volver a abrir esos productos en el panel lateral
  function addProductsChip(list) {
    list = validProducts(list);
    if (!list.length) return;
    var b = el("button", "vp", "Ver " + list.length + " producto" + (list.length > 1 ? "s" : "") + " en el panel ▸");
    b.type = "button";
    b.onclick = function () { setProducts(list, true); };
    msgs.appendChild(b);
    msgs.scrollTop = msgs.scrollHeight;
  }

  /* ---------- Filtros ---------- */
  function buildFilters(o) {
    cats.innerHTML = "";
    [{ handle: "", titulo: "Todas las categorías" }].concat(o.colecciones).forEach(function (c, i) {
      var lab = el("label", "opt");
      var r = el("input"); r.type = "radio"; r.name = "cat"; r.value = c.handle; r.dataset.title = c.titulo;
      if (i === 0) r.checked = true;
      lab.appendChild(r);
      lab.appendChild(el("span", "", c.titulo + (c.productos ? " (" + c.productos + ")" : "")));
      cats.appendChild(lab);
    });
    pmin.placeholder = "Mín. " + money(o.precio_min);
    pmax.placeholder = "Máx. " + money(o.precio_max);
  }
  function loadFilters() {
    if (optionsCache) return;
    post({ action: "filter_options" })
      .then(function (o) { optionsCache = o; buildFilters(o); })
      .catch(function () { cats.textContent = "No pude cargar las categorías. Intentá de nuevo."; });
  }
  function clearFilters() {
    var first = cats.querySelector("input[type=radio]"); if (first) first.checked = true;
    pmin.value = ""; pmax.value = ""; avail.checked = false;
  }
  function runFilterSearch() {
    if (busy) return;
    var sel = cats.querySelector("input[name=cat]:checked");
    var f = { coleccion: sel ? sel.value : "", precio_min: pmin.value, precio_max: pmax.value, solo_disponibles: avail.checked };
    var parts = [];
    if (f.coleccion) parts.push(sel.dataset.title);
    if (f.precio_min) parts.push("desde " + money(f.precio_min));
    if (f.precio_max) parts.push("hasta " + money(f.precio_max));
    if (f.solo_disponibles) parts.push("solo disponibles");
    var userText = "Filtros: " + (parts.length ? parts.join(" · ") : "todos los productos");
    chips.innerHTML = "";
    setBusy(true);
    add("user", userText);
    history.push({ role: "user", content: userText }); save();
    var bubble = add("bot", ""); bubble.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
    var keepScroll = false;
    post({ action: "filter_search", filtros: f })
      .then(function (d) {
        var mob = isSmall();
        var text = d.total
          ? "Encontré " + d.total + " producto" + (d.total > 1 ? "s" : "") + " con esos filtros" + (d.productos.length < d.total ? " (te muestro los " + d.productos.length + " más económicos)" : "") + (mob ? ". Deslizá para verlos." : ". Los ves en el panel de la izquierda.")
          : "No encontré productos con esos filtros. Podés ampliar el rango de precio o cambiar la categoría.";
        bubble.innerHTML = render(text);
        history.push({ role: "assistant", content: text, products: d.productos || [] }); save();
        if (mob) { closeSide(); addInlineProducts(d.productos); keepScroll = true; scrollToEl(bubble); }
        else { setProducts(d.productos, true); addProductsChip(d.productos); }
      })
      .catch(function () { bubble.innerHTML = 'No pude traer los productos en este momento. Escribinos por WhatsApp: <a href="' + WA + '" target="_blank" rel="noopener">abrir chat</a>.'; history.pop(); save(); })
      .then(function () { setBusy(false); if (!keepScroll) msgs.scrollTop = msgs.scrollHeight; });
  }

  /* ---------- Chat ---------- */
  function setBusy(b) {
    busy = b; send.disabled = b; newBtn.disabled = b; histBtn.disabled = b; // no se cambia de conversación mientras se responde
  }
  // Pinta la conversación actual desde cero (saludo + mensajes guardados + último listado de productos)
  function renderThread() {
    msgs.innerHTML = ""; chips.innerHTML = "";
    add("bot", GREETING);
    var last = null;
    history.forEach(function (m) {
      add(m.role === "user" ? "user" : "bot", m.content);
      if (m.products && m.products.length) {
        if (isSmall()) addInlineProducts(m.products); // celular: los productos van dentro del chat
        else { addProductsChip(m.products); last = m.products; }
      }
      if (m.videos && m.videos.length) addVideos(m.videos);
    });
    setProducts(last || [], false);
    if (!history.length) showChips();
    msgs.scrollTop = msgs.scrollHeight;
  }
  function newChat() {
    if (busy) return;
    thread = newThread(); history = thread.messages;
    closeMenu(); closeSide(); renderThread();
    if (!isSmall()) input.focus();
  }
  function openThread(t) {
    if (busy) return;
    thread = { id: t.id, title: t.title, createdAt: t.createdAt, updatedAt: t.updatedAt, messages: (t.messages || []).slice() };
    history = thread.messages;
    closeMenu(); closeSide(); renderThread();
    if (!isSmall()) input.focus();
  }
  function deleteThread(id) {
    writeAll(readAll().filter(function (t) { return t.id !== id; }));
    if (id === thread.id) newChat(); else buildMenu();
  }
  function fmtDate(ts) {
    try { return new Date(ts).toLocaleString("es-CO", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" }); } catch (e) { return ""; }
  }
  function buildMenu() {
    var list = readAll().sort(function (a, b) { return b.updatedAt - a.updatedAt; });
    hmenu.innerHTML = "";
    if (!list.length) hmenu.appendChild(el("div", "hm-empty", "Aún no hay conversaciones anteriores. Se van guardando aquí a medida que conversás."));
    list.forEach(function (t) {
      var row = el("div", "hm-row" + (t.id === thread.id ? " on" : ""));
      var open = el("button", "hm-open"); open.type = "button";
      open.appendChild(el("span", "hm-t", t.title || "Conversación"));
      open.appendChild(el("span", "hm-d", fmtDate(t.updatedAt)));
      open.onclick = function () { openThread(t); };
      var del = el("button", "hm-x", "✕"); del.type = "button"; del.title = "Borrar esta conversación"; del.setAttribute("aria-label", "Borrar esta conversación");
      del.onclick = function (e) { e.stopPropagation(); deleteThread(t.id); };
      row.appendChild(open); row.appendChild(del);
      hmenu.appendChild(row);
    });
    var foot = el("div", "hm-foot");
    foot.appendChild(el("span", "", "Se guardan solo en este navegador"));
    if (list.length) {
      var all = el("button", "", "Borrar todo"); all.type = "button";
      all.onclick = function () { if (confirm("¿Borrar todas las conversaciones guardadas?")) { writeAll([]); newChat(); } };
      foot.appendChild(all);
    }
    hmenu.appendChild(foot);
  }
  function closeMenu() { hmenu.classList.remove("open"); }
  function toggleMenu() {
    if (hmenu.classList.contains("open")) return closeMenu();
    buildMenu(); hmenu.classList.add("open");
  }

  function open() {
    setOpen(true);
    if (!msgs.children.length) renderThread();
    if (!isSmall()) input.focus(); // en celular no se abre el teclado solo: taparía el saludo y las sugerencias
  }
  function showChips() {
    chips.innerHTML = "";
    SUGGESTIONS.forEach(function (s) {
      var c = el("button", "chip", s); c.type = "button";
      c.onclick = function () { s === "Filtrar productos" ? openSide("f") : s === "Hablar con una persona" ? openSide("c") : ask(s); };
      chips.appendChild(c);
    });
  }
  function ask(text) {
    text = (text || "").trim();
    if (!text || busy) return;
    setBusy(true); chips.innerHTML = "";
    add("user", text);
    history.push({ role: "user", content: text }); save();
    var typing = add("bot", ""); typing.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
    var keepScroll = false;
    post({ messages: history.slice(-10).map(function (m) { return { role: m.role, content: m.content }; }) })
      .then(function (d) {
        typing.innerHTML = render(d.reply);
        history.push({ role: "assistant", content: d.reply, products: d.products || [], videos: validVideos(d.videos) }); save();
        if (validProducts(d.products).length) {
          if (isSmall()) { addInlineProducts(d.products); keepScroll = true; scrollToEl(typing); } // celular: carrusel dentro del chat
          else { setProducts(d.products, true); addProductsChip(d.products); }                      // escritorio: panel lateral
        }
        if (validVideos(d.videos).length) { addVideos(d.videos); if (!validProducts(d.products).length) { keepScroll = true; scrollToEl(typing); } }
        // Filtros, mapa y contacto se abren solos (en celular suben como hoja inferior)
        (d.widgets || []).forEach(function (w) {
          var tab = w === "filtros" ? "f" : w === "mapa" ? "m" : w === "contacto" ? "c" : null;
          if (tab) openSide(tab);
        });
      })
      .catch(function () { typing.innerHTML = 'Tuve un inconveniente para responderte. Escribinos por WhatsApp y con gusto te ayudamos: <a href="' + WA + '" target="_blank" rel="noopener">abrir chat</a>.'; history.pop(); save(); })
      .then(function () { setBusy(false); if (!keepScroll) msgs.scrollTop = msgs.scrollHeight; if (!isSmall()) input.focus(); });
  }

  btn.onclick = function () { panel.classList.contains("open") ? setOpen(false) : open(); };
  $(".x").onclick = function () { closeSide(); setOpen(false); };
  $(".scrim").onclick = closeSide; // celular: tocar fuera de la hoja inferior la cierra
  input.addEventListener("focus", function () { if (isSmall()) setTimeout(function () { msgs.scrollTop = msgs.scrollHeight; }, 350); });
  if (window.visualViewport) { window.visualViewport.addEventListener("resize", syncViewport); window.visualViewport.addEventListener("scroll", syncViewport); }
  window.addEventListener("resize", syncViewport);
  window.addEventListener("orientationchange", syncViewport);
  var maxBtn = $(".max-btn");
  maxBtn.onclick = function () {
    var on = panel.classList.toggle("max");
    maxBtn.textContent = on ? "⤡" : "⤢";
    maxBtn.title = on ? "Reducir" : "Maximizar";
    maxBtn.setAttribute("aria-label", maxBtn.title);
    msgs.scrollTop = msgs.scrollHeight;
  };
  filtBtn.onclick = function () { panel.classList.contains("side-open") ? closeSide() : openSide(cnt.textContent && side.getAttribute("data-tab") === "p" ? "p" : "f"); };
  tabF.onclick = function () { showTab("f"); loadFilters(); };
  tabP.onclick = function () { showTab("p"); };
  tabM.onclick = function () { showTab("m"); loadMap(); };
  tabC.onclick = function () { showTab("c"); loadContact(); };
  $(".sclose").onclick = closeSide;
  $(".clr").onclick = clearFilters;
  $(".go").onclick = runFilterSearch;
  form.onsubmit = function (e) { e.preventDefault(); var v = input.value; input.value = ""; ask(v); };
  newBtn.onclick = newChat;
  histBtn.onclick = function (e) { e.stopPropagation(); toggleMenu(); };
  root.addEventListener("click", function (e) { if (!e.target.closest || !e.target.closest(".hwrap")) closeMenu(); });
  setProducts([], false);
})();
