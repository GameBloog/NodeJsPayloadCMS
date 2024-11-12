import { Access } from "payload/config"

import { Users } from "../payload-types"

export const isAdmin: Access<any, Users> = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes("admin"))
}
