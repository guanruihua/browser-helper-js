// encrypt
import React from 'react'
import './index.less'
import * as _ from '..'
import { ObjectType } from 'abandonjs'
import { getData } from './run'

export default function () {
  const [state, setState] = React.useState<ObjectType[]>([])

  const init = async () => {
    setState(await getData())
  }

  React.useEffect(() => {
    init()
  }, [])

  return (
    <div className="encrypt-demo">
      <h2>encrypt</h2>
      <div className="data-table">
        {state.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div>{item.dataToEncrypt}</div>
              <div>{item.encryptedText}</div>
              <div>{item.decryptedText}</div>
            </React.Fragment>
          )
        })}
      </div>
      <h2>md5</h2>
      <div className="data-table">
        <div>abc</div>
      </div>
      <br />
      <div className="data-table">
        <div>16位[小]</div>
        <div>3cd24fb0d6963f7d</div>
        <div>{_.md5('abc', '16-bit-small')}</div>
        <div>16位[大]</div>
        <div>3CD24FB0D6963F7D</div>
        <div>{_.md5('abc', '16-bit-large')}</div>
        <div>32位[小]</div>
        <div>900150983cd24fb0d6963f7d28e17f72</div>
        <div>{_.md5('abc', '32-bit-small')}</div>
        <div>32位[大]</div>
        <div>900150983CD24FB0D6963F7D28E17F72</div>
        <div>{_.md5('abc', '32-bit-large')}</div>
      </div>
      <h3>other</h3>
      <div>
        <div>
          md5: abc {'=>'} {_.hex_md5('abc')}
        </div>
        <div>uuid: {_.uuid()}</div>
        <div>base64: {_.toBase64('中文ee23')}</div>
        <div>base64toString: {_.base64ToString(_.toBase64('中文ee23'))}</div>
        <div>
          base64toString:{' '}
          {_.base64ToString(_.toBase64(JSON.stringify({ a: 1 })))}
        </div>
      </div>
    </div>
  )
}
