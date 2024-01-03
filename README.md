# test-ts-lib

Example typescript library that runs in both the browser and node.

Biggest gotcha is that the browser requires `<script type="module">` for these, not just `<script>`. this lets the browser use `import` statements.

## notes

* you get maximum compatibility by building both `esm` (`import`) and `umd` (`require`) modules
* `umd` is compatible with both commonjs and amd, no need to build those explicitly
* `"type": "module"` in package.json makes a node project use esm instead of umd. it's a good default these days.
* typescript's compiler cannot bundle its output, but for compatibility and production-readiness we usually want it to. this requires another tool, like tsup. most of them seem to use `esbuild`
