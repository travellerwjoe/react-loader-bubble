import React from 'react'
import glam from 'glamorous'

export const KeyValue = glam.div(
    {
        padding: 10,
    },
    ({ inline }) => {
        return (
            inline && {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }
        )
    },
)

export const Key = glam.div({
    fontWeight: 'bold',
})

export const Value = glam.div({
    color: '#999',
})