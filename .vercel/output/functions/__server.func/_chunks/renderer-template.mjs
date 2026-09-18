import { i as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () => new HTTPResponse("<!doctype html>\r\n<html lang=\"hi\">\r\n  <head>\r\n  <meta charset=\"UTF-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n\r\n  <title>युवक-युवती परिचय सम्मेलन</title>\r\n\r\n     <!-- Favicon -->\r\n     <link rel=\"icon\" type=\"image/png\" href=\"/images/gautamuni.png\" />\r\n\r\n  <meta\r\n    name=\"description\"\r\n    content=\"युवक-युवती परिचय सम्मेलन हेतु पंजीकरण फॉर्म\"\r\n  />\r\n\r\n  <meta property=\"og:title\" content=\"युवक-युवती परिचय सम्मेलन\" />\r\n  <meta\r\n    property=\"og:description\"\r\n    content=\"युवक-युवती परिचय सम्मेलन हेतु पंजीकरण फॉर्म\"\r\n  />\r\n  <meta property=\"og:type\" content=\"website\" />\r\n</head>\r\n\r\n\r\n  <body>\r\n    <div id=\"root\"></div>\r\n    <script type=\"module\" src=\"/src/main.tsx\"><\/script>\r\n  </body>\r\n</html>\r\n", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
