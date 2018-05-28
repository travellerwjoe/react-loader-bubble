# react-loader-bubble
A loading component for React.

[Try it live!](https://travellerwjoe.github.io/react-loader-bubble/)

## Installation
```
npm i -S react-loader-bubble
```

## Usage

### Global Loading
```js
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Loader from 'react-loader-bubble'
//...

const Demo = ({loading})=>(
    <Container>
        <Content>...</Content>
        //...
        <Loader loading={loading} />
    </Container>
)

ReactDOM.render(<Demo loading={true} />,document.getElementById('container'))
```

### Partial Loading
Wrap your component where you want partial loading.
```js
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Loader from 'react-loader-bubble'
//...

const Demo = ({loading})=>(
    <Container>
        <Content>...</Content>
        //...
        <Loader loading={loading}>
            <Panel>
                ...
            </Panel>
        </Loader>
    </Container>
)

ReactDOM.render(<Demo loading={true} />,document.getElementById('container'))
```

## Props
| Property | Type | Default | Description |
|:---|:---|:---|:---|
| color | string | #3da5d9(light blue) | Set color of loading component
| size | string | normal | Set size of loading component, value could be `small`, `normal` or `large`.
| loading | boolean | false | Set as `true` and display loading.  |
| text | string | "" | Display loading text if value is not empty.
| wrap | boolean | false | Set loading component whether be wrapped by a parent element.|
| indicator | React Node | null | Customize loading indicator.
| background | string | rgba(255, 255, 255, 0.3) | Set background color of loading mask.

## License

[MIT](https://github.com/travellerwjoe/react-loader-bubble/blob/master/LICENSE)