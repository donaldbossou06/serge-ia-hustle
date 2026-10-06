/* Serge IA Hustle : comportements partagés (en-tête, apparitions, étagère, cartes) */
(function () {
  var S = window.SERGE || { cats: {}, guides: [], products: [] };
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>';
  var CHEV_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>';
  var CHEV_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function cat(c) { return S.cats[c] || { n: '', col: '#1b1b1d' }; }
  function fgFor(col) { return /f3e600|d99a00/i.test(col) ? '#141400' : '#fff'; }

  // en-tête qui prend une bordure au défilement
  var top = document.querySelector('.top');
  if (top) addEventListener('scroll', function () { top.classList.toggle('sc', scrollY > 8); }, { passive: true });

  // objets affichés sur une étagère
  function guideItem(g) {
    var c = cat(g.c);
    return { href: '/' + g.s + '/', kicker: c.n, col: c.col, title: g.t, spine: g.k, desc: g.d, cta: 'Lire le guide', label: 'Guide gratuit' };
  }
  function productItem(p) {
    return { href: p.u, kicker: p.k, col: '#1b1b1d', title: p.t, spine: p.t, desc: p.d, cta: p.cta || 'Découvrir', img: p.img, label: p.k };
  }

  // palette des tranches : couleur de catégorie, encre, papier, en alternance
  function spineStyle(it, i) {
    if (it.img) return { bg: '#1b1b1d', fg: '#f3e600' };
    var v = i % 3;
    if (v === 0) return { bg: it.col, fg: fgFor(it.col) };
    if (v === 1) return { bg: '#1b1b1d', fg: it.col === '#f3e600' ? '#f3e600' : '#f3eee3' };
    return { bg: '#f3eee3', fg: '#1b1b1d' };
  }

  function shelf(root, items) {
    if (!root || !items.length) return;
    var html = '<div class="shelf"><button class="sh-nav prev" type="button" aria-label="Livre précédent">' + CHEV_L + '</button>' +
      '<div class="sh-track" role="list">';
    items.forEach(function (it, i) {
      var st = spineStyle(it, i);
      var h = it.img ? 300 : 232 + ((i * 37) % 5) * 7, w = 46 + ((i * 13) % 4) * 4;
      var cover = it.img
        ? '<span class="cv img"><img src="' + esc(it.img) + '" alt=""></span>'
        : '<span class="cv" style="background:' + it.col + ';color:' + fgFor(it.col) + '"><span class="ck">' + esc(it.label) + '</span><span class="ct">' + esc(it.title) + '</span><span class="bar"></span><span class="cm">SERGE<span class="d">·</span>IA</span></span>';
      html += '<button class="bk" type="button" role="listitem" data-i="' + i + '" style="--c:' + st.bg + ';--fg:' + st.fg + ';--h:' + h + 'px;--sw:' + w + 'px" aria-label="' + esc(it.title) + '">' +
        '<span class="sp" style="color:' + st.fg + '"><i></i><b>' + esc(it.spine) + '</b><i></i></span>' + cover + '</button>';
    });
    html += '</div><button class="sh-nav next" type="button" aria-label="Livre suivant">' + CHEV_R + '</button><div class="sh-plank"></div></div>' +
      '<p class="sh-hint">' + (items.length > 1 ? 'touche un livre pour l\'ouvrir · glisse · flèches' : 'touche le livre pour l\'ouvrir') + '</p>' +
      '<div class="sh-info" aria-live="polite"></div>';
    root.innerHTML = html;
    if (items.length < 2) root.querySelector('.shelf').classList.add('solo');

    var track = root.querySelector('.sh-track'), books = [].slice.call(root.querySelectorAll('.bk')), info = root.querySelector('.sh-info'), cur = -1;
    function render(i) {
      var it = items[i];
      info.innerHTML = '<span class="ik"><i style="background:' + it.col + '"></i>' + esc(it.kicker) + '</span><h3>' + esc(it.title) + '</h3><p>' + esc(it.desc) + '</p>' +
        '<a class="btn y" href="' + esc(it.href) + '">' + esc(it.cta) + ARROW + '</a>';
    }
    function go(i, focus) {
      i = (i + items.length) % items.length;
      if (i === cur) return;
      if (cur > -1) books[cur].classList.remove('on');
      books[i].classList.add('on'); cur = i;
      info.classList.add('fade');
      setTimeout(function () { render(i); info.classList.remove('fade'); }, 180);
      setTimeout(function () {
        var b = books[i], target = b.offsetLeft + b.offsetWidth / 2 - track.clientWidth / 2;
        track.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
      }, 120);
      if (focus) books[i].focus({ preventScroll: true });
    }
    books.forEach(function (b, i) {
      b.addEventListener('click', function () { if (i === cur) location.href = items[i].href; else go(i); });
    });
    root.querySelector('.prev').addEventListener('click', function () { go(cur - 1); });
    root.querySelector('.next').addEventListener('click', function () { go(cur + 1); });
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1, true); }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1, true); }
    });
    go(0);
  }

  function card(g, isNew) {
    var c = cat(g.c);
    return '<a class="gc" data-c="' + g.c + '" href="/' + g.s + '/">' + (isNew ? '<span class="new">Nouveau</span>' : '') +
      '<span class="cat"><i style="background:' + c.col + '"></i>' + esc(c.n) + '</span><h3>' + esc(g.t) + '</h3><p>' + esc(g.d) + '</p>' +
      '<span class="go">Lire le guide' + ARROW + '</span></a>';
  }

  function library(root) {
    if (!root) return;
    var gs = S.guides, chipsHtml = '<button class="chip on" data-f="all" type="button">Tous <small>' + gs.length + '</small></button>';
    Object.keys(S.cats).forEach(function (k) {
      var n = gs.filter(function (g) { return String(g.c) === k; }).length;
      if (n) chipsHtml += '<button class="chip" data-f="' + k + '" type="button"><i style="background:' + S.cats[k].col + '"></i>' + esc(S.cats[k].n) + ' <small>' + n + '</small></button>';
    });
    root.innerHTML = '<div class="filters"><label class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>' +
      '<input type="search" placeholder="Cherche un outil ou un besoin (ex. tokens, site, voix)" autocomplete="off" aria-label="Rechercher un guide"></label><div class="chips">' + chipsHtml + '</div></div>' +
      '<div class="cards">' + gs.map(function (g, i) { return card(g, i < 4); }).join('') + '</div>' +
      '<p class="empty">Aucun guide pour cette recherche. Essaie un autre mot, ou demande-le dans la communauté.</p>';
    var q = root.querySelector('input'), chips = [].slice.call(root.querySelectorAll('.chip')), cards = [].slice.call(root.querySelectorAll('.gc')), empty = root.querySelector('.empty'), f = 'all';
    function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
    cards.forEach(function (c) { c._t = norm(c.textContent + ' ' + c.getAttribute('href')); });
    function apply() {
      var t = norm(q.value.trim()), n = 0;
      cards.forEach(function (c) { var ok = (f === 'all' || c.dataset.c === f) && (!t || c._t.indexOf(t) > -1); c.style.display = ok ? '' : 'none'; if (ok) n++; });
      empty.style.display = n ? 'none' : 'block';
    }
    chips.forEach(function (ch) { ch.addEventListener('click', function () { chips.forEach(function (x) { x.classList.remove('on'); }); ch.classList.add('on'); f = ch.dataset.f; apply(); }); });
    q.addEventListener('input', apply);
  }

  // branchements selon la page
  [].slice.call(document.querySelectorAll('[data-shelf]')).forEach(function (el) {
    var kind = el.getAttribute('data-shelf'), n = +el.getAttribute('data-n') || 999;
    var items = kind === 'products' ? S.products.map(productItem) : S.guides.slice(0, n).map(guideItem);
    shelf(el, items);
  });
  library(document.querySelector('[data-library]'));
  [].slice.call(document.querySelectorAll('[data-count]')).forEach(function (el) {
    el.textContent = (el.getAttribute('data-count') === 'products' ? S.products : S.guides).length;
  });

  // apparitions au défilement
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    [].slice.call(document.querySelectorAll('.rv')).forEach(function (el) { io.observe(el); });
  } else {
    [].slice.call(document.querySelectorAll('.rv')).forEach(function (el) { el.classList.add('in'); });
  }
})();
