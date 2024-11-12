import { isAdmin, isAdminFieldLevel } from "../access/isAdmin"
import { isAdminOrSelf } from "../access/isAdminOrSelf"
import { CollectionConfig } from "payload/types"

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },

  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },

    {
      name: "roles",
      saveToJWT: true,
      type: "select",
      defaultValue: ["member"],

      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },

      options: [
        { label: "Admin", value: "admin" },
        { label: "Member", value: "member" },
      ],
    },

    {
      name: "catalog",
      type: "relationship",
      relationTo: "catalog",
      required: false,
      hidden: true,
    },
  ],
}

export default Users
