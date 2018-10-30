var Drupal = { url: { toAbsolute: function(path) { return '/rhd-frontend'; } } },
      drupalSettings = {
	"path": {
		"baseUrl": "/",
		"scriptPath": null,
		"pathPrefix": "",
		"currentPath": "node/4725",
		"currentPathIsAdmin": false,
		"isFront": false,
		"currentLanguage": "en"
	},
	"pluralDelimiter": "\u0003",
	"ajax": [],
	"user": {
		"uid": 0,
		"permissionsHash": "94fdc8e93e919cb0f6f56e8a501455aad3af8805f3cb90f7910415bdac4f6b71"
	},
	"rhd": {
		"urls": {
			"base_url": "rhdp-drupal.redhat.com",
			"final_base_url": "developers.redhat.com"
		},
		"downloadManager": {
			"baseUrl": "https://developers.redhat.com"
		},
		"dcp": {
			"baseProtocolRelativeUrl": "https://dcp2.jboss.org:443"
		},
		"keycloak": {
			"accountUrl": "https://developers.redhat.com/auth/realms/rhd/account/",
			"authUrl": "https://developers.redhat.com/auth/"
		},
		"templates": {
			"book": "<li class=\"book columns large-6\" data-isbn=\"<!=isbn!>\">\n    <a href=\"<!=preview_link!>\" class=\"book-preview\" target=\"_blank\" rel=\"noopener noreferrer\">Preview</a>\n    <img src=\"<!=thumbnail!>\" alt=\"Cover Image\">\n    <h4><!=sys_title!></h4>\n    <p><!=authors!></p>\n    <p><!=published!></p>\n    <div class=\"rating\"><!=average_rating!></div>\n    <p class=\"desc\"><!=sys_description!></p>\n    <a href=\"<!=sys_url_view!>\" class=\"button\">Purchase<i class=\"fa fa-external-link\"></i></a></li>\n",
			"miniBuzz": "<div class=\"large-12 column\">\n    <div class=\"update updatemobile\">\n        <div class=\"update-meta\">\n            <h5><a href=\"<!=permanentLink!>\" class=\"external-link\"><!=sys_title!></a></h5>\n            <div class=\"row\">\n                <div class=\"small-12 medium-14 column\">\n                    <div class=\"update-source\"><!=authorName!></div>\n                </div>\n                <div class=\"small-12 medium-10 column\">\n                    <div class=\"update-timestamp\"><!=updatedDate!></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"update-body\">\n            <p><!=sys_description!></p>\n        </div>\n        <div class=\"update-meta\">\n            {# <!-- AddToAny BEGIN --> #}\n            <div class=\"a2a_kit a2a_kit_size_24 a2a_default_style\">\n                <a class=\"a2a_button_twitter\"></a>\n                <a class=\"a2a_button_facebook a2a_counter\"></a>\n                <a class=\"a2a_button_linkedin a2a_counter\"></a>\n                </div>\n            <script>\n                var a2a_config = a2a_config || {};\n                a2a_config.num_services = 6;\n            </script>\n            <script async src=\"https://static.addtoany.com/menu/page.js\"></script>\n            {# <!-- AddToAny END --> #}\n        </div>\n    </div>\n</div>\n",
			"productBuzz": "    <div class=\"buzz-product-update\">\n        <div class=\"update\">\n            <div class=\"update-meta\">\n                <a href=\"<!=permanentLink!>\" class=\"update-source\"><h5><!=sys_title!></h5></a>\n                <a href=\"<!=permanentLink!>\" class=\"update-source\"><!=authorName!></a>\n                <a href=\"<!=permanentLink!>\" class=\"update-timestamp\"><!=updatedDate!></a>\n            </div>\n        </div>\n        <div class=\"update-body\">\n            <p><!=sys_description!></p>\n        </div>\n    </div>\n",
			"buzz": "<div class=\"buzz-product-update\">\n    <div class=\"update\">\n        <div class=\"update-meta\">\n            <a href=\"<!=permanentLink!>\" class=\"update-source\"><h5><!=sys_title!></h5></a>\n            <a href=\"<!=permanentLink!>\" class=\"update-source\"><!=authorName!></a>\n            <a href=\"<!=permanentLink!>\" class=\"update-timestamp\"><!=updatedDate!></a>\n        </div>\n        <div class=\"update-body\">\n            <p><!=sys_description!></p>\n        </div>\n    </div>\n</div>\n",
			"termsConditions": "<div class=\"downloadthankyou\" id=\"tacBanner\">\n    You joined the Red Hat Developer Program on\n    <span id=\"tcWhenSigned\"><!=acceptanceTimestamp!></span>.\n    Your subscription to the Red Hat Developer Program ends in\n    <span id=\"tcEndsIn\"><!=daysRemaining!></span> days.\n</div>\n",
			"connector": "<li class=\"connector\">\n    <a href=\"#\" class=\"fn-open-connector\"><img src=\"<!=img_path_thumb!>\" alt=\"logo\" class=\"connector-logo\"></a>\n    <h3><a href=\"#\" class=\"fn-open-connector\"><!=sys_title!></a></h3>\n    <p><!=sys_description!></p>\n    <div class=\"connector-overlay-content\">\n        <div class=\"row\">\n            <div class=\"large-7 columns\">\n                <img src=\"<!=img_path_thumb!>\" alt=\"Logo\" class=\"connector-logo\" onerror=\"<!=fallback_img!>\">\n            </div>\n            <div class=\"large-17 columns\">\n                <p><!=sys_content!></p>\n                <div class=\"connector-a\">\n                    <h4>Connector A\n                        <div class=\"copy-to-clipboard\">\n                            <object data=\"\" type=\"\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"110\"\n                                    height=\"14\" id=\"clippy\">\n                                <param name=\"movie\" value=\"//static.jboss.org/ffe/0/www/vendor/clippy/clippy.swf\">\n                                <param name=\"allowScriptAccess\" value=\"always\">\n                                <param name=\"quality\" value=\"high\">\n                                <param name=\"scale\" value=\"noscale\">\n                                <param name=\"\" value=\"text=<!=code_snippet_1!>\">\n                                <param name=\"bgcolor\" value=\"#FFFFFF\">\n                                <embed src=\"//static.jboss.org/ffe/0/www/vendor/clippy/clippy.swf\"\n                                       type=\"application/x-shockwave-flash\"\n                                       width=\"110\" height=\"14\" name=\"clippy\" quality=\"high\" allowScriptAccess=\"always\"\n                                       pluginspage=\"http://www.macromedia.com/go/getflashplayer\"\n                                       FlashVars=\"text=#{page.text}\"\n                                       bgcolor=\"#FFFFFF\">\n                            </object>\n                        </div>\n                    </h4>\n                    <input type=\"text\" class=\"snippet-value\" value=\"<!=code_snippet_1!>\">\n                </div>\n                <div class=\"connector-b\">\n                    <h4>Connector B</h4>\n                    <div class=\"copy-to-clipboard\">\n                        <object data=\"\" type=\"\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"110\"\n                                height=\"14\" id=\"clippy\">\n                            <param name=\"movie\" value=\"//static.jboss.org/ffe/0/www/vendor/clippy/clippy.swf\">\n                            <param name=\"allowScriptAccess\" value=\"always\">\n                            <param name=\"quality\" value=\"high\">\n                            <param name=\"scale\" value=\"noscale\">\n                            <param name=\"FlashVars\" value=\"text=<!=code_snippet_2!>\">\n                            <param name=\"bgcolor\" value=\"#FFFFFF\">\n                            <embed src=\"//static.jboss.org/ffe/0/www/vendor/clippy/clippy.swf\"\n                                   type=\"application/x-shockwave-flash\" width=\"110\" height=\"14\" name=\"clippy\"\n                                   quality=\"high\" allowScriptAccess=\"always\"\n                                   pluginspage=\"http://www.macromedia.com/go/getflashplayer\"\n                                   FlashVars=\"text=#{page.text}\" bgcolor=\"#FFFFFF\">\n                        </object>\n                    </div>\n                    <div class=\"copy-to-clipboard\">\n                        <object data=\"\" type=\"\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"110\"\n                                height=\"14\" id=\"clippy\">\n                            <param name=\"movie\" value=\"//static.jboss.org/ffe/0/www/vendor/clippy/clippy.swf\">\n                            <param name=\"allowScriptAccess\" value=\"always\">\n                            <param name=\"quality\" value=\"high\">\n                            <param name=\"scale\" value=\"noscale\">\n                            <param name=\"\" value=\"text=<!=code_snippet_2!>\">\n                            <param name=\"bgcolor\" value=\"#FFFFFF\">\n                            <embed src=\"//static.jboss.org/ffe/0/www/vendor/clippy/clippy.swf\"\n                                   type=\"application/x-shockwave-flash\"\n                                   width=\"110\" height=\"14\" name=\"clippy\" quality=\"high\" allowScriptAccess=\"always\"\n                                   pluginspage=\"http://www.macromedia.com/go/getflashplayer\"\n                                   FlashVars=\"text=#{page.text}\"\n                                   bgcolor=\"#FFFFFF\">\n                        </object>\n                    </div>\n\n                    <input type=\"text\" class=\"snippet-value\" value=\"<!=code_snippet_2!>\">\n                </div>\n                <p class=\"link_1_text\">\n                    <a href=\"<!=link_1_url!>\" class=\"link_1\"><!=link_1_text!></a>\n                    <br>\n                    <a href=\"<!=link_2_url!>\" class=\"link_2\"><!=link_2_text!></a>\n                </p>\n                <p class=\"docs-link-text\">For more details, view the <a href=\"<!=more_details_url!>\" class=\"docs-link\">Product\n                        Documentation</a></p>\n            </div>\n        </div>\n    </div>\n</li>\n",
			"productStackoverflowTemplate": "<div class=\"stackoverflow-product-update\">\n    <div class=\"update\">\n        <div class=\"update-meta\">\n            <div class=\"row\">\n                <div class=\"large-24 columns\"><a class=\"update-source\" href=\"<!=sys_url_view!>\" target=\"_blank\" rel=\"noopener noreferrer\">\n                        <h5 class=\"qtn-title\">Q: <!=sys_title!></h5></a></div>\n                <div class=\"large-12 columns\"><p><!=up_vote_count!> votes | <!=answer_count!> answers | <!=view_count!>\n                        views</p></div>\n                <div class=\"large-12 columns\"><span class=\"right\"><p><!=dateCreated!></p></span></div>\n            </div>\n        </div>\n    </div>\n</div>\n",
			"searchPageTemplate": "<div class=\"searchpage-update\">\n    <div class=\"update\">\n        <div class=\"update-meta\"><a class=\"update-source\" href=\"<!=searchLink!>\"><h5><!=sys_title!></h5></a><a\n                    class=\"update-source\" href=\"<!=searchLink!>\"><!=sys_type!></a></div>\n        <div class=\"update-body\"><p><!=sys_description!></p></div>\n    </div>\n</div>\n",
			"stackoverflowTemplate": "<div class=\"stackoverflow-update\">\n    <div class=\"update\">\n        <div class=\"update-meta\">\n            <div class=\"row\">\n                <div class=\"large-6 columns qtn-stats\"><span class=\"votes-count\"><h4><!=up_vote_count!></h4><p>Votes</p></span><span\n                            class=\"answer-count <!=qtnAccepted!>\"><h4><!=answer_count!></h4><p>\n                            Answers</p></span><span class=\"views-count\"><h4><!=view_count!></h4><p>Views</p></span>\n                </div>\n                <div class=\"large-18 columns\"><a class=\"update-source\" href=\"<!=sys_url_view!>\" target=\"_blank\" rel=\"noopener noreferrer\">\n                        <h5 class=\"qtn-title\"><!=sys_title!></h5></a>\n                    <p class=\"qtn-content\"><!=qtnContent!></p>\n                    <div class=\"callout qtn-answer &lt;!=displayAnswr!&gt;\"><p><!=answer!></p><a\n                                href=\"<!=sys_url_view!>\" target=\"_blank\" rel=\"noopener noreferrer\">Read full question at Stack Overflow&nbsp;<i\n                                    class=\"fa fa-angle-right\"></i></a></div>\n                    <p><span class=\"so-tags\"><strong>Tags:&nbsp;</strong><!=tags!></span><span class=\"so-author\"><!=dateCreated!> | <!=authorName!></span>\n                    </p></div>\n            </div>\n        </div>\n    </div>\n</div>\n"
		}
	}
};