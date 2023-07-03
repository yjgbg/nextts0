import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import {get,put,remove} from '@/lib/client/kv'

export default () => {
  const [key,setKey] = useState("key")
  const [value,setValue] = useState("value")
  return <>
    <label htmlFor='key'></label>
    <input id="key" value={key} onChange={e => setKey(e.target.value)}></input>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={async e => setValue(await get<string>(key))}>get</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={async e => {
      await remove(key)
      setValue("")
    }}>remove</button>
    <br />
    <label htmlFor='value'></label>
    <input id="value" value={value} onChange={e => setValue(e.target.value)}></input>
    <br />
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={e => put(key,value)}>put</button>
  </>
}
