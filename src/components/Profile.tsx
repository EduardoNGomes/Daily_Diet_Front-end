import logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom'
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
      <img
        src={avatarUrl}
        alt=""
        className="h-10 w-fit rounded-full border-2 border-gray-2 object-cover"
        onClick={handleNavigateToUpdateProfile}
      />
    </header>
  )
}
