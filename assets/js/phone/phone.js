function t_ready(e) { "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e) } function t_siblings(e, t) { return e.parentNode ? Array.prototype.filter.call(e.parentNode.children, function (e) { return e.classList.contains(t) }) : [] } function t_remove(e) { e && e.parentNode && e.parentNode.removeChild(e) } function t_form_phonemask__initPhoneMask() { var e = document.querySelectorAll(".js-phonemask-input"); Array.prototype.forEach.call(e, t_form_phonemask_load) } function t_form_phonemask_load_one(e) { e = document.querySelectorAll("#rec" + e + " .js-phonemask-input"); Array.prototype.forEach.call(e, t_form_phonemask_load) } function t_form_phonemask_load(e) { var t, n, a; e instanceof Element || (e = e[0]), e && void 0 !== e.getAttribute && (t = e.getAttribute("data-phonemask-id"), n = e.getAttribute("data-phonemask-lid"), a = e.getAttribute("data-phonemask-maskcountry") || "", e.setAttribute("data-phonemask-init", "yes"), t_form_phonemask_init(t, n, a)) } function t_form_phonemask_init(t, n, a) { var p; a && "undefined" !== a ? t_form_phonemask_initPhoneMaskForm(t, n, a) : window.geoCountry ? t_form_phonemask_initPhoneMaskForm(t, n, window.geoCountry) : window.geoCountryRequested ? document.addEventListener("geoCountryLoaded", function () { t_form_phonemask_initPhoneMaskForm(t, n, window.geoCountry) }) : ((p = new XMLHttpRequest).open("GET", "https://geo.tildacdn.com/geo/country/", !0), p.onreadystatechange = function () { var e; 4 === p.readyState && (200 <= p.status && p.status < 400 ? (a = p.responseText, window.geoCountry = a, (e = document.createEvent("Event")).initEvent("geoCountryLoaded", !0, !1), document.dispatchEvent(e), t_form_phonemask_initPhoneMaskForm(t, n, a)) : t_form_phonemask_initPhoneMaskForm(t, n, "")) }, p.send(), window.geoCountryRequested = !0) } function t_form_phonemask_initPhoneMaskForm(e, t, n) { var a = document.querySelector("#rec" + e); if (a) { var p = a.querySelector('[data-input-lid="' + t + '"]'); if (!(p = p || (window.tildamode && "zero" === window.tildamode ? (p = a.querySelector('.tn-artboard [data-input-lid="' + t + '"]')) || a.querySelector(".tn-artboard") : (p = document.querySelector('[data-input-lid="' + t + '"]')) || document.body)).getAttribute("data-init-mask")) { t_form_phonemask__replaceInput(p), document.getElementById("phone-mask-style") || t_form_phonemask__addStyle(); var o = p.querySelector(".t-input-phonemask"); if (o) { "string" == typeof n && n || (n = ""), 0 < n.length && (n = n.toLowerCase()), 2 < n.length && (n = ""); var i, r = t_form_phonemask__getCountriesList(); r[n] ? i = r[n] : (i = { n: "Russian Federation (Российская Федерация)", c: "+7", m: "+7(999) 999-99-99" }, n = "ru"), o.setAttribute("id", "input_" + t), o.setAttribute("data-phonemask-iso", n), o.setAttribute("data-phonemask-code", 0 < n.length ? i.c : ""), o.setAttribute("data-phonemask-mask", 0 < n.length ? i.m : ""), t_form_phonemask__calcMaxlength(o); var s = p.querySelector(".t-input-phonemask__select-flag"), m = p.querySelector(".t-input-phonemask__select-code"), e = o.getAttribute("data-phonemask-mask"), t = o.getAttribute("data-phonemask-code"); if (0 < n.length) { try { localStorage.setItem("iso_code", n) } catch (e) { console.error("Your web browser does not support storing a ISO Phone Code data locally.") } s.setAttribute("data-phonemask-flag", n), m.innerHTML = i.c, e && o.setAttribute("placeholder", e.substr(t.length).replace(/^-+/, "")), t_form_phonemask__changeMinLength(o.getAttribute("placeholder"), t, p) } t_form_phonemask__addCurrentStyle(p), p.querySelector(".t-input-phonemask__options-wrap").innerHTML = t_form_phonemask__getDrawSelector(r), t_form_phonemask__initSelectEvents(a, p, r), p.setAttribute("data-init-mask", "yes") } } } } function t_form_phonemask__replaceInput(e) { var t, n, a, p, o, i = e.querySelector(".js-phonemask-input"); i && (t = i.getAttribute("name"), n = i.getAttribute("data-tilda-req") ? 'data-tilda-req="1"' : "", a = !!i.classList.contains("t-input_bbonly"), p = i.getAttribute("style"), o = i.value, i.outerHTML = '<div class="t-input t-input-phonemask__wrap" style="' + p + '"><div class="t-input-phonemask__select"><span class="t-input-phonemask__select-flag" data-phonemask-flag=""></span><span class="t-input-phonemask__select-triangle"></span><span class="t-input-phonemask__select-code"></span></div><div class="t-input-phonemask__options-wrap" data-nosnippet></div><input type="hidden" class="js-phonemask-result-iso" name="tildaspec-phone-part[]-iso" value="" tabindex="-1"><input type="tel" class="t-input t-input-phonemask" name="tildaspec-phone-part[]" value="' + o + '" placeholder=""><input type="hidden" class="js-phonemask-result js-tilda-rule" data-tilda-rule="phone" name="' + t + '" value="' + o + '" ' + n + ' tabindex="-1">        </div>', e = e.querySelector(".t-input-phonemask__wrap"), a && e.classList.add("t-input_bbonly"), 0 !== (e = t_siblings(e, "t-input__vis-ph")).length && Array.prototype.forEach.call(e, function (e) { t_remove(e) })) } function t_form_phonemask__calcMaxlength(e) { var t = e.getAttribute("data-phonemask-mask").substr(e.getAttribute("data-phonemask-code").length); "-" === t.charAt(0) && (t = t.substring(1)), e.setAttribute("maxlength", t.length), e.setAttribute("data-phonemask-without-code", t) } function t_form_phonemask__addCurrentStyle(e) { var t = e.querySelector(".t-input-phonemask__wrap"), n = e.querySelector(".t-input-phonemask"), a = e.querySelector(".t-input-block"), p = e.querySelector(".t-input-phonemask__select-code"), o = t.style.color, i = t.style.fontSize, e = t.style.fontWeight, t = t.style.fontFamily; a.style.overflow = "visible", "rgb(0, 0, 0)" !== o && (n.style.color = o), n.style.fontSize = i, n.style.fontWeight = e, n.style.fontFamily = t, p.style.fontSize = i, p.style.fontWeight = e } function t_form_phonemask__getDrawSelector(e) { var t, n = ""; for (t in n += "<noindex>", e) n += '<div class="t-input-phonemask__options-item" id="t-phonemask_' + t + '" data-phonemask-name="' + e[t].n + '" data-phonemask-mask="' + e[t].m + '" data-phonemask-country-code="' + t + '" data-phonemask-code="' + e[t].c + '">', n += '<div class="t-input-phonemask__options-name">' + e[t].n + "</div>", n += '<div class="t-input-phonemask__options-right">', n += '<span class="t-input-phonemask__options-code">' + e[t].c + "</span>", n += '<span class="t-input-phonemask__options-flag t-input-phonemask__options-flag_' + t + '"></span>', n += "</div>", n += "</div>"; return n += "</noindex>" } function t_form_phonemask__initSelectEvents(a, p, i) { var o = a.querySelectorAll(".t-cover, .t396__artboard"), n = p.querySelector(".t-input-phonemask"), e = p.querySelector(".t-input-phonemask__select"), r = p.querySelector(".t-input-phonemask__options-wrap"), t = p.querySelectorAll(".t-input-phonemask__options-item"), s = "", m = ""; function c() { var e = document.querySelector(".t-input-phonemask__options-wrap_open"); e && e.classList.remove("t-input-phonemask__options-wrap_open") } function l() { var e = this, t = e.value; "(" !== t && t || (e.value = "", p.querySelector(".js-phonemask-result").value = "", p.querySelector(".js-phonemask-result-iso").value = ""), e.setAttribute("data-phonemask-current", t), t_form_phonemask__addNumberMask(t_form_phonemask__copypasteHandling(e, e.getAttribute("data-phonemask-without-code")), e), t_form_phonemask__changeVal(p, n), "+7" === e.getAttribute("data-phonemask-code") && 1 === e.value.indexOf("89") && (e.value = e.value.replace("89", "9")) } function x() { t_form_phonemask__chooseCountry(p, this), t_form_phonemask__calcMaxlength(n), c() } function u(e) { var t = e.target.closest(".t-input-phonemask__options-wrap"), e = e.target.closest(".t-input-phonemask__select"); t || e || c() } function d(e) { var t = document.querySelector(".t-input-phonemask__options-wrap_open"); if (t) { var n = /[-[\]/{}()*+?.\\^$|]/g, a = t.querySelector(".t-input-phonemask__options-item_chosen"), p = []; if (a && a.classList.remove("t-input-phonemask__options-item_chosen"), 48 <= e.keyCode && e.keyCode <= 57 || 96 <= e.keyCode && e.keyCode <= 105) { for (var o in s = (s += e.key).replace(n, "\\$&"), i) t_form_phonemask__searchCountry(t, s, p, o, i[o].c); t_form_phonemask__scrollToCountry(t, p) } else if (65 <= e.keyCode && e.keyCode <= 90 || 32 == e.keyCode) { for (var o in s = (s += e.key).replace(n, "\\$&"), i) t_form_phonemask__searchCountry(t, "^" + s, p, o, i[o].n); t_form_phonemask__scrollToCountry(t, p) } clearTimeout(m), m = setTimeout(function () { s = "" }, 1500) } } t_form_phonemask__changeVal(p, n), e.addEventListener("click", function () { var e, t, n; r.classList.contains("t-input-phonemask__options-wrap_open") ? c() : (c(), r.classList.add("t-input-phonemask__options-wrap_open")), 1 === o.length && (e = o[0].getBoundingClientRect().height, t = (n = p.getBoundingClientRect()).y - a.getBoundingClientRect().y, n = n.height, e < t + r.getBoundingClientRect().height + n ? (r.style.top = "auto", r.style.bottom = "100%") : (r.style.bottom = "auto", r.style.top = "100%")) }), n.addEventListener("paste", function (e) { var t, n = (e.clipboardData || window.clipboardData).getData("text"); n && (n = n.replace(/[^0-9+]/g, ""), (t = e.target) && (t.value = n, l.call(t), e.preventDefault())) }), n.addEventListener("input", l), Array.prototype.forEach.call(t, function (e) { e.addEventListener("click", x) }), document.addEventListener("mouseup", u), document.addEventListener("keyup", d), document.querySelector('[data-init-mask="yes"]') || (document.addEventListener("mouseup", u), document.addEventListener("keyup", d)) } function t_form_phonemask__copypasteHandling(e, t) { var n = e.value, a = n.match(/[0-9]/g) ? n.match(/[0-9]/g) : n; return "object" == typeof a && a.length > t.match(/[0-9]/g).join("").length && (n = a.splice(e.getAttribute("data-phonemask-code").match(/[0-9]/g).length).join("")), n } function t_form_phonemask__addNumberMask(e, t) { var n = t.getAttribute("data-phonemask-code"), n = t.getAttribute("data-phonemask-mask").substr(n.length), e = e.match(/\d+/g), a = (e = e ? e.join("") : "").split(""), p = n.match(/(\+|\d+|[\s()-]|9+)/g), o = ""; if (p) { for (var i = 0; i < p.length; i++)"9" === p[i][0] ? (o += a.slice(0, p[i].length).join(""), a.splice(0, p[i].length)) : o += p[i]; o = (o = o.replace(/[\s()-]+$/, "")).replace(/^-+/, ""), t.value = o } } function t_form_phonemask__changeVal(e, t) { t.value && (e.querySelector(".js-phonemask-result").value = t.getAttribute("data-phonemask-code") + " " + t.value, e.querySelector(".js-phonemask-result-iso").value = t.getAttribute("data-phonemask-code")) } function t_form_phonemask__chooseCountry(e, t) { var n = e.querySelector(".t-input-phonemask"), a = e.querySelector(".t-input-phonemask__select-code"), p = e.querySelector(".t-input-phonemask__select-flag"), o = t.getAttribute("data-phonemask-code"), i = t.getAttribute("data-phonemask-mask"), r = t.getAttribute("data-phonemask-country-code"), t = n.getAttribute("data-phonemask-current"); n.setAttribute("data-phonemask-iso", r), n.setAttribute("data-phonemask-code", o), n.setAttribute("data-phonemask-mask", i); i = i.substr(o.length).replace(/^-+/, ""); n.setAttribute("placeholder", i), a.innerHTML = o, p.setAttribute("data-phonemask-flag", r); try { localStorage.setItem("iso_code", r) } catch (e) { console.error("Your web browser does not support storing a ISO Phone Code data locally.") } n.focus(), t && t_form_phonemask__addNumberMask(t, n), t_form_phonemask__changeVal(e, n), t_form_phonemask__changeMinLength(i, o, e) } function t_form_phonemask__searchCountry(e, t, n, a, p) { t = new RegExp(t, "i"); -1 !== p.search(t) && (n.push(e.querySelector("#t-phonemask_" + a)), n[0].classList.add("t-input-phonemask__options-item_chosen")) } function t_form_phonemask__scrollToCountry(e, t) { var n, a; 0 !== t.length && (n = Array.prototype.sort.call(t, function (e, t) { return e.dataset.phonemaskCode.length - t.dataset.phonemaskCode.length })[0].getBoundingClientRect().top, a = e.getBoundingClientRect().top, t = document.body.scrollTop + e.scrollTop, e.scrollTop = n - a + t) } function t_form_phonemask__changeMinLength(e, t, n) { var a, p, o = 1; e && t && (p = n.querySelector(".t-input-phonemask"), a = n.querySelector(".js-phonemask-result"), p = p.getAttribute("data-phonemask-code"), o = t.length + 1 + e.length - ({ "+49": 1, "+372": 1, "+355": 1, "+213": 1, "+975": 1, "+267": 1, "+359": 1, "+53": 1, "+36": 1, "+961": 1, "+54": 1, "+82": 1, "+880": 1, "+970": 1, "+385": 1, "+43": 1, "+357": 1, "+61": 1, "+507": 1, "+55": 1, "+90": 1, "+33": 1, "+593": 1, "+383": 1, "+39": 1, "+971": 1, "+86": 1, "+977": 1, "+230": 1, "+63": 1, "+972": 2, "+234": 2, "+62": 3, "+44": 4, "+358": 4, "+60": 2 }[p] || 0)), a.setAttribute("data-tilda-rule-minlength", o) } function t_form_phonemask__addStyle() { var t = '.t-input-group.js-error-control-box .t-input-phonemask{border:0!important}.t-input_pvis.t-input-phonemask__wrap{padding-top:0;padding-bottom:0}.t-input-phonemask__wrap{position:relative;display:-ms-flexbox;display:-webkit-box;display:flex}.t-input-phonemask{height:auto;padding:0;background-color:transparent}.t-input-phonemask__options-wrap{display:none;position:absolute;top:calc(100% + 5px);left:0;z-index:10;min-width:410px;max-height:200px;padding-top:5px;padding-bottom:5px;background-color:#fff;border:1px solid #eee;border-radius:7px;-webkit-box-shadow:0 0 1px rgba(0,0,0,.1);box-shadow:0 0 1px rgba(0,0,0,.1);overflow-y:scroll}.t-input-phonemask__options-wrap.t-input-phonemask__options-wrap_open{display:block}.t-input-phonemask__options-item{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-pack:end;-webkit-box-pack:justify;justify-content:space-between;-ms-flex-align:center;-webkit-box-align:center;align-items:center;padding:8px 10px;font-family:sans-serif;font-size:14px;color:#000!important;cursor:pointer}.t-input-phonemask__options-right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.t-input-phonemask__options-item.t-input-phonemask__options-item_chosen,.t-input-phonemask__options-item:hover{background-color:#eee}.t-input-phonemask__select{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0;margin-right:5px;margin-left:0;font-size:16px;cursor:pointer}.t-input-phonemask__select-triangle{position:relative;margin-left:6px;border-style:solid;border-width:5px 4px 0;border-color:#9a9a9a transparent transparent}.t-input-phonemask__select-code{white-space:nowrap}.t-input-phonemask__options-code,.t-input-phonemask__select-code{margin-left:10px}.t-input-phonemask__options-flag,.t-input-phonemask__select-flag{width:18px;min-width:18px;height:13px;background-color:#c5c5c5;-webkit-box-shadow:0 0 5px rgba(0,0,0,.3);box-shadow:0 0 5px rgba(0,0,0,.3)}.t-input-phonemask__options-flag{margin-left:8px}.t-input-phonemask__options-wrap::-webkit-scrollbar{width:8px;height:15px}.t-input-phonemask__options-wrap::-webkit-scrollbar-thumb{border-radius:7px;background:#c2c9d2}@media screen and (max-width:640px){.t-input-phonemask__options-wrap{min-width:auto}}.t-input-phonemask__options-flag,.t-input-phonemask__select-flag{background-image:url(https://static.tildacdn.com/lib/flags/flags5.png);background-repeat:no-repeat;display:inline-block}.t-input-phonemask__options-flag_np,.t-input-phonemask__select-flag[data-phonemask-flag="np"]{width:16px;min-width:16px}', n = { ad: "-5px -5px", ae: "-33px -5px", af: "-61px -5px", ag: "-89px -5px", al: "-117px -5px", am: "-145px -5px", ao: "-173px -5px", ar: "-201px -5px", at: "-229px -5px", au: "-257px -5px", az: "-285px -5px", ba: "-313px -5px", bb: "-5px -28px", bd: "-33px -28px", be: "-61px -28px", bf: "-89px -28px", bg: "-117px -28px", bh: "-145px -28px", bi: "-173px -28px", bj: "-201px -28px", bm: "-229px -28px", bn: "-257px -28px", bo: "-285px -28px", br: "-313px -28px", bs: "-5px -51px", bt: "-33px -51px", bw: "-61px -51px", by: "-89px -51px", bz: "-117px -51px", ca: "-145px -51px", cd: "-173px -51px", cf: "-201px -51px", cg: "-229px -51px", ch: "-257px -51px", ci: "-285px -51px", ck: "-313px -51px", cl: "-5px -74px", cm: "-33px -74px", cn: "-61px -74px", co: "-89px -74px", cr: "-117px -74px", cu: "-145px -74px", cv: "-173px -74px", cy: "-201px -74px", cz: "-229px -74px", de: "-257px -74px", dj: "-285px -74px", dk: "-313px -74px", dm: "-5px -97px", do: "-33px -97px", dz: "-61px -97px", ec: "-89px -97px", ee: "-117px -97px", eg: "-145px -97px", eh: "-173px -97px", er: "-201px -97px", es: "-229px -97px", et: "-257px -97px", fi: "-285px -97px", fj: "-313px -97px", fm: "-5px -120px", fr: "-33px -120px", ga: "-61px -120px", gb: "-89px -120px", gd: "-117px -120px", ge: "-145px -120px", gh: "-173px -120px", gm: "-201px -120px", gn: "-229px -120px", gq: "-257px -120px", gr: "-285px -120px", gt: "-313px -120px", gw: "-5px -143px", gy: "-33px -143px", hk: "-61px -143px", hn: "-89px -143px", hr: "-117px -143px", ht: "-145px -143px", hu: "-173px -143px", id: "-201px -143px", ie: "-229px -143px", il: "-257px -143px", in: "-285px -143px", iq: "-313px -143px", ir: "-5px -166px", is: "-33px -166px", it: "-61px -166px", jm: "-89px -166px", jo: "-117px -166px", jp: "-145px -166px", ke: "-173px -166px", kg: "-201px -166px", kh: "-229px -166px", ki: "-257px -166px", km: "-285px -166px", kn: "-313px -166px", kp: "-5px -189px", kr: "-33px -189px", ks: "-61px -189px", kw: "-89px -189px", kz: "-117px -189px", la: "-145px -189px", lb: "-173px -189px", lc: "-201px -189px", li: "-229px -189px", lk: "-257px -189px", lr: "-285px -189px", ls: "-313px -189px", lt: "-5px -212px", lu: "-33px -212px", lv: "-61px -212px", ly: "-89px -212px", ma: "-117px -212px", mc: "-145px -212px", md: "-173px -212px", me: "-201px -212px", mg: "-229px -212px", mh: "-257px -212px", mk: "-285px -212px", ml: "-313px -212px", mm: "-5px -235px", mn: "-33px -235px", mo: "-61px -235px", mr: "-89px -235px", mt: "-117px -235px", mu: "-145px -235px", mv: "-173px -235px", mw: "-201px -235px", mb: "-229px -235px", mx: "-229px -235px", my: "-257px -235px", mz: "-285px -235px", na: "-313px -235px", ne: "-5px -258px", ng: "-33px -258px", ni: "-61px -258px", nl: "-89px -258px", no: "-117px -258px", np: "-341px -5px", nr: "-145px -258px", nu: "-173px -258px", nz: "-201px -258px", om: "-229px -258px", pa: "-257px -258px", pe: "-285px -258px", pg: "-313px -258px", ph: "-5px -281px", pk: "-33px -281px", pl: "-61px -281px", ps: "-89px -281px", pt: "-117px -281px", pw: "-145px -281px", py: "-173px -281px", qa: "-201px -281px", ro: "-229px -281px", rs: "-257px -281px", ru: "-285px -281px", rw: "-313px -281px", sa: "-5px -304px", sb: "-33px -304px", sc: "-61px -304px", sd: "-89px -304px", se: "-117px -304px", sg: "-145px -304px", si: "-173px -304px", sk: "-201px -304px", sl: "-229px -304px", sm: "-257px -304px", sn: "-285px -304px", so: "-313px -304px", sr: "-5px -327px", ss: "-33px -327px", st: "-61px -327px", sv: "-89px -327px", sy: "-117px -327px", sz: "-145px -327px", td: "-173px -327px", tg: "-201px -327px", th: "-229px -327px", tj: "-257px -327px", tl: "-285px -327px", tm: "-313px -327px", tn: "-367px -5px", to: "-341px -28px", tr: "-341px -51px", tt: "-341px -74px", tv: "-341px -97px", tw: "-341px -120px", tz: "-341px -143px", ua: "-341px -166px", ug: "-341px -189px", us: "-341px -212px", uy: "-341px -235px", uz: "-341px -258px", va: "-341px -281px", vc: "-341px -304px", ve: "-341px -327px", vn: "-5px -350px", vu: "-33px -350px", ws: "-61px -350px", xk: "-89px -350px", ye: "-117px -350px", za: "-145px -350px", zm: "-173px -350px", zw: "-201px -350px" }; Object.keys(n).forEach(function (e) { t += ".t-input-phonemask__options-flag_" + e + ",.t-input-phonemask__select-flag[data-phonemask-flag=" + e + "] {background-position:" + n[e] + "}" }); var e = document.createElement("style"); e.id = "phone-mask-style", e.innerHTML = t, document.head.appendChild(e) } function t_form_phonemask__getCountriesList() { return { af: { n: "Afghanistan (افغانستان)", c: "+93", m: "+93-99-999-9999" }, al: { n: "Albania (Shqipëri)", c: "+355", m: "+355(999) 999-999" }, dz: { n: "Algeria (الجزائر)", c: "+213", m: "+213-99-999-9999" }, ad: { n: "Andorra", c: "+376", m: "+376-999-999" }, ao: { n: "Angola", c: "+244", m: "+244(999) 999-999" }, am: { n: "Armenia (Հայաստան)", c: "+374", m: "+374-99-999-999" }, ag: { n: "Antigua and Barbuda", c: "+1 (268)", m: "+1 (268)999-9999" }, ar: { n: "Argentina", c: "+54", m: "+54(999) 9999-9999" }, au: { n: "Australia", c: "+61", m: "+61-99-9999-9999" }, at: { n: "Austria (Österreich)", c: "+43", m: "+43(999) 999-99999" }, az: { n: "Azerbaijan (Azərbaycan)", c: "+994", m: "+994-99-999-99-99" }, bs: { n: "Bahamas", c: "+1 (242)", m: "+1 (242)999-9999" }, bh: { n: "Bahrain (البحرين)", c: "+973", m: "+973-9999-9999" }, bd: { n: "Bangladesh (বাংলাদেশ)", c: "+880", m: "+880-9999-999999" }, bb: { n: "Barbados", c: "+1 (246)", m: "+1 (246)999-9999" }, by: { n: "Belarus (Беларусь)", c: "+375", m: "+375(99) 999-99-99" }, be: { n: "Belgium (België)", c: "+32", m: "+32(999) 999-999" }, bz: { n: "Belize", c: "+501", m: "+501-999-9999" }, bj: { n: "Benin (Bénin)", c: "+229", m: "+229-99-99-9999" }, bt: { n: "Bhutan (འབྲུག)", c: "+975", m: "+975-9-999-9999" }, bo: { n: "Bolivia", c: "+591", m: "+591-9-999-9999" }, ba: { n: "Bosnia and Herzegovina", c: "+387", m: "+387-99-999-999" }, bw: { n: "Botswana", c: "+267", m: "+267-99-999-999" }, br: { n: "Brazil (Brasil)", c: "+55", m: "+55(99) 99999-9999" }, bn: { n: "Brunei", c: "+673", m: "+673-999-9999" }, bg: { n: "Bulgaria (България)", c: "+359", m: "+359(999) 999-999" }, bf: { n: "Burkina Faso", c: "+226", m: "+226-99-99-9999" }, bi: { n: "Burundi (Uburundi)", c: "+257", m: "+257-99-99-9999" }, kh: { n: "Cambodia (កម្ពុជា)", c: "+855", m: "+855-99-999-999" }, cm: { n: "Cameroon (Cameroun)", c: "+237", m: "+237-9-99-99-99-99" }, ca: { n: "Canada", c: "+1", m: "+1(999) 999-9999" }, cv: { n: "Cape Verde (Kabu Verdi)", c: "+238", m: "+238(999) 99-99" }, cf: { n: "Central African Republic (République centrafricaine)", c: "+236", m: "+236-99-99-9999" }, td: { n: "Chad (Tchad)", c: "+235", m: "+235-99-99-99-99" }, cl: { n: "Chile", c: "+56", m: "+56-9-9999-9999" }, cn: { n: "China (中国)", c: "+86", m: "+86(999) 9999-9999" }, co: { n: "Colombia", c: "+57", m: "+57(999) 999-9999" }, km: { n: "Comoros (جزر القمر)", c: "+269", m: "+269-99-99999" }, cd: { n: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", c: "+243", m: "+243(999) 999-999" }, cg: { n: "Congo (Republic) (Congo-Brazzaville)", c: "+242", m: "+242-99-999-9999" }, ck: { n: "Cook Islands", c: "+682", m: "+682-99-999" }, cr: { n: "Costa Rica", c: "+506", m: "+506-9999-9999" }, ci: { n: "Cote d’Ivoire", c: "+225", m: "+225-99-999-999" }, hr: { n: "Croatia (Hrvatska)", c: "+385", m: "+385-99-999-9999" }, cu: { n: "Cuba", c: "+53", m: "+53-9-999-9999" }, cy: { n: "Cyprus (Κύπρος)", c: "+357", m: "+357-99-999-999" }, cz: { n: "Czech Republic (Česká republika)", c: "+420", m: "+420(999) 999-999" }, dk: { n: "Denmark (Danmark)", c: "+45", m: "+45-99-99-99-99" }, dj: { n: "Djibouti", c: "+253", m: "+253-99-99-99-99" }, dm: { n: "Dominica", c: "+1 (767)", m: "+1 (767)999-9999" }, do: { n: "Dominican Republic (República Dominicana)", c: "+1", m: "+1(999) 999-9999" }, ec: { n: "Ecuador", c: "+593", m: "+593-99-999-9999" }, eg: { n: "Egypt (مصر)", c: "+20", m: "+20(999) 999-9999" }, sv: { n: "El Salvador", c: "+503", m: "+503-99-99-9999" }, gq: { n: "Equatorial Guinea (Guinea Ecuatorial)", c: "+240", m: "+240-99-999-9999" }, er: { n: "Eritrea", c: "+291", m: "+291-9-999-999" }, ee: { n: "Estonia (Eesti)", c: "+372", m: "+372-9999-9999" }, et: { n: "Ethiopia", c: "+251", m: "+251-99-999-9999" }, fj: { n: "Fiji", c: "+679", m: "+679-999-9999" }, fi: { n: "Finland (Suomi)", c: "+358", m: "+358-999-9999999" }, fr: { n: "France", c: "+33", m: "+33(999) 999-9999" }, ga: { n: "Gabon", c: "+241", m: "+241-9-99-99-99" }, gm: { n: "Gambia", c: "+220", m: "+220(999) 99-99" }, ge: { n: "Georgia (საქართველო)", c: "+995", m: "+995(999) 999-999" }, de: { n: "Germany (Deutschland)", c: "+49", m: "+49(999) 999-99999" }, gh: { n: "Ghana (Gaana)", c: "+233", m: "+233(999) 999-999" }, gr: { n: "Greece (Ελλάδα)", c: "+30", m: "+30(999) 999-9999" }, gd: { n: "Grenada", c: "+1 (473)", m: "+1 (473)999-9999" }, gt: { n: "Guatemala", c: "+502", m: "+502-9-999-9999" }, gn: { n: "Guinea (Guinée)", c: "+224", m: "+224-999-99-99-99" }, gw: { n: "Guinea-Bissau (Guiné Bissau)", c: "+245", m: "+245-9-999999" }, gy: { n: "Guyana", c: "+592", m: "+592-999-9999" }, ht: { n: "Haiti", c: "+509", m: "+509-99-99-9999" }, hn: { n: "Honduras", c: "+504", m: "+504-9999-9999" }, hk: { n: "Hong Kong (香港)", c: "+852", m: "+852-9999-9999" }, hu: { n: "Hungary (Magyarország)", c: "+36", m: "+36(999) 999-999" }, is: { n: "Iceland (Ísland)", c: "+354", m: "+354-999-9999" }, in: { n: "India (भारत)", c: "+91", m: "+91(9999) 999-999" }, id: { n: "Indonesia", c: "+62", m: "+62(999) 999-99-9999" }, ir: { n: "Iran (ایران)", c: "+98", m: "+98(999) 999-9999" }, iq: { n: "Iraq (العراق)", c: "+964", m: "+964(999) 999-9999" }, ie: { n: "Ireland", c: "+353", m: "+353(999) 999-999" }, il: { n: "Israel (ישראל)", c: "+972", m: "+972-999-999-9999" }, it: { n: "Italy (Italia)", c: "+39", m: "+39(999) 9999-999" }, jm: { n: "Jamaica", c: "+1", m: "+1(999) 999-9999" }, jp: { n: "Japan (日本)", c: "+81", m: "+81-99-9999-9999" }, jo: { n: "Jordan (الأردن)", c: "+962", m: "+962-9-9999-9999" }, kz: { n: "Kazakhstan (Казахстан)", c: "+7", m: "+7(999) 999-99-99" }, ke: { n: "Kenya", c: "+254", m: "+254-999-999999" }, ki: { n: "Kiribati", c: "+686", m: "+686-99-999" }, xk: { n: "Kosovo (Republic)", c: "+383", m: "+383-99-999-999" }, kw: { n: "Kuwait (الكويت)", c: "+965", m: "+965-9999-9999" }, kg: { n: "Kyrgyzstan (Кыргызстан)", c: "+996", m: "+996(999) 999-999" }, la: { n: "Laos (ລາວ)", c: "+856", m: "+856-99-999-999" }, lv: { n: "Latvia (Latvija)", c: "+371", m: "+371-99-999-999" }, lb: { n: "Lebanon (لبنان)", c: "+961", m: "+961-99-999-999" }, ls: { n: "Lesotho", c: "+266", m: "+266-9-999-9999" }, lr: { n: "Liberia", c: "+231", m: "+231-99-999-9999" }, ly: { n: "Libya (ليبيا)", c: "+218", m: "+218-99-999-999" }, li: { n: "Liechtenstein", c: "+423", m: "+423-999-99-99" }, lt: { n: "Lithuania (Lietuva)", c: "+370", m: "+370(999) 99-999" }, lu: { n: "Luxembourg", c: "+352", m: "+352(999) 999-999" }, mo: { n: "Macao", c: "+853", m: "+853-9999-9999" }, mk: { n: "Macedonia (FYROM) (Македонија)", c: "+389", m: "+389-99-999-999" }, mg: { n: "Madagascar (Madagasikara)", c: "+261", m: "+261-99-99-99999" }, mw: { n: "Malawi", c: "+265", m: "+265-9-9999-9999" }, my: { n: "Malaysia", c: "+60", m: "+60-99-9999-9999" }, mv: { n: "Maldives", c: "+960", m: "+960-999-9999" }, ml: { n: "Mali", c: "+223", m: "+223-99-99-9999" }, mt: { n: "Malta", c: "+356", m: "+356-9999-9999" }, mh: { n: "Marshall Islands", c: "+692", m: "+692-999-9999" }, mr: { n: "Mauritania (موريتانيا)", c: "+222", m: "+222-99-99-9999" }, mu: { n: "Mauritius (Moris)", c: "+230", m: "+230-999-99999" }, mx: { n: "Mexico (México)", c: "+52", m: "+52(999) 999-9999" }, mb: { n: "Mexico (México)", c: "+521", m: "+521(999) 999-9999" }, fm: { n: "Micronesia", c: "+691", m: "+691-999-9999" }, md: { n: "Moldova (Republica Moldova)", c: "+373", m: "+373-9999-9999" }, mc: { n: "Monaco", c: "+377", m: "+377-99-999-999" }, mn: { n: "Mongolia (Монгол)", c: "+976", m: "+976-99-99-9999" }, me: { n: "Montenegro (Crna Gora)", c: "+382", m: "+382-99-999-999" }, ma: { n: "Morocco (المغرب)", c: "+212", m: "+212-99-9999-999" }, mz: { n: "Mozambique (Moçambique)", c: "+258", m: "+258-99-999-999" }, mm: { n: "Myanmar (Burma) (မြန်မာ)", c: "+95", m: "+95-99-999-999" }, na: { n: "Namibia (Namibië)", c: "+264", m: "+264-99-999-9999" }, nr: { n: "Nauru", c: "+674", m: "+674-999-9999" }, np: { n: "Nepal (नेपाल)", c: "+977", m: "+977-999-999-9999" }, nl: { n: "Netherlands (Nederland)", c: "+31", m: "+31-99-999-9999" }, nz: { n: "New Zealand", c: "+64", m: "+64(999) 999-999" }, ni: { n: "Nicaragua", c: "+505", m: "+505-9999-9999" }, ne: { n: "Niger (Nijar)", c: "+227", m: "+227-99-99-9999" }, ng: { n: "Nigeria", c: "+234", m: "+234-999-999-9999" }, nu: { n: "Niue", c: "+683", m: "+683-9999" }, kp: { n: "North Korea (조선 민주주의 인민 공화국)", c: "+850", m: "+850-99-999-999" }, no: { n: "Norway (Norge)", c: "+47", m: "+47(999) 99-999" }, om: { n: "Oman (عُمان)", c: "+968", m: "+968-99-999-999" }, pa: { n: "Panama", c: "+507", m: "+507-9999-9999" }, pk: { n: "Pakistan (پاکستان)", c: "+92", m: "+92(999) 999-9999" }, pw: { n: "Palau", c: "+680", m: "+680-999-9999" }, ps: { n: "Palestinian Territory", c: "+970", m: "+970-99 999 9999" }, pg: { n: "Papua New Guinea", c: "+675", m: "+675(999) 99-999" }, py: { n: "Paraguay", c: "+595", m: "+595(999) 999-999" }, pe: { n: "Peru (Perú)", c: "+51", m: "+51(999) 999-999" }, ph: { n: "Philippines", c: "+63", m: "+63(999) 999-9999" }, pl: { n: "Poland (Polska)", c: "+48", m: "+48(999) 999-999" }, pt: { n: "Portugal", c: "+351", m: "+351-99-999-9999" }, qa: { n: "Qatar (قطر)", c: "+974", m: "+974-9999-9999" }, ro: { n: "Romania (România)", c: "+40", m: "+40-99-999-9999" }, ru: { n: "Russian Federation (Российская Федерация)", c: "+7", m: "+7(999) 999-99-99" }, rw: { n: "Rwanda", c: "+250", m: "+250(999) 999-999" }, kn: { n: "Saint Kitts and Nevis", c: "+1 (869)", m: "+1 (869)999-9999" }, lc: { n: "Saint Lucia", c: "+1 (758)", m: "+1 (758)999-9999" }, vc: { n: "Saint Vincent and the Grenadines", c: "+1 (784)", m: "+1 (784)999-9999" }, ws: { n: "Samoa", c: "+685", m: "+685-99-9999" }, sm: { n: "San Marino", c: "+378", m: "+378-9999-999999" }, st: { n: "Sao Tome and Principe (São Tomé e Príncipe)", c: "+239", m: "+239-99-99999" }, sa: { n: "Saudi Arabia (المملكة العربية السعودية)", c: "+966", m: "+966-9-9999-9999" }, sn: { n: "Senegal (Sénégal)", c: "+221", m: "+221-99-999-9999" }, rs: { n: "Serbia (Србија)", c: "+381", m: "+381-99-999-9999" }, sc: { n: "Seychelles", c: "+248", m: "+248-9-999-999" }, sl: { n: "Sierra Leone", c: "+232", m: "+232-99-999999" }, sg: { n: "Singapore", c: "+65", m: "+65-9999-9999" }, sk: { n: "Slovakia (Slovensko)", c: "+421", m: "+421(999) 999-999" }, si: { n: "Slovenia (Slovenija)", c: "+386", m: "+386-99-999-999" }, sb: { n: "Solomon Islands", c: "+677", m: "+677-999-9999" }, so: { n: "Somalia (Soomaaliya)", c: "+252", m: "+252-99-999-999" }, za: { n: "South Africa", c: "+27", m: "+27-99-999-9999" }, kr: { n: "South Korea (대한민국)", c: "+82", m: "+82-99-9999-9999" }, ss: { n: "South Sudan (جنوب السودان)", c: "+211", m: "+211-99-999-9999" }, es: { n: "Spain (España)", c: "+34", m: "+34(999) 999-999" }, lk: { n: "Sri Lanka (ශ්‍රී ලංකාව)", c: "+94", m: "+94-99-999-9999" }, sd: { n: "Sudan (السودان)", c: "+249", m: "+249-99-999-9999" }, sr: { n: "Suriname", c: "+597", m: "+597-999-9999" }, sz: { n: "Swaziland", c: "+268", m: "+268-99-99-9999" }, se: { n: "Sweden (Sverige)", c: "+46", m: "+46-99-999-9999" }, ch: { n: "Switzerland (Schweiz)", c: "+41", m: "+41-99-999-9999" }, sy: { n: "Syria (سوريا)", c: "+963", m: "+963-99-9999-999" }, tw: { n: "Taiwan (台灣)", c: "+886", m: "+886-9999-9999" }, tj: { n: "Tajikistan", c: "+992", m: "+992-99-999-9999" }, tz: { n: "Tanzania", c: "+255", m: "+255-99-999-9999" }, th: { n: "Thailand (ไทย)", c: "+66", m: "+66-99-999-9999" }, tg: { n: "Togo", c: "+228", m: "+228-99-999-999" }, to: { n: "Tonga", c: "+676", m: "+676-99999" }, tt: { n: "Trinidad and Tobago", c: "+1 (868)", m: "+1 (868)999-9999" }, tn: { n: "Tunisia (تونس)", c: "+216", m: "+216-99-999-999" }, tr: { n: "Turkey (Türkiye)", c: "+90", m: "+90(999) 999-99999" }, tm: { n: "Turkmenistan", c: "+993", m: "+993-9-999-9999" }, tv: { n: "Tuvalu", c: "+688", m: "+688-999999" }, ug: { n: "Uganda", c: "+256", m: "+256(999) 999-999" }, ua: { n: "Ukraine (Україна)", c: "+380", m: "+380(99) 999-99-99" }, ae: { n: "United Arab Emirates (الإمارات العربية المتحدة)", c: "+971", m: "+971-99-999-9999" }, gb: { n: "United Kingdom", c: "+44", m: "+44-99-9999-99999" }, us: { n: "USA", c: "+1", m: "+1(999) 999-9999" }, uy: { n: "Uruguay", c: "+598", m: "+598-9-999-99-99" }, uz: { n: "Uzbekistan (Oʻzbekiston)", c: "+998", m: "+998-99-999-9999" }, vu: { n: "Vanuatu", c: "+678", m: "+678-99-99999" }, va: { n: "Vatican City (Città del Vaticano)", c: "+39", m: "+39-9-999-99999" }, ve: { n: "Venezuela", c: "+58", m: "+58(999) 999-9999" }, vn: { n: "Vietnam (Việt Nam)", c: "+84", m: "+84-99-9999-999" }, ye: { n: "Yemen (اليمن)", c: "+967", m: "+967-9-999-999" }, zm: { n: "Zambia", c: "+260", m: "+260-99-999-9999" }, zw: { n: "Zimbabwe", c: "+263", m: "+263-9-999999" } } } Array.prototype.some || (Array.prototype.some = function (e) { "use strict"; if (null == this) throw new TypeError("Array.prototype.some called on null or undefined"); if ("function" != typeof e) throw new TypeError; for (var t = Object(this), n = t.length >>> 0, a = 2 <= arguments.length ? arguments[1] : void 0, p = 0; p < n; p++)if (p in t && e.call(a, t[p], p, t)) return !0; return !1 }), function (e) { var t = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector; e.matches = e.matchesSelector = t || function (e) { var t = document.querySelectorAll(e), n = this; return Array.prototype.some.call(t, function (e) { return e === n }) } }(Element.prototype), Element.prototype.closest || (Element.prototype.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (Element.prototype.matches.call(t, e)) return t; t = t.parentElement || t.parentNode } return null }), t_ready(t_form_phonemask__initPhoneMask);