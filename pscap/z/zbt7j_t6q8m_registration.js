/*
Copyright 2019-20 Funnel Merlin. (https://www.FunnelMerlin.com/)
Use of this code is licensed to subscribed users of the Funnel Merlin system only. Any other use is prohibited.
*/
var AN_bf = "CF-WJEW-Trick", AN_bg = "2018.12.07";

function assignSettings(d, b, c, a) {
	if (a == undefined) {
		a = {}
	} else {
		$.each(a, function (f, e) {
			a[f] = new RegExp(e, "i")
		})
	}
	if (b in d) {
		Object.keys(c).map(function (g, e) {
			if (g in d[b]) {
				var h = d[b][g];
				if (Array.isArray(h)) {
					var f = h.length;
					while (f--) {
						if (h[f] == "false" || (/^#.+[-_]00000$/i.test(h[f])) || (g in a && a[g].test(h))) {
							h.splice(f, 1)
						}
					}
				} else {
					if (h == "false" || (/^#.+[-_]00000$/i.test(h)) || (g in a && a[g].test(h))) {
						h = false
					}
				}
				c[g] = h
			}
		})
	}
}

function fm_init_handler(p) {
	var n = ("builderID" in p.REQUIRED_ITEMS) ? p.REQUIRED_ITEMS.builderID : false,
			h = {fmApiKey: false, webinarID: false, system: false, wjEwApiKey: false}, i = {
				fullName: false,
				firstName: false,
				lastName: false,
				email: false,
				dateSlots: false,
				timeSlots: false,
				submitButton: false
			}, m = {
				sessionID: false,
				maximumItems: false,
				cutoffTime: false,
				zapierHook: false,
				zapierTriggerKey: false,
				zapierLocalTimezone: false,
				manychatURL: false
			}, a = {smsBlock: false, phoneInput: false, countryCode: false}, o = {pickTzLink: false, pickTzList: false},
			d = {dateBlocks: false, timeZones: false}, r = {countDowns: false, countDownExpires: "REFRESH"},
			k = {showAfterDate: false, loadingAfterDate: false, showAfterTime: false, loadingAfterTime: false},
			g = {webinarName: false, presenters: false}, j = {smsDelay: false};
	assignSettings(p, "REQUIRED_ITEMS", h);
	assignSettings(p, "MAIN_INPUT_SETTINGS", i);
	assignSettings(p, "OPTIONAL_WEBINAR_SETTINGS", m);
	assignSettings(p, "OPTIONAL_SMS_SETTINGS", a);
	assignSettings(p, "OPTIONAL_TIMEZONE_PICKER", o);
	assignSettings(p, "OPTIONAL_DATE_PLACEHOLDERS", d);
	assignSettings(p, "OPTIONAL_COUNTDOWN_SETTINGS", r);
	assignSettings(p, "OPTIONAL_PROGRESSIVE_FORM_SETTINGS", k);
	assignSettings(p, "OPTIONAL_WEBINAR_DETAILS", g);
	assignSettings(p, "PRIVATE_EXTRA_SETTINGS", j);
	var l = false;
	$.each(k, function (t, s) {
		l = l || s
	});
	if (l == false) {
		k = false
	}
	var f = {
		AN_fc: n,
		AN_1: "init",
		AN_2: "",
		AN_dm: j.smsDelay,
		AN_dq: m.manychatURL,
		AN_3: h.fmApiKey,
		AN_4: h.webinarID,
		AN_aa: h.wjEwApiKey,
		AN_ab: h.system,
		AN_cp: {},
		AN_b: m.sessionID,
		AN_c: m.maximumItems,
		AN_d: m.cutoffTime,
		AN_f: d.timeZones,
		AN_ch: a.countryCode,
		AN_dw: m.zapierTriggerKey,
		AN_dp: m.zapierLocalTimezone,
		AN_dn: r.countDownExpires,
		AN_10: g.webinarName,
		AN_11: g.presenters,
		AN_13: false,
		AN_25: false,
		AN_26: false,
		AN_di: false,
		AN_cg: false,
		AN_de: false,
		AN_df: false,
		AN_dl: false,
		AN_dg: false,
		AN_dh: false,
		AN_dr: k,
		AN_dt: false,
		AN_cq: function (s, y, z, t) {
			if (t === false || t === undefined) {
				f.AN_cp[s] = {type: y, description: z, found: false, items: [], count: 0};
				return
			}
			if (!Array.isArray(t)) {
				t = [t]
			}
			var A = t.length, v, u, x, B = true, w = [];
			for (v = 0; v < A; v++) {
				u = t[v];
				u = "#" + u.replace(/^#+/g, "");
				if (y == "object") {
					if (/(tmp_)?select[_-]input-\d+/.test(u)) {
						u += " select"
					} else {
						if (/(tmp_)?input[-_]\d+/.test(u)) {
							u += " input"
						} else {
							if (/(tmp_)?button[-_]\d+/.test(u)) {
								u += " a"
							}
						}
					}
				}
				element = $(u);
				x = (element.length > 0);
				B = B && x;
				w.push({selector: u, found: x, element: element})
			}
			f.AN_cp[s] = {type: y, description: z, found: B, count: w.length, items: w}
		},
		AN_dk: function (t, s) {
			if (s == undefined) {
				s = 0
			}
			if (f.AN_cp[t].count > 0 && f.AN_cp[t].found && s < f.AN_cp[t].count) {
				return f.AN_cp[t].items[s].element
			}
			return false
		},
		AN_18: function () {
			f.AN_cq("AN_cr", "object", "Full Name Input", i.fullName);
			f.AN_cq("AN_cs", "object", "First Name Input", i.firstName);
			f.AN_cq("AN_ct", "object", "Last Name Input", i.lastName);
			f.AN_cq("AN_cu", "object", "Email Input", i.email);
			f.AN_cq("AN_cv", "object", "Date Picker Input", i.dateSlots);
			f.AN_cq("AN_cw", "object", "Time Picker Input", i.timeSlots);
			f.AN_cq("AN_cx", "object", "Link to show TimeZones Input", o.pickTzLink);
			f.AN_cq("AN_cy", "object", "TimeZone Picker Input", o.pickTzList);
			f.AN_cq("AN_cz", "object", "SMS Block Input", a.smsBlock);
			f.AN_cq("AN_da", "object", "Phone Number Input", a.phoneInput);
			f.AN_cq("AN_dd", "object", "CountDown Timer Input", r.countDowns);
			f.AN_cq("AN_dc", "object", "Submit Button Input", i.submitButton);
			f.AN_cq("AN_e", "object", "Date Blocks ID List", d.dateBlocks);
			var t = [];
			if (!(/^[a-z0-9]{32}$/i.test(f.AN_3))) {
				t.push("Missing Funnel Merlin API Key")
			}
			if (!(/^[0-9a-f]{1,}$/.test(f.AN_4))) {
				t.push("Missing Webinar ID")
			}
			if (f.AN_cp.AN_cr.count + f.AN_cp.AN_cs.count == 0) {
				t.push("You must specify an ID for either Full Name or First Name Input")
			} else {
				if (f.AN_cp.AN_cr.count > 0 && !f.AN_cp.AN_cr.found) {
					t.push("Could not find element for the given Full Name ID")
				}
				if (f.AN_cp.AN_cs.count > 0 && !f.AN_cp.AN_cs.found) {
					t.push("Could not find element for the given First Name ID")
				}
				f.AN_dl = (f.AN_cp.AN_cr.count > 0)
			}
			if (f.AN_cp.AN_ct.count > 0 && !f.AN_cp.AN_ct.found) {
				t.push("Could not find element for the given Last Name ID")
			}
			if (f.AN_cp.AN_cu.count == 0) {
				t.push("You must specify an ID for the Email Input")
			} else {
				if (!f.AN_cp.AN_cu.found) {
					t.push("Could not find element for the given Email ID")
				}
			}
			if (f.AN_cp.AN_cv.count > 0) {
				if (!f.AN_cp.AN_cv.found) {
					t.push("Could not find element for the given DateSlots Dropdown ID")
				} else {
					f.AN_de = true;
					f.AN_cp.AN_cv.labelAbove = false;
					f.AN_cp.AN_cv.labelBelow = false;
					f.AN_cp.AN_cv.items[0].element.find("option").each(function () {
						var w = this.value.toLowerCase();
						var x = this.text;
						if (w == "label_above" || w == "label_top" || w == "label") {
							f.AN_cp.AN_cv.labelAbove = x
						} else {
							if (w == "label_below" || w == "label_bottom") {
								f.AN_cp.AN_cv.labelBelow = x
							} else {
								if (w == "format") {
									f.AN_cp.AN_cv.format = x
								}
							}
						}
					});
					if (!("format" in f.AN_cp.AN_cv)) {
						f.AN_cp.AN_cv.format = "%m/%d/%y"
					}
				}
			}
			if (f.AN_cp.AN_cw.count == 0) {
				t.push("You must specify an ID for the TimeSlots Select Input")
			} else {
				if (!f.AN_cp.AN_cw.found) {
					t.push("Could not find element for the given Timeslots ID")
				} else {
					f.AN_cp.AN_cw.labelAbove = false;
					f.AN_cp.AN_cw.labelBelow = false;
					f.AN_cp.AN_cw.items[0].element.find("option").each(function () {
						var w = this.value.toLowerCase();
						var x = this.text;
						if (w == "label_above" || w == "label_top" || w == "label") {
							f.AN_cp.AN_cw.labelAbove = x
						} else {
							if (w == "label_below" || w == "label_bottom") {
								f.AN_cp.AN_cw.labelBelow = x
							} else {
								if (w == "format") {
									f.AN_cp.AN_cw.format = x
								}
							}
						}
					});
					if (!("format" in f.AN_cp.AN_cw)) {
						if (f.AN_de) {
							f.AN_cp.AN_cw.format = "%h:%i%A %T"
						} else {
							f.AN_cp.AN_cw.format = "%m/%d/%y at %h:%i%A %T"
						}
					}
				}
			}
			if (f.AN_cp.AN_cx.count > 0 || f.AN_cp.AN_cy.count > 0) {
				if (f.AN_cp.AN_cx.count != f.AN_cp.AN_cy.count) {
					t.push("If you use the TimeZone Picker you must specify an ID for both the link and the list")
				} else {
					var v = true;
					if (!f.AN_cp.AN_cx.found) {
						t.push("Could not find element for the given Pick Timezone Link ID");
						v = false
					}
					if (!f.AN_cp.AN_cy.found) {
						t.push("Could not find element for the given Pick Timezone List ID");
						v = false
					}
					f.AN_df = v
				}
			}
			if (f.AN_cp.AN_cz.count + f.AN_cp.AN_da.count > 0) {
				if (f.AN_cp.AN_cz.count > 0 && f.AN_cp.AN_da.count > 0) {
					t.push("You cannot use both SMS Block Input and a separate Phone Input")
				} else {
					if (f.AN_cp.AN_da.count > 0 && f.AN_ch == false) {
						t.push("You must specify the Country Code when using the Phone Input instead of SMS Block")
					}
				}
				if (f.AN_cp.AN_cz.count > 0) {
					f.AN_dg = true;
					f.AN_dh = false
				} else {
					f.AN_dg = false;
					f.AN_dh = true
				}
			}
			if (f.AN_cp.AN_dd.count > 0 && !f.AN_cp.AN_dd.found) {
				t.push("Could not find element for the given Countdown Timer ID")
			}
			if (f.AN_cp.AN_dc.count == 0) {
				t.push("You must specify an ID for the Submit Button")
			} else {
				if (!f.AN_cp.AN_dc.found) {
					t.push("Could not find element for the given Submit Button ID")
				}
			}
			if (f.AN_d === false) {
				f.AN_d = 5
			} else {
				f.AN_d = parseInt(f.AN_d)
			}
			if (f.AN_c) {
				f.AN_c = parseInt(f.AN_c);
				if (f.AN_c < 1) {
					f.AN_c = 8872
				}
			} else {
				f.AN_c = 8872
			}
			if (f.AN_f) {
				var u = false, s = "`~!@#$^&*(){}|[]";
				$.each(f.AN_f, function (x, w) {
					if (x == "PrefixCharacter") {
						delete f.AN_f.PrefixCharacter
					} else {
						if (x.length != 1 && s.indexOf(x) > -1) {
							u = true
						}
					}
				});
				if (u) {
					t.push("You have an invalid prefix character in your TimeZones list")
				}
			}
			if (f.AN_1 == "error") {
				t.push(f.AN_2);
				f.AN_1 = "init";
				f.AN_2 = ""
			}
			if (f.AN_e && f.AN_e.length > 0) {
				f.AN_17(f.AN_e, "DateBlocks");
				if (f.AN_1 == "error") {
					t.push(f.AN_2);
					f.AN_1 = "init";
					f.AN_2 = ""
				}
			}
			if (t.length > 0) {
				f.AN_1 = "error";
				f.AN_19(t.join("\n"))
			}
		},
		AN_ds: function () {
			console.log(f.AN_dr);
			$.each(f.AN_dr, function (s, u) {
				if (u) {
					if (Array.isArray(u)) {
						f.AN_dx(s, "hide")
					} else {
						if ("selector" in u) {
							var t = Array.isArray(u.selector) ? u.selector : [u.selector];
							$.each(t, function (x, v) {
								var w = $(v);
								if (w) {
									w.hide()
								}
							})
						}
					}
				}
			})
		},
		AN_1a: function () {
			var w, u;
			var s = false;
			var t = "";
			if (f.AN_cp.AN_e.count > 0) {
				$.each(f.AN_cp.AN_e.items, function (z, y) {
					s += " " + y.element.text().replace(/\s+/ig, " ")
				})
			}
			if ("format" in f.AN_cp.AN_cv) {
				s += " " + f.AN_cp.AN_cv.format.replace(/\s+/ig, " ")
			}
			if ("format" in f.AN_cp.AN_cw) {
				s += " " + f.AN_cp.AN_cw.format.replace(/\s+/ig, " ")
			}
			var x = s.match(/[`~!@#$%^&*(){}|[\]][acdeghijlmnorstuvwyzABDFGHILMNOPSTUWYZ]/g);
			t = [];
			$.each(x, function (z, y) {
				if (t.indexOf(y) < 0) {
					t.push(y)
				}
			});
			requestSettings = {
				async: true,
				crossDomain: true,
				data: {
					webinarID: f.AN_4,
					countDownUsed: f.AN_cp.AN_dd.found,
					timeSlots: f.AN_cp.AN_cw.format,
					dateSlots: ("format" in f.AN_cp.AN_cv) ? f.AN_cp.AN_cv.format : false,
					tzSlots: false,
					userTimeZone: f.AN_dt,
					sessionID: f.AN_b,
					maximumItems: f.AN_c,
					cutoffTime: f.AN_d,
					tdPlaceholders: t,
					timeZones: f.AN_f,
					system: f.AN_ab,
					wjEwApiKey: f.AN_aa,
					webinarName: f.AN_10,
					presenter: f.AN_11,
					url: window.location.toString()
				},
				dataType: "json",
				headers: {
					"X-Api-Key": f.AN_3,
					"X-Api-App-Name": AN_bf,
					"X-Api-App-Version": AN_bg,
					"Content-Type": "application/json"
				},
				type: "POST",
				url: "https://api.funnelmerlin.com/v2/click-funnels-wj-ew/get-dates-advanced"
			};
			var v = $.ajax(requestSettings);
			v.done(function (y) {
				if (y.status == "success") {
					if (f.AN_dr) {
						if ($.inArray("progform", y.perms) >= 0) {
							f.AN_ds()
						} else {
							f.AN_dr = false;
							alert("Progressive Form Display not allowed.")
						}
					}
					f.AN_1b(y);
					f.AN_b = y.session;
					f.AN_1 = "loaded";
					f.AN_1c()
				} else {
					var A = y.type + "\n\n" + y.message;
					if (y.errNumber) {
						A += " (" + y.errNumber + ")"
					}
					f.AN_19(A);
					f.AN_1 = y.status;
					f.AN_2 = "load session error";
					if (f.AN_e.length > 0) {
						var z;
						$.each(f.AN_e, function (C, B) {
							z = B.html();
							for (var D in y.format) {
								if (!y.format.hasOwnProperty(D)) {
									continue
								}
								z = z.replace(/%[a-z0-9]((\s*%[a-z0-9])*)/ig, "N/A")
							}
							B.html(z)
						})
					}
				}
			});
			v.fail(function (y, z) {
				f.AN_19("Request failed: " + z);
				f.AN_1 = "error";
				f.AN_2 = "Failed making session request"
			})
		},
		AN_1b: function (s) {
			f.AN_b = s.sessionID;
			f.AN_di = s.tdData;
			f.AN_dj(s.defaultDate, s.defaultTime);
			if (f.AN_cp.AN_e.count > 0) {
				var t;
				$.each(f.AN_cp.AN_e.items, function (w, u) {
					t = u.element.html();
					for (var x in s.placeHolders) {
						if (!s.placeHolders.hasOwnProperty(x)) {
							continue
						}
						t = t.replace(x, s.placeHolders[x])
					}
					u.element.html(t)
				})
			}
			if (f.AN_cp.AN_dd.count > 0 && f.AN_cp.AN_dd.found) {
				$.each(f.AN_cp.AN_dd.items, function (v, w) {
					if (w.found) {
						var u = w.element.find("div.is-countdown");
						setTimeout(function () {
							u.countdown("destroy");
							var x = {until: new Date(parseInt(s.tsCountDown) * 1000)};
							if (v == 0 && f.AN_dn) {
								x.expiryUrl = (f.AN_dn.toUpperCase() == "REFRESH") ? window.location.href : f.AN_dn;
								expirySet = true
							}
							u.countdown(x)
						}, 250)
					}
				})
			}
			if (f.AN_10 === false) {
				f.AN_10 = s.webinarname
			}
			if (f.AN_11 === false) {
				f.AN_11 = s.presenter
			}
		},
		AN_dj: function (t, u) {
			if (t == undefined || t == false) {
				t = "none"
			}
			var v = f.AN_dk("AN_cv");
			if (v) {
				v.find("option").remove();
				if (f.AN_cp.AN_cv.labelAbove) {
					v.append('<option value="-71">' + f.AN_cp.AN_cv.labelAbove + "</option>");
					if (t == "none") {
						t = "-71"
					}
				}
				$.each(f.AN_di, function (w, x) {
					v.append('<option value="' + w + '">' + x.optVal + "</option>");
					if (t == "none") {
						t = w
					}
				});
				if (f.AN_cp.AN_cv.labelBelow) {
					v.append('<option value="-72">' + f.AN_cp.AN_cv.labelBelow + "</option>")
				}
				v.val(t).change(function (x) {
					f.AN_dj($(this).val(), false);
					if (f.AN_dr) {
						if ("showAfterDate" in f.AN_dr) {
							if ("loadingAfterDate" in f.AN_dr) {
								var w = (Array.isArray(f.AN_dr.loadingAfterDate.selector)) ? f.AN_dr.loadingAfterDate.selector : [f.AN_dr.loadingAfterDate.selector];
								w = $.grep(w, function (A, z) {
									var y = $(A);
									if (!y) {
										return false
									}
									y.show();
									return true
								});
								if (w.length > 0) {
									setTimeout(function (y) {
										$.each(y, function (A, z) {
											$(z).hide()
										});
										f.AN_dx("showAfterDate", "show")
									}, f.AN_dr.loadingAfterDate.delay, w)
								}
							} else {
								f.AN_dx("showAfterDate", "show")
							}
						}
						if ("hideAfterDate" in f.AN_dr) {
							f.AN_dx("hideAfterDate", "hide")
						}
						if ($(window).height() > 750) {
							$("#modalPopup").css("position", "absolute")
						}
					}
				})
			}
			if (u == undefined) {
				u = false
			}
			var s = f.AN_dk("AN_cw");
			s.find("option").remove();
			if (t == -71) {
				s.append('<option value="-88">Pick a date first</option>')
			} else {
				if (f.AN_cp.AN_cw.labelAbove) {
					s.append('<option value="-71">' + f.AN_cp.AN_cw.labelAbove + "</option>");
					if (u == false) {
						u = "-71"
					}
				}
				$.each(f.AN_di[t].times, function (w, x) {
					s.append('<option value="' + x.sid + '">' + x.option + "</option>");
					if (u == false) {
						u = x.sid
					}
				});
				if (f.AN_cp.AN_cw.labelBelow) {
					s.append('<option value="-72">' + f.AN_cp.AN_cw.labelBelow + "</option>")
				}
				s.val(u)
			}
			s.change(function (x) {
				if (f.AN_dr) {
					if ("showAfterTime" in f.AN_dr) {
						if ("loadingAfterTime" in f.AN_dr) {
							var w = (Array.isArray(f.AN_dr.loadingAfterTime.selector)) ? f.AN_dr.loadingAfterTime.selector : [f.AN_dr.loadingAfterTime.selector];
							w = $.grep(w, function (A, z) {
								var y = $(A);
								if (!y) {
									return false
								}
								y.show();
								return true
							});
							if (w.length > 0) {
								setTimeout(function (y) {
									$.each(y, function (A, z) {
										$(z).hide()
									});
									f.AN_dx("showAfterTime", "show", true)
								}, f.AN_dr.loadingAfterTime.delay, w)
							}
						} else {
							f.AN_dx("showAfterTime", "show", true)
						}
					}
					if ("hideAfterTime" in f.AN_dr) {
						f.AN_dx("hideAfterTime", "hide")
					}
					if ($(window).height() > 750) {
						$("#modalPopup").css("position", "absolute")
					}
				}
			})
		},
		AN_dx: function (v, u, t) {
			if (t == undefined) {
				t = false
			}
			var s = false;
			$.each(f.AN_dr[v], function (y, w) {
				var x = $(w);
				if (x) {
					if (u == "hide") {
						x.hide()
					} else {
						if (s == false && /^#?(tmp_)?(select-)?(input|textarea)-/.test(w)) {
							s = x
						}
						x.show()
					}
				}
			});
			if (s) {
				s.find("input,select,textarea").focus()
			}
		},
		AN_1c: function () {
			if (f.AN_1 == "loaded") {
				var s = f.AN_dk("AN_dc");
				f.AN_13 = s.attr("href");
				s.click(function (t) {
					if (f.AN_1 == "unavailable") {
						f.AN_19("There are no current timeslots available.");
						t.preventDefault();
						t.stopPropagation();
						return true
					}
					if (f.AN_1 == "finished") {
						return true
					}
					t.preventDefault();
					t.stopPropagation();
					if (f.AN_1 != "sending") {
						f.AN_1d()
					}
				})
			}
		},
		AN_1d: function () {
			var s = f.AN_1e();
			if (s.errors != "") {
				f.AN_19("There was an error with your info, please check the following field(s):\n" + s.errors);
				return false
			}
			f.AN_cp.AN_dc.items[0].element.html("<em>REGISTERING...</em>");
			f.AN_1 = "sending";
			f.AN_1f(s)
		},
		AN_1e: function () {
			$(".elInput").css({border: "1px solid rgba(0,0,0,0.2)"});
			var A = f.AN_dk("AN_cu"), x = f.AN_dk("AN_cs"), y = f.AN_dk("AN_ct"), G = f.AN_dk("AN_cr"), z = f.AN_dk("AN_da"),
					u = f.AN_dk("AN_cz"), B = f.AN_dk("AN_cw");
			var F = $.trim(A.val()), H = (x) ? $.trim(x.val()) : false, I = (y) ? $.trim(y.val()) : false,
					w = (G) ? $.trim(G.val()) : false, E = false, D = false, s = B.val();
			if (f.AN_dg) {
				var C = u.find("input[name='phone']");
				E = C.val().replace(/[^0-9]+/ig, "");
				if (f.AN_ch) {
					D = f.AN_ch
				} else {
					D = u.find("select.smsCountryCode").val().replace(/[^0-9]+/ig, "")
				}
				var t = D.length;
				if (E.substring(0, t) == D && E.length > t) {
					E = E.substring(t)
				}
			} else {
				if (f.AN_dh) {
					E = z.val().replace(/[^0-9]+/ig, "");
					D = f.AN_ch
				}
			}
			var v = {
				firstName: H,
				lastName: I,
				fullName: w,
				email: F,
				smsCheck: (f.AN_dg) ? (u.find("input.smsCheck").is(":checked") ? "y" : "n") : false,
				countryCode: D,
				phone: E,
				errors: ""
			};
			v.session = s;
			if (f.AN_dl) {
				if (v.fullName == "") {
					G.css({border: "3px solid rgb(185,21,23)"});
					v.errors += "\n* Full Name"
				}
			} else {
				if (v.firstName == "") {
					x.css({border: "3px solid rgb(185,21,23)"});
					v.errors += "\n* First Name"
				}
			}
			if (!(/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(v.email))) {
				A.css({border: "3px solid rgb(185,21,23)"});
				v.errors += "\n* Email"
			}
			if (f.AN_dg) {
				if (v.smsCheck == "y") {
					if (!(/^[0-9]{7,}$/i.test(v.phone))) {
						C.css({border: "3px solid rgb(185,21,23)"});
						v.errors += "\n* Phone"
					}
				}
			} else {
				if (E && E != "") {
					if (!(/^[0-9]{7,}$/i.test(v.phone))) {
						z.css({border: "3px solid rgb(185,21,23)"});
						v.errors += "\n* Phone"
					}
				}
			}
			return v
		},
		AN_1f: function (w) {
			var v, t, s;
			v = "https://api.funnelmerlin.com/v2/click-funnels-wj-ew/registration-handler-advanced";
			requestSettings = {
				async: true,
				crossDomain: true,
				data: {
					builderID: f.AN_fc,
					smsDelay: f.AN_dm,
					manychatURL: f.AN_dq,
					fmApiKey: f.AN_3,
					webinarID: f.AN_4,
					formData: w,
					sessionID: w.session,
					timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
					triggerKey: f.AN_dw,
					debug: "DEBUG!",
					zapierLocalTimeZone: f.AN_dp,
					webinarName: f.AN_10,
					presenter: f.AN_11,
					system: f.AN_ab,
					wjEwApiKey: f.AN_aa,
					useSMS: f.AN_dg,
					usePhone: f.AN_dh,
					useFullName: f.AN_dl,
					userTimeZone: f.AN_dt
				},
				dataType: "json",
				headers: {
					"X-Api-Key": f.AN_3,
					"X-Api-App-Name": AN_bf,
					"X-Api-App-Version": AN_bg,
					"Content-Type": "application/json"
				},
				type: "POST",
				url: v
			};
			var u = $.ajax(requestSettings);
			u.done(function (x) {
				if (x.status == "success") {
					f.AN_1 = "registered";
					f.AN_20(x)
				} else {
					f.AN_19("There was an issue with registering user:\n\n" + x.message);
					f.AN_1 = x.status;
					f.AN_2 = "register user error"
				}
			});
			u.fail(function (x, y) {
				f.AN_19("Request failed: " + y);
				f.AN_1 = "error";
				f.AN_2 = "failed on registration request"
			});
			return true
		},
		AN_20: function (s) {
			var t = {
				textBlock: {
					name: s.name,
					date: s.date,
					time: s.time,
					email: s.email,
					liveUrl: s.live_url,
					replayUrl: s.replay_url,
					thanksUrl: s.thanks_url,
					manychatURL: s.manychatURL
				},
				countdownTS: s.cdTS,
				calLinks: {google: s.google_cal, outlook: s.outlook_cal},
				event_utc: s.event_utc,
				isLive: f.AN_16
			};
			localStorage.setItem("fm_wjew_thanks", JSON.stringify(t));
			f.AN_1 = "finished";
			f.AN_cp.AN_dc.items[0].element.click()
		},
		AN_19: function (s) {
			alert("There was an issue:\n" + s)
		}
	};
	f.AN_18();
	if (f.AN_1 == "init") {
		var c = new Date().getTimezoneOffset(), q = (c <= 0) ? "+" : "-";
		c = Math.abs(c);
		var e = Math.floor(c / 60), b = c - e * 60 + 100;
		f.AN_dt = "GMT" + q + e.toString() + ":" + b.toString().substr(1);
		if (f.AN_dg && f.AN_ch) {
			f.AN_cp.AN_cz.items[0].element.find("select.smsCountryCode").hide()
		}
		f.AN_1a()
	}
};
$(function () {
	fm_init_handler({
		REQUIRED_ITEMS: {
			builderID: 'p6i8j',
			fmApiKey: 'agxet1561vtz9c5oc0mddg0d89rumhv5',
			systemApiKeyID: 's7u4p',
			webinarID: '1',
			system: 'wj'
		},
		MAIN_INPUT_SETTINGS: {
			fullName: false,
			firstName: '#tmp_input-85897-132',
			lastName: '#input-36920',
			email: '#tmp_input-95308-132',
			dateSlots: '#tmp_select_input-49104-121',
			timeSlots: '#select-input-61414',
			submitButton: '#tmp_button-77039-184'
		},
		OPTIONAL_WEBINAR_SETTINGS: {
			sessionID: false,
			maximumItems: 2,
			cutoffTime: 5,
			zapierTriggerKey: 'DiabetesWebinar',
			zapierLocalTimezone: 'America/New_York',
			manychatURL: 'https://m.me/mylivinghealth?ref=diabeteswebinar'
		},
		OPTIONAL_SMS_SETTINGS: {smsBlock: '#tmp_sms-18102-160', phoneInput: false, countryCode: '1'},
		OPTIONAL_DATE_PLACEHOLDERS: {
			dateBlocks: ['#tmp_featureimage-88376', '#tmp_paragraph-82490-117', '#headline-60906-153'],
			timeZones: {}
		},
		OPTIONAL_COUNTDOWN_SETTINGS: {countDowns: ['#tmp_countdown_evergreen-33877-168'], countDownExpires: 'REFRESH'},
		OPTIONAL_WEBINAR_DETAILS: {
			webinarName: 'Diabetes Solutions Online Event',
			presenters: 'Dr. Tom Chaney, Dr. Steph Chaney'
		},
	});
});
