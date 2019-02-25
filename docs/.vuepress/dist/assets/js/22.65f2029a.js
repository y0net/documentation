(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{163:function(e,t,a){"use strict";a.r(t);var r=a(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[a("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/DataImport?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/DataImport&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/b169a2f09f864cd5b274ce63008f04b9",alt:"Codacy Badge"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://styleci.io/repos/89221336",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://styleci.io/repos/89221336/shield?branch=master",alt:"StyleCI"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/dataimport",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/dataimport/license",alt:"License"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/dataimport",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/dataimport/downloads",alt:"Total Downloads"}}),a("OutboundLink")],1),a("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/dataimport",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/dataimport/version",alt:"Latest Stable Version"}}),a("OutboundLink")],1)]),a("p",[e._v("Incredibly powerful, efficient, unlimited number of rows, queues based Excel importer dependency for "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(".")]),a("p",[a("a",{attrs:{href:"https://laravel-enso.github.io/dataimport/videos/bulma_demo_01.mp4",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-enso.github.io/dataimport/screenshots/bulma_006_thumb.png",alt:"Watch the demo"}}),a("OutboundLink")],1)]),e._m(1),a("p",[a("a",{attrs:{href:"https://laravel-enso.github.io/dataimport/screenshots/bulma_007.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://laravel-enso.github.io/dataimport/screenshots/bulma_007_thumb.png",alt:"Screenshot"}}),a("OutboundLink")],1)]),e._m(2),a("ul",[e._m(3),e._m(4),a("li",[e._v("import types are defined in the package configuration")]),a("li",[e._v("each import type can be validated against required columns, sheets, data types and more")]),a("li",[e._v("the Laravel validation is utilized for maximum reuse of existing mechanisms while custom validators can be added when necessary")]),a("li",[e._v("an example import type is included by default in the package")]),a("li",[e._v("uses "),a("a",{attrs:{href:"https://github.com/box/spout",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spout"),a("OutboundLink")],1),e._v(" for reading the "),a("code",[e._v("xlsx")]),e._v(" file")]),a("li",[e._v("uses Laravel's queueing system and its auto-balancing features for efficient asynchronous, parallel processing")]),a("li",[e._v("blocking file structure validation")]),a("li",[e._v("non blocking file contents validation")]),e._m(5),a("li",[e._v("features real time import progress reporting in the UI")]),e._m(6),a("li",[e._v("comes with an utility ExcelSeeder class, that can be used to seed your tables using data from excel files")])]),e._m(7),a("p",[e._v("The component is already included in the Enso install and should not require any additional installation steps.")]),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),a("p",[e._v("Note that the importer expects to find just the sheets given in the template,\nmeaning it will report an error if there are missing sheets but also if there are extra sheets.")]),e._m(15),e._m(16),e._m(17),e._m(18),e._m(19),e._m(20),a("p",[e._v("The importer class given in the JSON template is responsible for doing the actual importing,\nonce the file has been validated.")]),e._m(21),e._m(22),a("p",[e._v("If you need pre/post import logic for your import, you can then also implement the following interfaces:")]),e._m(23),a("p",[e._v("Inside the two methods you can add your extra logic.")]),e._m(24),a("p",[e._v("There might be cases where it's not enough to use the Laravel Request Validation methods. For more complex scenarios you can\ncreate a custom validator class and declare it your template.")]),e._m(25),e._m(26),e._m(27),a("p",[e._v("You will notice that the summary file has an identical structure with the import file, with the exception\nof one last column, the errors column, that is used to present the issues for each row.")]),a("p",[e._v("The idea behind creating this kind of report file is for the user to be able to get a list of import issues\nin a format that allows him to quickly correct any errors in the file,\ndelete the errors column and then simply re-import the summary file.")]),e._m(28),a("p",[e._v("When seeding your database, you may use regular seeders and fill your tables with random data (as configured)\nbut when you have specific data, you may want to set the actual data from the beginning.\nWhile there's more than one way to achieve this, the Excel Seeder helper allows you to seed your table\nby using data provided in an excel file, through an import")]),e._m(29),a("p",[e._v("There are multiple advantages to this:")]),e._m(30),e._m(31),e._m(32),e._m(33),e._m(34),e._m(35),e._m(36),a("p",[e._v("The component takes the following parameters:")]),e._m(37),e._m(38),e._m(39),e._m(40),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),a("OutboundLink")],1),e._v(" package comes with this package included.")]),a("p",[e._v("Depends on:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/box/spout",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spout"),a("OutboundLink")],1),e._v(" for reading xlsx files")]),a("li",[a("a",{attrs:{href:"https://github.com/laravel-enso/ActivityLog",target:"_blank",rel:"noopener noreferrer"}},[e._v("ActivityLog"),a("OutboundLink")],1),e._v(" for the logging of the imports")]),a("li",[a("a",{attrs:{href:"https://github.com/laravel-enso/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core"),a("OutboundLink")],1),e._v(" for the various core functionality")]),a("li",[a("a",{attrs:{href:"https://github.com/laravel-enso/FileManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("FileManager"),a("OutboundLink")],1),e._v(" for managing the uploads")]),a("li",[a("a",{attrs:{href:"https://github.com/laravel-enso/Helpers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helpers"),a("OutboundLink")],1),e._v(" for various utility classes")]),a("li",[a("a",{attrs:{href:"https://github.com/laravel-enso/StructureManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Structure manager"),a("OutboundLink")],1),e._v(" for the migrations")]),a("li",[a("a",{attrs:{href:"https://github.com/laravel-enso/TrackWho",target:"_blank",rel:"noopener noreferrer"}},[e._v("TrackWho"),a("OutboundLink")],1),e._v(" for keeping track of the users doing the imports")]),a("li",[a("a",{attrs:{href:"https://github.com/laravel-enso/vuedatatable",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueDatatable"),a("OutboundLink")],1),e._v(" for listing the import results")]),a("li",[a("a",{attrs:{href:"https://github.com/laravel-enso/VueComponents",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueComponents"),a("OutboundLink")],1),e._v(" for various FE components")]),a("li",[a("a",{attrs:{href:"https://github.com/laravel-enso/Select",target:"_blank",rel:"noopener noreferrer"}},[e._v("Select"),a("OutboundLink")],1),e._v(" for the select functionality")])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"data-import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-import","aria-hidden":"true"}},[this._v("#")]),this._v(" Data Import")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("sup",[this._v("click on the photo to view a short demo in compatible browsers")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("allows the import of "),t("strong",[this._v("big")]),this._v(" files with the number of rows only limited by the xlsx file format,\nby splitting the data in chunks and handling them on multiple queues")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("uses JSON templates to configure "),t("code",[this._v("xlsx")]),this._v(" file imports into the application, with minimum custom logic")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("content import issues are made available in the rejected rows summary, a downloadable "),t("code",[this._v("xlsx")]),this._v(" file with the same structure as the import file,\nwith an extra column (on each sheet) that will describe all the validation errors for each row")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("before")]),this._v(" and "),t("code",[this._v("after")]),this._v(" hooks which are available during the importing process")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-steps","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation steps")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[a("p",[e._v("Publish the configuration, example classes and assets:")]),a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=dataimport-config")])]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=dataimport-classes")])]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=import-assets")])])])]),a("li",[a("p",[e._v("In the library "),a("code",[e._v("samples")]),e._v(" folder, "),a("code",[e._v("vendor/laravel-enso/dataimport/samples")]),e._v(", we have included a couple of\nsample import files for you to play with. It is strongly recommended that you check out the provided samples before\nattempting to create your own importers.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The configuration can be found/published in "),t("code",[this._v("config/enso/imports.php")]),this._v(" and contains:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("validations")]),e._v(", string, flag that sets whether import template validations are also executed in production,\nvalid values are "),a("code",[e._v("always")]),e._v("/"),a("code",[e._v("local")]),e._v("/"),a("code",[e._v("yourEnv")]),e._v(" | default "),a("code",[e._v("local")])]),a("li",[a("code",[e._v("chunkSize")]),e._v(", number, the number of records in a chunk. It should be adjusted for optimum performance on your machine.\nNot that the size can also be given in the import template, thus overriding the global value")]),a("li",[a("code",[e._v("queues")]),e._v(", array, the configuration for all the queues used during the import process. Note that it's good practice to have\nmore processes for the splitting queue as this is an intensive process, and it needs to keep the other queues 'busy'.\nObviously, these queues must be set up in the Laravel "),a("code",[e._v("queue")]),e._v(" configuration file.")]),a("li",[a("code",[e._v("timeout")]),e._v(", number, the Laravel job timeout for the splitting and the rejected summary report generation jobs")]),a("li",[a("code",[e._v("errorColumn")]),e._v(", string, the name of the error column used to report issues with the import rows\n(which appears in the rejected summary xlsx file)")]),a("li",[a("code",[e._v("notifications")]),e._v(", array, the list of channels used to notify the user")]),a("li",[a("code",[e._v("configs")]),e._v(" - configuration array, with what's needed to hook the JSON templates to the import package:\n"),a("ul",[a("li",[a("code",[e._v("label")]),e._v(", the label visible to the user in the interface")]),a("li",[a("code",[e._v("template")]),e._v(", the relative path to the JSON import templates")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"json-template-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-template-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" JSON Template structure:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("timeout")]),e._v(", local overriding configuration for the "),a("code",[e._v("enso.dataimport.timeout")]),e._v(" option | default is "),a("code",[e._v("60 * 4")]),e._v(" | optional")]),a("li",[a("code",[e._v("sheets")]),e._v(", array of sheet configuration objects | required")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"sheet-configuration-object-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sheet-configuration-object-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Sheet Configuration object structure:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("name")]),e._v(", the name of the sheet | required\n"),a("ul",[a("li",[e._v("should be lower snake cased if the sheet name contains spaces, so use "),a("code",[e._v("sale_entries")]),e._v(" instead of "),a("code",[e._v("Sale entries")])])])]),a("li",[a("code",[e._v("importerClass")]),e._v(", the fully qualified importer class name | required. Here you write the import logic.")]),a("li",[a("code",[e._v("validatorClass")]),e._v(", the fully qualified custom validator class name, if you are using custom validators | optional")]),a("li",[a("code",[e._v("chunkSize")]),e._v(", the size of the chunk used during splitting | default is 1000 | optional")]),a("li",[a("code",[e._v("columns")]),e._v(", array of column configuration objects | required")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"column-configuration-object-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-configuration-object-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Column Configuration object structure:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("name")]),e._v(", the name of the column | required\n"),a("ul",[a("li",[e._v("similar to the sheet name, column names should be lower snake cased, so use "),a("code",[e._v("mobile_phone")]),e._v(" instead of "),a("code",[e._v("Mobile phone")])])])]),a("li",[a("code",[e._v("validations")]),e._v(", the desired Laravel (Request) validation that you want applied for this column")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Please note that the import does not continue if "),t("em",[this._v("structure")]),this._v(" errors are encountered, such as missing sheets or columns.\nIf there are no structure errors and "),t("em",[this._v("content")]),this._v(" errors are found,\nthe rows with errors are skipped and valid rows are imported.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"inside-the-importer-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inside-the-importer-class","aria-hidden":"true"}},[this._v("#")]),this._v(" Inside the importer class")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Your importer class needs to implement the "),t("code",[this._v("LaravelEnso\\DataImport\\app\\Contracts\\Importable")]),this._v(" interface\nand implement the "),t("code",[this._v("run()")]),this._v(" method.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("run")]),this._v(" method receives a row object, which you can use to implement your import logic.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("LaravelEnso\\DataImport\\app\\Contracts\\AfterHook")]),this._v(" - requires that you implement the 'after' method")]),t("li",[t("code",[this._v("LaravelEnso\\DataImport\\app\\Contracts\\BeforeHook")]),this._v("- requires that you implement the 'before' method")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"inside-the-custom-validator-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inside-the-custom-validator-class","aria-hidden":"true"}},[this._v("#")]),this._v(" Inside the custom validator class")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The validator class must extend the "),t("code",[this._v("LaravelEnso\\DataImport\\app\\Classes\\Validators\\Validator")]),this._v(" abstract class and implement\nthe "),t("code",[this._v("run()")]),this._v(" method.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Here you'll have access to the parent class' "),t("code",[this._v("addError(string $error)")]),this._v(" method.\nYou may use it to add any required issues for the data that fails your custom validation logic.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-rejected-rows-summary-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-rejected-rows-summary-file","aria-hidden":"true"}},[this._v("#")]),this._v(" The rejected rows summary file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"excel-seeder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#excel-seeder","aria-hidden":"true"}},[this._v("#")]),this._v(" Excel Seeder")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("basically it's a seeder adapter for a regular data import.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("the data is present in an excel file, and can be added and updated by almost any person")]),t("li",[this._v("even after initially seeding the database, since the import is going to remain available, additional files can be later imported for updates")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[this._v("#")]),this._v(" Steps")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[e._v("create a data import, following your usual flow")]),a("li",[e._v("create your excel seeder class, that will be using the import you added at step 1\n"),a("ul",[a("li",[e._v("save it on the "),a("code",[e._v("database/seeds/")]),e._v(" path")]),a("li",[e._v("note that your class must extend the "),a("code",[e._v("ExcelSeeder")]),e._v(" class")]),a("li",[e._v("inside, add the "),a("code",[e._v("$type")]),e._v(" parameter and use for value the type of the import created at the first step")])])]),a("li",[e._v("add the actual excel file containing the data to be used when seeding\n"),a("ul",[a("li",[e._v("the file should be placed on the "),a("code",[e._v("storage/app/files")]),e._v(" path")]),a("li",[e._v("the name of the file needs to be the type of the import, and and must have an "),a("code",[e._v("xlsx")]),e._v(" extension")]),a("li",[e._v("since you're going to be committing the file to the repository, don't forget to add it to the "),a("code",[e._v(".gitignore")]),e._v(" exclusion list")])])]),a("li",[e._v("run the seed process with "),a("code",[e._v("php artisan db:seed")]),a("ul",[a("li",[e._v("the seeder will run the import process & the data will be available in the database")]),a("li",[e._v("you'll also be able to see the result of the import in the data imports index page")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-vuejs-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-vuejs-components","aria-hidden":"true"}},[this._v("#")]),this._v(" The VueJS Components")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"importuploader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#importuploader","aria-hidden":"true"}},[this._v("#")]),this._v(" ImportUploader")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("import-uploader")]),this._v(" components is meant to be integrated in other places/pages/components\nfrom where you want to perform imports.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For instance, say you have a list of companies and you already have an invoice import.\nInstead of navigating to the DataImport menu, selecting the import, and uploading a file that contains the\ncompany identifier and invoice details you want to import, you may place the "),t("code",[this._v("import-uploader")]),this._v(" component on the\ncompany details page, pass the type of import and identifier of the company and upload the file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("fileSizeLimit")]),this._v(", number, the maximum size for the uploaded file | optional | default is "),t("code",[this._v("100000000")])]),t("li",[t("code",[this._v("params")]),this._v(", object, it must contain the type of the import and any other parameters required for the import| required")]),t("li",[t("code",[this._v("path")]),this._v(", string, the URL used to upload the file | required")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"publishes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[this._v("#")]),this._v(" Publishes")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("php artisan vendor:publish --tag=dataimport-config")]),e._v(" - configuration files")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=dataimport-classes")]),e._v(" - example import")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=dataimport-mail")]),e._v(" - the email templates")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=import-assets")]),e._v(" - the required js assets")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=enso-config")]),e._v(" - a common alias for when wanting to update configuration,\nonce a newer version is released, can be used with the "),a("code",[e._v("--force")]),e._v(" flag")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=enso-assets")]),e._v(" - a common alias for when wanting to update the assets,\nonce a newer version is released, can be used with the "),a("code",[e._v("--force")]),e._v(" flag")]),a("li",[a("code",[e._v("php artisan vendor:publish --tag=enso-mail")]),e._v(" - a common alias for when wanting to update the email templates,\nonce a newer version is released, can be used with the "),a("code",[e._v("--force")]),e._v(" flag")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])}],!1,null,null,null);t.default=i.exports}}]);