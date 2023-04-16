const defaultConfig = {
	"username": "Mark",
	"theme": {
		"backgroundColor": "#121317",
		"windowColor": "#1e212b",
		"glowColor": "#6b5cb157",
		"white": "#e2e2e2",
		"gray": "#97989d",
		"black": "#16161e",
		"red": "#ec6183",
		"green": "#2ed8a2",
		"yellow": "#e8b195",
		"blue": "#2bc3de",
		"cyan": "#62e0e2",
		"magenta": "#e069aa",
		"violet": "#d1aff8",
		"orange": "#ff8800"
	},
	"terminal": {
		"fixedHeight": true,
		"windowGlow": true,
		"textGlow": false
	},
	"prompt": {
		"ctrlC": true,
		"placeholder": "command...",
		"placeholderColor": "gray",
		"userColor": "green",
		"atColor": "gray",
		"hostColor": "magenta",
		"promptColor": "magenta",
		"promptSymbol": "❯",
		"caretColor": "green",
		"selectionBg": "yellow",
		"selectionFg": "black"
	},
	"fetch": {
		"timeFormat": "HH:mm",
		"dateFormat": "DD/MM/YYYY",
		"titleColor": "yellow",
		"image": "icon.svg",
		"data": [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	"urlLaunch": {
		"target": "_self",
		"defaultColor": "white",
		"hoverColor": "violet"
	},
	"search": {
		"default": "https://google.com/search?q=",
		"target": "_self",
		"shortcutRegex": "([A-Za-z0-9]+) (.*)",
		"shortcuts": [
			{
				"alias": "g",
				"name": "Google Search",
				"url": "https://google.com/search?q={}"
			},
			{
				"alias": "emc",
				"name": "Electronic Medicines Compendium Search",
				"url": "https://www.medicines.org.uk/emc/search?q={}"
			},
			{
				"alias": "bnf",
				"name": "BNF Search",
				"url": "https://bnf.nice.org.uk/search/?q={}"
			},
			{
				"alias": "utd",
				"name": "UpToDate Search",
				"url": "https://www.uptodate.com/contents/search?search={}"
			},
			{
				"alias": "gh",
				"name": "Github Search",
				"url": "https://github.com/search?q={}"
			},
			{
				"alias": "s",
				"name": "Stack Overflow Search",
				"url": "https://stackoverflow.com/search?q={}"
			},
			{
				"alias": "r",
				"name": "Subreddit Search",
				"url": "https://reddit.com/r/{}"
			},
			{
				"alias": "w",
				"name": "Wikipedia Search",
				"url": "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	"sections": [
		{
			"title": "Admin",
			"color": "green",
			"align": "left",
			"links": [
				{
					"name": "Gmail",
					"url": "https://mail.google.com",
					"icon": "mdi:gmail"
				},
				{
					"name": "Calendar",
					"url": "https://calendar.google.com", 
					"icon": "mdi:calendar"
				},
				{
					"name": "Taskade",
					"url": "https://www.taskade.com",
					"icon": "logos:taskade"
				},
				{
					"name": "TickTick",
					"url": "https://ticktick.com",
					"icon": "mdi:check-all"
				}
			]
		},
		{
			"title": "Dev",
			"color": "magenta",
			"align": "left",
			"links": [
				{
					"name": "GitHub",
					"url": "https://github.com",
					"icon": "mdi:github"
				},
				{
					"name": "GPT",
					"url": "https://chat.openai.com",
					"icon": "tabler:brand-openai"
				},
				{
					"name": "Keybr",
					"url": "https://www.keybr.com/",
					"icon": "mdi:keyboard"
				},
				{
					"name": "Stack Overflow",
					"url": "https://stackoverflow.com/",
					"icon": "mdi:stack-overflow"
				}
			]
		},
		{
			"title": "Medicine",
			"color": "violet",
			"align": "left",
			"links": [
				{
					"name": "Nature Medicine",
					"url": "https://www.nature.com/nm",
					"icon": "mdi:leaf"
				},
				{
					"name": "LITFL",
					"url": "https://litfl.com",
					"icon": "mdi:hospital"
				},
				{
					"name": "Deranged Physiology",
					"url": "https://derangedphysiology.com",
					"icon": "mdi:heart"
				},
				{
					"name": "MDCalc",
					"url": "https://mdcalc.com",
					"icon": "mdi:calculator"
				}
			]
		},
		{
			"title": "Relax",
			"color": "cyan",
			"align": "left",
			"links": [
				{
					"name": "Reddit",
					"url": "https://reddit.com",
					"icon": "mdi:reddit"
				},
				{
					"name": "YouTube",
					"url": "https://youtube.com",
					"icon": "mdi:youtube"
				},
				{
					"name": "Netflix",
					"url": "https://netflix.com",
					"icon": "mdi:netflix"
				},
				{
					"name": "NowTV",
					"url": "https://nowtv.com",
					"icon": "mdi:television-box"
				}
			]
		},
		{
			"title": "NHS",
			"color": "blue",
			"align": "left",
			"links": [
				{
					"name": "NHS mail",
					"url": "https://outlook.office.com",
					"icon": "mdi:microsoft-outlook"
				},
				{
					"name": "Lifelong Learning",
					"url": "https://lifelong.rcoa.ac.uk",
					"icon": "mdi:gas-cylinder"
				},
				{
					"name": "MyESR",
					"url": "https://my.esr.nhs.uk",
					"icon": "mdi:file-multiple"
				},
				{
					"name": "Bridge",
					"url": "https://heeoe.bridgeapp.com",
					"icon": "mdi:bridge"
				}
			]
		},
		{
			"title": "Others",
			"color": "yellow",
			"align": "left",
			"links": [
				{
					"name": "Google Maps",
					"url": "https://maps.google.com",
					"icon": "mdi:google-maps"
				},
				{
					"name": "OS Maps",
					"url": "https://explore.osmaps.com",
					"icon": "mdi:map"
				},
				{
					"name": "Amazon",
					"url": "https://amazon.co.uk",
					"icon": "simple-icons:amazon"
				},
				{
					"name": "Bins",
					"url": "https://www.cambridge.gov.uk/check-when-your-bin-will-be-emptied",
					"icon": "mdi:trash-can"
				}
			]
		}
	]
}

export default defaultConfig
