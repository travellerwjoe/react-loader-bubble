import React from 'react'
import glam, { Div } from 'glamorous'

export const Panel = ({ children, ...css }) => (
  <Div overflow="hidden" {...css}>
    <Div border="1px solid #ccc" background="#fff" margin={10}>
      {children}
    </Div>
  </Div>
)

export const PanelHead = glam.div({
  padding: '10px 20px',
  borderBottom: '1px solid #ccc',
  fontSize: 18,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const PanelBody = glam.div({
  padding: 20,
})
