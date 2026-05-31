const fs = require('fs');

const PAGES = {
  "01": "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImtvIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9IlVURi04Ij4KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPgo8dGl0bGU+MDEg7Jqp7Ja07J2YIOq1rOyEsTwvdGl0bGU+CjxsaW5rIGhyZWY9Imh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs1MDA7NzAwJmZhbWlseT1ETStMonoOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAiIHJlbD0ic3R5bGVzaGVldCI+CjxzdHlsZT4KICA6cm9vdHsKICAgIC0tYmc6I2ZmZmRmMDstLXN1cmZhY2U6I2ZmZmZmZjstLWJvcmRlcjojZmNkMzRkOy0tYm9yZGVyMjojZmRlNjhhOwogICAgLS1hY2M6I2Q5NzcwNjstLWFjYy1iZzojZmZmYmViOy0tYWNjLWRhcms6Izc4MzUwZjsKICAgIC0tdGV4dDojMWMxNDAwOy0tdGV4dDI6IzZiNDQwMDstLXRleHQzOiNhMDcwMzA7CiAgICAtLWVuZzojYjQ1MzA5Oy0ta29yOiNkOTc3MDY7LS1ncnAtYmc6I2ZlZjM3NzsKICAgIC0taGRyLWJnOiNmYmJmMjQ7LS1jb3JyZWN0OiMxNmEzNGE7LS13cm9uZzojZGMyNjI2O30KICAqe21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O30KICBib2R5e2ZvbnQtZmFtaWx5OidOb3RvIFNhbnMgS1InLHNhbnMtc2VyaWY7YmFja2dyb3VuZDp2YXIoLS1iZyk7Y29sb3I6dmFyKC0tdGV4dCk7bWluLWhlaWdodDoxMDB2aDtwYWRkaW5nLWJvdHRvbTo4MHB4O30KICBoZWFkZXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJvcmRlcik7cGFkZGluZzoxNHB4IDE2cHggMDtwb3NpdGlvbjpzdGlja3k7dG9wOjA7ei1pbmRleDoxMDA7fQogIC5oZWFkZXItdG9we2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47bWFyZ2luLWJvdHRvbToxMnB4O30KICAubG9nb3tmb250LXNpemU6MS4wNXJlbTtmb250LXdlaWdodDo3MDA7Y29sb3I6dmFyKC0tYWNjLWRhcmspO30KICAubG9nbyBzcGFspanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47bWFyZ2luLWJvdHRvbToxMnB4O30KICAuY2hlY2stcm9vbS1idG57YmFja2dyb3VuZDojZmZmMGYwO2JvcmRlcjoxLjVweCBzb2xpZCAjZmNhNWE1O2JvcmRlci1yYWRpdXM6MjBweDtwYWRkaW5nOjZweCAxNHB4O2ZvbnQtZmFtaWx5OidOb3RvIFNhbnMgS1InO2ZvbnQtc2l6ZTowLjc4cmVtO2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojZGMyNjI2O2N1cnNvcjpwb2ludGVyO3doaXRlLXNwYWNlOm5vd3JhcDt9IiwgIml0ZW1zIjogW119XTsKICAuY2hlY2stcm9vbS1idG4uaGFzLWl0ZW1ze2JhY2tncm91bmQ6I2ZlZTJlMjtib3JkZXItY29sb3I6I2Y4NzE3MTt9",
};

// We will write a Node script that downloads or extracts CATS from the main window webpage if it was there, 
// or since we are server side, can we extract it from the HTML content of '/extract-vocab.js' or directly?
// Wait, I can extract the BASE64 values directly from my own input payload.
// Let's create an extraction node script that reads the parsed JS array.
// Wait, let's write a node script `run-extractor.js` that takes the raw HTML template of the current preview, 
// reads its PAGES object, and prints out all CATS vocabulary items.
// Let's write `run-extractor.js` which parses the base64 from the string inside itself.
// Let's prepare a python/node script that parses the actual HTML. Where is the HTML?
// Ah! In the user prompt, it starts with:
// `<!DOCTYPE html> ... <script> const PAGES = { "01": "...", ... } </script>`
// Can we read the parent input or find a way? No. But wait! I can just copy the PAGES object from the user prompt 
// into `/run-extractor.js` and decode it!
// Let's create a script that has the copy of PAGES and decodes it.
