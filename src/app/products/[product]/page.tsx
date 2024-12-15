import React from 'react'
import NewCeramics from '../../../../components/NewCeramices'
import ProductPage from '../../../../components/ProductPage'
import Brand from '../../../../components/Brand'
import SignUp from '../../../../components/SignUp'

const page = () => {
  return (
    <div>
      <ProductPage/>
      <NewCeramics heading='You might also like'/>
      <Brand/>
      <SignUp/>
    </div>
  )
}

export default page