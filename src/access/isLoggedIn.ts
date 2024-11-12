import { Access } from "payload/config"
import { Users } from "../payload-types"

export const isLoggedIn: Access<any, Users> = ({ req: { user } }) => {
  return Boolean(user)
}
