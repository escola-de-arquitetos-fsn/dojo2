const fs = require('fs');
const path = require('path');
const log = require('bestikk-log');

const examplesDir = 'examples';

log.task('examples');

// Load asciidoctor.js and local asciidoctor-reveal.js
const asciidoctor = require('asciidoctor.js')();
const asciidoctorRevealjs = require('../build/asciidoctor-reveal.js');

// Register the reveal.js converter
asciidoctorRevealjs.register()

// Convert *a* document using the reveal.js converter
var attributes = {'revealjsdir': 'node_modules/reveal.js@'};
var options = {safe: 'safe', backend: 'revealjs', attributes: attributes, to_dir: examplesDir};

fs.readdir(examplesDir, (err, files) => {
  files.forEach(function (filename) {
    if (path.extname(filename) === '.adoc') {
      try {
        asciidoctor.convertFile(path.join(examplesDir, filename), options);
        log.info(`Successfully converted ${filename}`);
      }
      catch (err) {
        log.error(`Error converting ${filename}: ${err}`);
      }
    }
  });
});
