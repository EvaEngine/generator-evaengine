const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('general', () => {
  before(done => {
    helpers
      .run(path.join(__dirname, '../generators/app'), {
        tmpdir: false
      })
      .withPrompts({
        project: 'tmp',
        evaqueue: false,
      })
      .on('end', () => {
        done();
      });
  });

  it('creates expected files', () => {
    assert.file([
      'src/app.js',
    ]);
  });
});
