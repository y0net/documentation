(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{167:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/MenuManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/MenuManager&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/3f2ff01a8dc04044a13c6f4fbb9e21bd",alt:"Codacy Badge"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://styleci.io/repos/94800927",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://styleci.io/repos/94800927/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/menumanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/menumanager/license",alt:"License"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/menumanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/menumanager/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/menumanager",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/menumanager/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),a("p",[e._v("Menu Manager dependency for "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1)]),a("p",[e._v("This package works exclusively within the "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enso"),a("OutboundLink")],1),e._v(" ecosystem.")]),a("p",[e._v("The front end assets that utilize this api are present in the "),a("a",{attrs:{href:"https://github.com/enso-ui/ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("ui"),a("OutboundLink")],1),e._v(" package.")]),a("p",[e._v("For live examples and demos, you may visit "),a("a",{attrs:{href:"https://www.laravel-enso.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("laravel-enso.com"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://laravel-enso.github.io/menumanager/videos/bulma_menu_management.webm",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-enso.github.io/menumanager/screenshots/bulma_012_thumb.png",alt:"Watch the demo"}}),a("OutboundLink")],1)]),e._m(1),e._m(2),a("p",[e._v("Comes pre-installed in Enso.")]),e._m(3),e._m(4),e._m(5),a("p",[e._v("Please note that because we want to keep the compiled size down, throughout the enso ecosystem,\nicons are imported selectively.")]),a("p",[e._v("What this means for the menu editor, is that when adding/changing a menu, you should also make sure you\nimport the required icons. The proper place to include the new icons is:")]),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),a("p",[e._v("are welcome. Pull requests are great, but issues are good too.")]),e._m(12),a("p",[e._v("This package is released under the MIT license.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"menu-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menu-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Menu Manager")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("sup",[this._v("click on the photo to view a short demo in compatible browsers")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("allow for the easy management of the main (sidebar) menus of the application")]),t("li",[this._v("permits the creation, update, delete, ordering of the menus")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("resources/js/app.js")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"under-the-hood"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood","aria-hidden":"true"}},[this._v("#")]),this._v(" Under the Hood")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("a menu element may have several roles attached and is rendered only for the users with the respective roles")]),a("li",[e._v("menu element attributes:\n"),a("ul",[a("li",[a("code",[e._v("parent_id")]),e._v(": the id of its parent menu, if he has a parent, or null")]),a("li",[a("code",[e._v("name")]),e._v(": the label that is translated and visible in the UI")]),a("li",[a("code",[e._v("icon")]),e._v(": the icon classes, visible in the UI")]),a("li",[a("code",[e._v("order_index")]),e._v(": used for ordering the elements of the menu in the desired sequence")]),a("li",[a("code",[e._v("link")]),e._v(": is the link that's going to be accessed when clicking on the menu")]),a("li",[a("code",[e._v("has_children")]),e._v(": is a flag telling us if a menu element has children and is used when rendering the menu")])])]),a("li",[e._v("for the menu changes to take effect, a page refresh or a re-login is needed")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"publishes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[this._v("#")]),this._v(" Publishes")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=menus-factory")]),e._v(" - the factory for the "),a("code",[e._v("Menu")]),e._v(" model")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=enso-factories")]),e._v(" - a common alias for when wanting to update the factories,\nonce a newer version is released, usually used with the "),a("code",[e._v("--force")]),e._v(" flag")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"contributions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);t.default=n.exports}}]);