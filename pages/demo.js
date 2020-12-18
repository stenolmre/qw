import React, { Fragment, useRef, useEffect } from 'react'

export default function Demo() {
  const graph = useRef()

  useEffect(() => {
    const ciclegraph = graph.current
    const circleElements = ciclegraph.childNodes

    let angle = 360 - 90
    let dangle = 360 / circleElements.length

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth /
        2}px) rotate(-${angle}deg)`;
    }
  }, [])

  return <Fragment>
    <div className="ciclegraph" ref={graph}>
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    <style jsx>
      {
        ` .ciclegraph {
  position: relative;
  width: calc(100% - 100px);
  height: 300px;
  margin: 50px;
  background: red;
}

.ciclegraph .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: calc(-50px / 2);
  background: teal;
  border-radius: 50%;
}

         `
      }</style>
  </Fragment>
}
