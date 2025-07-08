import { GiCapybara } from "react-icons/gi"
import "./LoadingSpinner.css"

export default function LoadingSpinner({ message = "Cargando..." }) {

  return (
    <div className="capybara-loader">
      <div className={`capybara-spin`}>
        <GiCapybara />
      </div>
      <div className="capybara-message">
        <p className={`capybara-text`}>{message}</p>
        <div className="capybara-dots">
          <div className="capybara-dot"></div>
          <div className="capybara-dot"></div>
          <div className="capybara-dot"></div>
        </div>
      </div>
    </div>
  )
}