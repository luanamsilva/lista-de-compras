
import React from 'react'

type Props = {
item: []
}

export const Item = ({item}: Props) => {
  return (
    <div>{item}</div>
  )
}