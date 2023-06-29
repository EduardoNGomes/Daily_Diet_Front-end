import logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'
import { useCookies } from 'react-cookie'
interface ProfileProps {
  avatarUrl: string
  name: string
}

export const Profile = ({ avatarUrl, name }: ProfileProps) => {
  const [, , removeCookie] = useCookies(['token'])

  const navigate = useNavigate()

  const handleNavigateToUpdateProfile = () => {
    navigate('/user/edit')
  }
  const remove = () => {
    removeCookie('token')
    window.location.reload()
  }

  return (
    <header className="flex items-center justify-between">
      <img src={logo} alt="" />
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-end justify-end self-end text-sm">
          <p className="text-right font-bold text-gray-1">{name}</p>
          <button className="cursor-pointer bg-transparent" onClick={remove}>
            sair
          </button>
        </div>
        {avatarUrl && (
          <img
            src={`${api.defaults.baseURL}/users/avatar/${avatarUrl}`}
            alt=""
            className="h-14 w-14 cursor-pointer rounded-full border-2 border-gray-2 object-cover hover:brightness-110"
            onClick={handleNavigateToUpdateProfile}
          />
        )}
      </div>
    </header>
  )
}
