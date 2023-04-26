import React from 'react'
import { useNavigate } from 'react-router-dom'

// 封装withRouter组件
export default function WithRouter(Cpt) {
  // const push = useNavigate()
  return <MidCpt Cpt={Cpt}></MidCpt>
}

function MidCpt (props) {
  const {Cpt} = props
  const push = useNavigate()
  return <Cpt {...props} history={{push}}/>
}