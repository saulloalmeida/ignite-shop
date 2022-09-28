import { useRouter } from 'next/router'
import React from 'react'

export default function product() {
  const {query} = useRouter()
  return (
    <div>product - {JSON.stringify(query)}</div>
  )
}
