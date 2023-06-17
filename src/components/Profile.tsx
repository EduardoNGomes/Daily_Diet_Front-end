import logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'
interface ProfileProps {
  avatarUrl: string
}

export const Profile = ({ avatarUrl }: ProfileProps) => {
  const navigate = useNavigate()

  const handleNavigateToUpdateProfile = () => {
    navigate('/user/edit')
  }

  return (
    <header className="flex items-center justify-between">
      <img src={logo} alt="" />
      {avatarUrl && (
        <img
          src={`${api.defaults.baseURL}/users/avatar/${avatarUrl}`}
          alt=""
          className="h-14 w-14 rounded-full border-2 border-gray-2 object-cover"
          onClick={handleNavigateToUpdateProfile}
        />
      )}
    </header>
  )
}
