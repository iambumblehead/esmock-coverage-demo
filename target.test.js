import test from "node:test";
import assert from 'node:assert'
import esmock from "esmock";

test('coverage', async () => {
  const target = await esmock('./target.js', {
    './target-dep.js': () => 'mocked'
  })

  assert.strictEqual(target(), 'mocked')
})
