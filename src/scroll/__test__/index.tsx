import React from 'react'
import HelpCmp from './helpCmp'
import * as _ from '..'

export default function () {
  return (
    <div className="scroll-test-dom" style={{ maxHeight: 'calc(100vh - 30px)', overflow: 'auto'}}>
      <button
        onClick={() => {
          _.scrollBottom('.scroll-test-dom')
        }}
      >
        To Bottom
      </button>
      <HelpCmp />
      <button
        onClick={() => {
          _.scrollTop('.scroll-test-dom')
        }}
      >
        To TOP
      </button>
    </div>
  )
}
