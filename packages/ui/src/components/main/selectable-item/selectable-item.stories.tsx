/* eslint-disable no-console */
/** @jsx h */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { SelectableItem } from './selectable-item'

export default { title: 'Components/Main/Selectable Item' }

export const Unselected = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(!(newValue === 'true'))
  }
  return (
    <SelectableItem onChange={handleChange} value={value}>
      Text
    </SelectableItem>
  )
}

export const Selected = function () {
  const [value, setValue] = useState(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(!(newValue === 'true'))
  }
  return (
    <SelectableItem onChange={handleChange} value={value}>
      Text
    </SelectableItem>
  )
}

export const Disabled = function () {
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <SelectableItem disabled onChange={handleChange} value={true}>
      Text
    </SelectableItem>
  )
}

export const Bold = function () {
  const [value, setValue] = useState(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(!(newValue === 'true'))
  }
  return (
    <SelectableItem bold onChange={handleChange} value={value}>
      Text
    </SelectableItem>
  )
}

export const Indent = function () {
  const [value, setValue] = useState(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(!(newValue === 'true'))
  }
  return (
    <SelectableItem indent onChange={handleChange} value={value}>
      Text
    </SelectableItem>
  )
}

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  const [value, setValue] = useState(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(!(newValue === 'true'))
  }
  return (
    <SelectableItem onChange={handleChange} value={value}>
      {longText}
    </SelectableItem>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState(false)
  return (
    <SelectableItem onValueChange={setValue} value={value}>
      Text
    </SelectableItem>
  )
}
