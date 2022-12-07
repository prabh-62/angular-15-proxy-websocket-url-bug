// @ts-check

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

express()
  .use(
    "/command-center",
    createProxyMiddleware({
      target: "http://localhost:4201",
      pathRewrite: { "^/command-center": "" },
      changeOrigin: true,
      ws: true,
    })
  )
  .use(
    "/support-panel",
    createProxyMiddleware({
      target: "http://localhost:4202",
      pathRewrite: { "^/support-panel": "" },
      changeOrigin: true,
      ws: true,
    })
  )
  .listen(80);
