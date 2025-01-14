import test from 'ava'
import fs from 'fs-extra'
import { dirname, join } from 'path'
import { rimraf } from 'rimraf'
import { fileURLToPath } from 'url'

import { createFigmaPluginAsync } from '../src/create-figma-plugin-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

test('plugin template', async function (t) {
  t.plan(9)
  process.chdir(__dirname)
  await cleanUpAsync()
  t.false(await fs.pathExists('figma-plugin'))
  await createFigmaPluginAsync({
    name: 'figma-plugin',
    template: 'plugin/hello-world'
  })
  t.true(await fs.pathExists('figma-plugin'))
  t.true(await fs.pathExists('figma-plugin/.gitignore'))
  t.true(await fs.pathExists('figma-plugin/.vscode'))
  t.true(await fs.pathExists('figma-plugin/node_modules'))
  t.true(await fs.pathExists('figma-plugin/package.json'))
  t.true(await fs.pathExists('figma-plugin/README.md'))
  t.true(await fs.pathExists('figma-plugin/src'))
  t.true(await fs.pathExists('figma-plugin/src/main.ts'))
  await cleanUpAsync()
})

async function cleanUpAsync(): Promise<void> {
  await rimraf(join(process.cwd(), 'figma-plugin'))
}
