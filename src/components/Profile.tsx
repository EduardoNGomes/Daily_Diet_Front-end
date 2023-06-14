import logo from '../assets/Logo.svg'

interface ProfileProps {
  avatarUrl: string
}
export const Profile = ({ avatarUrl }: ProfileProps) => {
  return (
    <div className="flex items-center justify-between">
      <img src={logo} alt="" />
      <img
        src={avatarUrl}
        alt=""
        className="h-10 w-fit rounded-full border-2 border-gray-2 object-cover"
      />
    </div>
  )
}
