import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { HeaderNavigationButtons } from '@/components/header-navigation-buttons'
import { api } from '@/lib/axios'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.log(error)
        if (isAxiosError(error)) {
          const status = error.response?.status

          if (status === 401) {
            navigate('/sign-in', { replace: true })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <div>
      <div className="flex justify-between p-5">
        <img src="./logo-only.png" width="56px" alt="" />
        <HeaderNavigationButtons />
        <span>Novo produto e user</span>
      </div>

      <div className="px-40">
        <Outlet />
      </div>
    </div>
  )
}
