import React from 'react'
import { storiesOf } from '@storybook/react'
import Loader from '.'
import { Panel, PanelHead, PanelBody } from './component/Panel'
import { KeyValue, Key, Value } from './component/KeyValue'
import Spin from './component/Spin'

storiesOf('Loader', module)
  .add('Global Loading', () => <Loader loading={true} />)
  .add('Partial Loading', () => (
    <Loader loading={true}>
      <Panel>
        <PanelHead>Contact Information</PanelHead>
        <PanelBody>
          <KeyValue>
            <Key>Full Name</Key>
            <Value>Joe Wu</Value>
          </KeyValue>

          <KeyValue>
            <Key>Email</Key>
            <Value>trajoe.wu@gmail.com</Value>
          </KeyValue>

          <KeyValue>
            <Key>Phone</Key>
            <Value>(86)135****3901</Value>
          </KeyValue>

          <KeyValue>
            <Key>Address</Key>
            <Value>Tianfu Software Park, High-tech Zone, Chengdu</Value>
          </KeyValue>

          <KeyValue>
            <Key>Country</Key>
            <Value>China</Value>
          </KeyValue>
        </PanelBody>
      </Panel>
    </Loader>
  ))
  .add('Loading with text', () => <Loader loading={true} text="Loading..." />)
  .add('Loading with custom color', () => (
    <Loader loading={true} text="Loading..." color="red" />
  ))
  .add('Loading with custom size', () => <Loader loading={true} size="large" />)
  .add('Loading with custom background', () => (
    <Loader loading={true} background="rgba(0,0,0,0.2)" />
  ))
  .add('Loading with custom indicator', () => (
    <Loader loading={true} indicator={<Spin />} />
  ))
