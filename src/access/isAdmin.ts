import type { FieldAccess, Access } from "payload/types"

import { Users } from "../payload-types"

export const isAdmin: Access<any, Users> = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes("admin"))
}

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, Users> = ({
  req: { user },
}) => {
  return Boolean(user?.roles?.includes("admin"))
}
