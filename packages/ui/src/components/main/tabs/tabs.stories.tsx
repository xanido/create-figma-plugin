/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Tabs } from './tabs'

export default { title: 'ui/Main/Tabs' }

export const Unselected = function () {
  const [value, setValue] = useState<string | null>(null)
  return (
    <Tabs
      onChange={setValue}
      options={[
        { children: <div>Foo</div>, value: 'foo' },
        { children: <div>Bar</div>, value: 'bar' },
        { children: <div>Baz</div>, value: 'baz' }
      ]}
      value={value}
    />
  )
}

export const Selected = function () {
  const [value, setValue] = useState<string | null>('bar')
  return (
    <Tabs
      onChange={setValue}
      options={[
        { children: <div>Foo</div>, value: 'foo' },
        { children: <div>Bar</div>, value: 'bar' },
        { children: <div>Baz</div>, value: 'baz' }
      ]}
      value={value}
    />
  )
}