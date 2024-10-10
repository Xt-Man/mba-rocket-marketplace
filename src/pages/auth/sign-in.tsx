import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(3),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
      password: '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email, password: data.password })
      navigate('/')
    } catch (error) {
      // toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div>
        <h1>Acesse sua conta</h1>
        <h3>Informe seu e-mail e senha para entrar</h3>
      </div>

      <div className="">
        <div className="">
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">E-MAIL</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">SENHA</Label>
              <Input id="password" type="password" {...register('password')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar
            </Button>
          </form>
        </div>
        <div className="">
          <Label>Ainda não tem uma conta?</Label>
          <Button disabled={isSubmitting} className="w-full" type="submit">
            Cadastrar
          </Button>
        </div>
      </div>
    </>
  )
}
