import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

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

  async function handleSignIn(data: SignInForm) {
    console.log(data)
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
