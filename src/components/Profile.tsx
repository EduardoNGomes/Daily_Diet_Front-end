import logo from '../assets/Logo.svg'
import perfil from '../assets/perfil.jpg'
export const Profile = () => {
  return (
    <div className="flex items-center justify-between">
      <img src={logo} alt="" />
      <img
        src={perfil}
        alt=""
        className="w-fit object-cover h-10 rounded-full border-2 border-gray-2"
      />
    </div>
  )
}
