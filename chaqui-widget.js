/*! Chaqui — asistente de Ahumadores Chaquiro. Widget autónomo (sin dependencias). */
(function () {
  "use strict";
  if (window.__chaquiLoaded) return;
  window.__chaquiLoaded = true;

  var script = document.currentScript;
  var ENDPOINT = (script && script.getAttribute("data-endpoint")) || "https://nulfmzq6hiq5ccjn2m6lf6d5vu0liuge.lambda-url.us-east-1.on.aws/";
  var WA = "https://wa.me/573184720787";
  var STORE_ADDRESS = "Cra. 43 A # 46 sur 20 (E/S Shell), Envigado, Antioquia";
  var MAP_QUERY = "Cra. 43A #46 Sur 20, Envigado, Antioquia, Colombia";
  var STORE_HOURS = "Lunes a viernes 9:00 a.m.–6:00 p.m. · Sábados 9:00 a.m.–4:00 p.m.";
  var HISTORY_KEY = "chaqui_history_v2";
  var GREETING = "¡Quiubo parce! Soy Chaqui, el asistente de Ahumadores Chaquiro. ¿Te ayudo a escoger tu ahumador o asador?";
  var SUGGESTIONS = ["¿Qué ahumador me recomiendas?", "Ver combos para empezar", "Filtrar productos", "¿Dónde están ubicados?", "Hablar con una persona"];

  var host = document.createElement("div");
  host.id = "chaqui-root";
  document.body.appendChild(host);
  var root = host.attachShadow({ mode: "open" });

  root.innerHTML =
    "<style>" +
    ":host{all:initial}" +
    "*{box-sizing:border-box;font-family:'Segoe UI',system-ui,-apple-system,Roboto,sans-serif}" +
    ".btn{position:fixed;right:20px;bottom:20px;width:60px;height:60px;border-radius:50%;background:#000;color:#f7f9ed;border:2px solid #ffd875;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.3);z-index:2147483000;transition:transform .15s}" +
    ".btn:hover{transform:scale(1.06)}.btn svg{width:28px;height:28px;fill:currentColor}" +
    ".panel{position:fixed;right:20px;bottom:92px;width:430px;max-width:calc(100vw - 24px);height:660px;max-height:calc(100vh - 110px);background:#f7f9ed;color:#313e32;border-radius:16px;box-shadow:0 30px 80px -20px rgba(13,17,23,.35),0 8px 24px rgba(13,17,23,.15);display:none;flex-direction:column;overflow:hidden;z-index:2147483000;transition:width .2s ease}" +
    ".panel.open{display:flex}" +
    ".panel.side-open{width:min(1040px,calc(100vw - 40px))}" +
    ".panel.max{width:calc(100vw - 40px);height:calc(100vh - 112px);max-height:none}" +
    /* cabecera */
    ".head{background:#000;color:#f7f9ed;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex:none}" +
    ".title{font-weight:700;font-size:16px;border-bottom:2px solid #ffd875;padding-bottom:2px;display:inline-block}.sub{font-size:12px;opacity:.75;margin-top:4px}" +
    ".hb{display:flex;gap:2px}.ib{background:none;border:0;color:#f7f9ed;cursor:pointer;line-height:1;padding:7px 8px;border-radius:8px;font-size:18px;display:flex;align-items:center}.ib:hover,.ib.on{background:rgba(247,249,237,.18)}.ib svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}" +
    /* cuerpo: panel lateral + chat */
    ".body{flex:1;display:flex;min-height:0}" +
    ".chat{flex:1;min-width:0;display:flex;flex-direction:column}" +
    ".side{display:none;flex-direction:column;width:390px;flex:none;background:#fff;border-right:1px solid rgba(49,62,50,.14);min-height:0}" +
    ".panel.side-open .side{display:flex}" +
    ".panel.max.side-open .side{width:430px}" +
    ".tabs{display:flex;align-items:center;border-bottom:1px solid rgba(49,62,50,.12);padding:0 8px 0 4px;flex:none}" +
    ".tab{background:none;border:0;border-bottom:3px solid transparent;padding:14px 12px 11px;font-size:14px;font-weight:600;color:#6b756a;cursor:pointer;display:flex;align-items:center;gap:6px}" +
    ".tab.on{color:#000;border-bottom-color:#ffd875}" +
    ".cnt{background:#000;color:#f7f9ed;border-radius:999px;font-size:11px;padding:1px 7px;font-weight:700}.cnt:empty{display:none}" +
    ".sclose{margin-left:auto;background:none;border:0;font-size:18px;cursor:pointer;color:#313e32;padding:8px}" +
    ".pane-f,.pane-p,.pane-m{display:none;flex:1;min-height:0}" +
    ".side[data-tab=m] .pane-m{display:flex;flex-direction:column;background:#f7f9ed}" +
    ".map{flex:1;min-height:220px;border:0;width:100%;background:#eef0e0}" +
    ".mi{padding:14px 16px;border-top:1px solid rgba(49,62,50,.12);background:#fff;display:flex;flex-direction:column;gap:8px}" +
    ".mi b{font-size:15px}.mi span{font-size:13.5px;line-height:1.45;color:#3f4a3f}" +
    ".mb{display:flex;gap:8px;margin-top:4px}.mb a{flex:1;text-align:center;text-decoration:none;font-size:13px;font-weight:700;padding:10px;border-radius:10px}" +
    ".mb .a1{background:#000;color:#f7f9ed}.mb .a2{background:#fff;color:#313e32;border:1px solid rgba(49,62,50,.25)}" +
    ".side[data-tab=f] .pane-f{display:flex;flex-direction:column}" +
    ".side[data-tab=p] .pane-p{display:block;overflow-y:auto;padding:12px;background:#f7f9ed}" +
    ".db{flex:1;overflow-y:auto;padding:14px 16px}" +
    ".sec{font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:#6b756a;font-weight:700;margin:4px 0 8px}" +
    ".opt{display:flex;align-items:center;gap:9px;padding:6px 2px;font-size:14px;cursor:pointer}.opt input{accent-color:#000;width:16px;height:16px}" +
    ".pr{display:flex;gap:8px;margin-bottom:12px}.pr input{flex:1;min-width:0;border:1px solid rgba(49,62,50,.25);border-radius:10px;padding:9px 10px;font-size:14px;color:#313e32;background:#fff}" +
    ".df{display:flex;gap:8px;padding:12px 16px;border-top:1px solid rgba(49,62,50,.12)}" +
    ".go{flex:1;background:#000;color:#f7f9ed;border:0;border-radius:10px;padding:11px;font-weight:700;cursor:pointer;font-size:14px}.go:hover{background:#1c1c1c}" +
    ".clr{background:#fff;color:#313e32;border:1px solid rgba(49,62,50,.25);border-radius:10px;padding:11px 14px;cursor:pointer;font-size:14px}" +
    ".empty{color:#6b756a;font-size:14px;text-align:center;padding:40px 16px;line-height:1.5}" +
    /* mensajes */
    ".msgs{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}" +
    ".m{max-width:85%;padding:10px 13px;border-radius:16px;font-size:14px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}" +
    ".panel.max .m{font-size:15px;max-width:75%}" +
    ".m.bot{background:#eef0e0;align-self:flex-start;border-bottom-left-radius:4px}" +
    ".m.user{background:#000;color:#f7f9ed;align-self:flex-end;border-bottom-right-radius:4px}" +
    ".m a{color:#003331;font-weight:600;text-decoration:underline}" +
    ".chips{display:flex;flex-wrap:wrap;gap:6px;padding:0 14px 8px}" +
    ".chip{background:#fff;border:1px solid rgba(255,216,117,.8);color:#313e32;border-radius:999px;padding:6px 11px;font-size:12.5px;cursor:pointer}.chip:hover{background:#f1f3e2}" +
    ".vp{align-self:flex-start;background:#000;color:#f7f9ed;border:0;border-radius:999px;padding:7px 14px;font-size:12.5px;font-weight:600;cursor:pointer}.vp:hover{background:#1c1c1c}" +
    ".typing{display:inline-flex;gap:4px}.typing i{width:6px;height:6px;border-radius:50%;background:#6b756a;animation:b 1s infinite}.typing i:nth-child(2){animation-delay:.15s}.typing i:nth-child(3){animation-delay:.3s}" +
    "@keyframes b{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}" +
    ".form{display:flex;gap:8px;padding:10px 12px;border-top:1px solid rgba(49,62,50,.12);background:#f7f9ed}" +
    ".in{flex:1;border:1px solid rgba(49,62,50,.2);background:#fff;border-radius:14px;padding:10px 12px;font-size:14px;color:#313e32;outline:none}.in:focus{border-color:#000}" +
    ".send{background:#000;color:#f7f9ed;border:0;border-radius:14px;padding:0 14px;cursor:pointer;font-weight:600}.send:disabled{opacity:.5;cursor:default}" +
    ".foot{font-size:11px;text-align:center;color:#6b756a;padding:0 10px 8px}.foot a{color:#6b756a}" +
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
    ".dd{font-size:12.5px;line-height:1.5;color:#3f4a3f;padding-top:6px;white-space:pre-wrap}" +
    ".dd ul{margin:6px 0 0;padding-left:18px}" +
    ".vb{display:inline-block;margin-top:8px;background:#000;color:#f7f9ed;text-decoration:none;font-size:12.5px;font-weight:600;padding:7px 12px;border-radius:8px}" +
    /* pantallas pequeñas: el panel lateral cubre el chat */
    "@media(max-width:760px){.max-btn{display:none}.panel,.panel.side-open{right:8px;bottom:84px;width:calc(100vw - 16px);height:calc(100vh - 100px)}.panel.side-open .side{width:100%;border-right:0}.panel.side-open .chat{display:none}}" +
    "</style>" +
    '<button class="btn" aria-label="Abrir chat con Chaqui"><svg viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg></button>' +
    '<section class="panel" role="dialog" aria-label="Chat con Chaqui">' +
    '<div class="head"><div><div class="title">Chaqui</div><div class="sub">Asistente de Ahumadores Chaquiro</div></div>' +
    '<div class="hb">' +
    '<button class="ib filt-btn" aria-label="Filtros y productos" title="Filtros y productos"><svg viewBox="0 0 24 24"><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></svg></button>' +
    '<button class="ib max-btn" aria-label="Maximizar" title="Maximizar">⤢</button>' +
    '<button class="ib x" aria-label="Cerrar" title="Cerrar">✕</button></div></div>' +
    '<div class="body">' +
    '<aside class="side" data-tab="f" aria-label="Filtros y productos">' +
    '<div class="tabs"><button class="tab tab-f on" type="button">Filtros</button><button class="tab tab-p" type="button">Productos <span class="cnt"></span></button><button class="tab tab-m" type="button">Ubicación</button><button class="sclose" aria-label="Cerrar panel">✕</button></div>' +
    '<div class="pane-f"><div class="db"><div class="sec">Categoría</div><div class="cats">Cargando…</div>' +
    '<div class="sec" style="margin-top:14px">Precio (COP)</div><div class="pr"><input class="pmin" type="number" min="0" inputmode="numeric" placeholder="Mínimo"><input class="pmax" type="number" min="0" inputmode="numeric" placeholder="Máximo"></div>' +
    '<label class="opt"><input class="avail" type="checkbox"><span>Solo disponibles</span></label></div>' +
    '<div class="df"><button class="clr" type="button">Limpiar</button><button class="go" type="button">Buscar</button></div></div>' +
    '<div class="pane-p"></div>' +
    '<div class="pane-m"></div>' +
    "</aside>" +
    '<div class="chat"><div class="msgs" aria-live="polite"></div><div class="chips"></div>' +
    '<form class="form"><input class="in" maxlength="500" placeholder="Escribe tu pregunta…" autocomplete="off"><button class="send" type="submit">Enviar</button></form>' +
    '<div class="foot">Asistente con IA · puede equivocarse · <a href="' + WA + '" target="_blank" rel="noopener">WhatsApp</a></div></div>' +
    "</div></section>";

  var $ = function (s) { return root.querySelector(s); };
  var btn = $(".btn"), panel = $(".panel"), side = $(".side"), msgs = $(".msgs"), chips = $(".chips"), form = $(".form"), input = $(".in"), send = $(".send");
  var cats = $(".cats"), pmin = $(".pmin"), pmax = $(".pmax"), avail = $(".avail"), paneP = $(".pane-p"), cnt = $(".cnt");
  var tabF = $(".tab-f"), tabP = $(".tab-p"), tabM = $(".tab-m"), paneM = $(".pane-m"), filtBtn = $(".filt-btn");
  var history = [];
  var busy = false;
  var optionsCache = null;

  try { history = JSON.parse(sessionStorage.getItem(HISTORY_KEY) || "[]"); } catch (e) {}
  function save() { try { sessionStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(-20))); } catch (e) {} }

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
  function isSmall() { return window.matchMedia("(max-width:760px)").matches; }

  /* ---------- Panel lateral: pestañas Filtros / Productos ---------- */
  function showTab(name) {
    side.setAttribute("data-tab", name);
    tabF.classList.toggle("on", name === "f");
    tabP.classList.toggle("on", name === "p");
    tabM.classList.toggle("on", name === "m");
  }
  function openSide(name) {
    panel.classList.add("side-open");
    filtBtn.classList.add("on");
    showTab(name);
    if (name === "f") loadFilters();
    if (name === "m") loadMap();
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
    info.appendChild(el("div", "pp", p.precio || ""));
    var stock = typeof p.stock === "number" && p.stock > 0 ? p.stock + " disponibles" : "En stock";
    info.appendChild(p.disponible === false ? el("span", "bd no", "Agotado") : el("span", "bd ok", stock));
    top.appendChild(info);
    card.appendChild(top);
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
      .catch(function () { cats.textContent = "No pude cargar las categorías. Intenta de nuevo."; });
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
    busy = true; send.disabled = true;
    add("user", userText);
    history.push({ role: "user", content: userText }); save();
    var bubble = add("bot", ""); bubble.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
    post({ action: "filter_search", filtros: f })
      .then(function (d) {
        var text = d.total
          ? "Encontré " + d.total + " producto" + (d.total > 1 ? "s" : "") + " con esos filtros" + (d.productos.length < d.total ? " (te muestro los " + d.productos.length + " más económicos)" : "") + ". Los ves en el panel de la izquierda."
          : "No encontré productos con esos filtros, parce. Probá ampliando el precio o cambiando la categoría.";
        bubble.innerHTML = render(text);
        history.push({ role: "assistant", content: text, products: d.productos || [] }); save();
        setProducts(d.productos, true);
        addProductsChip(d.productos);
      })
      .catch(function () { bubble.innerHTML = 'Uy parce, no pude traer los productos. Escríbenos por <a href="' + WA + '" target="_blank" rel="noopener">WhatsApp</a>.'; history.pop(); save(); })
      .then(function () { busy = false; send.disabled = false; msgs.scrollTop = msgs.scrollHeight; });
  }

  /* ---------- Chat ---------- */
  function open() {
    panel.classList.add("open");
    if (!msgs.children.length) {
      add("bot", GREETING);
      var last = null;
      history.forEach(function (m) {
        add(m.role === "user" ? "user" : "bot", m.content);
        if (m.products && m.products.length) { addProductsChip(m.products); last = m.products; }
      });
      if (last) setProducts(last, false);
      if (!history.length) showChips();
    }
    input.focus();
  }
  function showChips() {
    chips.innerHTML = "";
    SUGGESTIONS.forEach(function (s) {
      var c = el("button", "chip", s); c.type = "button";
      c.onclick = function () { s === "Filtrar productos" ? openSide("f") : ask(s); };
      chips.appendChild(c);
    });
  }
  function ask(text) {
    text = (text || "").trim();
    if (!text || busy) return;
    busy = true; send.disabled = true; chips.innerHTML = "";
    add("user", text);
    history.push({ role: "user", content: text }); save();
    var typing = add("bot", ""); typing.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
    post({ messages: history.slice(-10).map(function (m) { return { role: m.role, content: m.content }; }) })
      .then(function (d) {
        typing.innerHTML = render(d.reply);
        history.push({ role: "assistant", content: d.reply, products: d.products || [] }); save();
        if (validProducts(d.products).length) {
          setProducts(d.products, !isSmall()); // en pantallas pequeñas no tapamos el chat: queda el botón
          addProductsChip(d.products);
        }
        (d.widgets || []).forEach(function (w) {
          var tab = w === "filtros" ? "f" : w === "mapa" ? "m" : null;
          if (!tab) return;
          if (!isSmall()) { openSide(tab); return; }
          var b = el("button", "vp", tab === "f" ? "Abrir filtros ▸" : "Ver mapa ▸");
          b.type = "button"; b.onclick = function () { openSide(tab); }; msgs.appendChild(b);
        });
      })
      .catch(function () { typing.innerHTML = 'Uy parce, tuve un problema para responderte. Escríbenos por <a href="' + WA + '" target="_blank" rel="noopener">WhatsApp</a> y te ayudamos.'; history.pop(); save(); })
      .then(function () { busy = false; send.disabled = false; msgs.scrollTop = msgs.scrollHeight; input.focus(); });
  }

  btn.onclick = function () { panel.classList.contains("open") ? panel.classList.remove("open") : open(); };
  $(".x").onclick = function () { panel.classList.remove("open"); };
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
  $(".sclose").onclick = closeSide;
  $(".clr").onclick = clearFilters;
  $(".go").onclick = runFilterSearch;
  form.onsubmit = function (e) { e.preventDefault(); var v = input.value; input.value = ""; ask(v); };
  setProducts([], false);
})();
