import { Access } from "payload/config"

export const isAdminOrCreator: Access = ({ req: { user } }) => {
  if (user) {
    if (user.roles?.includes("admin")) {
      return true
    }

    return {
      createdBy: {
        equals: user.id,
      },
    }
  }

  return false
}
