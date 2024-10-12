import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="container m-auto flex min-h-[768px] bg-shape-bg">
      <div className="w-[755px] pt-8">
        <img className="ml-8" src="./logo.png" alt="" />
        <img src="./sign.png" alt="" />
      </div>
      <div className="w-[611px] p-8">
        <div className="h-full rounded-[32px] bg-white px-20 py-16">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
