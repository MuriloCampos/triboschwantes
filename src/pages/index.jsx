import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { useRouter } from 'next/router'

import { api } from '../services/api'

const styles = {
  container: () => [
    tw`flex flex-col items-center h-screen bg-white`,
  ],
  form: () => [
    tw`flex flex-col items-center justify-center bg-white p-5 rounded-sm`,
  ],
  input: ({ isActive }) => [
    tw`p-1 bg-gray-100 mb-5`,
    isActive && tw`border-2 border-blue-300 rounded-sm`
  ],
  button: () => [
    tw`bg-blue-500 w-full p-2 rounded-sm text-white font-semibold`,
  ],
}

const IndexPage = () => {
  const router = useRouter()
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('@triboschwantes:logged')
    if (data) {
      router.push('/Main')
    }
  }, [])

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async () => {
    api.post('/auth', { password }).then(() => {
      localStorage.setItem('@triboschwantes:logged', 'true')
      router.push('/Main')
    }).catch(() => setError(true))
  }

  return (
    <div css={styles.container()}>
      <img src="/tribopic.svg" />
      <div css={styles.form()}>
        <input type="text" name="login" value="triboschwantes" readOnly css={styles.input({ isActive: true })} />
        <input type="password" name="login" value={password} onChange={handlePasswordChange} placeholder="Senha" css={styles.input({ isActive: password !== '' })} />
        
        <button type="button" css={styles.button()} onClick={handleSubmit}>ENTRAR</button>
        {error ? <span tw="text-red-700 pt-1 font-semibold">Senha inválida!</span> : <div />}
      </div>

      <a href="//api.whatsapp.com/send?phone=5566999228007" tw="bg-yellow-500 text-white font-semibold shadow-lg p-2 rounded-sm flex items-center">Dúvidas: <img src="/whatsapp.png" tw="mx-2 w-5 h-5" /> (66) 9 9922 8007</a>
    </div>
  )

}

export default IndexPage
