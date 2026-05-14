import { RotateLoader } from 'react-spinners'
import './loader.css'

export default function Loader() {
  return (
    <div className="loader">
      <RotateLoader color="#0f3460" size={20} />
    </div>
  )
}
