Package.describe({
  summary: "A package containing lucid.js by Robert Hurst as of commit 2a15cd3d3864c444d37c6563d8a24c97aa3277c9"
});

Package.on_use(function (api, where) {
  api.add_files('lucid.js', ['client', 'server']);
});

