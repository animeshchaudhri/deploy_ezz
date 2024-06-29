import { FC } from 'react'
import { signIn } from 'next-auth/react'

interface LoginButtonProps {}

const LoginButton: FC<LoginButtonProps> = () => {
  const signInWithGoogle = async () => {
    try {
      await signIn('google')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      className='p-3 bg-[#000000]/50 rounded-sm border border-[#ffffff]'
      onClick={signInWithGoogle}
    >
      Login/Signup
    </button>
  )
}

export default LoginButton