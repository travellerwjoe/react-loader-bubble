import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as glamor from 'glamor'
import glam, { Div } from 'glamorous'

const Container = glam.div(
  {
    left: 0,
    top: 0,
    margin: 'auto',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  ({ background, isGlobal }) => ({
    background: background,
    position: isGlobal ? 'fixed' : 'absolute',
  }),
)

const Dot = glam.div(
  {
    position: 'relative',
    display: 'block',
    borderRadius: '100%',
  },
  ({ size, color }) => {
    const bubble = glamor.css.keyframes({
      '0%': {
        transform: 'scale(0)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0,
      },
    })
    const pixel = {
      large: 48,
      normal: 32,
      small: 24,
    }
    return {
      background: color,
      animation: `${bubble} 1s infinite ease-in-out`,
      width: pixel[size],
      height: pixel[size],
    }
  },
)

const LoadingText = glam.div(
  {},
  ({ color }) => ({
    color: color,
  }),
)

const LoadingComponent = ({
  loading,
  size,
  color,
  text,
  indicator,
  background,
  isGlobal = false,
}) =>
  loading ? (
    <Container background={background} isGlobal={isGlobal}>
      <Div display="flex" flexDirection="column" alignItems="center">
        {indicator ? indicator : <Dot size={size} color={color} />}
        {text && <LoadingText color={color}>{text}</LoadingText>}
      </Div>
    </Container>
  ) : null

class Loader extends Component {
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    loading: PropTypes.bool.isRequired,
    text: PropTypes.string,
    wrap: PropTypes.bool,
    indicator: PropTypes.node,
    background: PropTypes.string,
  }

  static defaultProps = {
    color: '#3da5d9',    
    size: 'normal',
    loading: false,
    text: '',
    wrap: false,
    indicator: null,
    background: 'rgba(255, 255, 255, 0.3)',
  }

  constructor(props) {
    super(props)
    const { children } = this.props
    if (!children) {
      this.container = document.createElement('div')
      document.body.appendChild(this.container)
    }
  }

  render() {
    const {
      color,
      size,
      loading,
      text,
      wrap,
      indicator,
      background,
      children,
      ...props
    } = this.props

    const loadingProps = {
      color,
      size,
      loading,
      text,
      indicator,
      background,
    }

    if (!children) {
      return ReactDOM.createPortal(
        <LoadingComponent {...loadingProps} isGlobal={true} />,
        this.container,
      )
    }

    if ((children && wrap) || children.length >= 2) {
      return (
        <Div position="relative">
          {children}
          <LoadingComponent {...loadingProps} />
        </Div>
      )
    }

    return React.Children.map(children, (child, index) => {
      const loadingComponent = (
        <LoadingComponent key={index} {...loadingProps} />
      )

      if (!wrap) {
        const Wrapper = ({ ...childProps }) =>
          React.cloneElement(
            child,
            {
              ...props,
              ...childProps,
            },
            (child.props.children
              ? Array.isArray(child.props.children)
                ? child.props.children
                : [child.props.children]
              : []
            ).concat([loadingComponent]),
          )

        const Component = glam(Wrapper)({
          position: 'relative',
        })

        return <Component />
      }
    })
  }
}

export default Loader
